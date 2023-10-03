import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-16 px-8 py-16">
      <Item Links={PRODUCTS} title="Trip Airways" />
      <Item Links={RESOURCES} title="Contact Information" />
      <Item Links={COMPANY} title="Group Companies" />
      <Item Links={SUPPORT} title="Contact" />
    </div>
  );
};

export default ItemsContainer;