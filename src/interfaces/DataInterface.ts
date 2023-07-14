import { PaymentInterface, ShipmentInterface } from '.';

export interface DataInterface {
  email: string;
  phoneNumber: string;
  deliveryAddress: string;
  isDropship: false;
  dropshipperName: string;
  dropshipperPhoneNumber: string;
  shipmentType: ShipmentInterface | null;
  paymentType: PaymentInterface | null;
}
