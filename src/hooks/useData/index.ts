import { useEffect, useState } from 'react';
import { CartAPI, DropshipperAPI, PaymentAPI, ShipmentAPI } from '../../api';
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
  const [shipment, setShipment] = useState<ShipmentInterface[]>([]);
  const [payment, setPayment] = useState<PaymentInterface[]>([]);
  const [data, setData] = useState<DataInterface>({
    email: '',
    phoneNumber: '',
    deliveryAddress: '',
    isDropship: false,
    dropshipperName: '',
    dropshipperPhoneNumber: '',
    shipmentType: null,
    paymentType: null,
  });

  useEffect(() => {
    setCart(CartAPI);
    setDropshipFee(DropshipperAPI);
    setShipment(ShipmentAPI);
    setPayment(PaymentAPI);
  }, []);

  return {
    cart,
    dropshipFee,
    shipment,
    payment,
    data,
    setData,
  };
};
