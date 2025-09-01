 const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
        const colorDisplay = document.querySelector('.color-display');
        
        colors.forEach(color => {
            const btn = document.querySelector(`.${color}-btn`);
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                colorDisplay.style.backgroundColor = color;
                colorDisplay.textContent = color.charAt(0).toUpperCase() + color.slice(1);
            });
        });
        const resetBtn = document.querySelector('.Reset-Btn');
        resetBtn.addEventListener('click', (e) => {
            e.preventDefault();
            colorDisplay.style.backgroundColor = 'transparent';
            colorDisplay.textContent = 'Choose a Color';
        });