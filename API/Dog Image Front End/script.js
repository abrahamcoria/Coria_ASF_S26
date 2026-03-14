let button =document.querySelector("button");
let img = document.getElementsByTagName("img")[0]
img.setAttribute("src", "https://images.dog.ceo/breeds/mudhol-indian/Indian-Mudhol.jpg)")

button.addEventListener("click",() => {
    let endpoint = "https://dog.ceo/api/breeds/image/random"
//fetch scaffolding
    fetch(endpoint) // Utilizing the endpoint - By DEFAULT this is a GET request
        .then(data => data.json()) // or .then(function(data){ return data.json() // which returns the data})
        .then(parsedData => {console.log(parsedData.message);
        img.setAttribute("src", parsedData.message)
        })
        .catch(errors => {
            console.log(errors);
        });
})
