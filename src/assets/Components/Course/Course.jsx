import PropTypes from 'prop-types'; 
const Course = ({ course, handleSelectButton }) => {
    const { credit_hours, description,img, price, title } = course;

    return (
        <div className=" bg-slate-200 rounded-xl">
            <div className="flex justify-center ">
            <img className='p-2' src={img} alt="" />
            </div>
            <div className="p-5">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="py-3">{description.slice(0,40)+'.... read more'}</p>
                <div className="flex justify-between mb-3">
                    <p>Price: ${price}</p>
                    <p>Credit: {credit_hours}hr</p>
                </div>
                <div>
                <button onClick={()=>handleSelectButton(course)} className="bg-blue-500 text-white font-semibold rounded-lg w-full p-2">Select</button>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handleSelectButton:PropTypes.array

}
export default Course;