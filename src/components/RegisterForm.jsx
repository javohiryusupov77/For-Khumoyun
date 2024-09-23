import { useState } from "react";
const RegisterForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setName("");
    setNumber("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const formUrl =
      "https://script.google.com/macros/s/AKfycbyZbUvxx1cac0meOL3a3a_232WHYwLgS8kzf8uE5mKQNpnZaZ8Y45veqLfCVNp1Q25qww/exec";
    try {
      fetch(formUrl, {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }

  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-lg shadow-xl w-full max-w-sm transition-transform transform hover:scale-105 duration-300"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Imkoniyatni qoldan boy bermang, talaba boling
          </h2>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="first_name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="number"
              className="block text-gray-700 font-semibold mb-2"
            >
              Number
            </label>
            <input
              id="number"
              name="phone_number"
              type="text"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Enter your number"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105"
          >
            Ariza Qoldirish
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
