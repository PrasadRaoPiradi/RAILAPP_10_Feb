export default function Product(props){
    const {item, product, onAdd, onRemove} = props;
    return(
        <div className="card1"> 
            <div className="left1">
            <img className="small" src = {product.img} alt= {product.title}></img>
            </div>
            <div className="right1">{product.desc}</div>
            <h3>{product.title}</h3>
            <div>Rs {product.price}</div>
            <div>
                {item ? <div> 
                    <button onClick={()=> onRemove(item)} className="remove"> - </button>
                    <span className="p-1">{item.quantity}</span>
                    <button onClick={()=> onAdd(item)} className="add"> + </button>
                </div>:(<button onClick={()=>onAdd(product)}>Add to Cart</button>)
                
                }
                
            </div>
        </div>
    )
}