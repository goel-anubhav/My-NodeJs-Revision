const dbconnect = require('./ReadData2Config')

const insert=async ()=>{
    const db = await dbconnect();
 

// To Insert One Data    
// const result = db.insertOne( 
//     {name:'Omega', brand:'Vivo',price:5120,category:'Mobile'}
// )

//To Insert multiple Data
const result = await db.insertMany(
   [ {name:'S23', brand:'Samsung',price:55000,category:'Mobile'},
    {name:'Omega', brand:'Vivo',price:5120,category:'Mobile'},
    {name:'Alpha', brand:'Oppo',price:6000,category:'Mobile'}

   ]
)
}

insert();