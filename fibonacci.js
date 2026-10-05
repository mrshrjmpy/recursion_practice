const fibs = function(n) {
  let a=0, b=1;
  let result = [];
  if(n==1) {
    result.push(a);
    return result;
  }
  result.push(a, b);
  for(let i=2; i<n; i++)
  {
    let temp = a + b;
    result.push(temp);
    a = b;
    b = temp;
  }
  return result;
}

const fibsRec = function(n, result = []){
  let newnum = 0;
  if(n==1)
  {
    newnum = 0;
  }
  else if(n==2)
  {
    result = fibsRec(n-1);
    newnum = 1;
  }
  else if (n>2){
    result = fibsRec(n-1);
    newnum = result[n-2] + result[n-3];
  }
  result.push(newnum);
  return result;
}

console.log(fibsRec(10));
