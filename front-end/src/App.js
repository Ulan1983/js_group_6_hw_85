import React, {Fragment} from 'react';
import {Container} from "reactstrap";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Routes from "./Routes";

function App() {
  return (
    <Fragment>
        <header>
            <Toolbar/>
        </header>
      <Container style={{marginTop: '20px'}}>
        <Routes />
      </Container>
    </Fragment>
  );
}

export default App;
