import { FooterComp01 } from "./fixedcomponents/footer01-component"
import { DarkMode } from "./fixedcomponents/darkmode-toggle-component"
import { Copyright } from "./fixedcomponents/copyright-component"

export const Footer = () => {

    return (
        <>
            <div className="bg-[var(--lightBackground)] flex flex-col gap-5 items-center">
                <FooterComp01 containerStyle="bg-[var(--lightBackground)]" />
                <DarkMode />
                <Copyright
                    containerStyle="bg-[var(--secondaryColor)] text-[var(--headingColor)]"
                    orgName={
                        <>
                            <span className="text-[var(--primaryColor)]">DeepakMadhur.dev</span>
                        </>}
                    designedBy={
                        <>
                            <a href="#home" className="text-[var(--accentColor2)]">DeepakMadhur</a>
                        </>
                    }
                />
            </div>
        </>
    )
}
