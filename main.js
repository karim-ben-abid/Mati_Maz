// EVENTO SCROLL

// console.log(window)

let navbar = document.querySelector(".navbar")


window.addEventListener("scroll", ()=>{
    // console.log(window.scrollY)
    if(window.scrollY > 0){
        navbar.classList.add("nav-scrolled")
    } else {
        navbar.classList.remove("nav-scrolled")
    }
})


// EVENTO NUMERI

let numUsers = document.querySelector("#numUsers")
let numArticles = document.querySelector("#numArticles")
let numComments = document.querySelector("#numComments")



// SETINVERAL() -> Built-in function. Che ci permette di eseguire un blocco di codice ogni tot numero di millisecondi. 
// CLEARINTERVAL -> FERMA IL SETINTERVAL


function createInterval(elementId, finalNumber, frequency){
    let counter = 0

    let intervallo = setInterval(() => {
        if(counter < finalNumber){
            counter++
            elementId.innerHTML = counter;
        } else {
            clearInterval(intervallo)
        }
    }, frequency);
}




//INTERSECTION OBSERVER -> CLASSE -> E' un modo per creare un nuovo oggetto con determinate caratteristiche predefinite. Non possiamo andare a modificare queste caratteristiche ma possiamo customizzarne i valori. Una classe ha sempre bisogno della keyword "new".


let isIntersected = false;

//INTERSECTION OBSERVER NUMERI DINAMICI
const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry)=>{
        if(entry.isIntersecting && isIntersected == false){
            
            createInterval(numArticles, 500, 20)
            createInterval(numUsers, 1000, 10)
            createInterval(numComments, 200, 50)
            
            isIntersected = true;

            setTimeout(() => {
                isIntersected = false;
            }, 10000);
        }
    } )
})

intersectionObserver.observe(numArticles)





// ULTIMI ANNUNCI


let announcements = [
    {name: "Katana di Hattori Hanzo", categoria: "Disegni", prezzo: 500, img:"media/dafne.jpg"},
    {name: "Vaso Ming", categoria: "Disegni", prezzo: 700, img: "media/dafne.jpg"},
    {name: "Dafne", categoria: "Disegni", prezzo: 650, img: "media/dafne.jpg"},
    {name: "Grido", categoria: "Disegni", prezzo: 350, img: "media/grido.png"},
    {name: "Drago Giapponese", categoria: "Disegni", prezzo: 1000, img: "media/drago.png"},
];


let cardsWrapper = document.querySelector("#cardsWrapper")

announcements.forEach( (annuncio, i)=>{
    if(i >=  announcements.length - 3 ){
        let col = document.createElement("div");
        col.classList.add("col-11", "col-lg-3")
        col.innerHTML = `
                            <div class="card position-relative h-100">
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger z-2">
                                NEW
                                </span>
                                <div class=" overflow-hidden ">
                                <img src=${annuncio.img} class="img-card card-img-top" alt="...">
                                </div>
                                <div class="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h3 class="card-title text-center fw-bold mb-3  text-truncate">${annuncio.name}</h3>
                                    <p class="card-text m-0">Categoria: <span class="fs-4">${annuncio.categoria}</span></p>
                                    <p class="card-text">Prezzo: <span class="fs-5">${annuncio.prezzo}</span>$</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <i class="bi bi-heart fs-3"></i>
                                    <a href="#" class="btn btn-danger">Aggiungi al Carrello</a>
                                </div>
                                </div>
                            </div>
                        `
        cardsWrapper.appendChild(col)

    }
} )

// SWIPER JS 
const swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
