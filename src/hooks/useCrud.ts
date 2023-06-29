import { useState, useCallback } from "react";

const useCrud = (initialItems:any[]=[]) => {
  const [items, setItems] = useState<any[]>(initialItems);

  const updateItem = useCallback(
    (id: string, changes: Partial<any>) => {
      const index = items.findIndex((item) => item.id === id);
      const selectedItem = { ...items[index], ...changes };
      const clonedItems = [...items];
      clonedItems[index] = selectedItem;

      setItems(clonedItems);
    },
    [items]
  );

  const deleteItem = useCallback(
    (id: string) => {
      const index = items.findIndex((item) => item.id === id);
      const clonedItems = [...items];
      clonedItems.splice(index, 1);
      setItems(clonedItems);
    },
    [items]
  );

  return {updateItem,deleteItem,items}
};

export default useCrud;
