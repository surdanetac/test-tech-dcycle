import Flag from 'react-world-flags';

const Result = ({ gender, nationality, age }) => {
  return (
    <div className="w-full mt-1">
      <div className="container-card">
        <h2>Resultados</h2>
        <div className="container-results">
          <div className="d-flex justify-content-center">
            {gender && (
              <div className="d-flex align-content-center w-full">
                <h4 className="mr-1">Género:</h4>
                <p>{gender.gender} ({(gender.probability * 100).toFixed(0)}%)</p>
              </div>
            )}
            {age && (
              <div className="d-flex align-content-center w-full">
                <h4 className="mr-1">Edad:</h4>
                <p>{age.age} años</p>
              </div>
            )}
          </div>
          {nationality && nationality.length > 0 && (
            <div className="container-nationalities">
              <h3>Nacionalidades</h3>
              <ul>
                {nationality.map((nat) => (
                  <li key={nat.country_id}>
                    <Flag code={nat.country_id} alt={nat.country_id}/> {nat.country_id} ({(nat.probability * 100).toFixed(2)}%)
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