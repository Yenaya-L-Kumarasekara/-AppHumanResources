import './App.css';
import Footer from './components/modules/footer';
import NavBar from './components/modules/navbar';
import HomeScreenView from './components/screens/home/index';
import ExcelReader from './components/screens/upload';

function App() {
  return (
    <>
      <>
      <NavBar />
      </>
      <>
        <ExcelReader />
      </>
      <>
        <HomeScreenView />
      </>
      <>
        <Footer/>
      </>
    </>
  );
}

export default App;