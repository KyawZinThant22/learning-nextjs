import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

function MeetupItem(props) {
  const router = useRouter();

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${props.image}`}
            alt={props.title}
            width={800}
            height={500}
            priority={true}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <Link href={`/${props.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
