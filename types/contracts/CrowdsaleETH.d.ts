/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class CrowdsaleETH extends Contract {
  functions: {
    buyAssetOrderETH(
      _assetAddress: string,
      _investor: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    payoutETH(
      _assetAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    refund(
      _assetAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    recoverTokens(
      _erc20Token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    destroy(overrides?: TransactionOverrides): Promise<ContractTransaction>;
  };
  filters: {};
}
