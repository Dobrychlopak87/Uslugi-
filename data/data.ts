export interface Service {
  name: string;
  availability: 'always' | 'weekend' | 'monthly';
  description: string;
  iconName: string;
  villageIds: string[]; // Villages where this service is available
  category: string;
}

export interface Village {
  id: string;
  name: string;
  clothingCollectionDate: string; // e.g., "15-go każdego miesiąca"
}

export const villages: Village[] = [
  { id: 'lochowice', name: 'Łochowice', clothingCollectionDate: '1-szy poniedziałek miesiąca' },
  { id: 'stary-raduszec', name: 'Stary / Nowy Raduszec', clothingCollectionDate: '1-szy wtorek miesiąca' },
  { id: 'bytnica', name: 'Bytnica', clothingCollectionDate: '1-szy środa miesiąca' },
  { id: 'polupin', name: 'Połupin', clothingCollectionDate: '1-szy czwartek miesiąca' },
  { id: 'marcinowice', name: 'Marcinowice', clothingCollectionDate: '1-szy piątek miesiąca' },
  { id: 'osiecznica', name: 'Osiecznica', clothingCollectionDate: '1-szy sobota miesiąca' },
];

export const services: Service[] = [
  { 
    name: 'Remonty', 
    availability: 'always', 
    description: 'Profesjonalne malowanie ścian, drobne naprawy usterek, montaż mebli oraz kompleksowe wykończenia wnętrz. Zadbamy o Twój dom.', 
    iconName: 'Hammer',
    villageIds: ['lochowice', 'stary-raduszec', 'bytnica', 'polupin', 'marcinowice', 'osiecznica'],
    category: 'Dom'
  },
  { 
    name: 'Sprzątanie podwórka', 
    availability: 'always', 
    description: 'Kompleksowe porządkowanie terenu wokół domu, wywóz nieczystości, grabienie liści oraz usuwanie odpadów zielonych.', 
    iconName: 'Trash2',
    villageIds: ['lochowice', 'bytnica', 'polupin', 'osiecznica'],
    category: 'Ogród'
  },
  { 
    name: 'Wywóz złomu', 
    availability: 'always', 
    description: 'Szybki i bezpłatny odbiór starego metalu, zepsutych urządzeń AGD/RTV oraz innych odpadów metalowych z Twojej posesji.', 
    iconName: 'Container',
    villageIds: ['lochowice', 'stary-raduszec', 'marcinowice', 'osiecznica'],
    category: 'Recykling'
  },
  { 
    name: 'Koszenie trawy', 
    availability: 'weekend', 
    description: 'Profesjonalne koszenie trawników, działek rekreacyjnych oraz przycinanie żywopłotów. Usługa dostępna w weekendy.', 
    iconName: 'Leaf',
    villageIds: ['stary-raduszec', 'bytnica', 'polupin', 'marcinowice'],
    category: 'Ogród'
  },
  { 
    name: 'Odbiór odzieży', 
    availability: 'monthly', 
    description: 'Regularny odbiór używanej odzieży, tekstyliów domowych oraz obuwia. Przygotuj paczki zgodnie z harmonogramem.', 
    iconName: 'CustomClothing',
    villageIds: ['lochowice', 'stary-raduszec', 'bytnica', 'polupin', 'marcinowice', 'osiecznica'],
    category: 'Dom'
  },
];
