import { useState } from "react"
import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"

const ProductPage = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        }
    ])

    const products = [
        {
            id: 1,
            name: 'Boneka Baru',
            price: 100000,
            image: '/images/bear.jpg',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex corporis unde aliquam ipsam rerum aliquid natus facere rem. Esse aperiam ad qui ipsa tenetur ex itaque culpa doloribus possimus natus.'
        },
        {
            id: 2,
            name: 'Boneka Baru 2',
            price: 100000,
            image: '/images/bear.jpg',
            description: 'Lorem ipsum, dolor sit amet consectetur'
        },
        {
            id: 3,
            name: 'Boneka Baru 3',
            price: 100000,
            image: '/images/bear.jpg',
            description: 'Lorem ipsum, dolor sit amet consectetur'
        },
        {
            id: 4,
            name: 'Boneka Baru 4',
            price: 100000,
            image: '/images/bear.jpg',
            description: 'Lorem ipsum, dolor sit amet consectetur'
        },
        {
            id: 5,
            name: 'Boneka Baru 5',
            price: 100000,
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

    const handleAddToCart = (id) => {
        if (cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
            )
        } else {
            setCart([...cart, { id, qty: 1 }])
        }
    }

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
                <div className="w-4/6 flex flex-wrap">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer
                                price={product.price}
                                id={product.id}
                                handleAddToCart={handleAddToCart} />
                        </CardProduct>
                    ))
                    }
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>Rp{' '}{product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                                        <td>{item.qty}</td>
                                        <td>Rp{' '}{(item.qty * product.price).toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductPage