import MeetUpList from "../components/meetups/MeetupList";

const HomePage = ({ meetup }) => {
  return (
    <div>
      <MeetUpList meetups={meetup} />
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const meetup = await fetch("http://localhost:8000/api/v1/meetup");
  const { data } = await meetup.json();
  return {
    props: {
      meetup: data.meetup,
    },
    revalidate: 2,
  };
};
