import { Fragment } from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const DetailsMeetUp = () => {
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
