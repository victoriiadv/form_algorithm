let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementA = document.getElementById("a");
elementA.addEventListener('input', verify);

const elementD = document.getElementById("d");
elementD.addEventListener('input', verify);

function verify(){
    console.log("a, d")
    let a = parseInt(elementA.value);
    let d = parseInt(elementD.value);
    console.log(a, d)

    if((Math.pow(a, 2)*2) >= Math.pow(d, 2)){
        result = "Можно"
        document.getElementById("result").innerText =  messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else{
        result = "Нельзя"
        document.getElementById("result").innerText =  messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send();
}

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', verify_send)
