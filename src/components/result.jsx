import Flag from 'react-world-flags';

const Result = ({ gender, nationality, age }) => {
  return (
    <div className="result">
      <div className="result__container">
        <h2>Resultados</h2>
        <div className="result__container-info">
          <div className="result__container-info-header">
            {gender && (
              <div>
                <h4>Género:</h4>
                <p>{gender.gender} ({(gender.probability * 100).toFixed(0)}%)</p>
              </div>
            )}
            {age && (
              <div>
                <h4>Edad:</h4>
                <p>{age.age} años</p>
              </div>
            )}
          </div>
          {nationality && nationality.length > 0 && (
            <div className="result__container-nationalities">
              <h3>Nacionalidades</h3>
              <ul>
                {nationality.map((nat) => (
                  <li key={nat.country_id}>
                    <Flag code={nat.country_id} alt={nat.country_id} className='result__container-nationalities-flag'/>
                    <h4>
                      {nat.country_id} ({(nat.probability * 100).toFixed(2)}%)
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Result;