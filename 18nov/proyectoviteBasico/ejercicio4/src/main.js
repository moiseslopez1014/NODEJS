const anchorElement = document.querySelector('#app');

const boton = document.createElement('button');
boton.textContent = 'Hacer peticion';

boton.addEventListener('click', (event) => {
    primerFetch(anchorElement);
})

const email = 'mozeeee@gmail.com';
const pass = '1234';


const submitButton = document.querySelector('#loginForm');


anchorElement.appendChild(boton);

async function primerFetch(container) {
const url = 'http://localhost:3000/info';
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Error de peticion " + res.status);
        const data = await res.json();
        //return console.log(data);
        return pintarPeticion(container, data);
    } catch (error) {
        console.log(error.message);
    }
}


function pintarPeticion(container, data) {
    const peticionDiv = document.createElement('p');
    container.appendChild(peticionDiv);
    peticionDiv.textContent = `Nombre: ${data.nombre} | curso: ${data.curso} | edad: ${data.edad} | Año: ${data.year}`;
}

submitButton.addEventListener('submit', (event) =>{
    event.preventDefault();
    const emailInput = document.querySelector('#email').value;
    const passInput = document.querySelector('#pass').value;
    fetchLogin(emailInput, passInput);
}
)


async function fetchLogin(emailInput, passInput) {
    try {
        
    } catch (error) {
        
    }
    
}

