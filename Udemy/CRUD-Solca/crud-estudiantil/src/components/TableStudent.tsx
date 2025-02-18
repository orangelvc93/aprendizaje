import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  place: string;
  phone: string;
}

export const TableStudent = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const navigate = useNavigate();

  const DisplayDetails = (id: any) => {
    navigate("/student/view/" + id);
  };

  const EditDetails = (id: any) => {
    navigate("/student/edit/" + id);
  };

  useEffect(() => {
    return () => {
      fetch("http://localhost:8000/students")
        .then((res) => res.json())
        .then((data) => setStudents(data))
        .catch((err) => console.log(err.message));
    };
  }, []);

  return (
    <div className="container">
      <h2>tabla de estudiantes</h2>
      <Link to={"/student/create"} className="btn btn-add">
        Agregar estudiante
      </Link>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Place</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students &&
              students.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.place}</td>
                  <td>{item.phone}</td>
                  <td>
                    <button
                      onClick={() => DisplayDetails(item.id)}
                      className="btn btn-info"
                    >
                      View
                    </button>
                    <button
                      onClick={() => EditDetails(item.id)}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                    <a href="" className="btn btn-danger">
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
