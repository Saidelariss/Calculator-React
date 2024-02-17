export default function ButtonElement({ value, onInput }) {
  return (
    <button className="item" onClick={() => onInput(value)}>
      {value}
    </button>
  );
}
