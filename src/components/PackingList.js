import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItems, onClearItems }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      {sortedItems.length > 0 ? (
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={() => onClearItems()}>Clear list</button>
        </div>
      ) : null}
    </div>
  );
};

export default PackingList;
