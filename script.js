const manageSpinner=(status)=> {
  if(status === true){
    document.getElementById('spinner-div').classList.remove('hidden')
    document.getElementById('card-container').classList.add('hidden')
  } else{
      document.getElementById('spinner-div').classList.add('hidden')
    document.getElementById('card-container').classList.remove('hidden')
  }
}



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
      <button id="cate-btn-${element.id}"  onclick="loadCategoriesCard(${element.id})" class="text-center md:text-left cursor-pointer p-2 mb-1 rounded text-[#1F2937] w-[100%] category-btn     cate-list">${element.category_name}</button>
    `
    categoryContainer.append(div)
  });

}
loadCategories()



const loadAllPlants =()=> {
  manageSpinner(true)
  const url ="https://openapi.programming-hero.com/api/plants";
  fetch(url)
  .then(res => res.json())
  .then(data => {
    removeActive()
    document.getElementById('all-tree').classList.add('active')
    displayAllPlants(data.plants)
  })
}

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
                 src=${element.image}/>
              </div>
            </figure>
            <div class="card-body p-3">
              <h2 onclick="loadDetails(${element.id})" class="card-title">${element.name}</h2>
              <p>${element.description}</p>
              <div class="flex justify-between items-center ">
                <div class="bg-[#DCFCE7]  p-1 rounded-lg"><span class="text-[#15803D]">${element.category}</span></div>
                <div class="font-bold">৳${element.price}</div>
              </div>
              <button onclick="addToCart('${element.name}',${element.price})" class="btn cursor-pointer border p-2 mb-1 rounded-3xl bg-[#15803D] text-white w-[100%]">Add to Cart</button>
            </div>
          </div>
    `
    // console.log(element.name)
    cardContainer.append(newDiv)
  });
    manageSpinner(false)

}
loadAllPlants()


const loadDetails=(id)=>{
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => {
    displayModal(data.plants)
  
  })
}



const displayModal = (data)  =>{
  console.log(data)
  const modalDiv = document.getElementById('details-container');
  modalDiv.innerHTML=`
    <h1 class="text-xl font-semibold mb-1">${data.name}</h1>
     <div class="w-[100%] h-[270px] mb-1">
                <img class="w-full h-full object-cover rounded"
                 src=${data.image}/>
              </div>
    <h2><span class="text-[16px] font-semibold mb-1">Category :</span><span>  ${data.category}</span></h2>
    <h2><span class="text-[16px] font-semibold mb-1">Price :</span><span> ৳${data.price}</span></h2>
    <h2><span class="text-[16px] font-semibold mb-1">Description :</span><span> ${data.description}</span></h2>
    
  `
  document.getElementById('tree_modal').showModal();
}

const removeActive=()=>{
  document.getElementById('all-tree').classList.remove('active')
  const btns = document.querySelectorAll(".cate-list");
  btns.forEach(btn => {
    btn.classList.remove('active')
  });
}



const loadCategoriesCard=(id)=>{
  manageSpinner(true)
  const url=`https://openapi.programming-hero.com/api/category/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    removeActive()
    const categoyBtn = document.getElementById(`cate-btn-${id}`);
    categoyBtn.classList.add('active')
    displayAllPlants(data.plants)
  })
}

let total=0
const addToCart = (name, price)=> {
  
  const cartContainer =document.getElementById('cart-container');
  total+= price
  const newDiv = document.createElement('div');
  newDiv.innerHTML=`
      
               <div class="flex justify-between items-center mb-1 px-3 md:px-1 bg-[#CFF0DC] rounded">
                <div class="">
                  <h1 class="font-bold text-[16px] mb-0.5">${name}</h1>
                  <h1 class="text-left text-gray-600">৳${price} × 1</h1>
                </div>
                <button id="" onclick="subtraction(${price})" class="cursor-pointer "><span class="text-[26px] text-gray-600">×</span></button>
                </div>
            
  `
  totalMoney(total)
  cartContainer.append(newDiv)
};





const subtraction=(price)=> {
  // console.log(total, price)
  total-=price;
  console.log(total)
  const cartContainer =document.getElementById('cart-container');
  cartContainer.addEventListener('click',(e)=> {
    const child = e.target.parentElement.parentElement;
    child.remove()
  })
  if(total === 0){
    const sum = document.getElementById('total-money');
  sum.innerHTML =' '
  } else{
    const totalMoneyDispy = document.getElementById('money');
    totalMoneyDispy.innerText= total
  }
  

  // console.log(cartContainer, sub)
}

const totalMoney=(money)=> {
  const sum = document.getElementById('total-money');
  sum.innerHTML =`<div class="flex justify-between">
  <div>Total:</div>
  <span>৳<span id="money">${money}</span></span>
  </div> `
  // console.log(money)
}

