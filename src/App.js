import Profile from "./components/Profile";
import Name from "./components/Name";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalDetails from "./components/PersonalDetails";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Name />
      <div className="columns">
        <div className="leftColumn">
          <Profile />
          <Education />
          <Experience />
        </div>
        <div className="rightColumn">
          <PersonalDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
