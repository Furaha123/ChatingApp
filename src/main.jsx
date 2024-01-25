import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ChatContextPrrovider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ChatContextPrrovider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextPrrovider>
  </AuthContextProvider>
);
