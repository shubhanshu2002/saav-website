import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const CareersForm = ({ defaultRole = "" }) => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData(formRef.current);

      const templateParams = {
        name: formData.get("name"),
        email: formData.get("email"),
        role: formData.get("role"),
        resumeLink: formData.get("resumeLink"),
      };

      await emailjs.send(
        "service_tjd7kuq",   // EmailJS Service ID
        "template_m9nj4jv",  // EmailJS Template ID
        templateParams,
        "6u29uVM7qQ1-rewS2"  // EmailJS Public Key
      );

      setMessage("Application submitted successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
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
      {/* Heading */}
      <h2 className="text-3xl font-medium">Submit Your Application</h2>
      <p className="text-slate-600 mb-8">
        We welcome applications from professionals interested in working across
        technology, consulting, and delivery roles.
      </p>

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Role */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Role of Interest
        </label>
        <select
          name="role"
          required
          defaultValue={defaultRole}
          className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm bg-white focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a role</option>
          <option>Agent, Sales Support</option>
          <option>IT Project Manager</option>
          <option>Associate Account Manager</option>
          <option>Senior Data Analyst</option>
          <option>Open Application</option>
        </select>
      </div>

      {/* Resume Link */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Resume Link (Google Drive / Dropbox)
        </label>
        <input
          type="url"
          name="resumeLink"
          placeholder="https://drive.google.com/..."
          required
          className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-xs text-slate-500 mt-1">
          Make sure the link access is set to “Anyone with the link – View”.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-md disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      {/* Status Message */}
      {message && (
        <p
          className={`text-sm ${
            message.includes("success")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default CareersForm;
