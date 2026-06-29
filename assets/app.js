const state = {
  lang: "ru",
  route: "home",
  previousRoute: "home",
  category: "all",
  query: "",
  selectedProductId: "products",
  appliedPromo: null,
};

const money = new Intl.NumberFormat("ru-RU");

const i18n = {
  ru: {
    heroBy: "by Angelina Pars",
    heroTitle: "Добро пожаловать в ASTRALIA",
    heroText: "Ваш проводник в мире астрологии, энергии и возможностей",
    valueOneTitle: "Персональные разборы",
    valueOneText: "Глубокий анализ вашей энергии и потенциала",
    valueTwoTitle: "12 авторских модулей",
    valueTwoText: "Уникальные знания для разных сфер жизни",
    valueThreeTitle: "Оплата онлайн",
    valueThreeText: "Безопасно и удобно из любой точки мира",
    videoTitle: "Видео приветствие",
    videoText: "Узнайте больше о возможностях ASTRALIA за 1 минуту",
    enterApp: "Войти",
    registration: "Регистрация",
    demoResult: "Посмотреть демо",
    catalogBy: "by Angelina Pars",
    modulesTitle: "Модули",
    searchPlaceholder: "Поиск по модулям...",
    catAll: "Все",
    catLove: "Любовь",
    catMoney: "Деньги",
    catBody: "Тело",
    catTarot: "Таро",
    buyModule: "Купить модуль",
    buyModuleBottom: "Купить модуль",
    whatYouGet: "Что вы получите",
    howItWorks: "Как это работает",
    whoFits: "Для кого подходит",
    reviewText: "Список рекомендаций оказался очень точным. Сразу понятно, куда двигаться дальше.",
    reviewAuthor: "Мария, 29 лет",
    checkoutTitle: "Оформление заказа",
    instantAccess: "Доступ к результату после оплаты",
    profileDataTitle: "Данные для расчета",
    fieldName: "Имя",
    fieldDate: "Дата рождения",
    fieldTime: "Время рождения",
    fieldPlace: "Место рождения",
    promoTitle: "Промокод",
    promoPlaceholder: "Введите промокод",
    applyPromo: "Применить",
    totalToPay: "Итого к оплате",
    paymentText: "Банковские карты и другие способы оплаты",
    agreeTerms: "Я принимаю оферту и согласие на обработку персональных данных",
    agreeMarketing: "Я согласен получать информационные сообщения",
    payButton: "Оплатить",
    getFree: "Получить бесплатно",
    paymentFineprint: "Безопасная оплата. В демо платеж не выполняется.",
    resultTitle: "Ваш результат",
    mainEnergy: "Главная энергия результата",
    mainEnergyText: "Вы на пороге обновления и новых возможностей. Результат подсказывает, где сейчас находится ваша сильная сторона.",
    insightLove: "Любовь",
    insightLoveText: "Больше мягкости, честности и ясных границ.",
    insightWork: "Работа",
    insightWorkText: "Ваши идеи заметят, если оформить их проще.",
    insightAdvice: "Совет",
    insightAdviceText: "Сохраняйте веру в себя и двигайтесь по шагам.",
    saveResult: "Сохранить",
    downloadPdf: "Скачать PDF",
    backToModules: "К выбору модулей",
    profileTitle: "Мой кабинет",
    profileName: "Имя Пользователя",
    editProfile: "Редактировать",
    activeAccess: "активных доступа",
    paidModules: "купленных модулей",
    purchaseHistory: "История покупок",
    partnerTitle: "Партнерство",
    partnerLead: "Делитесь Astralia и получайте бонусы за приглашения.",
    refLink: "Ваша реферальная ссылка",
    copy: "Копировать",
    refClicks: "переходов",
    refUsers: "регистраций",
    refBonus: "начислено",
    howPartnerWorks: "Как это работает",
    partnerStepOne: "Делитесь ссылкой или промокодом",
    partnerStepTwo: "Пользователи регистрируются",
    partnerStepThree: "Вы получаете бонусы",
    adminTitle: "Админка",
    adminLead: "Визуальный черновик будущего управления контентом.",
    adminProducts: "Модули и цены",
    adminPromos: "Промокоды",
    adminPayments: "Платежи YooKassa",
    adminTexts: "Тексты RU/EN",
    adminResults: "База результатов",
    adminLegal: "Юридические документы",
    navHome: "Главная",
    navModules: "Модули",
    navPartner: "Партнеры",
    navResults: "Итоги",
    navProfile: "Профиль",
    oneTime: "разовая оплата",
    funnel: "воронка",
    noProducts: "Ничего не найдено",
    promoFree: "Промокод применен: доступ будет бесплатным.",
    promoDiscount: "Промокод применен: скидка 15%.",
    promoUnavailable: "Этот промокод не подходит для выбранного модуля.",
    promoUnknown: "Промокод не найден.",
    paidDemo: "Демо: доступ открыт, результат сохранен в кабинете.",
    savedDemo: "Результат сохранен в кабинете.",
    pdfDemo: "В боевой версии здесь будет скачивание PDF.",
  },
  en: {
    heroBy: "by Angelina Pars",
    heroTitle: "Welcome to ASTRALIA",
    heroText: "Your guide to astrology, energy and new possibilities",
    valueOneTitle: "Personal readings",
    valueOneText: "A deeper look at your energy and potential",
    valueTwoTitle: "12 author modules",
    valueTwoText: "Unique insights for every part of life",
    valueThreeTitle: "Online payments",
    valueThreeText: "Safe and convenient from anywhere",
    videoTitle: "Welcome video",
    videoText: "Discover ASTRALIA in one minute",
    enterApp: "Enter",
    registration: "Register",
    demoResult: "View demo",
    catalogBy: "by Angelina Pars",
    modulesTitle: "Modules",
    searchPlaceholder: "Search modules...",
    catAll: "All",
    catLove: "Love",
    catMoney: "Money",
    catBody: "Body",
    catTarot: "Tarot",
    buyModule: "Buy module",
    buyModuleBottom: "Buy module",
    whatYouGet: "What you get",
    howItWorks: "How it works",
    whoFits: "Who it is for",
    reviewText: "The recommendations felt precise. It became clear where to move next.",
    reviewAuthor: "Maria, 29",
    checkoutTitle: "Checkout",
    instantAccess: "Access after payment",
    profileDataTitle: "Birth data",
    fieldName: "Name",
    fieldDate: "Birth date",
    fieldTime: "Birth time",
    fieldPlace: "Birth place",
    promoTitle: "Promo code",
    promoPlaceholder: "Enter promo code",
    applyPromo: "Apply",
    totalToPay: "Total",
    paymentText: "Bank cards and other payment methods",
    agreeTerms: "I accept the offer and consent to personal data processing",
    agreeMarketing: "I agree to receive informational messages",
    payButton: "Pay",
    getFree: "Get for free",
    paymentFineprint: "Secure payment. This demo does not charge money.",
    resultTitle: "Your result",
    mainEnergy: "Main energy",
    mainEnergyText: "You are at the edge of renewal and new possibilities. The result shows where your strength is now.",
    insightLove: "Love",
    insightLoveText: "More softness, honesty and clear boundaries.",
    insightWork: "Work",
    insightWorkText: "Your ideas will be noticed when you shape them simply.",
    insightAdvice: "Advice",
    insightAdviceText: "Keep trusting yourself and move step by step.",
    saveResult: "Save",
    downloadPdf: "Download PDF",
    backToModules: "Back to modules",
    profileTitle: "My profile",
    profileName: "User Name",
    editProfile: "Edit profile",
    activeAccess: "active accesses",
    paidModules: "paid modules",
    purchaseHistory: "Purchase history",
    partnerTitle: "Partnership",
    partnerLead: "Share Astralia and receive bonuses for invitations.",
    refLink: "Your referral link",
    copy: "Copy",
    refClicks: "clicks",
    refUsers: "registrations",
    refBonus: "accrued",
    howPartnerWorks: "How it works",
    partnerStepOne: "Share your link or promo code",
    partnerStepTwo: "Users register",
    partnerStepThree: "You receive bonuses",
    adminTitle: "Admin",
    adminLead: "A visual draft for future content management.",
    adminProducts: "Modules and prices",
    adminPromos: "Promo codes",
    adminPayments: "YooKassa payments",
    adminTexts: "RU/EN texts",
    adminResults: "Result database",
    adminLegal: "Legal documents",
    navHome: "Home",
    navModules: "Modules",
    navPartner: "Partners",
    navResults: "Results",
    navProfile: "Profile",
    oneTime: "one-time",
    funnel: "funnel",
    noProducts: "No products found",
    promoFree: "Promo applied: access will be free.",
    promoDiscount: "Promo applied: 15% discount.",
    promoUnavailable: "This promo code cannot be used for this module.",
    promoUnknown: "Promo code not found.",
    paidDemo: "Demo: access opened, result saved to profile.",
    savedDemo: "Result saved to profile.",
    pdfDemo: "The production version will download a PDF here.",
  },
};

const products = [
  {
    id: "products",
    category: "body",
    symbol: "leaf",
    price: 990,
    funnel: true,
    ru: {
      title: "Какие продукты мне подходят",
      description: "Персональные рекомендации для здоровья и энергии.",
      benefits: ["Список продуктов, подходящих именно вам", "Рекомендации для энергии и баланса", "Продукты, которых лучше избегать"],
      audience: ["Тем, кто хочет больше энергии", "Тем, кто ищет мягкий вход в Astralia", "Тем, кто интересуется натальной картой"],
      process: "Мы сопоставляем дату рождения и ответы анкеты с базой рекомендаций и собираем персональный продуктовый профиль.",
    },
    en: {
      title: "Which products fit me",
      description: "Personal recommendations for wellbeing and energy.",
      benefits: ["A list of products selected for you", "Energy and balance recommendations", "Products better to avoid"],
      audience: ["For those who want more energy", "For a soft first step into Astralia", "For natal chart enthusiasts"],
      process: "We match birth data and questionnaire answers with the recommendation database and assemble a personal product profile.",
    },
  },
  {
    id: "body",
    category: "body",
    symbol: "body",
    price: 10000,
    ru: {
      title: "Разблокируй тело",
      description: "Практики для раскрытия ресурса и легкости.",
      benefits: ["Карта телесных зажимов", "Практики восстановления ресурса", "PDF с персональным планом"],
      audience: ["Тем, кто чувствует усталость", "Тем, кто хочет вернуть ресурс", "Тем, кто выбирает мягкую работу с телом"],
      process: "Система собирает результат из заранее подготовленных блоков по дате рождения, сфере запроса и ответам анкеты.",
    },
    en: {
      title: "Unlock your body",
      description: "Practices for resource, ease and openness.",
      benefits: ["Body tension map", "Resource recovery practices", "PDF with a personal plan"],
      audience: ["For those who feel tired", "For those restoring energy", "For gentle body-focused work"],
      process: "The system assembles the result from prepared blocks using birth data, request area and questionnaire answers.",
    },
  },
  {
    id: "energy",
    category: "body",
    symbol: "bolt",
    price: 10000,
    ru: {
      title: "Где моя энергия?",
      description: "Диагностика утечек и восстановление ресурса.",
      benefits: ["Ваши источники силы", "Где энергия уходит впустую", "Рекомендации на ближайшие недели"],
      audience: ["Тем, кто выгорает", "Тем, кто хочет понять свой ритм", "Тем, кто ищет точку восстановления"],
      process: "Результат собирается из базы трактовок по вашим данным и выбранным ответам.",
    },
    en: {
      title: "Where is my energy?",
      description: "Energy leak diagnosis and resource recovery.",
      benefits: ["Your sources of strength", "Where your energy leaks", "Recommendations for the coming weeks"],
      audience: ["For burnout recovery", "For understanding your rhythm", "For finding a restoration point"],
      process: "The result is assembled from interpretation blocks based on your data and answers.",
    },
  },
  {
    id: "stones",
    category: "body",
    symbol: "crystal",
    price: 990,
    funnel: true,
    ru: {
      title: "Камни-талисманы",
      description: "Подберите камни силы под вашу энергию.",
      benefits: ["3-5 подходящих талисманов", "Как носить и сочетать камни", "Чего лучше избегать"],
      audience: ["Тем, кто любит символы", "Тем, кто выбирает подарок", "Тем, кто хочет простую рекомендацию"],
      process: "Подбор строится по знаку, стихии и дополнительным ответам пользователя.",
    },
    en: {
      title: "Talisman stones",
      description: "Choose power stones for your energy.",
      benefits: ["3-5 matching talismans", "How to wear and combine stones", "What to avoid"],
      audience: ["For symbol lovers", "For choosing a gift", "For a simple recommendation"],
      process: "The selection is based on sign, element and extra user answers.",
    },
  },
  {
    id: "money",
    category: "money",
    symbol: "money",
    price: 15000,
    ru: {
      title: "Где мои деньги?",
      description: "Анализ финансовых блоков и точки роста.",
      benefits: ["Финансовые сценарии", "Точки роста", "Персональный план действий"],
      audience: ["Тем, кто хочет больше ясности в деньгах", "Тем, кто ищет новый рост", "Тем, кто готов менять привычки"],
      process: "Финансовый результат собирается по ответам анкеты и заранее подготовленным астрологическим блокам.",
    },
    en: {
      title: "Where is my money?",
      description: "Financial blocks and growth points analysis.",
      benefits: ["Financial patterns", "Growth points", "Personal action plan"],
      audience: ["For more money clarity", "For new growth", "For changing habits"],
      process: "The financial result is assembled from questionnaire answers and prepared astrological blocks.",
    },
  },
  {
    id: "brand",
    category: "money",
    symbol: "star",
    price: 10000,
    ru: {
      title: "Хочу сильный личный бренд",
      description: "Стратегия и энергия вашего влияния.",
      benefits: ["Сильные стороны образа", "Темы для проявленности", "Рекомендации по подаче"],
      audience: ["Экспертам", "Блогерам", "Тем, кто хочет проявиться"],
      process: "Сервис подбирает блоки про архетип, стиль коммуникации и зоны роста.",
    },
    en: {
      title: "I want a strong personal brand",
      description: "The strategy and energy of your influence.",
      benefits: ["Image strengths", "Topics for visibility", "Presentation recommendations"],
      audience: ["For experts", "For creators", "For those ready to be visible"],
      process: "The service selects blocks about archetype, communication style and growth areas.",
    },
  },
  {
    id: "partner-fit",
    category: "love",
    symbol: "heart",
    price: 10000,
    ru: {
      title: "Какой партнер мне подходит?",
      description: "Качества и типаж вашего идеального партнера.",
      benefits: ["Портрет подходящего партнера", "Красные флаги", "Рекомендации для отношений"],
      audience: ["Тем, кто выбирает партнера", "Тем, кто хочет понять свои сценарии", "Тем, кто устал от случайности"],
      process: "Результат формируется из базы отношений по дате рождения и личной анкете.",
    },
    en: {
      title: "What partner fits me?",
      description: "Traits and type of your ideal partner.",
      benefits: ["A suitable partner portrait", "Red flags", "Relationship recommendations"],
      audience: ["For choosing a partner", "For understanding patterns", "For less randomness in love"],
      process: "The result is created from relationship blocks using birth data and questionnaire answers.",
    },
  },
  {
    id: "lilith",
    category: "body",
    symbol: "moon",
    price: 10000,
    ru: {
      title: "Лилит: преврати страхи в ресурс",
      description: "Глубинная проработка теневых установок.",
      benefits: ["Главный внутренний страх", "Как он забирает ресурс", "Как превратить его в силу"],
      audience: ["Тем, кто готов смотреть глубже", "Тем, кто повторяет один сценарий", "Тем, кто хочет вернуть силу"],
      process: "Модуль подбирает трактовки по дате рождения, теме запроса и ответам анкеты.",
    },
    en: {
      title: "Lilith: turn fears into resource",
      description: "Deep work with shadow beliefs.",
      benefits: ["Main inner fear", "How it drains your resource", "How to turn it into strength"],
      audience: ["For deeper self-work", "For repeated patterns", "For reclaiming power"],
      process: "The module selects interpretations by birth data, request topic and answers.",
    },
  },
  {
    id: "tattoo",
    category: "body",
    symbol: "sign",
    price: 3000,
    ru: {
      title: "Тату по натальной карте",
      description: "Символы силы, поддерживающие вас.",
      benefits: ["Идеи символов", "Смыслы и зоны тела", "PDF для обсуждения с мастером"],
      audience: ["Тем, кто хочет осознанное тату", "Тем, кто ищет символ силы", "Тем, кто выбирает эскиз"],
      process: "Система выбирает символы по ключевым точкам карты и предпочтениям пользователя.",
    },
    en: {
      title: "Natal chart tattoo",
      description: "Power symbols that support you.",
      benefits: ["Symbol ideas", "Meanings and body zones", "PDF for the tattoo artist"],
      audience: ["For conscious tattoo choices", "For a power symbol", "For sketch ideas"],
      process: "The system selects symbols by key chart points and user preferences.",
    },
  },
  {
    id: "relocation",
    category: "money",
    symbol: "globe",
    price: 10000,
    ru: {
      title: "Переезд: узнай вероятность",
      description: "Астрологический анализ переезда и адаптации.",
      benefits: ["Потенциал переезда", "Сильные направления", "Риски адаптации"],
      audience: ["Тем, кто думает о переезде", "Тем, кто выбирает город", "Тем, кто хочет меньше тревоги"],
      process: "Результат строится по личным данным, текущему городу и желаемым направлениям.",
    },
    en: {
      title: "Relocation: see the probability",
      description: "Astrological relocation and adaptation analysis.",
      benefits: ["Relocation potential", "Strong directions", "Adaptation risks"],
      audience: ["For those considering relocation", "For choosing a city", "For reducing uncertainty"],
      process: "The result uses personal data, current city and desired destinations.",
    },
  },
  {
    id: "forecast",
    category: "tarot",
    symbol: "sun",
    price: 2990,
    ru: {
      title: "Прогноз: прислушайся к звездам",
      description: "Персональный прогноз на ближайший период.",
      benefits: ["Главные темы периода", "Любовь, деньги, энергия", "Совет для действий"],
      audience: ["Тем, кто хочет планировать", "Тем, кто ищет подсказку", "Тем, кто любит регулярность"],
      process: "Прогноз собирается из базы периодов по дате рождения и выбранной сфере.",
    },
    en: {
      title: "Forecast: listen to the stars",
      description: "A personal forecast for the coming period.",
      benefits: ["Main period themes", "Love, money, energy", "Action advice"],
      audience: ["For planning", "For finding a clue", "For those who like regularity"],
      process: "The forecast is assembled from period blocks by birth date and selected area.",
    },
  },
  {
    id: "tarot",
    category: "tarot",
    symbol: "cards",
    price: 2990,
    ru: {
      title: "Расклады таро",
      description: "Глубокие расклады на важные вопросы.",
      benefits: ["Отношения, финансы, да/нет, будущее", "Персональная трактовка", "PDF результата"],
      audience: ["Тем, кому нужен быстрый ответ", "Тем, кто выбирает направление", "Тем, кто хочет символический разбор"],
      process: "Пользователь выбирает тип расклада, система фиксирует вариант и показывает трактовку из базы.",
    },
    en: {
      title: "Tarot readings",
      description: "Deep readings for important questions.",
      benefits: ["Relationships, finance, yes/no, future", "Personal interpretation", "Result PDF"],
      audience: ["For quick answers", "For choosing a direction", "For symbolic analysis"],
      process: "The user selects the reading type, the system fixes a spread and shows an interpretation from the database.",
    },
  },
];

const serviceProducts = [
  {
    id: "video",
    category: "all",
    price: 0,
    ru: {
      title: "Видео приветствие",
      description: "Короткое знакомство с Astralia и Angelina Pars.",
      benefits: ["Объясняет сервис", "Показывает подход", "Помогает довериться перед покупкой"],
      audience: ["Новым пользователям", "Тем, кто выбирает первый модуль"],
      process: "Видео будет добавлено через админку или CMS.",
    },
    en: {
      title: "Welcome video",
      description: "A short intro to Astralia and Angelina Pars.",
      benefits: ["Explains the service", "Shows the approach", "Builds trust before purchase"],
      audience: ["New users", "First-time buyers"],
      process: "The video will be added through admin or CMS.",
    },
  },
];

const allProducts = [...products, ...serviceProducts];

const historyItems = [
  { title: "Камни-талисманы", date: "29.06.2026", price: "0 ₽" },
  { title: "Где моя энергия?", date: "28.06.2026", price: "10 000 ₽" },
  { title: "Расклады таро", date: "25.06.2026", price: "2 990 ₽" },
];

function t(key) {
  return i18n[state.lang][key] || i18n.ru[key] || key;
}

function productText(product) {
  return product[state.lang] || product.ru;
}

function formatPrice(value) {
  if (value === 0) return state.lang === "ru" ? "0 ₽" : "0 RUB";
  return `${money.format(value)} ₽`;
}

function selectedProduct() {
  return allProducts.find((product) => product.id === state.selectedProductId) || products[0];
}

function productImage(product) {
  return product.id === "video" ? "assets/astralia-logo.svg" : `assets/module-images/${product.id}.jpg`;
}

function symbolSvg(symbol = "star") {
  const icons = {
    target: '<circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="4.4"></circle><circle cx="12" cy="12" r="1.3"></circle><path d="M12 2.5v3"></path><path d="M12 18.5v3"></path><path d="M2.5 12h3"></path><path d="M18.5 12h3"></path>',
    clock: '<circle cx="12" cy="12" r="8.2"></circle><path d="M12 7.2v5.1l3.4 2"></path><path d="M12 3.8V2.5"></path><path d="M12 21.5v-1.3"></path>',
    payment: '<rect x="3.8" y="6.4" width="16.4" height="11.2" rx="2"></rect><path d="M3.8 9.8h16.4"></path><path d="M7.1 14.4h4.7"></path><path d="M15.1 14.4h1.9"></path>',
    leaf: '<path d="M6 15c6.5-.4 10-4 12-10-6.2.4-10.5 3-12 10Z"></path><path d="M6 15c2.8-1.2 5.2-3.1 7.2-5.7"></path><path d="M7 15c-1.1 1.1-1.7 2.4-2 4"></path>',
    body: '<circle cx="12" cy="5.5" r="1.8"></circle><path d="M12 7.5v10.5"></path><path d="M6.5 10h11"></path><path d="M8 20l4-12 4 12"></path><circle cx="12" cy="12" r="8.2"></circle>',
    bolt: '<path d="M13 2 5.5 13h6L10 22l8.5-13h-6L13 2Z"></path>',
    crystal: '<path d="M12 3 5 9l7 12 7-12-7-6Z"></path><path d="M5 9h14"></path><path d="M12 3 9 9l3 12 3-12-3-6Z"></path>',
    money: '<path d="M8 8c1.2-2 2-3 4-3s2.8 1 4 3"></path><path d="M6 10h12l1.8 8.5A2 2 0 0 1 17.8 21H6.2a2 2 0 0 1-2-2.5L6 10Z"></path><path d="M12 13v5"></path><path d="M10 15.2c.6-.6 3.4-.6 4 0 .7.7.1 2-2 2s-2.7-1.3-2-2Z"></path>',
    star: '<path d="M12 2l1.5 7 6.5 3-6.5 3L12 22l-1.5-7L4 12l6.5-3L12 2Z"></path>',
    heart: '<path d="M12 20s-7-4.4-8.6-9.1C2.3 7.5 4.4 5 7.2 5c1.8 0 3.2 1 4.8 2.7C13.6 6 15 5 16.8 5c2.8 0 4.9 2.5 3.8 5.9C19 15.6 12 20 12 20Z"></path><path d="M7 7.5 12 12l5-4.5"></path>',
    moon: '<path d="M16.8 18.4A8 8 0 0 1 9.2 5.6 7 7 0 1 0 16.8 18.4Z"></path><path d="M17.5 4.5l.6 2.1 2.1.6-2.1.6-.6 2.1-.6-2.1-2.1-.6 2.1-.6.6-2.1Z"></path>',
    sign: '<path d="M5 18c4.2-5.6 9.8-5.6 14 0"></path><path d="M8 15c.2-5.4 1.5-9 4-11 2.5 2 3.8 5.6 4 11"></path><path d="M12 4v16"></path>',
    globe: '<circle cx="12" cy="12" r="8.5"></circle><path d="M3.5 12h17"></path><path d="M12 3.5c2.2 2.3 3.2 5.1 3.2 8.5s-1 6.2-3.2 8.5"></path><path d="M12 3.5C9.8 5.8 8.8 8.6 8.8 12s1 6.2 3.2 8.5"></path>',
    sun: '<circle cx="12" cy="12" r="3.5"></circle><path d="M12 2.5v3"></path><path d="M12 18.5v3"></path><path d="M2.5 12h3"></path><path d="M18.5 12h3"></path><path d="m5.3 5.3 2.1 2.1"></path><path d="m16.6 16.6 2.1 2.1"></path><path d="m18.7 5.3-2.1 2.1"></path><path d="m7.4 16.6-2.1 2.1"></path>',
    cards: '<rect x="5" y="4" width="9" height="14" rx="1.5" transform="rotate(-8 9.5 11)"></rect><rect x="10" y="6" width="9" height="14" rx="1.5" transform="rotate(8 14.5 13)"></rect><path d="M14.5 10.5 16 13l-1.5 2.5L13 13l1.5-2.5Z"></path>',
    video: '<circle cx="12" cy="12" r="8"></circle><path d="M10 8.5 16 12l-6 3.5v-7Z"></path>',
  };
  return `<svg class="astro-symbol" viewBox="0 0 24 24" aria-hidden="true">${icons[symbol] || icons.star}</svg>`;
}

function renderTranslations() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  const langToggle = document.querySelector("[data-lang-toggle]");
  if (langToggle) langToggle.checked = state.lang === "en";
}

function renderProducts() {
  const host = document.querySelector("[data-products]");
  const query = state.query.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const text = productText(product);
    const matchesCategory = state.category === "all" || product.category === state.category;
    const matchesQuery = !query || `${text.title} ${text.description}`.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  host.innerHTML = "";
  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.textContent = t("noProducts");
    host.append(empty);
    return;
  }

  filtered.forEach((product) => {
    const text = productText(product);
    const card = document.createElement("button");
    card.type = "button";
    card.className = "product-card";
    card.dataset.route = "product";
    card.dataset.productId = product.id;
    card.innerHTML = `
      <span class="product-card-media">
        <img src="${productImage(product)}" alt="" loading="lazy">
      </span>
      <div class="product-card-top">
        <span class="product-card-icon">${symbolSvg(product.symbol)}</span>
        <span class="badge">${product.funnel ? t("funnel") : t("oneTime")}</span>
      </div>
      <h3>${text.title}</h3>
      <p>${text.description}</p>
      <footer>
        <span class="price">${formatPrice(product.price)}</span>
      </footer>
    `;
    host.append(card);
  });
}

function renderProductDetail() {
  const product = selectedProduct();
  const text = productText(product);
  document.querySelector("[data-product-label]").textContent = product.funnel ? t("funnel") : t("oneTime");
  document.querySelector("[data-product-title]").textContent = text.title;
  document.querySelector("[data-product-price]").textContent = formatPrice(product.price);
  document.querySelector("[data-product-price-bottom]").textContent = formatPrice(product.price);
  document.querySelector("[data-product-description]").textContent = text.description;
  document.querySelector("[data-product-process]").textContent = text.process;
  const productImageElement = document.querySelector("[data-product-image]");
  productImageElement.src = productImage(product);
  productImageElement.alt = text.title;
  document.querySelector("[data-product-symbol]").innerHTML = symbolSvg(product.symbol);
  document.querySelector("[data-checkout-symbol]").innerHTML = symbolSvg(product.symbol);
  document.querySelector("[data-checkout-title]").textContent = text.title;
  document.querySelector("[data-checkout-price]").textContent = formatPrice(product.price);

  renderList("[data-product-benefits]", text.benefits);
  renderList("[data-product-audience]", text.audience);
  renderCheckoutTotal();
}

function renderStaticSymbols() {
  document.querySelectorAll("[data-static-symbol]").forEach((element) => {
    element.innerHTML = symbolSvg(element.dataset.staticSymbol);
  });
}

function renderList(selector, items) {
  const host = document.querySelector(selector);
  host.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    host.append(li);
  });
}

function discountForCurrentProduct() {
  const product = selectedProduct();
  if (!state.appliedPromo) return { total: product.price, message: "" };
  if (state.appliedPromo === "ASTROFREE") {
    if (product.funnel) return { total: 0, message: t("promoFree"), ok: true };
    return { total: product.price, message: t("promoUnavailable"), ok: false };
  }
  if (state.appliedPromo === "STAR15") {
    return { total: Math.round(product.price * 0.85), message: t("promoDiscount"), ok: true };
  }
  return { total: product.price, message: t("promoUnknown"), ok: false };
}

function renderCheckoutTotal() {
  const discount = discountForCurrentProduct();
  document.querySelector("[data-total]").textContent = formatPrice(discount.total);
  document.querySelector("[data-checkout-price]").textContent = formatPrice(selectedProduct().price);
  const payButton = document.querySelector("[data-action='pay']");
  payButton.textContent = discount.total === 0 ? t("getFree") : t("payButton");
  const message = document.querySelector("[data-promo-message]");
  message.textContent = discount.message || "";
  message.className = `promo-message ${discount.message ? (discount.ok ? "ok" : "error") : ""}`;
}

function renderHistory() {
  const host = document.querySelector("[data-history]");
  host.innerHTML = "";
  historyItems.forEach((item) => {
    const row = document.createElement("div");
    row.className = "history-item";
    row.innerHTML = `<div><strong>${item.title}</strong><br><span>${item.date}</span></div><strong>${item.price}</strong>`;
    host.append(row);
  });
}

function goTo(route) {
  state.previousRoute = state.route;
  state.route = route;
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === route);
  });
  document.querySelectorAll(".bottom-nav button").forEach((button) => {
    button.classList.toggle("active", button.dataset.route === route);
  });
  document.querySelector(".phone-frame").classList.toggle("has-back", route !== "home");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function applyPromo() {
  const value = document.querySelector("[data-promo-input]").value.trim().toUpperCase();
  state.appliedPromo = value || null;
  renderCheckoutTotal();
}

function showDemoMessage(message) {
  const host = document.querySelector("[data-promo-message]");
  if (!host) return;
  host.textContent = message;
  host.className = "promo-message ok";
}

document.addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    state.category = categoryButton.dataset.category;
    document.querySelectorAll("[data-category]").forEach((button) => {
      button.classList.toggle("active", button === categoryButton);
    });
    renderProducts();
    return;
  }

  const action = event.target.closest("[data-action]");
  if (action) {
    if (action.dataset.action === "back") goTo(state.previousRoute || "home");
    if (action.dataset.action === "applyPromo") applyPromo();
    if (action.dataset.action === "pay") {
      alert(t("paidDemo"));
      goTo("result");
    }
    if (action.dataset.action === "saveResult") alert(t("savedDemo"));
    if (action.dataset.action === "downloadPdf") alert(t("pdfDemo"));
    return;
  }

  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    if (routeButton.dataset.productId) {
      state.selectedProductId = routeButton.dataset.productId;
      state.appliedPromo = null;
      const input = document.querySelector("[data-promo-input]");
      if (input) input.value = "";
      renderProductDetail();
    }
    goTo(routeButton.dataset.route);
  }
});

document.querySelector("[data-lang-toggle]")?.addEventListener("change", (event) => {
  state.lang = event.target.checked ? "en" : "ru";
  renderAll();
});

document.querySelector("[data-search]").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderProducts();
});

function renderAll() {
  renderTranslations();
  renderStaticSymbols();
  renderProducts();
  renderProductDetail();
  renderHistory();
}

renderAll();
