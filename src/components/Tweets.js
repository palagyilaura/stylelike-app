import React from "react";
import "../css/Tweets.css";
import { useState, useEffect } from "react";

function Tweets() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tweets, setTweets] = useState([]);

  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Origin", "http://localhost:3000/");
  headers.append("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT");

  /*
  fetch({
    mode: "cors",
    credentials: "include",
    method: "POST",
    headers: headers,
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log("Authorization failed : " + error.message));*/
  /*
  const xhr = new XMLHttpRequest();
  const url =
    "https://uxstudioteam.com/development/fedc/twitter-data.json?q=%23ux&result_type=recent";

  xhr.open("GET", url);
  xhr.onreadystatechange = () => {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhr.send();*/

  useEffect(() => {
    fetch(
      "https://uxstudioteam.com/development/fedc/twitter-data.json?q=%23ux&result_type=recent",
      {
        headers: headers,
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setTweets(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>{tweet.name}</li>
        ))}
      </ul>
    );
  }

  return (
    <section id="tweets">
      <h2 className="tweets-title">Tweets with the #UX hashtag</h2>
      <div className="tweets-body">
        <div className="tweets"></div>
      </div>
    </section>
  );
}

export default Tweets;
