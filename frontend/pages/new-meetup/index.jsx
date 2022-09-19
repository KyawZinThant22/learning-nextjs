import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";

const NewMeetup = () => {
  const router = useRouter();
  const handleNewMeetup = async (newMeetUp) => {
    console.log(newMeetUp);

    const data = await fetch("http://localhost:8000/api/v1/meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMeetUp),
    });

    if (!data.ok) {
      toast.error(data.status.message);
    } else {
      toast.success("Success ");
      router.push(`/`);
    }
  };
  return (
    <div>
      <NewMeetupForm onAddMeetup={handleNewMeetup} />
    </div>
  );
};

export default NewMeetup;
