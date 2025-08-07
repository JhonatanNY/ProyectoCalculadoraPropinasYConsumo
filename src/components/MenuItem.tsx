import { formatCurrency } from "../helpers"
import type { MenuItem, OrderItem } from "../types"

type MenuItemProps = {
    item : MenuItem
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 
    flex justify-between cursor-pointer rounded-lg"
    onClick={() => addItem(item)}
    >
        <p>{item.name}</p>
        <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  )
}

