const option1Big = document.getElementById("option1-big");
const option2Big = document.getElementById("option2-big");
const option2 = document.getElementById("option2");
const option1 = document.getElementById("option1");

option2.addEventListener("click", () => {
    option2Big.classList.add("d-none");
    option1Big.classList.remove("d-none");
})

option1.addEventListener("click", () => {
    option1Big.classList.add("d-none");
    option2Big.classList.remove("d-none");
})



// Change the background on the selected product details page

$(".selected").on('click', () => {
    $(".selected").css("background-color", "black").css("color", "white")
})

$(".selected").on('click', () => {
    $(".selected").css("background-color", "tranparent").css("color", "white")
})