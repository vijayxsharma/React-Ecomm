import React, { useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaReadme } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUser, getSingleUser, openModalForm } from "../Utility/UserSlice.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.UserSlice);
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  const handleEditBtn = (id)=>{
    dispatch(getSingleUser(id))
    dispatch(openModalForm({ show:true, formType: "Edit"}))
  }

  const handleRead=(id)=>{
    dispatch(getSingleUser(id))
    dispatch(openModalForm({ show:true, formType: "Read"}))
  }

  return (
    <div className="container">
      <table className="table align-middle text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            {/* <th scope="col">Contact</th> */}
            <th scope="col">Photo</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((elm) => {
            const { name, age, email, address, image, id, } = elm;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{age}</td>
                <td>{email}</td>
                <td>{address}</td>
                {/* <td>{contact}</td> */}
                <td>
                  <img className="w-25" src={image} alt="" />
                </td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-success rounded"
                      onClick={()=>handleEditBtn(id)}
                      // onClick={()=>dispatch(openModalForm({show:true, formType:"Edit"}))}
                    >
                      <CiEdit />
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger mx-2 rounded"
                      onClick={()=>dispatch(deleteUser(id))}
                    >
                      <MdDelete />
                    </button>
                    <button type="button" className="btn btn-warning rounded"
                    onClick={()=>handleRead(id)}
                    >
                      <FaReadme />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
