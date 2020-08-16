const nameInput = document.querySelector(".greeting input"),
    askForm = document.querySelector(".name-form"),
    greetingMessage = document.querySelector(".greeting-message")


const USER_LS = "User Name",
    SHOW = "show"

function saveLS(text) {
    localStorage.setItem(USER_LS, text)
}

function askName() {
    askForm.classList.add(SHOW)
}

function printName(text) {
    askForm.classList.remove(SHOW)
    greetingMessage.innerText = `Hi, ${text}. How are You Today. `
    greetingMessage.classList.add(SHOW)
    

}

function loadName() {
    const loadedName = localStorage.getItem(USER_LS)
    if (loadedName === null) {
        askName();

    } else {
        printName(loadedName);
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const userName = nameInput.value;
    saveLS(userName);
    printName(userName);
}

function init() {
    loadName();
    askForm.addEventListener("submit", handleSubmit)
}
init();