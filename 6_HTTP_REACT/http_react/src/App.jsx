import { useState } from "react"

import { useFetch } from "./hooks/useFectch"

const url = "http://localhost:3000/products"

import './App.css'

function App() {


  //  4- Custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url)

  // 1- resgatando dados 
//  const [products, setProducts] = useState([])

  // useEffect(() => {

  //   async function getData() {
  //     const res = await fetch(url)

  //     const data = await res.json()
      
  //     setProducts(data)
  //   }

  //   getData()
      
  // }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name, 
      price
    }
    // 5- refatorando post
    httpConfig(product, "POST")


  //  const res = await fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(product),
  //  })
  
  // //  3 - carregamento dinamico
  // const addedProduct = await res.json()
   
  // setProducts((prevProducts) => [...prevProducts, addedProduct])
  }


// 2- Envio de dados
const [name, setName] = useState("")
const [price, setPrice] = useState("")

  return (
    <div className="app">
      <h1>HTTP COM REACT</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando...</p>}
      {/* 7- tratando erro */}
      {error && <p>{error}</p>}
      {/* 1- Resgate de dados */}
     <ul>
      {items && items.map((product) => (
        <li key={product.id}>{product.name} - {product.price}</li>
      ))}
     </ul>
     {/* 2- Enviando dados */}
     <div className="add-product">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        </label>
        <label>
          <span>Preço</span>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}></input>
        </label>
        {/* <input type="submit" value="Enviar"></input> */}
        {/* 7 - Loading post */}
        {loading && <input type="submit" disabled value="Aguarde.."/>}
        {!loading && <input type="submit" value="Enviar"/>}
      </form>
     </div>
    </div>
  )
}

export default App
