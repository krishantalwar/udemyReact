import classes from "./Userlist.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

export default function Userlist(props) {
  //   console.log(props);
  function deletHandle(event) {
    // console.log(event);
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.id);
    props.delete(event.currentTarget.id);
  }
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li onClick={deletHandle} id={user.id} key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

//    <div className="paddding">
//    <div onClick={deletHandle} id={props.id}>
//    {props.name} ({props.age} Years old)
//</div>
//</div>;
