import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Lore from './components/Lore';
import Trinity from './components/Trinity';
import War from './components/War';
import Howto from './components/Howto';
import CustomCursor from './components/CustomCursor';
import Angels from './pages/Angels';
import Alpacas from './pages/Alpacas';
import Bears from './pages/Bears';


function App() {

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



  const Background = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);




    return (
      <>

        <div className="relative background dcursor-none" style={{ backgroundPositionY: `${-scrollPosition / 2}px` }}
          onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
          <div className='fixedd w-full flex'>
            {isHovering && (
              <div className="rounded-full fixed custom-cursor flex items-center align-middle justify-center animate-spin z-50" style={{ left: cursorXY.x - 25, top: cursorXY.y - 25 }}>
                {/* <div className="bg-red-600 w-32 h-32 rounded-full "></div> */}
              </div>
            )}
          </div>



          {/* Render CustomCursor component */}
          <CustomCursor />

          <Home />
          <Lore />
          <Trinity />
          <War />
          <Howto />
          {/* <Bears />
          <Angels />
          <Alpacas /> */}
        </div>

      </>
    );
  }

  return <Background />;
}

export default App;
