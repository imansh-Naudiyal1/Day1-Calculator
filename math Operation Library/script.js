const display =  document.getElementById('display');

function appendToDisplay(value) {
    display.textContent += value;
}
function clearDisplay() {
    display.textContent = '';
}
function deleteLast() {
    display.textContent = display.value.slice(0, -1);
}
function calculate() {
    try {
        display.textContent = eval(display.textContent);
    }
    catch (error) {
        display.textContent = '0';
    }
}
function add(a, b) {
    return a + b;
}
const subtract = function(a, b) {
    return a - b;
};


const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : 'Error';
const power = (a, b) => Math.pow(a, b);
const sqrt = (a) => Math.sqrt(a);

function runAllTests() {
    const testContainer = document.getElementById('test-container');
    testContainer.innerHTML = '';
    
    const tests = [
        { name: 'add(5, 3)', func: () => add(5, 3), expected: 8 },
        { name: 'subtract(10, 4)', func: () => subtract(10, 4), expected: 6 },
        { name: 'multiply(6, 7)', func: () => multiply(6, 7), expected: 42 },
        { name: 'divide(15, 3)', func: () => divide(15, 3), expected: 5 },
        // ... more tests
    ];
    
    tests.forEach(test => {
        const result = test.func();
        const passed = result === test.expected;
        
        const testDiv = document.createElement('div');
        testDiv.className = `test-case ${passed ? 'test-pass' : 'test-fail'}`;
        testDiv.innerHTML = `
            <span>${test.name}</span>
            <span>${passed ? '✓ PASS' : '✗ FAIL'}</span>
        `;
        
        testContainer.appendChild(testDiv);
    });
}