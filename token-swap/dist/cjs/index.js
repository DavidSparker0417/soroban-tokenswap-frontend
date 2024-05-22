"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.Errors = exports.OfferStatus = exports.networks = void 0;
const stellar_sdk_1 = require("@stellar/stellar-sdk");
const buffer_1 = require("buffer");
const index_js_1 = require("@stellar/stellar-sdk/lib/contract_client/index.js");
__exportStar(require("@stellar/stellar-sdk"), exports);
__exportStar(require("@stellar/stellar-sdk/lib/contract_client/index.js"), exports);
__exportStar(require("@stellar/stellar-sdk/lib/rust_types/index.js"), exports);
if (typeof window !== 'undefined') {
    //@ts-ignore Buffer exists
    window.Buffer = window.Buffer || buffer_1.Buffer;
}
exports.networks = {
    unknown: {
        networkPassphrase: "Public Global Stellar Network ; September 2015",
        contractId: "CBOC24RLZHETOADX2KHKO5WWV4K6E3DKX6T5SUUPKJXI6JC2SSX47BUI",
    }
};
var OfferStatus;
(function (OfferStatus) {
    OfferStatus[OfferStatus["INIT"] = 0] = "INIT";
    OfferStatus[OfferStatus["ACTIVE"] = 1] = "ACTIVE";
    OfferStatus[OfferStatus["COMPLETE"] = 2] = "COMPLETE";
    OfferStatus[OfferStatus["CANCEL"] = 3] = "CANCEL";
})(OfferStatus || (exports.OfferStatus = OfferStatus = {}));
exports.Errors = {};
class Client extends index_js_1.ContractClient {
    options;
    constructor(options) {
        super(new stellar_sdk_1.ContractSpec(["AAAAAQAAAAAAAAAAAAAAB0ZlZUluZm8AAAAAAgAAAAAAAAAIZmVlX3JhdGUAAAAEAAAAAAAAAApmZWVfd2FsbGV0AAAAAAAT",
            "AAAAAwAAAAAAAAAAAAAAC09mZmVyU3RhdHVzAAAAAAQAAAAAAAAABElOSVQAAAAAAAAAAAAAAAZBQ1RJVkUAAAAAAAEAAAAAAAAACENPTVBMRVRFAAAAAgAAAAAAAAAGQ0FOQ0VMAAAAAAAD",
            "AAAAAQAAAAAAAAAAAAAACU9mZmVySW5mbwAAAAAAAAcAAAAAAAAAD21pbl9yZWN2X2Ftb3VudAAAAAAGAAAAAAAAAAdvZmZlcm9yAAAAABMAAAAAAAAAC3JlY3ZfYW1vdW50AAAAAAYAAAAAAAAACnJlY3ZfdG9rZW4AAAAAABMAAAAAAAAAC3NlbmRfYW1vdW50AAAAAAYAAAAAAAAACnNlbmRfdG9rZW4AAAAAABMAAAAAAAAABnN0YXR1cwAAAAAH0AAAAAtPZmZlclN0YXR1cwA=",
            "AAAAAQAAAAAAAAAAAAAACE9mZmVyS2V5AAAABAAAAAAAAAAHb2ZmZXJvcgAAAAATAAAAAAAAAApyZWN2X3Rva2VuAAAAAAATAAAAAAAAAApzZW5kX3Rva2VuAAAAAAATAAAAAAAAAAl0aW1lc3RhbXAAAAAAAAAE",
            "AAAAAgAAAAAAAAAAAAAAB0RhdGFLZXkAAAAABgAAAAAAAAAAAAAAA0ZFRQAAAAABAAAAAAAAAAlBbGxvd2FuY2UAAAAAAAABAAAAEwAAAAAAAAAAAAAACk9mZmVyQ291bnQAAAAAAAEAAAAAAAAACVJlZ09mZmVycwAAAAAAAAEAAAAEAAAAAAAAAAAAAAAJRXJyb3JDb2RlAAAAAAAAAAAAAAAAAAAFQWRtaW4AAAA=",
            "AAAAAAAAAAAAAAAKaW5pdGlhbGl6ZQAAAAAAAQAAAAAAAAAFYWRtaW4AAAAAAAATAAAAAA==",
            "AAAAAAAAAAAAAAAJc2V0X2FkbWluAAAAAAAAAQAAAAAAAAAJbmV3X2FkbWluAAAAAAAAEwAAAAA=",
            "AAAAAAAAAAAAAAAHc2V0X2ZlZQAAAAACAAAAAAAAAAhmZWVfcmF0ZQAAAAQAAAAAAAAACmZlZV93YWxsZXQAAAAAABMAAAAA",
            "AAAAAAAAAAAAAAAHZ2V0X2ZlZQAAAAAAAAAAAQAAA+0AAAACAAAABAAAABM=",
            "AAAAAAAAAAAAAAALYWxsb3dfdG9rZW4AAAAAAQAAAAAAAAAFdG9rZW4AAAAAAAATAAAAAA==",
            "AAAAAAAAAAAAAAAOZGlzYWxsb3dfdG9rZW4AAAAAAAEAAAAAAAAABXRva2VuAAAAAAAAEwAAAAA=",
            "AAAAAAAAAAAAAAAJZ2V0X2Vycm9yAAAAAAAAAAAAAAEAAAAE",
            "AAAAAAAAAAAAAAAMY291bnRfb2ZmZXJzAAAAAAAAAAEAAAAE",
            "AAAAAAAAAAAAAAAMY3JlYXRlX29mZmVyAAAABwAAAAAAAAAHb2ZmZXJvcgAAAAATAAAAAAAAAApzZW5kX3Rva2VuAAAAAAATAAAAAAAAAApyZWN2X3Rva2VuAAAAAAATAAAAAAAAAAl0aW1lc3RhbXAAAAAAAAAEAAAAAAAAAAtzZW5kX2Ftb3VudAAAAAAGAAAAAAAAAAtyZWN2X2Ftb3VudAAAAAAGAAAAAAAAAA9taW5fcmVjdl9hbW91bnQAAAAABgAAAAEAAAAE",
            "AAAAAAAAAAAAAAAMYWNjZXB0X29mZmVyAAAAAwAAAAAAAAAIYWNjZXB0b3IAAAATAAAAAAAAAAhvZmZlcl9pZAAAAAQAAAAAAAAABmFtb3VudAAAAAAABgAAAAEAAAAE",
            "AAAAAAAAAAAAAAAMdXBkYXRlX29mZmVyAAAABAAAAAAAAAAHb2ZmZXJvcgAAAAATAAAAAAAAAAhvZmZlcl9pZAAAAAQAAAAAAAAAC3JlY3ZfYW1vdW50AAAAAAYAAAAAAAAAD21pbl9yZWN2X2Ftb3VudAAAAAAGAAAAAQAAAAQ=",
            "AAAAAAAAAAAAAAALY2xvc2Vfb2ZmZXIAAAAAAgAAAAAAAAAHb2ZmZXJvcgAAAAATAAAAAAAAAAhvZmZlcl9pZAAAAAQAAAABAAAABA==",
            "AAAAAAAAAAAAAAAKbG9hZF9vZmZlcgAAAAAAAQAAAAAAAAAIb2ZmZXJfaWQAAAAEAAAAAQAAA+0AAAAHAAAAEwAAABMAAAATAAAABgAAAAYAAAAGAAAABA==",
            "AAAAAAAAAAAAAAAOY2hlY2tfYmFsYW5jZXMAAAAAAAMAAAAAAAAAB2FjY291bnQAAAAAEwAAAAAAAAAKc2VuZF90b2tlbgAAAAAAEwAAAAAAAAAKcmVjdl90b2tlbgAAAAAAEwAAAAEAAAPtAAAAAgAAAAYAAAAG"]), options);
        this.options = options;
    }
    fromJSON = {
        initialize: (this.txFromJSON),
        set_admin: (this.txFromJSON),
        set_fee: (this.txFromJSON),
        get_fee: (this.txFromJSON),
        allow_token: (this.txFromJSON),
        disallow_token: (this.txFromJSON),
        get_error: (this.txFromJSON),
        count_offers: (this.txFromJSON),
        create_offer: (this.txFromJSON),
        accept_offer: (this.txFromJSON),
        update_offer: (this.txFromJSON),
        close_offer: (this.txFromJSON),
        load_offer: (this.txFromJSON),
        check_balances: (this.txFromJSON)
    };
}
exports.Client = Client;
