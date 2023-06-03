import { Button } from '@mui/material'
import  React from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Base/base'


const Dashboard = ()=> {
  const history = useHistory();
    return(
        <Base
        tittle = "welcome to Students App"
        description ="Please click Below the Button"
        >
          <Button 
          variant = 'outlined'
          color='primary'
          onClick={()=>history.push("/register")}
          >
           Login
          </Button>
        </Base>
    )
}
export default Dashboard