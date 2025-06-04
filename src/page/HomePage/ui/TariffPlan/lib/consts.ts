const LIST_WORK_ARRAY = [
  { nameWork: "Брифинг, составление майндкарты" },
  { nameWork: "Аналитика ЦА и конкурентов" },
  { nameWork: "Сквозная аналитика" },
  { nameWork: "Написание воронок продаж" },
  { nameWork: "Отрисовка сайта + адаптив" },
  { nameWork: "Разработка сайта (адаптивная) до 7 дней" },
  { nameWork: "Каскадная таблица стилей" },
  { nameWork: "Оптимизация" },
  { nameWork: "Подключение хостинга на 1 месяц" },
  {
    nameWork: "Составление рекламных гипотез (A/B - тестирование)",
  },
  {
    nameWork: "Бесплатная консультация по личному бренду",
  },
  { nameWork: "Интеграция рабочих систем" },
  { nameWork: "Подключение метрики" },
  { nameWork: "Подключение хостина на 3 месяца" },
  {
    nameWork: "Отчётность в таблице Excel каждый 5 дней",
  },
  {
    nameWork: "Составление метода продаж с помощью бесплатных диагностик",
  },
  { nameWork: "Ведение соцсетей (вк, тг, авито)" },
  { nameWork: "SEO - оптимизация" },
  { nameWork: "Подключение администраторских прав" },
  {
    nameWork: "Возможность правки в любой момент времени в течение 1 месяца",
  },
];

export const TARIFF_CARD_INFO = [
  {
    name: "VIP",
    listWork: [
      ...LIST_WORK_ARRAY.slice(0, LIST_WORK_ARRAY.length - 11).map((item) => ({
        nameWork: item.nameWork,
        lineThought: false,
      })),
      ...LIST_WORK_ARRAY.slice(-11).map((item) => ({
        nameWork: item.nameWork,
        lineThought: true,
      })),
    ],
    price: "29.990",
  },
  // {
  //   name: "Platinum",
  //   listWork: [
  //     ...LIST_WORK_ARRAY.slice(0, LIST_WORK_ARRAY.length - 6).map((item) => {
  //       return {
  //         nameWork: item.nameWork,
  //         lineThought: false,
  //       };
  //     }),
  //     ...LIST_WORK_ARRAY.slice(-6).map((item) => {
  //       return {
  //         nameWork: item.nameWork,
  //         lineThought: true,
  //       };
  //     }),
  //   ],
  //   price: "39.990",
  // },
  // {
  //   name: "MDM",
  //   underName: "(Million Dollar Marketing)",
  //   listWork: LIST_WORK_ARRAY,
  //   price: "79.990",
  // },
];
