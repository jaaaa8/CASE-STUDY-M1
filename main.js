let selectedColor = 'red';
let selectedButton = null;


let arrayLV0 = [
    ['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'],
    ['yellow', 'red'   , 'red'   , 'red'   , 'red'   , 'red'   , 'red'   , 'red'   , 'red'   , 'yellow'],
    ['yellow', 'red'   , 'green' , 'green' , 'green' , 'green' , 'green' , 'green' , 'red'   , 'yellow'],
    ['yellow', 'red'   , 'green' , 'blue'  , 'blue'  , 'blue'  , 'blue'  , 'green' , 'red'   , 'yellow'],
    ['yellow', 'red'   , 'green' , 'blue'  , 'blue'  , 'blue'  , 'blue'  , 'green' , 'red'   , 'yellow'],
    ['yellow', 'red'   , 'green' , 'green' , 'green' , 'green' , 'green' , 'green' , 'red'   , 'yellow'],
    ['yellow', 'red'   , 'red'   , 'red'   , 'red'   , 'red'   , 'red'   , 'red'   , 'red'   , 'yellow'],
    ['yellow', 'yellow', 'yellow','yellow' , 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow']
];

let arrayLV1 = [
    ['yellow', 'red'   , 'yellow', 'yellow', 'yellow', 'blue'  , 'green' , 'yellow', 'blue'  , 'yellow'],
    ['blue'  , 'blue'  , 'blue'  , 'blue'  , 'blue'  , 'blue'  , 'green' , 'yellow', 'blue'  , 'yellow'],
    ['yellow', 'red'   , 'blue'  , 'red'   , 'red'   , 'red'   , 'green' , 'red'   , 'blue'  , 'yellow'],
    ['yellow', 'red'   , 'blue'  , 'red'   , 'yellow', 'yellow', 'green' , 'red'   , 'blue'  , 'yellow'],
    ['yellow', 'red'   , 'blue'  , 'red'   , 'yellow', 'green' , 'green' , 'red'   , 'blue'  , 'yellow'],
    ['yellow', 'yellow', 'blue'  , 'yellow', 'yellow', 'green' , 'yellow', 'red'   , 'blue'  , 'yellow'],
    ['yellow', 'yellow', 'blue'  , 'blue'  , 'blue'  , 'green' , 'blue'  , 'blue'  , 'blue'  , 'yellow'],
    ['green' , 'green' , 'green' , 'green' , 'green' , 'green' , 'yellow', 'red'   , 'red'   , 'red'   ]
];

let arrayLV2 = [
    ['yellow', 'red'   , 'red'   , 'blue'  , 'yellow', 'yellow', 'yellow', 'yellow', 'blue'  , 'yellow'],
    ['yellow', 'red'   , 'red'   , 'blue'  , 'yellow', 'yellow', 'yellow', 'yellow', 'blue'  , 'yellow'],
    ['green' , 'green' , 'green' , 'green' , 'green' , 'green' , 'green' , 'green' , 'green' , 'green' ],
    ['yellow', 'red'   , 'red'   , 'blue'  , 'green' , 'green' , 'green' , 'green' , 'blue'  , 'yellow'],
    ['yellow', 'red'   , 'red'   , 'blue'  , 'yellow', 'green' , 'green' , 'green' , 'blue'  , 'yellow'],
    ['yellow', 'red'   , 'red'   , 'blue'  , 'yellow', 'yellow', 'yellow', 'green' , 'blue'  , 'yellow'],
    ['yellow', 'red'   , 'red'   , 'blue'  , 'yellow', 'yellow', 'yellow', 'green' , 'blue'  , 'yellow'],
    ['yellow', 'red'   , 'red'   , 'blue'  , 'yellow', 'yellow', 'yellow', 'yellow', 'blue'  , 'yellow']
];

let arrayLV3 = [
    ['yellow', 'red'   , 'blue'  , 'blue'  , 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'],
    ['yellow', 'red'   , 'red'   , 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'],
    ['yellow', 'blue'  , 'yellow', 'yellow', 'blue'  , 'green' , 'green' , 'blue'  , 'blue'  , 'yellow'],
    ['yellow', 'blue'  , 'yellow', 'yellow', 'green' , 'yellow', 'yellow', 'yellow', 'green' , 'yellow'],
    ['yellow', 'red'   , 'yellow', 'blue'  , 'blue'  , 'yellow', 'yellow', 'yellow', 'green' , 'yellow'],
    ['yellow', 'green' , 'blue'  , 'blue'  , 'green' , 'yellow', 'red'   , 'red'   , 'blue'  , 'yellow'],
    ['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'red'   , 'yellow', 'yellow', 'yellow'],
    ['yellow', 'yellow', 'green' , 'green' , 'green' , 'red'   , 'blue'  , 'yellow', 'yellow', 'yellow']
];

let array = [arrayLV0,arrayLV1, arrayLV2, arrayLV3];
let currentArrayIndex = 0;
let currentArray = array[currentArrayIndex];
let maxChangeCounts = [4,4, 4, 5];
let currentChangeCount = maxChangeCounts[currentArrayIndex];
let originalArray = JSON.parse(JSON.stringify(array[currentArrayIndex]));

// Cập nhật hiển thị số lượt thay đổi
document.getElementById("changeCount").innerText = `${currentChangeCount}`;

// Thêm sự kiện cho các nút màu
document.getElementById("red").addEventListener("click", function () {
    setSelectedColor(this, 'red');
});
document.getElementById("yellow").addEventListener("click", function () {
    setSelectedColor(this, 'yellow');
});
document.getElementById("blue").addEventListener("click", function () {
    setSelectedColor(this, 'blue');
});
document.getElementById("green").addEventListener("click", function () {
    setSelectedColor(this, 'green');
});

// Thêm sự kiện cho nút RESET
document.getElementById("reset").addEventListener("click", function () {
    resetCurrentLevel();
});

drawGameForm(currentArray);

// Hàm vẽ bảng
function drawGameForm(array) {
    let gameFormData = '';
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            let color = array[i][j];
            gameFormData += `
                <button onclick="changeColor(this,${i}, ${j})" class="btnGame" style="background-color: ${color}"></button>
            `;
        }
        gameFormData += "<br>";
    }
    document.getElementById("gameForm").innerHTML = gameFormData;
}

function setSelectedColor(button, color) {
    if (selectedButton) {
        selectedButton.classList.remove('active');
    }

    selectedButton = button;
    selectedButton.classList.add('active');

    selectedColor = color;
}

// Hàm thay đổi màu nút và các nút liền kề
function changeColor(button, i, j) {
    let oldColor = currentArray[i][j];

    if (oldColor !== selectedColor) {
        floodFill(i, j, oldColor, selectedColor);

        currentChangeCount--;
        document.getElementById("changeCount").innerText = `${currentChangeCount}`;

        if (currentChangeCount === 0) {
            setTimeout(() => {
                alert("Bạn đã hết số lượt thay đổi. Trò chơi sẽ được reset.");
                resetGame();
            }, 100);
        }
    }

    // Kiểm tra xem đã hoàn thành level chưa
    if (isLevelComplete()) {
        setTimeout(() => {
            let proceed = confirm('Chúc mừng! Bạn đã hoàn thành level này. Bạn có muốn sang level tiếp theo không?');
            if (proceed) {
                changeLevel(currentArrayIndex + 1);
            } else {
                resetCurrentLevel();
            }
        }, 100);
    }
}

// Hàm khôi phục level hiện tại về trạng thái ban đầu
function resetCurrentLevel() {
    currentArray = JSON.parse(JSON.stringify(originalArray));
    currentChangeCount = maxChangeCounts[currentArrayIndex];
    document.getElementById("changeCount").innerText = currentChangeCount;
    drawGameForm(currentArray);
    if (selectedButton) {
        selectedButton.classList.remove('active');
    }
    selectedButton = null;
}

function resetGame() {
    currentArray = JSON.parse(JSON.stringify(originalArray));
    drawGameForm(currentArray);
    currentChangeCount = maxChangeCounts[currentArrayIndex];
    document.getElementById("changeCount").innerText = currentChangeCount;
    document.getElementById("level").innerText = `Level ${currentArrayIndex + 1} ${["RED", "GREEN", "RED"][currentArrayIndex]}`;
    if (selectedButton) {
        selectedButton.classList.remove('active');
    }
    selectedButton = null;
}

// Hàm để thay đổi tất cả các nút liên kết cùng màu
function floodFill(i, j, oldColor, newColor) {
    if (i < 0 || i >= currentArray.length || j < 0 || j >= 10) {
        return;
    }

    if (currentArray[i][j] !== oldColor) {
        return;
    }

    currentArray[i][j] = newColor;

    drawGameForm(currentArray);

    // Kiểm tra các nút liền kề: (i+1, j), (i-1, j), (i, j+1), (i, j-1)
    floodFill(i + 1, j, oldColor, newColor);
    floodFill(i - 1, j, oldColor, newColor);
    floodFill(i, j + 1, oldColor, newColor);
    floodFill(i, j - 1, oldColor, newColor);
}

function isLevelComplete() {
    const targetColor = ['yellow','red', 'blue', 'red'][currentArrayIndex];
    for (let i = 0; i < currentArray.length; i++) {
        for (let j = 0; j < currentArray[i].length; j++) {
            if (currentArray[i][j] !== targetColor) {
                return false;
            }
        }
    }
    return true;
}

function changeLevel(levelIndex) {
    if (levelIndex >= 0 && levelIndex < array.length) {
        currentArrayIndex = levelIndex;
        currentArray = array[currentArrayIndex];
        originalArray = JSON.parse(JSON.stringify(currentArray));
        currentChangeCount = maxChangeCounts[currentArrayIndex];
        document.getElementById("changeCount").innerText = currentChangeCount;
        const levelColors = ["YELLOW", "RED", "BLUE", "RED"];
        const levelNames = ["Level 0", "Level 1", "Level 2", "Level 3"];
        const levelColor = levelColors[currentArrayIndex];
        const levelName = levelNames[currentArrayIndex];
        const levelElement = document.getElementById("level");
        levelElement.innerText = `${levelName} ${levelColor}`;
        levelElement.style.color = levelColor.toLowerCase();
        drawGameForm(currentArray);
    }
}



