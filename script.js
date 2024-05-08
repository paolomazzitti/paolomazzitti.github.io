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
        await writePhrase("paolo mazzitti")
        await sleep(randomIntFromInterval() * 50)
        await deletePhrase()
        await sleep(randomIntFromInterval() * 10)
    }

}

typing()




