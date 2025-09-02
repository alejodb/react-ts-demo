import React, { useCallback } from "react";
import { useMemo, useState } from "react";

const AddNameButton = React.memo(({ onAdd }: { onAdd: () => void }) => {
  console.log("Rendering AddNameButton...");
  return <button onClick={onAdd}>Add Random Name</button>;
});

const NamesList = () => {
  const [names, setNames] = useState<string[]>([
    "Alice",
    "Bob",
    "Charlie",
    "Adam",
    "Amanda",
  ]);
  const [filter, setFilter] = useState<string>("");

  const addRandomName = useCallback(() => {
    console.log("Adding a random name...");
    const newName = `Name_${Math.floor(Math.random() * 1000)}`;
    setNames((prevNames) => [...prevNames, newName]);
  }, []);

  const filterNames = (names: string[], filter: string) => {
    return names.filter((name) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredNames = useMemo(() => filterNames(names, filter), [names, filter]);

  return (
    <div>
      <h2>Filtered Names</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter names..."
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <p>Total Names: {filteredNames.length}</p>
      <AddNameButton onAdd={addRandomName} />
    </div>
  );
};

export default NamesList;
