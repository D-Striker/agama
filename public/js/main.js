const btn = document.getElementById("btn");
const popInput = document.querySelectorAll(".pop__up-info input");
const popInfo = document.querySelector(".pop__up-info");
const popUp = document.querySelector(".pop__up");
const form = document.querySelector(".form");
const close__form = document.querySelector(".close__form");
const checkbox = document.querySelector(".checkbox input");
const block5 = document.querySelector('.block5-img');
const burger__items = document.querySelector('.burger__items');
const burger = document.querySelector('.burger');
const body = document.querySelector('.body');

let name = document.querySelector(".name");
let phone = document.querySelector(".phone");

close__form.addEventListener("click", ()=>{
    popUp.style.display = "none";
})

popUp.addEventListener("click", (e)=>{
    if(e.target === popUp){
        popUp.style.display = "none";
    }
}) 

popInput.forEach(element => {
    element.addEventListener("click", ()=> {
        if (element.placeholder !== "") {
            element.placeholder = "";
        }
    })
});

// popInfo.addEventListener("click", ()=> {
//     popInput.forEach( (element, index) => {
//         if (index === 0) {
//             element.placeholder = "Введите ваше имя"
//         }
//         if (index === 1) {
//             element.placeholder = "Введите ваш телефон"
//         }
//     })
// })


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    

    if (name.value === "") {
        name.style.border = "1px solid red"
        name.style.boxShadow = "0 0 10px red"
        alert("Заполните пожалуйста все поля")
    } else if (phone.value === "") {
        phone.style.border = "1px solid red"
        phone.style.boxShadow = "0 0 10px red"
        alert("Заполните пожалуйста все поля")
    } else if (!checkbox.checked) {
        alert("Необходимо поставить галочку о согласии с политикой конфиденциальности сайта")
    } else {
        popUp.style.display = "none";
        alert("Ваша заявка отправлена! В ближайшее время с Вами свяжется менеджер.")
    }

   
})


btn.addEventListener("click", ()=> {
    popUp.style.display = "flex";
})

burger.addEventListener('click', ()=>{
    burger__items.style.left = '0';
})


if(burger__items.style.left = '0'){
    document.addEventListener('click', ()=>{
        burger__items.style.left = "-80%";
    })
} 





// add slick-slider 


$('.slider__items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            marginLeft: 0,
          }
        }
      ]
});

// zoom map in hover 

block5.addEventListener('mouseover', ()=> {
    block5.style.maxWidth = '250%'
    if(window.screen.width <= 420) {
        block5.style.maxWidth = '120%' 
    }
});

block5.addEventListener('mouseout', ()=> {
    block5.style.maxWidth = '80%'
});


