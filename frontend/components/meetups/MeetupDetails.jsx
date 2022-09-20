import classes from "./meetupDetails.module.css";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const MeetupDetails = (props) => {
  const router = useRouter();
  const handleDelete = async (path) => {
    const data = await fetch(`http://localhost:8000/api/v1/meetup/${path}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    });

    if (!data.ok) {
      toast.error(data.status.message);
    } else {
      toast.success("🦄 Successfully Deleted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      router.push("/");
    }
  };
  return (
    <section className={classes.details}>
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>

      <button
        onClick={() => handleDelete(props.path)}
        className={classes.deleteBtn}
      >
        Delete
      </button>
    </section>
  );
};

export default MeetupDetails;
