import { Link } from "react-router-dom";

// Bouton pour naviguer vers la page de création d’un nouveau fragment
export const FragmentButton = () => {
    return (
        <div className="flex justify-end p-4">
            <Link to={"form"}>
                <button className="border border-custom-violet2 text-custom-violet2 py-2 px-4 rounded-xl hover:bg-custom-violet1 hover:text-white">
                    New fragment
                </button>
            </Link>
        </div>
    );
};