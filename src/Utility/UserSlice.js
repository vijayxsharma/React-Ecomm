/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllUser = createAsyncThunk("getAllUser", async ()=>{
    try {
        const res = await axios.get("https://6904ce736b8dabde49653645.mockapi.io/user10am/10am");
        return res.data
    } catch (error) {
        
    }
})

//Add user
export const addUser = createAsyncThunk("addUser", async (user)=>{
    let res = await axios.post("https://6904ce736b8dabde49653645.mockapi.io/user10am/10am",user)
    return res.data;
})

// get SingleUser
export const getSingleUser = createAsyncThunk("getSingleUser",async(id)=>{
    let singleUser = await axios.get(`https://6904ce736b8dabde49653645.mockapi.io/user10am/10am/${id}`)
    return singleUser.data
})

// Edit User
export const editUser = createAsyncThunk("editUser", async(user)=>{
let updatedUser = await axios.put(`https://6904ce736b8dabde49653645.mockapi.io/user10am/10am/${user.id}`,user)
return updatedUser.data;
})

// Delete User
export const deleteUser = createAsyncThunk("deleteUser", async(id)=>{
    await axios.delete(`https://6904ce736b8dabde49653645.mockapi.io/user10am/10am/${id}`)
    return id;
})

const UserSlice = createSlice({
    name:"userSlice",
    initialState:{
        is_User:false,
        userList:[],
        isLoading:false,
        show:false,
        user:{
          name:"",
          age:"",
          email:"",
          address:"",
          contact:"",
          image:""
        },
        emptyUser:{
          name:"",
          age:"",
          email:"",
          address:"",
          contact:"",
          image:""
        },
        checkFormType:"Add"
    },
    reducers:{
        openModalForm:(state,action)=>{
            state.user=state.emptyUser
            state.show=action.payload.show;
            state.checkFormType=action.payload.formType;
        },
        handleForm:(state,action)=>{
            state.user={...state.user,...action.payload}
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllUser.pending,(state,action)=>{
            state.isLoading = true;
            state.userList = [];
        }).addCase(getAllUser.rejected, (state, action)=>{
            state.isLoading=true;
            state.userList=[];
        }).addCase(getAllUser.fulfilled,(state,action)=>{
            state.isLoading = false
            state.userList = action.payload
        }).addCase(addUser.fulfilled,(state,action)=>{
            state.userList=[...state.userList,action.payload]
            state.show=false;
            state.is_User=true;
        }).addCase(getSingleUser.fulfilled,(state,action)=>{
            state.user = action.payload
        }).addCase(editUser.fulfilled,(state,action)=>{
           let ind = state.userList.findIndex((elm)=>elm.id==action.payload.id)
            state.userList[ind] = action.payload
        }).addCase(deleteUser.fulfilled, (state,action)=>{
          let afterDelete = state.userList.filter((elm)=>elm.id!=action.payload)
          state.userList = afterDelete
        })
    }
})
export const {openModalForm, handleForm} = UserSlice.actions
export default UserSlice.reducer