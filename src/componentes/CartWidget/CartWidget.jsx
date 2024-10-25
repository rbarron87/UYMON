import cart from './assets/cart.png'

const CartWidget = () => {
    return (
        <div className="relative inline-block">
            <img src={cart} alt="cart-widget" className="w-18" />
            <span className="absolute bottom-3 left-3 bg-red-500 text-white rounded-full py-1 px-2 text-xs font-bold">
                {0}
            </span>
        </div>
    )
}

export default CartWidget;
