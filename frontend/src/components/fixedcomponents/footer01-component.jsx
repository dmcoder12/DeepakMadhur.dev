import { NavComponent } from "./nav-component"
import navstyle from "../MainNavbar.module.css"
import logoImg from "../../assets/logo1.svg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const FooterComp01 = ({ containerStyle = "" }) => {


    return (
        <>
            <div className={`w-[70vw] flex flex-wrap gap-10 justify-around !pt-5 !pb-2 ${containerStyle}`}>
                <NavComponent
                    wrapperClassName="!w-fit bg-[var(--lightBackground)]"
                    navListClassName={` !px-5 gap-2 items-start !flex-col w-fit text-[var(--headingColor)] ${navstyle.NavBar}`}
                >
                    <li>Useful Links: </li>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#skills">Expertise</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#contact-us">Contact</a></li>
                </NavComponent>
                <NavComponent
                    logo={logoImg}
                    logoAlt="DeepakMadhur.dev"
                    logoImgClassName={navstyle.MainLogo}
                    wrapperClassName="!w-fit flex flex-col gap-5 bg-[var(--lightBackground)]"
                    navListClassName={`!flex-col !px-5 gap-2 w-fit text-[var(--headingColor)] ${navstyle.NavBar}`}
                >
                    <li><a href="#contact-us">Leave a message</a></li>
                    <li className="flex gap-2 items-center">Connect with me:
                        <a href="https://instagram.com/reflectandexplore/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href="https://linkedin.com/in/deepakmadhur12/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a href="https://github.com/dmcoder12/" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl" />
                        </a>
                    </li>
                </NavComponent>
            </div>
        </>
    )
}