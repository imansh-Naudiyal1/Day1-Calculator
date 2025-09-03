const textDisplay = document.getElementById('textDisplay');
const increaseBtn = document.getElementById( 'increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetSizeBtn = document.getElementById('resetSizeBtn');
const sizeDisplay = document.getElementById('sizeDisplay');
const fontSelect = document.getElementById('fontSelect');
const boldBtn = document.getElementById('boldBtn');
const italicBtn = document.getElementById('italicBtn');
const underlineBtn = document.getElementById('underlineBtn');
const resetBtn = document.getElementById('resetStyleBtn');

let currentSize = 16;

function updateSizeDisplay(){
    sizeDisplay.textContent = currentSize + 'px'
}
 decreaseBtn.addEventListener('click', function(){
if(currentSize > 8){
    currentSize = currentSize -2;
    textDisplay.style.fontSize = currentSize +'px'
    updateSizeDisplay();
}
 });

 increaseBtn.addEventListener('click', function() {
    if (currentSize < 72) { 
        currentSize = currentSize + 2;
        textDisplay.style.fontSize = currentSize + 'px';
        updateSizeDisplay();
    }
});

resetSizeBtn.addEventListener('click', function() {
    currentSize = 16;
    textDisplay.style.fontSize = currentSize + 'px';
    updateSizeDisplay();
});
 
fontSelect.addEventListener('change', function(){
    textDisplay.style.fontFamily = fontSelect.value;    

});
 boldBtn.addEventListener('click', function(){
    textDisplay.style.fontWeight =
     textDisplay.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

italicBtn.addEventListener('click', function(){
    textDisplay.style.fontStyle =
    textDisplay.style.fontStyle === 'italic' ? 'normal' : 'italic';
});
 
underlineBtn.addEventListener('click', function(){
  if(textDisplay.style.textDecoration === 'underline'){
    textDisplay.style.textDecoration = 'none';
  }else{
    textDisplay.style.textDecoration = 'underline';
  }
});

resetBtn.addEventListener('click', function(){
        textDisplay.style.fontWeight = 'normal';
        textDisplay.style.fontStyle = 'normal';
        textDisplay.style.textDecoration = 'none';
    });