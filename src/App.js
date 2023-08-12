import './index.css';
import Discord from './t.png'

function App() {

  function clicktweet() {
    const url = "https://twitter.com/intent/tweet?text=This%20tweet%20is%20my%20registration%20proof%20for%20%40LiquizFinance%20%F0%9F%A6%8B%0D%0A%0D%0AThe%20Center%20of%20DeFi%20built%20on%20%40BuildOnBase&";
    window.open(url);
  }
  
  function discord() {
    const url = "https://t.me/LiquizFinance";
    window.open(url);
  }

  return (
    <div className="App">


      <div className='app-wrapper'>
        <h1>Liquiz COMING <br/>ON BASE </h1>
        <button onClick={clicktweet}>PROOF OF PARTICIPATION</button>


        <div className="discord">
          <img onClick={discord} src={Discord}></img>
        </div>
        
      </div>
    </div>
  );
}

export default App;
