import CardProduct from "../components/Fragments/CardProduct"

const products = [
    {
        id: 1,
        name: 'Boneka Baru',
        price: 'Rp 100.000',
        image: '/images/bear.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex corporis unde aliquam ipsam rerum aliquid natus facere rem. Esse aperiam ad qui ipsa tenetur ex itaque culpa doloribus possimus natus.'
    }
]

const ProductPage = () => {
    return (
        <div className="flex justify-center py-5">
            {products.map((product) => (
                <CardProduct>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
            ))
            }
        </div>
    )
}

export default ProductPage