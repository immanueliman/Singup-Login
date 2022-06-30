sessionStorage.setItem("login" , JSON.stringify(false))

function login(){
    
        
       
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        
        
        var get = JSON.parse(sessionStorage.getItem("Hackthon"))

        if(email == ""){
            document.getElementById("inemail").style.display = "block"
        }
        else{
            document.getElementById("inemail").style.display = "none"
        }
        if(password == ""){
            document.getElementById("inpassword").style.display = "block"
        }
        else{
            document.getElementById("inpassword").style.display = "none"
        }
         
        if(email != ""  && password != ""){
         if(get == null){
         console.log("no")
         }
         else{
             console.log(get)
             let arr  = Array.from(get)
             for(let i=0; i<get.length; i++){
                 if(arr[i][2] == email && arr[i][3] == password){
                     console.log("sucess")
                     sessionStorage.setItem("login" , JSON.stringify(true))
                     window.location = "welcome.html"
                 }
                 else{
                    document.getElementById("inemail").style.display = "block";
                    document.getElementById("inpassword").style.display = "block"
                 }
             }
         }
         
        document.getElementById("email").value=""
        document.getElementById("password").value=""

        }
    
    }
