
import React,{ useState } from 'react';
import './App.css';
import Button from './CalcComponents/Button';
import Screen from './CalcComponents/Screen';
import ButtonBox from "./CalcComponents/ButtonBox"


// type State = {
//   currentState : {
//     sign: string,
//     number: string| number,
//     result: string | number,
//   }
// }

function App()  
// export const App: React.FC<State> = ({currentState}: BudgetProps) =>
{

  const btnValues = [
    ["AC","+-","%","/"],
    [7,8,9,"X"],
    [4,5,6,"-"],
    [1,2,3,"+"],
    [0,".","="]
  ]

  const [currentState, setCurrentState]=useState<any>({
    sign: "",
    number: 0,
    result: "0"
  })

const toLocaleString = (num: number) => {
  return String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ' );
}

const removeSpaces = (num: any | number) => {
  return (num).toString().replace(/\s/g, '')
}





const numClickHandler = (e: any) => {
  e.preventDefault()
  const value = e.target.textContent;
  if(removeSpaces(currentState.number).length <= 16){
    console.log("current state",currentState.number)
    setCurrentState({
      ...currentState,
      number: currentState.number === 0 && value === "0" ? "0"
      : removeSpaces(currentState.number) % 1 === 0
      ? toLocaleString(Number(removeSpaces(currentState.number + value)))
      : toLocaleString(currentState.number + value),

      result: !currentState.sign ? 0 : currentState.result
      
    })

    // setCurrentState({
    //   number: currentState.number + value,
    // })
  }
}



// const numClickHandler = (e) => {
//   e.preventDefault();
//   const value = e.target.innerHTML;

//   if (currentState.number.length< 16) {
//     setCurrentState({
//       ...currentState,
//       number:
//         currentState.number === 0 && value === "0"
//           ? "0"
//           : currentState.number % 1 === 0
//           ? Number(currentState.number + value)
//           : currentState.number + value,
//       result: !currentState.sign ? 0 : currentState.result,
//     });
//   }
// };

const commaClickHandler = (e: any) => {
  e.preventDefault();

  const value = e.target.innerHTML

  setCurrentState({
    ...currentState,
    number: !currentState.number.toString().includes(".") ? currentState.number + value : currentState.number
  })
}


// ref



const signClickHandler = (e: any) => {
  setCurrentState({
    ...currentState,
    sign: e.target.innerHTML,
    result: currentState.number && !currentState.result ? currentState.number : currentState.result,
    number: 0
  })
}

const equalsClickHandler = () => {
  if(currentState.sign && currentState.number){
    const math = (a: number,b: number, sign: string) => 
    sign === "+"
    ? a + b
    : sign === "-"
    ? a - b
    : sign === "X"
    ? a * b
    :a / b

    setCurrentState({
      ...currentState,
      result: currentState.number === 0 && currentState.sign === "/"
      ? "Invalid expression: Cannot divide with zero"
      : toLocaleString(
        math(
          Number(removeSpaces(currentState.result)),
          Number(removeSpaces(currentState.number)),
          currentState.sign
        )
      ),
      sign: "",
      number: 0,
    })
  }
}

const invertClickHandler = () => {
  setCurrentState({
    ...currentState,
    number: currentState.number ? toLocaleString(removeSpaces(currentState.number) * -1) : 0,
    result: currentState.result ? toLocaleString(removeSpaces(currentState.result) * -1) : 0,
    sign: "",
  })
}

const percentageClickHandler = () => {
  let number = currentState.number ? parseFloat(removeSpaces(currentState.number)) : 0
  let result = currentState.result ? parseFloat(removeSpaces(currentState.result)) : 0
  
  setCurrentState({
    ...currentState,
    number: (number /= Math.pow(100,1)),
    result: (result /= Math.pow(100,1)),
    sign: "",
  })
}

const resetHandler = () => {
  setCurrentState({
    ...currentState,
    number: 0,
    result: 0,
    sign: "",
  })
}

  return (
    <div className="App">
     
     <div className="header">
     Calculator App   
    </div>   
     

     <div>
    <Screen value={currentState.number ? currentState.number:currentState.result}/>
     </div>

      <div>
        <ButtonBox>
        {btnValues.flat().map((btn,i)=>{
          return (
            <Button className={btn==="="? "equals":""}
            key={i}
            value={btn}
            onClick={ btn === "AC"
            ? resetHandler
            : btn === "+-"
            ? invertClickHandler
            : btn === "%"
            ? percentageClickHandler
            : btn === "="
            ? equalsClickHandler
            : btn === "/" || btn === "X" || btn === "-" || btn === "+"
            ? signClickHandler
            : btn === "."
            ? commaClickHandler
            : numClickHandler}/>
          )
        })}
        </ButtonBox>
      </div>
    </div>
  );
}

export default App;
