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

export async function getStaticPaths() {
  const resp = await fetch("http://localhost:8000/api/v1/meetup/:id");
  const events = await resp.json();
  console.log(events);
  const paths =
    events.length > 0 &&
    events.map((evt) => ({
      params: { slug: evt.slug },
    }));

  console.log(paths);
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const resp = await fetch(
    `http://localhost:8000/api/v1/meetup/${context.slug}`
  );
  const events = await resp.json();

  return {
    props: { evt: events[0] },
    revalidate: 1,
  };
}
