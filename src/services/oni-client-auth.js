import randomString from "randomstring";

class oniClientAuth {   
    auth_endpoint = process.env.REACT_APP_MAL_OAUTH_ENDPOINT;
    response_type = "code";
    client_id = process.env.REACT_APP_MAL_APP_ID;
    request_state = "";
    authorization_code="";
    grant_type="authorization_code";

    constructor() {
        this.PKCE_code = randomString.generate(128);
        this.state_nonce = randomString.generate(64);
    };

    get authorization_url() {
        return `${this.auth_endpoint}response_type=code&client_id=${this.client_id}&state=${this.state_nonce}&code_challenge=${this.PKCE_code}`
    }

    stateNonceMatch = (resNonce) => {
        return resNonce === this.state_nonce;
    }
};

let oniAuth= new oniClientAuth();

export default oniAuth;