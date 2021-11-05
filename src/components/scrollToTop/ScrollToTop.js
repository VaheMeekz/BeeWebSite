import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop} className="scrollToTop">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-caret-up" viewBox="0 0 16 16">
                        <path
                            d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg"width="20" height="20" fill="currentColor"
                         className="bi bi-caret-up" viewBox="0 0 16 16">
                        <path
                            d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-caret-up" viewBox="0 0 16 16">
                        <path
                            d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
                    </svg>
                </div>
            )}
        </div>
    );
}
