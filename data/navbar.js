import { RiAccountCircleFill } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";

export const navbar_data = {            
    logo: "Car",
    menu: [
        {
            title: "Home",
            path: "#Home",
        },
        {
            title: "Services",
            path: "#Services",
        },
        {
            title: "Our Work",
            path: "#Our Work",
        },
        {
            title: "About Us",
            path: "#About Us",
        },
        {
            title: "Contact",
            path: "#Contact",
        },
        {
            title: "Book Online",
            path: "#Book Online",
        },
    ],
    icon: <RiAccountCircleFill />,
    sing: "Sing in",
    open: <CiMenuFries />,
    close: <RiCloseLargeFill />

}