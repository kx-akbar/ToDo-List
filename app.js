"use stcict";

const form = document.getElementById("form");
const ul = document.querySelector("ul");
const bugText = document.querySelector('p');
const typeInp = document.getElementById("todo-inp");
const themeBtn = document.getElementById('theme-btn');
const body = document.querySelector('body');


themeBtn.addEventListener('click', () => {
    body.classList.toggle('black');
    if(themeBtn.innerText == 'OFF'){
        themeBtn.innerText = 'ON';
    }else{
        themeBtn.innerText = 'OFF';
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    todoType();
});

window.onload = () => {
    console.log(localStorage.getItem('inp-text'));
}

function todoType() {
    const errorText = "Please Enter Your Text";
    if (typeInp.value == 0) {
        bugText.style.opacity = "1";
        bugText.innerText = errorText;
        bugText.classList.add('error-text');
    } else {
        let newText = typeInp.value;
        newText.trim();
        const newList = document.createElement("li");
        newList.innerText = newText;
        localStorage.setItem('inp-text', newText);
        newList.classList.add("list-item");
        ul.appendChild(newList);
        typeInp.value = "";
        const editBtn = document.createElement("i");
        editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
        newList.appendChild(editBtn);
        // ==========================================================
        const deletedBtn = document.createElement("i");
        deletedBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        newList.appendChild(deletedBtn);

        editBtn.addEventListener("click", () => {
            typeInp.value += localStorage.getItem('inp-text');
            newList.remove();

        });

        deletedBtn.addEventListener("click", () => {
            newList.remove();
        });
    }
}