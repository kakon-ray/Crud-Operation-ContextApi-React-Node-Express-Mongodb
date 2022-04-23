/* eslint-disable no-unused-expressions */
import React, { useContext, useState, useEffect } from "react";
import { userContext } from "../userContext/userContext";
import { Link, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function Edit() {
  const [users, setUsers] = useContext(userContext);
  const [updateUser, setUpdateUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/item/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdateUser(data));
  }, []);

  const editUser = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const position = event.target.position.value;
    const salary = event.target.salary.value;

    const updateUser = { name, position, salary };

    // start this code is clint side first update ======================
    const editUser = [...users];
    for (let item of editUser) {
      if (item._id == id) {
        (item.name = name), (item.position = position), (item.salary = salary);
      }
      setUsers(editUser);
    }
    // end code is clint side first update ==============================

    // send to the server side update user
    const url = `http://localhost:5000/item/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);

        alert("users added successfully!!!");
      });
  };

  return (
    <div className="create">
      <Form onSubmit={editUser}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            defaultValue={updateUser.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="position"
            defaultValue={updateUser.position}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            defaultValue={updateUser.salary}
          />
        </Form.Group>
        <Button className="action_btn m-3" variant="primary" type="submit">
          Edit Now
        </Button>
        <Link to="/">
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
}
