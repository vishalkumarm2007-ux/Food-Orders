import { useState } from "react";
import { supabase } from "../supabaseClient";
function Order() {
  const [name, setName] = useState("");
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState(1);

  const foodItems = [
    { name: "Pizza", price: 199 },
    { name: "Burger", price: 149 },
    { name: "Biryani", price: 249 },
    { name: "French Fries", price: 99 },
  ];

  const selectedFood = foodItems.find((item) => item.name === food);

  const total = selectedFood
    ? selectedFood.price * quantity
    : 0;

  const handleOrder = async () => {
  if (!name || !food || quantity < 1) {
    alert("Please fill all the details.");
    return;
  }

  const selectedFood = foodItems.find((item) => item.name === food);

  const total = selectedFood.price * quantity;

  const { error } = await supabase
    .from("orders")
    .insert([
      {
        name: name,
        food_item: selectedFood.name,
        price: selectedFood.price,
        quantity: quantity,
        total: total,
      },
    ]);

  if (error) {
    console.error(error);
    alert("Failed to place order!");
    return;
  }

  alert("Order placed successfully!");

  setName("");
  setFood("");
  setQuantity(1);
};

  return (
    <div className="order-page">
      <div className="order-card">

        <h1>Place Your Order</h1>

        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Food Item</label>
        <select
          value={food}
          onChange={(e) => setFood(e.target.value)}
        >
          <option value="">Select Food Item</option>

          {foodItems.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name} - ₹{item.price}
            </option>
          ))}
        </select>

        <label>Quantity</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <button onClick={handleOrder}>
          Place Order
        </button>

        {/* ORDER PREVIEW */}
        {name && food && (
          <div className="order-preview">
            <h2>Order Summary</h2>

            <p>👤 <strong>Name:</strong> {name}</p>
            <p>🍴 <strong>Food:</strong> {selectedFood.name}</p>
            <p>💰 <strong>Price:</strong> ₹{selectedFood.price}</p>
            <p>🔢 <strong>Quantity:</strong> {quantity}</p>

            <hr />

            <h3>Total: ₹{total}</h3>
          </div>
        )}

      </div>
    </div>
  );
}

export default Order;