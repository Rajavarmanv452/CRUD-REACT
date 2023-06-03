import React from "react";
import { useParams } from "react-router-dom";
import Base from "../Base/base";


const StudentProfile = ({studentData})=>{
    const {id}= useParams();
     const student = studentData[id]
    return(
        <Base tittle="Student Profile"
               description="Individual Student Details"
               >
                
                <div>
                    <h2>Student-Profile</h2>
                    <p>Student-Name:{student.name}</p>
                    <p>Gender:{student.gender}</p>
                    <p>Batch:{student.batch}</p>
                    <p>Experience:{student.experience}</p>
                </div>

        </Base>
    )
}

export default StudentProfile