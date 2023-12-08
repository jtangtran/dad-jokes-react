import './App.css'
import Joke from './Joke'
import JokeForm from './JokeForm';
import { useState } from 'react';

function App() {
  const [jokes, setJokes ] = useState([
    {
      id: 1,
      text: "I'm afraid for the calendar. Its days are numbered.",
      likes: 0
    },
    {
      id: 2, 
      text: "I used to be addicted to soap, but I'm clean now.",
      likes: 0
    }
  ]);

  const handleAddJoke = (text) => {
    setJokes([...jokes, 
      {
        id: self.crypto.randomUUID(),
        likes: 0,
        text: text
      }
    ]);
  }

  const handleDelete = (id) => {
    setJokes([...jokes].filter(joke => joke.id != id));
  }

  const handleLike = (id) => {
    setJokes([...jokes].map(joke => {
      if (joke.id == id) {
        return {...joke, likes: joke.likes + 1}
      } else {
        return joke;
      }
    }));
  }

  const sortJokes = () => {
    setJokes([...jokes].sort((a,b) => b.likes - a.likes));
  }

  const handleDislike = (id) => {
    setJokes([...jokes].map(joke => {
      if (joke.id == id) {
        return {...joke, likes: joke.likes - 1}
      } else {
        return joke;
      }
    }));
  }


  return (
    <div className="">
      <h1>Dad Jokes</h1>

      <JokeForm onAddJoke={handleAddJoke} />

      <button onClick={sortJokes}>Sort</button>

      {jokes.map(joke => (
        <Joke key={joke.id} 
          {...joke} 
          onDelete={handleDelete} 
          onLike={handleLike} 
          onDislike={handleDislike} 
        />
      ))}
  
    </div>
  )
}

export default App
