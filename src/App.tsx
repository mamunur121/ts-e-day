import React from "react";
import PropTypes from "prop-types";

type NameTagProps = {
  name: string;
};

// const NameTag = (props: NameTagProps) => Equivalent to <p>{props.name}</p>
// const NameTag = (props: {name: string) => Equivalent to <p>{props.name}</p>
// const NameTag: (name) => JSX.Element;
const NameTag = ({ name }: NameTagProps): JSX.Element => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{name}</p>
      </section>
      <footer />
    </main>
  );
};

NameTag.propTypes = {
  name: PropTypes.string.isRequired,
};

function App() {
  return <NameTag name="Mama" />;
}

export default App;
