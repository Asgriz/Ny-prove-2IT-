const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{e.preventDefault()

const username = form.username.value
const password = form.password.value

const authenticated = authentication(username,passord)

if (authenticated){
    alert("correct")
}else{
    alert("wrong")
}
})
//function for checking username and password


function authentication(username,password){
    if (username === "test" && password === "password"){
        return true
    }else{
        return false
    }
}