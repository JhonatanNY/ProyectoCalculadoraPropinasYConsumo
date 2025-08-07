import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"
import { useMemo } from "react"

type OrderTotalProps = {
  order : OrderItem[],
  tip : number,
  placeOrder: () => void
}


export default function OrderTotals({order, tip, placeOrder}: OrderTotalProps) {

  // const subTotalAmount = () => {
    
  //   let subTotal = order.reduce((acum,valor) => acum + (valor.price * valor.cantidad), 0 )
  //   return subTotal
  // }

  const subTotalAmount = useMemo(() => order.reduce((total,valor) => total + (valor.price * valor.cantidad), 0 ),[order])

  const tipAmount = useMemo(() => subTotalAmount * tip,[tip, order])
  console.log(tipAmount)

  const totalPagar = useMemo(() => subTotalAmount + tipAmount,[tip, order])

  return (
    <>
        <div className="space-y-3">
          <h2 className="font-black text-2xl">Totales y Propinas:</h2>
          <p>Subtotal a pagar:{' '}
              <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
          </p>
          <p>Propinas:{' '}
              <span className="font-bold">{formatCurrency(tipAmount)}</span>
          </p>

          <p>Total a Pagar:{' '}
              <span className="font-bold">{formatCurrency(totalPagar)}</span>
          </p>
        </div>

        <button className="w-full bg-black p-3 text-white font-bold mt-10 disabled:opacity-10" 
                disabled = {totalPagar === 0}
                onClick = {() => placeOrder()}
                >
            Guardar Orden

        </button>
    </>

  )
}
