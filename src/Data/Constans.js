import {Colors} from '../Themes';
export const API_VERSION = '2.5';
export const BASE_URL = 'https://user1673281842743.requestly.dev';
export const API_STATUS = 'dev';
export const API_STATUS2 = 'staging';
export const Api_status3 = 'prod';
export const ZONE = 'London,uk';

export const dataTest = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [50, 20, 2, 86, 71, 100],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
    },
    {
      data: [20, 10, 4, 56, 87, 90],
    },
    {
      data: [30, 90, 67, 54, 10, 2],
    },
  ],
};

export const chartConfig = {
  backgroundGradientFrom: Colors.whiteBackground,
  backgroundGradientFromOpacity: 1,
  backgroundGradientToOpacity: 1,
  backgroundGradientTo: Colors.whiteBackground,
  style: {
    borderRadius: 16,
    color: 'pink',
  },
  color: (opacity = 1) => Colors.orangeSmartBuilding,
  strokeWidth: 0, // optional, default 3
  barPercentage: 1,
  useShadowColorFromDataset: false, // optional
};

export const graphStyle = {
  alignSelf: 'center',
  ...chartConfig,
};

export const dataTestts = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99],
    },
  ],
};

export const DISTANCE = [1, 8, 16, 24, 48];

export const DEPT = [
  {
    nama: 'Departemen 1',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 2',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 3',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 1',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 2',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 3',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 1',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 2',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 3',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 1',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 2',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 3',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 1',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 2',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 3',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 1',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 2',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 3',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 1',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 2',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 3',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 1',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 2',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 3',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 1',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 2',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 3',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 1',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 2',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
  {
    nama: 'Departemen 3',
    totalHours: '129 Hours',
    totalKwh: '675 kWh',
  },
];

export const CCTV_DATA = [
  {
    title: 'CCTV 1',
    image: '',
    deskripsi: 'Lantai 3 samping lift',
    status: false,
  },
  {
    title: 'CCTV 2',
    image: '',
    deskripsi: 'Lantai 3 samping lift',
    status: false,
  },
  {
    title: 'CCTV 3',
    image: '',
    deskripsi: 'Lantai 3 samping lift',
    status: false,
  },
];

export const DATA_DEPT = {
  'Departement 1': [
    {
      categoryId: '1',
      category: 'ALL',
      colorIconText: Colors.blueDarkSmartBuilding,
      name: 'All Device',
      status: true,
      color: Colors.redSmartBuilding,
      height: 200,
    },
    {
      categoryId: '1',
      category: 'AC',
      name: 'AC Ruangan 1',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: true,
      color: Colors.blueSmartBuilding,
      height: 100,
    },
    {
      categoryId: '1',
      category: 'AC',
      name: 'AC Ruangan 2',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.blueSmartBuilding,
      height: 100,
    },
    {
      categoryId: '1',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 1',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.whiteCard,
      height: 400,
    },
    {
      categoryId: '1',
      category: 'LAMPU_UTAMA',
      name: 'Lampu Area Utama',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.orangeSmartBuilding,
      height: 300,
    },
    {
      categoryId: '1',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 2',
      status: false,
      color: Colors.whiteCard,
      colorIconText: Colors.blueDarkSmartBuilding,
      height: 100,
    },
    {
      categoryId: '1',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 3',
      status: false,
      color: Colors.whiteCard,
      colorIconText: Colors.blueDarkSmartBuilding,
      height: 100,
    },
    {
      categoryId: '1',
      category: 'LAMPU_UTAMA',
      name: 'Lampu Area Gedung',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.orangeSmartBuilding,
      height: 300,
    },
    {
      categoryId: '1',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 4',
      status: false,
      color: Colors.whiteCard,
      colorIconText: Colors.blueDarkSmartBuilding,
      height: 100,
    },
    {
      categoryId: '1',
      category: 'LAMPU_UTAMA',
      name: 'Lampu Area Gedung Pendek',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.orangeSmartBuilding,
      height: 300,
    },
  ],
  'Departement 2': [
    {
      categoryId: '2',
      category: 'ALL',
      colorIconText: Colors.blueDarkSmartBuilding,
      name: 'All Device',
      status: false,
      color: Colors.redSmartBuilding,
      height: 100,
    },
    {
      categoryId: '2',
      category: 'AC',
      name: 'AC Ruangan 1',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.blueSmartBuilding,
      height: 200,
    },
    {
      categoryId: '2',
      category: 'LAMPU_UTAMA',
      name: 'Lampu Area Utama',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.orangeSmartBuilding,
      height: 300,
    },
    {
      categoryId: '2',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 1',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.whiteCard,
      height: 100,
    },
    {
      categoryId: '2',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 2',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.whiteCard,
      height: 200,
    },
  ],
  'Departement 3': [
    {
      categoryId: '3',
      category: 'ALL',
      colorIconText: Colors.blueDarkSmartBuilding,
      name: 'All Device',
      status: false,
      color: Colors.redSmartBuilding,
      height: 400,
    },
    {
      categoryId: '3',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 1',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.whiteCard,
      height: 200,
    },
    {
      categoryId: '3',
      category: 'AC',
      name: 'AC Ruangan 1',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.blueSmartBuilding,
      height: 100,
    },
    {
      categoryId: '3',
      category: 'LAMPU_UTAMA',
      name: 'Lampu Area Utama',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.orangeSmartBuilding,
      height: 100,
    },
    {
      categoryId: '3',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 2',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.whiteCard,
      height: 200,
    },
  ],
  'Departement 4': [
    {
      categoryId: '4',
      category: 'ALL',
      colorIconText: Colors.blueDarkSmartBuilding,
      name: 'All Device',
      status: false,
      color: Colors.redSmartBuilding,
      height: 100,
    },
    {
      categoryId: '4',
      category: 'AC',
      name: 'AC Ruangan 1',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.blueSmartBuilding,
      height: 100,
    },
    {
      categoryId: '4',
      category: 'LAMPU_UTAMA',
      name: 'Lampu Area Utama',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.orangeSmartBuilding,
      height: 300,
    },
    {
      categoryId: '4',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 1',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.whiteCard,
      height: 100,
    },
    {
      categoryId: '4',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 2',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.whiteCard,
      height: 100,
    },
  ],
  'Departement 5': [
    {
      categoryId: '5',
      category: 'ALL',
      colorIconText: Colors.blueDarkSmartBuilding,
      name: 'All Device',
      status: false,
      color: Colors.redSmartBuilding,
      height: 100,
    },
    {
      categoryId: '5',
      category: 'AC',
      name: 'AC Ruangan 1',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.blueSmartBuilding,
      height: 100,
    },
    {
      categoryId: '5',
      category: 'LAMPU_UTAMA',
      name: 'Lampu Area Utama',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.orangeSmartBuilding,
      height: 300,
    },
    {
      categoryId: '5',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 1',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.whiteCard,
      height: 100,
    },
    {
      categoryId: '5',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 2',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.whiteCard,
      height: 100,
    },
  ],
  'Departement 6': [
    {
      categoryId: '6',
      category: 'ALL',
      colorIconText: Colors.blueDarkSmartBuilding,
      name: 'All Device',
      status: false,
      color: Colors.redSmartBuilding,
      height: 100,
    },
    {
      categoryId: '6',
      category: 'AC',
      name: 'AC Ruangan 1',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.blueSmartBuilding,
      height: 100,
    },
    {
      categoryId: '6',
      category: 'LAMPU_UTAMA',
      name: 'Lampu Area Utama',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.orangeSmartBuilding,
      height: 300,
    },
    {
      categoryId: '6',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 1',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.whiteCard,
      height: 100,
    },
    {
      categoryId: '6',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 2',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.whiteCard,
      height: 100,
    },
  ],
  'Departement 7': [
    {
      categoryId: '7',
      category: 'ALL',
      colorIconText: Colors.blueDarkSmartBuilding,
      name: 'All Device',
      status: false,
      color: Colors.redSmartBuilding,
      height: 100,
    },
    {
      categoryId: '7',
      category: 'AC',
      name: 'AC Ruangan 1',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.blueSmartBuilding,
      height: 100,
    },
    {
      categoryId: '7',
      category: 'LAMPU_UTAMA',
      name: 'Lampu Area Utama',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.orangeSmartBuilding,
      height: 300,
    },
    {
      categoryId: '7',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 1',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.whiteCard,
      height: 100,
    },
    {
      categoryId: '7',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 2',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.whiteCard,
      height: 100,
    },
  ],
  'Departement 8': [
    {
      categoryId: '8',
      category: 'ALL',
      colorIconText: Colors.blueDarkSmartBuilding,
      name: 'All Device',
      status: false,
      color: Colors.redSmartBuilding,
      height: 100,
    },
    {
      categoryId: '8',
      category: 'AC',
      name: 'AC Ruangan 1',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.blueSmartBuilding,
      height: 100,
    },
    {
      categoryId: '8',
      category: 'LAMPU_UTAMA',
      name: 'Lampu Area Utama',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.orangeSmartBuilding,
      height: 300,
    },
    {
      categoryId: '8',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 1 hahahaha',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.whiteCard,
      height: 100,
    },
    {
      categoryId: '8',
      category: 'LAMPU_AREA',
      name: 'Lampu Ruang Meeting 2',
      colorIconText: Colors.blueDarkSmartBuilding,
      status: false,
      color: Colors.whiteCard,
      height: 100,
    },
  ],
};

export const CATEGORY = [
  {
    categoryName: 'Departement 1',
    categoryId: '1',
  },
  {
    categoryName: 'Departement 2',
    categoryId: '2',
  },
  {
    categoryName: 'Departement 3',
    categoryId: '3',
  },
  {
    categoryName: 'Departement 4',
    categoryId: '4',
  },
  {
    categoryName: 'Departement 5',
    categoryId: '5',
  },
  {
    categoryName: 'Departement 6',
    categoryId: '6',
  },
  {
    categoryName: 'Departement 7',
    categoryId: '7',
  },
  {
    categoryName: 'Departement 8',
    categoryId: '8',
  },
];

export const LOCATIONS = [
  {
    negara: 'London, UK',
    code: 'UK',
    forApi: 'London,uk',
    subTitle: '5648573567836458736',
  },
  {
    negara: 'Indonesia, ID',
    code: 'ID',
    forApi: 'Idonesia,id',
    subTitle: '5648573567836458736',
  },
  {
    negara: 'French, FR',
    code: 'FR',
    forApi: 'french,fr',
    subTitle: '5648573567836458736',
  },
];

export const DATA_SETTINGS = [
  {
    id: 1,
    name: 'Allow Notifications',
    active: true,
    iconName: 'notifications',
    colorBackground: Colors.notif,
  },
  {
    id: 2,
    name: 'Scheduled',
    active: false,
    iconName: 'notifications-circle-sharp',
    colorBackground: Colors.schedule,
  },
];

export const DATA_SETTINGS_WEATHER_UPDATE = [
  {
    id: 3,
    name: 'Precipitation Update',
    active: false,
    iconName: 'umbrella-outline',
    colorBackground: Colors.colarBlue,
  },
  {
    id: 4,
    name: 'Major Changes',
    active: false,
    iconName: 'ios-cloud-done',
    colorBackground: Colors.orange,
  },
  {
    id: 5,
    name: 'Morning Update',
    active: false,
    iconName: 'ios-sunny',
    colorBackground: Colors.orangeLight,
  },
  {
    id: 6,
    name: 'Evening Update',
    active: false,
    iconName: 'moon',
    colorBackground: Colors.darkPink,
  },
];

export const DATA_SETTINGS_SEVERE_UPDATE = [
  {
    id: 7,
    name: 'Lightning Tracker',
    active: false,
    iconName: 'thunderstorm',
    colorBackground: Colors.yellow,
  },
  {
    id: 8,
    name: 'Hurricane Tracker',
    active: false,
    iconName: 'ice-cream-sharp',
    colorBackground: Colors.red,
  },
  {
    id: 9,
    name: 'Severe Weather Alert',
    active: false,
    iconName: 'warning',
    colorBackground: Colors.purple,
  },
];

export const LANG = {
  eng: {
    opening: 'Find the best',
    secondOpening: 'coffee for you',
    searchDesc: 'search your coffee',
    next: 'Next',
    deskripsiPruduk: 'Description',
    size: 'Size',
    price: 'Price',
    order: 'Orders',
    payment: 'Payment',
    favorit: 'Your Favorit',
    logout: 'Logout',
    settingsDm: 'Settings Dark Mode',
    language: 'Language',
    wallet: 'Wallet',
  },
  idn: {
    opening: 'Temukan yang terbaik',
    secondOpening: 'kopi untukmu',
    searchDesc: 'cari kopi mu',
    next: 'Lanjut',
    deskripsiPruduk: 'Deskripsi',
    size: 'Ukuran',
    price: 'Harga',
    order: 'Pesananan',
    payment: 'Pembayaran',
    favorit: 'Favorit Anda',
    logout: 'Keluar',
    settingsDm: 'Pengaturan Mode Gelap',
    language: 'Bahasa',
    wallet: 'Dompet',
  },
};

export const DYNAMIC_THEME = {
  dark: {
    backgroundColor: '#1B1A17',
    cardColor: Colors.blue,
    textColor: '#fff',
  },
  light: {
    backgroundColor: '#fff',
    cardColor: Colors.red,
    textColor: '#444444',
  },
};
