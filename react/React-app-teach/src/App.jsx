import { useState } from "react";

import "./App.css";
import { Count } from "./components/Count";
import { Test } from "./components/Test";
import Profile from "./components/Profile";
import Form from "./components/Form";
import { AppRoutes } from "./routes/Routes";
import { UserProvider } from "./contexts/UserContext";
import HomePage from "./components/HomePage";
import { useCounter } from "./hooks/useCounter";
import StudentProfile from "./components/StudentProfile";

function App() {
  const [user,setUser]=useState({name:'joy',role:'admin',email:"joysharon@email.com"})

 const countVales=useCounter(0,2)



 
  return (
    <>
      <UserProvider>
        <AppRoutes/>
   
      {/* <Test /> */}
      </UserProvider>
      
  
      {/* <Form/> */}
    </>
  );
}

export default App;
