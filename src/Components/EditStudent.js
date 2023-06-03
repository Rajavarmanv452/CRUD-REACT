import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Base from "../Base/base";


const Editstudent = ({studentData,setStudents})=>{
    const history= useHistory()
    const {id} = useParams();
    const [editId,setEditId]=useState("")
    const [idx,setIdx]= useState("")
    const [name,setName]= useState("")
    const [batch,setBatch]= useState("")
    const [experience,setExperience]= useState("")
    const [gender,setGender]= useState("")

    const student = studentData[id]
     // initial mouting 
     useEffect(()=>{
          setEditId(student.id)
          setIdx(student.idx)
          setName(student.name)
          setBatch(student.batch)
          setExperience(student.experience)
          setGender(student.gender)
     },[student.batch, student.experience, student.gender, student.id, student.idx,  student.name])





    const updateStudentData = ()=>{

        // select and find our student
          const editStudentIndex = studentData.findIndex((stud)=>stud.id === editId)
  
        //we nee update object
          const updateObj = {
            id,
            name,
            batch,
            gender,
            experience
          }
          //change the updated object in specific data
          studentData[editStudentIndex]=updateObj;
          //set the student data
          setStudents([...studentData])
          setIdx("")
          setName("")
          setBatch("")
          setExperience("")
          setGender("")
          history.push("/students")
       }
  
  

    return(
        <Base
        tittle="Edit a Student"
        description="You can edit a Student Data">

        <div className="input-section">
           <TextField
           fullWidth label="Enter the Id" 
           onChange={(event)=>setIdx(event.target.value)}
           value={idx}
           id="fullwidth"/>

           <TextField 
           fullWidth label="Enter the Name" 
           onChange={(event)=>setName(event.target.value)}
           value={name}
           id="fullwidth"/>

           <TextField 
           fullWidth label="Enter the Batch" 
           onChange={(event)=>setBatch(event.target.value)}
           value={batch}
           id="fullwidth"/>

           <TextField 
           fullWidth label="Enter the Gender" 
           onChange={(event)=>setGender(event.target.value)}
           value={gender}
           id="fullwidth"/>

           <TextField 
           fullWidth label="Enter the Experience" 
           onChange={(event)=>setExperience(event.target.value)}
           value={experience}
           id="fullwidth"/>
          {/* {showAdd ? */}
          <Button 
           variant="contained" 
           color="secondary"
           onClick={updateStudentData}>
            Update Data</Button>
        {/* //    :""} */}
       </div>
        </Base>
    )
}
export default Editstudent