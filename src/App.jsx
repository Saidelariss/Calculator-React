import { useState } from "react";
import "./style.css";
import ButtonElement from "./ButtonElement"


let result = 0;
export default function App() {
  const [inputValue, setInputValue] = useState("");
  let arrayElements = [];
  const ListItems = [
    "AC",
    "DEL",
    "/",
    1,
    2,
    3,
    "*",
    4,
    5,
    6,
    "+",
    7,
    8,
    9,
    "-",
    ".",
    0,
    "=",
  ];

  function calculate(num1, num2, op) {
    if (op == "+") return num1 + num2;
    if (op == "-") return num1 - num2;
    if (op == "*") return num1 * num2;
    if (op == "/") return num1 / num2;
  }
  function handleInputValue(value) {
    if (value == "AC") {
      setInputValue("0");
      return;
    }
    if (value == "DEL") {
      setInputValue(inputValue.slice(0, -1));
      return;
    }

    if (value == "=") {
      let element = "";
      for (let i = 0; i < inputValue.length; i++) {
        if (
          inputValue[i] == "+" ||
          inputValue[i] == "-" ||
          inputValue[i] == "*" ||
          inputValue[i] == "/"
        ) {
          arrayElements.push(element);
          element = "";
          arrayElements.push(inputValue[i]);
        } else {
          element += inputValue[i];
        }
        // arrayElements.push(element);
      }
      arrayElements.push(element);
      console.log(arrayElements);
      result = calculate(
        parseFloat(arrayElements[0]),
        parseFloat(arrayElements[2]),
        arrayElements[1]
      );
      if (arrayElements.length > 3) {
        for (let i = 3; i < arrayElements.length - 1; i += 2) {
          console.log("result " + result);
          result = calculate(
            result,
            parseFloat(arrayElements[i + 1]),
            arrayElements[i]
          );
          console.log("arrayElements[i] " + arrayElements[i]);
          console.log("arrayElements[i+1] " + arrayElements[i + 1]);
          console.log("result " + result);
        }
      }
      setInputValue(result);
    } else {
      if (result != 0) {
        setInputValue(value);
        result = 0;
        console.log(value);
      } else {
        console.log("inputValue " + inputValue);
        console.log("value " + value);
        console.log("inputValue + value " + inputValue + value);
        setInputValue(inputValue.toString() + value);
      }
    }

    // if (value == "=") {
    //   console.log("true");
    //   const result = eval(inputValue);
    //   setInputValue(result);
    // }
  }
  return (
    <>
      <div className="container">
        <input value={inputValue} className="input-numbers" type="text" />
        {ListItems.map((item) => {
          return (
            <ButtonElement
              key={crypto.randomUUID()}
              value={item}
              onInput={() => handleInputValue(item)}
            />
          );
        })}
      </div>
    </>
  );
}


