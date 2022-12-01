import './App.css';
import CardConatiner from './CardConatiner';
import Navbar from './Navbar';
import {AppProvider} from "./context";

function App() {
  return (
    <AppProvider>
    <main>
    <Navbar />
    <CardConatiner />

    </main>
    </AppProvider>
  );
}

export default App;
