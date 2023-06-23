import './index.css';
import logo from './logo.png';

function App() {

  function clicktweet() {
    const url = "https://twitter.com/intent/tweet?text=This%20tweet%20is%20my%20registration%20proof%20for%20%40CraxFinance%20your%20Yield%20Aggregator%20built%20on%20%40ethereum.%0D%0A&";
    window.open(url);
  }
  
  return (
    <div className="App">


      <div className='app-wrapper'>
        <h1>Crax</h1>
        <div className='paragraph'>
          <p>Crax's unlocks real<br/> Yield Aggregator on Ethereum<br/></p>
        </div>
        <button onClick={clicktweet}>PROOF OF PARTICIPATION</button>
        
      </div>
    </div>
  );
}

export default App;
