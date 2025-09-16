        import React, { useState, useEffect } from 'react'
        import axios from 'axios'

        const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        export default function App(){
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(()=>{
    axios.get(`${API}/api/products`).then(r => setProducts(r.data)).catch(console.error)
  },[])

  function addToCart(product){
    setCart(prev => {
      const found = prev.find(p => p.product._id === product._id);
      if(found) return prev.map(it => it.product._id === product._id ? {...it, qty: it.qty + 1} : it)
      return [...prev, { product, qty: 1 }]
    })
  }

  return (
    <div style={{padding:24}}>
      <h1>Marketplace</h1>
      <div style={{display:'flex', gap:20}}>
        <div style={{flex:3}}>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12}}>
            {products.map(p=> (
              <div key={p._id} style={{border:'1px solid #ddd', padding:12}}>
                <img src={p.images?.[0]||'https://via.placeholder.com/300'} alt='' style={{width:'100%', height:160, objectFit:'cover'}} />
                <h3>{p.title}</h3>
                <p>{p.description?.slice(0,80)}</p>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <strong>₦{p.price}</strong>
                  <button onClick={()=>addToCart(p)}>Add</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{width:320}}>
          <h3>Cart</h3>
          {cart.map(it=> (
            <div key={it.product._id} style={{display:'flex', justifyContent:'space-between'}}>
              <div>{it.product.title} x {it.qty}</div>
              <div>₦{it.product.price * it.qty}</div>
            </div>
          ))}
          <div style={{marginTop:12}}>Total: ₦{cart.reduce((s,it)=>s+it.product.price*it.qty,0)}</div>
        </div>
      </div>
    </div>
  )
}
