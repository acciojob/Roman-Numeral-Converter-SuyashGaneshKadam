function convertToRoman(num) {
	const obj = {
	0:['M',1000], 
	1:['CM',900],
	2:['D', 500], 
	3:['CD',400],
	4:['C', 100], 
	5:['XC',90],
	6:['L', 50], 
	7:['XL',40],
	8:['X', 10], 
	9:['IX', 9],
	10:['V', 5], 
	11:['IV', 4],
	12:['I', 1]
  };
  let index = 0;
  let ans = "";
  while(true){
	if(obj[index][1] == num){
		ans += obj[index][0];
		break;
	}
	else if(obj[index][1] > num){
		index++;
	}
	else{
		num -= obj[index][1];
		ans += obj[index][0];
	}
  }
  return ans;
}

console.log(convertToRoman(900));




// do not edit below this line
module.exports = convertToRoman
