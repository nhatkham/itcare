import React from "react";
import "@styles/globals.css";

export const metadata = {
  title: "Budget Management",
  description: "To manage the IT budget",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default layout;
