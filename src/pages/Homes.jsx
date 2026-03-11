import { useEffect, useState } from "react";
import API from "../services/api";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import Navbar from "../components/Navbar";
import Footer from "../../src/pages/shared/Footer/Footer";

const Homes = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await API.get(
        `/jobs?search=${search}&location=${location}&category=${category}`
      );
      setJobs(res.data);
    };

    fetchJobs();
  }, [search, location, category]);

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Find Your Dream Job</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <SearchBar search={search} setSearch={setSearch} />
          <FilterBar
            location={location}
            setLocation={setLocation}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homes;