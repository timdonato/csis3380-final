import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";

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
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}
      <Header user={user} />
      <div class="container my-5">
        <div class="form-wrapper">
            <div class="form-title2">
                <h3>Upload an Item</h3>
                <p class="para">Get your item to be sold!</p>
            </div>
            <form action="#">
                <div class="row">
                    <div class="col-12">
                        <div class="form-inner">
                          <input
                            type="text"
                            name="itemName"
                            value={form.itemName}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                          />
                        </div>
                    </div>
                    
                    <div class="col-12">
                        <div class="form-inner">
                        <input
                          type="text"
                          name="imageUrl"
                          value={form.imageUrl}
                          onChange={handleChange}
                          placeholder="Image URL"
                          required
                        />
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-12 col-md-6">
                        <div class="form-inner">
                          <input
                            type="text"
                            name="startingPrice"
                            value={form.startingPrice}
                            onChange={handleChange}
                            placeholder="Starting Price"
                            required
                          />
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-12 col-md-6">
                      <div class="form-inner">
                        <input
                          type="date"
                          name="endTime"
                          value={form.endTime}
                          onChange={handleChange}
                          placeholder="endTime"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-12">
                        <div class="form-inner">
                        <textarea
                          name="description"
                          value={form.description}
                          onChange={handleChange}
                          placeholder="Description"
                          rows="12"
                        ></textarea>
                        </div>
                    </div>
                    
                    <div class="col-12">
                        <button type="submit" class="eg-btn btn--primary btn--md form--btn">Send Message</button>
                    </div>
                </div>
            </form>
        </div>

      </div>
      

    </>
  );
}
