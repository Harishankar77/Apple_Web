import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [mainCursor, setMainCursor] = useState({ x: 0, y: 0 });
  const [trailingCursor, setTrailingCursor] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMainCursor({ x: clientX, y: clientY });

      setTimeout(() => {
        setTrailingCursor({ x: clientX, y: clientY });
      }, 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("a, button");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsHovered(true));
      el.addEventListener("mouseleave", () => setIsHovered(false));
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsHovered(true));
        el.removeEventListener("mouseleave", () => setIsHovered(false));
      });
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isHovered ? "hovered" : ""}`}
        style={{
          transform: `translate3d(${mainCursor.x}px, ${mainCursor.y}px, 0)`,
        }}
      />
      <div
        className="trailing-cursor"
        style={{
          transform: `translate3d(${trailingCursor.x}px, ${trailingCursor.y}px, 0)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
