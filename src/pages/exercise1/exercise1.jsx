import { useState } from 'react';
import NameForm from '../../components/nameForm.jsx';
import Result from '../../components/result.jsx';
import Spinner from '../../components/loading.jsx';
import { fetchDataExercise1 } from '../../services/fetchServices.js';

const Exercise1 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleNameSubmit = async (name) => {
    setLoading(true)
    try {
      const result = await fetchDataExercise1(name);
      setData(result)
      setError(null)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setError('Failed to fetch data')
      setLoading(false)
    }
  };
  return (
    <div>
      <div className='header'>
        <h1 className="header__title">Conoce tus posibilidades</h1>
        <NameForm loading={loading} onSubmit={handleNameSubmit} />
        { loading ? <Spinner  color={'white'}/> : data ? error ? <p>{error}</p> : <Result gender={data.gender} nationality={data.nationality} age={data.age} /> : ''}
      </div>
    </div>
  );
};

export default Exercise1;
