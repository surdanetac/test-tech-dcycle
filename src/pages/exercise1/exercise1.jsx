import { useState } from 'react';
import NameForm from '../../components/nameForm.jsx';
import Result from '../../components/result.jsx';
import { fetchDataExercise1 } from '../../services/fetchServices.js';
import '../../styles/exercise1.css'

const Exercise1 = () => {
  const [data, setData] = useState({ gender: null, nationality: null, age: null });
  const [error, setError] = useState(null);
  const handleNameSubmit = async (name) => {
    try {
      const result = await fetchDataExercise1(name);
      setData(result);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
    }
  };

  return (
    <div>
      <h1 className="text-white">Conoce tus posibilidades</h1>
      <NameForm onSubmit={handleNameSubmit} />
      {error ? <p>{error}</p> : <Result gender={data.gender} nationality={data.nationality} age={data.age} />}
    </div>
  );
};

export default Exercise1;
