import React from "react";
import { createRoot } from "react-dom/client";
import { handleSubmit } from "./controllers/handleSubmit";
import "../index.scss";
import Product from "./Views/Product";
import { products } from "./utils/products";

const productsList = products();
const root = createRoot(window.bodyTag);
root.render(
  <main>
    <h1 className="text-center ">Rods and reels!</h1>
    <br />
    <div className="d-flex justify-content-center">
      <iframe
      className="m-5"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/rhhBPNUXYis?si=q0SyOcgPYlbUj4NE"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
    </div>
    
    <br />
    <p className="fw-bold fst-italic p-2">
      Hello my fellow fishing enthusiasts! We have 100's of rods and reels on
      sale right now. Every brand you can think of from abu garcias to zebcos in
      many different colors to fit every age. We even have ocean poles for you
      deep sea fishermen who love to go all out. Come check us out and leave
      your information to recieve an extra discount on our already low prices.
    </p>
    <br />
    <section>
      <div className="container text-center">
        <div className="row">
          {productsList.map((product, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-xxl-3 mt-5 align-items-center d-flex flex-column"
            >
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <br />
    <div className="d-flex justify-content-center w-100">
      <form className="w-50" onSubmit={handleSubmit}>
        <label className="d-flex flex-column">
          Name: <input required name="name" type="text" />
        </label>
        <label className="d-flex flex-column">
          Email: <input name="email" type="email" />
        </label>
        <label className="d-flex flex-column">
          Number:
          <input
            name="phone"
            type="tel"
            id="phone"
            placeholder="(123) 456 - 7890 "
            maxLength="12"
          />
        </label>
        <label className="d-flex flex-column">
          <button className="btn btn-primary">Submit</button>
        </label>
        <output id="outputTag"></output>
      </form>
    </div>
  </main>
);
