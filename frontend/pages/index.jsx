import Apphead from "../components/Apphead";
import MeetUpList from "../components/meetups/MeetupList";

const HomePage = ({ meetup }) => {
  return (
    <div>
      <Apphead
        title="All Meet Up"
        author="kyawzinthant"
        description="learning project with next and nodejs"
      />
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
