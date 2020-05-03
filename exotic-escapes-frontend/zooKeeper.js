let createZooKeeper = function() {
    //create a movable zooKeeper character
    let zooKeeper = document.createElement('img')
    zooKeeper.src = "assets/zookeeper.png"
    zooKeeper.style.position = "absolute"
    //size
    zooKeeper.style.width = "200px"
    zooKeeper.style.height = "200px"
    //position(f=away from left, away from top)
    zooKeeper.style.left = "300px"
    zooKeeper.style.top = "300px"

    document.body.append(zooKeeper)
    //movement/direction (does not yet inlcude direction for sprite)
    let direction = null

    let move = function () {
        if (direction == 'left') {
            zooKeeper.style.left = parseFloat(zooKeeper.style.left) - 0.5 + 'px'
        }
        if (direction == 'right') {
            zooKeeper.style.left = parseFloat(zooKeeper.style.left) + 0.5 + 'px'
        }
        if (direction == 'up') {
            zooKeeper.style.top = parseFloat(zooKeeper.style.top) - 0.5 + 'px'
        }
        if (direction == 'down') {
            zooKeeper.style.top = parseFloat(zooKeeper.style.top) + 0.5 + 'px'
        }
    }

    setInterval(move, 60 / 1000)
    //sets direction
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

    //arrow keys to move
    let handleKeyDown = function(e){
        if(e.repeat) return
        
        if(e.key == "ArrowLeft"){
            walkLeft()
        } else if( e.key == "ArrowRight"){
            walkRight()
        } else if( e.key == "ArrowUp"){
            walkUp()
        } else if( e.key == "ArrowDown"){
            walkDown()
        }
    }
    //let go of key to stop
    let handleKeyUp = function(e){
        stop()
    }
    //liste for the key press or key up
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
}
//call function to create the zooKeeper
// --> unecessary here, will be used on the index.js file
//createZooKeeper()