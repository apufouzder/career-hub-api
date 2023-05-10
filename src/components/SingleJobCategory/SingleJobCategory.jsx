/* eslint-disable react/prop-types */


const SingleJobCategory = ({ jobCategory }) => {
    const { name, available, icon } = jobCategory;
    return (
        <div className="bg-blue-50 p-8 rounded-md">
            <img width="50" src={icon} alt="" />
            <h3 className="my-2 text-2xl font-medium">{ name}</h3>
            <span>{ available} Jobs Available</span>
        </div>
    );
};

export default SingleJobCategory;