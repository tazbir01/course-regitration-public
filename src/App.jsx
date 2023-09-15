import { useState } from "react"
import Cart from "./assets/Components/Cart/Cart"
import Courses from "./assets/Components/Courses/Courses"
// import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [courses, setCourses] = useState([]);

  const handleSelectButton =(course)=>{
    console.log(course.id)
    
    const isExist = courses.find(item => item.id == course.id)
    // console.log(isExist)

    if(isExist){
      // return alert('ekta barbar dite parbe na')
      toast('You have taken this already')
    }
    else{
      const newCourses = [...courses, course]
    setCourses(newCourses)
    }
  }

  return (
    <>

      <h1 className="text-3xl font-bold text-center p-8">Course Registration</h1>
      <div className="max-w-6xl m-auto flex gap-4">
        <Courses handleSelectButton={handleSelectButton}></Courses>
        <Cart courses={courses}></Cart>
      </div>
      <ToastContainer></ToastContainer>

    </>
  )
}

export default App
