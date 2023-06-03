import { Button, FormControl, FormLabel, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/base";
import { authdata } from "../Data/authData";




const AuthPage = () => {

 const [auth,setAuth] = useState(authdata);
  const [loginName,setLoginName] = useState("");
  const[password,setPassword] = useState("")
   const [error,setError]=useState(false)
   const history = useHistory()

 const loginUser = ()=>{
  if(loginName === auth[0].name && password === auth[0].password){
    localStorage.setItem("user-name",loginName)
         setError(false)
         history.push("/students")
  }else{
        setError(true)
  }
 }

    return(
        <Base
        tittle='Please login or Signup'
        description='Authentication Page'
        >
        <div className="login-page">


          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              onChange = {(e)=>setLoginName(e.target.value)}
              value={loginName}
            />
          </FormControl>{"  "}
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
              onChange = {(e)=>setPassword(e.target.value)}
              value={password}
            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }}
          onClick={loginUser}
          >Log in</Button>

     {error ? 
           <Typography>
            Invalid User
           </Typography>
        : ""}

        </div>
        </Base>
    )
}
export default AuthPage

//2.13