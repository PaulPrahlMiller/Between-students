import React from 'react';
import useProducts from '../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';
//import { log } from 'signale';

const accountIcon = require('../../assets/account_icon.jpg')

const Navbar = () => {
    const pathname = window.location.href.split("/").pop();
    const [ProductState, productDispatch] = useProducts();
    const navigate = useNavigate();
    const handleClick = (e) => {
        console.log(e.target.innerText)
        navigate(`/categories/${e.target.innerText}`);
    }
    return <div className="topnav">
        <a className={pathname === '' && "active"} href="/">Home</a>

        <div className="subnav" onClick={handleClick}>
            <button className="subnavbtn">Categories</button>
            <div className="subnav-content">
                {ProductState.categories.map((cat) => {
                    return (
                        <option value={cat} key={cat.id}>
                            {cat}
                        </option>
                    );
                })}

            </div>
        </div>
        <a className={pathname === "about" && "active"} href="/about">About Us</a>
        <div className="accountnav">
            <a className={pathname === "account" && "active"} href="/account">
                <img src={accountIcon} className="accounticon" alt="account_icon" />
            </a>
        </div>
    </div>;
};


export default Navbar;
