import React from 'react'
import {socialImgs} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer py-6">
            <div className="footer-container flex flex-col md:flex-row justify-between items-center gap-4 px-4">

                {/* Left Text */}
                <div className="text-sm text-center md:text-left">
                    <a href="/" className="text-blue-200">Visit my other sites.</a>
                </div>

                {/* Social Icons - GitHub + LinkedIn side by side */}
                <div className="flex items-center gap-4">
                    {socialImgs.map((img) => (
                        <a
                            className="icon"
                            target="_blank"
                            href={img.url}
                            key={img.url}
                            rel="noopener noreferrer"
                        >
                            <img
                                src={img.imgPath}
                                alt="social-icon"
                                className="w-8 h-8 hover:scale-110 transition-transform"
                            />
                        </a>
                    ))}
                </div>

                {/* Right Text */}
                <div className="text-sm text-center md:text-right text-blue-200">
                    😎 Feel free to contact for work
                </div>
            </div>
        </footer>
    );
};

export default Footer
