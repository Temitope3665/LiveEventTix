// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from "react";
import WebRoute from "./routes/webRoutes";
import { MasaProvider } from "@masa-finance/masa-react";
// import "@masa-finance/masa-react/dist/style.scss?inline";

function App() {
  return (
    <MasaProvider>
      <WebRoute />
    </MasaProvider>
  );
}

export default App;