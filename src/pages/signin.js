import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image';

export default function Login({ user }) {
  const router = useRouter();


  // form handling
  const [form, setForm] = useState({ email: "", password: "" });

  // onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // submit sign in req
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
  // --------------------------------------------------------------------------------

  // render
  return (
    <>
      <div className="login-section pt-120 pb-120">
        <img
          alt="images"
          src="assets/images/bg/section-bg.png"
          className="img-fluid section-bg-top"
        />
        <img
          alt="images"
          src="assets/images/bg/section-bg.png"
          className="img-fluid section-bg-bottom"
        />
        <div className="container">
          <div className="row d-flex justify-content-center g-4">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="form-wrapper">
                <div className="form-title">
                  <h3>Log In</h3>
                  <p>
                    New Member? <Link href="/signup">signup here</Link>
                  </p>
                </div>
                <form className="w-100" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Enter Your Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="Enter Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Password *</label>
                        <input
                           type="password"
                           name="password"
                           value={form.password}
                           onChange={handleChange}
                           placeholder="Password"
                           required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                        <div className="form-group">
                          <input type="checkbox" id="html" />
                          <label for="html">
                            I agree to the <Link href="#">Terms & Policy</Link>
                          </label>
                        </div>
                        <Link href="#" className="forgot-pass">
                          Forgotten Password
                        </Link>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="account-btn">Sign in</button>
                </form>
                <div className="form-policy-area mt-3">
                  <p>
                    By clicking the &quot;signup&quot; button, you create a AuctionHive
                    account, and you agree to AuctionHive&apos;s{" "}
                    <Link href="#">Terms & Conditions</Link> &{" "}
                    <Link href="#">Privacy Policy.</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
