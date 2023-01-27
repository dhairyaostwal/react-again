import { useState } from 'react';
import MyButton2 from './MyButton2';

const MyButton2Container = () => {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <MyButton2 count={count} onClick={handleCount} />
      <MyButton2 count={count} onClick={handleCount} />
    </div>
  );
};

export default MyButton2Container;
