import { useEffect, useRef, useState } from "react";

function useHandleScroll() {
  const [showCartIcon, setShowCartIcon] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerPosition =
          footerRef.current.getBoundingClientRect().top + window.scrollY; // Obtener la posición del footer en relación al documento completo
        const scrollPosition =
          document.documentElement.scrollTop + window.innerHeight; // La posición de scroll más la altura de la ventana
        setShowCartIcon(
          scrollPosition < footerPosition &&
            document.documentElement.scrollTop > 100
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Ejecuta el scroll al montar el componente
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return { showCartIcon, footerRef };
}
export default useHandleScroll;
