import MeetUpList from "../components/meetups/MeetupList";
const MEETUP_LIST = [
  {
    id: "m1",
    title: "A first meet up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/West_side_of_Manhattan_from_Hudson_Commons_%2895103p%29.jpg/1920px-West_side_of_Manhattan_from_Hudson_Commons_%2895103p%29.jpg",
    address: "Some address",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "A second meet up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/West_side_of_Manhattan_from_Hudson_Commons_%2895103p%29.jpg/1920px-West_side_of_Manhattan_from_Hudson_Commons_%2895103p%29.jpg",
    address: "Some address",
    description: "This is second meetup",
  },
];

const HomePage = () => {
  return (
    <div>
      <MeetUpList meetups={MEETUP_LIST} />
    </div>
  );
};

export default HomePage;
