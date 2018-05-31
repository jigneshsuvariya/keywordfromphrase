
const sw = require('stopword');

function extractkeywords(phrase, number) {
    let Result = [];
    countduplicate(sw.removeStopwords(phrase.replace(/[\W_]/g, "|").split("|"))).forEach(function (e) {
        if (e.count >= number) {
            Result.push(e.key);
        }
    });    
    console.log(Result);
}


function countduplicate(input) {
    var result = [];
    var values = input.slice(0);
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== '') {
            var c = 0;
            for (let j = 0; j < values.length; j++) {
                if (input[i] == values[j]) {
                    c++;
                    delete values[j];
                }
            }
            if (c > 0) {
                result.push({ key: input[i], count: c });
            }
        }
    }
    return result;
};

extractkeywords("This is test example, of parseing to get keywords", 1);