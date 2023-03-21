import { useState, useEffect } from "react";
import LandingPage from "../LandingPage";
import AboutUs from "../../components/AboutUs";
import OurTeam from "../../components/OurTeam";

function WebPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastScrollPosition, setLastScrollPosition] = useState({ x: 0, y: 0 });
  const [pageCount, setPageCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  useEffect(() => {
    function handleScroll() {
      //console.log("firstload")
      const scrollLeft = window.scrollX;
      const scrollTop = window.scrollY;
      if (
        scrollPosition > scrollLeft ||
        (scrollPosition === scrollLeft && scrollTop < lastScrollPosition.y)
      ) {
        pageCount !== 0 && setPageCount(pageCount - 1);
      } else if (
        scrollPosition < scrollLeft ||
        (scrollPosition === scrollLeft && scrollTop > lastScrollPosition.y)
      ) {
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
      style={{ width: "200vw", height: "200vh", overflowX: "hidden" }}
    >
      <p className="stick text-danger">scroll value: {scrollPosition} scroll Top: {lastScrollPosition.y}</p>
      <div
        className="page"
        id="landingPage"
        style={{ display: pageCount === 0 ? "block" : "none" }}
      >
        <LandingPage />
      </div>
      <div
        className="page"
        id="aboutusPage"
        style={{ display: pageCount === 1 ? "block" : "none" }}
      >
        <AboutUs />
      </div>
      <div
        className="page"
        id="aboutusPage"
        style={{ display: pageCount === 2 ? "block" : "none" }}
      >
        <OurTeam />
      </div>
    </div>
  );
}

export default WebPage;
