import React, { useEffect, useState } from 'react'
import { Arrow } from '../../utils/icons';

const BackToTop = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    if (!show) return null;
    return (
        <div>
            <button
                onClick={handleBackToTop}
                aria-label="Back to top"
                className="!fixed border border-white flex justify-center items-center rotate-[-90deg] bottom-8  right-8 size-[50px] text-xl z-[9] purple text-white rounded-full  cursor-pointer transition-all hover:scale-110 duration-300 ease-linear">
                <Arrow />
            </button>
        </div>
    )
}

export default BackToTop