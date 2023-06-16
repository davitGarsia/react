import './App.css';
import { useState } from 'react';

function App() {
  let namesArr = ['Davit', 'Lali', 'Onofrio'];

  let newArr = namesArr.map(name => {
    return {
      name: name,
      id: Math.random() * Math.random() * Math.random(),
    };
  });

  const handleChange = e => {
    console.log(e.target.value);
  };

  // let [isDark, setIsDark] = useState();
  let [names, setNames] = useState(['Davit', 'Lali', 'Ina']);

  return (
    <div className="bg">
      <div className="App">Parent Component</div>
      {newArr.map(name => {
        return <p key={name.id}>{name.name}</p>;
      })}
      <input type="text" onChange={handleChange} />
      {/* {isDark ? <h1>It is dark</h1> : <h1>It is not dark</h1>} */}
      <button
        onClick={() => {
          //setIsDark(!isDark);
          setNames([...names, 'Onofrio']);
          console.log(names);
        }}
      >
        Change Theme
      </button>
    </div>
  );
}

export default App;

// function ChildComponent(props) {
//   return (
//     <div>
//       This is a child component {props.name} and my age is {props.age}
//     </div>
//   );
// }
