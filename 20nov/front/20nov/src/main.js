import './style.css'


const anchorElement = document.querySelector('#app');

anchorElement.textContent = 'test';


async function getData9() {
    try {
        const res = await fetch('http://localhost:3000/productos?categoria=alimentacion&precio_max=99')
        if (!res.ok) throw new Error('Error de peticion ' + res.status);

        const data = await res;
        anchorElement.textContent = data;
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

getData9();