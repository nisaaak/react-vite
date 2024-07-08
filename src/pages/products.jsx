import CardProduct from "../components/Fragments/CardProduct"


const ProductPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image={"/images/bear.jpg"} />
                <CardProduct.Body title="Boneka Baru">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex corporis unde aliquam ipsam rerum aliquid natus facere rem. Esse aperiam ad qui ipsa tenetur ex itaque culpa doloribus possimus natus.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp 100.000" />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image={"/images/bear.jpg"} />
                <CardProduct.Body title="Boneka Baru">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex corporis unde aliquam ipsam rerum aliquid natus facere rem. Esse aperiam ad qui ipsa tenetur ex itaque culpa doloribus possimus natus.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp 100.000" />
            </CardProduct>
        </div>
    )
}

export default ProductPage