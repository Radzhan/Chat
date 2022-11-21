import React, { useEffect, useState } from 'react';
import './App.css';
import Message from './components/Message/Message';
import { arrayWithMessages } from './types';

function App() {
  const [messages, setMessages] = useState<arrayWithMessages[]>([])

  const url = 'http://146.185.154.90:8000/messages'

  let message: string;

  let author: string;
  
  const setMessage = async() => {
    const data = new URLSearchParams();

    data.set('message', message);
    data.set('author', author);
  
    const response = await fetch(url, {
      method: 'post',
      body: data,
    });
  }

  useEffect(() => {
    const interval = setInterval(async () => {

    }, 3000)
  }, [])


  return (
    <div className="App">
      <form onSubmit={e => {
        e.preventDefault()
      }}>
        <input type="text" placeholder='Enter message' onChange={(e) => {
          message = e.target.value
        }} required/>
        <input type="text" placeholder='Enter your name' onChange={e => {
          author = e.target.value
        }} required/>
        <button onClick={qwer}>Sande</button>
      </form>
    </div>
  );
}

export default App;
