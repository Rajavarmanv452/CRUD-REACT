
import { useState } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
// import Base from './Base/base';
import AddStudent from './Components/AddStudent';
import AuthPage from './Components/AuthPage';
import Dashboard from './Components/Dashboard';
import Editstudent from './Components/EditStudent';
import NoPage from './Components/NoPage';
import { StudentDetails } from './Components/Student';
import StudentProfile from './Components/StudentProfile';
import WelcomePage from './Components/WelcomePage';
import { data } from './Data/data';


function App() {

  const [studentData,setStudents]= useState(data)

  return (
    <div className="App">
      <Switch>

         <Route exact path="/">
             <WelcomePage/>
         </Route>

         <Route path="/dashboard">
          <Dashboard/>
         </Route>

         <Route path="/register">
         <AuthPage/>
         </Route>

         <Route path="/students">
         <StudentDetails studentData={studentData} setStudents={setStudents}/>
         </Route>

         {/* Redirect endpoints */}

         <Route path="/details"> 
          <Redirect to = "/students"/>
         </Route>

         <Route path="/student/:id">
          <StudentProfile studentData={studentData}/>
         </Route>

         <Route path="/add-data">
           <AddStudent studentData={studentData} setStudents={setStudents} />
         </Route>

         <Route path="/edit/:id">
          <Editstudent studentData={studentData} setStudents={setStudents}/>
         </Route>

         <Route path="**">
          <NoPage/>
         </Route>



      </Switch>
    </div>
  );
}

export default App;


//2.06

// <StudentDetails/>
// </Base>
// <Dashboard/>
// <AuthPage/>
// <NoPage/>