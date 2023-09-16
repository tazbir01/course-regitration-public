import PropTypes from 'prop-types'; 
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleSelectButton}) => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch("./courses.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="w-3/4">
            {/* <h2>Total Courses: {courses.length}</h2> */}
            <div className="grid grid-cols-3 gap-4">
                {
                    courses.map(courses => <Course 
                        key={courses.id} 
                        course={courses}
                        handleSelectButton={handleSelectButton}
                        
                        ></Course>)
                }
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleSelectButton: PropTypes.func
}
export default Courses;