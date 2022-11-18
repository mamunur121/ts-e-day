import React, { CSSProperties, ReactNode } from "react";

type BoxProps = {
  children: ReactNode;
  style?: CSSProperties;
};

const Box = ({ children, style = {} }: BoxProps) => {
  return (
    <section
      style={{
        padding: "1em",
        border: "10px solid red",
        margin: "1em",
        ...style,
      }}
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
      <Box style={{ borderColor: "blue", background: "antiquewhite" }}>
        <h2>A nested React component with two children.</h2>
        <p>The second child.</p>
      </Box>
    </Box>
  );
}

export default App;
