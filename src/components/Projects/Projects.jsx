import s from './Projects.module.css';

function Projects({ label, link, tech, linkGit }) {
  return (
    <li className={s.item}>
      <div className={s.flex}>
        <a className={s.link} href={link} target="_blank" rel="noreferrer">
          {label}
        </a>
        <a
          className={s.linkGit}
          href={linkGit}
          target="_blank"
          rel="noreferrer"
        >
          Link
        </a>
        <span>
          <b>[</b> <span className={s.name}>{tech}</span> <b>]</b>
        </span>
      </div>
    </li>
  );
}

export default Projects;
