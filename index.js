let cat0 = "Milo";
let cat1 = "Otis";
let cat2 = "Garfield";
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph")
    console.log(cats) //=> ["Milo", "Otis", "Garfield", "Ralph"]
}

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob")
    console.log(cats) //=> ["Bob", "Otis", "Garfield"]);
}

function destructivelyRemoveLastCat(Milo) {
    cats.pop("Milo")
    console.log(cats) //=> ["Otis", "Garfield"];
}

function destructivelyRemoveFirstCat(Otis) {
    cats.shift("Otis")
    console.log(cats) //=> ["Milo ,"Otis", "Garfield"]
}

function appendCat(name) {
    return [...cats, 'Broom']
};

function prependCat(name) {
    return ['Arnold', ...cats]
};

function removeLastCat(name) {
    return [...cats.slice(0, 2)]
};

function removeFirstCat(name) {
    return [...cats.slice(1)]
};