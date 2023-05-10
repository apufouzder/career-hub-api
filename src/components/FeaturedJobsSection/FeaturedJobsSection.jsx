import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const FeaturedJobsSection = () => {
    const [jobs, setJobs] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(false);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    const handleClick = () => {
        setShowAllJobs(true);
    };

    const renderedJobs = showAllJobs ? jobs : jobs.slice(0, 4);

    return (
        <div className="container py-8 mx-auto">
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold mb-2">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future.</p>
            </div>

            <div className="mb-8 grid md:grid-cols-2 gap-x-10 gap-y-6">
                {renderedJobs.map((job) => <FeaturedJob key={job.id} job={job} />)}

            </div>

            <div className="text-center">
            {!showAllJobs && (
                <button className="px-4 py-2 text-white bg-indigo-500 rounded-md shadow hover:bg-indigo-600" onClick={handleClick}>See All Jobs</button>
            )}
            </div>
        </div>
    );
};

export default FeaturedJobsSection;