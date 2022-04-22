import React, { useContext } from "react";
import { userContext, UserProvider } from "../userContext/userContext";
import { Table, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./Read.css";
import { Link } from "react-router-dom";

export default function Read() {
  const [users, setUsers] = useContext(userContext);
  const { id } = useParams();
  console.log(id);

  const user = users.filter((users) => users.id == id);
  console.log(user);
  return (
    <div className="redStyle">
      {user.map((users) => (
        <ul>
          <hr></hr>
          <h2>ID : {users.id}</h2>
          <hr></hr>
          <h2>Name : {users.name}</h2>
          <hr></hr>
          <h2>Position: {users.position}</h2>
          <hr></hr>
          <h2>Salary : {users.salary}</h2>
          <hr></hr>
        </ul>
      ))}
      <Link to="/">
        <Button variant="primary">Back To Home</Button>
      </Link>
    </div>
  );
}
