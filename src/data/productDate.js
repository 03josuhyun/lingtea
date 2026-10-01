const data = [
  {
    id: 'product01',
    image: process.env.PUBLIC_URL + '/assets/product/product01.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product01.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_03.webp',
    ],
    title: '링티 오리지널 10박스 + 보틀(옵션선택) + 수분 콜라겐 1박스&쇼핑백 증정',
    smalltitle: '의사가 만든 회복 솔루션',
    price: 138000,
    delprice: 300000,
    percent: '54%',
    pricedetail: '54% / 박스당 13,800원',
    category: 'origainal',

    mainOptions: [
      { id: "m1", name: "레몬맛 10박스", extraPrice: 0 },
      { id: "m2", name: "복숭아맛 10박스", extraPrice: 0 },
      { id: "m3", name: "샤인머스캣맛 10박스", extraPrice: 0 },
      { id: "m3", name: "레몬맛 5박스 + 복숭아맛 5박스", extraPrice: 0 },
      { id: "m3", name: "레몬맛 5박스 + 샤인머스캣 5박스", extraPrice: 0 },
      { id: "m3", name: "복숭아맛 5박스 + 샤인머스캣맛 5박스", extraPrice: 0 },
      { id: "m3", name: "레몬맛 5박스 + 복숭아맛 3박스 + 샤인머스캣맛 3박스", extraPrice: 0 },
    ],
    subOptions: [
      { id: "s1", name: "보틀 선택안함", extraPrice: -2000 },
      { id: "s2", name: "원형보틀", extraPrice: 0 },
      { id: "s3", name: "사각보틀", extraPrice: 0 },
    ],
    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product01_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d11.jpg',
      process.env.PUBLIC_URL + '/assets/product/product01_d12.gif',
      process.env.PUBLIC_URL + '/assets/product/product01_d13.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d14.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d15.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d16.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d17.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d18.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d19.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d20.webp',
      process.env.PUBLIC_URL + '/assets/detail04.webp',
      process.env.PUBLIC_URL + '/assets/detail05.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d21.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d22.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d23.webp',
    ],

    reviewSummary: {
      rating: 4.8,
      totalCount: 125
    },

    isBest: true,
    isNew: true,

    newDate: '2024-09-01',

    viewCount: 1250
  },
  {
    id: 'product02',
    image: process.env.PUBLIC_URL + '/assets/product/product02.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product02.webp',
      process.env.PUBLIC_URL + '/assets/product/product16.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_03.webp',
    ],
    title: '[최저가 보장관] 링티 수분 콜라겐 10박스(100회분) + 보틀 (옵션선택)',
    smalltitle: '저분자 콜라겐 흡수 솔루션',
    price: 168000,
    delprice: 350000,
    percent: '52%',
    pricedetail: '52% / 박스당 16,800원',
    subOptions: [
      { id: "s1", name: "보틀 선택안함", extraPrice: -2000 },
      { id: "s2", name: "원형보틀", extraPrice: 0 },
      { id: "s3", name: "사각보틀", extraPrice: 0 },
      { id: "s4", name: "링티2포(레몬+복숭아)", extraPrice: 0 },
    ],

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product02_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d09.webp',
      process.env.PUBLIC_URL + '/assets/detail04.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d11.webp',
      process.env.PUBLIC_URL + '/assets/detail05.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d12.webp',
    ],
    isBest: true,
    isNew: true,

    newDate: '2024-09-10',

    viewCount: 1210
  },
  {
    id: 'product03',
    image: process.env.PUBLIC_URL + '/assets/product/product03.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product03_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_03.webp',
    ],
    title: '닷티 6박스 + 보틀(옵션선택) + 쇼핑백 증정',
    smalltitle: '체지방 관리 건강기능성',
    price: 147000,
    delprice: 210000,
    percent: '30%',
    pricedetail: '30% / 박스당 24,500원',
    category: 'dot',
    
    subOptions: [
      { id: "s1", name: "보틀 선택안함", extraPrice: -2000 },
      { id: "s2", name: "원형보틀", extraPrice: 0 },
      { id: "s3", name: "사각보틀", extraPrice: 0 },
      { id: "s4", name: "링티 2포(레몬+복숭아)", extraPrice: 0 },
    ],

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product01_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d13.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d14.webp',
      process.env.PUBLIC_URL + '/assets/detail04.webp',
      process.env.PUBLIC_URL + '/assets/detail05.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d15.webp',
    ],
    isBest: true,
    isNew: true,

    newDate: '2024-09-22',

    viewCount: 1130
  },
  {
    id: 'product04',
    image: process.env.PUBLIC_URL + '/assets/product/product04.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product04.webp',
      process.env.PUBLIC_URL + '/assets/product/product04_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product04_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product04_03.webp',

    ],
    title: '링티 오리지널',
    smalltitle: '의사가 만든 회복 솔루션',
    price: 18900,
    delprice: 30000,
    percent: '37%',
    pricedetail: '37% / 박스당 14,800원 ~ ',
    category: 'origainal',
    mainOptions: [
      { id: "m1", name: "레몬맛 10박스", extraPrice: 0 },
      { id: "m2", name: "복숭아맛 10박스", extraPrice: 0 },
      { id: "m3", name: "샤인머스캣맛 10박스", extraPrice: 0 },
      { id: "m3", name: "레몬맛 5박스 + 복숭아맛 5박스", extraPrice: 0 },
      { id: "m3", name: "레몬맛 5박스 + 샤인머스캣 5박스", extraPrice: 0 },
      { id: "m3", name: "복숭아맛 5박스 + 샤인머스캣맛 5박스", extraPrice: 0 },
      { id: "m3", name: "레몬맛 5박스 + 복숭아맛 3박스 + 샤인머스캣맛 3박스", extraPrice: 0 },
    ],
    subOptions: [
      { id: "s1", name: "보틀 선택안함", extraPrice: -2000 },
      { id: "s2", name: "원형보틀", extraPrice: 0 },
      { id: "s3", name: "사각보틀", extraPrice: 0 },
      { id: "s4", name: "링티2포(레몬+복숭아)", extraPrice: 0 },
    ],

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product01_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d11.jpg',
      process.env.PUBLIC_URL + '/assets/product/product01_d12.gif',
      process.env.PUBLIC_URL + '/assets/product/product01_d13.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d14.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d15.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d16.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d17.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d18.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d19.webp',
      process.env.PUBLIC_URL + '/assets/detail04.webp',
      process.env.PUBLIC_URL + '/assets/detail05.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d21.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d22.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d23.webp',

    ],
    isBest: true,
    isNew: true,

    newDate: '2024-09-20',

    viewCount: 1230
  },
  {
    id: 'product05',
    image: process.env.PUBLIC_URL + '/assets/product/product05.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product05.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_03.webp',
    ],
    title: '닷티',
    smalltitle: '체지방 관리 건강기능성',
    price: 29900,
    delprice: 35000,
    percent: '14%',
    pricedetail: '14% / 박스당 27,250원 ~ ',
    category: 'dot',
    mainOptions: [
      { id: "m1", name: "레몬맛 10박스", extraPrice: 0 },
      { id: "m2", name: "복숭아맛 10박스", extraPrice: 0 },
      { id: "m3", name: "샤인머스캣맛 10박스", extraPrice: 0 },
      { id: "m3", name: "레몬맛 5박스 + 복숭아맛 5박스", extraPrice: 0 },
      { id: "m3", name: "레몬맛 5박스 + 샤인머스캣 5박스", extraPrice: 0 },
      { id: "m3", name: "복숭아맛 5박스 + 샤인머스캣맛 5박스", extraPrice: 0 },
      { id: "m3", name: "레몬맛 5박스 + 복숭아맛 3박스 + 샤인머스캣맛 3박스", extraPrice: 0 },
    ],
    subOptions: [
      { id: "s1", name: "보틀 선택안함", extraPrice: -2000 },
      { id: "s2", name: "원형보틀", extraPrice: 0 },
      { id: "s3", name: "사각보틀", extraPrice: 0 },
      { id: "s4", name: "링티2포(레몬+복숭아)", extraPrice: 0 },
    ],

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product05_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d13.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d14.webp',
      process.env.PUBLIC_URL + '/assets/detail04.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d15.webp',
    ],
    isBest: false,
    isNew: false,

    viewCount: 1140
  },
  {
    id: 'product06',
    image: process.env.PUBLIC_URL + '/assets/product/product06.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product06_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_04.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_05.webp',
    ],
    title: '패스메이트',
    smalltitle: '기억력 기능성 건강기능식품',
    price: 15900,
    delprice: 40000,
    percent: '60%',
    pricedetail: '60% / 박스당 15900원',
    category: 'passmate',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/detail07.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_d05.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_d06.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-12-15',

    viewCount: 1020
  },
  {
    id: 'product07',
    image: process.env.PUBLIC_URL + '/assets/product/product07.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product07.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_04.webp',
    ],
    title: '링티 아이 5박스 + 전용 보틀(옵션선택) + 쇼핑백 증정',
    smalltitle: '어린이 전용 수분 솔루션',
    price: 89000,
    delprice: 165000,
    percent: '46%',
    pricedetail: '46% / 박스당 165000원',
    category: 'ringtiI',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product01_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d13.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d14.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-10-15',
  },
  {
    id: 'product08',
    image: process.env.PUBLIC_URL + '/assets/product/product08.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product08.webp',
      process.env.PUBLIC_URL + '/assets/product/product08_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_01.webp',
    ],
    title: '링티 아이',
    smalltitle: '어린이 전용 수분 솔루션',
    price: 23900,
    delprice: 33000,
    percent: '27%',
    pricedetail: '27% / 박스당 19,800원 ~ ',
    category: 'ringtiI',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/detail09.webp',
      process.env.PUBLIC_URL + '/assets/product/product0_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d13.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product07_d14.webp',
    ],
    isBest: true,
    isNew: true,

    newDate: '2024-09-24',

    viewCount: 1170
  },
  {
    id: 'product09',
    image: process.env.PUBLIC_URL + '/assets/product/product09.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product09_01.webp',      
      process.env.PUBLIC_URL + '/assets/product/product09_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_04.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_05.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_06.webp',
    ],
    title: '고소틴 7박스 (49회분) + 전용보틀(옵션선택) + 쇼핑백 증정',
    smalltitle: '맛있는 식물성 단백질',
    price: 89900,
    delprice: 146300,
    percent: '38%',
    pricedetail: '38% / 박스당 12,843원',
    category: 'gosotin',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product01_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d11.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d12.webp',
    ],
    isBest: true,
    isNew: true,

    newDate: '2024-09-14',

    viewCount: 1200
  },
  {
    id: 'product10',
    image: process.env.PUBLIC_URL + '/assets/product/product10.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product10.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_06.webp',
    ],
    title: '고소틴',
    smalltitle: '맛있는 식물성 단백질',
    price: 18900,
    delprice: 20900,
    percent: '9%',
    pricedetail: '9% / 박스당 16,633원 ~ ',
    category: 'gosotin',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product10_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d11.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d12.webp',
    ],
    isBest: true,
    isNew: true,

    newDate: '2024-10-17',

    viewCount: 1060
  },
  {
    id: 'product11',
    image: process.env.PUBLIC_URL + '/assets/product/product11.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product11.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_03.webp',
    ],
    title: '고소밀',
    smalltitle: '19가지 곡물로 만든 쉐이크',
    price: 23000,
    delprice: 27900,
    percent: '17%',
    pricedetail: '17% / 박스당 23,000원',
    category: 'gosomil',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product11_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d03.gif',
      process.env.PUBLIC_URL + '/assets/product/product11_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d07.gif',
      process.env.PUBLIC_URL + '/assets/product/product11_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d09.gif',
      process.env.PUBLIC_URL + '/assets/product/product11_d10.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d11.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-10-20',

    viewCount: 940
  },
  {
    id: 'product12',
    image: process.env.PUBLIC_URL + '/assets/product/product12.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product12.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_03.webp',
    ],
    title: '라잇티',
    smalltitle: '식후 혈당상승 억제, 배변활동 원활 기능성 원료 함유',
    price: 22900,
    delprice: 30000,
    percent: '23%',
    pricedetail: '23% / 박스당 16,484원 ~ ',
    category: 'light',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product12_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d10.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d11.webp',
    ],
    isBest: true,
    isNew: true,

    newDate: '2024-10-28',

    viewCount: 1000
  },
  {
    id: 'product13',
    image: process.env.PUBLIC_URL + '/assets/product/product13.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product13.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_04.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_05.webp',
    ],
    title: '포커스카페인 환',
    smalltitle: '간편한 공부 카페인',
    price: 17900,
    delprice: 30000,
    percent: '40%',
    pricedetail: '40% / 박스당 12,000원 ~ ',
    category: 'focus',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product13_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d08.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d09.webp',
    ],
    isBest: true,
    isNew: true,

    newDate: '2024-09-16',

    viewCount: 1110
  },
  {
    id: 'product14',
    image: process.env.PUBLIC_URL + '/assets/product/product14.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product14.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_03.webp',
    ],
    title: '링티 레몬라이트 (500mL X 24PET)',
    smalltitle: '체지방 관리까지 되는 건강 제로음료',
    price: 31900,
    delprice: 76800,
    percent: '58%',
    pricedetail: '58% / 병당 1,330원',
    category: 'lemonapple',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product14_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d13.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d14.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d15.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d16.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d17.webp',
    ],
    isBest: true,
    isNew: false,

    viewCount: 1080
  },
  {
    id: 'product15',
    image: process.env.PUBLIC_URL + '/assets/product/product15.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product15.webp',
      process.env.PUBLIC_URL + '/assets/product/product15_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product15_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product15_03.webp',
    ],
    title: '임팩트 유산균 프리미엄',
    smalltitle: '온가족 장 건강 솔루션',
    price: 19800,
    delprice: 35000,
    percent: '43%',
    pricedetail: '43% / 박스당 11,500원',
    category: 'impact',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product15_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product15_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product15_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product15_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product15_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product15_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product15_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product15_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product15_d09.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product15_d10.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-09-08',

    viewCount: 1030
  },
  {
    id: 'product16',
    image: process.env.PUBLIC_URL + '/assets/product/product16.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product16.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_04.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_05.webp',
    ],
    title: '링티 수분콜라겐',
    smalltitle: '저분자 콜라겐 흡수 솔루션',
    price: 21900,
    delprice: 35000,
    percent: '37%',
    pricedetail: '37% / 박스당 16,800원 ~ ',
    category: 'collagen',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product02_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d09.webp',
      process.env.PUBLIC_URL + '/assets/detail04.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d11.webp',
      process.env.PUBLIC_URL + '/assets/detail05.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d12.webp',
    ],
    isBest: true,
    isNew: true,

    newDate: '2024-09-12',

    viewCount: 1120
  },
  {
    id: 'product17',
    image: process.env.PUBLIC_URL + '/assets/product/product17.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product17.webp',
      process.env.PUBLIC_URL + '/assets/product/product17_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product17_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product17_03.webp',
    ],
    title: '링티 씨너지 에너지드링크 (250mL X 30캔)',
    smalltitle: '맛있고 건강한 에너지드링크',
    price: 19900,
    delprice: 66000,
    percent: '69%',
    pricedetail: '69% / 캔당 664원',
    category: 'synergy',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product17_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product17_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product17_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product17_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product17_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product17_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product17_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product17_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product17_d09.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product17_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product17_d11.webp',
    ],
    isBest: true,
    isNew: false,

    viewCount: 1190
  },
  {
    id: 'product18',
    image: process.env.PUBLIC_URL + '/assets/product/product18.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product18.webp',
      process.env.PUBLIC_URL + '/assets/product/product18_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product18_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product18_03.webp',
    ],
    title: '올케어3.0',
    smalltitle: '30대를 위한 맞춤형 건강기능식품',
    price: 35000,
    delprice: 47900,
    percent: '26%',
    pricedetail: '26% / 박스당 32,450원 ~ ',
    category: 'allcare',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product18_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product18_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product18_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product18_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product18_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product18_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product18_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product18_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product18_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product18_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product18_d11.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product18_d12.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-11-22',

    viewCount: 1150
  },
  {
    id: 'product19',
    image: process.env.PUBLIC_URL + '/assets/product/product19.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product19.webp',
      process.env.PUBLIC_URL + '/assets/product/product19_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product19_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product19_03.webp',
    ],
    title: '올케어4.0',
    smalltitle: '40대를 위한 맞춤형 건강기능식품',
    price: 54900,
    delprice: 57900,
    percent: '5%',
    pricedetail: '5% / 박스당 52,900원 ~ ',
    category: 'allcare',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product19_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product19_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product19_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product19_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product19_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product19_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product19_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product19_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product19_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product19_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product19_d11.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product19_d12.webp',
    ],
    isBest: true,
    isNew: true,

    newDate: '2024-11-24',
  },
  {
    id: 'product20',
    image: process.env.PUBLIC_URL + '/assets/product/product20.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product20.webp',
      process.env.PUBLIC_URL + '/assets/product/product20_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product20_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product20_03.webp',
    ],
    title: '올케어5.0',
    smalltitle: '50대 이상을 위한 맞춤형 건강기능식품',
    price: 44900,
    delprice: 67900,
    percent: '33%',
    pricedetail: '33% / 박스당 39,667원 ~ ',
    category: 'allcare',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product20_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product20_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product20_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product20_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product20_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product20_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product20_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product20_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product20_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product20_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product20_d11.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product20_d12.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-11-26',

    viewCount: 1010
  },
  {
    id: 'product21',
    image: process.env.PUBLIC_URL + '/assets/product/product21.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product21.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_04.webp',
    ],
    title: '링티 애플라이트 (500mL X 24PET)',
    smalltitle: '체지방 관리까지 되는 건강 제로음료',
    price: 31900,
    delprice: 76800,
    percent: '58%',
    pricedetail: '58% / 박스당 1,330원',
    category: 'lemonapple',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product21_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d11.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d13.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-12-05',

    viewCount: 960
  },
  {
    id: 'product22',
    image: process.env.PUBLIC_URL + '/assets/product/product22.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product22.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_04.webp',
    ],
    title: '테라티',
    smalltitle: '목 케어를 위한 완변한 건강 루틴',
    price: 22900,
    delprice: 35000,
    percent: '34%',
    pricedetail: '34% / 박스당 18,300원 ~ ',
    category: 'terathy',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product22_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d10.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d11.webp',
    ],
    isBest: true,
    isNew: true,

    newDate: '2024-11-30',
  },
  {
    id: 'product23',
    image: process.env.PUBLIC_URL + '/assets/product/product23.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product23.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_03.webp',
    ],
    title: '랑티 나잇티 240mL',
    smalltitle: '편안한 밤을 위한 블렌딩 티',
    price: 34900,
    delprice: 69600,
    percent: '49%',
    pricedetail: '49% / 박스당 1,454원 ~ ',
    category: 'nightie',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product23_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d04.gif',
      process.env.PUBLIC_URL + '/assets/product/product23_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d13.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d14.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d15.webp',
    ],
    isBest: true,
    isNew: true,

    newDate: '2024-12-22',

    viewCount: 1180
  },
  {
    id: 'product24',
    image: process.env.PUBLIC_URL + '/assets/product/product24.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product24.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product24_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_03.webp',
    ],
    title: '[첫구매 해택]링티 나잇티 (240mL X 6PET)',
    smalltitle: '편안한 밤을 위한 블렌딩 티',
    price: 9900,
    delprice: 17400,
    percent: '43%',
    pricedetail: '43% / 박스당 1,650원',
    category: 'nightie',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product023d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d13.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d14.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d15.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-12-23',

    viewCount: 1070
  },
  {
    id: 'product25',
    image: process.env.PUBLIC_URL + '/assets/product/product25.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product25.webp',
    ],
    title: '링티 소형 쇼핑백 (링티 4박스 or 링티 2박스 + 보틀 사이즈)',
    smalltitle: '링티 4박스 혹은 링티 2박스에 보틀 1개를 담을 수 있는 크기입니다. (155x110x250(mm))',
    price: 1500,
    delprice: 1500,
    percent: '',
    pricedetail: '',
    category: 'bottle',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product25_d01.jpg',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-12-04',

    viewCount: 1160
  },
  {
    id: 'product26',
    image: process.env.PUBLIC_URL + '/assets/product/product26.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product26.webp',
    ],
    title: '링티 중형 소핑백 (올케어 3박스 or 테라티 3박스 사이즈)',
    smalltitle: '덱스트/테라티/올케어/패스메이트를 담을 수 있는 크기입니다. (250x110x250(mm))',
    price: 2000,
    delprice: 2000,
    pricedetail: '',
    percent: '',
    category: 'bottle',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product26_d01.webp',
    ],
    isBest: false,
    isNew: false,

    viewCount: 880
  },
  {
    id: 'product27',
    image: process.env.PUBLIC_URL + '/assets/product/product27.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product27.webp',
    ],
    title: '500mL 사각 보틀',
    smalltitle: '500mL 링티 전용 보틀',
    price: 4500,
    delprice: 10000,
    pricedetail: '55%',
    percent: '55%',
    category: 'bottle',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product27_d01.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-09-04',

    viewCount: 1240,
  },
  {
    id: 'product28',
    image: process.env.PUBLIC_URL + '/assets/product/product28.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product28.webp',
    ],
    title: '500mL 원형 보틀',
    smalltitle: '500mL 링티 전용보틀',
    price: 3500,
    delprice: 9000,
    pricedetail: '61%',
    percent: '61%',
    category: 'bottle',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product28_d01.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-09-09',

    viewCount: 930
  },
  {
    id: 'product29',
    image: process.env.PUBLIC_URL + '/assets/product/product29.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product29.webp',
    ],
    title: '300mL 링티 아이 보틀',
    smalltitle: '링티 아이 전용 프리미엄 보틀',
    price: 5000,
    delprice: 10000,
    pricedetail: '50%',
    percent: '50%',
    category: ['ringtiI', 'bottle'],

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product29_d01.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-10-08',

    viewCount: 1220
  },
  {
    id: 'product30',
    image: process.env.PUBLIC_URL + '/assets/product/product30.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product30.webp',
    ],
    title: '300mL 고소틴 보틀 (원형)',
    smalltitle: '고소틴 전용 보틀',
    price: 3000,
    delprice: 8000,
    pricedetail: '62%',
    percent: '62%',
    category: ['gosotin', 'bottle'],

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product30_d01.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-09-10'
  },
  {
    id: 'product31',
    image: process.env.PUBLIC_URL + '/assets/product/product31.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product31.webp',
    ],
    title: '300mL 라잇티 보틀 (원형)',
    smalltitle: '라잇티 전용 보틀',
    price: 3500,
    delprice: 8500,
    pricedetail: '58%',
    percent: '58%',
    category: ['light', 'bottle'],

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product31_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product31_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product31_d03.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-11-06',

    viewCount: 910
  },
  {
    id: 'product32',
    image: process.env.PUBLIC_URL + '/assets/product/product32.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product32.webp',
    ],
    title: '500mL 스포츠 보틀',
    smalltitle: '링티의 프리미엄 스포츠 보틀',
    price: 29000,
    delprice: 35000,
    percent: '17%',
    pricedetail: '17%',
    category: 'bottle',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product32_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product32_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product32_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product32_d04.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-11-05',

    viewCount: 900
  },
  {
    id: 'product33',
    image: process.env.PUBLIC_URL + '/assets/product/product33.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product33.webp',
      process.env.PUBLIC_URL + '/assets/product/product43.webp',
      process.env.PUBLIC_URL + '/assets/product/product21.webp',
    ],
    title: '링티 레몬라이트 + 애플라이트 500mL 48개입',
    smalltitle: '체지방 관리까지 되는 건강 제로음료',
    price: 59900,
    delprice: 153600,
    percent: '61%',
    pricedetail: '61% / 병당 1,248원',
    category: 'lemonapple',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product14_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product33_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d13.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d14.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d15.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d16.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2025-01-05',

    viewCount: 1040
  },
  {
    id: 'product34',
    image: process.env.PUBLIC_URL + '/assets/product/product34.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product34.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_04.webp',
    ],
    title: '테라티 2박스 (60회분) + 쇼핑백 증정',
    smalltitle: '목 케어를 위한 완벽한 건강 루틴',
    price: 35900,
    delprice: 70000,
    percent: '48%',
    pricedetail: '48% / 박스당 17,950원',
    category: 'terathy',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product01_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d09.webp',

      process.env.PUBLIC_URL + '/assets/product/product22_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d10.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product22_d11.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2025-01-30',

    viewCount: 1090
  },
  {
    id: 'product35',
    image: process.env.PUBLIC_URL + '/assets/product/product35.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product35.webp',
    ],
    title: '리커버리 기어 샤인머스캣라임맛 (1.5L X 12PET)',
    smalltitle: '링티가 만든 리커버리기어, 수분! 그 이상이 필요할때',
    price: 26900,
    delprice: 60000,
    percent: '55%',
    pricedetail: '55% / 병당 2,242원',
    category: 'recoverygear',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product35_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d09.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d10.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2025-02-21',
  },
  {
    id: 'product36',
    image: process.env.PUBLIC_URL + '/assets/product/product36.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product36.webp',
    ],
    title: '리커버리 기어 자몽오렌지맛 (1.5L X 12PET)',
    smalltitle: '링티가 만든 리커버리기어, 수분! 그 이상이 필요할 때',
    price: 26900,
    delprice: 60000,
    percent: '55%',
    pricedetail: '55% / 병당 2,242원',
    category: 'recoverygear',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product36_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d10.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d11.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2025-02-20',

    viewCount: 890
  },
  {
    id: 'product37',
    image: process.env.PUBLIC_URL + '/assets/product/product37.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product37.webp',
      process.env.PUBLIC_URL + '/assets/product/product37_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product37_02.webp',
    ],
    title: '리커버리 기어 샤인머스캣맛 (500mL X 24PET)',
    smalltitle: '링티가 만든 리커버리기어, 수분! 그 이상이 필요할때',
    price: 27900,
    delprice: 69600,
    percent: '59%',
    pricedetail: '59% / 병당 1,163원',
    category: 'recoverygear',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product35_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d09.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product35_d10.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2025-02-22',

    viewCount: 980
  },
  {
    id: 'product38',
    image: process.env.PUBLIC_URL + '/assets/product/product38.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product38.webp',
      process.env.PUBLIC_URL + '/assets/product/product38_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product38_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product38_03.webp',
    ],
    title: '리커버리 기어 자몽오렌지맛 (500mL X 24PET)',
    smalltitle: '링티가 만든 리커버리기어, 수분! 그 이상이 필요할때',
    price: 27900,
    delprice: 69600,
    percent: '59%',
    pricedetail: '59% / 박스당 1,163원',
    category: 'recoverygear',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product36_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d10.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product36_d11.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2025-02-23',
  },
  {
    id: 'product39',
    image: process.env.PUBLIC_URL + '/assets/product/product39.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product39.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product24_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_03.webp',
    ],
    title: '링티 나잇티 선물세트 (240mL X 12PET)',
    smalltitle: '편안한 밤을 위한 블렌딩 티',
    price: 18900,
    delprice: 34800,
    percent: '45%',
    pricedetail: '45% / 병당 1,575원',
    category: 'nightie',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product01_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d09.webp',

      process.env.PUBLIC_URL + '/assets/product/product23_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d13.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d14.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d15.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2025-03-20',

    viewCount: 1100
  },
  {
    id: 'product40',
    image: process.env.PUBLIC_URL + '/assets/product/product40.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product40.webp',
    ],
    title: '덱스트 에너지 젤',
    smalltitle: '국가대표 에너지 젤',
    price: 15900,
    delprice: 27900,
    percent: '43%',
    pricedetail: '43% / 박스당 14,950원 ~ ',
    category: 'dext',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product40_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d11.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d12.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2025-04-07',

    viewCount: 950
  },
  {
    id: 'product41',
    image: process.env.PUBLIC_URL + '/assets/product/product41.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product41.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_04.webp',
    ],
    title: '카페 링티 드 실론',
    smalltitle: '홍차와 커피의 완벽한 밸런스',
    price: 20900,
    delprice: 35000,
    percent: '40%',
    pricedetail: '40% / 박스당 16,980원 ~ ',
    category: 'ceylon',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product41_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_d07.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_d08.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2024-11-13',

    viewCount: 970
  },
  {
    id: 'product42',
    image: process.env.PUBLIC_URL + '/assets/product/product42.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product42.webp',
    ],
    title: '링티 애플라이트 (1L X 12PET)',
    smalltitle: '체지방 관리까지 되는 건강 제로음료',
    price: 23900,
    delprice: 47760,
    percent: '49%',
    pricedetail: '49% / 병당 1,992원',
    category: 'lemonapple',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product21_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d12.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product21_d13.webp',
    ],
    isBest: true,
    isNew: false,
  },
  {
    id: 'product43',
    image: process.env.PUBLIC_URL + '/assets/product/product43.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product43.webp',
    ],
    title: '링티 레몬라이트 (1L X 12PET)',
    smalltitle: '체지방 관리까지 되는 건강 제로음료',
    price: 23900,
    delprice: 47760,
    percent: '49%',
    pricedetail: '49% / 박스당 1,992원',
    category: 'lemonapple',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product14_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d13.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d14.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d15.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d16.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product14_d17.webp',
    ],
    isBest: true,
    isNew: true,

    newDate: '2024-11-18',

    viewCount: 920
  },
  {
    id: 'product44',
    image: process.env.PUBLIC_URL + '/assets/product/product44.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product44.webp',
      process.env.PUBLIC_URL + '/assets/product/product44_01.webp',
    ],
    title: '링티 모닝티 240mL',
    smalltitle: '가벼운 아침을 위한 V라인 티',
    price: 34900,
    delprice: 69600,
    percent: '49%',
    pricedetail: '49% / 병당 1,100원 ~ ',
    category: 'morningtea',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product44_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product44_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product44_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product44_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product44_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product44_d06.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product44_d07.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2025-05-25',

    viewCount: 990
  },
  {
    id: 'product45',
    image: process.env.PUBLIC_URL + '/assets/product/product45.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product45.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_03.webp',
    ],
    title: '[추가 증정] 고소밀 2박스 + 1박스 / 4박스 + 2박스',
    smalltitle: '19가지 곡물로 만든 쉐이크',
    price: 42000,
    delprice: 56000,
    percent: '25%',
    pricedetail: '25% / 박스당 13,834원 ~ ',
    category: 'gosomil',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product11_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d09.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product11_d11.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2025-06-01',
  },
  {
    id: 'product46',
    image: process.env.PUBLIC_URL + '/assets/product/product46.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product46.webp',
    ],
    title: '링티 액티브 프로',
    smalltitle: '멀티비타민 미네랄 13종',
    price: 34000,
    delprice: 37900,
    percent: '10%',
    pricedetail: '10% / 박스당 22,375원 ~ ',
    category: 'activepro',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product46_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product46_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product46_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product46_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product46_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product46_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product46_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product46_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product46_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product46_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product46_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product46_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product46_d13.webp',
      process.env.PUBLIC_URL + '/assets/product/product46_d14.webp',
      process.env.PUBLIC_URL + '/assets/product/product46_d15.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product46_d16.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2025-07-05',

    viewCount: 900
  },
  {
    id: 'product47',
    image: process.env.PUBLIC_URL + '/assets/product/product47.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product47.webp',
      process.env.PUBLIC_URL + '/assets/product/product47_01.webp',
    ],
    title: '링티 회복 선물세트 (레몬맛 1박스 + 복숭아맛 1박스 + 원형보틀 구성) + 쇼핑백(M) 1개',
    smalltitle: '링티 베스트 구성',
    price: 35900,
    delprice: 60000,
    percent: '45%',
    pricedetail: '45%',
    category: 'origainal',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product01_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d09.webp',

      process.env.PUBLIC_URL + '/assets/product/product47_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product47_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product47_d03.webp',

      process.env.PUBLIC_URL + '/assets/product/product01_d16.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d17.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d18.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d21.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d22.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d23.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2025-07-16',

    viewCount: 1050
  },
  {
    id: 'product48',
    image: process.env.PUBLIC_URL + '/assets/product/product48.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product48.webp',
    ],
    title: '링티 나잇티 & 모닝티 (240mL X 48PET)',
    smalltitle: '개운한 아침과 편안한 밤을 챙기는 블렌딩 티',
    price: 58800,
    delprice: 139200,
    percent: '57%',
    pricedetail: '57% / 박스당 1,225원 ~ ',
    category: ['nightie', 'morningtea'],

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product48_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product44_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product44_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product44_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product44_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product44_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product44_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d11.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product44_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product23_d15.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2025-09-20',

    viewCount: 870
  },
  {
    id: 'product49',
    image: process.env.PUBLIC_URL + '/assets/product/product49.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product06_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_04.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_05.webp',
    ],
    title: '[수능 대비 기획전] [최대 71% 할인] 패스메이트',
    smalltitle: '기억력 기능성 건강기능식품',
    price: 24900,
    delprice: 80000,
    percent: '68%',
    pricedetail: '68% / 박스당 11,225원 ~ ',
    category: 'passmate',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product49_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_d05.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product06_d06.webp',
    ],
    isBest: false,
    isNew: true,

    newDate: '2025-10-27',
  },
  {
    id: 'product50',
    image: process.env.PUBLIC_URL + '/assets/product/product50.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product50.webp',
    ],
    title: '[첫 구매 해택] 링티 오리지널 / 레몬맛 1박스 (10회분)',
    smalltitle: '의사가 만든 회복 솔루션',
    price: 9900,
    delprice: 30000,
    percent: '67%',
    pricedetail: '67% / ID당 1개 구매 가능',
    category: 'origainal',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product01_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d13.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d14.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d15.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d16.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d17.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d18.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d19.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d20.webp',
      process.env.PUBLIC_URL + '/assets/detail05.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d21.webp',
    ],
    isBest: false,
    isNew: false,
  },
  {
    id: 'product51',
    image: process.env.PUBLIC_URL + '/assets/product/product51.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product51.webp',
    ],
    title: '[첫 구매 해택] 링티 오리지널 / 복숭아맛 1박스 (10회분)',
    smalltitle: '기억력 기능성 건강기능식품',
    price: 9900,
    delprice: 80000,
    percent: '67%',
    pricedetail: '67% / ID당 1개 구매 가능',
    category: 'origainal',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product01_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d13.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d14.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d15.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d16.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d17.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d18.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d19.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d20.webp',
      process.env.PUBLIC_URL + '/assets/detail05.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d22.webp',
    ],
    isBest: false,
    isNew: false,
  },
  {
    id: 'product52',
    image: process.env.PUBLIC_URL + '/assets/product/product52.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product52.webp',
    ],
    title: '[첫 구매 해택] 링티 오리지널 / 샤인머스캣맛 1박스 (10회분)',
    smalltitle: '기억력 기능성 건강기능식품',
    price: 9900,
    delprice: 30000,
    percent: '67%',
    pricedetail: '67% / ID당 1개 구매 가능',
    category: 'origainal',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product01_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d13.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d14.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d15.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d16.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d17.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d18.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d19.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d20.webp',
      process.env.PUBLIC_URL + '/assets/detail05.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product01_d23.webp',
    ],
    isBest: false,
    isNew: false,
  },
  {
    id: 'product53',
    image: process.env.PUBLIC_URL + '/assets/product/product53.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product41.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_04.webp',
    ],
    title: '[첫 구매 해택] 카페 링티 드 실론 (10회분, 홍차커피맛)',
    smalltitle: '홍차와 커피의 완벽한 밸런스',
    price: 13900,
    delprice: 35000,
    percent: '',
    pricedetail: '로그인 후 ID당 1개 구매 가능',
    category: 'ceylon',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product41_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_d08.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product41_d09.webp',
    ],
    isBest: false,
    isNew: false,
  },
  {
    id: 'product54',
    image: process.env.PUBLIC_URL + '/assets/product/product54.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product02_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_03.webp',
    ],
    title: '[첫 구매 해택] 링티 수분콜라겐 1박스 (10회분, 블러드오렌지맛)',
    smalltitle: '저분자 콜라겐 흡수 솔루션',
    price: 10900,
    delprice: 35000,
    percent: '68%',
    pricedetail: '68% / ID당 1개 구매 가능',
    category: 'collagen',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product02_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d11.webp',
      process.env.PUBLIC_URL + '/assets/detail05.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product02_d12.webp',
    ],
    isBest: false,
    isNew: false,
  },
  {
    id: 'product55',
    image: process.env.PUBLIC_URL + '/assets/product/product55.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product03_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_03.webp',
    ],
    title: '[첫 구매 해택] 링티 닷티 1박스 (14회분)',
    smalltitle: '체지방 관리 건강기능성',
    price: 12900,
    delprice: 35000,
    percent: '63%',
    pricedetail: '63% / ID당 1개 구매 가능',
    category: 'dot',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product03_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d11.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d12.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d13.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d14.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product03_d15.webp',
    ],
    isBest: false,
    isNew: false,
  },
  {
    id: 'product56',
    image: process.env.PUBLIC_URL + '/assets/product/product56.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product10.webp',
    ],
    title: '[첫 구매 해택] 고소틴 1박스 (7포입)',
    smalltitle: '맛있는 식물성 단백질',
    price: 12900,
    delprice: 35000,
    percent: '63%',
    pricedetail: '63% / ID당 1개 구매 가능',
    category: 'gosotin',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product09_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d11.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_d12.webp',
    ],
    isBest: false,
    isNew: false,
  },
  {
    id: 'product57',
    image: process.env.PUBLIC_URL + '/assets/product/product57.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product13.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_04.webp',
    ],
    title: '[첫 구매 해택] 포커스카페인 환 1박스 (10포입, 은은한 초코향)',
    smalltitle: '간편한 공부 카페인',
    price: 13400,
    delprice: 30000,
    percent: '55%',
    pricedetail: '55% / ID당 1개 구매 가능',
    category: 'focus',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product13_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d08.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_d09.webp',
    ],
    isBest: false,
    isNew: false,
  },
  {
    id: 'product58',
    image: process.env.PUBLIC_URL + '/assets/product/product58.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product12.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_03.webp',
    ],
    title: '[첫 구매 해택] 링티 라잇티 1박스 (14회분, 레몬녹차맛)',
    smalltitle: '식후 혈당상승 억제, 배변활동 원활 기능성 원료 함유',
    price: 11900,
    delprice: 30000,
    percent: '60%',
    pricedetail: '60% / ID당 1개 구매 가능',
    category: 'light',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product12_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d10.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product12_d11.webp',
    ],
    isBest: false,
    isNew: false,
  },
  {
    id: 'product59',
    image: process.env.PUBLIC_URL + '/assets/product/product59.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product59.webp',
    ],
    title: '[첫 구매 해택] 덱스트 에너지 젤 1박스 (10회분, 청사과맛)',
    smalltitle: '식후 혈당상승 억제, 배변활동 원활 기능성 원료 함유',
    price: 13900,
    delprice: 27900,
    percent: '50%',
    pricedetail: '50% / ID당 1개 구매 가능',
    category: 'dext',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product40_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d11.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product40_d12.webp',
    ],
    isBest: false,
    isNew: false,
  },
  {
    id: 'product60',
    image: process.env.PUBLIC_URL + '/assets/product/product60.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product60.webp',
    ],
    title: '링티 쿨 가드 매실에이드 1박스 (30회분, 매실에이드맛)',
    smalltitle: '기업전용 상품',
    price: '판매가 별도 문의',
    delprice: '',
    pricedetail: '',
    percent: '',
    category: 'pharmacy',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product60_d01.webp',
    ],
    isBest: false,
    isNew: false,
  },
  {
    id: 'product61',
    image: process.env.PUBLIC_URL + '/assets/product/product61.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product61.webp',
    ],
    title: '링티 쿨 가드 레몬에이드 1박스 (30회분, 매실에이드맛)',
    smalltitle: '기업전용 상품',
    price: '판매가 별도 문의',
    delprice: '',
    pricedetail: '',
    percent: '',
    category: 'pharmacy',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product61_d01.webp',
    ],
    isBest: false,
    isNew: false,
  },
  {
    id: 'product62',
    image: process.env.PUBLIC_URL + '/assets/product/product62.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product.webp',
    ],
    title: '[약국 전용상품] 링티 플러스 활력 1박스 (10회분, 레몬맛)',
    smalltitle: '약국 전용 상품',
    price: '약국 내 별도 안내',
    delprice: '',
    pricedetail: '',
    percent: '',
    category: 'pharmacy',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product62_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product62_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product62_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product62_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product62_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product62_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product62_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product62_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product62_d09.webp',
      process.env.PUBLIC_URL + '/assets/product/product62_d10.webp',
      process.env.PUBLIC_URL + '/assets/product/product62_d11.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product62_d12.webp',
    ],
    isBest: false,
    isNew: false,
  },
  {
    id: 'product63',
    image: process.env.PUBLIC_URL + '/assets/product/product63.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product63.webp',
    ],
    title: '[약국 전용상품] 링티 에이비오 ABO 1박스 (10회분, 포도맛)',
    smalltitle: '약국 전용 상품',
    price: '약국 내 별도 안내',
    delprice: '',
    pricedetail: '',
    percent: '',
    category: 'pharmacy',

    detailInfo: [
      process.env.PUBLIC_URL + '/assets/product/product63_d01.webp',
      process.env.PUBLIC_URL + '/assets/product/product63_d02.webp',
      process.env.PUBLIC_URL + '/assets/product/product63_d03.webp',
      process.env.PUBLIC_URL + '/assets/product/product63_d04.webp',
      process.env.PUBLIC_URL + '/assets/product/product63_d05.webp',
      process.env.PUBLIC_URL + '/assets/product/product63_d06.webp',
      process.env.PUBLIC_URL + '/assets/product/product63_d07.webp',
      process.env.PUBLIC_URL + '/assets/product/product63_d08.webp',
      process.env.PUBLIC_URL + '/assets/product/product63_d09.webp',
      process.env.PUBLIC_URL + '/assets/detail06.webp',
      process.env.PUBLIC_URL + '/assets/product/product63_d10.webp',
    ],
    isBest: false,
    isNew: false,
  },

]

const tabData = {

  recovery: {
    tabs: [
      {
        id: 'origainal',
        name: '링티',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab01.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet01.png'
      },
      {
        id: 'ceylon',
        name: '카페 링티 드 실론',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab02.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet02.png'
      },
      {
        id: 'kid',
        name: '링티 아이',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab03.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet03.png'
      }
    ]
  },
  diet: {
    tabs: [
      {
        id: 'collagen',
        name: '링티 수분 콜라겐',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab04.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet04.png'
      },
      {
        id: 'dot',
        name: '닷티',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab05.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet05.png'
      },
      {
        id: 'light',
        name: '라잇티',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab06.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet06.png'
      }
    ]
  },
  vitamin: {
    tabs: [
      {
        id: 'allcare',
        name: '링티 올케어',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab07.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet07.png'
      },
      {
        id: 'pass',
        name: '패스메이트',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab08.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet08.png'
      }
    ]
  },
  sleep: {
    tabs: [
      {
        id: 'terathy',
        name: '테라티',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab09.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet09.png'
      },
      {
        id: 'nightie',
        name: '나잇티',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab10.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet10.png'
      }
    ]
  },
  protein: {
    tabs: [
      {
        id: 'impact',
        name: '임팩트 유산균',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab11.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet11.png'
      },
      {
        id: 'gosotin',
        name: '고소틴',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab12.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet12.png'
      }
    ]
  },
  energy: {
    tabs: [
      {
        id: 'synergy',
        name: '씨너지 에너지 드링크',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab13.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet13.png'
      },
      {
        id: 'dext',
        name: '덱스트 에너지젤',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab14.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet14.png'
      },
      {
        id: 'focus',
        name: '포커스카페인 환',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab15.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet15.png'
      },
    ]
  },
  health: {
    tabs: [
      {
        id: 'gear',
        name: '리커버리 기어',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab16.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet16.png'
      },
      {
        id: 'lemonapple',
        name: '레몬라이트 & 애플라이트',
        image: process.env.PUBLIC_URL + '/assets/tabImg/tab17.png',
        sheet: process.env.PUBLIC_URL + '/assets/tabImg/sheet17.png'
      }
    ]
  }
}

const eventInfo = [
  {
    id: 'event01',
    image: process.env.PUBLIC_URL + '/assets/event/event01.jpg',
    name: '송편 완성하시고 적립금 5만원과 선물세트 받아가세요!',
    day: '9.8(화) ~ 9.21(월)'
  },
  {
    id: 'event02',
    image: process.env.PUBLIC_URL + '/assets/event/event02.jpg',
    name: '추석 감사 세일, 온 가족이 함께 즐기는 추석 해택!',
    day: '8.25(화) ~ 9.28(화)'
  },
  {
    id: 'event03',
    image: process.env.PUBLIC_URL + '/assets/event/event03.jpg',
    name: '링티몰 단독 최저가가 아니면 차액의 2배 보상해드립니다!',
    day: '상시진행'
  },
  {
    id: 'event04',
    image: process.env.PUBLIC_URL + '/assets/event/event04.jpg',
    name: '링티 오픈채팅방 참여하고, 특가 소식을 가장 먼저 만나보세요!',
    day: '상시진행'
  },
  {
    id: 'event05',
    image: process.env.PUBLIC_URL + '/assets/event/event05.jpg',
    name: '링티 초성퀴즈 이벤트',
    day: '9.25(목) ~ 이벤트 종료 시까지'
  },
  {
    id: 'event06',
    image: process.env.PUBLIC_URL + '/assets/event/event06.jpg',
    name: '링티 베스트 리뷰 이벤트',
    day: '2.19(수) ~ 이벤트 종료 시까지'
  },
  {
    id: 'event07',
    image: process.env.PUBLIC_URL + '/assets/event/event07.jpg',
    name: '링티 회원 고객님께만 드리는 첫구매 해택!',
    day: '상시진행'
  },
  {
    id: 'event08',
    image: process.env.PUBLIC_URL + '/assets/event/event08.jpeg',
    name: '마케팅 수신 동의하고 적립금 받으세요!',
    day: '22.8.2(화) ~ 이벤트 종료 시까지'
  }
]

const allProduct = [
  {
    id: 'all',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem01.jpg'
    },
  },
  {
    id: 'origainal',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem03.jpg'
    },
  },
  {
    id: 'ceylon',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem04.jpg'
    },
  },
  {
    id: 'collagen',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem05.jpg'
    },
  },
  {
    id: 'dot',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem06.jpg'
    },
  },
  {
    id: 'activepro',
    topImg: {
      image: ''
    },
  },
  {
    id: 'terathy',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem07.jpg'
    },
  },
  {
    id: 'nightie',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem08.jpg'
    },
  },
  {
    id: 'morningtea',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem09.jpg'
    },
  },
  {
    id: 'ringtiI',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem10.jpg'
    },
  },
  {
    id: 'allcare',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem11.jpg'
    },
  },
  {
    id: 'passmate',
    topImg: {
      image: ''
    },
  },
  {
    id: 'gosotin',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem12.jpg'
    },
  },
  {
    id: 'gosomil',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem13.jpg'
    },
  },
  {
    id: 'focus',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem14.jpg'
    },
  },
  {
    id: 'light',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem15.jpg'
    },
  },
  {
    id: 'dext',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem16.jpg'
    },
  },
  {
    id: 'synergy',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem17.jpg'
    },
  },
  {
    id: 'lemonapple',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem18.jpg'
    },
  },
  {
    id: 'recoverygear',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem19.jpg'
    },
  },
  {
    id: 'impact',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem20.jpg'
    },
  },
  {
    id: 'pharmacy',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem21.jpg'
    },
  },
  {
    id: 'bottle',
    topImg: {
      image: process.env.PUBLIC_URL + '/assets/allItem/allItem22.jpg'
    },
  },
]

const cartAddItem = [
  {
    id: 'cartAddItem01',
    name: '고소틴 3포 (3회분)',
    persent: '20%',
    price: 7900,
    image: process.env.PUBLIC_URL + '/assets/cart_img01.webp'
  },
  {
    id: 'cartAddItem02',
    name: '임팩트 유산균 프리미엄 1박스(30회분, 블루베리요거트맛)',
    persent: '20%',
    price: 9900,
    image: process.env.PUBLIC_URL + '/assets/cart_img02.webp'
  },
  {
    id: 'cartAddItem03',
    name: '포커스 카페인 환 1박스(10포입, 은은한 초코향)',
    persent: '20%',
    price: 13900,
    image: process.env.PUBLIC_URL + '/assets/cart_img03.webp'
  },
]

const qanda = [
  {
    id: 1,
    writer: 'bl***',
    isSecret: true,
    contents: '기타',
    date: '2026-07-19'
  },
  {
    id: 2,
    writer: 'sil***',
    isSecret: true,
    contents: '기타',
    date: '2026-07-19'
  },
  {
    id: 3,
    writer: 'st***',
    isSecret: true,
    contents: '기타',
    date: '2026-07-19'
  },
  {
    id: 4,
    writer: 'luc***',
    isSecret: true,
    contents: '기타',
    date: '2026-07-19'
  },
  {
    id: 5,
    writer: 'la***',
    isSecret: true,
    contents: '기타',
    date: '2026-07-19'
  },
]

const reviews = [
  /*product01*/
  {
    reviewId: 'rev01',
    productId: ['product01', 'product04', 'product47','product50', 'product51', 'product52'],
    userId: 'u125***',
    rating: 5,
    content: '밤샘 작업을 많이해서 누적된 피로감을 달고 살았는데 링티를 마시고부터 피로감이 덜했어요. 병원가서 링거 수액도 맞고 해보았지만 즉각 효과도 없었는데, 링티는 시원하게해서 마시면 정말 수분 보충에는 너무 완벽한 것 같습니다.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro01_re01.jpeg']
  },
  {
    reviewId: 'rev02',
    productId: ['product01', 'product04', 'product47','product50', 'product51', 'product52'],
    userId: '****',
    rating: 5,
    content: '한달 동안 마셔본 결과, 링티는 단순한 맛있는 음료라기보다 수분보충 + 피로회복 + 숙취해소에 확실한 도움이 되는 제품이었습니다. 앞으로도 집에 쟁여놓고 상황에 맞게 계속 이용할 것 같네요.',
    createdAt: '2026-08-11',
    images: [process.env.PUBLIC_URL + '/assets/review/pro01_re02.jpg']
  },
  {
    reviewId: 'rev03',
    productId: ['product01', 'product04', 'product47','product50', 'product51', 'product52'],
    userId: 'tpfu***',
    rating: 5,
    content: '친구가 추천해줘서 먹었는데 피로감이 줄어든것 같아서 바로 구매했어요. 대학원생들에게는 꿀템이 될 것같아요',
    createdAt: '2026-08-04',
    images: [process.env.PUBLIC_URL + '/assets/review/pro01_re03.jpg']
  },
  {
    reviewId: 'rev04',
    productId: ['product01', 'product04', 'product47','product50', 'product51', 'product52'],
    userId: 'adf***',
    rating: 5,
    content: '너무 아퍼서 먹지도 못하고 링거로 생활하다가 광고보고 사먹어 봤는데 힘을 주더라고요~ 밥도 조금씩 먹게 되고 너무너무 도움이 되었어요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro01_re04.webp']
  },
  {
    reviewId: 'rev05',
    productId: ['product01', 'product04', 'product47','product50', 'product51', 'product52'],
    userId: 'qw***',
    rating: 5,
    content: '밤샘 작업을 많이해서 누적된 피로감을 달고 살았는데 링티를 마시고부터 피로감이 덜했어요. 병원가서 링거 수액도 맞고 해보았지만 즉각 효과도 없었는데, 링티는 시원하게해서 마시면 정말 수분 보충에는 너무 완벽한 것 같습니다.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro01_re05.webp']
  },
  /*product02*/
  {
    reviewId: 'rev06',
    productId: ['product02','product16' ,'product54'],
    userId: '3d***',
    rating: 5,
    content: '지난번 구입 후 두번째 구입입니다. 항상 물을 먹어도 수분이 채워지지 않는 느낌이였고, 또 많이 마시면 화장실만 자주 갈 뿐 수분이 채워진단 느낌이 없었는데 링티를 마시고 몸이 촉촉한 느낌이 듭니다. 특히 이 콜라겐 제품이 더욱 그렇습니다.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro02_re01.webp']
  },
  {
    reviewId: 'rev07',
    productId: ['product02','product16' ,'product54'],
    userId: 'uc***',
    rating: 5,
    content: '하루종일 건조한 사무실에서 일하다보니 피부가 푸석거리는데 링티 콜라겐의 효과를 믿고 구매해 봤어요!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro02_re02.jpg']
  },
  {
    reviewId: 'rev08',
    productId: ['product02','product16' ,'product54'],
    userId: 'df***',
    rating: 5,
    content: '지인이 링티 먹고 있어서 몇개 주더라고요. 한번 먹고 너무 좋아서 저도 주문했지요. 저는 나이가 50이라 콜라겐도 보충하고 싶어서 수분 콜라겐으로 주문했어요 맛도 좋고 수분도 채우고 콜라겐도 보충하고 1석3조네요.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro02_re03.jpg']
  },
  {
    reviewId: 'rev09',
    productId: ['product02','product16' ,'product54'],
    userId: 'zd***',
    rating: 5,
    content: '레몬맛 링티만 먹다가 콜라겐까지 같이 먹을 수 있는 오렌지맛 링티에 더 매력을 느꼈어요. 피부도 덜 늙는 느낌도 있고... 바꾸길 잘 한것 같아요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro02_re04.jpg']
  },
  /*product03*/
  {
    reviewId: 'rev10',
    productId: ['product03', 'product05'],
    userId: '23***',
    rating: 5,
    content: '지인이 닷티로 체지방 감량에 성공했다하셔서 주문했어요. 저도 효과가 있기를... 맛은 있어요ㅎ',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro03_re02.webp']
  },
  {
    reviewId: 'rev11',
    productId: ['product03', 'product05'],
    userId: '23***',
    rating: 5,
    content: '지인 추천으로 먹기 시작했어요! 원래 운동을 병행하고 있었는데 뱃살은 빠지지 않았거든요. 닷티를 먹기 시작한 후부터 뱃살과 몸의 붓기가 빠지는게 느껴졌어요! 지인들도 살빠졌다고해서 추천해주고 있답니다. 저도 앞으로 꾸준히 구매할 것 같아요!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro03_re03.webp']
  },
  {
    reviewId: 'rev12',
    productId: ['product03', 'product05'],
    userId: '23***',
    rating: 5,
    content: '마른체형이지만 허리라인은 없었지고 아랫배가 나와서 고민이었는데 주 4회 운동할때 물대신 마셨고 마신지 2주정도 지나면서 조금씩 효과를 봤어요. 이런 놀라운 효과를 보고나니 가격부담은 1도 없이 사라졌어요. 재구매는 물론 지인들까지 함께 마시고있습니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro03_re01.webp']
  },
  /*product06*/
  {
    reviewId: 'rev13',
    productId: ['product06','product49'],
    userId: '23***',
    rating: 5,
    content: '절반은 고3아이 둔 동네 엄마한테 선물했는데 너무 좋아하네요~ 안그래도 수능 앞두고 많이 지쳐보여서 걱정됐다고 너무 고마워해서 기분이 다 좋아요~ 저희 집 고2도 먹어보고 괜찮으면 수능 기간동안은 먹여보려구요 ',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro06_re01.webp']
  },
  {
    reviewId: 'rev14',
    productId: ['product06','product49'],
    userId: '23***',
    rating: 5,
    content: '진짜 달라요!!! 아이가 고3 되고부터 아침에 일어나지 못해서 늘 전쟁이였는데... 오늘 아침에는 먼저 일어나서 학교갈 준비를 하더라고요... 효과가 있구나 싶었습니다.!!! 기억력에 도움이 된다니 이것도 효과가 있으면 좋겠네요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro06_re02.webp']
  },
  {
    reviewId: 'rev15',
    productId: ['product06','product49'],
    userId: '23***',
    rating: 5,
    content: '아직 효과는 잘 모르겠는데요! 물론 어제 받고 어제 오늘 이틀 먹어서 제가 카페인이든 비타민이든 뭔가 튼튼해진거 같다~ 평소보다 뭔가 괜찮은거 같다~ 이런거 잘 모르긴해요ㅋㅋㅋ 눈관리 엉뚱이 에너지 관리등 여러 복합적인거 같아 신기해서 구매해봤는데 뭐지~ 싶은 생각 들면 다시 구매 해보려구요! 배송 너무나 빨라서 좋아요! 부디 좋은 결과 있기를~',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro06_re03.webp']
  },
  {
    reviewId: 'rev16',
    productId: ['product06','product49'],
    userId: '23***',
    rating: 5,
    content: '링티 제품들은 평소에 전반적으로 신뢰핟 보니, 이번에 영양제도 큰 고민 없이 선택하게 되었어요. 아이 시험기간 대비해서 한달 분 먼저 주문해봤는데, 기대 이상이라 정말 만족합니다. 도착하자마자 아이에게 하나 먹여봤는데 액상 맛도 괜찮다며 거부감 없이 잘 먹더라고요. 이런 부분이 가장 중요한 첫 반응부터 좋아서 안심됐어요.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro06_re04.webp']
  },
  {
    reviewId: 'rev17',
    productId: ['product06','product49'],
    userId: '23***',
    rating: 5,
    content: '매일 10시간씩 공부하는 아들한테 사줬는데 아이가 집중력 올라간다며 좋아하네요ㅎ 여러 개 챙기던 것도 하나로 줄여서 훨씬 편해졌어요!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro06_re05.webp']
  },
  /*product07*/
  {
    reviewId: 'rev18',
    productId: ['product07', 'product08'],
    userId: '23***',
    rating: 5,
    content: '전에 아이가 아파서 아무것도 못먹을때 수분보충이라도 하라고 약국 추천으로 링티 아이 먹여봤는데요. 이건 너무 잘먹었던 기억이에요. 아이가 물을 잘먹지않는데 마시는 수액은 잘먹여서 여러가지 먹여봤었고 젤 믿음이 가고 좋아하는건 링티아이여서 박스로 구매했어요! 꾸준히 먹일',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro07_re01.webp']
  },
  {
    reviewId: 'rev19',
    productId: ['product07', 'product08'],
    userId: '23***',
    rating: 5,
    content: '아기가 장며이랑 밥, 물을 잘안먹어서 경구수액이랑 같은 성분이라고 해서 구매했어요~ 그동안 소변기저귀가 안나와서 걱정했는데 링티아이 먹고 소변도 잘 보고 있어요~ 무엇보다 아이가 맛있어해서 종네요! 장염 유행이라는데 추천해요~',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro07_re02.webp']
  },
  {
    reviewId: 'rev20',
    productId: ['product07', 'product08'],
    userId: '23***',
    rating: 5,
    content: '며칠전 큰아이가 많이 아팠거든요. 엔테로바이러스였나ㅠㅠ 여튼 그때 추천받아서 주문하게 된 링티아이예요! 하루 1포씩 타주니 엄청 잘먹어요ㅎ 아이들도 맛있는걸 아는 듯ㅎㅎ 링티 아이 빨대컵도 같이 주문했는데 투명한 병아리 링티 아이녹는것도 잘보이고, 주문하길 넘 잘했네용 올 겨울 링티아이로 감기없이 무탈하게 지나가길!!!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro07_re03.webp']
  },
  {
    reviewId: 'rev21',
    productId: ['product07', 'product08'],
    userId: '23***',
    rating: 5,
    content: '평소에는 물을 안먹는 아이는 아니예요 다만 요즘 장염에 폐렴에 고열을 많이 겪었는데 액체류를 많이 먹게 해서 소변유도하려고해도 힘든지 잘 안먹어서.. 링티아이용도 있는거 보고 구매했어요 약국에 파는 마시는 수액은 맛없는지 안먹더라구요ㅠㅠ(맛보니 진짜 별로였음) 다행히 이건 음료수처럼 잘먹고 나트륨도 있어서 마시는 수액용도로 좋아보여서 만족합니다~ 땀많이 흘리고 뛰놀은 후에도 주려구요 함께 온 빨대보틀도 귀엽고 투명해서 넘 좋아요!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro07_re04.jpg']
  },
  {
    reviewId: 'rev22',
    productId: ['product07', 'product08'],
    userId: '23***',
    rating: 5,
    content: '아이가 물을 너무 안마셔서 몸이 너무 건조하고 비염도 심했어요.. 급기야 비염인지 틱인지 계속 울음소리를 내더라구요.. 이비인후과에선 비염이라 코가 뒤로 넘어가니 그러는거라했고 소아과에선 틱의심이라고 하더라고요.. 여기저기 검색하다보니 비염 아이들에게 음성틱이 잘 나타나는 것 같았고.. 영양제는 물론 기본적으로 수분보충이 충분해야한다는 한의사에 글을보고.. 물을 열심히 먹여보았으나 아이가 제맘처럼 먹어주나요ㅠ한입두입먹고 끝이고 어쩌다 한컵씩 쭉 먹어봐야 화장실을 세번씩 가더라고요. 주위에서 마시는 수액이라도 먹여봐라해서 찾다가 링티가 떠올라 주문해보았습니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro07_re05.jpeg']
  },
  /*product09*/
  {
    reviewId: 'rev23',
    productId: ['product09','product10'],
    userId: '23***',
    rating: 5,
    content: '고소틴 몇번째 재구매인지 모를 정도로 다 먹어가면 사고 하는 사람입니다. 웨이트 운동과 마라톤 즐겨하구요, 단백질 잘 챙겨먹지 않으면 운동 아무리 해도 근성장 힘들기 때문에 보충제를 먹습니다. 고소틴에 정착한 이유는 아무래도 휴대가 간편하고, 단백질의 비린맛이 느껴지지않고 미숫가루와 같은 고소한 맛이기때문이에요. 최근에 헬스 입문한 친구에게도 한 박스 선물해줬습니다.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro09_re01.webp']
  },
  {
    reviewId: 'rev24',
    productId: ['product09','product10'],
    userId: '23***',
    rating: 5,
    content: '단백질 쉐이크만 n년차 먹은 운동러입니다. 정말 많은 종류의 단백질 쉐이크를 먹어왔지만 단연 최고입니다.ㅎㅎㅎ 단쉐특유의 비린맛이 1도 없고 미숫가루먹는 것처럼 고소하고 맛있습니다. 정기 배송신청해야겠습니다ㅎ',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro09_re02.webp']
  },
  {
    reviewId: 'rev25',
    productId: ['product09','product10'],
    userId: '23***',
    rating: 5,
    content: '우리 아들이 운동 다녀와서 꼬박꼬박 챙겨먹는 필수템이 되었습니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro09_re03.webp']
  },
  {
    reviewId: 'rev26',
    productId: ['product09','product10'],
    userId: '23***',
    rating: 5,
    content: '미숫가루 맛 같아요! 잘 먹고 있습니다.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro09_re04.jpg']
  },
  /*product11*/
  {
    reviewId: 'rev27',
    productId: 'product11',
    userId: '23***',
    rating: 5,
    content: '와.. 이거 정말 대박입니다. 고소한 우유에 시리얼 말아먹는 느낌이네요! 딱 흑미볶음이 들어있는게 빨리 눅지지 않을까 걱정했는데 먹는 내내 바삭함이 계속있는 거도 참 신기하고... 진짜 맛있네요. 아침에 시리얼 한그릇 수준으로 든든하고 좋아서 챙여두고 싶어요ㅋㅋ 개인적으로 이 흑미볶음이 더 들어있으면 좋을 것 같아요 오랜만에 넘 만족하는 제품입니다~',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro11_re01.webp']
  },
  {
    reviewId: 'rev28',
    productId: 'product11',
    userId: '23***',
    rating: 5,
    content: '아기보느라 한끼 제대로 챙겨먹지못할때 오늘도 아침겸 점을 고소밀 한팩 먹었더니 든든해졌어요. 6개월 아이 독박육아하느라 밥 챙겨먹을 시간도 없어서 안먹고 넘겼는데 고소밀은 물만 딱 부워서 쉐이킷하면 되기에 간편하고 좋더라고요! 물 어디까지 부워야하는지 선도 잘 되어있어서 너무 편했고 맛도 진짜 최고로 맛있더라고요~ 고소밀 한팩이면 한끼 든든하게 챙길 수 있어서 남편도 출근전에 한팩 먹고 출근하는데 맛있다고하더라고요ㅎ 먹고나니 포만감이 진짜 굳있었습니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro11_re02.webp']
  },
  {
    reviewId: 'rev29',
    productId: 'product11',
    userId: '23***',
    rating: 5,
    content: '안에 들어가있는 흑미볶음이 진짜 맛있네요!! 원래 단백질 쉐이크 보면 안에 들어가있는게 맛없거나 너무 달아서 별로 안좋아하거든요,, 근데 고소밀에 들어있는 흑미볶음 진짜 맛있어요! 바삭바삭하고 담백하고 꽤 넉넉하게 들어있어서 든든하네요!! 아침에 회사가서 그 작은 우유 한팩이랑 타먹으니깐 용량도 딱 맞고 편해요~',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro11_re03.jpg']
  },
  {
    reviewId: 'rev30',
    productId: 'product11',
    userId: '23***',
    rating: 5,
    content: '다이어트하는데 영양성분이 괜찮은거 같아요! 당이랑 탄수화물은 낮고 단백질 함량이 놓아서 아주 굿',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro11_re04.webp']
  },
  /*product12*/
  {
    reviewId: 'rev31',
    productId: 'product12',
    userId: '23***',
    rating: 5,
    content: '붓기에 관심이 많아 보리차,유자차 등등 이것저것 많이 마셔보았는데.. 효과는 물론 있었으나 한약 맛과 숨겨진 호박맛에 오래 마시기 힘들어 여기저기 붓기티 유목민처럼 지내던 중 무더운 여름 시원한 붓기관리 제품을 만났듯 합니다!! 운동하면서 붓기관리까지 할 수 있고, 너무 많은 양의 물은 운동 중 섭취에 불편함이 있어 마시다 버리기 일수였는데 운동하면서 마시기에 저 같은 경우 적당했습니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro12_re01.webp']
  },
  {
    reviewId: 'rev32',
    productId: 'product12',
    userId: '23***',
    rating: 5,
    content: '저는 진짜 효과를 봤습니다. 1박스 사고 거의 다 먹어가서 바로 4박스로 재구매했습니다!! 호과보고 친구들이랑 같이 먹으라고 브라덜샤워에 들고갔어요 사진 예쁘게 찍고 싶은 욕심에 물 500에 두포타서 먹었는데 잔붓기도 싹 빠지고 아주 만족입니다. 게다가 이날 엄청 먹었는데 다음날 몸무게가 그대로더라고요! 화장시롣 잘가고 너무 좋아요 ㅎㅎㅎ 강추입니다.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro12_re02.webp']
  },
  {
    reviewId: 'rev31',
    productId: 'product12',
    userId: '23***',
    rating: 5,
    content: '붓기에 관심이 많아 보리차,유자차 등등 이것저것 많이 마셔보았는데.. 효과는 물론 있었으나 한약 맛과 숨겨진 호박맛에 오래 마시기 힘들어 여기저기 붓기티 유목민처럼 지내던 중 무더운 여름 시원한 붓기관리 제품을 만났듯 합니다!! 운동하면서 붓기관리까지 할 수 있고, 너무 많은 양의 물은 운동 중 섭취에 불편함이 있어 마시다 버리기 일수였는데 운동하면서 마시기에 저 같은 경우 적당했습니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro12_re03.jpg']
  },
  {
    reviewId: 'rev32',
    productId: 'product12',
    userId: '23***',
    rating: 5,
    content: '저는 진짜 효과를 봤습니다. 1박스 사고 거의 다 먹어가서 바로 4박스로 재구매했습니다!! 호과보고 친구들이랑 같이 먹으라고 브라덜샤워에 들고갔어요 사진 예쁘게 찍고 싶은 욕심에 물 500에 두포타서 먹었는데 잔붓기도 싹 빠지고 아주 만족입니다. 게다가 이날 엄청 먹었는데 다음날 몸무게가 그대로더라고요! 화장시롣 잘가고 너무 좋아요 ㅎㅎㅎ 강추입니다.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro12_re04.jpg']
  },
  /*product13*/
  {
    reviewId: 'rev33',
    productId: 'product13',
    userId: '23***',
    rating: 5,
    content: '수험생 아이가 부탁해서 샀습니다. 커피보다 이게 더 효과가 있다네요! 주위 친구들도 많이 먹는 다고 합니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro13_re01.jpeg']
  },
  {
    reviewId: 'rev34',
    productId: 'product13',
    userId: '23***',
    rating: 5,
    content: '고3딸의 필수품. 커피와 에너지음료 대신 매일 먹고 있는 포카환입니다. 정신이 번쩍 들고 집중이 잘된다고 하네요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro13_re02.jpg']
  },
  {
    reviewId: 'rev35',
    productId: 'product13',
    userId: '23***',
    rating: 5,
    content: '재수생이라 간절한 마음으로 시켰는데 먹는 것도 간편하고 맛도 초코향나서 완전 먹을만했어요. 알갱이들로 되어있어어 양 조절이 가능해서 본인에게 알맞게 유동적으로 먹을 수 있다는 점도 매력적이었구여 개별포장 되어있어서 휴대성도 좋고 편리해서 걍 가방에 넣어놨다가 필요하면 먹고 공부해여! 부작용도 없고 간만에 마음에 드는 소비했다 싶었어여 스트레스성 위염을 달고 살아서 위에 무리 가진 않았을까 걱정했는데 ㄹㅇ 멀쩡했삼 공복에 먹어도 괜찮더하구여',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro13_re03.jpg']
  },
  {
    reviewId: 'rev36',
    productId: 'product13',
    userId: '23***',
    rating: 5,
    content: '시험 공부하는 아이를 위해 샀어요. 카페인 들어있는 에너지음료나 커피는 안먹고 싶을때 먹더라구요... ',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro13_re04.jpeg']
  },
  {
    reviewId: 'rev37',
    productId: 'product13',
    userId: '23***',
    rating: 5,
    content: '고3 고1 아들들이 먹고 있습니다. 고3 아들은 음식, 먹는 것에 대한 큰 뜻이 없는 아이인데 주말학교 가면서 다른건 몰라도 환은 꼭 가지고 갑니다. 뭔가 멍해질때 리프레쉬 가능하다하네요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro13_re05.webp']
  },
  /*product14*/
  {
    reviewId: 'rev38',
    productId: 'product14',
    userId: '23***',
    rating: 5,
    content: '생각보다 맛있고 제로 칼로리라 좋네요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro14_re01.jpg']
  },
  {
    reviewId: 'rev39',
    productId: ['product14','product33'],
    userId: '23***',
    rating: 5,
    content: '생각보다 맛도 좋고 가격도 좋아요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro14_re02.webp']
  },
  {
    reviewId: 'rev40',
    productId: ['product14','product33'],
    userId: '23***',
    rating: 5,
    content: '아침에 마시면 하루수분량이 충전되는 느낌도 받고 하루 종일 촉촉해요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro14_re03.webp']
  },
  {
    reviewId: 'rev41',
    productId: ['product14','product33'],
    userId: '23***',
    rating: 5,
    content: '운동 후 갈등 해소에 좋고 건강해지는 느낌?',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro14_re04.webp']
  },
  /*product15*/
  {
    reviewId: 'rev42',
    productId: 'product15',
    userId: '23***',
    rating: 5,
    content: '역시나 적시나 헬스는 못해도 장운동이 정말 좋아합니다. 부모님도 다른 유산균보다 이게 훨씬 좋다고하십니다. 자주 리뷰를 작성하지않지만, 정말 좋은 제품이네요. 블루베리 요거트 맛이 기가 막힙니다.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro15_re01.webp']
  },
  {
    reviewId: 'rev43',
    productId: 'product15',
    userId: '23***',
    rating: 5,
    content: '링티사고 사은품으로 받은걸로 먹어봤는데 아들이 이게 제일 괜찮다고 하네요. 그래서 주문했어요. 다 먹음 또 주문할께요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro15_re02.webp']
  },
  {
    reviewId: 'rev44',
    productId: 'product15',
    userId: '23***',
    rating: 5,
    content: '장이 안좋아 타사 유산균을 먹고 있던 중 링티 구매하면서 유산균 프리미엄을 알게되어 구매했는데 먹기도 편하고 좋은 것 같아요. 특히 저희 어머니가 연세가 있으신데 맛있다면서 잘 드시네요 어머니랑 꾸준히 복용해볼까합니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro15_re03.webp']
  },
  {
    reviewId: 'rev44',
    productId: 'product15',
    userId: '23***',
    rating: 5,
    content: '맛도 좋구 가루로 되어있어서 복용하기 좋아요. 매일 먹고 효과 보고 있는 중입니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro15_re04.webp']
  },
  {
    reviewId: 'rev44',
    productId: 'product15',
    userId: '23***',
    rating: 5,
    content: '블루베리맛이라 일단 호불호갈리는 분유맛 바닐라맛 거부하는 입짧린이들에게 프리패스~! 유산균이라는게 효과가 드라마틱하진않는 단점이 있으나 화장실하난 기가 막히게 가는 소화력은 찐인정',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro15_re05.webp']
  },
  /*product17*/
  {
    reviewId: 'rev45',
    productId: 'product17',
    userId: '23***',
    rating: 5,
    content: '링티 믿고 구매해봅시다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro17_re01.webp']
  },
  {
    reviewId: 'rev46',
    productId: 'product17',
    userId: '23***',
    rating: 5,
    content: '피곤할때 먹으면 맛있어요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro17_re02.webp']
  },
  {
    reviewId: 'rev47',
    productId: 'product17',
    userId: '23***',
    rating: 5,
    content: '네이버에서 싸게 잘사서 만족합니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro17_re03.webp']
  },
  {
    reviewId: 'rev48',
    productId: 'product17',
    userId: '23***',
    rating: 5,
    content: '배송이 빨리와서 별5개 맛은 평범하구, 하나는 좀 부족해요 두개 마시네요! 유통기한은 넉넉하고 캔 아랫부분이 전체적으로 찌그러 졌네요ㅠㅠ 아쉽',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro17_re04.jpg']
  },
  /*product18*/
  {
    reviewId: 'rev49',
    productId: ['product18', 'product19', 'product20'],
    userId: '23***',
    rating: 5,
    content: '요즘 몸도 무겁고 눈꼬리도 자꾸 파르르 떨리고 그래서 종합영양제 찾아봤는데 다 비싸기만 하고 복잡하고 너무 여러알 먹어야 하고...남자들은 그런거 딱 귀찮고 싫은데 링티 브랜드 제품은 딱 핵심적인 광고 표시,성분,알약수,한장에 포장 모든게 맘에 들었어요 일단 3ㅡ4일 먹었는데 다른건 몰라도 눈떨림은 바로 담날부터 멈췄네요 주기적으로 꾸준히 먹어봐야 더 효과 좋을테니 잊지말고 장기복용 해볼께요 ㅎㅎ',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro18_re01.webp']
  },
  {
    reviewId: 'rev50',
    productId: ['product18', 'product19', 'product20'],
    userId: '23***',
    rating: 5,
    content: '부부가  꾸준히  복용하고  있어요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro18_re02.webp']
  },
  {
    reviewId: 'rev51',
    productId: ['product18', 'product19', 'product20'],
    rating: 5,
    content: '저희부부가 꾸준히 잘챙겨 먹고 간편하구 피곤두 없구 너무좋아요  이걸 떨어지면은 계속 주문해요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro18_re03.webp']
  },
  {
    reviewId: 'rev52',
    productId: ['product18', 'product19', 'product20'],
    userId: '23***',
    rating: 5,
    content: '건강을 챙기기도 하고 피곤함이 훨씬 줄었어요~~',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro18_re04.jpeg']
  },
  {
    reviewId: 'rev53',
    productId: ['product18', 'product19', 'product20'],
    userId: '23***',
    rating: 5,
    content: '확실히 먹으면 피로감도 덜해요. 여러개를 따로 먹으면 깜박해서 안먹는 날도 있었는데 한봉지에 하루치 약이 들어있어 간편하게 잘 챙겨먹을 수 있어요...',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro18_re05.webp']
  },
  {
    reviewId: 'rev54',
    productId: ['product18', 'product19', 'product20'],
    userId: '23***',
    rating: 5,
    content: '와이프가 계속 이거 사달라네요 좋습니다~~',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro18_re06.jpg']
  },
  {
    reviewId: 'rev55',
    productId: ['product18', 'product19', 'product20'],
    userId: '23***',
    rating: 5,
    content: 'N 번째 차이지만, 항상 꾸준하게 섭취하니 건강해지는거 같습니다. ㅎ',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro18_re07.webp']
  },
  {
    reviewId: 'rev56',
    productId: ['product18', 'product19', 'product20'],
    userId: '23***',
    rating: 5,
    content: '꾸준히 챙겨먹고 있어요! 회사 서랍에 넣어두고 한포씩 챙겨먹기 좋아요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro18_re08.jpg']
  },
  {
    reviewId: 'rev57',
    productId: ['product18', 'product19', 'product20'],
    userId: '23***',
    rating: 5,
    content: '원래 영양제를 잘 챙겨 먹지 않았는데,,서른을 앞두고 이젠 이렇게 살지 말아야 겠다 싶어 사 보았습니다 뭘 먹어야 할지 굳이 찾지 않아도 된다는 것이 정말정말정말 편하네요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro18_re09.jpg']
  },
  {
    reviewId: 'rev57',
    productId: ['product18', 'product19', 'product20'],
    userId: '23***',
    rating: 5,
    content: 'ㅋㅋㅋㅋ30대가 되니, 체력이 확 꺾인게 느껴져요...필요했는데 딱입니다! 그리고 알약 3개 같이먹어도 불편한거 전혀 없어요. 전에 먹던 비타민은 알이 너무 커서 많이 힘들엇거덩여. 같이 배송온 샘플은 회사 동료한테 전달했다니 너무 좋아하네요~ㅋㅋㅋㅋ',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro18_re10.webp']
  },
  /*product21*/
  {
    reviewId: 'rev54',
    productId: ['product21','product33'],
    userId: '23***',
    rating: 5,
    content: '생각보다 맛도 좋고 가격도 좋아요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro21_re01.webp']
  },
  {
    reviewId: 'rev55',
    productId: ['product21','product33'],
    userId: '23***',
    rating: 5,
    content: '젛아요. 맛있어요.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro21_re02.webp']
  },
  {
    reviewId: 'rev56',
    productId: ['product21','product33'],
    userId: '23***',
    rating: 5,
    content: '운동후 갈증해소에 좋고 건강해지는 느낌?',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro21_re03.webp']
  },
  {
    reviewId: 'rev57',
    productId: ['product21','product33'],
    userId: '23***',
    rating: 5,
    content: '장상탲물건훼손없이문맢배달만족합니다레몬맛 사과맛무가당상품이라서물대신아실우있어좋습니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro21_re04.webp']
  },
  {
    reviewId: 'rev57',
    productId: ['product21','product33'],
    userId: '23***',
    rating: 5,
    content: '겨울에도 딱이에요.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro21_re05.webp']
  },
  /*product22*/
  {
    reviewId: 'rev55',
    productId: ['product22','product34'],
    userId: '23***',
    rating: 5,
    content: '보육교사로서 하루 종일 아이들과 이야기하다 보면 목이 자주 따갑고 건조해지는데, 요즘 이 제품 덕분에 정말 도움이 많이 되고있어요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro22_re02.webp']
  },
  {
    reviewId: 'rev56',
    productId: ['product22','product34'],
    userId: '23***',
    rating: 5,
    content: '직장 동료가 줘서 마셔보고 좋아서 구매했어요. 목 아플때 다소 도움되는 것 같아요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro22_re03.webp']
  },
  {
    reviewId: 'rev57',
    productId: ['product22','product34'],
    userId: '23***',
    rating: 5,
    content: '설교한다고 자주 목을 쓰게 되는데 물 대신에 마시면서 할 수 있어 너무 좋습니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro22_re04.webp']
  },
  {
    reviewId: 'rev57',
    productId: ['product22','product34'],
    userId: '23***',
    rating: 5,
    content: '하루종일 전화 받는 일 하는데 여름되면 목이 유독 안좋아요. 냉방 때문인지 아아 때문인지. 칼칼할 때마다 한 포씩 타마시는데 도라지청처럼 한참 먹어야 효과 나는 게 아니라 그때그때 마시면 바로 조금 나아지는 느낌이라 좋아요',
    createdAt: '2026-09-20',
  },
  /*product23*/
  {
    reviewId: 'rev49',
    productId: ['product23', 'product24'],
    userId: '23***',
    rating: 5,
    content: '원래 밤에 뒤척이는 편이라 잠이 깊지 않았는데, 인터넷 후기를 보고 링티 나잇티를 마셔보니 몸이 편안해져 눕기가 한결 수월했습니다. 맛이 깔끔하고 부담이 없어 취침 전에 마시기 좋았고, 며칠 꾸준히 마신 후에는 푹 자는 날이 많아져 만족스러웠습니다. 구성도 실용적이라 재구매 의사 있습니다.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro23_re01.webp']
  },
  {
    reviewId: 'rev50',
    productId: ['product23', 'product24'],
    userId: '23***',
    rating: 5,
    content: '편의점에서 처음 마셔봤는데 효과 좋아서 구매합니다.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro23_re02.jpg']
  },
  {
    reviewId: 'rev51',
    productId: ['product23', 'product24'],
    rating: 5,
    content: '부모님께서 잘 드십니다.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro23_re03.jpg']
  },
  {
    reviewId: 'rev52',
    productId: ['product23', 'product24'],
    userId: '23***',
    rating: 5,
    content: '아주 잠이 잘 옵니다 추천',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro23_re04.webp']
  },
  {
    reviewId: 'rev53',
    productId: ['product23', 'product24'],
    userId: '23***',
    rating: 5,
    content: '달달한 맛이라서 매일 맛있게 마십니다. 24병 구매해서 다 먹었는데, 효과가 있어서 재구매했어요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro23_re05.webp']
  },
  {
    reviewId: 'rev54',
    productId: ['product23', 'product24'],
    userId: '23***',
    rating: 5,
    content: '잠잘오는거 같아요. 배송도 빨랏고 재구매할거예요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro23_re06.webp']
  },
  {
    reviewId: 'rev55',
    productId: ['product23', 'product24'],
    userId: '23***',
    rating: 5,
    content: '항암치료 중에 불면증으로 정말 힘들었는데 편의점에서 처음 보고 구매했다가 마시고 잔 날 너무 꿀잠잤아요. 박스로 구매해두고 반병씩 마십니다ㅎ',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro23_re07.jpg']
  },
  {
    reviewId: 'rev56',
    productId: ['product23', 'product24'],
    userId: '23***',
    rating: 5,
    content: '편의점에서 먹어보고 효과있어서 구매했어요. 잠을 잘 못자는 날에 마셔주면 신기하게 잠이 오더라구요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro23_re08.webp']
  },
  {
    reviewId: 'rev57',
    productId: ['product23', 'product24'],
    userId: '23***',
    rating: 5,
    content: '배송도 좋고 맛도 향이 먹기 좋고 잠들기가 쉬워져 계속 사 먹으려 함..',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro23_re09.webp']
  },
  {
    reviewId: 'rev57',
    productId: ['product23', 'product24'],
    userId: '23***',
    rating: 5,
    content: '남자친구가 잠을 쉡게 못자는 편이라 속는 셈치고 주문해봤는데 진짜 효과가 있어요~!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro23_re10.webp']
  },
  /*product25*/
  {
    reviewId: 'rev55',
    productId: ['product25', 'product26'],
    userId: '23***',
    rating: 5,
    content: '설에 선물하려고 링티 아브루쪼 포도맛 여러박스 구매했어요.주변에 선물로돌릴겸 쇼핑백도 와장창 많이 구매했어요.쇼핑백 깔끔하고 예뻐서 선물할때 쓰기 좋고 사이즈도 좋네요!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro25_re01.jpg']
  },
  {
    reviewId: 'rev56',
    productId: ['product25', 'product26'],
    userId: '23***',
    rating: 5,
    content: '나이드신 어르신께 선물드렸어요.후기가 괜챦은 것 같아서 구입했어요.어르신이 좋다고 하시면 재구매^^',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro25_re02.jpeg']
  },
  {
    reviewId: 'rev57',
    productId: ['product25', 'product26'],
    userId: '23***',
    rating: 5,
    content: '깔끔한 포장 링티 쇼핑백 좋습니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro25_re03.jpg']
  },
  {
    reviewId: 'rev57',
    productId: ['product25', 'product26'],
    userId: '23***',
    rating: 5,
    content: '선물할때 쇼핑백에 담으니까 더 고급스럽게 느껴져서 구입했어요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro25_re04.jpg']
  },
  /*product27*/
  {
    reviewId: 'rev55',
    productId: 'product27',
    userId: '23***',
    rating: 5,
    content: '모양도 이쁘고 좋네용!!물 맛이 더 좋게 느껴지는 느낌적인 느낌..!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro27_re01.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product27',
    userId: '23***',
    rating: 5,
    content: '그립감도 좋고 마시기도 좋아요!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro27_re02.jpg']
  },
  {
    reviewId: 'rev57',
    productId: 'product27',
    userId: '23***',
    rating: 5,
    content: '이제는 링티  하루 한잔은 저에게  필요가 아닌 필수가 되었어요..쉬는날없이 일하기에 만성피곤함은 일상이었는데  피곤함도 덜하고  먹은날과 안먹은날  아침 기상이 다릅니다..피부도 좋아지고  제주변분들도  이젠 다  마시는 링티...갈증날때  마시면바로  해소되고  맛도 아주좋아요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro27_re03.jpeg']
  },
  {
    reviewId: 'rev57',
    productId: 'product27',
    userId: '23***',
    rating: 5,
    content: '아이가 광고보고 너무 가지고싶어해서 구매했네요. 사각이라 구석구석 어떻게 세척할지 고민이지만 예쁘긴해요^^',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro27_re04.webp']
  },
  /*product28*/
  {
    reviewId: 'rev56',
    productId: 'product28',
    userId: '23***',
    rating: 5,
    content: '네모는 가지고있어서.원형으로.추가구매.네모보다는 훨~~씬 쓰기도.씻기도편해요~',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro28_re01.webp']
  },
  {
    reviewId: 'rev57',
    productId: 'product28',
    userId: '23***',
    rating: 5,
    content: '늘먹는음료입니다. 봄이되어라이딩개시했는데없어서는안되는필수품',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro28_re02.webp']
  },
  {
    reviewId: 'rev57',
    productId: 'product28',
    userId: '23***',
    rating: 5,
    content: '이쁘고 튼튼해요 잘쓸께요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro28_re03.jpeg']
  },
  /*product29*/
  {
    reviewId: 'rev56',
    productId: 'product29',
    userId: '23***',
    rating: 5,
    content: '병 마음에 들어요. 가볍고 투명해서 좋아요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro29_re01.webp']
  },
  {
    reviewId: 'rev57',
    productId: 'product29',
    userId: '23***',
    rating: 5,
    content: '아이가 잡고 먹기 편해요. 링티말고도 다른 음료도 괜찮아요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro29_re02.jpg']
  },
  {
    reviewId: 'rev57',
    productId: 'product29',
    userId: '23***',
    rating: 5,
    content: '아주 다 맘에 드는디 투명도 튼튼도 빨대 말캉하고 중간에 분리되서 잘 시치라고 해논것도 톡하고 열리되 너무 슝안열리는 뚜껑도 너무 날카롭지 않은 마감들도 다 좋은디 용량이 조금 다양했으면 얼음이 조금만 덜 녹았으면 했습니다 ',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro29_re03.jpg']
  },
  /*product30*/
  {
    reviewId: 'rev56',
    productId: 'product30',
    userId: '23***',
    rating: 5,
    content: '사이즈 적당하고 안에 쉐이커거름망? 있어서 잘섞여요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro30_re01.jpeg']
  },
  {
    reviewId: 'rev57',
    productId: 'product30',
    userId: '23***',
    rating: 5,
    content: '보틀 잘 사용하고있습니다 .',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro30_re02.jpg']
  },
  {
    reviewId: 'rev57',
    productId: 'product30',
    userId: '23***',
    rating: 5,
    content: '고소틴 보틀은 다른 일반 보틀과 달리 날개?부분이 존재해서 가루를 좀 더 잘 섞어줍니다! 일반 보틀이랑 차별화하여 만든게 신의한수!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro30_re03.jpg']
  },
  {
    reviewId: 'rev56',
    productId: 'product30',
    userId: '23***',
    rating: 5,
    content: '안에  잘섞이게 망이 있어 좋아요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro30_re04.jpg']
  },
  {
    reviewId: 'rev57',
    productId: 'product30',
    userId: '23***',
    rating: 5,
    content: '싸이즈도 좋고 잘쓸게요..',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro30_re05.jpg']
  },
  /*product31*/
  {
    reviewId: 'rev56',
    productId: 'product31',
    userId: '23***',
    rating: 5,
    content: '라잇티 당첨된김에 내돈내산으로 사봤어요. 너무 귀엽고 들고다니기에도 딱! 너무 좋네요~!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro31_re01.webp']
  },
  {
    reviewId: 'rev57',
    productId: 'product31',
    userId: '23***',
    rating: 5,
    content: '보틀 구매하기 참 잘했네요! 너무 귀엽고 250ml 표시 되어있어서 라잇티 먹기 딱 좋아요! 뜨거운물 받을 수 있어서 좋아요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro31_re02.jpg']
  },
  {
    reviewId: 'rev57',
    productId: 'product31',
    userId: '23***',
    rating: 5,
    content: '텀블러 별로 욕심 없는데 이거는 너무 귀여워서 라잇티 타먹으려고 샀어요 ㅎㅎ 귀엽고 사이즈도 딱이여서 들고다니기 좋네요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro31_re03.jpg']
  },
  {
    reviewId: 'rev56',
    productId: 'product31',
    userId: '23***',
    rating: 5,
    content: '괜찮은거 같아요.^~^;',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro31_re04.jpg']
  },
  /*product32*/
  {
    reviewId: 'rev56',
    productId: 'product32',
    userId: '23***',
    rating: 5,
    content: '링티에서 이런 예쁜 텀블러가....ㅠㅠ 너무 예쁘고 운동할 때 진짜 편할 것 같아요!!!!내일부터 이 텀블러랑 같이 운동하면서 다이어트 하려구요~~~ 만족도 200%!!!!!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro32_re01.jpg']
  },
  {
    reviewId: 'rev57',
    productId: 'product32',
    userId: '23***',
    rating: 5,
    content: '운동할때 마시기 편해서 좋아요보온 좋네요, 이쁘고 고리도 있어서 운동하면서 들고 다니기 좋네요 ㅋ',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro32_re02.jpg']
  },
  {
    reviewId: 'rev57',
    productId: 'product32',
    userId: '23***',
    rating: 5,
    content: '텀블러 별로 욕심 없는데 이거는 너무 귀여워서 라잇티 타먹으려고 샀어요 ㅎㅎ 귀엽고 사이즈도 딱이여서 들고다니기 좋네요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro32_re03.jpeg']
  },
  {
    reviewId: 'rev56',
    productId: 'product32',
    userId: '23***',
    rating: 5,
    content: '운동할때 마시기 편해서 좋아요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro32_re04.jpeg']
  },
  {
    reviewId: 'rev56',
    productId: 'product32',
    userId: '23***',
    rating: 5,
    content: '제가 사용하진 않았고, 선물로 줬는데 진짜 좋아했어요~',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro32_re05.jpg']
  },
  /*product35*/
  {
    reviewId: 'rev56',
    productId: 'product35',
    userId: '23***',
    rating: 5,
    content: '맛도 괜찮고 운동전후로 쭈욱 마시고 있어요 대체당 너무 먹어서 설사가 날 지경인데 대체당아닌 버전도 있음 좋겠어요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro35_re01.webp']
  },
  {
    reviewId: 'rev57',
    productId: 'product35',
    userId: '23***',
    rating: 5,
    content: '잘받았어요~~',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro35_re02.webp']
  },
  {
    reviewId: 'rev57',
    productId: 'product35',
    userId: '23***',
    rating: 5,
    content: '운동 전후로 마시면 좋아요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro35_re03.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product35',
    userId: '23***',
    rating: 5,
    content: '진짜 샤인머스캣 맛이 나서 좋아요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro35_re04.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product35',
    userId: '23***',
    rating: 5,
    content: '리스커버리는 처음인데 너무 맛나요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro35_re05.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product35',
    userId: '23***',
    rating: 5,
    content: '박스포장으로 왔는데 다 찟어져 있어서 택배받고 이건뭐지? 라고 생각했어요... 조금 더 꼼꼼하게 보내주셨음 하네요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro35_re06.webp']
  },
  {
    reviewId: 'rev57',
    productId: 'product35',
    userId: '23***',
    rating: 5,
    content: '맛있게 잘 마시고 있습니다. 감사합니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro35_re07.webp']
  },
  {
    reviewId: 'rev57',
    productId: 'product35',
    userId: '23***',
    rating: 5,
    content: '운동 후 회복을 위해 꾸준히 마시고 있습니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro35_re08.webp']
  },
  /*product40*/
  {
    reviewId: 'rev56',
    productId: 'product40',
    userId: '23***',
    rating: 5,
    content: '마라톤 전에 저한테 맞는거 찾다가 얘로 결정했습니다. 다른 젤은 너무 달고 시고 뜯을때 다 터져서 손에 묻는 경우가 많고 또 터지지 않으면 너무 끈적해서 뛰면서 먹으면 계속 목이 말라서 페이스에 영향을 주더라고요. 얘는 맛이나 식감도 좋고 무엇보다 빠르게 힘이 나는게 느껴져서 결정했습니다. 다 먹으면 더 많이 사려고요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro40_re01.webp']
  },
  {
    reviewId: 'rev57',
    productId: 'product40',
    userId: '23***',
    rating: 5,
    content: '새해 러닝 시작으로 먹어보려고 합니다 러닝크루에서 나눠준거 먹고 갈아탔어욬ㅋㅋㅋㅋㅋㅋ달리고 나서 컨디션 좋을 땐 꼭 이 제품 먹은 날이던데 회복에 도움된다고 해서 그런거 같네요  춘마까지 덱스트로 훈련할거 같습니다',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro40_re02.webp']
  },
  {
    reviewId: 'rev57',
    productId: 'product40',
    userId: '23***',
    rating: 5,
    content: 'LSD훈련이랑 3월 마라톤 준비하려고 구매해서 먹고있습니다 ㅎ 런서울런에서 먹고 PB 찍었는데ㅔ 그래서인지 먹고 뛸때마다 기록이 좋네요 효과좋은거 같아서 계속 구매합니다! 3박스 지금 다 떨어져가는데 또 사려고하는데 이번년도 마라톤은 얘랑 같이 뛸 것 같네요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro40_re03.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product40',
    userId: '23***',
    rating: 5,
    content: '러닝 필수템 입니다 당류가 제일많음',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro40_re04.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product40',
    userId: '23***',
    rating: 5,
    content: '효과는...넘달아요..',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro40_re05.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product40',
    userId: '23***',
    rating: 5,
    content: '항상 장거리 러닝 시 섭취하고 있는데 허기지기 전에 먹어두면 든든함이 오래감. 뛰면서 섭취하기 좋은 제형이라서 목넘김이 편함.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro40_re06.webp']
  },
  /*product41*/
  {
    reviewId: 'rev56',
    productId: 'product41',
    userId: '23***',
    rating: 5,
    content: '신상 링티는 다 먹어봐야 하는 저로써 참을 수 없죠 ㅋㅋㅋㅋㅋ 부어보면 믹스커피? 같이 되어 있고 찬물에도 꽤 금방 녹습니다. 기존 링티랑은 완전 다른 느낌이라 기본으로 먹던 것 먹다가 한번씩 커피 당길 때 먹으면 좋을 것 같아요. 신상으로 1통만 할인돼서 한통만 샀는데, 쪼금만... 세일한다면 더 쟁여서 돌아가면서 살 것 같습니다. 암튼 재구매 의사 있습니다!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro41_re01.webp']
  },
  {
    reviewId: 'rev57',
    productId: 'product41',
    userId: '23***',
    rating: 5,
    content: '와우 방금 우유에 한잔 타마셔봤는데 너무 맛있습니다지금 출시기념 특가를 하고 있어서 저렴하게 신제품 체험 잘 해봤네요.또 구매하고 싶어요!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro41_re02.webp']
  },
  {
    reviewId: 'rev57',
    productId: 'product41',
    userId: '23***',
    rating: 5,
    content: '배송에 시간이 좀 걸려요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro41_re03.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product41',
    userId: '23***',
    rating: 5,
    content: '맛있는데 비싸서 자주 살까말까 고민을 하게ㅜ되네요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro41_re04.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product41',
    userId: '23***',
    rating: 5,
    content: '다 먹고 또 시킬께요~~',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro41_re05.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product41',
    userId: '23***',
    rating: 5,
    content: '새로운 맛이라 기대되요.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro41_re06.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product41',
    userId: '23***',
    rating: 5,
    content: '맛이 궁금했는데 생각보다 너무 맛있네요. 우유를 500미리나 타야한다는점이 좀.. 양이 많아서 두번에 나눠마셔요! 타피오카펄 넣어먹으면 버블티를 사먹을이유가 없을정도로 완전 똑같아요 ㅎㅎ 추천합니다.',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro41_re07.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product41',
    userId: '23***',
    rating: 5,
    content: '감사합니다!!퀄리티가좋습니다!! 제품만족합니다!!!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro41_re08.webp']
  },
  /*product44*/
  {
    reviewId: 'rev56',
    productId: 'product44',
    userId: '23***',
    rating: 5,
    content: '맛있어요!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro44_re01.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product44',
    userId: '23***',
    rating: 5,
    content: '맛있어요!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro44_re02.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product44',
    userId: '23***',
    rating: 5,
    content: '맛있어요!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro44_re03.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product44',
    userId: '23***',
    rating: 5,
    content: '맛있어요!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro44_re04.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product44',
    userId: '23***',
    rating: 5,
    content: '맛있어요!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro44_re05.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product44',
    userId: '23***',
    rating: 5,
    content: '맛있어요!',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro44_re06.webp']
  },
  /*product46*/
  {
    reviewId: 'rev56',
    productId: 'product46',
    userId: '23***',
    rating: 5,
    content: '홈쇼핑 라이브할 때 보고 구매해 봤는데..느낌적으로는 마시니 진짜 액티브 해 지는 것 같아요',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro46_re01.jp']
  },
  {
    reviewId: 'rev56',
    productId: 'product46',
    userId: '23***',
    rating: 5,
    content: '먹은날은 확실히 몸 컨디션이 좋아요~^^ 아침에 남편 출근할때 꼭 타서 챙겨줍니다~',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro46_re02.webp']
  },
  {
    reviewId: 'rev56',
    productId: 'product46',
    userId: '23***',
    rating: 5,
    content: '비타민 굉장히 신경써서 챙겨먹고있는데요, 비타민 종류가 많다보니까 알약도 많아져서 먹기 번거로웠거든요. 다양한 성분들을 동시에 챙겨먹을 수 있는 장점이 큰 것 같아요. 또, 요즘 되게 스트레스 받고 힘들었는데 도움 많이 되는 것 같습니다! :-) ',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro46_re03.jpg']
  },
  {
    reviewId: 'rev56',
    productId: 'product46',
    userId: '23***',
    rating: 5,
    content: '처음 구매하고 두번째 재구입 후기 입니다.구매하실 분들은 참고하시기 바래요 ^^기가막힌 엄청난 효과를 기대하는 분들은조금은 광고에 비해 실망 하실부분이 있어요다만 꾸준한 섭취, 수분보충으로 인해조금은 평소보다 많은 수분보충을 하게 되고비타민까지 함유가 되어있어 환절기인 요즘건강을 챙기기엔 조금은 보탬이 되는 제품은확실히 맞는거 같아요. 맛도 비교적 먹기 편하고 루틴처럼 먹기에 좋아요 ^^',
    createdAt: '2026-09-20',
    images: [process.env.PUBLIC_URL + '/assets/review/pro46_re04.webp']
  },

]

const productData = { data, tabData, eventInfo, allProduct, cartAddItem, qanda, reviews };
export default productData;
export { data };