import { useNavigate } from 'react-router-dom';

export default function Basket(props){
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c)=> a + c.quantity *c.price, 0);
    const taxPrice = itemsPrice *0.14;
    const deliveryPrice = itemsPrice > 200 ? 0: 20;
    const totalPrice = itemsPrice + taxPrice + deliveryPrice;
    const navigate = useNavigate();

    return <aside className='block column-1'>
        <h2>Food Cart</h2>
       <div>
       {cartItems.length === 0 && <div>Cart is empty</div>}
     
       {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.title}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x Rs{item.price.toFixed(2)}
            </div>
          </div>
        ))}

{cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">Rs{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">Rs{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                Rs {deliveryPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>Rs{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() =>  navigate("/Payment")}>
                Checkout
                
              </button>
        
              
            </div>
          </>
        )}

       </div>
    </aside>;
    
}