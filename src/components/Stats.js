const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className={`stats ${percentage === 100 ? "stats-full" : ""}`}>
      <em>
        {" "}
        {percentage === 100
          ? "You got everything! Ready to go 🛫"
          : `💼 you have ${numItems} items on your list, and you already packed   ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
