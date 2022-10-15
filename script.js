let screen = document.querySelector(".screen");
let currentOp = document.querySelector(".currentOp");

let op ={
  value: '',
  operacion: '',
}

const arrayOp = ['/', '+', '-', '*'];

const onClick = (char)=>{
  if (arrayOp.includes(char)){
    setOp(char);
    return
  }
  switch (char) {
    case 'C':
      return onDelete();
    
    case '=':
      resultado(screen.value);
      currentOp.innerHTML = ''; // agrega el string al HTML
      break;
    case '.':
      screen.value = screen.value + char;      
      break;

    default:
      screen.value = screen.value + char;
      break;
  }
}

const resultado = (char) => {
  let res = 0;
  switch (op.operacion) {
    case '/':
      res = +op.value / +char;
      break;
    
    case '*':
      res = +op.value * +char; // el + pasa a numerico el string
      break;

    case '-':
      res = +op.value - +char;
      break;
    
    case '+':
      res = +op.value + +char;
      break;
  }

  screen.value = res.toFixed(2);

}

const onDelete = () => {
  screen.value = '';
}


const setOp = (char) =>{
  op = {
    value: screen.value,
    operacion: char,
  }
  currentOp.innerHTML = op.operacion;
  screen.value = '';
}

