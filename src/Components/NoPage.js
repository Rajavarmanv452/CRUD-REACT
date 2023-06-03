import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/base";

const NoPage = () =>{
    const history= useHistory();
    return(
        <Base
          tittle="You Lost is your way"
          description="Please the link to go Home"
        >
          <Button
          color="primary"
          variant="contained"
          onClick={()=>history.push("/dashboard")}
          >Home</Button>
        </Base>
    )
}
export default NoPage