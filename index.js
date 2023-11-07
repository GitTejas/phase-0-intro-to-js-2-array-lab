// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop(name)
}

function destructivelyRemoveFirstCat() {
    cats.shift(name)
}

function appendCat(name) {
    const newCats = [...cats, name]
    return newCats
}

function prependCat(name) {
    const newCats = [name, ...cats]
    return newCats
}

function removeLastCat() {
    const noLast = cats.slice(0, 2)
    return noLast
}

function removeFirstCat() {
    const noFirst = cats.slice(1)
    return noFirst
}