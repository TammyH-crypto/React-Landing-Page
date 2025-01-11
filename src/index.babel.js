import { createRoot } from "react-dom/client";
import React from "react";
import { handleClick } from "./controllers/handleclick";
import { handleSubmit } from "./controllers/handlesubmit";
const root = createRoot(window.bodyTag);
root.render(
  /*#__PURE__*/ React.createElement(
    "main",
    null,
    /*#__PURE__*/ React.createElement("h1", null, "Rods and reels!"),
    /*#__PURE__*/ React.createElement("p", null, "Hello outdoors friends!!!"),
    /*#__PURE__*/ React.createElement(MyGreeting, null),
    /*#__PURE__*/ React.createElement(
      "button",
      {
        onClick: handleClick,
      },
      "On sale now!"
    ),
    /*#__PURE__*/ React.createElement("br", null),
    /*#__PURE__*/ React.createElement(
      "form",
      {
        onSubmit: handleSubmit,
      },
      /*#__PURE__*/ React.createElement(
        "input",
        {
          type: "text",
        },
        "To get a discount"
      ),
      /*#__PURE__*/ React.createElement("input", {
        type: "submit",
      })
    ),
    /*#__PURE__*/ React.createElement("output", {
      id: "outputTag",
    })
  )
);
