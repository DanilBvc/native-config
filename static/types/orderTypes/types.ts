export enum TypeOfMail {
  'FedEx' = 'FedEx',
  'USPS' = 'USPS',
  'Nova Poshta' = 'Nova Poshta',
  'Ukr Poshta' = 'Ukr Poshta',
  'InPost' = 'InPost',
  'Poczta Polska' = 'Poczta Polska',
}

export enum TypeOfCasket {
  'premium' = 'premium',
  'default' = 'default'
}
export interface Order {
  type_id: string
  language: string;
  hearAbout: string;
  middleName: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  specialWishes: string;
  selectedPackage: string;
  gift: boolean;
  giftFullName: string;
  giftMiddleName: string;
  address: string,
  accountName: string,
  password: string,
  dob: Date,
  dod: Date,
  typeOfCasket: TypeOfCasket,
  engravingBoxes: string,
  isCasketWithImage: boolean,
  typeOfMail: TypeOfMail,
  addressIndex: string,
  instructionsDelivery: string,
}
