import React, { useContext, useState, useEffect } from "react";
import { userContext } from "../userContext/userContext";
import { Link, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function Edit() {
  const [users, setUsers] = useContext(userContext);
  const { id } = useParams();
  const user = users.filter((users) => users.id == id);

  const [userId, setId] = useState(user[0].id);
  const [name, setName] = useState(user[0].name);
  const [position, setPosition] = useState(user[0].position);
  const [salary, setSalary] = useState(user[0].salary);
  const [check, setCheck] = useState("");

  useEffect(() => {
    const newId = id;
    user[0].id = newId;
  }, [id]);

  useEffect(() => {
    const newName = name;
    user[0].name = newName;
  }, [name]);

  useEffect(() => {
    const newPosition = position;
    user[0].position = newPosition;
  }, [position]);

  useEffect(() => {
    const newSalary = salary;
    user[0].salary = newSalary;
  }, [salary]);

  const editUser = (e) => {
    e.preventDefault();
    setUsers([...users]);
  };

  const testAccout = (e) => {
    e.preventDefault();
    setCheck("Submit SuccessFull");
  };

  return (
    <div className="create">
      <Form>
        <Form.Group>
          <Form.Label>ID</Form.Label>

          <Form.Control
            type="text"
            name="id"
            value={userId}
            onChange={(e) => setId(e.target.value)}
            placeholder={id}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={user[0].name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder={user[0].position}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder={user[0].salary}
          />
        </Form.Group>
        <Button
          className="action_btn m-3"
          variant="primary"
          type="submit"
          onClick={testAccout}
          onSubmit={() => editUser}
        >
          Edit Now
        </Button>
        <Link to="/">
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
          <p>{editUser ? check : "Submit Unsuccessfull"}</p>
        </Link>
      </Form>
    </div>
  );
}
