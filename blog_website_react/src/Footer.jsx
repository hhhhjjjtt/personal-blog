import React from 'react';
import './Footer.css'; // Importing CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
