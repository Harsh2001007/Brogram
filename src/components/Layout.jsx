import React from "react";

function Layout({ children }) {
  const header = (
    <header>
      <h1 className="text-gradient">The Brogram</h1>
      <p>
        <strong>The 30 simple workout programs</strong>
      </p>
    </header>
  );

  const footer = (
    <footer>
      <p>Built by - Harsh Sachan</p>
    </footer>
  );

  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}

export default Layout;
