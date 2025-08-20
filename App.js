import React from "react";
import { createRoot } from "react-dom/client";

let Title=()=><h1>This is the nested component</h1>;
let HeadingComponent=()=>(
  <div>
  <Title/>
  <h1 className="satya">This a FUNCTIONAL COMPONENET</h1>
  </div>);

let heading=<h1 id="heading">  Namaste satya </h1>;
const root = createRoot(document.getElementById("root"));
root.render(heading);
root.render(<HeadingComponent/>);
