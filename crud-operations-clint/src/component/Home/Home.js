import React, { useContext } from "react";
import "../Home/Home.css";
import { Button, Table } from "react-bootstrap";
import { userContext } from "../userContext/userContext";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useContext(userContext);

  return (
    <div>
      <div className="mainbutton">
        <Link to="/creat">
          <Button variant="primary">Create User</Button>
        </Link>
      </div>

      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users) => (
              <tr>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.position}</td>
                <td>{users.salary}</td>
                <td>
                  <Link to={"/read/" + users.id}>
                    <Button className="btn_primary" variant="primary">
                      Red
                    </Button>
                  </Link>
                  <Link to={"/edit/" + users.id}>
                    <Button className="btn_primary" variant="success">
                      Edit
                    </Button>
                  </Link>
                  <Link to={"/delete/" + users.id}>
                    <Button className="btn_secondary" variant="danger">
                      Delete
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
