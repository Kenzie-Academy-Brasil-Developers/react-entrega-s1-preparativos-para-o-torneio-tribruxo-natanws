import "./styles.css";

function PlayerCard({ name, image, house, gender, species, patronus }) {
  let pronoun = ["He", "he", "His", "his"];
  if (gender === "female") {
    pronoun = ["She", "she", "Her", "her"];
  }
  let expectations = [
    "we wish the best of luck",
    `${pronoun[1]}'ll probably lose`,
    `${pronoun[1]} said "no half-blood will win this"`,
    `${pronoun[3]} parents are so proud`,
  ];
  let cardClass = `cardContainer ${house}`;
  return (
    <div className={cardClass}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>
        <strong>{name}</strong> is a {gender} {species} wizard from the house of{" "}
        {house}. {pronoun[0]} is ready and{" "}
        {expectations[Math.floor(Math.random() * 4)]}!
      </p>
    </div>
  );
}

export default PlayerCard;
