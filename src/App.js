import './App.css';
import Navbar from "./components/navbar"
import Page from "./components/page"
import Intro from "./components/intro"
import Experience from './components/experience';
import Skills_lang from './components/skills_lang';
import Education from './components/education';
import Achievements from './components/achievements';
import Hobbies from './components/hobbies';
import Contacts from './components/contacts';
import Conf_work from './components/conf_work';
import Pubs from './components/pubs';
import Credits from './components/credits';


function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta name="author" content="Anson Thomas" />
      <Intro />
      <Navbar />
      <Page />
      <bout_me />
      <Skills_lang />
      <Pubs />
      <Experience />
      <Conf_work />
      <Education />
      <Achievements />
      <Hobbies />
      <Contacts />
      <Credits />
    </div>
  );
}

export default App;
