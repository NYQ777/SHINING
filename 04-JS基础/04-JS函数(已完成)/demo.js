/* // 定义一个函数average
function average() {
  var add = 0;
// 遍历所有参数
  for (var i = 0; i < arguments.length; i++) {
    add += arguments[i];  //求和
  }
  var result = add / arguments.length;  //求平均数
  console.log(result);  //输出结果
}
average(20,20,20,20,20)  //示例(20)
average(1,2,3,4,5,6,7,8)  //示例(4.5)
average(10,20,30)  //示例(20)
average(111,333,555,777,999)  //示例(555)
 */


//判断喇叭花数,如果是结果输出true,若果不是输出false
function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  function sumOfDigitFactorials(num) {
    var numStr = String(num);
    var sum = 0;
    for (var i = 0; i < numStr.length; i++) {
      var digit = Number(numStr.charAt(i));
      sum += factorial(digit);
    }
    return sum;
  }
  
  for (var i = 100; i <= 999; i++) {
    var digitSum = sumOfDigitFactorials(i);
    if (digitSum === i) {
      console.log("喇叭花数:", i);
    }
  }
  