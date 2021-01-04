const rotateCard = ((event) => {
    const target = event.target;
    if (target.classList.contains("card-wrapper")) {
        target.classList.toggle("card-wrapper-rotate")
    } else {

        FindTarget(target).classList.toggle("card-wrapper-rotate")
    }
});

const FindTarget = ((target) => {
    if (target.classList.contains("card-wrapper")) {
        return target;
    } else {
        return FindTarget(target.parentNode);
    }
});

const blocks = Array.from(document.body.getElementsByClassName("card-wrapper"));
blocks.forEach((block) => {
    block.addEventListener("click", rotateCard);
});