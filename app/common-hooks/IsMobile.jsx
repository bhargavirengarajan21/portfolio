"use client"; // Ensure this is at the top of your component files using this hook
import { useEffect, useState } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") { 
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 560);
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return { isMobile };
};

export default useMobile;
