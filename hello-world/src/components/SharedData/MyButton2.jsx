const MyButton2 = ({ count, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Clicked {count} times</button>
    </div>
  );
};

export default MyButton2;
