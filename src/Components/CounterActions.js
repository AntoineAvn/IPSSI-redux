import React from "react";
import { useSelector, useDispatch } from "react-redux";

function CounterActions() {
  const counter = useSelector((state) => state.counter);
//   const auth = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Actions basées sur l'ancienneté</p>
      {counter.changes > 10 ? (
        <p> Vous avez effectué 10 actions, vous êtes un utilisateur avancé</p>
      ) : ( <p>Continuez, novice que vous êtes</p> )
      }
    </div>
  );
}

export default CounterActions;