import React, { useState } from "react";
import { CardType1 } from "./fixedcomponents/card-type1-component";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaGlobe, FaSearch, FaLaptopCode } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiApollographql, SiOpenai } from "react-icons/si";

import cardData from "../api/skillSet.json";

export const Skills = () => {

    const iconMap = {
        html: <FaHtml5 />,
        css: <FaCss3Alt />,
        javascript: <FaJs />,
        react: <FaReact />,
        tailwind: <SiTailwindcss />,
        nodejs: <FaNodeJs />,
        expressjs: <SiExpress />,
        mongodb: <SiMongodb />,
        git: <FaGitAlt />,
        github: <FaGithub />,
        api: <SiApollographql />,
        "ai tools": <SiOpenai />,
        "web hosting": <FaGlobe />,
        seo: <FaSearch />,
        responsive: <FaLaptopCode />, 
        animejs: <p style={{fontSize: "x-large", fontWeight: "bold", fontFamily: "cursive", marginTop: "15px", marginBottom: "20px"}}>animejs</p>
    };


    const iconStyle = "text-[var(--primaryColor)] text-6xl rounded-md";


    const [lastSkillIndex, setLastSkillIndex] = useState("8");

    const visibleSkills = cardData.slice(0, lastSkillIndex);

    const handleMoreSkills = (e) => {
        e.preventDefault();
        if (visibleSkills.length <= 8) {
            setLastSkillIndex(cardData.length)
        }
        else {
            setLastSkillIndex("8")
        }
    }

    return (
        <section id="skills" className="bg-[var(--mediumlightBg)] !pt-10">
            <h2 className="self-start !px-10 !pt-15 !ml-10 text-3xl lg:text-4xl text-[var(--headingColor)] font-medium" >My Expertise</h2>

            {/* --------------------card container here----------------- */}

            <div className="flex justify-center flex-wrap gap-5 w-[100vw] !p-20">
                {visibleSkills.map((curElem) => {
                    return (
                        <CardType1
                            key={curElem.id}
                            containerStyle="!items-center justify-center h-fit w-[15rem] !p-2 bg-[var(--lightBackground)]"
                            headingStyle="!self-center text-center"
                            iconCode={React.cloneElement(iconMap[curElem.icon], { className: iconStyle })}
                            heading={curElem.heading}
                        />
                    )
                })}
                {cardData.length > 8 && <button className="!bg-[var(--primaryColor)] h-fit self-center" onClick={handleMoreSkills}>{visibleSkills.length <= 8 ? "View More..." : "View Less"}</button>}
            </div>
        </section>
    )
}