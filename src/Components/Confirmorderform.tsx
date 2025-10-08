import { useState } from "react";
import { useCart } from "../Context/CartContext";
type OrderFormProps = {
  onClose: () => void;
};

function OrderForm({ onClose }: OrderFormProps) {

  const {confirmOrder } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
    city: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confirmOrder();
    console.log("Order Data:", formData);
    alert("Order Submitted!");
    onClose(); // Close modal after submit

  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Confirm Your Order</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <textarea
            name="address"
            placeholder="House Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-black font-bold text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-white text-black font-bold border-2 border-black/10 px-4 py-2 rounded"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
