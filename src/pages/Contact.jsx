import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: "Thanks for reaching out! We’ll get back to you soon.",
        });
        formRef.current.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
        });
      });
  };

  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="pt-32 pb-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="md:col-span-2 space-y-14">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold mb-4">Contact Us</h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Get in touch with SAAV Consulting to discuss technology solutions,
                consulting engagements, or career opportunities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium mb-3">Let’s talk</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our team is ready to help you with digital transformation,
                enterprise solutions, and scalable engineering services.
              </p>

              <ul className="space-y-4 text-slate-700">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:projects@saavconsulting.ca" className="text-blue-600 hover:underline">
                    projects@saavconsulting.ca
                  </a>
                </li>
                <li>
                  <strong>Working Model:</strong> Remote & Client Locations
                </li>
              </ul>
            </div>
          </div>

          {/* FORM */}
          <div className="md:col-span-3">
            <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">
              <h2 className="text-2xl font-medium mb-6">Send Us a Message</h2>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

                {/* Text Fields */}
                {[
                  { label: "Full Name", name: "name", type: "text" },
                  { label: "Email Address", name: "email", type: "email" },
                  { label: "Subject", name: "title", type: "text" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.name !== "title"}
                      className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm
                        focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                    />
                  </div>
                ))}

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm
                      focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3B82F6] hover:bg-[#2563EB]
                    text-white font-medium py-3 rounded-lg transition"
                >
                  Submit
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Contact;
