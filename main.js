let elInput = document.querySelector(".js-input");
let elTitle = document.querySelector(".js-title");

const handleDeleteCount = (count, element) => {
    if (count < 1) element.remove();
}

const handleCounter = (count) => {
    let intervalCount;
    if (count > 0) {
        let elCounter = document.createElement("p");
        elCounter.textContent = count;
        intervalCount = setInterval(() => {
            count -= 1;
            elCounter.textContent = count
            handleDeleteCount(count, elCounter)
        }, 1000);
        elTitle.append(elCounter)
    } else clearInterval(intervalCount)
}

elInput.addEventListener("change", (evt) => {
    let elInputValue = evt.target.value;
    console.log(elInputValue)
    if (!(elInputValue)) return alert("Count not found");
    if (isNaN(elInputValue)) {
        evt.target.value = '';
        return alert("Count is not number !");
    };
    handleCounter(elInputValue)
    evt.target.value = '';
});