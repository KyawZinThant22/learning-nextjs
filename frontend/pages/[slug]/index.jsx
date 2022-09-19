import { Fragment } from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const DetailsMeetUp = ({ meetup }) => {
  console.log(meetup);
  return (
    <MeetupDetails
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/West_side_of_Manhattan_from_Hudson_Commons_%2895103p%29.jpg/1920px-West_side_of_Manhattan_from_Hudson_Commons_%2895103p%29.jpg"
      title="A first meet up"
      address="some address"
      description="a frit meet up"
    />
  );
};

export default DetailsMeetUp;

export const getStaticPaths = async () => {
  const data = await fetch("http://localhost:8000/api/v1/meetup");
  const meetups = await data.json();
  const paths = meetups?.map((event) => ({
    params: { slug: event.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const data = await fetch(
    `http://localhost:8000/api/v1/meetup/slug=${context.params.slug}`
  );
  const meetup = await data.json();

  return {
    props: {
      meetup,
    },
    revalidate: 1,
  };
};
