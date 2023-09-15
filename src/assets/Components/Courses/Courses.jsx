import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch("./courses.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div>
            <h2>Total Courses: {courses.length}</h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    courses.map(courses => <Course key={courses.id} course={courses}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;