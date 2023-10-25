function ChildStateComponent({ counter, setCounter }) {
  return (
    <div>
      <h3>Counter {counter}</h3>
      <button className="btn me-2 btn-outline-secondary" onClick={() => setCounter(counter + 1)}>
        Increment</button>
      <button className="btn btn-secondary" onClick={() => setCounter(counter - 1)}>
        Decrement</button>
    </div>
  );
}
export default ChildStateComponent;