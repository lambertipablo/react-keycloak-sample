import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080",
 realm: "quickstart",
 clientId: "spa",
});

export default keycloak;