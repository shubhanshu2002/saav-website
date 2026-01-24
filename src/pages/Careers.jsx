import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const CareersForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const formData = new FormData(formRef.current);
      const file = formData.get("resume");

      // Convert file to base64 for EmailJS
      const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });

      const base64File = await toBase64(file);

      // Prepare EmailJS template parameters

const templateParams = {
  name: formData.get("name"),
  email: formData.get("email"),
  role: formData.get("role"),
  resumeLink: base64File,
};


      // Send email using EmailJS
      await emailjs.send(
        "service_tjd7kuq",    // replace with your EmailJS service ID
        "template_m9nj4jv",   // replace with your EmailJS template ID
        templateParams,
        "6u29uVM7qQ1-rewS2"     // replace with your EmailJS public key
      );

      setSuccess("Application submitted successfully!");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setSuccess("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6 bg-white border border-slate-200 rounded-xl p-10 md:p-14 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-medium mb-4">Submit Your Application</h2>
      <p className="text-slate-600 mb-10">
        We welcome applications from professionals interested in working
        across technology, consulting, and delivery roles.
      </p>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Role of Interest
        </label>
        <select
          id="role"
          name="role"
          required
          className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm bg-white focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a role</option>
          <option>IT Consultant</option>
          <option>Cloud Architect</option>
          <option>Data Engineer</option>
          <option>AI / ML Engineer</option>
          <option>Business Analyst</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="resume"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Upload Resume (PDF / DOC)
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf,.doc,.docx"
          required
          className="w-full text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-md"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      {success && <p className="mt-4 text-green-600">{success}</p>}
    </form>
  );
};

export default CareersForm;
