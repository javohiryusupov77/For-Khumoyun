import React, { useState } from "react";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { MdCall, MdEmail, MdClose } from "react-icons/md";
import { Dialog } from "@headlessui/react";
import Swal from "sweetalert2";

const Header = () => {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  setName("");
  setNumber("");
  Swal.fire("Siz bilan tez orada bog'lanishadi.").then(() => {
    toggleMenu();
  });
};



  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const translations = {
    en: {
      home: "Home",
      catalog: "Catalog",
      about: "About Us",
      news: "News",
      contacts: "Contacts",
      searchPlaceholder: "Search by name",
      cars: "Cars",
      commercialTransport: "Commercial Transport",
      motorcycles: "Motorcycles",
    },
    ru: {
      home: "Главная",
      catalog: "Каталог",
      about: "O нас",
      news: "Новости",
      contacts: "Контакты",
      searchPlaceholder: "Поиск по названию",
      cars: "Автомобили",
      commercialTransport: "Коммерческий транспорт",
      motorcycles: "Мотоциклы",
    },
    uzb: {
      home: "Bosh sahifa",
      catalog: "Katalog",
      about: "Biz haqimizda",
      news: "Yangiliklar",
      contacts: "Aloqalar",
      searchPlaceholder: "Nomi boyicha qidirish",
      cars: "Avtomobillar",
      commercialTransport: "Tijorat transporti",
      motorcycles: "Mototsikllar",
    },
  };

 const toggleMenu = () => {
   console.log("Menu open before toggle:", menuOpen);
   setMenuOpen((prev) => !prev);
   console.log("Menu open after toggle:", !menuOpen);
 };


  return (
    <>
      <header className="bg-white shadow-md w-full">
        <div className="flex flex-wrap justify-between items-center px-4 py-4 md:px-16">
          <div className="md:hidden">
            <div className="flex gap-2">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-blue-600"
              >
                <ImMenu />
              </button>
              <select
                className="border rounded p-1 text-sm bg-white focus:outline-none"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="en">Eng</option>
                <option value="ru">Rus</option>
                <option value="uzb">Uzb</option>
              </select>
            </div>
          </div>

          <nav className="hidden md:flex flex-grow">
            <ul className="flex space-x-6">
              {Object.keys(translations[language])
                .slice(0, 5)
                .map((key) => (
                  <li
                    key={key}
                    className="text-gray-800 hover:text-blue-600 transition duration-300"
                  >
                    {translations[language][key]}
                  </li>
                ))}
            </ul>
          </nav>

          <div className="hidden lg:flex space-x-6">
            <a
              href="https://wa.me/yourwhatsapplink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                className="text-gray-500 hover:text-blue-500 transition duration-300"
                size={24}
              />
            </a>
            <a
              href="https://telegram.me/yourtelegramlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane
                className="text-gray-500 hover:text-blue-500 transition duration-300"
                size={24}
              />
            </a>
            <a
              href="https://instagram.com/yourinstagramlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-gray-500 hover:text-blue-500 transition duration-300"
                size={24}
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 ml-4">
              <MdCall className="text-gray-500" size={24} />
              <p className="text-sm">+7(777)777-77-77</p>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail className="text-gray-500" size={24} />
              <p className="cursor-pointer text-sm">info@mail.ru</p>
            </div>
            <select
              className="border rounded p-1 text-sm bg-white focus:outline-none"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en">Eng</option>
              <option value="ru">Rus</option>
              <option value="uzb">Uzb</option>
            </select>
          </div>
        </div>
      </header>

      <Dialog
        open={menuOpen}
        onClose={toggleMenu}
        className="fixed inset-0 z-50 transition-opacity duration-300 ease-in-out"
      >
        <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true" />{" "}
        {/* Add this line for the backdrop */}
        <div className="flex justify-center items-center h-screen">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-lg shadow-xl w-full max-w-sm transition-transform transform hover:scale-105 duration-300"
          >
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Imkoniyatni qo'ldan boy bermang, talaba bo'ling
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
      </Dialog>
    </>
  );
};

export default Header;
