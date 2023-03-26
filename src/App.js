import './index.css';
import logo from './logo.svg';

function App() {

  function clicktweet() {
    const url = "https://twitter.com/intent/tweet?text=This%20tweet%20is%20my%20registration%20proof%20for%20%40Osmo_Dex%20your%20first%20%20protocol%20for%20trading%20built%20on%20%23ZKsync.%0D%0A%0D%0AI%27m%20ready%20to%20get%20my%20early%20access.&original_referer=https://clicktotweet.com&related=clicktotweet";
    window.open(url);
  }
  
  return (
    <div className="App">


      <div className='app-wrapper'>
        <img src={logo}></img>
        <h1>OSMO</h1>
        <div className='paragraph'>
          <p>Osmo's mission is to unlock<br/> humankind’s true potential in ever-<br/>inclusive realities</p>
        </div>
        <button onClick={clicktweet}>PROOF OF PARTICIPATION</button>
        
      </div>
    </div>
  );
}

export default App;
