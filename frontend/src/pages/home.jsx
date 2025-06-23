import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import RateLimitedUI from '../components/RateLimitedUI';

function Home() {
  const [isRateLimited, setRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getNotes = async () => {
      console.log('fetch');
      try {
        const res = await axios.get('http://localhost:5001/api/notes');
        setNotes(res.data);
      } catch (error) {
        console.log('Error fetching notes');
      }
    };

    getNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
    </div>
  );
}

export default Home;
