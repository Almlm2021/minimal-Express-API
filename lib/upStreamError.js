class upStreamError extends Error {
    constructor(status, url, message) {
        super(message);
        this.name = "upStreamError";
        this.kind = "UPSTREAM_ERROR";
        this.status = status;
        this.url = url;
    }
}
module.exports = upStreamError;