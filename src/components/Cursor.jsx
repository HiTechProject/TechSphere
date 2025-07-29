import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Cursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    React.useEffect(() => {
        const move = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    useGSAP(() => {
        gsap.to(".cursor", {
            x: pos.x,
            y: pos.y,
            ease: "power3",
        });
    }, [pos]);

    return (
        <div
            className="cursor w-[2rem] h-[2rem] bg-[#443f3f] rounded-full fixed top-0 left-0 pointer-events-none mix-blend-difference z-[10]"
            style={{
                transform: 'translate(-50%, -50%)',
                border: '1px solid white',
            }}
        />
    );
};

export default Cursor;