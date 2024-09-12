import { useEffect } from "react";
import Navbar from "@components/portfolio/Navbar";
import Intro from "@components/portfolio/Intro";
import Journey from "@components/portfolio/Journey";
import Portfolio from "@components/portfolio/Portfolio";
import Contact from "@components/portfolio/Contact";
import FooterNote from "@components/ui/FooterNote";

function PortfolioApp({ theme, setTheme }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className='bg-stone-100 dark:bg-gray-900 text-stone-900 dark:text-stone-100 w-full px-4 py-2 font-portfolioFont'>
      <Navbar themeSwitcher={handleThemeSwitch} theme={theme} />
      <Intro />
      <Journey />
      <hr
        id='projects'
        className='h-px my-16 w-9/12 bg-gray-600 border-0 mx-auto'
      />
      <Portfolio />
      <hr
        id='contact'
        className='h-px my-16 w-9/12 bg-gray-600 border-0 mx-auto'
      />
      <Contact />
      <FooterNote className='text-sm font-light text-gray-500' />
    </div>
  );
}

export default PortfolioApp;
