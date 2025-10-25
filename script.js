

let main = document.querySelector("#main")

async function showProducts() {
  
let response = await fetch("https://fakestoreapi.com/products")
// console.log(response)
let data = await response.json()
//  console.log(data)

return getProducts(data)

}
showProducts()

function getProducts(data){

 data.map(pro =>{

  main.innerHTML +=  `<div class="card" style="width: 18rem;">
  <img src="${pro.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pro.title}</h5>
    <p class="card-text">${pro.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`





 })



}


























