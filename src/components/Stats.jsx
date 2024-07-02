export default function Stats({ items, numItems, numPacked, percentage }) {
  return (
    <footer className="stats">
      {!items.length ? (
        <em>
          <p>Start adding some items to your packing lists 🚀</p>
        </em>
      ) : (
        <em>
          {percentage === 100
            ? "You got everything ! Ready to go "
            : `You have ${numItems} items in your list, and you already packed${" "}
        ${numPacked} ( ${percentage} %)`}
        </em>
      )}
    </footer>
  );
}
