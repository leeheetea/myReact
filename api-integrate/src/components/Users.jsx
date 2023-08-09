import React from "react";
import { useEffect, useCallback } from "react";
import { useState } from "react";

const Users = () => {
  const [data, setData] = useState(null);
  const [number, setNumber] = useState(1);

  const callAPI = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [number]);

  useEffect(() => {
    callAPI();
  }, [callAPI]);

  return (
    <div>
      {data ? (
        <h1>
          {number}: {data.title}
        </h1>
      ) : (
        "404 NOT FOUND"
      )}
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Data Load
      </button>
    </div>
  );
};

export default Users;
