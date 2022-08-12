import React, { PropsWithChildren, useCallback, useRef } from "react";
import { Contract } from "starknet";
import { BigNumberish, toBN } from "starknet/utils/number";
import { useStarkSheetContract } from "../hooks/useStarkSheetContract";

export const CellValuesContext = React.createContext<{
  loading: boolean;
  failed: boolean;
  hasLoaded: boolean;
  values: { owner: BigNumberish; value: BigNumberish }[];
  updateValueOwner: (id: number, owner: BigNumberish) => void;
  updateValue: (id: number, value: BigNumberish) => void;
  cellNames: string[];
  setCellNames: (value: string[]) => void;
  refresh: () => void;
}>({
  loading: false,
  failed: false,
  hasLoaded: false,
  values: [],
  updateValueOwner: () => {},
  updateValue: () => {},
  cellNames: [],
  setCellNames: () => {},
  refresh: () => {},
});

type CellData = { owner: BigNumberish; value: BigNumberish };

const GRID_SIZE = 15 * 15;
const network = process.env.REACT_APP_NETWORK;

export const CellValuesContextProvider = ({
  children,
}: PropsWithChildren<{}>) => {
  const [values, setValues] = React.useState<CellData[]>([]);
  const previousGridData = useRef<any>(undefined);
  const [cellNames, setCellNames] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [failed, setFailed] = React.useState<boolean>(false);
  const [hasLoaded, setHasLoaded] = React.useState<boolean>(false);
  const { contract } = useStarkSheetContract();

  const refreshAspect = useCallback(
    (cells: CellData[]) => {
      if (previousGridData.current) {
        cells.forEach((cell, index) => {
          if (
            previousGridData.current[index]?.value?.toString() !==
            cell?.value?.toString()
          ) {
            fetch(
              network === "alpha-mainnet"
                ? `https://api.aspect.co/api/v0/asset/${contract?.address}/${index}/refresh`
                : `https://api-testnet.aspect.co/api/v0/asset/${contract?.address}/${index}/refresh`
            );
            fetch(
              network === "alpha-mainnet"
                ? `https://api.mintsquare.io/nft/metadata/starknet-mainnet/${contract?.address}/${index}/`
                : `https://api.mintsquare.io/nft/metadata/starknet-testnet/${contract?.address}/${index}/`,
              { method: "POST" }
            );
          }
        });
      }
      previousGridData.current = cells;
    },
    [contract?.address]
  );

  const load = useCallback(
    (contract: Contract) => {
      setLoading(true);
      setFailed(false);
      return contract
        .call("renderGrid", [])
        .then((gridData) => {
          const cells = (
            gridData.cells as [CellData & { id: BigNumberish }]
          ).reduce(
            (prev, cell) => ({ ...prev, [parseInt(cell.id.toString())]: cell }),
            {} as { [id: number]: CellData }
          );
          const gridCells = Array.from(Array(GRID_SIZE).keys()).map(
            (i) => cells[i] || { id: i, owner: toBN(0), value: toBN(0) }
          );
          refreshAspect(gridCells);
          setValues(gridCells);
          setHasLoaded(true);
        })
        .catch((error) => {
          setFailed(true);
        })
        .finally(() => setLoading(false));
    },
    [refreshAspect]
  );

  const refresh = useCallback(async () => {
    if (contract) {
      return load(contract);
    }
  }, [contract, load]);

  React.useEffect(() => {
    if (contract) {
      load(contract);
    }
  }, [contract, load]);

  const updateValueOwner = useCallback(
    (id: number, owner: BigNumberish) => {
      const newValues = [...values];
      newValues[id] = {
        owner: owner,
        value: values[id]?.value || toBN(0),
      };
      setValues(newValues);
    },
    [values]
  );

  const updateValue = useCallback(
    (id: number, value: BigNumberish) => {
      const newValues = [...values];
      newValues[id] = { ...values[id], value };
      setValues(newValues);
    },
    [values]
  );

  return (
    <CellValuesContext.Provider
      value={{
        cellNames,
        setCellNames,
        values,
        updateValueOwner,
        updateValue,
        loading,
        failed,
        hasLoaded,
        refresh,
      }}
    >
      {children}
    </CellValuesContext.Provider>
  );
};
