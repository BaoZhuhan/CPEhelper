function calAvgStdDev(){
    var inputVal = document.getElementById("InputavgStdDev").value;

    var regex = /^(\d+(\.\d+)?)( \d+(\.\d+)?)*$/;
    if (!regex.test(inputVal)) {
        alert("请输入以空格分割的数字！");
        return;
    }

    var num = inputVal.split(' ').map(Number);

    var maxDecimalLength = Math.max(...num.map(n => ((n.toString().split('.')[1] || '').length)));

    var avg = num.reduce((a, b) => a + b, 0) / num.length;

    var up = 0;

    for(var i = 0 ; i < num.length ; i++){
        up += (num[i] - avg)*(num[i] - avg);     
    }

    var stdDeviation = up/(num.length - 1) ;

    stdDeviation = Math.sqrt(stdDeviation);

    stdDeviation = stdDeviation.toFixed(maxDecimalLength);

    document.getElementById("outputAvg").innerHTML = avg;
    document.getElementById("outputStdDev").innerHTML = stdDeviation;
}