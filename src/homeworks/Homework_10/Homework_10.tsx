import { useEffect, useState } from "react";
import { Wrapper, Card, Title, Text, Button, ErrorText } from "./styles";

interface Joke {
  id: number;
  setup: string;
  punchline: string;
}
function Homework_10() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const JOKE_API_URL = "https://official-joke-api.appspot.com/random_joke";

  const fetchJoke = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(JOKE_API_URL);

      if (!response.ok) {
        throw new Error("Network error");
      }

      const data: Joke = await response.json();
      setJoke(data);
    } catch (err) {
      setError("Some Network Error");
      setJoke(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Wrapper>
      <Button onClick={fetchJoke}>Get New Joke</Button>

      {loading && <Text>Loading...</Text>}
      {error && <ErrorText>{error}</ErrorText>}
      {joke && !loading && (
        <Card>
          <Title>Joke of the Moment</Title>
          <Text>{joke.punchline}</Text>
        </Card>
      )}
    </Wrapper>
  );
}

export default Homework_10;
