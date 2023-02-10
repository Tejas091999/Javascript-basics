function fibonacci(num) {
  var a = 0, b = 1, temp;

  while (num >= 0) {
    console.log(a);
    temp = a;
    a = b;
    b = temp + b;
    num--;
  }
}

fibonacci(10);
