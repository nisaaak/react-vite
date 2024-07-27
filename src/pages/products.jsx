import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"

const products = [
    {
        id: 1,
        name: 'Boneka Baru',
        price: 'Rp 100.000',
        image: '/images/bear.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex corporis unde aliquam ipsam rerum aliquid natus facere rem. Esse aperiam ad qui ipsa tenetur ex itaque culpa doloribus possimus natus.'
    },
    {
        id: 2,
        name: 'Boneka Baru 2',
        price: 'Rp 100.000',
        image: '/images/bear.jpg',
        description: 'Lorem ipsum, dolor sit amet consectetur'
    }
]

const email = localStorage.getItem('email')

const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = '/login'
}

const ProductPage = () => {
    return (
        <>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button
                    classname="ml-5 bg-black"
                    onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="flex justify-center py-5">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))
                }
            </div>
        </>
    )
}

export default ProductPage