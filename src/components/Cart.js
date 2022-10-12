
import React, { useState } from 'react'
import { products } from "./Product";
import './CSS/style.css'
import Filters from "../components/Filters"
import CartItems from "../components/CartItems"
import Navbar from "../components/Navbar"
import Display from './Display'



const Cart = () => {

    const [item, setItem] = useState(products);
    const [category, setCategory] = useState('');
    const [size, setSize] = useState('');
    const [search, setSearch] = useState('');
    const [cartItems, setCartItems] = useState()




    console.log(category)
    const handleCategory = (e) => {
        setCategory(e.target.value)
        setSize("");
    }
    const handleSize = (e) => {
        setSize(e.target.value)
        setCategory("");
    }
    const handleSearch = (e) => {
        setSearch(e)
        setCategory("");
        setSize("");
    }
    console.log(search)


    const filterdata = products.filter((product) => {

        if (category !== "") {
            return product.category === category;
        }

      
        else if (size !== "") {
            return product.size === size;
        }
        else if (search !== "") {
            return product.name.toLowerCase().includes(search);
        }

        else {
            return product;
        }


    })




    const handleClear = () => {
        setItem([])
    }




    if (item.length === 0) {
        return (
            <>
                <Display />
            </>

        );
    }

    return (
        <>

            <Navbar />

            <section className="middlesection">
                <h1 className="heading">
                    Shopping Cart
                </h1>

                <Filters handleCategory={handleCategory} handleSearch={handleSearch} handleSize={handleSize} category={category} size={size} />

                <div className="cart-item1">


                    <CartItems filterdata={filterdata} />


                </div>

                <div className="total-cart">
                    <div className="sub-cart" style={{ position: "relative", bottom: "3.6rem", right: "7rem" }}>
                        <button className="btn_clear1" onClick={handleClear}>Clear Cart</button>
                    </div>
                </div>

            </section>
        </>

    )
}

export default Cart