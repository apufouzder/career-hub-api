import bgImg from '../../assets/Vector.png';
import { useState } from "react";
import SingleAppliedJob from "../SingleAppliedJob/SingleAppliedJob";


const AppliedJobs = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];

    const [jobSite, setJobSite] = useState('');

    const handleJobTypeChange = (e) => {
        setJobSite(e.target.value);
    };

    let filteredJobs = appliedJobs;

    if (jobSite === 'remote') {
        filteredJobs = appliedJobs.filter(job => job.site === 'Remote');
    } else if (jobSite === 'onsite') {
        filteredJobs = appliedJobs.filter(job => job.site === 'Onsite');
    }

    return (
        <>
            <div style={{
                backgroundImage: `url(${bgImg})`
            }} className=' bg-contain bg-no-repeat bg-left py-20 my-10'>
                <h2 className='text-2xl text-center'>Applied Jobs</h2>
            </div>

            <div className="container mx-auto mt-10">
                <div className="text-right py-6">
                    <select name="jobType" id="jobType" className="py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={jobSite}
                        onChange={handleJobTypeChange}
                    >
                        <option value="">Filter By</option>
                        <option value="remote">Remote</option>
                        <option value="onsite">Onsite</option>
                    </select>
                </div>

                {
                    filteredJobs.map(job => <SingleAppliedJob key={job.id} job={job} />)
                }
            </div>
        </>
    );
};

export default AppliedJobs;