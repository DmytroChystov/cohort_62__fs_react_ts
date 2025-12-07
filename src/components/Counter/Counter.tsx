// // 1 ШАГ: Импортируем useState из библиотеки react
// // import { useState } from "react";

// // import Button from "components/Button/Button";

// // import "./styles.css";

// // function Counter() {
//   // При старом способе компонент Counter не перезагружается и не может показать на странице актуальное значения переменных
//   // let count = 0;
//   // console.log("В теле компонента Counter", count);

//   // const onMinus = () => {
//   //   count = count - 1;
//   //   console.log("onMinus function", count);
//   // };
//   // const onPlus = () => {
//   //   count = count + 1;
//   //   console.log("onPlus function", count);
//   // };
//   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   // Функция-хук useState возвращает массив из 2 элементов
//   // 1 элемент - это переманная состояния
//   // 2 элемент - это функция, которая изменяет переменную состояния
//   // Без деструктуризации
//   // const state = useState(0);
//   // console.log(state);
//   // const state1Element = state[0];
//   // const state2Element = state[1];
//   // console.log(state1Element);
//   // console.log(state2Element);

//   // С использованием деструктуризации
//   // По умолчанию count === undefined, если мы неичего не передадим в качестве аршумента в useState
//   const [count, setCount] = useState<number>(0);

//   const onPlus = () => {
//     //1 способ использования: Можно передать какое-то значение напрямую
//     // setCount(10)
//     //2 способ использования - передать функцию коллбэк, которая в свою очередб будет иметь доступ к переменной сотояния
//     setCount((prevValue: number) => {
//       return prevValue + 1;
//     });
//   };

//   const onMinus = () => {
//     setCount((prevValue) => {
//       return prevValue - 1;
//     });
//   };

//   return (
//     <div className="counter_wrapper">
//       <div className="button_control">
//         <Button name="-" onClick={onMinus} />
//       </div>
//       <p className="count">{count}</p>
//       <div className="button_control">
//         <Button name="+" onClick={onPlus} />
//       </div>
//     </div>
//   );
// }

// export default Counter;

import Button from "components/Button/Button";

import "./styles.css";
import { type CounterProps } from "./types";

function Counter({ count, onMinus, onPlus }: CounterProps) {
  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;
