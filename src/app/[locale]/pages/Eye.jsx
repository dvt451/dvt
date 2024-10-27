'use client'
import React, { useEffect, useRef, useState } from 'react';

export default function Eye() {
   const eyeLeft = useRef();
   const eyeRight = useRef();
   const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
   const eyeBrowLeft = useRef();
   const eyeBrowRight = useRef();
   const mouthRef = useRef(null)
   const eyeBlockRef = useRef(null)
   function calcAngle(element) {
      if (!element.current) return;
      
      if(window.innerWidth > 991){

         let elX = element.current.offsetLeft + element.current.clientWidth / 2;
         let elY = element.current.offsetTop + element.current.clientHeight / 2;
         
         var rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
         var rot = rad * (180 / Math.PI) * -1 + -18;
      }else{
         rot = 0
      }
  
      return rot;
    }



  

  const handleMouseMove = (event) => {
   // if(window.innerWidth > 991){
    setMouseCoordinates({ x: event.clientX, y: event.clientY });

    if (eyeBrowLeft.current && eyeBrowRight.current) {
      eyeBlockRef.current.style.transform = `translateY(${event.clientY / 100}px) translateX(${event.clientX / 100}px)`;
      eyeBrowLeft.current.style.transform = `translateY(${event.clientY / 50}px)`;
      eyeBrowRight.current.style.transform = `translateY(${event.clientY / 50}px)`;
      mouthRef.current.style.transform = `translateY(${event.clientY / 100}px)`;
    }
      //  }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
    <div className='eye-block'>
       <div ref={eyeBlockRef} className='eye-animation'>
             <div className="eye_container">
               <div
                 ref={eyeLeft}
                 style={{
                   transform: `rotate(${calcAngle(eyeLeft)}deg)`,
                 }}
                 className="eye"
               ></div>
               <div
                 ref={eyeRight}
                 style={{
                   transform: `rotate(${calcAngle(eyeRight)}deg)`,
                 }}
                 className="eye"
               ></div>
             </div>
       </div>
    </div>
       
    </>
  );
}
