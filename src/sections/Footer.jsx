import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div content="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer logo" height={46} width={150} />
          </a>
          <p className="text-white-400 mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-5 mt-8 items-center">
            {socialMedia.map((icon) => (
              <div className="bg-white flex justify-center items-center w-12 h-12 rounded-full cursor-pointer">
                <img src={icon.src} alt={icon.alt} height={24} width={24} />
              </div>
            ))}
          </div>
        </div>
        {/* // Next Col  */}
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-5">
          {footerLinks.map((link) => (
            <div key={link.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {link.title}
              </h4>
              <ul>
                {link.links.map((child_link) => (
                  <li
                    className="text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-slate-gray"
                    key={child_link.link}
                  >
                    {child_link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:text-center">
        <p>
          <span className="h-20 w-20">&copy;</span> Copyright. All rights
          reserved
        </p>
        <p className="font-montserrat cursor-pointer">Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
