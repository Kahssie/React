import './App.css';
import { AxiosGetUser } from './Components/AxiosGetuser';
import { FetchGetUser } from './Components/FetchGetuser';

function App() {
  return (
    <div className="App">
        <h1>Axios GET method</h1>
        < AxiosGetUser />
        <br/>
        <h1>Fetch method</h1>
        < FetchGetUser />
    </div>
  );
}

export default App;
