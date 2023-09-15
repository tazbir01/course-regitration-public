
const Course = ({ course }) => {
    const { credit_hours, description, id, img, price, title } = course;

    return (
        <div className="w-80 bg-slate-200 rounded-xl">
            <div className="flex justify-center mt-3">
            <img src={img} alt="" />
            </div>
            <div className="p-5">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="py-3">{description.slice(0,50)+'... read more'}</p>
                <div className="flex justify-between mb-3">
                    <p>Price: ${price}</p>
                    <p>Credit: {credit_hours}hr</p>
                </div>
                <button className="bg-blue-500 text-white font-semibold rounded-lg w-full p-2">Select</button>
            </div>
        </div>
    );
};

export default Course;