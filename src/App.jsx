import { useState } from "react"
import Cart from "./assets/Components/Cart/Cart"
import Courses from "./assets/Components/Courses/Courses"

function App() {
  const [courses, setCourses] = useState([]);

  const handleSelectButton =(course)=>{
    // console.log('selcet clicked', course)
    const newCourses = [...courses, course]
    setCourses(newCourses)
  }

  return (
    <>

      <h1 className="text-3xl font-bold text-center p-8">Course Registration</h1>
      <div className="max-w-6xl m-auto flex gap-4">
        <Courses handleSelectButton={handleSelectButton}></Courses>
        <Cart courses={courses}></Cart>
      </div>

    </>
  )
}

export default App
