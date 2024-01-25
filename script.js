let userscore=0;
let compscore=0;
let msg = document.querySelector("#msg-results");
let choices= document.querySelectorAll(".choice");
let userscoreel =  document.querySelector("#user-score");
let compscoreel = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    let index = Math.floor(Math.random()*3)
    return options[index];
}

const playgame = (userChoice) =>{
    let compChoice = genCompChoice(userChoice)
    console.log("comp choice is ",compChoice);

    if(userChoice === compChoice)
    {
        msg.innerHTML = "Game was Draw.....!!";
    }
    else {
        let userwin = false;
        if(userChoice === "rock"){
            userwin = compChoice ==="paper" ? false : true;
            if(userwin === true)
            {
                userscore += 1;
                msg.innerHTML = `Yayyy..Yow Win, your ${userChoice} beats ${compChoice}`;
                userscoreel.innerHTML = userscore;
                msg.style.backgroundColor = "green"
                msg.style.color = "white"
            }
            else{
                compscore +=1;
                msg.innerHTML = `Oops! You lose Computer choicee ${compChoice} beats ${userChoice}.`;
                compscoreel.innerHTML = compscore
                msg.style.backgroundColor = "red"
                msg.style.color = "white"
            }
        }
        else if(userChoice === "paper"){
            userwin = compChoice === "scissor" ? false : true;
            if(userwin === true)
            {
                userscore += 1;
                msg.innerHTML = `Yayyy..Yow Win, your ${userChoice} beats ${compChoice}`;
                userscoreel.innerHTML = userscore;
                msg.style.backgroundColor = "green"
                msg.style.color = "white"
            }
            else{
                compscore +=1;
                msg.innerHTML = `Oops! You lose Computer choicee ${compChoice} beats ${userChoice}.`;
                compscoreel.innerHTML = compscore
                msg.style.backgroundColor = "red"
                msg.style.color = "white"
            }
        }
        else if(userChoice === "scissor"){
            userwin = compChoice === "rock"? false : true;
            if(userwin === true)
            {
                userscore += 1;
                msg.innerHTML = `Yayyy..Yow Win, your ${userChoice} beats ${compChoice}`;
                userscoreel.innerHTML = userscore;
                msg.style.backgroundColor = "green"
                msg.style.color = "white"
            }
            else{
                compscore +=1;
                msg.innerHTML = `Oops! You lose Computer choicee ${compChoice} beats ${userChoice}.`;
                compscoreel.innerHTML = compscore
                msg.style.backgroundColor = "red"
                msg.style.color = "white"
            }
        }
    }
}


choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})



