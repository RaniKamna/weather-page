import './App.css';
import { ApexChart } from './components/ApexChart';
import { MainTitle } from './components/MainTitle';
import { Navbar } from './components/Navbar';
import { WeeklyDetails } from './components/WeeklyDetails';

function App() {
  return (
    <div className="App">
      <MainTitle />
      <Navbar />
      <ApexChart />
      <WeeklyDetails />
    </div>
  );
}

export default App;
