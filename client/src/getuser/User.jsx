import React, { useEffect, useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaPenToSquare } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import "./user.css";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

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
  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/user/${userId}`)
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
        toast.success(response.data.message, { position: "top-right" });
      })
      .catch((error) => {
        console.log("Error while deleting user", error);
      });
  };

  return (
    <div className="userTable">
      <Link to="/add" type="button" class="btn btn-primary">
        Ajouter un utilisateur <FaUserPlus />
      </Link>

      {users.length === 0 ? (
        <div className="noData">
          <h3>Pas de données</h3>
          <p>Ajouter un utilisateur</p>
        </div>
      ) : (
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
                    <Link
                      to={`/update/` + user._id}
                      type="button"
                      class="btn btn-warning"
                    >
                      <FaPenToSquare />
                    </Link>{" "}
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => deleteUser(user._id)}
                    >
                      <BsFillTrash3Fill />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default User;
