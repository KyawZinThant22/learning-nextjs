import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const handleNewMeetup = (newMeetUp) => {
    console.log(newMeetUp);
  };
  return (
    <div>
      <NewMeetupForm onAddMeetup={handleNewMeetup} />
    </div>
  );
};

export default NewMeetup;
