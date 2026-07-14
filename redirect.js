"use strict";

// Pega entre las comillas el enlace público de tu invitación de Canva.
const URL_INVITACION_CANVA =
    "https://cumplexvcamila.my.canva.site/";

const parametros = new URLSearchParams(window.location.search);

const idInvitado = (parametros.get("id") || "")
    .trim()
    .toUpperCase();

if (!idInvitado) {
    document.body.innerHTML = `
        <div style="
            min-height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            padding:24px;
            background:#fdf5f7;
            font-family:Arial,sans-serif;
            text-align:center;
        ">
            <div>
                <h2 style="color:#965f73;">
                    Invitación no encontrada
                </h2>

                <p>
                    El enlace no contiene un código de invitado válido.
                </p>
            </div>
        </div>
    `;
} else {
    // Guarda el ID para recuperarlo al volver desde Canva.
    localStorage.setItem("INVITADO", idInvitado);

    // Lleva al invitado a la invitación de Canva.
    window.location.replace(URL_INVITACION_CANVA);
}
