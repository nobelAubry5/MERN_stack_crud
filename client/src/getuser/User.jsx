import React, { useEffect, useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaPenToSquare } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import "./user.css";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="userTable">
      <button type="button" class="btn btn-primary">
        Ajouter un utilisateur <FaUserPlus />
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Nom</th>
            <th scope="col">Courriel</th>
            <th scope="col">Adresse</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email} </td>
                <td>{user.address}</td>
                <td className="actionsButtons">
                  <button type="button" class="btn btn-warning">
                    <FaPenToSquare />
                  </button>{" "}
                  <button type="button" class="btn btn-danger">
                    <BsFillTrash3Fill />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
