import ListSection from "./components/ListSection/ListSection";
import "./App.scss";
import DropDown from "./components/DropDown/DropDown";
import Counter from "./components/Counter/Counter";

function App() {
  const fruits = ["Apple, Banana, Orange, Pineapple, Melon"];
  const peoples = ["Sania", "Kaylee", "Karishma"];
  return (
    <>
      <h1>Övning React</h1>
      <p>🛹</p>
      <DropDown label="Fruits" items={fruits} />
      <Counter />
      <ListSection items={fruits} />
      <ListSection items={peoples} />
      <button>Whoop</button>
    </>
  );
}

export default App;
