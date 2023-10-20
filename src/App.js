import logo from './logo.svg';
import './App.css';
import Profile from './Profile';

function App() {
  const ppl = [{name: "Kate", grade: "Sophomore",home: "Stanford"}, 
        {name: "Philip", grade: "Junior",home: "Arcadia"},
        {name: "Riley", grade: "Sophomore",home: "Oakland"}]
  return (
    <div className="App">
      {/* <h1>Hello World: Kate</h1>
      <h2>Grade: Sophomore</h2>
      <h3>Hometown: Stanford</h3>

      <h1>Hello World: Philip</h1>
      <h2>Grade: Junior</h2>
      <h3>Hometown: Arcadia</h3>

      <h1>Hello World: Riley</h1>
      <h2>Grade: Sophomore</h2>
      <h3>Hometown: Oakland</h3>

      <h1>Hello World: Raghav</h1>
      <h2>Grade: Sophomore</h2>
      <h3>Hometown: Dallas</h3> */}
      {ppl.map((person) => 
        <Profile name={person.name} grade={person.grade} home={person.home}/>
      )}

    </div>
  );
}

export default App;
