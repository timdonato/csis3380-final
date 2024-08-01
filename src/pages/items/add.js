import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function LiveAuction({ user }) {
  const router = useRouter();
  const [form, setForm] = useState({
    itemName: "",
    description: "",
    imageUrl: "url",
    startingPrice: "",
    currentPrice: "",
    endTime: "",
  });

  useEffect(() => {
    setForm(prevForm => ({
      ...prevForm,
      currentPrice: prevForm.startingPrice
    }));
  }, [form.startingPrice]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/items/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Item added");
        router.push("/items");
      } else alert(data.message);
    } catch (error) {
      alert("An error occurred");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="itemName"
          value={form.itemName}
          onChange={handleChange}
          placeholder="itemName"
          required
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="description"
          required
        />
        <input
          type="text"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="startingPrice"
          value={form.startingPrice}
          onChange={handleChange}
          placeholder="startingPrice"
          required
        />
        <input
          type="date"
          name="endTime"
          value={form.endTime}
          onChange={handleChange}
          placeholder="endTime"
          required
        />
        
        <button type="submit">Add</button>
      </form>
    </>
  );
}
