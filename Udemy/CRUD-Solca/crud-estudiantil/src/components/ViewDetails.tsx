import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  place: string;
  phone: string;
}

export const ViewDetails = () => {
  const { studentid } = useParams<{ studentid: string }>();
  const [studentData, setStudentData] = useState<Student | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8000/students/${studentid}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching student details");
        }
        return res.json();
      })
      .then((data) => setStudentData(data))
      .catch((err) => setError(err.message));
  }, [studentid]);

  return (
    <div className="container">
      <h1>Student Details</h1>

      {error ? (
        <p className="error">{error}</p>
      ) : studentData ? (
        <div className="details">
          <p>
            <strong>ID: </strong>
            {studentData.id}
          </p>
          <p>
            <strong>Name: </strong>
            {studentData.name}
          </p>
          <p>
            <strong>Place: </strong>
            {studentData.place}
          </p>
          <p>
            <strong>Phone: </strong>
            {studentData.phone}
          </p>
        </div>
      ) : (
        <p>Loading student details...</p>
      )}

      <Link to="/" className="btn btn-danger">
        Back
      </Link>
    </div>
  );
};
