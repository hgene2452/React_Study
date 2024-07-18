import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

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
const buttonProps = {
  text: "메일",
  color: "red",
  a: 1,
  b: 2,
  c: 3,
};

function App() {
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button>
    </>
  );
}

export default App;
