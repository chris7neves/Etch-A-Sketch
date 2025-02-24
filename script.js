const canvasHeight = 960
const canvasWidth = 960

const grid = document.querySelector(".grid")

const generateBtn = document.querySelector(".submit-button")
const heightBox = document.querySelector("#input-height")
const widthBox = document.querySelector("#input-width")

function validateDims() {
    if (heightBox.value > 100) {
        heightBox.value = 100
    }
    if (heightBox.value < 10) {
        heightBox.value = 10
    }

    if (widthBox.value > 100) {
        widthBox.value = 100
    }
    if (widthBox.value < 10) {
        widthBox.value = 10
    }
}

function clearGrid() {
    grid.innerHTML = ''
}

function generateGrid(height=16, width=16) {
    clearGrid()

    squareHeight = canvasHeight / height
    squareWidth = canvasWidth / width

    // Nested loop to build the rows and columns
    for (i=0; i<height; i++) // Create the row div
    {
        let row = document.createElement("div")
        row.classList.add("canvas-row")
        
        for(j=0; j<width; j++) // Add square divs to the row div
        {
            // Create the box div
            // Set its height and width
            // Attach the css style
            let square = document.createElement("div")
            square.setAttribute(
                "style",
                `background-color: black; opacity: 0; height: ${squareHeight}px; width: ${squareWidth}px` 
            )

            square.addEventListener("mouseover", (e) => {
                if (parseFloat(e.target.style.opacity) < 1.0) {
                    newOpacity = parseFloat(e.target.style.opacity) + 0.1
                    e.target.style.opacity = `${newOpacity}`

                }
            })

            row.append(square)

        }
        
        grid.append(row)
    }
    
}

generateBtn.addEventListener("click", () => {
    console.log("Clicked!")
    validateDims()
    generateGrid(heightBox.value, widthBox.value)

})


generateGrid()