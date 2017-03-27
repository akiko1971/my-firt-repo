var wordCount;
var sentences;
var spaces;
var averageWord;

function myFunction() {
    var text = document.getElementById("main").innerText;
    var len = text.length;

    // result variables
    var wordCount = 0;
    var sentences = 0;
    var spaces = 0;

    var wordStart = true;
    var prevSpace = false;
    /* go through text */
    for (var i = 0; i < len; i++) {
        var ch = text.charAt(i);
        if (ch == ' ') {
            spaces++;
            if (wordStart) {
                wordCount++;
                wordStart = false;
            }
            prevSpace = true;
        }

        else if (ch == '.' || ch == '?' || ch == '!') {
            if (prevSpace) {
                sentences++;
            }
            sentences++;
            wordCount++;
            prevSpace = false;
            wordStart = false;
        }

        else {
            prevSpace = false;
            wordStart = true;
        }
    }

    var averageWord = (1.0 * wordCount) / (sentences);

    document.getElementById("p1").innerHTML = "word count: " + wordCount;
    document.getElementById("p2").innerHTML = "sentence count: " + sentences;
    document.getElementById("p3").innerHTML = "spaces: " + spaces;
    document.getElementById("p4").innerHTML = "Average words per sentences: "
                                  + averageWord;
}
