import { ContractSpec, Address } from '@stellar/stellar-sdk';
import { Buffer } from "buffer";
import {
  AssembledTransaction,
  ContractClient,
  ContractClientOptions,
} from '@stellar/stellar-sdk/lib/contract_client/index.js';
import type {
  u32,
  i32,
  u64,
  i64,
  u128,
  i128,
  u256,
  i256,
  Option,
  Typepoint,
  Duration,
} from '@stellar/stellar-sdk/lib/contract_client';
import { Result } from '@stellar/stellar-sdk/lib/rust_types/index.js';
export * from '@stellar/stellar-sdk'
export * from '@stellar/stellar-sdk/lib/contract_client/index.js'
export * from '@stellar/stellar-sdk/lib/rust_types/index.js'

if (typeof window !== 'undefined') {
    //@ts-ignore Buffer exists
    window.Buffer = window.Buffer || Buffer;
}


export const networks = {
  unknown: {
    networkPassphrase: "Public Global Stellar Network ; September 2015",
    contractId: "CBOC24RLZHETOADX2KHKO5WWV4K6E3DKX6T5SUUPKJXI6JC2SSX47BUI",
  }
} as const


export interface FeeInfo {
  fee_rate: u32;
  fee_wallet: string;
}

export enum OfferStatus {
  INIT = 0,
  ACTIVE = 1,
  COMPLETE = 2,
  CANCEL = 3,
}


export interface OfferInfo {
  min_recv_amount: u64;
  offeror: string;
  recv_amount: u64;
  recv_token: string;
  send_amount: u64;
  send_token: string;
  status: OfferStatus;
}


export interface OfferKey {
  offeror: string;
  recv_token: string;
  send_token: string;
  timestamp: u32;
}

export type DataKey = {tag: "FEE", values: void} | {tag: "Allowance", values: readonly [string]} | {tag: "OfferCount", values: void} | {tag: "RegOffers", values: readonly [u32]} | {tag: "ErrorCode", values: void} | {tag: "Admin", values: void};

export const Errors = {
  
}

export interface Client {
  /**
   * Construct and simulate a initialize transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  initialize: ({admin}: {admin: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a set_admin transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  set_admin: ({new_admin}: {new_admin: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a set_fee transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  set_fee: ({fee_rate, fee_wallet}: {fee_rate: u32, fee_wallet: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a get_fee transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_fee: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<readonly [u32, string]>>

  /**
   * Construct and simulate a allow_token transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  allow_token: ({token}: {token: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a disallow_token transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  disallow_token: ({token}: {token: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a get_error transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_error: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<u32>>

  /**
   * Construct and simulate a count_offers transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  count_offers: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<u32>>

  /**
   * Construct and simulate a create_offer transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  create_offer: ({offeror, send_token, recv_token, timestamp, send_amount, recv_amount, min_recv_amount}: {offeror: string, send_token: string, recv_token: string, timestamp: u32, send_amount: u64, recv_amount: u64, min_recv_amount: u64}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<u32>>

  /**
   * Construct and simulate a accept_offer transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  accept_offer: ({acceptor, offer_id, amount}: {acceptor: string, offer_id: u32, amount: u64}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<u32>>

  /**
   * Construct and simulate a update_offer transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  update_offer: ({offeror, offer_id, recv_amount, min_recv_amount}: {offeror: string, offer_id: u32, recv_amount: u64, min_recv_amount: u64}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<u32>>

  /**
   * Construct and simulate a close_offer transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  close_offer: ({offeror, offer_id}: {offeror: string, offer_id: u32}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<u32>>

  /**
   * Construct and simulate a load_offer transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  load_offer: ({offer_id}: {offer_id: u32}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<readonly [string, string, string, u64, u64, u64, u32]>>

  /**
   * Construct and simulate a check_balances transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  check_balances: ({account, send_token, recv_token}: {account: string, send_token: string, recv_token: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<readonly [u64, u64]>>

}
export class Client extends ContractClient {
  constructor(public readonly options: ContractClientOptions) {
    super(
      new ContractSpec([ "AAAAAQAAAAAAAAAAAAAAB0ZlZUluZm8AAAAAAgAAAAAAAAAIZmVlX3JhdGUAAAAEAAAAAAAAAApmZWVfd2FsbGV0AAAAAAAT",
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
        "AAAAAAAAAAAAAAAOY2hlY2tfYmFsYW5jZXMAAAAAAAMAAAAAAAAAB2FjY291bnQAAAAAEwAAAAAAAAAKc2VuZF90b2tlbgAAAAAAEwAAAAAAAAAKcmVjdl90b2tlbgAAAAAAEwAAAAEAAAPtAAAAAgAAAAYAAAAG" ]),
      options
    )
  }
  public readonly fromJSON = {
    initialize: this.txFromJSON<null>,
        set_admin: this.txFromJSON<null>,
        set_fee: this.txFromJSON<null>,
        get_fee: this.txFromJSON<readonly [u32, string]>,
        allow_token: this.txFromJSON<null>,
        disallow_token: this.txFromJSON<null>,
        get_error: this.txFromJSON<u32>,
        count_offers: this.txFromJSON<u32>,
        create_offer: this.txFromJSON<u32>,
        accept_offer: this.txFromJSON<u32>,
        update_offer: this.txFromJSON<u32>,
        close_offer: this.txFromJSON<u32>,
        load_offer: this.txFromJSON<readonly [string, string, string, u64, u64, u64, u32]>,
        check_balances: this.txFromJSON<readonly [u64, u64]>
  }
}