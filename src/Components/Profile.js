import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Profile() {
    const auth = useSelector((state) => state.auth);

    return (
        <div className="App">
            <h3>Authentification
                : {auth ? "Information du user" : "ERREUR: veuillez vous connecter"}
            </h3>
        </div>
    );
}

export default Profile;