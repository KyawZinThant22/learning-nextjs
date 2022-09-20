import MeetupDetails from "../../components/meetups/MeetupDetails";
import { useRouter } from "next/router";

const DetailsMeetUp = ({ meetup }) => {
  return (
    <MeetupDetails
      img={meetup?.image}
      title={meetup?.title}
      address={meetup?.address}
      description={meetup?.description}
      path={meetup?._id.toString()}
    />
  );
};

export default DetailsMeetUp;

export const getStaticPaths = async () => {
  const resp = await fetch("http://localhost:8000/api/v1/meetup");
  const { data } = await resp.json();

  const paths = data.meetup.map((e) => {
    return {
      params: { id: e._id.toString() },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export async function getStaticProps({ params }) {
  const resp = await fetch(`http://localhost:8000/api/v1/meetup/${params.id}`);
  const { data } = await resp.json();

  return {
    props: { meetup: data.meetup },
    revalidate: 1,
  };
}
