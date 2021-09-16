import { useState, useEffect } from "react";
import Students from "./components/Students";

function App() {
  const [students, setStudents] = useState([]);
  const [players, setPlayers] = useState([]);

  const randomStudent = () => {
    let arr = [[], [], [], []];
    let houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
    console.log(players);

    for (let i = 0; i < houses.length; i++) {
      arr[i].push(...students.filter((student) => student.house === houses[i]));
    }

    arr = arr.sort(() => Math.random() - 0.5);

    for (let house = 0; house < arr.length; house++) {
      arr[house] = arr[house].sort(() => Math.random() - 0.5);
    }

    setPlayers([arr[0][0], arr[1][0], arr[2][0]]);
  };

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <Students players={players} randomStudent={randomStudent} />
    </div>
  );
}

export default App;
