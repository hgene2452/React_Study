import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";
import { useState } from "react";

// function App() {
//   return (
//     <>
//       <Button text={"메일"} color={"red"} />
//       <Button text={"카페"} />
//       <Button text={"블로그"} />
//     </>
//   );
// }

// spread 연산자를 이용해 편리하게 props 전달
// const buttonProps = {
//   text: "메일",
//   color: "red",
//   a: 1,
//   b: 2,
//   c: 3,
// };

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  return (
    <>
      {/* <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button> */}
      <h1>{count}</h1>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
    </>
  );
}

export default App;
