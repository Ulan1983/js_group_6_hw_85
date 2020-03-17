import React, {Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";
import Artists from "./containers/Artists/Artists";
import Artist from "./containers/Artist/Artist";
import Album from "./containers/Album/Album";
import Register from "./containers/Register/Register";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Login from "./containers/Login/Login";
import TrackHistory from "./containers/TrackHistory/TrackHistory";

function App() {
  return (
    <Fragment>
        <header>
            <Toolbar/>
        </header>
      <Container style={{marginTop: '20px'}}>
        <Switch>
          <Route path="/" exact component={Artists} />
          <Route path="/trackHistory" exact component={TrackHistory} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/artists/:id" exact component={Artist} />
          <Route path="/albums/:id" exact component={Album} />
        </Switch>
      </Container>
    </Fragment>
  );
}

export default App;
