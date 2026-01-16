import React from 'react'
import { useSelector } from 'react-redux'

const UserDetail = () => {
    const {user:{name, age, address, email, image}} = useSelector((state)=>state.UserSlice)
  return (
    <>
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col-md-8 overflow-hidden p-4 d-flex flex-column position-static" style={{maxHeight:"210px"}}>
          <strong className="d-inline-block mb-2 text-primary-emphasis">
           Name : {name}
          </strong>
          <strong className="mb-0">Email : {email}</strong>
          <div className="mb-1 text-body-secondary">Age : {age}</div>
          <p className="card-text overflow-hidden mb-auto">
           Address : {address}
          </p>
        </div>
        <div className="col-md-4 text-center ">
          <img
            src={image}
            alt=""
            className="img-fluid h-75 mt-3 rounded round"
          />
        </div>
      </div>
    </>
  )
}

export default UserDetail
