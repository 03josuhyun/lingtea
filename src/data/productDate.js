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
      detailInfo : [
        process.env.PUBLIC_URL + '/assets/product/product01_d01.webp',
        process.env.PUBLIC_URL + '/assets/product/product01_d02.webp',
        process.env.PUBLIC_URL + '/assets/product/product01_d03.webp',
        process.env.PUBLIC_URL + '/assets/product/product01_d04.webp',
        process.env.PUBLIC_URL + '/assets/product/product01_d05.webp',
        process.env.PUBLIC_URL + '/assets/product/product01_d06.webp',
        process.env.PUBLIC_URL + '/assets/product/product01_d07.webp',
        process.env.PUBLIC_URL + '/assets/product/product01_d08.webp',
        process.env.PUBLIC_URL + '/assets/product/product01_d09.webp',
      ],

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
    category: 'collagen',

    isBest: true,
    isNew: true,

    newDate: '2024-09-10',

    viewCount: 1210
  },
  {
    id: 'product03',
    image: process.env.PUBLIC_URL + '/assets/product/product03.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product03.webp',
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

    isBest: false,
    isNew: false,

    viewCount: 1140
  },
  {
    id: 'product06',
    image: process.env.PUBLIC_URL + '/assets/product/product06.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product06.webp',
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

    isBest: true,
    isNew: true,

    newDate: '2024-09-24',

    viewCount: 1170
  },
  {
    id: 'product09',
    image: process.env.PUBLIC_URL + '/assets/product/product09.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product09.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product10.webp',
      process.env.PUBLIC_URL + '/assets/product/product09_02.webp',
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

    isBest: false,
    isNew: true,

    newDate: '2025-09-20',

    viewCount: 870
  },
  {
    id: 'product49',
    image: process.env.PUBLIC_URL + '/assets/product/product49.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product49.webp',
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

    isBest: false,
    isNew: false,
  },
  {
    id: 'product53',
    image: process.env.PUBLIC_URL + '/assets/product/product53.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product13.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_04.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_05.webp',
    ],
    title: '[첫 구매 해택] 카페 링티 드 실론 (10회분, 홍차커피맛)',
    smalltitle: '홍차와 커피의 완벽한 밸런스',
    price: 13900,
    delprice: 35000,
    percent: '',
    pricedetail: '로그인 후 ID당 1개 구매 가능',
    category: 'ceylon',

    isBest: false,
    isNew: false,
  },
  {
    id: 'product54',
    image: process.env.PUBLIC_URL + '/assets/product/product54.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product13.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_04.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_05.webp',
    ],
    title: '[첫 구매 해택] 링티 수분콜라겐 1박스 (10회분, 블러드오렌지맛)',
    smalltitle: '저분자 콜라겐 흡수 솔루션',
    price: 10900,
    delprice: 35000,
    percent: '68%',
    pricedetail: '68% / ID당 1개 구매 가능',
    category: 'collagen',

    isBest: false,
    isNew: false,
  },
  {
    id: 'product55',
    image: process.env.PUBLIC_URL + '/assets/product/product55.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product13.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_04.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_05.webp',
    ],
    title: '[첫 구매 해택] 링티 수분콜라겐 1박스 (10회분, 블러드오렌지맛)',
    smalltitle: '저분자 콜라겐 흡수 솔루션',
    price: 10900,
    delprice: 35000,
    percent: '68%',
    pricedetail: '68% / ID당 1개 구매 가능',
    category: 'dot',

    isBest: false,
    isNew: false,
  },
  {
    id: 'product56',
    image: process.env.PUBLIC_URL + '/assets/product/product56.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product13.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_04.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_05.webp',
    ],
    title: '[첫 구매 해택] 고소틴 1박스 (7포입)',
    smalltitle: '맛있는 식물성 단백질',
    price: 12900,
    delprice: 35000,
    percent: '63%',
    pricedetail: '63% / ID당 1개 구매 가능',
    category: 'gosotin',

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
      process.env.PUBLIC_URL + '/assets/product/product13_05.webp',
    ],
    title: '[첫 구매 해택] 포커스카페인 환 1박스 (10포입, 은은한 초코향)',
    smalltitle: '간편한 공부 카페인',
    price: 13400,
    delprice: 30000,
    percent: '55%',
    pricedetail: '55% / ID당 1개 구매 가능',
    category: 'focus',

    isBest: false,
    isNew: false,
  },
  {
    id: 'product58',
    image: process.env.PUBLIC_URL + '/assets/product/product58.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product13.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_04.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_05.webp',
    ],
    title: '[첫 구매 해택] 링티 라잇티 1박스 (14회분, 레몬녹차맛)',
    smalltitle: '식후 혈당상승 억제, 배변활동 원활 기능성 원료 함유',
    price: 11900,
    delprice: 30000,
    percent: '60%',
    pricedetail: '60% / ID당 1개 구매 가능',
    category: 'light',

    isBest: false,
    isNew: false,
  },
  {
    id: 'product59',
    image: process.env.PUBLIC_URL + '/assets/product/product59.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product13.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_04.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_05.webp',
    ],
    title: '[첫 구매 해택] 덱스트 에너지 젤 1박스 (10회분, 청사과맛)',
    smalltitle: '식후 혈당상승 억제, 배변활동 원활 기능성 원료 함유',
    price: 13900,
    delprice: 27900,
    percent: '50%',
    pricedetail: '50% / ID당 1개 구매 가능',
    category: 'dext',

    isBest: false,
    isNew: false,
  },
  {
    id: 'product60',
    image: process.env.PUBLIC_URL + '/assets/product/product60.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product13.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_04.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_05.webp',
    ],
    title: '링티 쿨 가드 매실에이드 1박스 (30회분, 매실에이드맛)',
    smalltitle: '기업전용 상품',
    price: '판매가 별도 문의',
    delprice: '',
    pricedetail: '',
    percent: '',
    category: 'pharmacy',

    isBest: false,
    isNew: false,
  },
  {
    id: 'product61',
    image: process.env.PUBLIC_URL + '/assets/product/product61.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product13.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_04.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_05.webp',
    ],
    title: '링티 쿨 가드 레몬에이드 1박스 (30회분, 매실에이드맛)',
    smalltitle: '기업전용 상품',
    price: '판매가 별도 문의',
    delprice: '',
    pricedetail: '',
    percent: '',
    category: 'pharmacy',

    isBest: false,
    isNew: false,
  },
  {
    id: 'product62',
    image: process.env.PUBLIC_URL + '/assets/product/product62.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product13.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_04.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_05.webp',
    ],
    title: '[약국 전용상품] 링티 플러스 활력 1박스 (10회분, 레몬맛)',
    smalltitle: '약국 전용 상품',
    price: '약국 내 별도 안내',
    delprice: '',
    pricedetail: '',
    percent: '',
    category: 'pharmacy',

    isBest: false,
    isNew: false,
  },
  {
    id: 'product63',
    image: process.env.PUBLIC_URL + '/assets/product/product63.webp',
    detailImages: [
      process.env.PUBLIC_URL + '/assets/product/product13.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_01.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_02.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_03.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_04.webp',
      process.env.PUBLIC_URL + '/assets/product/product13_05.webp',
    ],
    title: '[약국 전용상품] 링티 에이비오 ABO 1박스 (10회분, 포도맛)',
    smalltitle: '약국 전용 상품',
    price: '약국 내 별도 안내',
    delprice: '',
    pricedetail: '',
    percent: '',
    category: 'pharmacy',

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
// export default { data, tabData, eventInfo, allProduct, cartAddItem };
const productData = { data, tabData, eventInfo, allProduct, cartAddItem };
export default productData;
export { data };