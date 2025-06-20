import { Route, Routes } from 'react-router';
import { CreatePage, DetailsPage, HomePage } from './pages';
import toast from 'react-hot-toast';

const App = () => {
  return (
    <div data-theme="forest">
      <button
        className="btn btn-accent"
        onClick={() => toast.success('grats!')}
      >
        Click me
      </button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
