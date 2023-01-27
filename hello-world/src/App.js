import './App.css';
import MyButton from './components/MyButton';
import MyButton2Container from './components/SharedData/MyButton2Container';

function App() {
  return (
    <div>
      <MyButton2Container />
      {/* the below two button components have individual state whereas above component consisting of two components have shared state */}
      <MyButton />
      <MyButton />
    </div>
  );
}

export default App;
