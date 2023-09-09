import "./styles.css";
import React, { Component, useState } from "react";
class App extends Component {
  render() {
    const onSubmit = (userName) => console.log(userName);
    return <UserForm onSubmit={onSubmit} />;
  }
}

const UserForm = ({ onSubmit }) => {
  const [userName, setUserName] = useState("");
  return (
    <Form
      onSubmit={(event) => {
        onSubmit(userName);
        event.preventDefault();
      }}
    >
      <InputLabel type="text" value={userName} onChange={setUserName}>
        YourName:
      </InputLabel>
      <Button type="submit">Save</Button>
    </Form>
  );
};

const Form = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

const InputLabel = ({ type, value, onChange, children }) => {
  return (
    <label>
      {children}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
};

const Button = ({ type, onClick, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default App;
