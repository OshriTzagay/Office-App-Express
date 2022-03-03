import React from "react";
import { getAllWorkers } from "../../../Services/workers-service";

export default function Workers() {
  let GetWorkers = () => {
    getAllWorkers()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Workers</h1>
      <button onClick={GetWorkers}>TO GET ALL WORKERS.</button>
    </div>
  );
}
