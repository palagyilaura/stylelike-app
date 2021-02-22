import "./css/App.css";
import Header from "./components/Header";
import Campaigns from "./components/Campaigns";
import Statistics from "./components/Statistics";
import Influencers from "./components/Influencers";
import Todos from "./components/Todos";
import Tweets from "./components/Tweets";

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
          <div className="body-1">
            <Campaigns />
            <div className="boxes">
              <Statistics />
              <Influencers />
            </div>
          </div>
          <Todos />

        </div>
        <div className="body-content2">
          <Tweets />
        </div>
      </div>
    </div>
  );
}

export default App;
