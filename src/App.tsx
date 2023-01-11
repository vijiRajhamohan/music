import React from 'react';
import "../src/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./container/Home";
import Search from "./container/Search";
import Favourites from './container/Favourites';
import Playlists from './container/Playlists';
import Main from './container/Main';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Route path="/" component={Main} exact/>
        <Route path="/main" component={Main} />
        <Route path="/search" component={Search} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/playlists" component={Playlists} />
      </BrowserRouter>
    </>
  );
}

export default App;
