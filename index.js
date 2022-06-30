var id = 0;
function singup(){
    // window.location.reload();
   
    let name = document.getElementById("name").value
    var email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let arr = [id,name,email,password]
    
    var get = JSON.parse(sessionStorage.getItem("Hackthon"))

    if(name == ""){
        document.getElementById("noname").style.display = "block"
    }
    else{
        document.getElementById("noname").style.display = "none"
    }
    if(email == ""){
        document.getElementById("noemail").style.display = "block"
    }
    else{
        document.getElementById("noemail").style.display = "none"
    }
    if(password == ""){
        document.getElementById("nopassword").style.display = "block"
    }
    else{
        document.getElementById("nopassword").style.display = "none"
    }

   
     
    if(email != "" && name != "" && password != ""){

        if(get == null){
        sessionStorage.setItem("Hackthon" , JSON.stringify([arr]))
        }
        else{
            let ar = Array.from(get)
            for(let i=0; i < ar.length ; i++){
                
                if(email == ar[i][2]){
                    document.getElementById("emailreg").style.display = "block"
                    email = ""
                    
                }
            } 
            if(email != ""){
            
            get.push(arr)
            
            sessionStorage.setItem("Hackthon" , JSON.stringify(get))
            document.getElementById("name").value=""
            document.getElementById("email").value=""
            document.getElementById("password").value=""
            id++
            window.location = "login.html"
            }
        }
         
         
     }
    }
    
sessionStorage.setItem("login" , JSON.stringify(false))