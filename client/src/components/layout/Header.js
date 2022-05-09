import React from 'react';

const coverPhoto = require('../../assets/cover_photo.jpg')

const Header = () => {
    return <div className="cover">
        <img src={coverPhoto} className="coverphoto" alt="cover_photo" />
        <div className="coverphototext">
            <span>HKR Student Life.com</span>
            <br />
            <form className="coverphotosearch">
                <input class="coverphotosearchinput" type="search" placeholder="Search..." />
            </form>
        </div>

    </div>;
};

export default Header;
