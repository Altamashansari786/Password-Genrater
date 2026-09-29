const btn = document.querySelector(".btn");
const input = document.querySelector("#input");
const copyicon = document.querySelector(".fa-copy");
const alert = document.querySelector(".alert-Container");
btn.addEventListener("click", () => {
    createpassword()
})

function createpassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordlength = 14;
    let password = "";
    for (let index = 0; index < passwordlength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
        console.log(randomNum, password);
    }
    input.value = password;
    alert.innerText = password + "Copid!";
}

copyicon.addEventListener("click", () => {
    copy()
    if (input.value) {
        alert.classList.remove("active");
        setTimeout(() => {
            alert.classList.add("active");
        }, 2000);
    }
})

function copy() {
    input.select();
    input.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(input.value);
}