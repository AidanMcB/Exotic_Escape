let createJoeExotic = function() {
    //establish dopston
    let joeExotic = document.createElement('img')
    joeExotic.src = "assets/dompston.jpg"
    joeExotic.style.position = "absolute"

    joeExotic.style.width = "100px"
    joeExotic.style.height = "100px"


    joeExotic.style.left = "300px"
    joeExotic.style.top = "300px"
    document.body.append(joeExotic)

    let direction = null

    let move = function () {
        if (direction == 'left') {
            joeExotic.style.left = parseFloat(joeExotic.style.left) - 0.5 + 'px'
        }
        if (direction == 'right') {
            joeExotic.style.left = parseFloat(joeExotic.style.left) + 0.5 + 'px'
        }
        if (direction == 'up') {
            joeExotic.style.top = parseFloat(joeExotic.style.top) - 0.5 + 'px'
        }
        if (direction == 'down') {
            joeExotic.style.top = parseFloat(joeExotic.style.top) + 0.5 + 'px'
        }
    }

    setInterval(move, 60 / 1000)

    let walkLeft = function () {
        direction = 'left'
    }

    let walkUp = function () {
        direction = 'up'
    }

    let walkRight = function () {
        direction = 'right'
    }

    let walkDown = function () {
        direction = 'down'
    }

    let stop = function () {
        direction = null
    }


    let handleKeyDown = function(e){
        if(e.repeat) return
        
        if(e.key == "ArrowLeft"){
            // console.log(e.alert) = "ArrowLeft"
            walkLeft()
        } else if( e.key == "ArrowRight"){
            walkRight()
        } else if( e.key == "ArrowUp"){
            walkUp()
        } else if( e.key == "ArrowDown"){
            walkDown()
        }
    }

    let handleKeyUp = function(e){
        stop()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
}

createJoeExotic()