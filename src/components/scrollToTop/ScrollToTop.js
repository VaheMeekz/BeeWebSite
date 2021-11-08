import React, {useEffect, useState} from "react";
import scroll from "../../assets/images/scroll.svg"

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
        <div className="scrollToTopBox">
            <div className="scroll-to-top">
                {isVisible && (
                    <div onClick={scrollToTop} className="scrollToTop">
                      <img src={scroll} alt={"scroll"}/>
                    </div>
                )}
            </div>
        </div>
    );
}
