const Item = ({ product }) => {
    return (
      <div>
        <li className="Nombre">{product.name}</li>
        <img src={product.img} />        
        <li className="Precio">{product.price}</li>
        <li className="Stock">{product.stock}</li>
      </div>
    );
  };

export default Item;