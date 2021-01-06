const paralaxWrap = Array.from(document.body.getElementsByClassName("paralax-inner"));
const paralaxImg = Array.from(document.body.getElementsByClassName("paralax-img"));

paralaxWrap.forEach((element) => {
    const card = element.querySelector(".card-wrapper");
    const cardBg = element.querySelector(".paralax-img");
    let TimerId;

    element.onmousemove = ((e, element) => {
        getCurCoordsInsideRect(e, element);
    })

    const mouseleave = (() => {
        TimerId = setTimeout(ParalaxStop, 4000)
    })


    const ParalaxStop = (() => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`
        cardBg.style.transform = `translate(0px,0px)  scale(1.4)`
    })

    element.addEventListener("mouseleave", mouseleave);


    const getCurCoordsInsideRect = ((e) => {
        clearTimeout(TimerId);
        let x = e.offsetX == undefined ? e.layerX : e.offsetX;
        let y = e.offsetY == undefined ? e.layerY : e.offsetY;
        card.style.transform = `rotateY(${((x - 160) / 7)}deg) rotateX(${((y - 205) / 7) * -1}deg)`
        cardBg.style.transform = `translate(${((x - 200) / 5) * -1}px,${((y - 175) / 5)* -1}px)  scale(1.4)`
    })
})

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