import './App.css';
import Card from './components/Card/Card.tsx';
import { symbols, ranks } from './constants.ts';


const App = () => {
  return (
    <>
      <Card rank={ranks[11]} suit={symbols.diams}/>
    </>
  );
};

export default App;
