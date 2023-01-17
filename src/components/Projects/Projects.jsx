import s from './Projects.module.css';

function Projects({ label, link, tech, linkGit, role }) {
  return (
    <li className={s.item}>
      <div className={s.flex}>
        <a className={s.link} href={link} target="_blank" rel="noreferrer">
        Link {label}
        </a>
        <a
          className={s.linkGit}
          href={linkGit}
          target="_blank"
          rel="noreferrer"
        >
          Link GitHub
        </a>
      </div>
      <p className={s.role}>Сontents: {role}</p>
      <p className={s.tehnology}>Tehnology: {tech}</p>
    </li>
  );
}

export default Projects;
