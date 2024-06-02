const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")
const startCells = ["", "", "", "", "", "", "", "", ""]

infoDisplay.textContent = 'Circle goes firts'

function createBoard() {
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square")
        cellElement.innerHTML = index
        gameBoard.append(cellElement)
    })
}

createBoard()