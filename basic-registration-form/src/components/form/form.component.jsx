import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [isFirstNameValid, setFirstNameValid] = useState(true);
  const [isLastNameValid, setLastNameValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);

  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // IF EVERYTHING IS OKAY
    if (
      isFirstNameValid === true &&
      isLastNameValid === true &&
      isEmailValid === true
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
    // IF SOME IS NOT VALID
    if (firstName === "") {
      setFirstNameValid(false);
    } else {
      setFirstNameValid(true);
    }
    if (lastName === "") {
      setLastNameValid(false);
    } else {
      setLastNameValid(true);
    }
    if (email === "") {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };
  console.log(show);
  return (
    <div className="form-container">
      <p className="form-title">Brand</p>
      <p className={show === true ? "message" : "d-none"}>Success!</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            className="form-input"
            type="text"
            placeholder="Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <small
            className={isFirstNameValid === true ? "d-none" : "form-val-msg"}
          >
            First Name must not be empty
          </small>
        </div>
        <div className="input-group">
          <input
            className="form-input"
            type="text"
            placeholder="Surname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <small
            className={isLastNameValid === true ? "d-none" : "form-val-msg"}
          >
            Last Name must not be empty
          </small>
        </div>
        <div className="input-group">
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small className={isEmailValid === true ? "d-none" : "form-val-msg"}>
            Email must not be empty
          </small>
        </div>
        <button className="form-btn">Register</button>
      </form>
    </div>
  );
};

export default Form;
