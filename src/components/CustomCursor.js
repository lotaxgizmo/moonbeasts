import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [cursorXY, setCursorXY] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // Function to handle mouse movement
    const handleMouseMove = (e) => {
        setCursorXY({ x: e.clientX, y: e.clientY });
    };

    // Function to handle mouse enter
    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    // Function to handle mouse leave
    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            className="container z-0 fixed w-full h-full flex items-center align-middle justify-center"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Render custom cursor */}
            {isHovering && (
                <div className="custom-cursor flex items-center align-middle justify-center animate-spin z-50" style={{ left: cursorXY.x - 25, top: cursorXY.y - 25 }}>

                </div>
            )}
        </div>
    );
};

export default CustomCursor;
