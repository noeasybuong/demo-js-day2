//bai 1
var myName = "Tăng Đức Hoàng";

function myString(myName) {


    console.log(myName.slice(0, 10) + "....");
}
myString(myName);


//bai 2

function myNameCompany(nameCompany) {
    var comPany = nameCompany.toLowerCase();

    console.log(comPany.charAt(0).toUpperCase() + comPany.slice(1));
}

myNameCompany("morSoftware");





//bài 3

function myAarrayUp(myArray) {
    var myUp = myArray.filter(num => num % 2 == 0).sort((a, b) => b - a)
    console.log(myUp)
}
myAarrayUp(myArray = [18, 6, , 2, 9, 10]);



//bài 4
function conFimUser(User) {


    //username
    if (User.userName.length >= 6 && User.userName.length <= 32) {
        console.log("Pass");
    }

    else {
        console.log("Fail");
    }

    //password

    if (User.passWord.length >= 6 && User.passWord.length <= 32) {
        console.log("Pass");
    }

    else {
        console.log("Fail");
    }



    //confim
    if (User.conFim.length >= 6 && User.conFim.length <= 32 && User.conFim === User.passWord) {
        console.log(" Pass");
    }

    else {
        console.log("Fail");
    }

}

conFimUser(
    User = {
        userName: "username ",
        passWord: "password",
        conFim: "password",
    })