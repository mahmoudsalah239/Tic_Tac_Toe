let turn = "X";
function change(id) {
    let squre = document.getElementById(id);
    if (turn == "X" && squre.innerHTML == '') {
        squre.innerHTML = turn;
        turn = "O";
    }
    else if (turn == "O" && squre.innerHTML == '') {
        document.getElementById(id).innerHTML = turn;
        turn = "X";
    }
    winner()

}

function check(num1) {
    document.querySelector('.title').innerHTML = arr[num1].innerHTML + ' winner';
    document.querySelector('.title').style.color = "red"
    setInterval(() => {
        document.querySelector('.title').innerHTML += "."
    }, 1000);
    setTimeout(() => {
        location.reload();
    }, 3000);

}
let arr = [];
function winner() {
    for (let i = 1; i < 10; i++) {
        arr[i] = document.getElementById('item' + i);
    }
    if (arr[1].innerHTML == arr[2].innerHTML && arr[2].innerHTML == arr[3].innerHTML && arr[1].innerHTML != '') {
        check(1)

    }
    else if (arr[4].innerHTML == arr[5].innerHTML && arr[5].innerHTML == arr[6].innerHTML && arr[5].innerHTML != '') {
        check(5)

    }
    else if (arr[7].innerHTML == arr[8].innerHTML && arr[8].innerHTML == arr[9].innerHTML && arr[9].innerHTML != '') {
        check(9)

    }
    else if (arr[3].innerHTML == arr[5].innerHTML && arr[5].innerHTML == arr[7].innerHTML && arr[7].innerHTML != '') {
        check(7)

    }


}

// function full() {
//     for (let i = 1; i < 10; i++) {
//         if (arr[i].innerHTML != '' && arr[i + 1].innerHTML != '') {
//             return;
//         }
//         else {
//             document.querySelector('.title').innerHTML = " closed ";
//             document.querySelector('.title').style.color = "red"
//             setInterval(() => {
//                 document.querySelector('.title').innerHTML += "."
//             }, 1000);
//             setTimeout(() => {
//                 location.reload();
//             }, 3000);
//         }
//     }
// }


