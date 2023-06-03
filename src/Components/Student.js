import React, { useEffect, useState } from "react";
import { data } from "../Data/data";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";
import Base from "../Base/base";
import { useHistory } from "react-router-dom";


export function StudentDetails({studentData,setStudents}){
         const history=useHistory();

             useEffect(()=>{
             if(! localStorage.getItem("user-name")){
                  history.replace("/register")
             }
             },[])

//       //setting the states
       
//        const [editId,setEditId]=useState("")
//        const [id,setId]= useState("")
//        const [name,setName]= useState("")
//        const [batch,setBatch]= useState("")
//        const [experience,setExperience]= useState("")
//        const [gender,setGender]= useState("")
//        const [showUpdate,setShowUpdate]= useState(false)
//        const [showAdd,setShowAdd] = useState(true)
//        const history = useHistory();
// // create a new data
//        const addNewStudent = ()=> {
//         const newStudent = {id,name,batch,gender,experience}
        
//         setStudents([...studentData,newStudent])
//         setId("")
//         setName("")
//         setBatch("")
//         setExperience("")
//         setGender("")
//        }
     //Delete a new data
     const deleteStudentData = (studID)=>{
          const selectedStudent = studentData.filter((stud)=> stud.id !== studID)
       setStudents(selectedStudent);
     }  

    //  //update functionality

    //  const editAndSelectStudent = (idx)=>{

    //    setShowAdd(false)
    //    setShowUpdate(true)
    //    setEditId(idx)
    //     const selectedData = studentData.find(stud => stud.id === idx)
    //       setId(selectedData.id)
    //       setName(selectedData.name)
    //       setBatch(selectedData.batch)
    //       setGender(selectedData.gender)
    //       setExperience(selectedData.experience)
    //  }

    //  const updateStudentData = ()=>{

    //   // select and find our student
    //     const editStudentIndex = studentData.findIndex((stud)=>stud.id === editId)

    //   //we nee update object
    //     const updateObj = {
    //       id,
    //       name,
    //       batch,
    //       gender,
    //       experience
    //     }
    //     //change the updated object in specific data
    //     studentData[editStudentIndex]=updateObj;
    //     //set the student data
    //     setStudents([...studentData])
    //     setId("")
    //     setName("")
    //     setBatch("")
    //     setExperience("")
    //     setGender("")
    //     setShowAdd(!showAdd)
    //     setShowUpdate(!showUpdate)
    //  }




    return(
      <Base
      tittle="Batch Details"
      description="All student details"
      >
       <div className="containers">
       {/* <div className="input-section">
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
          {showAdd ?
           <Button 
           variant="contained" 
           color="success"
           onClick={addNewStudent}>
            Add Data</Button>
           :""}
           {showUpdate ?
            <Button 
           variant="contained" 
           color="secondary"
           onClick={updateStudentData}>
            Update Data</Button>
            : ""}
       </div> */}
        <div className="card-container">
                {studentData.map((stud,id)=>(

                 <Card sx={{ maxWidth: 345 }} key = {id} className="card">
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                     Name : {stud.name}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     Batch : {stud.batch}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     Gender : {stud.gender}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     Experience : {stud.experience}
                   </Typography> 
                 </CardContent>
                    <Button onClick={()=>history.push(`/edit/${id}`)}  color="success">Edit</Button>
                    <Button onClick={()=>deleteStudentData(stud.id)}  color="error">Delete</Button>
                    <Button onClick={()=>history.push(`/student/${id}`)}>View Student</Button>
                 </Card> 

                ))}
          </div>
      </div>
      </Base>
    )
}


// 2.03time

