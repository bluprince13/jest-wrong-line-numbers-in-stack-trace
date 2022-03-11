// src/SimpleComponent.jsx
import React, {useState} from "react"

export const Simple = () => {
  const [count, setCount] = useState(0);
  retur (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
