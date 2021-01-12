const paralaxWrap = Array.from(document.body.getElementsByClassName("paralax-inner"));
const paralaxImg = Array.from(document.body.getElementsByClassName("paralax-img"));

paralaxWrap.forEach((element) => {
    const card = element.querySelector(".card-wrapper");
    const cardWrap = element.querySelector(".paralax-wrap");
    const cardWrapBack = element.querySelector(".paralax-wrap-back");
    const cardBg = element.querySelector(".paralax-img");
    const cardBackBG = element.querySelector(".paralax-img-back");


    let TimerId;
    const doFlip = () => card.classList.toggle("card-wrapper-rotate")


    element.addEventListener("click", doFlip);

    element.onmousemove = ((e, element) => {
        getCurCoordsInsideRect(e, element);
    })

    element.onclick = () => {
        cardWrap.classList.toggle("paralax-wrap-hide")
        cardWrapBack.classList.toggle("paralax-wrap-hide")
        if (card.classList.contains("card-wrapper-rotate")) {
            card.style.transform = `rotateY(0deg) rotateX(180deg)`
        } else {
            card.style.transform = `rotateY(0deg) rotateX(0deg)`
            cardBg.style.transform = `translate(0px,0px)  scale(1.4) rotateX(0deg)`
        }
    }


    const mouseleave = () => {
        TimerId = setTimeout(ParalaxStop, 2000)
    }


    const ParalaxStop = () => {
        if (card.classList.contains("card-wrapper-rotate")) {
            card.style.transform = `rotateY(0deg) rotateX(180deg)`
            cardBackBG.style.transform = `translate(0px,0px) scale(1.4)`
        } else {
            card.style.transform = `rotateY(0deg) rotateX(0deg)`
            cardBg.style.transform = `translate(0px,0px)  scale(1.4) rotateX(0deg)`
        }

    }



    element.addEventListener("mouseleave", mouseleave);



    const getCurCoordsInsideRect = (e) => {
        clearTimeout(TimerId);
        let x = e.offsetX == undefined ? e.layerX : e.offsetX;
        let y = e.offsetY == undefined ? e.layerY : e.offsetY;
        if (card.classList.contains("card-wrapper-rotate")) {
            cardBackBG.style.transform = `translate(${((x - 200) / 5) * -1}px,${((y - 175) / 5) * -1}px) scale(1.4)`
            card.style.transform = `rotateY(${((x - 160) / 7)}deg) rotateX(${180+((y - 205) / 7) * -1}deg)`
        } else {
            cardBg.style.transform = `translate(${((x - 200) / 5) * -1}px,${((y - 175) / 5) * -1}px)  scale(1.4)`
            card.style.transform = `rotateY(${((x - 160) / 7)}deg) rotateX(${((y - 205) / 7) * -1}deg)`
        }
    }
})