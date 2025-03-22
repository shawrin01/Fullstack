import express from 'express';
const app = express();

app.get('/',(req,res)=>{
   res.send('server is readyyy');
})
app.get('/data',(req,res)=>{
  const data = [
    {name:'Shawrin Fouzia',email:'shawrin20@gmail.com'},
    {name:'inaya ilham',email:'inaya20@gmail.com'},
    {name:'anabiya',email:'ibnath@gmail.com'}
  ]
  res.send(data);
})

app.listen(3000);