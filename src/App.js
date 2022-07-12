import React, { useState, useRef } from "react";
import Image from "./airbnb.png";
import "./App.css";
import ImageUsa from "./미국.jpg";

function App() {
  let [country, setCountry] = useState(["대한민국", "중국", "미국"]);
  let [modal, setModal] = useState(false);
  let [count, setCount] = useState([0, 0, 0]);
  let [number, setNumber] = useState(0);
  let [contryImage, setCountryImage] = useState();
  let [newPostInput, setNewPostInput] = useState("");
  let countrySort = country.sort();

  return (
    <div className='App'>
      <div className='Main-Box'>
        <img src={Image} className='Main-logo' alt='blog image' />
      </div>
      <Profile />
      <div className='Body-Box'>
        <div>
          {countrySort.map(function (a, i) {
            return (
              <div className='list' key={i}>
                <h4
                  onClick={() => {
                    setModal(!modal);
                    setNumber((number = i));
                  }}
                >
                  {a}{" "}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      let copyCountry = [...country];
                      copyCountry.splice(i, 1);
                      setCountry(copyCountry);
                      console.log(copyCountry);
                      // 매개변수 a는 각각의 배열 요소의 value값을 가짐. i는 주소.
                      // 삭제버튼 누르면 a와 i를 이용해 얻은 배열요소가 사라지는 행동이 발생한다. \
                      // 배열요소는 사라지는 행동이 '상태'로 할당되어야 렌더링 됨을 유의.
                    }}
                  >
                    삭제
                  </button>
                </h4>
                <span
                  onClick={() => {
                    let copy = [...count];
                    copy[i] += 1;
                    setCount(copy);
                  }}
                >
                  👍 {count[i]}{" "}
                </span>
                <p>2022년 7월 9일 토요일</p>
              </div>
            );
          })}

          <input
            onInput={(e) => {
              setNewPostInput(e.target.value);

              console.log(newPostInput);
              console.log(typeof copyNewPostInput);
            }}
          />
          <button
            onClick={() => {
              let copyCountry = [...country];
              let copyNewPostInput = newPostInput;
              copyCountry.push(copyNewPostInput);
              setCountry(copyCountry);
              console.log(copyCountry);
              console.log(typeof copyCountry, copyCountry.length);
              // setNewPostInput(copyCountry);
            }}
          >
            버튼
          </button>
        </div>
        {modal == true ? (
          <Modal country={countrySort} image={ImageUsa} number={number} />
        ) : null}
      </div>
    </div>
  );
}

function Modal(props) {
  let [input, setInput] = useState();
  return (
    <div className='modal'>
      <div>
        <h4>{props.country[props.number]}</h4>
        <img src={props.image} />
        <h5>2022년 07월 09일</h5>
        <p>
          더는 숨은 수수료나 추가 요금, 교묘한 속임수를 걱정하지 마세요.
          스카이스캐너에서 모든 비용을 투명하게 확인하고 편안한 마음으로 여행을
          준비하세요.
        </p>
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type='text'
        />
        <input
          onChange={(e) => {
            setInput(e.target.value);
            console.log(input);
          }}
          type='text'
        />
        <input
          onMouseOver={() => {
            console.log("hi, mouse");
          }}
          type='number'
        />
        <select />
        <textarea />

        <p>더 많은 여행지 탐색하기</p>
      </div>
    </div>
  );
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: "park", age: 29 };
  }

  changeName() {
    this.setState({ name: "kim" })
  }

  changeName2= ()=>{
    this.setState({ name: "choi"})
  }

  render() {
    return (
      <div className="Profile">
        <h3>클래스로 만든 프로필입니다.</h3>
        <p>제 이름은 {this.state.name} 입니다.</p>
        <button onClick={this.changeName.bind(this)}>김으로 바꾸기</button>
        <button onClick={this.changeName2}>최로 바꾸기</button>
      </div>
    );
  }
}
//프랍스 : 호스트, 가격, 좋아요개수

export default App;
