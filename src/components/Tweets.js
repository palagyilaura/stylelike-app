import React from "react";
import "../css/Tweets.css";
import { useState, useEffect } from "react";

function Tweets() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [tweets, setTweets] = useState([]);

  const arr = [];

  //http://cors-anywhere.herokuapp.com/corsdemo  - enable cors!!
  const url =
    "https://cors-anywhere.herokuapp.com/https://uxstudioteam.com/development/fedc/twitter-data.json?";
  useEffect(() => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        setIsLoaded(true);
        const json = this.response;

        for (let i = 0; i < json.statuses.length; i++) {
          if (
            json.statuses[i].text.search("#ux") !== -1 ||
            json.statuses[i].text.search("#UX") !== -1
          ) {
            arr.push(json.statuses[i].text);
          }
        }
        setTweets(arr);
        //console.log(tweets);

      }
    };
    xhr.open("GET", url, true);

    /*xhr.timeout = 5000;

    xhr.ontimeout = function () {
      console.log("Timed out!!!");
    };*/

    xhr.send();


  }, [
    tweets,
  ]);
  return (
    <section id="tweets">
      <h2 className="tweets-title">
        Tweets with the <p className="pink">#UX</p> hashtag
      </h2>
      <div className="tweets">
        <div className="tweets-body">

          <ul>
            {tweets.length !== 0 ? (
              tweets.map((tweet, i) => (
                <li className="tweet-row" key={i}>
                  {tweet}
                </li>
              ))
            ) : (
                <li className="tweet-row">Loading...</li>
              )}
          </ul>
        </div>
      </div>
    </section>
  );

}

export default Tweets;
