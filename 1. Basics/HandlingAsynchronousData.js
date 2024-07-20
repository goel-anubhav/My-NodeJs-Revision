
// ---------------------Problem----------------
let x = 20
let y = 10


setTimeout(()=>{
    x=30                        //Value Updated x+y=30+10=40
},2000)

console.log(x+y)

// Output: Started The Process
//         Process Compl/eted
//         Process 2 

// ---------------Solution---------------------

let a = 20
let b = 0
let waitingData= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(30)
    },1000)
})

waitingData.then((data)=>{
    b=data
    console.log(a+b)
})


