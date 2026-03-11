import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "./shared/Footer/Footer";

const Admin = () => {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
  });

  const fetchJobs = async () => {
    const res = await API.get("/jobs");
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/jobs", form);
    fetchJobs();
  };

  const deleteJob = async (id) => {
    await API.delete(`/jobs/${id}`);
    fetchJobs();
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

        <form onSubmit={handleSubmit} className="grid gap-4 mb-8">
          {Object.keys(form).map((key) => (
            <input
              key={key}
              placeholder={key}
              value={form[key]}
              onChange={(e) =>
                setForm({ ...form, [key]: e.target.value })
              }
              className="border px-4 py-2 rounded-lg"
              required
            />
          ))}

          <button className="bg-green-600 text-white py-2 rounded-lg">
            Add Job
          </button>
        </form>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="flex justify-between bg-white p-4 shadow rounded-lg"
            >
              <span>{job.title}</span>
              <button
                onClick={() => deleteJob(job._id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;