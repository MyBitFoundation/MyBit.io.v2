/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class Platform extends Contract {
  functions: {
    setPlatformWallet(
      _walletAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setPlatformToken(
      _tokenAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setPlatformFee(
      _percent: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setPlatformPercentage(
      _percent: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setBurnrate(
      _percent: number | string | BigNumber,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    destroy(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    database(): Promise<string>;
    events(): Promise<string>;
  };
  filters: {};
}
