export type Variant = {
    type: string,
    value: string
}

export type Inventory = {
    quantity: number,
    inStock: true,
}

export type Products = {
    name: string,
    description: string,
    price: number,
    category: string,
    tags: string[],
    variants: Variant[],
    inventory: Inventory,
    // isDeleted?: boolean
}

