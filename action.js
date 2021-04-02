var wordArray = [];

function addWord() {
    var currentWord = $('#word').val();
    if (currentWord != "") {
        var position = search(currentWord);
        if(position == wordArray.length) {
            $("#list").append("<div class='w-100 form-control m-1 font-weight-bold'>" + currentWord + "</div>");
            wordArray[position] = currentWord;
        } else if (position == 0 && wordArray[position].toLowerCase() != currentWord.toLowerCase()){
            $("#list").prepend("<div class='w-100 form-control m-1 font-weight-bold'>" + currentWord + "</div>");
            wordArray.splice(0, 0, currentWord);
        } else if (wordArray[position].toLowerCase() != currentWord.toLowerCase()){
            wordArray.splice(position, 0, currentWord);
            $("#list > div:nth-child(" + position + ")").after("<div class='w-100 form-control m-1 font-weight-bold'>" + currentWord + "</div>")
        } else {
            alert("Word allready in dictionary!!");
        }
    } else {
        alert("No word!");
    }
    
}

function search(currentWord) {
    var position = 0;
    var size = wordArray.length;
    for(let i = 0; i < size; i++) {
        if(wordArray[i].toLowerCase() < currentWord.toLowerCase()) {
            position = i + 1;
        } else {
            break;
        }
    }
    return position;
}

function searchWord() {
    var currentWord = $('#search').val();
    if (currentWord != "") {
        var left = 0, right = wordArray.length - 1;
        while(left != right) {
            let middle = (left + right) / 2;
            if (currentWord > wordArray[middle]) {
                left = middle + 1;
            } else {
                right = middle;
            }
        }
        if (wordArray[left] == currentWord) {
        alert("Found "+ currentWord);
        } else {
        alert("Not Found");
        }
    } else {
        alert("No word!");
    }
}
