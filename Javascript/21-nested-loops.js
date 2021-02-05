var result = '';
for (m = 1; m <= 5; m++) {
    for (n = 1; n <= m; n++) {
        result = result + " " + n
        if (n == m)
            continue;
    }
    console.log(result);
    result = "";
}

console.log();

var result1 = '';
var count = 1
for (m = 1; m <= 5; m++) {
    for (n = 1; n <= m; n++) {
        result1 = result1 + " " + count
        count++;
        if (n == m)
            continue;
    }
    console.log(result1);
    result1 = "";
}
