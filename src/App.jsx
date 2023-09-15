import { useState } from "react"
import Cart from "./assets/Components/Cart/Cart"
import Courses from "./assets/Components/Courses/Courses"
// import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [courses, setCourses] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [creditHour, setCreditHour] = useState(0);
  const [remaining, setRemaining] = useState(20)

  const handleSelectButton =(course)=>{
    console.log(course.id)
    const isExist = courses.find(item => item.id == course.id)
    // console.log(isExist)
    // let count = 0
    if(isExist){
      toast('You have taken this already')
    }
    else{
      const newTotalPrice = totalPrice + course.price;
      const newCreditHour = creditHour + course.credit_hours;
      const newRemaining = remaining - course.credit_hours;

      if(newCreditHour <= 20){
        return ( 
          setCreditHour(newCreditHour),
          setCourses([...courses, course]),
          setRemaining(newRemaining)
        )
      }else{
        toast("You can't take more than 20 Credit.")
      }

      
      setTotalPrice(newTotalPrice)
      
    
    }
  }


  return (
    <>

      <h1 className="text-3xl font-bold text-center p-8">Course Registration</h1>
      <div className="max-w-6xl m-auto flex gap-4">
        <Courses handleSelectButton={handleSelectButton}></Courses>
        <Cart courses={courses} creditHour={creditHour} totalPrice={totalPrice} remaining={remaining}></Cart>
      </div>
      <ToastContainer></ToastContainer>

    </>
  )
}

export default App
