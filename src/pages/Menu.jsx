function Menu() {
  const foods = [
    { name: "Pizza", price: 199 },
    { name: "Burger", price: 149 },
    { name: "Biryani", price: 249 },
    { name: "French Fries", price: 99 }
  ];

  return (
    <div className="menu-container">
      <h1>Food Menu</h1>

      <div className="food-container">
        {foods.map((food) => (
          <div className="food-card" key={food.name}>
            <h3>{food.name}</h3>
            <p>₹{food.price}</p>
            <button>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;