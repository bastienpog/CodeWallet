import { Link } from "react-router-dom";

export const FragmentButton = () => {
    return (
        <div className="flex justify-end p-4">
            <Link to={"form"}>
                <button className="border border-custom-violet2 text-custom-violet2 py-2 px-4 rounded-xl hover:bg-custom-violet1 hover:text-white">
                    Nouveau fragment
                </button>
            </Link>
        </div>
    );
};