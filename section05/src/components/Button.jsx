// const Button = (props) => {
//   console.log(props);
//   return (
//     <button>
//       {props.text} - {props.color.toUpperCase()}
//     </button>
//   );
// };

// 구조 분해 할당을 통해 편리하게 props 사용
const Button = ({ text, color, children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button onClick={onClickButton}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
