//example to import as: 
{/* <NavComponent
  logo={logoImg}
  logoAlt="DeepakMadhur.dev"
  wrapperClassName="!pl-5 bg-[var(--lightBackground)] h-20 !fixed top-0 z-100 drop-shadow-[1px_1px_5px_var(--darktertiaryColor)]"
  logoImgClassName={navstyle.MainLogo}
  navListClassName={`justify-end lg:justify-around gap-1 sm:gap-10 w-fit lg:w-[70vw] h-[80px] ${navstyle.NavBar}`}
> list of links or button comes here in children</NavComponent> */}

export const NavComponent = ({
  logo,
  logoAlt = "",
  logoText = "",
  children,
  wrapperClassName = "",
  logoWrapperClassName = "",
  logoImgClassName = "",
  logoTextClassName = "",
  navListClassName = "",
}) => {

  return (
    <div className={`flex items-center justify-around w-screen ${wrapperClassName}`}>
      {(logo || logoText) && <a href="#home" style={{ cursor: "pointer" }} className={`flex items-center gap-1 ${logoWrapperClassName}`}>
        {logo && <img src={logo} alt={logoAlt} className={logoImgClassName} />}
        <h1 className={logoTextClassName}>{logoText}</h1>
      </a>}

      <nav>
        <ul className={`flex flex-row list-none justify-around items-center ${navListClassName}`}>
          {children}
        </ul>
      </nav>
    </div>
  );
};
