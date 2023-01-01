import app from "./src/app.js";
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`)
})
