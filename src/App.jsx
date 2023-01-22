import React from "react";
import { Footer, Hero, Navbar,Memory } from "./components";
import { hero,navlinks,memory } from "./data/travigodata";

const App = () => {
  return (
    <div>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero}/>
      <Memory memory={memory}/>
      <Footer />
    </div>
  );
};

export default App;
