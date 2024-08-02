import Link from "next/link";
import Header from "../components/Header";

export default function Contact({ user }) {

    const handleSubmit = async (e) => {
        alert("Submitted successfully")
    }


    return(
    <>
        <Header user={user}/>
        <div className="inner-banner">
        <div className="container">
          <h2
            className="inner-banner-title"
          >
            Contact Us
          </h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="about-section pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-6 col-md-10">
              <div
                className="about-content wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                <h2 className="text-center">Start a Conversation</h2>
                <p className="para text-center">
                 Email us with any questions or inquiries or call 123-456-789. We would be happy to answer your questions and set up a meeting with you.
                </p>
                <div class="container my-5">
        <div class="form-wrapper">
          <div class="form-title2">
                <form onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col-12">
                            <div class="form-inner">
                                <input type="text" name="username" placeholder="username" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-inner">
                                <input type="text" name="email" placeholder="email" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-inner">
                                <input type="text" name="subject" placeholder="subject" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-inner">
                                <textarea name="question" cols="80" rows="10" placeholder="What&apos;s your question?" />
                            </div>
                        </div>
                        
                        <input type="submit" value="send" className="eg-btn btn--primary btn--md" />
                    </div>
                </form>
            </div>
        </div>
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>
      <div className="choose-us-section pb-120" id="choose-us">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              <div className="section-title">
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
    )
}


// to check signed in
import jwt from "jsonwebtoken";

export async function getServerSideProps(context) {
  const { default: User } = await import("../../db/models/User");
  const { req } = context;
  const token = req.cookies.authToken || "";

  try {
    // JWT
    const decoded = jwt.verify(token, "CSIS3380Project");
    const user = await User.findById(decoded.id).lean(); // check user on database
    return {
      props: {
        user: user
          ? { id: user._id.toString(), username: user.username }
          : null,
      },
    };
  } catch (error) {
    return {
      props: {
        user: null,
      },
    };
  }
}
