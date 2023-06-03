import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/base";


const AddStudent = ({studentData,setStudents})=>{
    const history = useHistory();
    const [id,setId]= useState("")
    const [name,setName]= useState("")
    const [batch,setBatch]= useState("")
    const [experience,setExperience]= useState("")
    const [gender,setGender]= useState("")
    // const [showAdd,setShowAdd] = useState(true)

    // create a new data
    const addNewStudent = ()=> {
        const newStudent = {id,name,batch,gender,experience}
        
        setStudents([...studentData,newStudent])
        setId("")
        setName("")
        setBatch("")
        setExperience("")
        setGender("")
        //add panathum page ku redirect aaga 
        history.push("/students")
       }

    return(
      <Base
        tittle="Add a Student"
        description="You can add a Student Data">

        <div className="input-section">
           <TextField 
           fullWidth label="Enter the Id" 
           onChange={(event)=>setId(event.target.value)}
           value={id}
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
           color="success"
           onClick={addNewStudent}
        >
            Add Data</Button>
        {/* //    :""} */}
       </div>
        </Base>
    )
}

export default AddStudent