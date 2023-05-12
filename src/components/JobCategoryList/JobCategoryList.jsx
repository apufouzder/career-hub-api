import SingleJobCategory from "../SingleJobCategory/SingleJobCategory";

const fakeJob = [
    {
        id: 1,
        name: "Modern Art",
        available: 50,
        icon: "https://img.icons8.com/?size=512&id=31820&format=png"
    },

    {
        id: 2,
        name: "Innovative Ideas",
        available: 75,
        icon: "https://img.icons8.com/?size=512&id=3005&format=png"
    },

    {
        id: 3,
        name: "Original Concepts",
        available: 120,
        icon: "https://img.icons8.com/?size=512&id=53384&format=png"
    },
    {
        id: 4,
        name: "Minimalist Design",
        available: 90,
        icon: "https://img.icons8.com/?size=512&id=63841&format=png"
    }

]

const JobCategoryList = () => {
    return (
        <div className="container px-2 py-24 mx-auto">
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold mb-2">Job Category List</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Nihil  non ipsam inventore. Placeat!</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
                {
                    fakeJob.map(jobCategory => <SingleJobCategory key={jobCategory.id} jobCategory={jobCategory} />)
                }
            </div>
        </div>
    );
};

export default JobCategoryList;