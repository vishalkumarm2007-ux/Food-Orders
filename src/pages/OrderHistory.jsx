import { useState } from "react";
import { supabase } from "../supabaseClient";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  async function getOrders() {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert("Failed to retrieve orders");
      return;
    }

    setOrders(data);
  }

  return (
    <div className="history-container">
      <h1>Order History</h1>

      <button
        className="history-button"
        onClick={getOrders}
      >
        View Orders
      </button>

      <div className="history-table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Food Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.name}</td>
                <td>{order.food_item}</td>
                <td>₹{order.price}</td>
                <td>{order.quantity}</td>
                <td>₹{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderHistory;