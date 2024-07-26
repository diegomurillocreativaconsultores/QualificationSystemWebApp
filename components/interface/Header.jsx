import { signOut } from "@/firebase";
import { TbLogout2 } from "react-icons/tb";

export const Header = () => {
    return (
        <header className="bg-blue-500 p-5 flex items-center justify-between">
            <section>
                <p className="font-semibold text-white text-xl">
                    Beauty Contest Qualification System
                </p>
            </section>
            <section>
                <button
                    onClick={signOut}
                    className="text-white font-semibold flex items-center space-x-2 border-2 border-white px-2 py-1 rounded-md hover:bg-white hover:text-blue-500 duration-300e ease-in-out transition-all"
                >
                    <TbLogout2 size={25} />
                    <p>
                        Cerrar sesion
                    </p>
                </button>
            </section>
        </header>
    );
};