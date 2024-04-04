type ShoppingItemPropos = {
  name: string;
  price: number;
};

export default function ShoppingItem(props: ShoppingItemPropos) {
  return (
    <div>
      <strong>{props.name}</strong>: <em>{props.price} €</em>
    </div>
  );
}
