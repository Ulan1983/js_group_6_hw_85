import React, {Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";
import Artists from "./containers/Artists/Artists";
import Artist from "./containers/Artist/Artist";
import Album from "./containers/Album/Album";

function App() {
  return (
    <Fragment>
      <Container style={{marginTop: '20px'}}>
        <Switch>
          <Route path="/" exact component={Artists} />
          <Route path="/artists/:id" exact component={Artist} />
          <Route path="/albums/:id" exact component={Album} />
        </Switch>
      </Container>
    </Fragment>
  );
}

export default App;
