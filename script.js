/*class Operaciones {
    constructor(numero1='',numero2='',simbolo='') {
        this.numero1=numero1;
        this.numero2=numero2;
        this.simbolo=simbolo;
    }

    getNum1(){
        return this.numero1;
    }
    setNum1(numero1){
        this.numero1=numero1;
    }

    getNum2(){
        return this.numero2;
    }
    setNum2(numero2){
        this.numero2=numero2;
    }

    getSimbolo(){
        return this.simbolo;
    }
    setSimbolo(simbolo){
        this.simbolo=simbolo;
    }

    operar(){
        let resul=0;
        console.log(+this.numero1);
        console.log(+this.numero2);
        console.log(this.simbolo);
        switch(this.simbolo){
                case '+': resul= +this.numero2 + +this.numero1;
                break;
                case '-': resul= +this.numero2 - +this.numero1 ;
                break;
                case '/': resul= +this.numero2 / +this.numero1 ;
                break;
                case '*': resul= +this.numero2 * +this.numero1 ;
                break;
        }
        limpiar();
        numb(resul);
    }
  }



var caracter = new Operaciones();

function numb(char){
    var display = document.getElementById('pantalla');
    display.value+=char;

    
    if(typeof char === 'number' || char==='.'){
        if(caracter.getSimbolo()!==''){
        caracter.setNum1(caracter.getNum1()+char);
        }else{
        caracter.setNum2(caracter.getNum2()+char);
        }
        
    }else{
        caracter.setSimbolo(char);
    }

    
}

function limpiar(){
    caracter.setNum1('');
    caracter.setNum2('');
    caracter.setSimbolo('');
    document.getElementById('pantalla').value="";
}*/

var display = document.getElementById('pantalla');


display.focus();

function numb(char){
    display.value+=char;
    display.focus();
   
}

operar=()=>{
    var resultado = display.value;
    display.value = eval(resultado);
}

function limpiar(){
    display.value="";
    display.focus();
}
