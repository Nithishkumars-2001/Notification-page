
//select inbox & team
var inbox = document.querySelector(".inbox")
var team = document.querySelector(".team")

// select Inbox Box
var inbox_box = document.querySelector(".inbox-box")

// select Inbox Box
var team_box = document.querySelector(".team-box")

function change_inbox(){
    inbox.style.color = "white"
    team.style.color = "gray"
    inbox_box.style.display = "block"
    team_box.style.display = "none"
}

function change_team(){
    team.style.color = "white"
    inbox.style.color = "gray"
    team_box.style.display = "block"
    inbox_box.style.display = "none"
}


