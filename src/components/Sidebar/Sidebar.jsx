import Contacts from '../Contacts';
import TechSkills from '../TechSkills';
import SoftSkills from '../SoftSkills';
import PropTypes from 'prop-types';
import s from './Sidebar.module.css';
import myPhoto from '../../assets/img/photo.jpeg';
// import cv from '../../assets/cv.pdf';

function Sidebar({ contacts, techSkills, softSkills }) {
  return (
    <aside className={s.sidebar}>
      <img src={myPhoto} alt="Oleh Poliakov" className={s.photo} />
      <div className={s.section}>
        <h3 className={s.title}>Contacts</h3>
        <ul>
          {contacts.map(({ id, link, text }) => (
            <Contacts key={id} link={link} text={text} />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Tech Skills</h3>
        <ul>
          {techSkills.map(({ id, label }) => (
            <TechSkills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Soft Skills</h3>
        <ul>
          {softSkills.map(({ id, label }) => (
            <SoftSkills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={s.section}>
        <h3 className={s.title}>Language</h3>
        <div>
          <p className={s.text}>
            English : 
          </p>
          <span>B1</span>
        </div>
        <div>
          <p className={s.text}>
            Ukrainian : 
          </p>
          <span>Native</span>
        </div>
        <div>
          <p className={s.text}>
            Russian : 
          </p>
          <span>Advanced</span>
        </div>
      </div>

      {/* <a className={s.link} href={cv} target="_blank" rel="noreferrer">
        Download CV
      </a> */}
    </aside>
  );
}

Sidebar.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  techSkills: PropTypes.arrayOf(PropTypes.object),
  softSkills: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar;
