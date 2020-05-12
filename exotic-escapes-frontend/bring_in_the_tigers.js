let bringInTheTigers = function (tiger)  {
    let tigerButton = document.createElement("button")
    tigerButton.setAttribute('class', 'tiger-button')
    tigerButton.innerText = "Release the Tigers"

    document.body.append(tigerButton)
    
    tigerButton.addEventListener('click', () => {

        createTigers()
    })
}