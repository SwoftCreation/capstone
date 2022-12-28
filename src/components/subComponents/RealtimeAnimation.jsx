import React, { useState, useMemo } from "react";
import { db } from "../../firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";

/*
FIXME:
1. 렌더링이 너무 많이 발생을 해서 성능측정을 해보니 이 컴포넌트에서 
대량의 재렌더링이 발생하고 있었다
2. 값이 바뀌지 않는다면 렌더링을 막아야한다
3. 메모이징을 사용해야한다
*/
function RealtimeAnimation() {
  console.log("RealtimeAnimation : Rendered");

  const [moveValue, setMoveValue] = useState();
  const unsub = onSnapshot(doc(db, "experience", "fromPy"), (doc) => {
    setMoveValue(signal(doc.data().Intension));
  });
  console.log("unsub" + JSON.stringify(unsub));

  const signal = (signal) => {
    if (signal === 0) return "move right";
    else if (signal === 1) return "move left";
    else return "other signal";
  };
  /*
  
  */
  console.log("moveValue:" + moveValue, typeof moveValue);
  return (
    <div>
      <h2>{moveValue}</h2>
    </div>
  );
}

export default RealtimeAnimation;
