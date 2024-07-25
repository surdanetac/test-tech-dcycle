import { getGender, getNationality, getAge, getDataCovid } from './http';

export const fetchDataExercise1 = async (name) => {
  const [genderResponse, nationalityResponse, ageResponse] = await Promise.all([
    getGender(name),
    getNationality(name),
    getAge(name)
  ]);

  return {
    gender: genderResponse.data,
    nationality: nationalityResponse.data.country,
    age: ageResponse.data
  };
};

export const fetchDataExercise2 = async () => {
  const covidResponse = await Promise.all([getDataCovid()]);
  const cases = covidResponse[0].data.map(i => {
    return {
      date: formatDate(i.dateChecked),
      positiveIncrease: i.positiveIncrease,
      negativeIncrease: i.negativeIncrease,
      pendingTest: i.pending,
      totalPositiveCases: i.positive,
    }
  })
  const hospitality = covidResponse[0].data.map(i => {
    return {
      date: formatDate(i.dateChecked),
      inIcuCurrent: i.inIcuCurrently,
      onVentCurrent: i.onVentilatorCurrently,
      hospCurrent: i.hospitalizedCurrently,
      hospIncrease: i.hospitalizedIncrease,
    }
  })
  const deceases = covidResponse[0].data.map(i => {
    return {
      date: formatDate(i.dateChecked),
      deceases: i.deathIncrease,
      totalDeath: i.death,
    }
  })
  return { cases: cases, hospitality: hospitality, outcomes: deceases }
};

const formatDate = (date) => {

  let dateString = date.replace("T24:00:00Z", "T00:00:00Z");

  const newDate = new Date(dateString);

  newDate.setUTCDate(newDate.getUTCDate() + 1);

  let day = newDate.getUTCDate();
  let month = newDate.getUTCMonth() + 1; 
  let year = newDate.getUTCFullYear();

  return `${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}-${year}`;
}

