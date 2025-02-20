const op= prompt('Enter operator(either +,-,* or /):');
const num1= parseFloat(prompt('Enter First Number:'));
const num2=parseFloat(prompt('Enter Second Number:'));
let calc;
if(op=='+'){
  calc=num1+num2;}
  else if(op=='-'){
    calc=num1-num2;
  }
  else if(op=='*'){
    calc=num1*num2;
  }
  else{calc=num1/num2;
  }
  console.log(calc);