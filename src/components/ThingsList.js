import React from "react";

export default function ThingsList() {
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

  function addThing() {
    setThingsArray((prevThingsArray) => [
      ...prevThingsArray,
      `Thing ${prevThingsArray.length + 1}`,
    ]);
  }

  const thingsElements = thingsArray.map((thing) => (
    <li key={thing}>{thing}</li>
  ));

  return (
    <div className="thingsList">
      <button onClick={addThing}>Add</button>
      {thingsElements}
    </div>
  );
}
