const stamp = document.getElementById("container");


const biciclette = [
    {
        "nome" : "faaf 18",
        "peso": "40kg",
        "brand" : "Birdy"
    },
    {
        "nome" : "faaf 18",
        "peso": "40kg",
        "brand" : "Birdy"
    },
    {
        "nome" : "faaf 18",
        "peso": "40kg",
        "brand" : "Birdy"
    },
    {
        "nome" : "faaf 18",
        "peso": "40kg",
        "brand" : "Birdy"
    },
    {
        "nome" : "faaf 18",
        "peso": "60kg",
        "brand" : "Birdy"
    },
    {
        "nome" : "faaf 18",
        "peso": "40kg",
        "brand" : "Birdy"
    },
    {
        "nome" : "faaf 18",
        "peso": "40kg",
        "brand" : "Birdy"
    }
    
]
console.log(biciclette);

let newObj = {
    "nome" : "faaf 18",
    "peso": "40kg",
    "brand" : "Birdy"
};

console.log(newObj);

let copyNewObj = {...newObj, "numeroMarce" : "6"};
biciclette.push(copyNewObj);

console.log(copyNewObj);

//stamp.innerHTML = JSON.stringify(biciclette);

//stamp.innerHTML = JSON.stringify(biciclette, null, 4);


    for(i = 0; i < biciclette.length; i++){

        const oggetto = biciclette[i];

        const nome = oggetto.nome;
        const peso = oggetto.peso;
        const brand = oggetto.brand;

        document.getElementById("container").innerHTML += `
        <div class="margine">
            <h1>${nome}</h1>
            <h2>${peso}</h2>
            <h3>${brand}</h3>
        </div>
    </div>`
    }

