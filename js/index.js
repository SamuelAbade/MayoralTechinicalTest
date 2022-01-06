// Make an alert
function final(){
    alert("Test Finalizado");
}
// Get all elements from data.json
async function getJSONData() {
    let response = await fetch('./json/data.json').catch(err => console.log(err));
    let data = await response.json();
    return data;
}
// Make searchbar works
async function search(){
    const search = document.getElementById('search-bar').value;
    let dataJSON = await getJSONData();
    // console.log(dataJSON);
    const container = document.getElementById('product');
    if(search == ""){
        main();
    }else{
        container.innerHTML = "";
        const filter = dataJSON.filter(data => {
            return data.title.includes(search.charAt(0).toUpperCase() + search.slice(1));
        });
        filter.forEach(function(product, id) {
            const card = document.createElement('div');
            card.classList = 'card-body';

            const content = `
                <div class="card spacing" style="width: 18rem;" id="${id}">
                    <img class="card-img-top" src="${product.img}" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title moreTitle">${product.title}</h5>
                        <p class="card-text" style="text-align: center;">
                            <strike style="color: grey;">${product.oldPrice}</strike>
                            <br/>
                            <div class="priceTag"><b>${product.newPrice}</b></div>
                        </p>
                        <div class="d-flex justify-content-center">
                            <a class="btn btn-primary btn-block" style="color: white;" onclick="final()">Añadir</a>
                        </div>
                    </div>
                </div>
            `;
        
    
            container.innerHTML += content;
        });
    }
}
// Main function loaded by <body>
async function main(){
    let fetched = await getJSONData();
    const container = document.getElementById('product');
    fetched.forEach(function(product, id) {
        const card = document.createElement('div');
        card.classList = 'card-body';

        const content = `
            <div class="card spacing" style="width: 18rem;" id="${id}">
                <img class="card-img-top" src="${product.img}" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title moreTitle">${product.title}</h5>
                    <p class="card-text" style="text-align: center;">
                        <strike style="color: grey;">${product.oldPrice}</strike>
                        <br/>
                        <div class="priceTag"><b>${product.newPrice}</b></div>
                    </p>
                    <div class="d-flex justify-content-center">
                        <a class="btn btn-primary btn-block" style="color: white;" onclick="final()">Añadir</a>
                    </div>
                </div>
            </div>
        `;
        
    
        container.innerHTML += content;
    });
}
