const paralaxWrap = Array.from(document.body.getElementsByClassName("paralax-inner"));
const paralaxImg = Array.from(document.body.getElementsByClassName("paralax-img"));

paralaxWrap.forEach((element) => {
    const card = element.querySelector(".card-wrapper");
    const cardBg = element.querySelector(".paralax-img");

    let TimerId;
    const doFlip = () => card.classList.toggle("card-wrapper-rotate")
    element.addEventListener("click", doFlip);

    element.onmousemove = ((e, element) => {
        getCurCoordsInsideRect(e, element);
    })

    element.onclick = () => {
        if (card.classList.contains("card-wrapper-rotate")) {
            card.style.transform = `rotateY(0deg) rotateX(180deg)`
            cardBg.style.transform = `translate(0px,0px)  scale(1.4) rotateX(-180deg)`
            card.classList.toggle("paralax-wrap-back")
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
            cardBg.style.transform = `translate(0px,0px)  scale(1.4) rotateX(-180)`
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
            cardBg.style.transform = `translate(${((x - 200) / 5) * -1}px,${((y - 175) / 5) * -1}px) rotateX(-180deg) scale(1.4)`
            card.style.transform = `rotateY(${((x - 160) / 7)}deg) rotateX(${180+((y - 205) / 7) * -1}deg)`
        } else {
            cardBg.style.transform = `translate(${((x - 200) / 5) * -1}px,${((y - 175) / 5) * -1}px)  scale(1.4)`
            card.style.transform = `rotateY(${((x - 160) / 7)}deg) rotateX(${((y - 205) / 7) * -1}deg)`
        }
    }
})