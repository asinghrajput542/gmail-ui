import Header from './components/Header';
import SidePanel from './components/SidePanel';
import './App.css'
import Body from './components/Body';
import Compose from './components/Compose';
import { Provider } from 'react-redux';
import store from './utils/store';
function App() {
  return (
    <>
    <div className="App">
      <Provider store={store}>
      <Header/>
      <Body/>
      {/* <Compose/> */}
      </Provider>
    </div>
   
    
    </>
  );
}

export default App;
