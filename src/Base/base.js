import { AppBar, Button, Toolbar } from "@mui/material"
import React from "react"
import { useHistory } from "react-router-dom"


function Base ({tittle,description,children}){
    // react navigator
    const history = useHistory();

    const logout = ()=>{
        localStorage.removeItem("user-name")
        history.push("/dashboard")
    }

    return(
        <div className="main-division">
                <AppBar position="static">
                 <Toolbar variant="dense">
                     <Button color="inherit" onClick={()=>history.push("/dashboard")}>Dashboard</Button>
                     <Button color="inherit" onClick={()=>history.push("/students")}>Student list</Button>
                     <Button color="inherit" onClick={()=>history.push("/register")}>Login</Button>
                     <Button color="inherit" onClick={()=>history.push("/add-data")}>Add Data</Button>
                     <Button color="inherit" onClick={logout}>Log out</Button>
                  </Toolbar>
              </AppBar>
 
            <header>
                <h1 className="heading">{tittle}</h1>
            </header>

            <main className="main-segment">
                <h2>{description}</h2>


                <div className="child-segment">
                    {children}
                </div>
            </main>
        </div>
    )
}
export default Base