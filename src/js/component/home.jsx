import React from "react";

//create your first component
const Home = (props) => {
	let digits = [props.digit5, props.digit4, props.digit3, props.digit2, props.digit1, props.digit0]

	const digits_screen = digits.map((item)=>
	<div className="text-light ms-2 ps-2 pe-2" style={{fontSize: "50px", background: "#182C61", borderRadius:"10px"}}>{item}</div>)

	return (
		<main className="bg-dark p-5">
            <div className="container-fluid d-flex justify-content-center">
                {/* <p className="text-light ms-3">0</p> */}
				<div className="text-light me-1 ps-2 pe-2" style={{fontSize: "50px", background: "#182C61", borderRadius:"10px"}}><i className="far fa-clock"></i></div>
				{digits_screen}
            </div>
        </main>
	);
};

export default Home;
