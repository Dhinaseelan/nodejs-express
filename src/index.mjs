//finding data using id 
// import express from "express";
// const app=express()
// const PORT=3000;
// const users=[{id:1,user_name:"kathir"},
//     {id:2,user_name:"david"},
//     {id:3,user_name:"guru"},
//     {id:4,user_name:"selvam"},
//     {id:5,user_name:"palam"}
// ]
// app.get("/",(req,res)=>{
//     res.send(users);
// })
// app.get("/api/user/:name",(req,res)=>{
    
//     // const id=parseInt(req.params.id);
//     const name=req.params.name;
   
//     const user=users.find((user)=>user.user_name===name)
//     if(user){
//         return res.send(user)
//     }
//     return res.status(400).send("IS NOT A VALID URL");
    
    
//     // if(isNaN(id)){
//     //     return res.status(400).send("IS NOT A VALID URL")
//     // }
//     // const user=users.find((user)=>user.id===id)
//     // if(user){
//     //     return res.send(user);
//     // }
//     // return res.status(400).send({msg:"user not found"})
// })
// app.listen(PORT,()=>{
    
//     console.log(`app is running on port ${PORT}`)
// })
// finding data using name----------------------------------------------------------------->>>>>
// import express from "express";
// const app=express()
// const PORT=3000;
// const users=[{id:1,user_name:"kathir"},
//     {id:2,user_name:"david"},
//     {id:3,user_name:"guru"},
//     {id:4,user_name:"selvam"},
//     {id:5,user_name:"palam"}
// ]
// app.get("/",(req,res)=>{
//     res.send(users);
// })
// app.get("/api/user/:name",(req,res)=>{
    
//     // const id=parseInt(req.params.id);
//     const name=req.params.name;
   
//     const user=users.find((user)=>user.user_name===name)
//     if(user){
//         return res.send(user)
//     }
//     return res.status(400).send("IS NOT A VALID URL");
    
    
//     // if(isNaN(id)){
//     //     return res.status(400).send("IS NOT A VALID URL")
//     // }
//     // const user=users.find((user)=>user.id===id)
//     // if(user){
//     //     return res.send(user);
//     // }
//     // return res.status(400).send({msg:"user not found"})
// })
// app.listen(PORT,()=>{
    
//     console.log(`app is running on port ${PORT}`)
// })
// data checking using both id and name of the user
import express from 'express';
const app=express()
const Port=3000;
const users=[{id:1,user_name:"kathir"},
    {id:2,user_name:"david"},
    {id:3,user_name:"Guru"},
    {id:4,user_name:"Selvam"},
    {id:5,user_name:"Palam"}
]
const bike=[{id:1,model:"re classic 350"},
    {id:2,model:"re gt 650"},
    {id:3,model:"re ggr 450"},
    {id:4,model:"re himaliyan 450"},
    {id:5,model: "re hunter 350"}
]
//query parameters 
// app.get('/api/search',(req,res)=>{
//     const name=req.query.name;
//     console.log(`you name is ${name}`)
// })
// app.get('/api/user/:id/:name',(req,res)=>{
//     const id=parseInt(req.params.id)
//     const name=req.params.name;
//     const user=users.find(u=>u.id===id&&u.user_name===name);

//     if(user){
//         return res.send(`<h1>${user.id} - ${user.user_name}</h1>`);
//     }
//     return res.status(404).send(`<h1>User not found :${name}</h1>`)
// })
app.listen(Port,()=>{
    console.log("server is runing waiting for the response")
})
app.get('/api/user', (req, res) => {
  const {query:{ filter, value }} = req
    if(filter && value) {
       return  res.send(users.filter(user =>
    user[filter].toLowerCase().includes(value.toLowerCase())
  ))
    }
 

  
});
app.get("/api/bike",(req,res)=>{
    const {query:{filter,value}}=req
    if(filter && value){
      return  res.send(bike.filter(model=>model[filter].toLowerCase().includes(value.toLowerCase())));
    }
})
