function getGrade(total) {
  switch (true) {
    case total > 90:
      console.log(`A+`);
      break;
    case total > 80 && total <= 90:
      console.log(`A`);
      break;
    case total > 70 && total <= 80:
      console.log(`B`);
      break;
    case total > 60 && total <= 70:
      console.log(`C`);
      break;
    case total > 50 && total <= 60:
      console.log(`D`);
      break;
    case total > 40 && total <= 50:
      console.log(`E`);
      break;
    case total > 30 && total <= 40:
      console.log(`F`);
      break;
    default:
      console.log(`Fail`);
  }
}

console.log(getGrade(99), getGrade(55), getGrade(15));
