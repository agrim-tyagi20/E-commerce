import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';

const CartItems = ({filterdata}) => {
    return (
        <>
            <div className="cart-item-containers">
                <div className="cart_title">
                    <div>
                        <h2>Image</h2>
                    </div>
                    <div>
                        <h2>Name</h2>
                    </div>
                    <div>
                        <h2>Color</h2>
                    </div>
                    <div>
                        <h2>Price</h2>
                    </div>
                    <div>
                        <h2>Stock</h2>
                    </div>
                    <div>
                        <h2>Buy</h2>
                    </div>



                </div>
                <Scrollbars>

                    {
                        filterdata.map((curElem) => {


                            return <>
                                <div className="items-info1" key={curElem.id}>
                                    <div className="product-img1">
                                        <img src={curElem.img} alt="img1" />
                                    </div>
                                    <div className="title">
                                        <h2>{curElem.name}</h2>

                                    </div>
                                    <div className="add-minus-quantity">
                                        <h2>{curElem.color}</h2>
                                    </div>

                                    <div className="price">
                                        <h3>{curElem.price}</h3>
                                    </div>
                                    <div className="remove-item">


                                        <h2 style={{ color: "#008000bd" }}>
                                            <span style={{ fontSize: "2rem", marginRight: "1rem" }}><i className="fa-sharp fa-solid fa-face-smile"></i></span>{curElem.stock}</h2>
                                    </div>

                                    <div>
                                        <span><i className="fa-solid fa-cart-shopping" ></i></span>
                                    </div>
                                </div>
                                <hr className="hr1" />
                            </>

                        })
                    }




                </Scrollbars>
            </div>
        </>
    )
}

export default CartItems
