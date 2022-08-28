const mainTitle = document.querySelector(".main__sec01__h2");
const mainInfo = document.querySelector(".main__sec01__p");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const result = document.querySelector(".result");
const resetBtn = document.querySelector(".resetbtn");


btn.addEventListener("click", function ()  {
    let number = parseInt(Math.random() * 9) + 1;
    mainTitle.style.paddingTop = "10px";
    mainInfo.style.paddingTop = "10px";
    input.style.marginTop = "10px";
    btn.style.marginTop = "10px";
    result.innerHTML = `<h2>Q: ${input.value}</h2> <p>${number}</p>`;


    if (number === 1 && input.value !== "") {
        result.innerHTML = `<h2>Q: ${input.value}</h2> <p>YES</p>`;
    } else if (number === 2 && input.value !== "") {
        result.innerHTML = `<h2>Q: ${input.value}</h2> <p>NO</p>`;
    } else if (number === 3 && input.value !== "") {
        result.innerHTML = `<h2>Q: ${input.value}</h2> <p>POSITIVE</p>`;
    } else if (number === 4 && input.value !== "") {
        result.innerHTML = `<h2>Q: ${input.value}</h2> <p>NEGATIVE</p>`;
    } else if (number === 5 && input.value !== "") {
        result.innerHTML = `<h2>Q: ${input.value}</h2> <p>ABSOLUTELY!</p>`;
    } else if (number === 6 && input.value !== "") {
        result.innerHTML = `<h2>Q: ${input.value}</h2> <p>NEVER!</p>`;
    } else if (number === 7 && input.value !== "") {
        result.innerHTML = `<h2>Q: ${input.value}</h2> <p>Ask Yourself</p>`;
    } else if (number === 8 && input.value !== "") {
        result.innerHTML = `<h2>Q: ${input.value}</h2> <p>I'm not sure!</p>`;
    } else if (number === 9  && input.value !== "") {
        result.innerHTML = `<h2>Q: ${input.value}</h2> <p>Try Again</p>`;
    } else {
        result.innerHTML = `<h2>Please! Ask a question</h2>`;
    }


    input.value = "";
});

resetBtn.addEventListener("click", function () {
    mainTitle.style.paddingTop = "50px";
    mainInfo.style.paddingTop = "40px";
    input.style.marginTop = "120px";
    btn.style.marginTop = "50px";
    result.innerHTML = "";
    input.value = "";
})