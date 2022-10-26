/*api*/
let url = 'https://jsonplaceholder.typicode.com/comments'
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log("Ocurrió un error", error))

const mostrarData = (data) => {
    console.log(data)
    let comment = ''
    for (let i = 0; i < 30; i++) {
        comment += `<tr> 
            <td>${data[i].name}</td>
            <td>${data[i].body}</td>
            </tr>`
    }
    document.getElementById("data").innerHTML = comment
}