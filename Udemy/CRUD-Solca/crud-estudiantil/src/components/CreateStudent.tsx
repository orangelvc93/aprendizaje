import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CreateStudent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [validation, setValidation] = useState(false);

  const handleSumbit = (e: any) => {
    e.preventDefault();
    const studentData = { id, name, place, phone };
    fetch("http://localhost:8000/students", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        alert("Student dta saved successfully");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="container">
      <h2>Crear Estudiante</h2>
      <form onSubmit={handleSumbit}>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          required
          onChange={(e) => setId(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {id.length === 0 && validation && (
          <span className="errorMsg">Please Enter your id</span>
        )}

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {name.length === 0 && validation && (
          <span className="errorMsg">Please Enter your name</span>
        )}

        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          name="place"
          value={place}
          required
          onChange={(e) => setPlace(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {place.length === 0 && validation && (
          <span className="errorMsg">Please Enter your place</span>
        )}

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
          onMouseDown={() => setValidation(true)}
        />
        {phone.length === 0 && validation && (
          <span className="errorMsg">Please Enter your phone</span>
        )}

        <div>
          <button className="btn btn-primary">Save</button>
          <Link to="/" className="btn btn-danger">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};
