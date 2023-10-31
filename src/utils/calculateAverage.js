/**
 * @description - Calculate the average of grades
 * @param {Array} grades
 * @returns {Number}
 */
const calculateAverage = (grades) => {
  //find the sum of grades provided
  const totalScore = grades.reduce((a,b) => Number(a) + Number(b), 0);

  // calculate the average grade
  const average = totalScore / grades.length;

  return average;
}

export default calculateAverage;