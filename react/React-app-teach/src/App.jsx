import { useState } from 'react'

import './App.css'
import { Count } from './components/Count'
import { Test } from './components/Test'
import Profile from './components/Profile'
import Form from './components/Form'


const skills=["react","javascript","node","mongodb","express","postgresql"]
function App() {
const [count,setCount]=useState(0)
const [show,setShow]=useState(false)

// if(show){
//  return(<div>

//   <Profile firstName={"joy"} lastName={"sharon"} count={count} increment={()=>{
//       setCount(count+1)
//     }}/>

//      <input type='checkbox' onChange={(e)=>{

//       setShow(e.target.checked)
//       console.log(e.target.checked,"checked")
//     }}/>
    
//  </div> 
//   )
// }

// else{
//   return (
//     <div>
//       <div>No Profile Shown</div>

//     <input type='checkbox' onChange={(e)=>{

//       setShow(e.target.checked)
//       console.log(e.target.checked,"checked")
//     }}/>
    
//     </div>
//   )
// }


// function test (){

// }

const test =()=>{

}
  return (  
    <>

   
    <Form/>
    </>
  )
}

export default App
