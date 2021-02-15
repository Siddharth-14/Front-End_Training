function sum(x, y, cb) {
  setTimeout(function () {
    cb(x + y);
  });
}

sum(12, 13, function (result) {
  console.log(result);
  sum(result, 14, function (result) {
    console.log(result);
    sum(result, 15, function (result) {
      console.log(result);
    });
  });
});
