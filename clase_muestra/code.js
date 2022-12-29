const apiURL = "https://jsonplaceholder.typicode.com";//URL de la API


/*Como hacerlo con fetch*/

/*
const htmlResponse = document.querySelector("#foto");

fetch(`${apiURL}/photos`)
    .then((response) => response.json())
    .then((photos) => {
        const template = photos.map((photo) => `<h1>${photo.title}</h1><img src=${photo.url}></img>`);
        htmlResponse.innerHTML = `<div>${template}</div>`
    });

*/

/*Como hacerlo con XMLHttpRequest*/
/*


const requestXML = new XMLHttpRequest();//Objeto de la clase XMLHttpRequest

function onRequestHandler(){

    //readyState = 4 -> Operación completa
    //status = 200 -> La solicitud fue exitosa

    if(this.readyState == 4 && this.status == 200){

        console.log(
            "Antes de parsear/convertir:","\n",
            this.response,"\n"
        );

        const data = JSON.parse(this.response); //Convertimos el texto traido como respuesta, en un objeto

        console.log(
            "Despues de parsear/convertir:","\n",
            data,"\n"
        );
        
        const htmlResponse = document.querySelector("#perfil"); //Devuelve el primer elemento del documento

        //mapeamos el arreglo de objetos
        const template = data.map((user) => `<li>${user.name}</li><li>${user.email}</li><li>${user.address.street}</li>`);
        
        //establece la sintaxis HTML describiendo los descendientes del elemento.
        htmlResponse.innerHTML = `<ul>${template}</ul>`;
    }
}

requestXML.addEventListener("load", onRequestHandler);//Cuando se carga la página llamamos a onRequestHandler

requestXML.open("GET", `${apiURL}/users`);//Inicializamos la petición

requestXML.send();//Enviamos la petición al servidor
*/