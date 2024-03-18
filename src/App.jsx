function App() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ backgroundColor: "red" }}>this is child 1</div>
        <div style={{ backgroundColor: "blue" }}>this is child 2</div>
        <div style={{ backgroundColor: "yellow" }}>this child 3</div>
      </div>
<br/>
      <div className="flex">
        <div style={{ backgroundColor: "red" }}>this is child 1</div>
        <div style={{ backgroundColor: "blue" }}>this is child 2</div>
        <div style={{ backgroundColor: "yellow" }}>this child 3</div>
      </div>
    </div>
  );
}

export default App;
