import React from "react";

type NameTagProps = {
  name: string;
  greetings?: string;
};

const NameTag = ({ name, greetings = "Hello" }: NameTagProps): JSX.Element => {
  return (
    <main>
      <header>
        <h1>{greetings}</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{name}</p>
      </section>
      <footer />
    </main>
  );
};

function App() {
  return <NameTag name="Mama" />;
}

export default App;
