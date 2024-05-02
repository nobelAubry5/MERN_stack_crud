import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaPenToSquare } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import "./user.css";
const User = () => {
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
          <tr>
            <td>1</td>
            <td>John</td>
            <td>john@gmail.com</td>
            <td>Québec, Canada</td>
            <td className="actionsButtons">
              <button type="button" class="btn btn-warning">
                <FaPenToSquare />
              </button>{" "}
              <button type="button" class="btn btn-danger">
                <BsFillTrash3Fill />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
