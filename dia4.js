/* Haz una función llamada obtenerPost que:

Llame a esta URL: https://jsonplaceholder.typicode.com/posts/1
Muestre por pantalla el title y el body del post usando template literals
Tenga manejo de errores con try/catch

Luego haz una segunda llamada a esta URL que no existe para comprobar que el error se maneja bien:
https://jsonplaceholder.typicode.com/posts/9999 */

async function obtenerPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Error al obtener el post');
        }
        const post = await response.json();
        console.log(`Title: ${post.title}`)
        console.log(`Body: ${post.body}`)
    } catch (error) {
        console.error(error.message);
    }
}

obtenerPost();