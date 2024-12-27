import { Badge } from "flowbite-react"
import { useId } from "react"
import { useCart } from "../hooks/useCart"

function CartItem({images, price, title, quantity, addToCart}){
    let image = images[0].replaceAll('["','').replaceAll('"]','')
    return (
        <li>
            <img src={image} alt={title}/>
            <div className="mt-2 text-base">
                <strong>{title}</strong> - ${price}
            </div>
            <footer className="mt-2">
                <p className="text-base font-extrabold m-0 ">Qty: {quantity}</p>
                <button onClick={addToCart} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-extrabold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-8 h-8">+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } =  useCart()
    const quantity = cart.reduce((acc, el)=> acc+el.quantity, 0)
    return (
    <>
        <label className="cart-button" htmlFor={cartCheckboxId}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFF" className="size-6">
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
            <Badge className="absolute bottom-0 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{quantity}</Badge>
        </label>
        <input id={cartCheckboxId} type="checkbox" className="hiddenCheckBox" />
        <aside className="cart">
            <ul>
                {
                    cart.map( product => (
                        <CartItem 
                        key={product.id}
                        addToCart={()=>addToCart(product)} 
                        {...product} /> 
                    ))
                }
            </ul>
            <div className="text-center">
                <button onClick={()=>clearCart()} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Clear
                </button>
            </div>
        </aside>
    </>
  )
}
