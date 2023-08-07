import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const getAverage = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};

const AverageCallback = () => {
  const [list, setList] = useState([10, 20, 30]);
  const [number, setNumber] = useState("");
  const countRender = useRef(0);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  useEffect(() => {
    countRender.current += 1;
    console.log("onChange function is created", countRender.current);
  }, [onChange]);

  const onInsert = useCallback(() => {
    setList(list.concat(parseInt(number)));
    setNumber("");
  }, [number, list]);

  useEffect(() => {
    countRender.current += 1;
    console.log("onInsert function is created", countRender.current);
  }, [onInsert]);

  const average = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input type="number" value={number} onChange={onChange} />
      <button onClick={onInsert}>registration</button>

      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <h2>Average: {average}</h2>
    </div>
  );
};

export default AverageCallback;
