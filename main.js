// Thêm số
var listNumb = [];
function themSo(){
    var numb = document.getElementById("numb").value * 1;
    listNumb.push(numb);
    var result = "";
    for (var i = 0; i< listNumb.length; i++){
        result += listNumb[i] + ",";
    }
    document.getElementById("result1").innerHTML = result;
}

function tinhTong(){
    var result = 0;
    for (var i = 0; i< listNumb.length; i++){
        if(listNumb[i]>0){
            result+=listNumb[i];
        }
    }
    document.getElementById("result2").innerHTML = result;
}

function demSo(){
    var count = 0;
    for (var i = 0; i< listNumb.length; i++){
        if(listNumb[i]>0){
            count++;
        }
    }
    document.getElementById("result3").innerHTML = count;
}

function smallest(){
    var min = listNumb[0];
    for (var i = 0; i< listNumb.length; i++){
        if(min>listNumb[i]){
            min = listNumb[i];
        }
    }
    document.getElementById("result4").innerHTML = min;
}

function positiveSallest(){
    var array = [];
    for (var i = 0; i< listNumb.length; i++){
        if(listNumb[i]>0){
           array.push(listNumb[i]);
        }
    }
    var min = array[0];
    for (var i = 0;i<array.length;i++){
        if(min>array[i]){
            min=array[i];
        }
    }
    document.getElementById("result5").innerHTML = min;
}

function lastEvenNumber(){
    var last = 0;
    for (var i = 0;i<listNumb.length;i++){
        if(listNumb[i] % 2 == 0){
            last = listNumb[i];
        }
    }
    document.getElementById("result6").innerHTML = last;
}

function doiCho(){
    var i1 = document.getElementById("i1").value*1;
    var i2 = document.getElementById("i2").value*1;
    for (var i = 0;i<listNumb.length;i++){
        var temp = listNumb[i1];
        listNumb[i1] = listNumb[i2];
        listNumb[i2] = temp;
    }

   
    document.getElementById("result7").innerHTML = listNumb;
}

function sort(){
    for (var i = 0;i<listNumb.length-1;i++){
        for(var j = i+1; j<listNumb.length;j++){
            if(listNumb[i]>listNumb[j]){
                var temp = listNumb[i];
                listNumb[i] = listNumb[j];
                listNumb[j] = temp;
    
            }
        }
    }
    document.getElementById("result8").innerHTML = listNumb;
}

function SNT(n){
    var a = 1;
    if(n<2)
        return a=0;
    for (var i =2 ; i<n;i++){
        if(n%i==0){
            return a= 0
            break;
        }
    }
    return a;
}

function firstPrimeNumber(){
    var n = 0;
    for (var i = 0 ; i<listNumb.length ; i++){
        if (SNT(listNumb[i]) == 1){
            n = listNumb[i];
            break;
        }
    }
    if(n==0){
        var result = "Không có số nguyên tố";
    }else var result = n;
    document.getElementById("result9").innerHTML = result;
}

var listNumb1 = [];
function themSo1(){
    var numb1 = document.getElementById("numb1").value * 1;
    listNumb1.push(numb1);
    var result = "";
    for (var i = 0; i< listNumb1.length; i++){
        result += listNumb1[i] + ",";
    }
    document.getElementById("result10").innerHTML = result;
}
function demSoNguyen(){
    var count = 0;
    for (var i = 0; i<listNumb1.length ; i++){
        if(Number.isInteger(listNumb1[i])==true){
            count++;
        }
    }
    document.getElementById("result11").innerHTML = count;
}

function soSanh(){
    countNegative = 0;
    countPositive = 0;
    for (var i = 0  ; i<listNumb.length ; i++){
        if(listNumb[i]<0){
            countNegative++;
        }else if(listNumb[i]>0){
            countPositive++;
        }
    }
    if(countNegative>countPositive){
        var result = "Số âm > Số dương";
    }else if(countPositive>countNegative){
        var result = "Số dương > Số âm";
    }else if(countNegative=countPositive){
        var result = "Số dương = Số âm";
    }
    document.getElementById("result12").innerHTML = result;
}