import { useState } from "react";
import API from "../services/api";

const ApplyForm = ({ jobId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume_link: "",
    cover_note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/applications", {
      ...formData,
      job_id: jobId,
    });

    alert("Application submitted successfully!");
    setFormData({
      name: "",
      email: "",
      resume_link: "",
      cover_note: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <h3 className="text-xl font-semibold">Apply Now</h3>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded-lg"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded-lg"
      />

      <input
        type="url"
        name="resume_link"
        placeholder="Resume URL"
        required
        value={formData.resume_link}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded-lg"
      />

      <textarea
        name="cover_note"
        placeholder="Cover Note"
        rows="4"
        value={formData.cover_note}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded-lg"
      />

      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Submit Application
      </button>
    </form>
  );
};

export default ApplyForm;