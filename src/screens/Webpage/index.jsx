import { useState, useEffect } from "react";
import LandingPage from "../LandingPage";
import AboutUs from "../../components/AboutUs";

function WebPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollPosition, setLastScrollPosition] = useState({ x: 0, y: 0 });
  const [pageCount, setPageCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollLeft = window.scrollX;
      if (scrollPosition > scrollLeft) {
        setPageCount(pageCount - 1);
      } else if (scrollPosition < scrollLeft) {
        setPageCount(pageCount + 1);
      }
      setScrollPosition(scrollLeft);
      setLastScrollPosition({ x: scrollLeft, y: window.scrollY });
      setPrevCount(pageCount);
    }

    const debouncedHandleScroll = debounce(handleScroll, 100);

    function debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          timeout = null;
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [pageCount, scrollPosition]);

  return (
    <div
      className="fullPage bg-black "
      style={{ width: "200vw", height: "100vh", overflowX: "hidden" }}
    >
      <p className="stick text-danger">scroll value: {scrollPosition}</p>
      <div className="page" id="landingPage" style={{ display: pageCount === 0 ? "block" : "none" }}>
        <LandingPage />
      </div>
      <div className="page" id="aboutusPage" style={{ display: pageCount === 1 ? "block" : "none" }}>
        <AboutUs />
      </div>
    </div>
  );
}

export default WebPage;
