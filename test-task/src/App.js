import './App.css';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='App_partners'>наши партнеры</div> 
      <div className='App_partners_block'> 
        <div className='App_partners_block_card'> 
          <img className='App_partners_block_logo' src='../images/Logo1.jpg'></img> 
        </div>
        <div className='App_partners_block_card'>
          <img className='App_partners_block_logo' src='../images/Logo2.jpeg'></img>
        </div>
        <div className='App_partners_block_card'>
          <img className='App_partners_block_logo' src='../images/Logo3.jpeg'></img>
        </div>
        <div className='App_partners_block_card'>
          <img className='App_partners_block_logo' src='../images/Logo4.jpeg'></img>
        </div>
        <div className='App_partners_block_card'>
          <img className='App_partners_block_logo' src='../images/Logo5.jpeg'></img>
        </div>
        <div className='App_partners_block_card'>
          <img className='App_partners_block_logo' src='../images/Logo6.jpeg'></img>
        </div>
        <div className='App_partners_block_card'>
          <img className='App_partners_block_logo' src='../images/Logo7.jpeg'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
