import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Picture from "./app.js";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Picture />
    </StrictMode>
);