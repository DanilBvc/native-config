import { create } from 'zustand';
import { type Order, TypeOfMail, TypeOfCasket } from '../../static/types/orderTypes/types';

interface OrderStore {
  order: Order;
  updateOrderData: (orderData: Partial<Order>) => void;
  clearOrderData: () => void;
}

const useOrderStore = create<OrderStore>((set) => ({
  order: {
    hearAbout: '',
    middleName: '',
    email: '',
    fullName: '',
    phoneNumber: '',
    specialWishes: '',
    selectedPackage: '',
    gift: false,
    giftFullName: '',
    giftMiddleName: '',
    address: '',
    accountName: '',
    password: '',
    dob: new Date(),
    dod: new Date(),
    typeOfCasket: TypeOfCasket.default,
    engravingBoxes: '',
    isCasketWithImage: false,
    typeOfMail: TypeOfMail['Nova Poshta'],
    addressIndex: '',
    instructionsDelivery: '',
    type_id: '',
    language: ''
  },
  updateOrderData: (orderData: Partial<Order>) => {
    set((state) => ({
      order: {
        ...state.order,
        ...orderData,
      },
    }));
  },
  clearOrderData: () => {
    set((state) => ({
      order: {
        hearAbout: '',
        middleName: '',
        email: '',
        fullName: '',
        phoneNumber: '',
        specialWishes: '',
        selectedPackage: '',
        gift: false,
        giftFullName: '',
        giftMiddleName: '',
        address: '',
        accountName: '',
        password: '',
        dob: new Date(),
        dod: new Date(),
        typeOfCasket: TypeOfCasket.default,
        engravingBoxes: '',
        isCasketWithImage: false,
        typeOfMail: TypeOfMail['Nova Poshta'],
        addressIndex: '',
        instructionsDelivery: '',
        type_id: '',
        language: ''
      },
    }));
  }
}));

export default useOrderStore;
