import React, { useState, useEffect } from 'react'
import Quote from '../Quote/Quote';
import axios from 'axios';

const AllQuote = () => {

  const [Quotes, setQuote] = useState([]);

  async function getAllQuotes() {
    try {
      const res = await axios.get('http://localhost:8000/all');
      setQuote(res.data);
    }
    catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllQuotes();
  }, []);

  return (
    <ul>
      {
        Quotes.map((quote) => {
          return <Quote key={quote._id} text={quote.text} author={quote.author} />
        })
      }
    </ul>
  )
}

export default AllQuote;