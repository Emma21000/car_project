import { FaInstagram, FaTools } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { BsPinterest } from "react-icons/bs";

export const heroData = {
    img: "url('/car.jpg')",
    icon: <FaTools />,
    title: "JADE & ANDY",
    subtitle: "VINTAGE CAR SPECIALIST",
    icons: [
        {
            icons: <SiFacebook />,
            path: "https://facebook.com",
        },
        {
            icons: <BsPinterest />,
            path: "https://www.pinterest.com",
        },
        {
            icons: <FaInstagram />,
            path: "https://instagram.com",

        }
    ],    
}
