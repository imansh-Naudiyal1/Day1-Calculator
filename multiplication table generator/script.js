const inputNumber = document.getElementById('numberInput');
const generateBtn = document.getElementById('generateBtn');
const clearBtn = document.getElementById('clearBtn');
const errorDiv = document.getElementById('error');
const resultsSection = document.getElementById('resultsSection');
const forLoopResult = document.getElementById('forLoopResult');
const whileLoopResult = document.getElementById('whileLoopResult');
const doWhileResult = document.getElementById('doWhileResult');
const patternResult = document.getElementById('patternResult');


generateBtn.addEventListener('click', generateTable);
clearBtn.addEventListener('click', clearAll);

function generateTable(){
    const number = parseInt(inputNumber.value)
    if(isNaN(number)|| number < 1 || number > 20){
        errorDiv.textContent = "please enter a valid number (1 - 20)";
        resultsSection.style.display ="none";
        return;
    }
    errorDiv.textContent ="none";
    resultsSection.style.display ="block"; 
    
    
    let forTable = "";
    for (let i = 0; i <= 10; i++){
        forTable+= `${number} x ${i} = ${number * i}\n`;
    }
    forLoopResult.textContent = forTable;

    
    let whileTable = "";
    let i = 0;
    while( i <= 10){
        whileTable+= `${number} x ${i} = ${number * i}\n`;
    i++;
    }
    whileLoopResult.textContent = whileTable;

    
    let doWhileTable = "";
    i =1 ;
    do{
doWhileTable += `${number} x ${i} = ${number * i}\n`;
i++;
    }while( i <= 10);
    doWhileResult.textContent =doWhileTable;

    let pattern ="";
    for(let row = i ; row <= number; row++){
        for( let col = 1; col <= row; col++){
            pattern += "*";
        } 
        pattern += "\n";
    }
    patternResult.textContent = pattern;
    patternResult.style.whiteSpace = "pre";

}
function clearAll(){
    inputNumber.value = "";
    errorDiv.textContent ="";
    resultsSection.style.display ="none";
}