import { BiWrench } from "react-icons/bi";
import { IoKeyOutline } from "react-icons/io5";
import { PiPaintBrushDuotone } from "react-icons/pi";

export const services = {
    img: "url('/black.jpg')",
    title: "SERVICES",
    icons: [
        {
            icon: <BiWrench />,
            title: "REPAIRS",
            description: "General Repairs, Specialist Repairs & Vintage Parts"
        },
        {
            icon: <IoKeyOutline />,
            title: "UPHOLSTER",
            description: "A Range of Fabrics, Including Vintage Leathers, & Wide Variety of Colors"
        },
        {
            icon: <PiPaintBrushDuotone />,
            title: "PAINTWORK",
            description: "Spray paint, Custom Stencilling & Variety of Custom Made Artwork"
        }
    ]
}