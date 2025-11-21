import { useState, useEffect } from "react";
import data from "../data/list";
import Item from "./Item";
import "./List.css";

function List() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // simulate fetching data
    setPeople(data);
  }, []);

  return (
    <div className="grid-box">
      {people.map((person) => (
        <Item key={person.id} person={person} />
      ))}
    </div>
  );
}

export default List;
