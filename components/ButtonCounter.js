import React, {useState} from 'react';

const ButtonCount = () => {
  const [count, setCount] = useState(0);

  const ClickImplement = () => {
    setCount(count + 1);
  };

  return <button onClick={ClickImplement}>clicked {count} times</button>;
};

export default ButtonCount;
