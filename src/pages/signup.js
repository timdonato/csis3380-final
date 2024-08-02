import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Signup() {
  
  const router = useRouter();

  // form handling
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // submit signup req
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Signup successful");
        router.push("/signin");
      } else alert(data.message);
    } catch (error) {
      alert("An error occurred");
    }
  };
  // --------------------------------------------------------------------------------

  // render
  return (
    <div className="signup-section pt-120 pb-120">
      <img
        alt="image"
        src="assets/images/bg/section-bg.png"
        className="section-bg-top"
      />
      <img
        alt="image"
        src="assets/images/bg/section-bg.png"
        className="section-bg-bottom"
      />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div
              className="form-wrapper wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".2s"
            >
              <div className="form-title">
                <h3>Sign Up</h3>
                <p>
                  Do you already have an account?{" "}
                  <Link href="/signin">Log in here</Link>
                </p>
              </div>
              <form className="w-100" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-inner">
                      <label>User Name *</label>
                      <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        placeholder="Username"
                        required
                      />
                    </div>
                  </div>
                  {/* <div className="col-md-6">
                    <div className="form-inner">
                      <label>Last Name *</label>
                      <input type="email" placeholder="Last Name" />
                    </div>
                  </div> */}
                  <div className="col-md-12">
                    <div className="form-inner">
                      <label>Enter Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner">
                      <label>Password *</label>
                      <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Create A Password"
                        required
                      />
                      <i className="bi bi-eye-slash" id="togglePassword"></i>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner">
                      <label>Confirm Password *</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        placeholder="Create A Password"
                        required
                      />
                      <i className="bi bi-eye-slash" id="togglePassword"></i>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                      <div className="form-group">
                        <input type="checkbox" id="html" />
                        <label for="html">I agree to the Terms & Policy</label>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className="account-btn">Create Account</button>
              </form>

              <div className="form-poicy-area mt-3">
                <p>
                  By clicking the "signup" button, you create a Cobiro account,
                  and you agree to Cobiro&apos;s <Link href="#">Terms & Conditions</Link> &{" "}
                  <Link href="#">Privacy Policy.</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
