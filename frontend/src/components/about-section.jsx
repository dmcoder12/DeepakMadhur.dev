import myPic2 from "../assets/imgs/mypic2.png"
import { FaGlobe, FaRegLightbulb, FaWrench, FaRegCompass, FaUserFriends } from "react-icons/fa";
import { GoMilestone } from "react-icons/go";
import { AnchorBtnComp } from "./fixedcomponents/anchor-btn-component";
import { Article1 } from "./fixedcomponents/article-type1-component";
import { Article2 } from "./fixedcomponents/article-type2-component";

export const About = () => {

    const textStyle = "text-[var(--headingColor)] font-medium";
    const AnchorButtonStyle = "!p-3 !text-[var(--secondaryColor)] bg-[var(--primaryColor)] hover:shadow-[2px_2px_10px_1px_var(--darktertiaryColor)]";


    return (
        <>
            <section id="about" className="flex flex-wrap justify-center items-center gap-15 bg-[var(--mediumlightBg)] !px-5 !pt-30 !pb-20">
                <img src={myPic2} alt="mypicloadingerror" className="w-65 sm:w-80 h-65 sm:h-80 drop-shadow-[3px_3px_10px_var(--darktertiaryColor)]" />

                {/* About Me ------------------------------------> */}

                <article className="flex flex-col w-[80vw] lg:w-[50vw] gap-5">
                    <h2 className={`flex gap-3 items-center text-4xl ${textStyle}`}><FaGlobe className="text-[var(--primaryColor)]" /> About Me</h2>
                    <h3 className={`text-xl ${textStyle}`}>Hello! I’m Deepak — a Web Developer with a passion for bringing ideas to life through clean, efficient, and purposeful code.</h3>
                    <p className={`${textStyle}`}>I graduated with a <strong>B.Tech in Mechanical and Automation Engineering in 2019,</strong> but my path has been anything but traditional. Over the past few years, I’ve explored various fields — <strong>from preparing for government exams to working in admin roles, proofreading jobs, and even dabbling in content creation.</strong> While these experiences seemed disconnected at times, each one shaped my mindset, sharpened my discipline, and brought me closer to what I truly love: building things on the web.</p>
                    <br />

                    {/* My Turning Point----------------> */}

                    <Article2 containerStyle="gap-5" headingStyle={`gap-2 text-xl ${textStyle}`} heading=" My Turning Point" iconCode={<FaRegLightbulb className="text-[var(--primaryColor)]" />} dropStyle="text-[var(--primaryColor)]">

                        <p className={`${textStyle}`}>After realizing that my true interests lay in technology and creation, I decided to dive into web development. With no background in coding, I began learning from scratch — HTML, CSS, JavaScript, and then React. I later <strong>pursued a diploma in Website Engineering,</strong> which gave me a start, but most of my learning came from online resources, practice, and patience.
                            <br />
                            Despite challenges, self-doubt, and a non-linear journey, I stayed committed. I’m now deeply familiar <strong>with the MERN stack (MongoDB, Express.js, React.js, Node.js)</strong> and have created several personal and client-side projects — including a business website to offer web development services.</p>

                    </Article2>

                </article>

                <div className="h-[0.1px] bg-gray-500 my-6 w-[80vw]" />

                {/* What Can I Do -------------------> */}


                <Article2 containerStyle="w-[80vw] lg:w-[65vw] gap-5" headingStyle={`gap-3 text-2xl ${textStyle}`} heading="What I Can Do" iconCode={<FaWrench className="text-[var(--primaryColor)]" />} dropStyle="text-[var(--primaryColor)]">
                    <div className={`text-lg ${textStyle}`}>
                        <ul className="list-disc list-inside">
                            <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Tailwind CSS,</li>
                            <li><strong>Backend:</strong> Node.js, Express.js, MongoDB</li>
                            <li><strong>Other Skills:</strong> Git, GitHub, API Integration, Web Hosting, Basic SEO, Responsive Design</li>
                            <li><strong>Tools I Use:</strong> VS Code, Figma, Canva, Postman, Netlify, Vercel</li>
                        </ul>
                        <br />
                        <br />
                        <strong>I also have working experience with: </strong>
                        <ul className="list-disc list-inside">
                            <li>Content writing & proofreading</li>
                            <li>Video editing (for personal content)</li>
                            <li>Customer handling</li>
                        </ul>
                    </div>
                </Article2>

                <div className="h-[0.1px] bg-gray-500 my-6 w-[80vw]" />

                {/* My Goal--------------------------> */}



                <Article2 containerStyle="w-[80vw] lg:w-[65vw] gap-5" headingStyle={`gap-3 text-2xl ${textStyle}`} heading=" My Goal" iconCode={<FaRegCompass className="text-[var(--primaryColor)]" />} dropStyle="text-[var(--primaryColor)]">
                    <p className={`text-lg ${textStyle}`}>
                        Right now, I’m actively looking for my first role as a Web Developer <strong>(preferably React or MERN stack),</strong> where I can contribute, grow, and <strong>build with a team</strong> that believes in <strong>technology's power to solve real-world problems.</strong>
                        <br />
                        <br />
                        While I’m fully focused on becoming a strong team player in a professional environment, I also enjoy working on personal side projects that help me sharpen my skills and explore creative ideas. Over time, I hope to use this experience to give back by helping local businesses build their online presence — but my immediate priority is to gain industry experience, <strong>learn from a real team, and grow as a developer.</strong>
                    </p>
                </Article2>

                <div className="h-[0.1px] bg-gray-500 my-6 w-[80vw]" />

                {/* Highlights of my Journey--------------------------> */}



                <Article2 containerStyle="w-[80vw] lg:w-[65vw] gap-5" headingStyle={`gap-3 text-2xl ${textStyle}`} heading=" Highlights of My Journey" iconCode={<GoMilestone className="text-[var(--primaryColor)]" />} dropStyle="text-[var(--primaryColor)]">
                <table className={`border border-gray-400 border-collapse !p-3 !my-2 text-center w-full text-lg ${textStyle}`}>
                        <thead>
                            <tr>
                                <th className="border border-gray-400 p-3 bg-[var(--primaryColor)] text-[var(--secondaryColor)]">Year</th>
                                <th className="border border-gray-400 p-3 bg-[var(--primaryColor)] text-[var(--secondaryColor)]">Highlights</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-400 p-3">2019</td>
                                <td className="border border-gray-400 p-3">Graduated in Mechanical and Automation Engineering</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-400 p-3">2019-2021</td>
                                <td className="border border-gray-400 p-3">Explored different paths, prepared for competitive exams</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-400 p-3">2022-2023</td>
                                <td className="border border-gray-400 p-3">Learned basic web development & did side jobs</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-400 p-3">2024</td>
                                <td className="border border-gray-400 p-3">Completed diploma in Website Engineering while working in a Publishing Job</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-400 p-3">2024-Present</td>
                                <td className="border border-gray-400 p-3">Self-learning React & MERN Stack and Built Major Projects,
                                    <br />
                                    Now Job Ready</td>
                            </tr>
                        </tbody>
                    </table>
                </Article2>

                <div className="h-[0.1px] bg-gray-500 my-6 w-[80vw]" />

                {/* Connect --------------------> */}


                <Article1 containerStyle="w-[80vw] lg:w-[65vw] gap-5" headingStyle="text-[var(--headingColor)]" iconCode={<FaUserFriends className="text-[var(--primaryColor)]" />} heading="Let’s Connect">
                    <p className={`text-lg ${textStyle}`}>
                        If you’re a recruiter, team lead, or fellow developer — I’d love to connect, collaborate, and contribute. I bring with me a relentless learner’s spirit, real-life experience, and a strong desire to grow.
                        <br />
                        <br />
                        <strong>Thanks for visiting!</strong>
                        <br /><br />
                        <AnchorBtnComp href="#contact-us" className={`w-fit justify-center ${AnchorButtonStyle}`}>Reach Out</AnchorBtnComp>
                    </p>
                </Article1>
            </section>
        </>
    )
}
