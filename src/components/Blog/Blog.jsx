/* eslint-disable react/no-unescaped-entities */


const Blog = () => {
    return (
        <div className="container mx-auto my-10">
            <div className="bg-gray-50 p-4 mb-4">
                <h2 className="text-2xl font-medium mb-2">When should you use context API?</h2>
                <p>Context API should be used when you need to pass data to multiple components. But you don't want to pass that data through all the intermediate components. It helps to avoid prop drilling.</p>
            </div>
            <div className="bg-gray-50 p-4 mb-4">
                <h2 className="text-2xl font-medium mb-2">What is a custom hook?</h2>
                <p>A custom hook is a JavaScript function that starts with the word /use/ and uses more of the built-in hooks. It allows you to reuse stateful logic and multiple components without duplicating code.</p>
            </div>
            <div className="bg-gray-50 p-4 mb-4">
                <h2 className="text-2xl font-medium mb-2">What is useRef?</h2>
                <p>useRef is a hook in React. You create a mutable ref object which can persist between renders. It's a commonly used focus input field to reference DOM elements, store mutable values, or preserve values that might be lost during re-renders.</p>
            </div>
            <div className="bg-gray-50 p-4 mb-4">
                <h2 className="text-2xl font-medium mb-2">What is useMemo?</h2>
                <p>useMemo is a hook in React you memoize expensive computations so that only re-computed when the dependencies change. It helps to improve the performance of your application by preventing unnecessary re-renders.</p>
            </div>
        </div>

    );
};

export default Blog;