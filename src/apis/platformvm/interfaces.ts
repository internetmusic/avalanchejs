/**
 * @packageDocumentation
 * @module PlatformVM-Interfaces
 */

import { 
  iUTXOID, 
  iUTXOResponse 
} from "./../../common/interfaces";
import { UTXOSet } from "./../../apis/platformvm";
import BN from "bn.js";

export interface iPlatformVMUTXOResponse extends iUTXOResponse {
  utxos:UTXOSet
}

export interface iGetBalanceResponse {
  balance:string
  unlocked:string
  lockedStakeable:string
  lockedNotStakeable:string
  utxoIDs:iUTXOID[] 
}

export interface iGetBalanceParams {
  address:string
}

export interface iGetMinStakeResponse {
  minValidatorStake:BN
  minDelegatorStake:BN
}