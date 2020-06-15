//output let arr = [1,3,5,7] wanted a solution like below
//Bruteforce all elements.
/*
 *
 1-3
 1-5
 1-7
 3-5
 3-7
 */

let arr = [1,3,5,7]

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        console.log(arr[i] + '-' + arr[j])
    }
}