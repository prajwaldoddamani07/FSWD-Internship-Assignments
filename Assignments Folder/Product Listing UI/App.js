const products = [
 {id:1,name:"Nike"},
 {id:2,name:"Adidas"},
 {id:3,name:"Puma"}
];

function App(){

 return(
  <div>

   {products.map(product=>(
    <div key={product.id}>
      <h2>{product.name}</h2>
    </div>
   ))}

  </div>
 );
}

export default App;