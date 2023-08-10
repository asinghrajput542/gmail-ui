import Header from './components/Header';
import SidePanel from './components/SidePanel';
import './App.css'
import MailTab from './components/MailTab';
function App() {
  return (
    <div className="App">
      <Header/>
      <SidePanel/>
      <MailTab/>
    </div>
  );
}

export default App;
