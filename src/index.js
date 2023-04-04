import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AlertProvider } from "./provider/alert";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </StrictMode>
);
