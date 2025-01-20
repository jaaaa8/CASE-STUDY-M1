let selectedColor = 'red';
let selectedButton = null;

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

let array = [arrayLV1, arrayLV2, arrayLV3];
let currentArrayIndex = 0;
let currentArray = array[currentArrayIndex];

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

    // Kiểm tra nếu màu chọn khác với màu hiện tại thì tiến hành thay đổi
    if (oldColor !== selectedColor) {
        floodFill(i, j, oldColor, selectedColor);
    }
}

// Hàm để thay đổi tất cả các nút liên kết cùng màu
function floodFill(i, j, oldColor, newColor) {
    if (i < 0 || i >= currentArray.length || j < 0 || j >= 10) {
        return; // Nếu ngoài phạm vi thì dừng lại
    }

    if (currentArray[i][j] !== oldColor) {
        return; // Nếu màu không phải màu cũ thì dừng lại
    }

    // Thay đổi màu cho nút
    currentArray[i][j] = newColor;

    // Cập nhật lại giao diện
    drawGameForm(currentArray);

    // Kiểm tra các nút liền kề: (i+1, j), (i-1, j), (i, j+1), (i, j-1)
    floodFill(i + 1, j, oldColor, newColor); // Kiểm tra phía dưới
    floodFill(i - 1, j, oldColor, newColor); // Kiểm tra phía trên
    floodFill(i, j + 1, oldColor, newColor); // Kiểm tra phía bên phải
    floodFill(i, j - 1, oldColor, newColor); // Kiểm tra phía bên trái
}
function changeLevel(levelIndex) {
    if (levelIndex >= 0 && levelIndex < array.length) {
        currentArrayIndex = levelIndex;
        currentArray = array[currentArrayIndex];
        drawGameForm(currentArray);
    }
}
