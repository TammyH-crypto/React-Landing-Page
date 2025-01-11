import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(window.bodyTag);
root.render(
  <main>
    <h1 class="m-1 text-center">Rods and reels!</h1>
    <h2 class="p-2">Hello outdoors friends!!!</h2>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/rhhBPNUXYis?si=q0SyOcgPYlbUj4NE"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
    <br />
    <p class="san-serif">
      Hello my fellow fishing enthusiasts! We have 100's of rods and reels on
      sale right now. Every brand you can think of from abu garcias to zebcos in
      many different colors to fit every age. We even have ocean poles for you
      deep sea fishermen who love to go all out. Come check us out and leave
      your information to recieve an extra discount on our already low prices.
    </p>
    <br />
    <button onClick={() => console.log("click")} class="btn btn-primary">
      Best price guaranteed!
    </button>
    <br />
    <form onSubmit={() => console.log("discount code 2025")}>
      <br />
      <input type="name" />
      <br />
      <br />
      <input type="email" />
      <br />
      <br />
      <input type="number" value={[1, 2, 3] - [4, 5, 6] - [7, 8, 9]} />
      <br />
      <br />
      <input type="submit" class="btn btn-warning" />
    </form>
    <output id="outputTag"></output>
  </main>
);
