import { useEffect, useState } from "react";
import { hamburger } from "../assets/icons";
import headerLogo from "../assets/images/header-logo.svg";
import { navLinks } from "../constants/index";
const Nav = () => {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    let handleScroll = () => {
      setScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`absolutes fixed top-0 w-full z-10 py-8 padding-x  ${
        isScrolled ? "shadow-lg bg-white" : ""
      }`}
    >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center max-container gap-16 max-lg:hidden">
          {navLinks.map((e) => (
            <li key={e.label}>
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray"
                href={e.href}
              >
                {e.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="justify-center items-center gap-1 max-lg:hidden">
          <button>SignUp</button> / <button>Login</button>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hambuger" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
