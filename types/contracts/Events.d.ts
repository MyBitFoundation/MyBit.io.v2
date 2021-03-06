/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class Events extends Contract {
  functions: {
    message(
      _message: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transaction(
      _message: string,
      _from: string,
      _to: string,
      _amount: number | string | BigNumber,
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    registration(
      _message: string,
      _account: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    contractChange(
      _message: string,
      _account: string,
      _name: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    asset(
      _message: string,
      _uri: string,
      _assetAddress: string,
      _manager: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    escrow(
      _message: string,
      _assetAddress: string,
      _escrowID: string,
      _manager: string,
      _amount: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    order(
      _message: string,
      _orderID: string,
      _amount: number | string | BigNumber,
      _price: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    exchange(
      _message: string,
      _orderID: string,
      _assetAddress: string,
      _account: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    operator(
      _message: string,
      _operatorID: string,
      _operatorURI: string,
      _account: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    consensus(
      _message: string,
      _executionID: string,
      _votesID: string,
      _votes: number | string | BigNumber,
      _tokens: number | string | BigNumber,
      _quorum: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    database(): Promise<string>;
  };
  filters: {
    LogEvent(
      message: null,
      messageID: string | null,
      origin: string | null
    ): EventFilter;

    LogTransaction(
      message: null,
      messageID: string | null,
      from: string | null,
      to: string | null,
      amount: null,
      token: null,
      origin: null
    ): EventFilter;

    LogAddress(
      message: null,
      messageID: string | null,
      account: string | null,
      origin: string | null
    ): EventFilter;

    LogContractChange(
      message: null,
      messageID: string | null,
      account: string | null,
      name: null,
      origin: string | null
    ): EventFilter;

    LogAsset(
      message: null,
      messageID: string | null,
      uri: null,
      assetID: string | null,
      asset: null,
      manager: null,
      origin: string | null
    ): EventFilter;

    LogEscrow(
      message: null,
      messageID: string | null,
      asset: null,
      escrowID: null,
      manager: string | null,
      amount: null,
      origin: string | null
    ): EventFilter;

    LogOrder(
      message: null,
      messageID: string | null,
      orderID: string | null,
      amount: null,
      price: null,
      origin: string | null
    ): EventFilter;

    LogExchange(
      message: null,
      messageID: string | null,
      orderID: null,
      asset: string | null,
      account: null,
      origin: string | null
    ): EventFilter;

    LogOperator(
      message: null,
      messageID: string | null,
      operatorID: null,
      operatorURI: null,
      account: string | null,
      origin: string | null
    ): EventFilter;

    LogConsensus(
      message: null,
      messageID: string | null,
      executionID: null,
      votesID: null,
      votes: null,
      tokens: null,
      quorum: null,
      origin: string | null
    ): EventFilter;
  };
}
