const btn = document.getElementById("btn");
const popInput = document.querySelectorAll(".pop__up-info input");
const form = document.querySelector(".form");

const name = document.querySelector(".name")
const phone = document.querySelector(".phone")


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert()
})

popInput.forEach(element => {
    element.addEventListener("click", ()=> {
        if (element.placeholder !== "") {
            element.placeholder = "";
        } 
    })
});

btn.addEventListener("click", ()=> {
    alert("Все работает как надо!")
})