import Container from './components/Container';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import contacts from './db/contacts.json';
import techSkills from './db/techSkills.json';
import softSkills from './db/softSkills.json';
import commandProjects from './db/commandProjects.json';
import ownProjects from './db/ownProjects.json';
import experience from './db/experience.json';
import education from './db/education.json';

function App() {
  return (
    <Container>
      <Sidebar
        contacts={contacts}
        techSkills={techSkills}
        softSkills={softSkills}
      />
      <AboutMe
        ownProjects={ownProjects}
        commandProjects={commandProjects}
        experience={experience}
        education={education}
      />
    </Container>
  );
}

export default App;
