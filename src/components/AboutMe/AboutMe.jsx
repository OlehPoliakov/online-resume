import Projects from '../Projects';
import Experience from '../Experience';
import Education from '../Education';
import PropTypes from 'prop-types';
import s from './AboutMe.module.css';

function AboutMe({ commandProjects, ownProjects, experience, education }) {
  return (
    <div className={s.container}>
      <div className={s.section}>
        <h2 className={s.profession}>Fullstack Developer</h2>
        <h1 className={s.name}>Oleh Poliakov</h1>
        <p className={s.description}>
          I'm a Fullstack Developer and looking for an interesting job. I want
          to be in a good team to improve my skills and use them for interesting
          tasks. I am a fast learner, responsible, ready for hard tasks.
        </p>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Projects</h3>
        <h4 className={s.subTitle}>
          <span className={s.typeProject}>Personal</span> projects
        </h4>
        <ol className={s.list}>
          {ownProjects.map(({ id, label, link, tech, linkGit, role }) => (
            <Projects
              key={id}
              label={label}
              link={link}
              tech={tech}
              linkGit={linkGit}
              role={role}
            />
          ))}
        </ol>
        <h4 className={s.subTitle}>
          <span className={s.typeProject}>Teamwork</span> projects
        </h4>
        <ol className={s.list}>
          {commandProjects.map(({ id, label, link, tech, linkGit, role }) => (
            <Projects
              key={id}
              label={label}
              link={link}
              tech={tech}
              linkGit={linkGit}
              role={role}
            />
          ))}
        </ol>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Work Experience</h3>
        <ul>
          {experience.map(
            ({ id, profession, company, time, country, duties }) => (
              <Experience
                key={id}
                profession={profession}
                company={company}
                time={time}
                country={country}
                duties={duties}
              />
            )
          )}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Education</h3>
        <ul>
          {education.map(({ id, university, label, time, link }) => (
            <Education
              key={id}
              university={university}
              label={label}
              time={time}
              link={link}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

AboutMe.propTypes = {
  commandProjects: PropTypes.arrayOf(PropTypes.object),
  ownProjects: PropTypes.arrayOf(PropTypes.object),
  experience: PropTypes.arrayOf(PropTypes.object),
  education: PropTypes.arrayOf(PropTypes.object),
};

export default AboutMe;
