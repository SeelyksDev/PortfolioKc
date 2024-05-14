import TechSkills from "../../data/techSkills.json";
import './Skills.scss'

const Skills = () => {
    return (
        <section className="skills" id="MySkill">
                    <div className="skills__titleGlass">
                        <h2 className="skills__title">Mes Skills</h2>
                    </div>
                    <p className="skills__subtitle">
                        Les technologies & logiciels utilisés à travers mon
                        expérience.
                    </p>
                    <section className="skills__cards">
                        {TechSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="skills__containerBackground"
                            >
                                <div className="skills__cardDescription">
                                    <div className="skills__card">
                                        <img
                                            className="skills__logo"
                                            src={skill.logo}
                                            alt="logo-skills"
                                        />
                                    </div>
                                    <p className="skills__titleLogo">{skill.title}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                </section>
    )
}

export default Skills