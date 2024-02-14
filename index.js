// get button element - Get started
let getStartedEl = document.getElementById("get-started")

//function to redirect to the deployed project to a new page
function deployedProject() {
    window.open("https://cerulean-moonbeam-6324d6.netlify.app/", "_blank")
}

getStartedEl.addEventListener("click", deployedProject)