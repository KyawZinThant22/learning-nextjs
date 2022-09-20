import classes from "./meetupDetails.module.css";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useState } from "react";
import NewMeetupForm from "./NewMeetupForm";
import Image from "next/image";

const MeetupDetails = (props) => {
  console.log(props);
  const router = useRouter();
  const [edit, setEdit] = useState(false);

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

  const handleEdit = async (path, body) => {
    const resp = await fetch(`http://localhost:8000/api/v1/meetup/${path}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      toast.error(data.status.message);
    } else {
      toast.success("🦄 Successfully Updated!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      router.back();
    }
  };
  return (
    <section className={classes.details}>
      {!edit ? (
        <>
          {/* <img src={props.img} alt={props.title} /> */}
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${props.img}`}
            alt={props.title}
            width={800}
            priority={true}
            height={500}
          />
          <h1>{props.title}</h1>
          <address>{props.address}</address>
          <p>{props.description}</p>

          <button onClick={() => setEdit(true)} className={classes.edit}>
            Edit
          </button>

          <button
            onClick={() => handleDelete(props.path)}
            className={classes.deleteBtn}
          >
            Delete
          </button>
        </>
      ) : (
        <NewMeetupForm data={props} handleEdit={handleEdit} />
      )}
    </section>
  );
};

export default MeetupDetails;
