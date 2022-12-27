import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";


const AnswerHere = () => (
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);

const proses = ReactDOM.createRoot(document.getElementById("root"));
proses.render(
  <React.StrictMode>
    <AnswerHere />
  </React.StrictMode>
);
