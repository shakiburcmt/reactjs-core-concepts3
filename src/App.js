import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

function LoadComments() {
  const [comments, setComment] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
    .then(data=>setComment(data))
  }, [])
  return (
    <div>
      <h2>Total Comments: {comments.length}</h2>
      {
        comments.map(comment => <h4>{comment.name}</h4>)
      }
      {
        comments.map(comment=><Comment email={comment.email}></Comment>)
      }
    </div>
  )
}

function Comment(props) {
  return (
    <div>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App;
