function Equalspace(a, b, c){
    let arr = [a,b,c]
    let sorted = arr.sort((a,b)=>{
        return a-b;
    })
    a = arr[0];
    b= arr[1];
    c = arr[2]
    let num;
    num = (c+a)/2
    return num===b?true:false
}
console.log (Equalspace(2, 4, 6))
console.log(Equalspace(4, 6, 2))
console.log(Equalspace((4, 6, 3)))