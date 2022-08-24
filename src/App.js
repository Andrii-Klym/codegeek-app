import Footer from "./components/footer/Footer";
import People from "./components/people/People"
import data from "./data.json"

import './App.css';

function App() {
  console.log(data);

  return (
    <div>
      <div className="container">
        <People />
      </div>
      <Footer />
    </div>
  );
}

export default App;