
import { useState } from "react";
import "./styles.css";
import Feedback from "components/Feedback/Feedback";

function Homework_07() {
      const [like, setLike] = useState<number>(0); // Если мы ничего не передаем в качестве аргумента функции useState(), то 1 элемент массива, который эта функция возвращает === undefined
      const [dislike, setDislike] = useState<number>(0);
    
      const onLike = () => {
        setLike((prevValue: number):number => {
          return prevValue + 1;
        });
      };
    
      const onDislike = (): void => {
        setDislike((prevValue: number): number => prevValue + 1);
      };
    
      const resetResults = (): void => {
        setLike(0);
        setDislike(0);
      };

      return (
        <div className="homerwork_07_wrapper" >
          <Feedback
            like={like}
            dislike={dislike}
            onLike={onLike}
            onDislike={onDislike}
            resetResults={resetResults}
          />
        </div>
      );
    }

export default Homework_07;