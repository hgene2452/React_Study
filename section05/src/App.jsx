import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

// 불필요한 리렌더를 막기 위해 서로 상관없는 컴포넌트는 철저히 분리해야한다
function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
