
const ItemDetail = ({ item }) => {
    return (
      <div>
        <div>{item.name}</div>
        <img src={item.img}/>
        <div>{item.price}</div>
        <div>{item.stock}</div>
      </div>
    );
  };

export default ItemDetail;
