const marks = [50, 90, 100];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  // let avg = (marks[0] + marks[1] + marks[2]) / 3;

  //Caculate the average
  let sum = 0;
  for (let mark of marks)
    sum += mark;
  let avg = sum / marks.length;

  if (avg <= 59) {
    return "F";
  }
  else if (avg <= 69) {
    return "D";
  }
  else if (avg <= 79) {
    return "C";
  }
  else if (avg <= 89) {
    return "B";
  }
  else if (avg <= 100) {
    return "A";
  }
}
