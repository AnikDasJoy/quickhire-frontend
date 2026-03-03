import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import ApplyForm from "../components/ApplyForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    API.get(`/jobs/${id}`).then((res) => setJob(res.data));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">{job.title}</h1>
        <p className="text-gray-600 mt-2">
          {job.company} • {job.location}
        </p>

        <div className="mt-6 text-gray-700 leading-relaxed">
          {job.description}
        </div>

        <ApplyForm jobId={job._id} />
      </div>
      <Footer />
    </>
  );
};

export default JobDetail;