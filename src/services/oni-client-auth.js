import randomString from "randomstring";
import { encode as base64encode } from "base64-arraybuffer";

export default class oniClientAuth {   
    auth_endpoint = process.env.REACT_APP_MAL_OAUTH_ENDPOINT;
    response_type = "code";
    client_id = process.env.REACT_APP_MAL_APP_ID;
    request_state = "";
    authorization_code="";
    grant_type="authorization_code";

    constructor() {
        this.code_verifier = randomString.generate(128);
        this.state_nonce = randomString.generate(64);
        this.code_challenge = this.generateCodeChallenge();
    };

    get authorization_url() {
        return `${this.auth_endpoint}
                response_type=code
                &client_id=${this.client_id}
                &state=${this.state_nonce}
                &code_challenge=${this.code_challenge}`
    }

    generateCodeChallenge = () => {
        const encoder = new TextEncoder();
        const data = encoder.encode(this.code_verifier);
        const digest = window.crypto.subtle.digest("SHA-256", data);
        const base64Digest = base64encode(digest);
        const challenge =  base64Digest
                            .replace(/\+/g, "-")
                            .replace(/\//g, "_")
                            .replace(/=/g, "");
        return challenge;
    };

    stateNonceMatch = (resNonce) => {
        return resNonce === this.state_nonce;
    }


};