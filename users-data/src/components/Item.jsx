import "./Item.css";

function Item({ person }) {
  return (
    <div className="item-box">
      <h3>{person.name}</h3>
      <p>Age: {person.age}</p>
      <p>City: {person.city}</p>
      <p>Email: {person.email}</p>
      <p>Job: {person.job}</p>
    </div>
  );
}

export default Item;
