import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser, handleForm, openModalForm } from "../Utility/UserSlice.js";
import UserDetail from "./UserDetail.jsx";
const ModalForm = () => {
  const dispatch = useDispatch();
  const { show, user,checkFormType } = useSelector((state) => state.UserSlice);
  const { name, email, age, address, image, } = user;
  const handleModalBtn = ()=>{
    if(checkFormType=="Add"){
      dispatch(addUser(user))
    } else if(checkFormType=="Edit"){ 
      dispatch(editUser(user))
    }
    dispatch(openModalForm({show:false, formType:""}))
  }
  return (
    <>
      <Modal show={show} onHide={() => dispatch(openModalForm(false))}>
        <Modal.Header closeButton>
          <Modal.Title>{checkFormType} User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {checkFormType=="Read" ? (<UserDetail/>):
          (
            <form action="">
            <div className="form-floating mb-3">
              <input
                type="Email"
                className="form-control"
                id="floatingInputEmail"
                placeholder="name@example.com"
                name="email"
                value={email}
                onChange={(e) =>
                  dispatch(handleForm({ [e.target.name]: e.target.value }))
                }
              />
              <label htmlFor="floatingInputEmail">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="Name"
                className="form-control"
                id="floatingInputName"
                placeholder="name@example.com"
                name="name"
                value={name}
                onChange={(e) =>
                  dispatch(handleForm({ [e.target.name]: e.target.value }))
                }
              />
              <label htmlFor="floatingInputName">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="Age"
                className="form-control"
                id="floatingInputAge"
                placeholder="name@example.com"
                name="age"
                value={age}
                onChange={(e) =>
                  dispatch(handleForm({ [e.target.name]: e.target.value }))
                }
              />
              <label htmlFor="floatingInputAge">Age</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="Address"
                className="form-control"
                id="floatingInputAddress"
                placeholder="name@example.com"
                name="address"
                value={address}
                onChange={(e) =>
                  dispatch(handleForm({ [e.target.name]: e.target.value }))
                }
              />
              <label htmlFor="floatingInputAddress">Address</label>
            </div>
            {/* <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputContact"
                placeholder="name@example.com"
                name="contact"
                value={contact}
                onChange={(e) =>
                  dispatch(handleForm({ [e.target.name]: e.target.value }))
                }
              />
              <label htmlFor="floatingInputContact">Contact</label>
            </div> */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputImage"
                placeholder="name@example.com"
                name="image"
                value={image}
                onChange={(e) =>
                  dispatch(handleForm({ [e.target.name]: e.target.value }))
                }
              />
              <label htmlFor="floatingInputImage">Image</label>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-success px-3"
                // onClick={() => dispatch(addUser(user))}
                onClick={handleModalBtn}
              >
                {checkFormType=="Add"?"SignUp":"Edit"}
              </button>
            </div>
          </form>
          )
          }
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalForm;
