import { useContext } from 'react'

import Button from './UI/Button.jsx'
import logoImg from '../assets/logo.jpg'
import CartContext from '../store/CartContext.jsx'
import UserProgressContext from '../store/UserProgressContext.jsx'

export default function Header () {
    const cartCtx = useContext(CartContext)
    const useProgressCtx = useContext(UserProgressContext)

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity
    }, 0)

    function handleShowCart() {
        useProgressCtx.showCart()
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="Food ordering app" />
                <h1>Send Foodz</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}