import { useState, useEffect } from 'react';
import { fetchDataExercise2 } from '../../services/fetchServices';
import TableRender from '../../components/tableRender';
import Spinner from '../../components/loading.jsx';

const Exercise2 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    setLoading(true)
    try {
      const result = await fetchDataExercise2();
      setData(result)
      setError(null)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setError('Failed to fetch data')
      setLoading(false)
    }
  }
  const schemaCases = [
    { label: 'Fecha', key: 'date'},
    { label: 'Test positivos', key: 'positiveIncrease'},
    { label: 'Test negativos', key: 'negativeIncrease'},
    { label: 'Test pendientes', key: 'pendingTest'},
    { label: 'Total Casos Positivos', key: 'totalPositiveCases'}
  ]
  const schemaHospitality = [
    { label: 'Fecha', key: 'date'},
    { label: 'Hospitalizados en UCI.', key: 'inIcuCurrent'},
    { label: 'Hospitalizados con Ventilada.', key: 'onVentCurrent'},
    { label: 'Aumento Hosp.', key: 'hospIncrease'},
    { label: 'Total Hospitalizados.', key: 'hospCurrent'},
  ]
  const schemaDecease = [
    { label: 'Fecha', key: 'date'},
    { label: 'Decesos por día', key: 'deceases'},
    { label: 'Total de Muertes', key: 'totalDeath'},
  ]

  return (
    <div>
        <div className='header'>
          <h1 className='header__title'>Estadisticas generales relacionadas al COVID en EEUU. </h1> 
        </div>
          { loading ? <Spinner color={'white'}/> : data ? error ? <p>{error}</p> : 
            <div>
              <div className='main'>
                  <div className='main__container'>
                    <TableRender schema={schemaCases} rows={data.cases} title='Datos casos COVID'></TableRender>
                  </div>
                  <div className='main__container'>
                    <TableRender schema={schemaHospitality} rows={data.hospitality} title='Datos hospitalización COVID'></TableRender>
                  </div>
                  <div className='main__container'>
                    <TableRender schema={schemaDecease} rows={data.outcomes} title='Datos fallecimientos COVID'></TableRender>
                  </div>
              </div>
            </div> 
          : ''}
    </div>
  )
}

export default Exercise2;
