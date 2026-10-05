const mergeSort = function(arr){
    if(arr.length === 0 || arr.length === 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    let newarr = merge(left, right);
    return newarr;
}

const merge = function(arr1, arr2){
    let i = 0, j = 0, k = 0;
    let result = [];
    while(i<arr1.length && j<arr2.length)
    {
        if(arr1[i] < arr2[j]){
            result.push(arr1[i++]);
        }
        else if(arr1[i] >= arr2[j]){
            result.push(arr2[j++]);
        }
    }
    if(i < arr1.length)
    {
        result.push(...arr1.slice(i));
    }
    else if(j < arr2.length)
    {
        result.push(...arr2.slice(j));
    }
    return result;
}

console.log(mergeSort([4,3,2,1,1,2,11,8,7,6]));