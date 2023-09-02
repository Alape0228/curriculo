let anchoVentana = window.innerWidth;

let titulo = document.querySelector(".encabezado_titulo")

window.addEventListener('scroll', ()=>{

    let posicion = window.scrollY;  // retorna 0 Como posicion inicial del scroll

    if (posicion < 200 ) {
        titulo.style.transform = `translateY(${posicion}px)`
    } else if (posicion > 200 && posicion < 500) {
        titulo.style.transform = `translateY(${posicion}px)`
    }
})




/*
    let posicion = titulo.getBoundingClientRect().top;
    Entre mas Cerca este el titulo o el elemento seleccionado del scroll el valor que retornara posicion sera 0
*/


class portafolio2 {
    constructor(id,imagen,titulo,parrafo,url,alto,ancho){
        this.id = id;
        this.imagen = imagen;
        this.titulo = titulo;
        this.parrafo = parrafo;
        this.url = url;
        this.alto = alto;
        this.ancho = ancho;
    }
}
let infoCaja = [
    [0,"./IMG/img_portafolio01.png","Efecto Css Galeria","Parrafo00","https://www.google.com/",173,372],
    [1,"./IMG/img_portafolio02.png","Efecto Css Imagenes","Parrafo01","https://www.google.com/",394,372],
    [2,"./IMG/img_portafolio03.png","Efecto Css Formulario","Parrafo02","https://www.google.com/",337,372],
    [3,"./IMG/img_portafolio04.png","Efecto Css seleccion Imagen","Parrafo03","https://www.google.com/",284,372],
    [4,"./IMG/img_portafolio05.png","Pagina Estatica","Parrafo04","https://www.google.com/",171,372]
]

let objetoCaja = {};
let portafolioContainer = document.querySelector(".portafolio-container");
let fragmento = document.createDocumentFragment();



for (let i = 0; i < infoCaja.length; i++) {
    objetoCaja[i] = new portafolio2(infoCaja[i][0],infoCaja[i][1],infoCaja[i][2],infoCaja[i][3],infoCaja[i][4])


    let div = document.createElement("DIV");
    div.classList.add(`portafolio-caja`,`portafolio-caja0${i}`,`${objetoCaja[i].id}`);  

    let divImagen = document.createElement("DIV")
    divImagen.classList.add(`contenedor_img`)

    let img = document.createElement("IMG");
    img.setAttribute("src",`${objetoCaja[i].imagen}`)
    img.classList.add(`portafolio_img`,`portafolio_img0${i}`)

    let estiloCaja = document.createElement("DIV");
    estiloCaja.classList.add(`clase_estilo_Caja`)

    estiloCaja.innerHTML = `
    <a href="${objetoCaja[i].url}" target="_blank">
        <h2>    
            ${objetoCaja[i].titulo}
        </h2>
        <p>
        ${objetoCaja[i].parrafo}
        </p>
    </a>`

    divImagen.appendChild(img)
    div.appendChild(divImagen)
    div.appendChild(estiloCaja)
    fragmento.appendChild(div);
    portafolioContainer.appendChild(fragmento);



    
    // infoCaja[i][5] = div.clientHeight;
    // infoCaja[i][6] = div.clientWidth;
    // console.log(objetoCaja[i].alto);
    // console.log(objetoCaja[i].ancho);
    // Es necesario desbloquear las 4 lineas anteriores con el fin de determinar el alto y el ancho de los divs y una ves obtenido el tamaño en especifico agregarlos al array 
    objetoCaja[i].alto = infoCaja[i][5];
    objetoCaja[i].ancho = infoCaja[i][6];
    


    window.addEventListener('scroll', ()=>{

    let posicion = window.scrollY;      // retorna 0 Como posicion inicial del scroll
    let anchoVentana = window.innerWidth;   // retorna el tamaño ancho de la pagina
    // console.log(posicion);

        if (anchoVentana > 1200) {
            if (posicion < 1500) {
                div.style.opacity = "0"
            }else if (posicion >= 1500) {
                div.style.opacity = "1"
        
                let alto = 0;
                let ancho = 0;
        
                let aumento = posicion - 1500;
                alto = alto + aumento;
                ancho = ancho + aumento;
        
                if (alto <= objetoCaja[i].alto) {divImagen.style.height = `${alto}px`}
                if (ancho <= objetoCaja[i].ancho){divImagen.style.width = `${ancho}px`}
            }else{
                div.style.opacity = "1"
            }
        }else if (anchoVentana >= 320 && anchoVentana <= 479) {
            // console.log(posicion);
            if (posicion < 1800) {div.style.opacity = "0"}
            else if (posicion > 1800) {
                div.style.opacity = "1"
        
                let alto = 0;
                let ancho = 0;
                let aumento = posicion - 1800;
                alto = alto + aumento;
                ancho = ancho + aumento;
        
                if (alto < objetoCaja[i].alto && alto < 273) {divImagen.style.height = `${alto}px`}
                if (ancho < objetoCaja[i].ancho){divImagen.style.width = `${ancho}px`}
            }else{
                div.style.opacity = "1"
            }
        }

    })

}



let letraO = document.querySelector(".letra_o");
let efectoLetraO = document.querySelectorAll(".letra_o .letra_vertical");

letraO.addEventListener("mouseover",()=>{
    efectoLetraO[0].style.animation = "letra2 .5s ease-in-out forwards"
    efectoLetraO[1].style.animation = "letra2 .5s ease-in-out forwards"
})

letraO.addEventListener("mouseover",()=>{
    efectoLetraO[1].style.animation = "letra4 .5s ease-in-out forwards"
    efectoLetraO[2].style.animation = "letra4 .5s ease-in-out forwards"
})


let letraT = document.querySelector(".letra_t");
let efectoLetraT = document.querySelectorAll(".letra_t .letra_vertical");

letraT.addEventListener("mouseover",()=>{
    efectoLetraT[0].style.animation = "letra2 .5s ease-in-out forwards"
    efectoLetraT[1].style.animation = "letra2 .5s ease-in-out forwards"
})

letraT.addEventListener("mouseover",()=>{
    efectoLetraT[1].style.animation = "letra4 .5s ease-in-out forwards"
    efectoLetraT[2].style.animation = "letra4 .5s ease-in-out forwards"
})



let letraC = document.querySelector(".letra_cc");
let efectoLetraC = document.querySelectorAll(".letra_cc .letra_vertical");

letraC.addEventListener("mouseover",()=>{
    efectoLetraC[0].style.animation = "letra2 .5s ease-in-out forwards"
    efectoLetraC[1].style.animation = "letra2 .5s ease-in-out forwards"
})

letraC.addEventListener("mouseover",()=>{
    efectoLetraC[1].style.animation = "letra4 .5s ease-in-out forwards"
    efectoLetraC[2].style.animation = "letra4 .5s ease-in-out forwards"
})


let letraAA = document.querySelector(".letra_aa");
let efectoLetraAA = document.querySelectorAll(".letra_aa .letra_vertical");

letraAA.addEventListener("mouseover",()=>{
    efectoLetraAA[0].style.animation = "letra2 .5s ease-in-out forwards"
    efectoLetraAA[1].style.animation = "letra2 .5s ease-in-out forwards"
})

letraAA.addEventListener("mouseover",()=>{
    efectoLetraAA[1].style.animation = "letra4 .5s ease-in-out forwards"
    efectoLetraAA[2].style.animation = "letra4 .5s ease-in-out forwards"
})


let letraE = document.querySelector(".letra_e");
let efectoLetraE = document.querySelectorAll(".letra_e .letra_vertical");

letraE.addEventListener("mouseover",()=>{
    efectoLetraE[0].style.animation = "letra2 .5s ease-in-out forwards"
    efectoLetraE[1].style.animation = "letra2 .5s ease-in-out forwards"
})

letraE.addEventListener("mouseover",()=>{
    efectoLetraE[1].style.animation = "letra4 .5s ease-in-out forwards"
    efectoLetraE[2].style.animation = "letra4 .5s ease-in-out forwards"
})


let encabezado = document.querySelector(".encabezado")
let botonNavInput = document.querySelector(".boton_nav_input");
let botonNavLabel = document.querySelector(".boton_nav_label")


let nav320 = document.querySelector(".nav320");




if (anchoVentana >= 320 && anchoVentana <= 478) {

    botonNavInput.addEventListener("click",()=>{
        if (botonNavInput.checked == false) {
            nav320.style.animation = ""
        }else{
            nav320.style.animation = "navbajar320 1s ease-in-out forwards"
        }

    })
}

let script = document.querySelector(".script")


