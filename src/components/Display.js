import React from 'react'
import "./style.css";
import Navbar from "../components/Navbar"

const Display = () => {
  return (
    <>
 <Navbar/>
            <section className="mainsection" >
                <h1>
                    Shopping Cart
                </h1>
                <p className="total">You Have <span className="total-item">0</span> items in shopping cart</p>
                </section>
    </>
  );
}

export default Display
