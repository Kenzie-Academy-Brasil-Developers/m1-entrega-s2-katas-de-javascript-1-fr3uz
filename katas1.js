function oneThroughTwenty () {
  let meuRetorno = [];
  for (let i = 1; i <= 20; i++) {
      meuRetorno.push(i)
  }
  return meuRetorno;
}
console.log(oneThroughTwenty());


function evensToTwenty () {
  let meuRetorno2 = [];
  for (let i = 2; i <= 20; i+=2) {
      meuRetorno2.push(i)
  }
  return meuRetorno2;
}
console.log(evensToTwenty());

function evensToTwenty () {
  let meuRetorno3 = [];
  for (let i = 1; i <= 20; i+=2) {
      meuRetorno3.push(i)
  }
  return meuRetorno3;
}
console.log(evensToTwenty());

function multiplesOfFive () {
  let meuRetorno4 = [];
  for (let i = 5; i <= 100; i+=5) {
      meuRetorno4.push(i)
  }
  return meuRetorno4;
}
console.log(multiplesOfFive());

function squareNumbers () {
  let meuRetorno5 = [];
  for (let i = 1; i <= 10; i++) {
      meuRetorno5.push(i*i)
  }
  return meuRetorno5;
}
console.log(squareNumbers());

function countingBackwards () {
  let meuRetorno6 = [];
  for (let i = 20; i >= 1; i--) {
      meuRetorno6.push(i)
  }
  return meuRetorno6;
}
console.log(countingBackwards());

function evenNumbersBackwards () {
  let meuRetorno7 = [];
  for (let i = 20; i >= 2; i-=2) {
      meuRetorno7.push(i)
  }
  return meuRetorno7;
}
console.log(evenNumbersBackwards());

function oddNumbersBackwards () {
  let meuRetorno8 = [];
  for (let i = 19; i >= 1; i-=2) {
      meuRetorno8.push(i)
  }
  return meuRetorno8;
}
console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards () {
  let meuRetorno9 = [];
  for (let i = 100; i >= 1; i-=5) {
      meuRetorno9.push(i)
  }
  return meuRetorno9;
}
console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards () {
  let meuRetorno10 = [];
  for (let i = 10; i >= 1; i--) {
      meuRetorno10.push(i*i)
  }
  return meuRetorno10;
}
console.log(squareNumbersBackwards());