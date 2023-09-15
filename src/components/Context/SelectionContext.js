import { useContext, createContext, useState } from "react";
import axios from "axios";

const SelectionContext = createContext();

export const useSelection = () => {
    return useContext(SelectionContext);
};

export const SelectionProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addItemToSelection = async (product) => {
    const { name, img, id, price } = product;

    await axios.post("http://localhost:3000/products-cart", {
      productos: [{ name, img, id, price }],
    });

    setSelectedItems([...selectedItems, { name, img, id, price }]);
  };

  return (
    <SelectionContext.Provider
      value={{ selectedItems, addItemToSelection }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

export default SelectionContext;