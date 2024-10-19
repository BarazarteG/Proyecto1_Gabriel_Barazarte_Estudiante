
let bton = document.getElementById("btn");
let arrNum = [20]
let mensaje = document.createElement("p");
let pe = document.getElementById('texto');
bton.addEventListener('click', (e) => {
    for(let cont = 0; cont <= 20; cont++){
        arrNum[cont] = cont;
        if (arrNum[cont]%2 == 0){
            let messenger = document.createTextNode(`${arrNum[cont]} es par `);
            mensaje.appendChild(messenger);
            document.body.insertBefore(mensaje, pe);
        } else{
            let messenger = document.createTextNode(`${arrNum[cont]} es par `);
            mensaje.appendChild(messenger);
            document.body.insertBefore(mensaje, pe);
        }
    }
});

