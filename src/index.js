import React from "react";
import { createRoot } from "react-dom/client";
import { handleSubmit } from "./controllers/handleSubmit";
import { handleClick } from "./controllers/handleClick";

const root = createRoot(window.bodyTag);
root.render(
  <main>
    <h1 class="m-1 text-center ">Rods and reels!</h1>
    <br />
    <iframe
      class="m-5"
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
    <p class="fw-bold fst-italic p-2">
      Hello my fellow fishing enthusiasts! We have 100's of rods and reels on
      sale right now. Every brand you can think of from abu garcias to zebcos in
      many different colors to fit every age. We even have ocean poles for you
      deep sea fishermen who love to go all out. Come check us out and leave
      your information to recieve an extra discount on our already low prices.
    </p>
    <br />
    <p class="p-2">
      <h3>Abu Garcia Max X baitcast</h3>
      Abu Garcia Max X baitcast Experience better-than-ever Abu Garcia
      engineering for MAXimum performance with the Abu Garcia Max X baitcast
      combo. This combo features a custom designed reel seat with integrated
      polymer comfort grip, for ultimate comfort, 4+1 bearing system for
      ultimate smoothness, and 24-ton graphite construction for ultimate
      sensitivity.
    </p>
    <p class="p-2">
      <h3>Zebco Bullet MG Spincast Reel</h3>
      100% performance-driven, the Zebco® Bullet MG Spincast Reel features a
      super-lightweight magnesium body that pairs perfectly with your finest
      rods, for a precision feel and balance that you'll appreciate all day
      long. It's Zebco's fastest spincaster ever, with a 5.1:1 retrieve ratio
      that brings in an impressive 29.6" of line per handle turn, and it has all
      the speed and power needed to handle big game fish in freshwater. Now you
      can turn to spincast gear for performance fishing using your favorite
      techniques, without worrying about line tangles and other issues. The
      Zebco Bullet MG's unprecedented feature list includes strong all-metal
      construction; precision-machined aluminum and brass gears; a GlideLine
      ball bearing: a smooth 9-bearing (8+1) system with anti-reverse clutch;
      oscillating quick-change spool; ZeroFriction™ pick-up pins;
      dial-adjustable disk drag with up to 12 lbs. of run-stopping power; and
      special GripEm™ handle knobs for solid retrieves in any weather.
      Convertible left/right retrieve; pre-spooled with premium 10-lb. mono.
      Manufacturer's 1-year warranty.
    </p>
    <p class="p-2">
      <h3>Offshore Angler SeaFire Conventional Rod and Reel Combo</h3>
      Set the water on fire with the Offshore Angler™ SeaFire Conventional Rod
      and Reel Combo. Our SeaFire Conventional Reel is ideal for bottom fishing
      for snapper or grouper. It's also a great trolling reel for tuna, dolphin,
      and kingfish. A 1-piece CNC-machined aluminum frame provides the strength
      needed to hold up to hard-charging trophies. Smooth and precise, the
      SeaFire features 4 sealed stainless steel ball bearings engineered to
      perform in a harsh saltwater environment. Additional features include a
      powerful star drag system to help slow the run, a double-anodized
      machined-aluminum spool with line capacity rings, and an audible bait
      clicker. Offshore Angler's tenacious SeaFire Conventional Rod boasts a
      rugged, 1-piece tubular composite blank with corrosion-resistant,
      double-footed stainless steel guides and a graphite reel seat. A
      comfortable EVA handle and graphite gimbal with cover work well with rod
      holders and fighting belts.
    </p>
    <p class="p-2">
      <h3>2-Piece Saltwater Spinning Fishing Rod Offshore Heavy Graphite</h3>
      2-Piece Saltwater Spinning Fishing Rod Offshore Heavy Graphite Portable
      Travel Description: Fiblink 2-Piece Saltwater Spinning fishing Rod
      offshore Carbon Portable Fishing Rod At Fiblink Fishing Tackle we deliver
      more than just fishing gears. We deliver the motivation to hit the water,
      the energy to keep focus and the excitement that immits every cast with
      high expectations. Each of our products is designed and continuously
      improved through the customer's needs and market trends. We do our best to
      continually improve our products to meet your individual fishing equipment
      needs. We are proud to provide the 1 year Service! Powerful, versatile,
      and flexible. Light weight with tremendous overall strength. 2-Piece
      portable carbon saltwater spinning fishing rod. Specifications 6' Heavy
      Length: 6' | Pieces: 2 | Power: Heavy | Guides: 6+1 | Line Weight: 30-50Lb
      | Lure Weight: 4-7oz | Rod Weight: 11.7oz 7' Medium Heavy Length: 7' |
      Pieces: 2 | Power: Medium Heavy | Guides: 7+1 | Line Weight: 15-30Lb |
      Lure Wei
    </p>
    <button onClick={handleClick} class="btn btn-primary p-2">
        Best price guaranteed!
      </button>
    <br />
    <form onSubmit={handleSubmit}>
      <br />
      Name: <input type="name" />
      <br />
      <br />
      Email: <input type="email" />
      <br />
      <br />
      Number:{" "}
      <input
        type="tel"
        id="phone"
        placeholder="(123) 456 - 7890 "
        maxLength="12"
      />
      <br />
      <br />
      <input type="submit" class="btn btn-warning" />
    </form>
    <output id="outputTag"></output>
  </main>
);
