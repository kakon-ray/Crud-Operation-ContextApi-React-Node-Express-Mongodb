import React, { useContext, useState } from "react";
import { userContext } from "../userContext/userContext";
import { Link, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function Create() {
  const [users, setUsers] = useContext(userContext);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [check, setCheck] = useState("");

  const updateId = (e) => {
    setId(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePosition = (e) => {
    setPosition(e.target.value);
  };

  const updateSalary = (e) => {
    setSalary(e.target.value);
  };

  const addUser = (e) => {
    e.preventDefault();

    setUsers([
      ...users,
      {
        id: id,
        name: name,
        position: position,
        salary: salary,
      },
    ]);

    const item = {
      id: id,
      name: name,
      position: position,
      salary: salary,
    };

    fetch("http://localhost:5000/item", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((res) => {
      console.log("success", item);
      alert("users added successfully!!!");
    });
  };

  const testAccout = () => {
    setCheck("Submit SuccessFull");
  };
  return (
    <div className="create">
      <Form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={updateId}
            placeholder="Enter ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={position}
            onChange={updatePosition}
            placeholder="Enter Position"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            value={salary}
            onChange={updateSalary}
            placeholder="Enter Salary"
          />
        </Form.Group>
        <Button
          className="action_btn m-3"
          variant="primary"
          type="submit"
          onClick={testAccout}
        >
          Create User
        </Button>
        <Link to="/">
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
          <p>{addUser ? check : "Submit Unsuccessfull"}</p>
        </Link>
      </Form>
    </div>
  );
}
