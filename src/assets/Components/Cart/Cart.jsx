import PropTypes from 'prop-types'; 

const Cart = ({ courses, creditHour, totalPrice, remaining }) => {
    console.log(courses)
    return (
        <div className="w-1/4">
            <div className='bg-slate-200 rounded-lg p-2 mb-3'>
            <p className='text-xl font-semibold text-blue-500'>Credit Hour Remaining: {remaining}hr</p>
            </div>
            <div className='bg-slate-200 rounded-lg p-2'>
            <div className='my-4'>
            <h2 className="text-xl font-bold">Course Name</h2>
            {
                courses.map((courses, idx) => <li className="list-decimal font-semibold" key={idx}>{courses.title}</li>)

            }
            </div>
            <div className='my-6'>
            <p>Total Credit Hour: {creditHour}hr</p>
            </div>
            
            <p>Total Price: ${totalPrice} </p>
            </div>
            
            
        </div>
    );
};

Cart.proptypes ={
    courses:PropTypes.object,
    map:PropTypes.func,
    title:PropTypes.string
}
export default Cart;