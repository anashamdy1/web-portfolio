
var numbers = [1257, 4584, 7468, 2375, 6480,7943,1642,3267,1468];


var index = Math.floor(Math.random() * numbers.length);
var correctNumber = numbers[index];

var maxAttempts = 3;

for (var i = 1; i <= maxAttempts; i++) {

    var userInput = prompt("Enter this number: " + correctNumber);

    switch (parseInt(userInput)) {

        case correctNumber:
            alert(" اشطا ياعم نظرك 6/6 ");
            i = maxAttempts + 1; //  عشان يخروج من اللوب
            break;

        default:
            if (i < maxAttempts) {
                alert("البس النظاره وجرب تانى ");
            } else {
                alert("روح اكشف عند دكتور نظر ");
                document.body.innerHTML = "<h1>اسمع منى واكشف </h1>";
            }
    }
}