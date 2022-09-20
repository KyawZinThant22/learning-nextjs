import { useEffect, useState } from "react";
import Apphead from "../Apphead";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm({ data, handleEdit, onAddMeetup }) {
  const [form, setForm] = useState({
    title: "",
    image: "",
    address: "",
    description: "",
  });

  function submitHandler(event) {
    event.preventDefault();
    onAddMeetup(form);
  }

  if (data) {
    useEffect(() => {
      setForm({
        title: data.title,
        image: data.img,
        address: data.address,
        description: data.description,
      });
    }, [data]);
  }

  const editHandler = () => {
    handleEdit(data.path, form);
  };

  return (
    <>
      <Apphead title={data ? "Edit meetup" : "Create New Meetup"} />
      <Card>
        <form
          className={classes.form}
          onSubmit={!data ? submitHandler : editHandler}
        >
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input
              type="text"
              required
              id="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input
              type="url"
              required
              id="image"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              required
              id="address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              required
              rows="5"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>{data ? "Edit" : "New Meetup"}</button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default NewMeetupForm;
