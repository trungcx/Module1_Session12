

// [Class]Bài tập 2: Số nguyên tố
function count_soNguyenTo(){
    let quantityOfPrimeNumber = prompt("Cần bao nhiêu số nguyên tố đầu tiên ?");
    let count = 0;
    let checkNumber = 2;
    let text = "";
    while(count < parseInt(quantityOfPrimeNumber)){
        if(check_soNguyenTo(checkNumber) > 1){
            text += check_soNguyenTo(checkNumber)+" ,";           
            ++count;
        }
        ++checkNumber;
    }
    document.getElementById("20soNguyenTo").innerHTML = text;
}
function check_soNguyenTo(number){
    let count = 0;
    for(let i = 2; i<9; i++){
        if(number == 2 || number == 3 || number == 5 || number == 7){
            break;
        }
        if(number%i == 0){
            ++count;
            break;
        }
    }
    if(count == 0){
        return number;
    } else {
        return "";
    }
}
function class_exercise2_fnt(){
    let myNumber = prompt("Nhập vào 1 số để kiểm tra số nguyên tố: ");
    let count = 0;
    for(let i = 2; i<9; i++){
        let parse_myNumber = parseInt(myNumber);
        if(parse_myNumber == 2 || parse_myNumber == 3 || parse_myNumber == 5 || parse_myNumber == 7){
            break;
        }
        if(parse_myNumber%i == 0){
            ++count;
            break;
        }
    }
    if(count == 0){
        alert("Số " + myNumber + " là số nguyên tố");
    } else {
        alert("Số " + myNumber + " ko là số nguyên tố");
    }
}
// [Class]Bài tập 1: Bảng cửu chương - not finished
function class_exercise1_fnt(){
    let containerDiv = document.getElementById("class_ex1_container");
    let myResult = 0;
    let myResultText = "";
    let tableOfResult = "";
    for(let i = 2; i<=3; i++){
        tableOfResult = "<div class='columnOfResult'>"
        for(let j = 1; j<=10; j++){
            myResult = i*j;
            myResultText += "<br>"+`${i}x${j}=${myResult}` ;
        }
        tableOfResult = myResultText + "</div>";
    }
    
    containerDiv.innerHTML = tableOfResult;
    // class_exercise1_creatNewDiv(myResultText);
}
function class_exercise1_creatNewDiv(myText){
    let containerDiv = document.getElementById("class_ex1_container");
    // Create an "div" node:
    let newDiv = document.createElement("div");
    // Create a text node:
    let textnode = document.createTextNode(myText)
    // Append the text node to the "div" node:
    newDiv.appendChild(textnode);
    // Append the "div" node to the another "div container"
    containerDiv.appendChild(newDiv);
}
// [Home]Thực hành 3-Bài 1 : Sử dụng vòng lặp while
function home_practise3_ex1_fnt(){  
    let sum = 0;
    let myNumber = 0;
    while(myNumber != -1){
        myNumber = parseInt(prompt("Cứ nhập số đi bạn (exit nếu nhập -1)"));
        if(myNumber != -1){
            sum += myNumber;
        } 
        alert(myNumber);
    }
    alert("Tổng dồn: " + sum);
}
// [Home]Thực hành 2: Sử dụng vòng lặp lồng nhau
function home_practise2_fnt(){
    let text = "";
    let myTable = document.getElementById("home_practise2_table");
    for(let outForCount = 0; outForCount<10; outForCount++){
        let myTable_row = myTable.insertRow(outForCount);
        for(let i = 1; i<=10; i++){
            text += i + i*outForCount;
            let myTable_row_cell = myTable_row.insertCell(i-1);
            myTable_row_cell.innerHTML = text;  
            text = "";
        }
    }
}
// [Home]Thực hành 1-Bài 2
function home_practise1_ex2_fnt(){
    let inputValue = prompt("Nhập vào 1 số đi bạn :");
    // console.log(inputValue);
    let sum = 0;
    for(let i = 1; i<=inputValue; i++){
        sum += i;
    }
    alert("Tổng các số từ 1 đến "+ inputValue + " là:  " + sum);
}
// [Home]Thực hành 1-Bài 1
function home_practise1_ex1_fnt(){
    let myText = "";
    for(let i = 0; i<=5; i++){
        myText += "This a number " + i + "<br>"
    }
    document.getElementById("home_practise1_ex1_text").innerHTML = myText;
}

