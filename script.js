let text = document.getElementById('inputText');

let btn = document.querySelector('#check');

function noOfVowels(t) {
    let listOfVowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (a of t) { // Use For of loop to iterate over the string
        if (listOfVowels.includes(a)) {
            count += 1;
        }
    }
    return count;
}

function vowelCounter() {
    let txt = text.value;
    vowels = noOfVowels(txt);
    alert(`There are ${vowels} vowels`)
}

btn.addEventListener('click', vowelCounter);