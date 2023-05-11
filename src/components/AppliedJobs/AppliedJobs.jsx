
import SingleAppliedJob from "../SingleAppliedJob/SingleAppliedJob";


const AppliedJobs = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs'))
    console.log(appliedJobs);
    return (
        <div className="container mx-auto mt-10">
            <div className="py-16">
                <h2 className="text-center text-2xl font-medium">Applied Jobs</h2>
            </div>
            {
                appliedJobs.map(job => <SingleAppliedJob key={job.id} job={job} />)
            }
        </div>
    );
};

export default AppliedJobs;