/* eslint-disable react/prop-types */
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'


const FeaturedJob = ({ job }) => {
    const { jobTitle, companyName, photo, site, jobType, location, salary } = job;
    return (
        <div className="border-2 p-7 rounded-md">
            <img className="mb-4" src={photo} alt="profile" />
            <h2 className="text-2xl font-medium">{jobTitle}</h2>
            <p className="my-2 text-lg">{companyName}</p>
            <div className="flex gap-2">
                <span className="border border-blue-500 text-blue-500 rounded-md px-4 py-2">{site}</span>
                <span className="border border-blue-500 text-blue-500 rounded-md px-4 py-2">{jobType}</span>
            </div>
            <div className='flex gap-4 items-center my-1'>
                <p className="my-2 text-lg flex items-center">
                    <MapPinIcon className="h-6 w-6" /> 
                    {location}
                </p>
                <p className="my-2 text-lg flex items-center"><CurrencyDollarIcon className="h-6 w-6" />  Salary: {salary}</p>
            </div>
            <button className="px-4 py-2 text-white bg-indigo-500 rounded-md shadow hover:bg-indigo-600">View Details</button>
        </div>
    );
};

export default FeaturedJob;