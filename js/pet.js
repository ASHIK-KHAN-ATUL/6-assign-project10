// console.log('Hi I Am Ashik ')

const loadAll = () =>{
    document.getElementById('loading').style.display=" none"
    console.log(' Wow 3 sec gone')
    document.getElementById('card-show').style.display='block';
}

const handle = () =>{
    document.getElementById('loading').style.display=" block"
    document.getElementById('card-show').style.display='none';

    setTimeout(function(){
        loadAll()
    }, 2000)
}




// View more Buttton function
function goToMain(){
    document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
}

function goToContact(){
    document.getElementById('contact-sec').scrollIntoView({behavior: 'smooth'});
}

function goToShop(){
    document.getElementById('card-show').scrollIntoView({behavior: 'smooth'});
}



// ftech  category and show
const loadecategories = () => {
    // fetch
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch((error) => console.log(error));
}
//   Show category
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');

    categories.forEach((item) =>{
        // console.log(item.id);
    const buttonContainer = document.createElement('div');
    buttonContainer.innerHTML = 
    `
    <button id="${item.id}" onclick="loadCategoryPet('${item.category}'),  handle() "  class=" category-btn1  w-[250px] h-[104px]  md:w-[312px] md:h-[104px]  items-center justify-center gap-4 flex  py-6 px-16 border-2 rounded-[16px]  ">
        <div class="">
            <img src=" ${item.category_icon} " />
        </div>
        <p  class=" category-btn font-bold text-2xl" > ${item.category} </p>
    </button>
    `
    // add button to categories container
    categoryContainer.append(buttonContainer)
    })
}


const loadCategoryPet = (name) => {
        // fetch
        fetch(`https://openapi.programming-hero.com/api/peddy/category/${name}`)
        .then(res => res.json())
        .then(info => displayCards(info.data))
        .catch((error) => console.log(error));
}





const loadDetails = async (petId) =>{
    const url = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    displayDetails(data.petData);
}

const displayDetails = (pet) => {
    const detailModal = document.getElementById('modal-content');
    detailModal.innerHTML = 
    `<div class="p-6 flex flex-col space-y-4">
            
        <div class="flex flex-col  space-y-5"> 

            <div>
                <img class=" h-full w-full object-cover rounded-[8px]" src="${pet.image}" />
            </div>
            
            <h1 class=" font-black">${pet.pet_name} </h1>

            <div class=" flex  justify-between">

                <div class=" flex flex-col space-y-2">
                    <div class=" flex items-center space-2" >
                        <div class=" h-[20px] w-[20px] ">
                            <img class=" h-full w-full object-cover "   src="https://img.icons8.com/?size=100&id=tt0XRccN77xf&format=png&color=000000" />
                        </div>
                        <p class=" text-base font-normal "> Breed:  ${pet.breed ? pet.breed : 'No Info Availble'} </P>
                    </div>

                    <div class=" flex items-center space-x-2" >
                        <div class=" h-[20px] w-[20px] ">
                            <img class=" h-full w-full object-cover "   src="https://img.icons8.com/?size=100&id=11780&format=png&color=000000" />
                        </div>
                        <p class=" text-base font-normal "> Gender:  ${pet.gender} </P>
                    </div>

                    <div class=" flex items-center space-x-2">
                        <div  class=" h-[20px] w-[20px] ">
                            <img  src="https://img.icons8.com/?size=100&id=5351&format=png&color=000000" />
                        </div>
                        <p class=" text-base font-normal "> vaccinated_status:  ${pet.vaccinated_status ? pet.vaccinated_status : 'Need Vaccinate' } </p>
                    </div>
                
                </div>
                
                <div class=" flex flex-col space-y-2">

                    <div class=" flex items-center space-x-2" >
                        <div class=" h-[20px] w-[20px] ">
                            <img class=" h-full w-full object-cover "   src="https://img.icons8.com/?size=100&id=GlEOr5x0aJpH&format=png&color=000000" />
                        </div>
                        <p class=" text-base font-normal "> Birth:  ${pet.date_of_birth ? pet.date_of_birth : 'Information Missing'} </P>
                    </div>
                    
                    <div class=" flex items-center space-x-2" >
                        <div class=" h-[20px] w-[20px] ">
                            <img class=" h-full w-full object-cover "   src="https://img.icons8.com/?size=100&id=13126&format=png&color=000000" />
                        </div>
                        <p class=" text-base font-normal "> Price:  ${pet.price} </P>
                    </div>

                </div>       
         </div>

          <div class=" border-b-2 "></div>

                <div>
                     <div>
                        <h1 class=" font-black">Detail Infoemation</h1>
                    </div>
                    <div>
                        <p>${pet.pet_details} </p>
                    </div>

                </div>
    </div>
    `
    document.getElementById("modalButton").click();
}








// fetch for cards card
const loadCards =() => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(res => res.json())
    .then(data => displayCards(data.pets))
    .catch((error) => console.log(error));
}

// show the cards
const displayCards = (pets) => {
    const cardsContainer = document.getElementById('card-container');
    cardsContainer.innerHTML ="";
    if(pets == 0){
        cardsContainer.classList.remove('grid')
        cardsContainer.innerHTML = `
        <div class=" flex flex-col gap-7 justify-center items-center p-6 border-2 rounded-xl ">
            <div class=" bg-gray-300 rounded-xl w-full h-[500px] flex flex-col items-center justify-center p-11" >
                <div class="p-3"> <img src=" images/error.webp" /> </div>

                <p class=" text-center text-btn-view pt-8 font-black "> THIS PAGE IS CURRENTLY UNDERGOING UPDATES AND NEW CONTENT WILL BE AVAILABLE VERY SOON, PLEASE STAY TUNED FOR EXCITING UPDATES COMING YOUR WAY!</p>
            </div>
            
        </div>
        `;
        return;
    }
    else{
        cardsContainer.classList.add('grid')
    }

    pets.forEach((pet) =>{
        // console.log(pet.petId);
        const card = document.createElement('div');
    card.innerHTML =
    `
    <div class="border-2 rounded-[12px] p-5 space-y-4 ">

        <div>
            <img class=" h-full w-full object-cover rounded-[8px] " src =" ${pet.image} " />
        </div>

        <div>
            <h1 class=" text-black font-extrabold text-xl "> ${pet.pet_name} </h1>
        </div>

        <div class=" space-y-2 ">
            <div class=" flex items-center space-x-2" >
                <div class=" h-[20px] w-[20px] ">
                    <img class=" h-full w-full object-cover "   src="https://img.icons8.com/?size=100&id=tt0XRccN77xf&format=png&color=000000" />
                </div>
                <p class=" text-base font-normal "> Breed:  ${pet.breed ? pet.breed : 'No Info Availble'} </P>
            </div>
            <div class=" flex items-center space-x-2" >
                <div class=" h-[20px] w-[20px] ">
                    <img class=" h-full w-full object-cover "   src="https://img.icons8.com/?size=100&id=GlEOr5x0aJpH&format=png&color=000000" />
                </div>
                <p class=" text-base font-normal "> Birth:  ${pet.date_of_birth ? pet.date_of_birth : 'Information Missing'} </P>
            </div>
            <div class=" flex items-center space-x-2" >
                <div class=" h-[20px] w-[20px] ">
                    <img class=" h-full w-full object-cover "   src="https://img.icons8.com/?size=100&id=11780&format=png&color=000000" />
                </div>
                <p class=" text-base font-normal "> Gender:  ${pet.gender} </P>
            </div>
            <div class=" flex items-center space-x-2" >
                <div class=" h-[20px] w-[20px] ">
                    <img class=" h-full w-full object-cover "   src="https://img.icons8.com/?size=100&id=13126&format=png&color=000000" />
                </div>
                <p class=" text-base font-normal "> Price:  ${pet.price} </P>
            </div>
            
        </div>

        <div class=" border-b-2 "></div>

        <div class=" flex  space-x-4">
       
                <button  onclick="likeDetail(${pet.petId})" class=" border-2 py-2 px-2 w-[20%]  rounded-[8px] flex justify-center items-center ">
                        <div class="h-[20px] w-[20px]">
                            <img class=" h-full w-full  " src="https://img.icons8.com/?size=100&id=24816&format=png&color=000000" />
                         </div>
                </button>
            
          
                <button   class="  border-2 py-2 px-4 flex justify-center items-center w-[35%]  rounded-[8px]    hover:text-white ease-in duration-300  hover:bg-btn-view text-btn-view text-lg font-bold   " >Adopt</button>
            
           
                <button onclick="loadDetails(${pet.petId})"  class="  border-2 py-2 px-4 flex justify-center items-center w-[35%]  rounded-[8px]    hover:text-white ease-in duration-300 hover:bg-btn-view text-btn-view text-lg font-bold  ">Details</button>        

        </div>
    </div>
    `
    cardsContainer.appendChild(card);
    })
    
} 









// fetch  the pet which like by clcik  the like button
const likeDetail = async(petId) =>{
    // console.log(petId);
    const url = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    displayLikeDetail(data.petData);
}
// show the pet image in right gap
const displayLikeDetail = (petData) =>{
    // console.log(petData);
    const imgLikeContainer = document.getElementById('like-img');
    const imgContent = document.createElement('div')
    imgContent.style.paddingTop = '8px';
    imgContent.innerHTML = 
        `
        <div class=" p-1 xl:p-2 border-2 rounded-[8px] " >
            <img class="rounded-[6px]" src=" ${petData.image}   " />
           
        </div>
        `
        imgLikeContainer.appendChild(imgContent)
}










loadecategories();
loadCards();