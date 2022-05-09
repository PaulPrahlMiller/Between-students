import React from 'react';

const accountIcon = require('../../assets/account_icon.jpg')

const Navbar = () => {
    const pathname = window.location.href.split("/").pop();

    return <div className="topnav">
        <a className={pathname === '' && "active"} href="/">Home</a>

        <a className={pathname === "books" && "active"} href="/books">Books</a>
        <a className={pathname === "furnitures" && "active"} href="/furnitures">Furnitures</a>
        <a className={pathname === "clothes" && "active"} href="/clothes">Clothes</a>
        <a className={pathname === "decorations" && "active"} href="/decorations">Decorations</a>

        <a className={pathname === "about" && "active"} href="/about">About</a>

        <div className="accountnav">
            <a className={pathname === "account" && "active"} href="/account">
                <img src={accountIcon} className="accounticon" alt="account_icon" />
            </a>
        </div>
    </div>;
};

export default Navbar;
