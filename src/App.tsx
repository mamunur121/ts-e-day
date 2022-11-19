import React from "react";
import { CharacterType, fetchCharacter } from "./character";
import { Loading } from "./Loading";
import { CharacterInformation } from "./CharacterInformation";

function App() {
  const [character, setCharacter] = React.useState<CharacterType | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchCharacter().then((character) => {
        setCharacter(character);
        setLoading(false);
      });
    }, 1500);
  }, []);
  if (loading) return <Loading />;
  return (
    <main>{character && <CharacterInformation character={character} />}</main>
  );
}

export default App;
