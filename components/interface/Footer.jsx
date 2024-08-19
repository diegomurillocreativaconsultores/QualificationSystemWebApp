import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="px-10 py-5 bg-bluebeauty w-full text-white flex items-center justify-between">
            <section>
                <p className="font-semibold">
                    Derechos reservados <Link className="hover:text-goldbeauty duration-300" href="https://creativastudios.us/" target="_blank">Creativa Studios ®</Link>
                </p>
            </section>
            <section className="flex items-center justify-center space-x-5">
                <Link
                    target="_blank"
                    className="hover:text-goldbeauty duration-300"
                    href="https://www.facebook.com/CreativaStudios.SV"
                >
                    <FaFacebook size={25} />
                </Link>
                <Link
                    target="_blank"
                    className="hover:text-goldbeauty duration-300"
                    href="https://www.linkedin.com/company/creativastudios/mycompany/"
                >
                    <FaLinkedin size={25} />
                </Link>
                <Link
                    target="_blank"
                    className="hover:text-goldbeauty duration-300"
                    href="https://www.instagram.com/creativastudios.sv/"
                >
                    <FaInstagram size={25} />
                </Link>
            </section>
        </footer>
    );
};