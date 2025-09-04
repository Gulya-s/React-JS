export default function Product({title, price, inStock, description, rating, tags}) {
    const hasDiscount = tags.includes("Скидка");
    const discountedPrice = hasDiscount ? price * 0.9 : price;

    const formatPrice = (value) => `${Math.round(value)}₸`;

    const renderStars = (value) => "⭐".repeat(value);

    return(
        <div className="product-card" style={{ border: "1px solid #00d0ffff", padding: "20px", margin: "10px", borderRadius: "8px" }}>
            <h2>{title}</h2>
            <p>{description}</p> 

            {inStock ? (
                hasDiscount ?(
                    <p>
                        <span style={{textDecoration: "line-through", color: "gray"}}>
                            {formatPrice(price)}
                        </span>{" "}
                        <span style={{color: "red", fontWeight: "bold"}}>
                            {formatPrice(discountedPrice)}
                        </span>
                    </p>
                ):(
                    <p>{formatPrice(price)}</p>
                )
            ):(
                <p style={{color: "res"}}>Нет в наличии</p>
            )}

            <p>Рейтинг: {renderStars(rating)}</p>

            <div>
                {tags.map((tag, index) => (
                    <span key={index} style={{color: "#000", marginRight: "5px", padding: "3px 6px", backgroundColor: "#00d0ffff", borderRadius: "4px"}}>
                        {tags}
                    </span>
                ))}    
            </div>   
        </div>
    )
}