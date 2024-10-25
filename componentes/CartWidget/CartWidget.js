import cart from './assets/cart.png'

const CartWidget = () => {
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src={cart} alt="cart-widget" style={{ width: '90px' }} />
            <span style={{position: 'absolute',bottom: '15px',left: '15px',backgroundColor: 'red',color: 'white',borderRadius: '50%',padding: '5px 10px',fontSize: '12px',fontWeight: 'bold'}}>
                {0}
            </span>
    </div>
    )
}

export default CartWidget