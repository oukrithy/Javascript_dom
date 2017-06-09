function getInfo() {
  var user = document.getElementById('userName').value
  var pass = document.getElementById('userPass').value
    console.log(user, pass)
    checkUser(user);
    checkPass(pass);
}

function checkUser(user) {
      if (user.length >= 6 && !user.includes("!") && !user.includes("#") && !user.includes("$")) {
        document.getElementById("display").innerHTML = "Your User Name is Good "
      } else {
        if (user.includes("!")){
        document.getElementById("display").innerHTML = 'Your User Name Can Not Contain "!"'
        }
        if (user.includes("#")){
          document.getElementById("display").innerHTML = 'Your User Name Can Not Contain "#"'
        }
        if (user.includes("$")){
          document.getElementById("display").innerHTML = 'Your User Name Can Not Contain "$"'
        }
        if (user.length < 6){
          document.getElementById("display").innerHTML = 'Your User Must Be At Least 6 Characters'
        }
      }
    }

//pass

function checkPass(pass) {
        if (
            pass.test()
            pass !== "password" &&
            pass.length >= 6 && ( pass.includes("!") ||
            pass.includes("#") ||
            pass.includes("$"))
          ){
            document.getElementById("display2").innerHTML = 'Your Password Passes'
          } else {
          document.getElementById("display2").innerHTML = 'Your Password Fails'
        }
    }
//funtion to test number included

var pass =
var patt = new RegExp("^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$");

var res = patt.test("Testing!1");
