let createTiger = function(){
        //create a tiger and append him to the page
        let tiger = document.createElement('img')
        tiger.src = "assets/tiger.png"
            tiger.style.position = "absolute"
        //size
        tiger.style.width = "100px"
        tiger.style.height = "100px"
        //position(away from left, away from top)
        tiger.style.left = "500px"
        tiger.style.top = "300px"
    
        document.body.append(tiger)
     //movement/direction (does not yet inlcude direction for sprite)
    let direction = null

    let move = function () {
        if (direction == 'left') {
            tiger.style.left = parseFloat(tiger.style.left) - 0.5 + 'px'
        }
        if (direction == 'right') {
            tiger.style.left = parseFloat(tiger.style.left) + 0.5 + 'px'
        }
        if (direction == 'up') {
            tiger.style.top = parseFloat(tiger.style.top) - 0.5 + 'px'
        }
        if (direction == 'down') {
            tiger.style.top = parseFloat(tiger.style.top) + 0.5 + 'px'
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

    let after = function(seconds){
        return new Promise(function(resolve){
            setTimeout(resolve, seconds * 1000)
        })
    }

        //set movement to a square
        const walkAround = function(){
            walkLeft()
            after(3)
                .then(function(){
                    walkDown()
                    return after(3)
                })
                .then(function(){
                    walkRight()
                    return after(3)
                })
                .then(function(){
                    walkUp()
                    return after(3)
                })
                .then(function(){
                    walkAround()
                })
            
        }
    
        
        walkAround()
}
// const walkAround = async function(){
//     while(true) {   
//         walkLeft()
//         await this.after(1)
//         walkDown()
//         await after(1)
//         walkRight()
//         await after(1)
//         walkUp()
//         await after(1)
//     }
// }
   
 