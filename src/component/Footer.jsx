import React from 'react';

const Footer = ({footerText}) => {
    return (
        <div>
            <h3>{footerText}</h3>
            <footer className='quote'>Quote: "The only way to do great work is to love what you do." - Steve Jobs</footer>
        </div>
    );
};

export default Footer;