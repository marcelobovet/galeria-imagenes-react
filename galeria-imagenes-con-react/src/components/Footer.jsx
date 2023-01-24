import React from "react";

const Footer = (props) => {
    const { desc } = props;
    
    return (
        <footer className="bg-secondary text-white p-5 text-center">
            <p>Para buscar mas informacion</p>
            <button type="button" class="btn btn-primary btn-sm">Buscar Pajaro</button>
        </footer>
    );
};

export default Footer;