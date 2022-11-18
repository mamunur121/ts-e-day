import React, { ReactNode } from "react";

type BoxProps = {
  children: ReactNode;
};

const Box = ({ children }: BoxProps) => {
  return (
    <section
      style={{ padding: "1em", border: "10px solid red", margin: "1em" }}
    >
      {children}
    </section>
  );
};

function App() {
  return (
    <Box>
      Just a string.
      <p>Some HTML that is not nested.</p>
      <Box>
        <h2>Another React component with one child.</h2>
      </Box>
      <Box>
        <h2>A nested React component with two children.</h2>
        <p>The second child.</p>
      </Box>
    </Box>
  );
}

export default App;
