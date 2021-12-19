

window.onload = iniciar;

let cuenta1 = 0;
let cuenta2 = 0;
let cuenta3 = 0;
let cuenta4 = 0;
let btnAtender1 = document.getElementById('atenderCaja1');
let seleccion1 = document.getElementById("caja1");
let btnAtender2 = document.getElementById('atenderCaja2');
let seleccion2 = document.getElementById("caja2");
let btnAtender3 = document.getElementById('atenderCaja3');
let seleccion3 = document.getElementById("caja3");
let btnAtender4 = document.getElementById('atenderCaja4');
let seleccion4 = document.getElementById("caja4");

function iniciar(){   
    añadir();
    eliminar();   
    modoNoche();
    mostrarImagenwp();
    mostrarImagenjl();
    mostrarImagenqr();
}


function añadir(){
        
    seleccion1.addEventListener('click', function(){
        cuenta1++;
        seleccion1.innerHTML = `
                En esta caja hay: ${cuenta1} clientes.
            `;
        if(cuenta1 >= 4){
            cuenta1 = 4;
            seleccion1.innerHTML = `Esta caja está llena. Cambie de caja o vacie esta.`;
            seleccion1.classList.add('lleno');

        }
        if(cuenta1 > 0){
            btnAtender1.classList.remove('hidden');
            
        }
    })
    
    seleccion2.addEventListener('click', function(){
        cuenta2++;
        seleccion2.innerHTML = `
                En esta caja hay: ${cuenta2} clientes.
            `;
        if(cuenta2 >= 4){
            cuenta2 = 4;
            seleccion2.innerHTML = `Esta caja está llena. Cambie de caja o vacie esta.`;
            seleccion2.classList.add('lleno');

        }
        if(cuenta2 > 0){
            btnAtender2.classList.remove('hidden');
            
        }
    })

    seleccion3.addEventListener('click', function(){
        cuenta3++;
        seleccion3.innerHTML = `
                En esta caja hay: ${cuenta3} clientes.
            `;
        if(cuenta3 >= 4){
            cuenta3 = 4;
            seleccion3.innerHTML = `Esta caja está llena. Cambie de caja o vacie esta.`;
            seleccion3.classList.add('lleno');

        }
        if(cuenta3 > 0){
            btnAtender3.classList.remove('hidden');
            
        }
    })

    seleccion4.addEventListener('click', function(){
        cuenta4++;
        seleccion4.innerHTML = `
                En esta caja hay: ${cuenta4} clientes.
            `;
        if(cuenta4 >= 4){
            cuenta4 = 4;
            seleccion4.innerHTML = `Esta caja está llena. Cambie de caja o vacie esta.`;
            seleccion4.classList.add('lleno');

        }
        if(cuenta4 > 0){
            btnAtender4.classList.remove('hidden');
            
        }
    })
}

function eliminar(){
    btnAtender1.addEventListener('click',function(){
        if(cuenta1 >=1){
            cuenta1--;
            seleccion1.innerHTML = `En esta caja hay: ${cuenta1} clientes.`;
        }
        if(cuenta1 != 4 ){
            seleccion1.classList.remove('lleno');
        }
        if(cuenta1 === 0){
            btnAtender1.classList.add('hidden');
            seleccion1.innerHTML = `<p>CAJA 1</p>`;
        }
    })
    
    btnAtender2.addEventListener('click',function(){
        if(cuenta2 >=1){
            cuenta2--;
            seleccion2.innerHTML = `En esta caja hay: ${cuenta2} clientes.`;
        }
        if(cuenta2 != 4 ){
            seleccion2.classList.remove('lleno');
        }
        if(cuenta2 === 0){
            btnAtender2.classList.add('hidden');
            seleccion2.innerHTML = `<p>CAJA 2</p>`;
        }
    })

    btnAtender3.addEventListener('click',function(){
        if(cuenta3 >=1){
            cuenta3--;
            seleccion3.innerHTML = `En esta caja hay: ${cuenta3} clientes.`;
        }
        if(cuenta3 != 4 ){
            seleccion3.classList.remove('lleno');
        }
        if(cuenta3 === 0){
            btnAtender3.classList.add('hidden');
            seleccion3.innerHTML = `<p>CAJA 3</p>`;
        }
    })

    btnAtender4.addEventListener('click',function(){
        if(cuenta4 >=1){
            cuenta4--;
            seleccion4.innerHTML = `En esta caja hay: ${cuenta4} clientes.`;
        }
        if(cuenta4 != 4 ){
            seleccion4.classList.remove('lleno');
        }
        if(cuenta4 === 0){
            btnAtender4.classList.add('hidden');
            seleccion4.innerHTML = `<p>CAJA 4</p>`;
        }
    })
}

function modoNoche(){
    const btnNoche = document.getElementById('modo-noche');
    const btnDia= document.getElementById('botonDia'); 
    const cajas = document.getElementsByClassName('padre');  
    const aviso = document.querySelector('.aviso');  
        btnNoche.addEventListener('click',()=>{
           
            btnNoche.classList.add('hidden');
            btnDia.classList.remove('hidden');
            aviso.classList.remove('hidden');
            for (var i = 0; i<cajas.length; i++) {
            cajas[i].classList.add("hidden");
            }
            const hidden = document.querySelector('.supermercado');
            hidden.classList.remove('super');
            hidden.classList.add('segurata');

            quitarNoche();

        });
      
}

function quitarNoche(){
    const btnDia= document.getElementById('botonDia');
    const btnNoche = document.getElementById('modo-noche');
    const cajas = document.getElementsByClassName('padre');
    const aviso = document.querySelector('.aviso'); 
    btnDia.addEventListener('click', ()=>{
        const hidden = document.querySelector('.supermercado');
        hidden.classList.remove('segurata');
        hidden.classList.add('super');
        btnDia.classList.add('hidden');
        btnNoche.classList.remove('hidden');
        aviso.classList.add('hidden');
        for (var i = 0; i<cajas.length; i++) {
            cajas[i].classList.remove("hidden");
            }
        
    })
}    

function mostrarImagenwp(){
    
    const wd = document.getElementById('wp');
    wd.addEventListener('click', ()=>{
        //generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `./wp.jpg`;
    console.log(imagen);

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    //boton cerrar imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'x';
    cerrarImagen.classList.add('btn-cerrar');
    //cuando se da click cerrar la imagen
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    //cuando se presiona se cierra la imagen
    cerrarImagen.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    overlay.appendChild(cerrarImagen);

    //mostrar en html

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
    });
    
    
}
function mostrarImagenjl(){
    
    const wd = document.getElementById('jl');
    wd.addEventListener('click', ()=>{
        //generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `./joomla.png`;
    console.log(imagen);

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    //boton cerrar imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'x';
    cerrarImagen.classList.add('btn-cerrar');
    //cuando se da click cerrar la imagen
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    //cuando se presiona se cierra la imagen
    cerrarImagen.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    overlay.appendChild(cerrarImagen);

    //mostrar en html

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
    }); 
    
}
function mostrarImagenqr(){
    
    const wd = document.getElementById('qr');
    wd.addEventListener('click', ()=>{
        //generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `./qr.png`;
    console.log(imagen);

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    //boton cerrar imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'x';
    cerrarImagen.classList.add('btn-cerrar');
    //cuando se da click cerrar la imagen
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    //cuando se presiona se cierra la imagen
    cerrarImagen.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    overlay.appendChild(cerrarImagen);

    //mostrar en html

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
    });
    
    
}





