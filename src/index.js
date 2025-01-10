import { createRoot } from "react-dom/client";
import React from "react";
import { handleClick } from "./controllers/handleclick";
import { handleSubmit } from "./controllers/handlesubmit";

const root = createRoot(window.bodyTag);
root.render(

<main>
<h1>Rods and reels!</h1>
    <p>Hello outdoors friends!!!</p>
    <MyGreeting/>
    <button onClick={handleClick}>On sale now!</button>
    <output id="outputTag"></output>
    <form onSubmit={handleSubmit}>
      <input type="text">To get a discount</input>
      <input type="submit"></input>
</form>   

</main>
)