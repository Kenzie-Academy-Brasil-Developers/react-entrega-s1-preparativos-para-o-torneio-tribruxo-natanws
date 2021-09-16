import "./styles.css";
import PlayerCard from "../PlayerCard";

const Students = ({ players, randomStudent }) => {
  return (
    <>
      <div className="titleContainer">
        <h1>Triwizard Tournament</h1>
        <p>
          This year Kenzie Academy will play host to a legendary event: the
          Triwizard Tournament. During which time a single student gets to
          represent his or her house in a series of magical contests. Eternal
          glory awaits the student who wins the tournament.
        </p>
      </div>
      {players.map((player, index) => (
        <div key={index} className="playerCard">
          <PlayerCard
            name={player.name}
            image={player.image}
            house={player.house}
            gender={player.gender}
            species={player.species}
          />
        </div>
      ))}
      <div className="buttonContainer">
        <button onClick={() => randomStudent()}>Pick Players</button>
      </div>
    </>
  );
};

export default Students;
