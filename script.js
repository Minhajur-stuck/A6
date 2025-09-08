const loadCategories =()=> {
  const url = 'https://openapi.programming-hero.com/api/categories'
  fetch(url)
  .then(res => res.json())
  .then(data => displayCategories(data.categories))
}

const displayCategories=(data)=> {
  const categoryContainer= document.getElementById('categories-container');
  categoryContainer.innerHTML='';

  data.forEach(element => {
    const div = document.createElement('div');
    div.innerHTML=`
      <button class="text-left cursor-pointer p-2 mb-1 rounded text-[#1F2937]  w-[100%] category-btn">${element.category_name
}</button>
    `

    categoryContainer.append(div)
  });
}
loadCategories()

const loadAllPlants =()=> {
  const url ="https://openapi.programming-hero.com/api/plants";
  fetch(url)
  .then(res => res.json())
  .then(data => displayAllPlants(data.plants))
}
// id: 1, image: 'https://i.ibb.co.com/cSQdg7tf/mango-min.jpg', name: 'Mango Tree', description:
const displayAllPlants=(data)=> {
  const cardContainer =document.getElementById('card-container');
  cardContainer.innerHTML='';

  data.forEach(element => {
    
    const newDiv = document.createElement('div');
    newDiv.innerHTML=`
      <div class="card  w-[280px] h-[450px] shadow-sm">
            <figure>
              <div class="w-[100%] h-[186px]">
                <img class="w-full h-full object-cover"
                 src= />
              </div>
            </figure>
            <div class="card-body p-3">
              <h2 class="card-title">${element.name}</h2>
              <p>${element.description}</p>
              <div class="flex justify-between items-center ">
                <div class="bg-[#DCFCE7]  p-1 rounded-lg"><span class="text-[#15803D]">${element.category}</span></div>
                <div class="font-bold">$${element.price}</div>
              </div>
              <button onclick="addToCart('${element.name}',${element.price})" class="btn cursor-pointer border p-2 mb-1 rounded-3xl bg-[#15803D] text-white w-[100%]">Add to Cart</button>
            </div>
          </div>
    `
    // console.log(element.name)
    cardContainer.append(newDiv)
  });
}
loadAllPlants()


let total=0
const addToCart = (name, price)=> {
  
  const cartContainer =document.getElementById('cart-container');
  total+= price
  const newDiv = document.createElement('div');
  newDiv.innerHTML=`
      <div>
               <div class="flex justify-between items-center">
                <div>
                  <h1 class="font-bold text-[18px]">${name}</h1>
                  <p>$${price}</p>
                </div>
                <button id="" onclick="subtraction(${total},${price})" class="cursor-pointer ">❌</button>
                </div>
            </div>
  `
  totalMoney(total)
  cartContainer.append(newDiv)
};



const subtraction=(total, price)=> {

}

const totalMoney=(money)=> {
  const sum = document.getElementById('total-money');
  sum.innerHTML =`Total: ${money}`
  // console.log(money)
}

