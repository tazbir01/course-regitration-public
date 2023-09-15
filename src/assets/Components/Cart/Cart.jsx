

const Cart = ({ courses }) => {
    console.log(courses)
    return (
        <div className="w-1/4">
            <p>Credit Hour Remaining:</p>
            <h2 className="text-xl font-bold">Course Name</h2>
            {
                courses.map((courses, idx) => <li className="list-decimal" key={idx}>{courses.title}</li>)

            }
            <hr />
            <p>Total Credit Hour:</p>
            <hr />
            <p>Total Price: </p>
        </div>
    );
};

export default Cart;