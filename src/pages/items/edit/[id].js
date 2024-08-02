import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../../components/Header";

export default function LiveAuction({ user, initialItem }) {
  const router = useRouter();
  const { id } = router.query;

  const [form, setForm] = useState({
    itemName: "",
    description: "",
    imageUrl: "url",
    startingPrice: "",
    currentPrice: "",
    endTime: "",
  });

  // set initial value from db
  useEffect(() => {
    if (initialItem) {
      setForm({
        itemName: initialItem.name || "",
        description: initialItem.description || "",
        imageUrl: initialItem.imageUrl || "",
        startingPrice: initialItem.startingPrice || "",
        currentPrice: initialItem.currentPrice || "",
        endTime: initialItem.endTime || "",
      });
    }
  }, [initialItem]);

  // onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // submit edit req
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/items/edit/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Item updated");
        router.push("/items");
      } else alert(data.message);
    } catch (error) {
      alert("An error occurred");
    }
  };

  // render
  return (
    <>
      <Header user={user} />
      <div className="container my-5">
        <div className="form-wrapper">
          <div className="form-title2">
            <h3>Update an Item</h3>
            <p className="para">Get your item to be sold!</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                <div className="form-inner">
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

              <div className="col-12">
                <div className="form-inner">
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
              <div className="col-xl-6 col-lg-12 col-md-6">
                <div className="form-inner">
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
              <div className="col-xl-6 col-lg-12 col-md-6">
                <div className="form-inner">
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
              <div className="col-12">
                <div className="form-inner">
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                    rows="12"
                  ></textarea>
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="eg-btn btn--primary btn--md form--btn">Update item</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

import jwt from "jsonwebtoken";

export async function getServerSideProps(context) {
  const { default: User } = await import("../../../../db/models/User");
  const { default: Item } = await import("../../../../db/models/Item");

  const { req, params } = context;
  const token = req.cookies.authToken || "";

  try {
    // JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).lean(); // check user on database

    const item = await Item.findById(params.id).lean();
    return {
      props: {
        user: user ? { id: user._id.toString(), username: user.username } : null,
        initialItem: item
          ? {
              name: item.itemName || "",
              description: item.description || "",
              imageUrl: item.imageUrl || "",
              startingPrice: item.startingPrice || "",
              currentPrice: item.currentPrice || "",
              endTime: item.endTime ? item.endTime.toISOString().split('T')[0] : "",
            }
          : null,
      },
    };
  } catch (error) {
    return {
      props: {
        user: null,
        initialItem: null,
      },
    };
  }
}
