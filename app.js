const express =require('express');
const app =express();

app.get('/', (req, res)=>{
    res.send("MY name is Ajay Tiwari! Hello  what");
});
app.listen (4545)