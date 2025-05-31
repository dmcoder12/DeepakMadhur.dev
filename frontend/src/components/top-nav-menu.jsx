import { useState } from "react";
import { NavComponent } from "./fixedcomponents/nav-component";
import navstyle from "./MainNavbar.module.css"
import logoImg from "../assets/logo1.svg";
import { AnchorBtnComp } from "./fixedcomponents/anchor-btn-component";
import { IoCallOutline } from "react-icons/io5";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { ShowHideComp2 } from "./fixedcomponents/show-hide2-component"
import compStyles from "./fixedcomponents/OnlyStylesComponent.module.css"
import { GiHamburgerMenu } from "react-icons/gi";

export const TopNavMenu = () => {

    const [isDropDown, setIsDropDown] = useState(false);
    const [isDeepDropDown, setIsDeepDropDown] = useState(false);

    const handleDropIconToggle = () => {
        e.preventDefault();
        setIsDropDown((prev) => !prev);
    }

    return (
        <>
            <NavComponent
                logo={logoImg}
                logoAlt="DeepakMadhur.dev"
                wrapperClassName="!pl-5 bg-[var(--lightBackground)] h-20 !fixed top-0 z-100 drop-shadow-[1px_1px_5px_var(--darktertiaryColor)]"
                logoImgClassName={navstyle.MainLogo}
                navListClassName={`justify-end lg:justify-around gap-1 sm:gap-10 w-fit lg:w-[70vw] h-[80px] ${navstyle.NavBar}`}
            >
                <li><a href="#home" className="hidden lg:flex">Home</a></li>

                {/* Dropdown code here --------------------> */}

                <li className="hidden lg:flex flex items-center gap-2"><a href="#portfolio">Portfolio</a>
                    <ShowHideComp2 triggerEvent="hover" hidebackDelay="200" btnCode={
                        <RiArrowDropDownLine className="text-black transform scale-200" />
                    }>
                        <ul className={`w-50 top-8 right-[-120px] bg-[var(--lightBackground)] ${compStyles.Dropdown}`}>
                            <li><a href="#home">Dropdown 1</a></li>
                            <li><a href="#portfolio">Dropdown 2</a></li>

                            {/* Deep dropdown code here -----------------------> */}

                            <li className="flex items-center gap-2"><a href="#portfolio">Deep Dropdown</a>
                                <ShowHideComp2 triggerEvent="hover" hidebackDelay="200" btnCode={
                                    <RiArrowDropDownLine className="text-black transform scale-200" />
                                }>
                                    <ul className={`w-50 top-15 right-[-120px] bg-[var(--lightBackground)] ${compStyles.Dropdown}`}>
                                        <li><a href="#home">Dropdown 1</a></li>
                                        <li><a href="#portfolio">Dropdown 2</a></li>
                                        <li><a href="#about">Deep Dropdown 1</a></li>
                                        <li><a href="#testimonials">Dropdown 3</a></li>
                                    </ul>
                                </ShowHideComp2>
                            </li>
                            <li><a href="#testimonials">Dropdown 3</a></li>
                        </ul>
                    </ShowHideComp2>
                </li>


                <li><a href="#skills" className="hidden lg:flex">Skills</a></li>
                <li><a href="#about" className="hidden lg:flex">About Me</a></li>
                <li><a href="#testimonials" className="hidden lg:flex">Testimonials</a></li>
                <AnchorBtnComp href="#contact-us" className={`min-w-33 hidden sm:flex !p-3 h-10 border-2 border-solid border-[var(--primaryColor)] ${navstyle.ContactButton}`}>Contact Me <IoCallOutline /></AnchorBtnComp>

                {/* Hamburger Menu Here --------------------> */}
                <div className="z-10 flex lg:hidden">
                    <ShowHideComp2 triggerEvent="click" btnCode={
                        <GiHamburgerMenu className="!m-3 text-[var(--primaryColor)] text-3xl" />
                    }>
                        <NavComponent
                            wrapperClassName={`w-fit absolute top-25 right-[10px] !flex-col drop-shadow-[3px_3px_10px_var(--darktertiaryColor)] ${navstyle.NavbarWrapper}`}
                            navListClassName={`!flex-col text-2xl gap-15 !py-15 w-[80vw] bg-[var(--lightBackground)] ${navstyle.NavBar}`}
                        >
                            <li><a href="#home">Home</a></li>

                            {/* Hamburger Menu: Dropdown code here --------------------> */}

                            <li className="flex flex-col items-center gap-2 ">
                                <ShowHideComp2 triggerEvent="click" extralogicHandleShowHide={() => {
                                    setIsDropDown((prev) => !prev);
                                }} btnCode={
                                    <div className="flex gap-3 items-center">
                                        <a href="#portfolio">Portfolio</a>
                                        {!isDropDown ?
                                            (<RiArrowDropDownLine className="text-black transform scale-200" />) :
                                            (<RiArrowDropUpLine className="text-black transform scale-200" />)}
                                    </div>
                                }>
                                    <ul className={` top-20 right-[-190px] w-[70vw] !gap-15 !py-15 !my-5 !items-center bg-[var(--mediumlightBg)] ${compStyles.HamburgerDropdown}`}>
                                        <li><a href="#home">Dropdown 1</a></li>
                                        <li><a href="#portfolio">Dropdown 2</a></li>

                                        {/* Hamburger Menu: Deep dropdown code here -----------------------> */}

                                        <li className="flex flex-col items-center gap-2">
                                            <ShowHideComp2 triggerEvent="click" extralogicHandleShowHide={() => {
                                                setIsDeepDropDown((prev) => !prev);
                                            }} btnCode={
                                                <div className="flex gap-3 items-center">
                                                    <a href="#portfolio">Deep Dropdown</a>
                                                    {!isDeepDropDown ?
                                                        <RiArrowDropDownLine className="text-black transform scale-200" /> :
                                                        <RiArrowDropUpLine className="text-black transform scale-200" />}
                                                </div>
                                            }>
                                                <ul className={`top-20 right-[-135px] w-[60vw] !gap-15 !py-15 !my-5 !items-center bg-[var(--lightBackground)] ${compStyles.HamburgerDropdown}`}>
                                                    <li><a href="#home">Dropdown 1</a></li>
                                                    <li><a href="#portfolio">Dropdown 2</a></li>
                                                    <li><a href="#about">Deep Dropdown 1</a></li>
                                                    <li><a href="#testimonials">Dropdown 3</a></li>
                                                </ul>
                                            </ShowHideComp2>
                                        </li>
                                        <li><a href="#testimonials">Dropdown 3</a></li>
                                    </ul>
                                </ShowHideComp2>
                            </li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contact-us">Contact Me</a></li>
                        </NavComponent>
                    </ShowHideComp2>
                </div>

            </NavComponent>
        </>
    )
}