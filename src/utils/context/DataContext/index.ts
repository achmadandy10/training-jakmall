import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import {
  CartInterface,
  DataInterface,
  DropshipperInterface,
  PaymentInterface,
  ShipmentInterface,
} from '../../../interfaces';

export type DataContextProps = {
  data: DataInterface;
  setData: Dispatch<SetStateAction<DataInterface>>;
  shipment: ShipmentInterface[];
  payment: PaymentInterface[];
  cart: CartInterface[];
  dropshipFee: DropshipperInterface | undefined;
};

export const DataContext = createContext<DataContextProps | undefined>(
  undefined,
);

export function useDataContext(): DataContextProps {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error(
      'useDataContext should be used within the DataContext provider!',
    );
  }

  return context;
}
