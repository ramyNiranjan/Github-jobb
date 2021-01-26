import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GithubJobProvider } from "./context/githubJobProvider";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <GithubJobProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GithubJobProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
