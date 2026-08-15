const testScores = [56, 72, 89, 91, 64];
let squirrel = testScores[3];

function getAverage(array) {
  let studentCount = array.length;
  let totalPoints = 0;
  for (var i = 0; i < studentCount; i++) {
    totalPoints += array[i];
  }
  return totalPoints / studentCount;
}

console.log(getAverage(testScores));

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(squirrel));

function hasPassingGrade(score) {
  if (getGrade(score) === "F") {
    return false;
  } else {
    return true;
  }
}

console.log(hasPassingGrade(66));

function studentMsg(array, score) {
  if (hasPassingGrade(score) === true) {
    return `Class average: ${getAverage(array)}. Your grade: ${getGrade(score)}. You passed the course.`;
  } else {
    return `Class average: ${getAverage(array)}. Your grade: ${getGrade(score)}. You failed the course.`;
  }
}

console.log(studentMsg(testScores, squirrel));
