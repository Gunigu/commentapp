 console.log("connected")



// var titles = [];
//             var titleInput = document.getElementById("title");
//             var messageBox = document.getElementById("display");

//             function insert() {
//                 titles.push(titleInput.value);
//                 clearAndShow();
//             }

// function display() {
// 	userName= getUsername();
// 	comment = getComment();
// 	window.alert(userName+comment);
// 	document.getElementById("Submit").onclick=display();
// }
 function Allow() {
                if (!user.title.value.match(/[a-zA-Z]$/) && user.title.value != "") {
                    user.title.value = "";


                    alert("Please Enter only alphabets");
                }
            }

            var titles = [];
            var titleInput = document.getElementById("title");
            var messageBox = document.getElementById("display");

 function insert( ) {
                titles.push(titleInput.value);
                clearAndShow();
            }

           
