const express=require('express');
const cors=require('cors');
const app=express();
const port=3001;
app.use(express.json());
app.use(cors());
let books=[
    {id:1,title:'The Alchemkst',author:'paulo coelho'},
    {id:2,title:'The monk who sold his',author:'Robin Sharma'}

];
app.get('/api/books',(req,res)=>{
    res.json(books);

});
app.post('/api/books',(req,res)=>{
    const{title,author,year}=req.body;
    const newBook={
        id:books.length+1,
        title,
        author,
        year
    };
    books.push(newBook);
    res,json(newBook);
}); 

app.listen(port,()=>{
    console.log('server is running on http:/localhost:3001'); 

})