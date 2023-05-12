import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
    { name: 'Assignment 1', marks: 60 },
    { name: 'Assignment 2', marks: 60 },
    { name: 'Assignment 3', marks: 60 },
    { name: 'Assignment 4', marks: 60 },
    { name: 'Assignment 5', marks: 49 },
    { name: 'Assignment 6', marks: 60 },
];

const Statistics = () => {
    return (
        <div className='container mx-auto pt-8 mt-6'>
            <h1 className='my-9 text-2xl font-medium'>Assignment Marks</h1>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 60]} ticks={[0, 10, 20, 30, 40, 50, 60]} />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#261ec2" fill="#410491b5" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;