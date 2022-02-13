import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import {useStateValue} from "./Stateprovider";

function App() {
  const [{isopen, user}] = useStateValue();
  return (
    <div className='app'>
      <Header/>
      {
        !user ? (<Login/>) : (
          <div className={`app__central ${isopen ? ("displayed")  : ""}`}>
            <Sidebar/>
            <Main/>
          </div>
        )
      }
    </div>
  );
}

export default App;
