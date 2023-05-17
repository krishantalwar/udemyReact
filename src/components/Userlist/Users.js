import Userlist from "./Userlist";
export default function Users(props) {
  // console.log(props);
  return (
    <div className="userlist">
      <Userlist delete={props.delete} users={props.users} />
    </div>
  );
}
