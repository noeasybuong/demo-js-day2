
var myName = "Tăng Đức Hoàng";

function myString(myName) {


    console.log(myName.slice(0, 10) + "....");
}
myString(myName);



var nameCompaty = "morSofware";
function myNameCompaty(nameCompaty) {
    var my = nameCompaty.toLocaleLowerCase().split('');
    var resul = my

}
myNameCompaty(nameCompaty);



var myArray = [1, 5, 20, 7, 9, 4]



function myAarrayUp(myArray) {
    var myUp = myArray.filter(num => num % 2 == 0).sort()
    console.log(myUp)
}
myAarrayUp(myArray)

