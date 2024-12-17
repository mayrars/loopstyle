import { useId } from "react"


export function Cart() {
    const cartCheckboxId = useId()
    return (
    <>
        <label className="cart-button" htmlFor={cartCheckboxId}></label>
        <input id={cartCheckboxId} type="checkbox" hidden />
        <aside className="cart">
            <ul>
                <li>
                    <img src="https://i.imgur.com/mcW42Gi.jpeg" alt="Shoes"/>

                </li>
                <div>
                    <strong>Shoes</strong> - $500
                </div>
                <footer>
                    <small>Qty: 1</small>
                    <button>+</button>
                </footer>
            </ul>
            <button>
                Clear
            </button>
        </aside>
    </>
  )
}
