import { BriefcaseIcon, CurrencyDollarIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useLoaderData } from "react-router-dom";

const JobDetailsSection = () => {
    const job = useLoaderData();
    console.log('job', job);

    const jobId = +window.location.pathname.split('/')[2];
    const jobDetails = job[jobId - 1];

    return (
        <div className="container leading-relaxed my-32 mx-auto grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 p-3">
                <p><strong>Job Description: </strong> {jobDetails?.description}</p>
                <p className="my-5"><strong>Job Responsibility: </strong> {jobDetails?.responsibility}</p>
                <p className="mb-5"><strong>Educational Requirements: <br /> </strong> {jobDetails?.eduRequirements}</p>
                <p><strong>experiences: <br /> </strong> {jobDetails.experiences} Years in this field.</p>
            </div>
            <div>
                <div className="bg-blue-50 rounded-md p-4 mb-4">
                    <h3 className='text-xl font-medium mb-3'>Job Details</h3>
                    <hr />
                    <p className='flex gap-1 items-center leading-loose my-2 '>
                        <CurrencyDollarIcon className="h-6 w-6 text-indigo-400" />
                        <strong>Salary: </strong> {jobDetails.salary} (Per Month)
                    </p>
                    <p className='flex gap-1 items-center leading-loose mb-2'>
                        <BriefcaseIcon className="h-6 w-6 text-indigo-400" />
                        <strong>Job Title: </strong> {jobDetails.jobTitle}
                    </p>
                    <h3 className='text-xl font-medium my-3'>Contact Information</h3>
                    <hr />
                    <p className='flex gap-1 items-center leading-loose mb-2'>
                        <PhoneIcon className="h-6 w-6 text-indigo-400" />
                        <strong>Phone: </strong> {jobDetails.phone}
                    </p>
                    <p className='flex gap-1 items-center leading-loose mb-2'>
                        <EnvelopeIcon className="h-6 w-6 text-indigo-400" />
                        <strong>Phone: </strong> {jobDetails.email}
                    </p>
                    <p className='flex gap-1 items-center leading-loose mb-2'>
                        <MapPinIcon className="h-6 w-6 text-indigo-400" />
                        <strong>Address: </strong> {jobDetails.address}
                    </p>
                </div>

                <button className='px-4 py-2 w-full text-white bg-indigo-500 rounded-md shadow'>Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetailsSection;