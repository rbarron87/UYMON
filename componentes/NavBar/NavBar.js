import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center',padding: '10px 20px',backgroundColor: '#f8f9fa',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
            <h3 style={{ margin: 0 }}>UYMON</h3>
            <div style={{display: 'flex',gap: '15px'}}>
                <button>NORIA</button>
                <button>DESOSADO</button>
                <button>EMPAQUE PRIMARIO</button>
                <button>EMPAQUE SECUNDARIO</button>
                <button>ETIQUETADO</button>
                <button>LOGISTICA</button>
            </div>
            <div style={{marginRight: '10px'}}>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;
