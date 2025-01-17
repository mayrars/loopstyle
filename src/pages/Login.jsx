import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { setToken } from "../Helpers/auth-helpers";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [url, setUrl] = useState(null);
    const [options, setOptions] = useState({});
    const { data, loading, error } = useFetch(url, options);
    console.log(data)
    console.log(error)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        };
        console.log(requestOptions)
        setUrl("https://api.escuelajs.co/api/v1/auth/login");
        setOptions(requestOptions);
        console.log(data)
        if(data.access_token){
            setToken(data.access_token)
            return Navigate("/myspace")            
        }
    };

    return (
        <div className="mt-20 flex items-center justify-center px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Welcome Back
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            required
                        />
                    </div>
                    <div className="mb-4 text-right">
                        <a
                            href="#"
                            className="text-sm text-blue-500 hover:underline focus:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Log In"}
                    </button>
                </form>
                {error && <p className="text-red-500 text-center mt-4">
                    Error was found!
                </p>}
                {data && error!='' && (
                    <p className="text-green-500 text-center mt-4">
                        Login successful!
                    </p>
                )}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Don’t have an account?{" "}
                        <Link
                            to="#"
                            className="text-blue-500 font-medium hover:underline focus:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
