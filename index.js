/**Js for login page */

document.getElementById("loginFormSubmit").addEventListener("click"),function login(){
      console.log("button has been clicked.");
      let userEmail = document.getElementById("exampleInputEmail").value;
      let userPassword = document.getElementById("exampleInputEmail").value;
      console.log(userEmail,userPassword);
      if(userEmail==="admin@admin.com" && userPassword=== "123456"){
            alert("login successfully");
      }
      else{
            alert("Incorrect Email or Password")
      }


}