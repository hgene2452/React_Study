import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    setInput({
      ...input, // 객체의 다른 기존의 값(birth, country, bio)들을 유지시키기 위한 코드
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input value={input.name} onChange={onChange} name="name" />
        {input.name}
      </div>
      <div>
        <input value={input.birth} onChange={onChange} type="date" name="birth" />
        {input.birth}
      </div>
      <div>
        <select value={input.country} onChange={onChange} name="country">
          <option value="kr">한국</option>
          <option>미국</option>
          <option>영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea value={input.bio} onChange={onChange} name="bio" />
      </div>
      {input.bio}
    </div>
  );
};

export default Register;
