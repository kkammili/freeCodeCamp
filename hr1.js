// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
//
//     For example, there are n =7 socks with colors . There is one pair of color ar = [1,2,1,2,1,3,2]
//
// and one of color . There are three odd socks left, one of each color. The number of pairs is.
//
// Sample Input
// 9
// 10 20 20 10 10 30 50 10 20
// Sample Output
//
// 3



const makePairs = function(sockColl, size){
    let sorColl = sockColl.sort((a,b)=>a-b)

    var count = 0

    for(var i=sorColl.length-1; i>=0; i--){
        let j = sorColl[i]
        let k = sorColl[i-1]

        if(j && k && j === k){
            count = count + 1
            i--
        }
    }

    return count
}

console.log(makePairs([10, 20, 20, 10, 10, 30, 50, 10, 20], 9))
console.log(makePairs([1,2,1,2,1,3,2], 7))