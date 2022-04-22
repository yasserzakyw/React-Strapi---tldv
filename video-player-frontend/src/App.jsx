import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import VideoDetails from "./components/VideoDetails/VideoDetails";

export default function App() {
  const documentURL = new URL(document.URL);

  return (
    <div className="App">
      <Header currentURL={documentURL} />

      <main className="App-Content-Wrapper">
        <Route exact path="/" render={() => <Home />} />

        <Route path="/video/:id">
          <VideoDetails />
        </Route>

        <Route path="/add-video" />
      </main>
    </div>
  );
}
