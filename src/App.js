import "./css/App.css";
import Header from "./components/Header";
import Campaigns from "./components/Campaigns";
import Statistics from "./components/Statistics";
import Influencers from "./components/Influencers";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <section id="dashboard">
          <h2 className="title">My dashboard</h2>
          <button className="campaign-btn">Create a new campaign</button>
        </section>
        <div className="body-content">
          <div>
            <Campaigns />
            <div className="boxes">
              <Statistics />
              <Influencers />
            </div>
          </div>
          <Todos />
        </div>
      </div>
    </div>
  );
}

//https://uxstudioteam.com/development/fedc/twitter-data.json

export default App;
