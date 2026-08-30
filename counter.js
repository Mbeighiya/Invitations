const increaseBtn = document.getElementById("button1");
const resetBtn = document.getElementById("button2");
const result = document.getElementById("result");

let count = 0;

function renderCount() {
    result.textContent = count;
    result.classList.remove("pulse");
    void result.offsetWidth;
    result.classList.add("pulse");
}

increaseBtn.addEventListener("click", function () {
    count++;
    renderCount();
});

resetBtn.addEventListener("click", function () {
    count = 0;
    renderCount();
});
