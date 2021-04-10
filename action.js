var wordArray = [];

function addWord() {
    var currentWord = $('#word').val();
    if (searchWord(currentWord.toUpperCase()) == false) {
        wordArray.push(currentWord.toUpperCase());
        sort(0, wordArray.length - 1);
        $("#list").empty();
        for (let word of wordArray) {
            $("#list").append("<div class='w-100 form-control m-1 font-weight-bold'>" + word + "</div>");
        }
    } 
}

function searchWord(currentWord) {
    var word = currentWord || $('#search').val();
    var searchMode = (currentWord) ? false : true;
    if (word != "") {
        var left = 0, right = wordArray.length - 1;
        while(left != right) {
            let middle = (left + right) / 2;
            if (currentWord > wordArray[middle]) {
                left = middle + 1;
            } else {
                right = middle;
            }
        }
        if (wordArray[left] == word) {
            alert("Found the word " + word + " in the dictionary");
            return true;
        } else {
            if (searchMode) {
                alert("Not found in the dictionary");
            }
            return false;
        }
    } else {
        alert("No word!");
    }
}

function sort(left, right) {
    if (left >= right) {
        return;
    }
    var position = left;
    for (let i = left; i < right; i++) {
        if (wordArray[i] < wordArray[right]) {
            switchWords(i, position);
            position ++;
        }
    }
    switchWords(position, right);
    sort(left, position - 1);
    sort(position + 1, right);
}

function switchWords(pos1, pos2) {
    let aux = wordArray[pos1];
    wordArray[pos1] = wordArray[pos2];
    wordArray[pos2] = aux;
}
