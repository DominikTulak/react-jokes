import React from 'react';
import {Navbar, NavbarBrand} from "reactstrap";
import './App.css';
import Greeting from "./Greeting";

function App() {
  return (
    <>
      <Navbar color="light" fixed="top" light={true}>
        <NavbarBrand href="/">Chuck Norris jokes</NavbarBrand>
      </Navbar>
      <main className="container">
        <Greeting />
      </main>
      <footer id="sticky-footer" className="py-4 bg-dark text-white-50  fixed-bottom">
        <div className="container text-center">
          <small>Test App</small>
        </div>
      </footer>
    </>
  );
}

export default App;
