import React, { useState } from "react";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import {
  MdCall,
  MdEmail,
  MdClose,
} from "react-icons/md";
import { Dialog } from "@headlessui/react";

const Header = () => {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md w-full">
        <div className="flex flex-wrap justify-between items-center px-4 py-4 md:px-16">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600"
            >
              <ImMenu />
            </button>
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
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="relative bg-white p-6 w-full max-w-md mx-auto rounded-lg shadow-2xl">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
            >
              <MdClose size={28} />
            </button>

            <div className="flex justify-between items-center mb-6">
              <select
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="en">Eng</option>
                <option value="ru">Rus</option>
                <option value="uzb">Uzb</option>
              </select>
            </div>

            <ul className="flex flex-col items-center mb-8">
              {Object.keys(translations[language])
                .slice(0, 5)
                .map((key) => (
                  <li
                    key={key}
                    className="text-lg py-3 px-5 hover:bg-blue-100 rounded-md transition-colors w-full text-center"
                  >
                    {translations[language][key]}
                  </li>
                ))}
              <li className="text-lg py-3 px-5 hover:bg-blue-100 rounded-md transition-colors w-full text-center">
                {translations[language].cars}
              </li>
              <li className="text-lg py-3 px-5 hover:bg-blue-100 rounded-md transition-colors w-full text-center">
                {translations[language].commercialTransport}
              </li>
            </ul>

            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-6">
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
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Header;
