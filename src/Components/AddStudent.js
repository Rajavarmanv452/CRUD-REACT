import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/base";
import * as yup from "yup"

export const studentValidationSchema = yup.object({
    name: yup.string().required("Please fill the Name"),
    batch:yup.string().required("Please Fill the Batch").min(5,"Fill the Proper batch name"),
    gender:yup.string().required("please specify Your Gender"),
    education:yup.string().required("it is not bad tell your education")
})

const AddStudent = ({studentData,setStudents})=>{
    const history = useHistory();
    // const [id,setId]= useState("")
    const [name,setName]= useState("")
    const [batch,setBatch]= useState("")
    const [experience,setExperience]= useState("")
    const [gender,setGender]= useState("")
    // const [showAdd,setShowAdd] = useState(true)

    // create a new data
    const addNewStudent = async ()=> {
        const newStudent = {name,batch,gender,experience}
        try {
            const response = await fetch (`https://6497ab149543ce0f49e15313.mockapi.io/students`,
            {method:"POST",
             body:JSON.stringify(newStudent),
             headers:{"Content-Type":"application/json"},
        })
        const data = await response.json()

        setStudents([...studentData,data])
        // setId("")
        setName("")
        setBatch("")
        setExperience("")
        setGender("")
        //add panathum page ku redirect aaga 
        history.push("/students")

        } catch (error) {
            console.log(error)
        }
       }

    return(
      <Base
        tittle="Add a Student"
        description="You can add a Student Data">

        <div className="input-section">
           {/* <TextField 
           fullWidth label="Enter the Id" 
           onChange={(event)=>setId(event.target.value)}
           value={id}
           id="fullwidth"/> */}

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