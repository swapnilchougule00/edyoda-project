import Feed from "./components/Feed";
import Header from "./components/Header";
import bg from './images/bg.png'

function App() {
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Header/>
      <Feed/>
    </div>
  );
}

export default App;
