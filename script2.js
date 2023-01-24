/*
let alumnos =[
    {nombre : "jhair",
    edad : 28,
    promedio : 14,
    },
    {nombre : "elmer",
    edad : 21,
    promedio : 15
    }
]

console.log("Nota de "+alumnos[0].nombre+" "+ alumnos[0].promedio+"\n Nota de "+alumnos[1].nombre+" "+ alumnos[1].promedio)

let alumno = {
    nombre : "jhair",
    apellido : "infanzon",
    hobbies : {
        instrumento : {
            cuerda : "guitarra",
            viento : "flauta"
        },
        deporte : "futbol",
    }
}

console.log(
    alumno.hobbies.instrumento.cuerda
)
*/


/*function Vocales(){
    let frase=prompt("ingrese una frase");
    let numeroVocal=0;

    const vocales=[A,a,á,E,e,é,I,i,í,O,o,ó,U,u,ú];
    let letras=[];

    letras=frase.split("");

    letra.map(
        letra
    )

    letras.map(letra => (vocales.map(vocal =>(vocal==letra)? numeroVocal++:numeroVocal=numeroVocal)));

    console.log(letras);

    console.log(""+numeroVocal);
}

Vocales();*/

	
/*function divisores(){
    var n1 = prompt("Escribe primer número");
    var n2 = prompt("Escribe segundo número");
    var dn1=[];
    var dn2=[];
    var iguales=[];
    var resto;
    
    for (i=1; i<=n1 ; i++){
        resto = n1%i;
        if (resto==0){
            dn1.push(i);
        }
    }

    for (i=1; i<=n2 ; i++){
        resto = n2%i;
        if (resto==0){
            dn2.push(i);
        }
    }

    dn1.map(function(num1){
        num1+1
    })
        for (i=0; i<dn1.length; i++){
                if (dn1[i]==dn2[i]){
                    iguales.push(dn1[i]);
                }
            }

    console.log("divisores de "+n1+" : "+dn1);
    console.log("divisores de "+n2+" : "+dn2);
    console.log("divisores en común "+iguales);

    
    
}

divisores();

*/

/*let firstName="Jhair";
let lastName="Infanzon";
let direccion="calle principal";

direccion= "primera calle";

console.log("Nombre : "+firstName,"\nApellido : "+lastName+"\nDireccion : "+direccion)


let calle="San José";
let pais="Perú";

let fullMailingAddress=calle+" "+pais;
console.log(fullMailingAddress);

let puntuacion1=20,puntuacion2=45,puntuacion3=80;

let puntuacionTotal=puntuacion1+puntuacion2+puntuacion3;
let puntuacionMedia=puntuacionTotal/3;

console.log("puntuacion total : "+puntuacionTotal+"\n puntuacion meddia : "+puntuacionMedia);

let placas = 20;
let personas = 7;

 placas++;

 let mensaje = " hay "+placas+" placas disponibles";
 console.log(mensaje);

 let frutas=["manzana","platano","pera","mango","sandia"];




const CalcularTotal = (subtotal,impuestos) =>{
    console.log(subtotal+impuestos);
}

CalcularTotal(12,10
    );


let tabla ="";
const multiplos=[0,1,2,3,4,5,6,7,8,9,10,11,12]

 multiplos.map((multiplo)=>{
    for(let i=0;i<=12;i++){
        tabla+=multiplo+" x "+i+" = "+(multiplo*i)+"\n";
    }
})

console.log(tabla);


let numero=[1,3,6,8,5];
let numerocubo=[];

numerocubo=numero.map((num)=> Math.pow(num,3));

console.log(numerocubo);*/




/*let contador =1;

while(contador >= 0){
    console.log("contador", contador)
    contador-=5;
}

const imprimir = (palabra)=>{
    let num=1;
    while(num<=10){
    console.log(palabra);
    num++;
    }
}

let num=parseInt(prompt("ingrese numero entero positivo")) ;
let cont=1;
let resul="";
while(cont <= num){
    if(cont%2!=0){
        resul+=" "+cont;
    }
    cont++;
}
console.log(resul)
imprimir("hola tecsup");*/

var contenedor = document.createElement('div');
contenedor.innerText = 'Hola Mundo';


    document.getElementById("root").innerHTML =`
    <form>
        <input type="email" value="jinfanzonquispe30@gmail.com" id="input_email" placeholder="ingrese correo">
        <input type="password" value="123456" id="input_password" placeholder="ingrese contraseña">
        <input type="submit" value="iniciar sesion" id="input_submit">
    </form>`;



