let theme = true

function randomIntFromInterval() {
    let max = 200
    let min = 50
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function deletePhrase() {
    let text = document.querySelector(".typing").innerHTML;

    while (text.length > 0) {
        text = text.slice(0, -1)
        document.querySelector(".typing").innerHTML = text;
        await sleep(randomIntFromInterval())
    }
}

async function writePhrase(phrase) {

    let i = 0
    while (i < phrase.length) {
        await sleep(randomIntFromInterval())
        document.querySelector(".typing").innerHTML += phrase.charAt(i);
        i++;
    }
}

async function typing() {
    while (true) {
        await writePhrase("hugo")
        await sleep(randomIntFromInterval() * 10)
        await deletePhrase()
        await sleep(randomIntFromInterval() * 10)
    }

}

document.querySelector("body").addEventListener("click", function() {
    if (theme) {
        document.querySelector("body").style.backgroundColor = "#282828"
        document.querySelector(".typing").style.color = "#FAFAFA"
        document.querySelector(".blinking-cursor").classList.add("blinking-cursor-light")
        document.querySelector(".blinking-cursor").classList.remove("blinking-cursor")
        theme = false
    } else {
        document.querySelector("body").style.backgroundColor = "#FAFAFA"
        document.querySelector(".typing").style.color = "#282828"
        document.querySelector(".blinking-cursor-light").classList.add("blinking-cursor")
        document.querySelector(".blinking-cursor-light").classList.remove("blinking-cursor-light")
        theme = true
    }
}, false)

typing()




