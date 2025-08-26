function finalGrade(grade,proj){
    let fGrade;
    if (grade>90 || proj>10){
        fGrade = 100;
    }
    else if(grade>75 && proj>=5){
        fGrade = 90;
    }
    else if (grade > 50 && proj>=2){
        fGrade = 75;
    }
    else{
        fGrade = 0;
    }
    return fGrade;
}
console.log(finalGrade(55,3));
/*function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) return 100;
  if(exam > 75 & projects >= 5) return 90;
  if(exam > 50 & projects >= 2) return 75;
  return 0;
}/