import { useState } from "react"

export default function Joke({ id, text, onDelete, onDislike, onLike, likes }) {
  return (
    <div>
      <p>{text}</p>
      <p>Likes: {likes}</p>
      <button onClick={() => onLike(id)}>👍</button>
      <button onClick={() => onDislike(id)}>👎</button>
      <button onClick={() => onDelete(id)}>🗑</button>
    </div>
  )
}