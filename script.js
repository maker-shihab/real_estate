function handaleSubmmit(event) {
  event.preventDefault();

  var answerList = {};
  var a1a = document.querySelectorAll('.q1a');
  
  if (a1a.checked) {
     answerList.push(a1a.id);
  } else{
    console.log('Sorry');
  }
  console.log(answerList);
}
