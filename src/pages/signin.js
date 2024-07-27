import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Signin() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        // alert("Login successful");
        document.cookie = `authToken=${data.token}; path=/; expires=${new Date(
          Date.now() + 3600000
        ).toUTCString()}`;
        router.push("/");
      } else {
        alert(data.message || "Login Failed");
      }
    } catch (error) {
      alert("An error occurred");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Sign in</button>
      </form>
      <Link href="/signup">Sign up</Link>
    </>
  );
}
