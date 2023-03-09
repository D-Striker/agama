const btn = document.getElementById("btn");
const popInput = document.querySelectorAll(".pop__up-info input");
const popInfo = document.querySelector(".pop__up-info");
const popUp = document.querySelector(".pop__up");
const form = document.querySelector(".form");
const close__form = document.querySelector(".close__form");
const checkbox = document.querySelector(".checkbox input");

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

// add slick-slider 

$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });