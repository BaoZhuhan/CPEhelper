function calStanddeviation(){
    var inputVal = document.getElementById("dataInput").value;

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

    document.getElementById("avg").innerHTML = avg;
    document.getElementById("stdDeviation").innerHTML = stdDeviation;
}