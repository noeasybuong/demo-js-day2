//bai 1


function myString(myName) {


    return myName.slice(0, 10) + "....";
}
myString("Tăng Đức Hoàng");

console.log(myString("Tăng Đức Hoàng"));
//bai 2

function myNameCompany(nameCompany) {
    var comPany = nameCompany.toLowerCase();

    return comPany.charAt(0).toUpperCase() + comPany.slice(1);
}

myNameCompany("morSoftware");

console.log(myNameCompany("morSoftware"));



//bài 3

function myAarrayUp(myArray) {
    var myUp = myArray.filter(num => num % 2 == 0).sort((a, b) => b - a);
    return myUp;
}
myAarrayUp([18, 6, , 2, 9, 10]);


console.log(myAarrayUp(myArray = [18, 6, , 2, 9, 10]));

//bài 4
function conFimUser(User) {


    if (User.userName.length < 6 && User.userName.length > 32) return "Fail";

    if (User.passWord.length < 6 && User.passWord.length > 32) return "Fail";
    if (User.passWord !== User.conFirm) return "Fail";




    return "Pass";

}

conFimUser(
    {
        userName: "username ",
        passWord: "password",
        conFirm: "password",
    })

console.log(conFimUser(
    {
        userName: "username ",
        passWord: "password",
        conFirm: "password",
    }));
