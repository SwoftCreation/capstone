import React, { useState } from "react";
import { db } from "../../firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";

function RealtimeAnimation() {
  const [moveValue, setMoveValue] = useState();
  const unsub = onSnapshot(doc(db, "experience", "fromPy"), (doc) => {
    setMoveValue(doc.data());
  });
  return (
    <div>
      <h1>{JSON.stringify(moveValue)}</h1>
    </div>
  );
}

export default RealtimeAnimation;
