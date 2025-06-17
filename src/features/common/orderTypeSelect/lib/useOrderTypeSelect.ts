import { OrderType } from "@/entities/order";
import { useEffect, useState } from "react";

type Props = {
    initialOrderType?: OrderType
}
const options: Array<{ value: OrderType, label: OrderType }> = [
    { value: 'Dine In', label: 'Dine In' },
    { value: 'To Go', label: 'To Go' },
    { value: 'Delivery', label: 'Delivery' },
]
const useOrderTypeSelect = (initialOrderType?: OrderType) => {
    const [orderType, setOrderType] = useState<OrderType>()

    useEffect(() => {
        initialOrderType && setOrderType(initialOrderType)
    }, [initialOrderType])

    const onSelectOrderType = (orderType: OrderType) => setOrderType(orderType)

    return {
        options,
        orderType,
        onSelectOrderType
    }
}

export default useOrderTypeSelect;