//Tuesday: Magic Squares
//A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15. 
function isMagicSquare(arr) {
    
    let j=0;
    for (let i=0;i<3;i++){
        
        if (arr[j]+arr[j+1]+arr[j+2]!=15){
            
            return false;
        }
        j+=3;
        if (arr[i] + arr[i+3]+arr[i+6] !=15){
            return false;
        }
        
    }
    if (arr[0]+arr[4]+arr[8]!=15 || arr[2]+arr[4]+arr[6]!=15){
        return false;
    }

    return true;
}

let arr1=[8, 1, 6, 3, 5, 7, 4, 9, 2];
let arr2=[2, 7, 6, 9, 5, 1, 4, 3, 8];
let arr3=[3, 5, 7, 8, 1, 6, 4, 9, 2];
let arr4= [8, 1, 6, 7, 5, 3, 4, 9, 2];

console.log(isMagicSquare(arr1));
console.log(isMagicSquare(arr2));
console.log(isMagicSquare(arr3));
console.log(isMagicSquare(arr4));