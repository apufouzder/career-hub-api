/* eslint-disable react/prop-types */
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const SingleAppliedJob = ({ job }) => {
    console.log(job);
    return (
        <div className="border-2 flex justify-between items-center rounded-md p-4 mb-4">
            <div className="flex items-center gap-6">
                <div className="bg-slate-100 px-4 py-16 rounded-md">
                    <img className="w-full" src={job.photo} alt="profile" />
                </div>
                <div>
                    <h3 className="text-xl font-medium">{job.jobTitle}</h3>
                    <p className="my-3">{job.companyName}</p>
                    <div className="flex gap-2">
                        <span className="border border-blue-500 text-blue-500 rounded-md px-4 py-2">{job.site}</span>
                        <span className="border border-blue-500 text-blue-500 rounded-md px-4 py-2">{job.jobType}</span>
                    </div>

                    <div className='flex gap-4 items-center my-1'>
                        <p className="my-2 text-lg flex items-center">
                            <MapPinIcon className="h-6 w-6 text-indigo-400" />
                            {job.location}
                        </p>
                        <p className="my-2 text-lg flex items-center"><CurrencyDollarIcon className="h-6 w-6 text-indigo-400" />  Salary: {job.salary}</p>
                    </div>
                </div>

            </div>
            <Link to={`/job/${job.id}`} className="px-4 py-2 text-white bg-indigo-500 rounded-md shadow hover:bg-indigo-600">View Details</Link>
        </div>
    );
};

export default SingleAppliedJob;