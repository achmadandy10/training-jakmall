import { useEffect, useState } from 'react';
import { CartAPI, DropshipperAPI } from '../../api';
import {
  CartInterface,
  DataInterface,
  DropshipperInterface,
  PaymentInterface,
  ShipmentInterface,
} from '../../interfaces';

export const useData = () => {
  const [cart, setCart] = useState<CartInterface[]>([]);
  const [dropshipFee, setDropshipFee] = useState<DropshipperInterface>();
  const [shipment, setShipment] = useState<ShipmentInterface>();
  const [payment, setPayment] = useState<PaymentInterface>();
  const [data, setData] = useState<DataInterface>({
    email: '',
    phoneNumber: '',
    deliveryAddress: '',
    isDropship: false,
    dropshipperName: '',
    dropshipperPhoneNumber: '',
  });

  useEffect(() => {
    setCart(CartAPI);
    setDropshipFee(DropshipperAPI);
  }, []);

  return {
    cart,
    dropshipFee,
    shipment,
    setShipment,
    payment,
    setPayment,
    data,
    setData,
  };
};
