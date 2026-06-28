// ============================================================
// 1. ДАННЫЕ
// ============================================================

const data = {
  ru: {
    heroTag: '14+ лет практики · B2B · B2C · Business Development',
    heroTitle: 'Бизнес — это <span class="highlight">система</span>,<br>а не набор инструментов.',
    heroText: [
      '<p class="hero__text-lead">«Рост замедляется не из-за отсутствия идей.</p><p class="hero__text-lead" style="margin-top: -0.5rem;">А потому, что маркетинг, продажи и стратегия работают изолированно.»</p>',
      'Устойчивое развитие требует единой модели, где каждое решение усиливает другие.',
      'Маркетинг — это не про инструменты. Это про понимание людей и их потребностей.'
    ],
    heroThought: 'Решение лежит не в инструментах, а в их связи.',
    metrics: ['лет практики', 'рынка B2B · B2C', 'направления', 'развитие', 'системный взгляд', 'C-level опыт'],
    perspectiveLabel: 'Выберите перспективу',
    perspectiveSub: 'Один опыт. Три перспективы. Один системный подход.',
    pLabels: ['Бизнес', 'Маркетинг', 'Стратегия'],
    nav: ['Кейсы', 'Цифры', 'Компетенции', 'Контакты'],
    headerContact: 'Связаться',
    logoSub: 'Бизнес · Маркетинг · Стратегия',
    burgerLabel: 'Меню',
    backToTopLabel: 'Наверх',
    nameLabel: 'Ваше имя',
    emailLabel: 'Email',
    namePlaceholder: 'Как к вам обращаться?',
    emailPlaceholder: 'your@email.com',
    textareaPlaceholder: 'Представьтесь и расскажите о вашем проекте...',
    pageTitle: 'Владимир Барбашин — Executive Casebook',
    casesTitle: 'Практические <span class="highlight">кейсы</span>',
    casesSub: 'Каждый проект — это задача, решение и результат. Принцип один: понять систему, изменить систему, получить устойчивый рост.',
    metricsTitle: 'Цифровой <span class="highlight">след</span>',
    metricsSub: 'Реальные результаты, измеряемые в цифрах',
    nodes: ['лет опыта', 'оборот (₽)', 'брендов', 'SKU', 'дилеров', 'рост лидов', 'магазинов', 'пунктов ИКС', 'рост год к году', 'сотрудников', 'автоматизация', 'партнёров', 'ивенты & медиа', 'трафик сайтов', 'индустрия', 'портал & CRM', 'оборот за 5 лет'],
    compTitle: 'Компетенции,<br><span class="highlight">которые работают</span><br>не по отдельности,<br>а как единая система.',
    compSub: 'В современной компании невозможно провести чёткую границу между маркетингом, коммерцией, развитием продукта, аналитикой, цифровой трансформацией и управлением. Каждое решение влияет на десятки других процессов.',
    compItems: {
      business: [
        { num: '01', title: 'Системное управление', desc: 'Построение управленческих моделей, где каждое решение влияет на всю цепочку создания ценности.' },
        { num: '02', title: 'Коммерческая архитектура', desc: 'Проектирование бизнес-моделей, устойчивых к изменениям рынка и масштабируемых без потери эффективности.' },
        { num: '03', title: 'Стратегический маркетинг', desc: 'Маркетинг как инструмент формирования долгосрочной рыночной позиции, а не разовых акций.' },
        { num: '04', title: 'Операционная эффективность', desc: 'Оптимизация процессов, снижение издержек и повышение управляемости без потери качества.' },
        { num: '05', title: 'Финансовое моделирование', desc: 'Построение моделей, связывающих маркетинговые активности с финансовыми результатами.' },
        { num: '06', title: 'Управление изменениями', desc: 'Внедрение трансформаций, сохраняющих устойчивость компании и вовлекающих команду.' },
        { num: '07', title: 'Развитие партнёрств', desc: 'Создание экосистемы партнёров, усиливающих рыночное влияние компании.' },
        { num: '08', title: 'Исполнение стратегии', desc: 'Превращение стратегических планов в конкретные действия и измеримые результаты.' }
      ],
      marketing: [
        { num: '01', title: 'Бренд-стратегия', desc: 'Разработка позиционирования и идентичности, формирующих устойчивую эмоциональную связь с аудиторией.' },
        { num: '02', title: 'Клиентский опыт', desc: 'Проектирование пути клиента, где каждое касание усиливает лояльность и ценность бренда.' },
        { num: '03', title: 'Контент-маркетинг', desc: 'Создание смыслов и историй, которые превращают аудиторию в сообщество и драйверы роста.' },
        { num: '04', title: 'Digital-экосистема', desc: 'Построение цифровой инфраструктуры, объединяющей все каналы коммуникации в единую систему.' },
        { num: '05', title: 'Трейд-маркетинг', desc: 'Стимулирование спроса в каналах продаж, превращающее партнёров в амбассадоров бренда.' },
        { num: '06', title: 'Маркетинговая аналитика', desc: 'Измерение и интерпретация данных для принятия решений, а не просто составления отчётов.' },
        { num: '07', title: 'Product Marketing', desc: 'Вывод продуктов на рынок через понимание потребностей и создание ценности для пользователя.' },
        { num: '08', title: 'Коммуникационная стратегия', desc: 'Управление сообщениями бренда во всех точках контакта с аудиторией.' }
      ],
      strategy: [
        { num: '01', title: 'Стратегическое видение', desc: 'Формулирование долгосрочных целей и определение путей их достижения в изменчивой среде.' },
        { num: '02', title: 'Анализ рынка и трендов', desc: 'Глубокое понимание рыночных сигналов для опережающих решений, а не реактивных.' },
        { num: '03', title: 'Конкурентное позиционирование', desc: 'Построение уникального предложения, которое невозможно скопировать и которое защищает маржу.' },
        { num: '04', title: 'Трансформация бизнес-модели', desc: 'Пересмотр модели создания ценности для адаптации к новым экономическим и технологическим условиям.' },
        { num: '05', title: 'Стратегическое планирование', desc: 'Создание дорожных карт, которые превращают амбиции в последовательные шаги развития.' },
        { num: '06', title: 'Управление портфелем', desc: 'Оптимизация продуктового портфеля для максимизации синергии и рыночной силы.' },
        { num: '07', title: 'Стратегические альянсы', desc: 'Поиск и развитие партнёрств, усиливающих конкурентные преимущества на годы вперёд.' },
        { num: '08', title: 'Устойчивое развитие', desc: 'Интеграция долгосрочных целей в операционные процессы для создания системного эффекта.' }
      ]
    },
    futureTitle: 'Бизнес будущего —<br>это управление<br><span class="highlight">не функциями,</span><br>а взаимосвязанными системами.',
    futureP1: 'За последние годы бизнес изменился сильнее, чем за предыдущие десятилетия. Изменились технологии, ожидания клиентов, способы принятия решений. Появился искусственный интеллект, автоматизация стала доступной практически каждой компании.',
    futureP2: 'При этом фундамент бизнеса остался прежним: компания создаёт ценность для клиента, команда реализует стратегию, руководитель принимает решения в условиях неопределённости. Меняются инструменты, но не меняются принципы.',
    futureP3: '<strong>Устойчивый и перспективный прогресс любой компании сегодня лежит на пересечении бизнеса, управления и технологий.</strong>',
    contactTitle: 'Продолжить <span class="highlight">разговор</span>',
    contactP1: 'Спасибо, что уделили время знакомству с моим опытом.',
    contactP2: 'Если вы считаете, что мой опыт может быть полезен вашей компании или проекту, буду рад продолжить общение.',
    contactP3: 'Лучшие идеи редко появляются в одиночку. Они рождаются в открытом профессиональном диалоге.',
    msgLabel: 'Ваше сообщение',
    sendBtn: 'Отправить',
    valuesTitle: 'Ценности, которые определяют мой подход к работе',
    values: [
      'Системность — любое решение должно учитывать последствия для всей компании.',
      'Любознательность — сильные решения появляются, когда руководитель продолжает учиться.',
      'Ответственность — каждое решение влияет на людей, клиентов и развитие бизнеса.',
      'Развитие — нет идеальных систем. Любая система может быть улучшена.',
      'Практичность — любая идея должна приносить пользу бизнесу.',
      'Долгосрочный взгляд — устойчивое развитие всегда строится с расчётом на годы вперёд.'
    ],
    quote1: '«В конечном счёте компании развиваются не благодаря отдельным инструментам.',
    quote2: 'Они развиваются благодаря людям, способным видеть систему целиком и последовательно делать её лучше.»',
    caseBusinessTitle: 'Практические <span class="highlight">кейсы</span>',
    caseBusinessSub: 'Каждый проект — это задача, бизнес-решение и измеримый результат.',
    caseMarketingTitle: 'Маркетинговые <span class="highlight">кейсы</span>',
    caseMarketingSub: 'Продукт → Позиционирование → Коммерческий эффект.',
    caseStrategyTitle: 'Стратегические <span class="highlight">кейсы</span>',
    caseStrategySub: 'Видение → Планирование → Долгосрочный рост.',
    caseThoughts: {
      business: 'Решение лежит не в инструментах, а в их связи.',
      marketing: 'Маркетинг — это понимание людей и их потребностей.',
      strategy: 'Стратегия — это не план, а способ мышления.'
    },
    caseBlocks: {
      business: { task: 'Задача', solution: 'Бизнес-решение', result: 'Результат' },
      marketing: { task: 'Задача', solution: 'Маркетинг-решение', result: 'Результат' },
      strategy: { task: 'Стратегическая задача', solution: 'Стратегическое решение', result: 'Результат' }
    },
    brandsLabel: 'Бренды',
    brandsSub: 'с которыми я работал',
    brandsList: ['Fender', 'Yamaha', 'Marshall', 'Mesa Boogie', 'Korg', 'Vox', 'Roland', 'Boss', 'Kawai', 'Gibson', 'Epiphone', 'Ibanez', 'Schecter', 'Orange', 'Blackstar', 'JBL', 'Fishman', 'Sennheiser', 'AKG', 'FBT', 'Behringer', 'Ampeg', 'Line 6', 'Fender Amps', 'Jackson', 'Charvel', 'Gretsch', 'Squier', 'Mono', 'Takamine', 'Soundcraft', 'DBX', 'DigiTech', 'TC Electronic', 'PreSonus', 'Focusrite', 'Novation', 'Akai Professional', 'Native Instruments', 'Ableton', 'Universal Audio', "D'Addario", 'Involight', 'YME audiotechnik', 'Anzhee']
  },
  en: {
    nameLabel: 'Your name',
    emailLabel: 'Email',
    namePlaceholder: 'What should I call you?',
    emailPlaceholder: 'your@email.com',
    heroTag: '14+ years of practice · B2B · B2C · Business Development',
    heroTitle: 'Business is a <span class="highlight">system</span>,<br>not a collection of tools.',
    heroText: [
      '<p class="hero__text-lead">«Growth slows not because of a lack of ideas.</p><p class="hero__text-lead" style="margin-top: -0.5rem;">But because marketing, sales, and strategy operate in isolation.»</p>',
      'Sustainable development requires a unified model where every decision reinforces the others.',
      'Marketing is not about tools. It\'s about understanding people and their needs.'
    ],
    heroThought: 'The solution lies not in tools, but in their connection.',
    metrics: ['years of practice', 'markets B2B · B2C', 'directions', 'development', 'systemic view', 'C-level experience'],
    perspectiveLabel: 'Choose your perspective',
    perspectiveSub: 'One experience. Three perspectives. One systemic approach.',
    pLabels: ['Business', 'Marketing', 'Strategy'],
    nav: ['Cases', 'Metrics', 'Competencies', 'Contact'],
    headerContact: 'Contact',
    logoSub: 'Business · Marketing · Strategy',
    burgerLabel: 'Menu',
    backToTopLabel: 'Back to top',
    textareaPlaceholder: 'Introduce yourself and tell us about your project...',
    pageTitle: 'Vladimir Barbashin — Executive Casebook',
    casesTitle: 'Practice <span class="highlight">cases</span>',
    casesSub: 'Every project is a challenge, a solution, and a result. One principle: understand the system, transform the system, achieve sustainable growth.',
    metricsTitle: 'Digital <span class="highlight">footprint</span>',
    metricsSub: 'Real results measured in numbers',
    nodes: ['years of experience', 'turnover (₽)', 'brands', 'SKU', 'dealers', 'lead growth', 'stores', 'ICS points', 'YoY growth', 'employees', 'automation', 'partners', 'events & media', 'website traffic', 'industry', 'portal & CRM', 'revenue ×2.5'],
    compTitle: 'Competencies<br><span class="highlight">that work</span><br>not separately,<br>but as a unified system.',
    compSub: 'In a modern company, it\'s impossible to draw a clear line between marketing, commerce, product development, analytics, digital transformation, and management. Every decision affects dozens of other processes.',
    compItems: {
      business: [
        { num: '01', title: 'Systemic Management', desc: 'Building governance models where every decision affects the entire value chain.' },
        { num: '02', title: 'Commercial Architecture', desc: 'Designing business models resilient to market shifts and scalable without losing efficiency.' },
        { num: '03', title: 'Strategic Marketing', desc: 'Marketing as a tool for building long-term market positions, not one-off campaigns.' },
        { num: '04', title: 'Operational Efficiency', desc: 'Optimizing processes, reducing costs, and improving controllability without losing quality.' },
        { num: '05', title: 'Financial Modeling', desc: 'Building models that link marketing activities with financial outcomes.' },
        { num: '06', title: 'Change Management', desc: 'Implementing transformations that preserve company stability and engage teams.' },
        { num: '07', title: 'Partnership Development', desc: 'Creating partner ecosystems that amplify market influence.' },
        { num: '08', title: 'Strategy Execution', desc: 'Turning strategic plans into concrete actions and measurable results.' }
      ],
      marketing: [
        { num: '01', title: 'Brand Strategy', desc: 'Developing positioning and identity that creates an enduring emotional connection with audiences.' },
        { num: '02', title: 'Customer Experience', desc: 'Designing customer journeys where every touchpoint strengthens loyalty and brand value.' },
        { num: '03', title: 'Content Marketing', desc: 'Creating meaning and stories that turn audiences into communities and growth drivers.' },
        { num: '04', title: 'Digital Ecosystem', desc: 'Building digital infrastructure that unifies all communication channels into one system.' },
        { num: '05', title: 'Trade Marketing', desc: 'Stimulating demand within sales channels, turning partners into brand ambassadors.' },
        { num: '06', title: 'Marketing Analytics', desc: 'Measuring and interpreting data to drive decisions, not just create reports.' },
        { num: '07', title: 'Product Marketing', desc: 'Launching products based on understanding user needs and value creation.' },
        { num: '08', title: 'Communication Strategy', desc: 'Managing brand messages across all audience touchpoints.' }
      ],
      strategy: [
        { num: '01', title: 'Strategic Vision', desc: 'Formulating long-term goals and defining paths to achieve them in a volatile environment.' },
        { num: '02', title: 'Market & Trend Analysis', desc: 'Deep understanding of market signals for proactive decisions, not reactive ones.' },
        { num: '03', title: 'Competitive Positioning', desc: 'Building a unique proposition that is impossible to copy and protects margins.' },
        { num: '04', title: 'Business Model Transformation', desc: 'Reimagining value creation models to adapt to new economic and technological conditions.' },
        { num: '05', title: 'Strategic Planning', desc: 'Creating roadmaps that turn ambition into a sequence of development steps.' },
        { num: '06', title: 'Portfolio Management', desc: 'Optimizing product portfolios to maximize synergy and market strength.' },
        { num: '07', title: 'Strategic Alliances', desc: 'Identifying and cultivating partnerships that strengthen competitive advantage for years ahead.' },
        { num: '08', title: 'Sustainable Development', desc: 'Integrating long-term objectives into operational processes to create systemic impact.' }
      ]
    },
    futureTitle: 'The future of business<br>is management<br><span class="highlight">not by functions,</span><br>but by interconnected systems.',
    futureP1: 'In recent years, business has changed more than in the previous decade. Technologies, customer expectations, and decision-making methods have transformed. Artificial intelligence has emerged, and automation is now accessible to virtually every company.',
    futureP2: 'Yet the foundation of business remains unchanged: a company creates value for customers, teams execute strategy, leaders make decisions under uncertainty. Tools change, but principles do not.',
    futureP3: '<strong>Today, sustainable and forward-looking progress for any company lies at the intersection of business, management, and technology.</strong>',
    contactTitle: 'Continue the <span class="highlight">conversation</span>',
    contactP1: 'Thank you for taking the time to explore the Executive Casebook.',
    contactP2: 'If you believe my experience could benefit your company or project, I\'d be glad to continue the dialogue.',
    contactP3: 'The best ideas rarely emerge in isolation. They are born in open professional conversation.',
    msgLabel: 'Your message',
    sendBtn: 'Send',
    valuesTitle: 'Values that define my approach to work',
    values: [
      'Systemic thinking — every decision must account for consequences across the entire company.',
      'Curiosity — the strongest solutions emerge when a leader continues learning.',
      'Responsibility — every decision affects people, clients, and business development.',
      'Development — no system is perfect; every system can be improved.',
      'Practicality — any idea must bring tangible benefit to the business.',
      'Long-term perspective — sustainable growth is always built with years in mind.'
    ],
    quote1: '«Ultimately, companies grow not because of individual tools.',
    quote2: 'They grow because of people who can see the whole system and make it better, step by step.»',
    caseBusinessTitle: 'Practice <span class="highlight">cases</span>',
    caseBusinessSub: 'Every project is a task, a business solution, and a measurable result.',
    caseMarketingTitle: 'Marketing <span class="highlight">cases</span>',
    caseMarketingSub: 'Product → Positioning → Commercial effect.',
    caseStrategyTitle: 'Strategic <span class="highlight">cases</span>',
    caseStrategySub: 'Vision → Planning → Long-term growth.',
    caseThoughts: {
      business: 'The solution lies not in tools, but in their connection.',
      marketing: 'Marketing is about understanding people and their needs.',
      strategy: 'Strategy is not a plan. It\'s a way of thinking.'
    },
    caseBlocks: {
      business: { task: 'Task', solution: 'Business solution', result: 'Result' },
      marketing: { task: 'Task', solution: 'Marketing solution', result: 'Result' },
      strategy: { task: 'Strategic task', solution: 'Strategic solution', result: 'Result' }
    },
    brandsLabel: 'Brands',
    brandsSub: "I've worked with",
    brandsList: ['Fender', 'Yamaha', 'Marshall', 'Mesa Boogie', 'Korg', 'Vox', 'Roland', 'Boss', 'Kawai', 'Gibson', 'Epiphone', 'Ibanez', 'Schecter', 'Orange', 'Blackstar', 'JBL', 'Fishman', 'Sennheiser', 'AKG', 'FBT', 'Behringer', 'Ampeg', 'Line 6', 'Fender Amps', 'Jackson', 'Charvel', 'Gretsch', 'Squier', 'Mono', 'Takamine', 'Soundcraft', 'DBX', 'DigiTech', 'TC Electronic', 'PreSonus', 'Focusrite', 'Novation', 'Akai Professional', 'Native Instruments', 'Ableton', 'Universal Audio', "D'Addario", 'Involight', 'YME audiotechnik', 'Anzhee']
  }
};

// ============================================================
// 2. ДАННЫЕ: КЕЙСЫ
// ============================================================

const casesList = {
  business: [
    {
      company: 'INVASK',
      url: 'INVASK.RU',
      stats: [
        { label: { ru: 'Оборот', en: 'Revenue' }, value: '2+ млрд ₽', highlight: true },
        { label: { ru: 'SKU', en: 'SKU' }, value: '15 000+' },
        { label: { ru: 'Брендов', en: 'Brands' }, value: '100+' },
        { label: { ru: 'Дилеров', en: 'Dealers' }, value: '1 300+' }
      ],
      blocks: {
        ru: {
          task: 'Возглавить и выстроить маркетинговое направление в одном из крупнейших российских дистрибьюторов профессионального оборудования (оборот 2 млрд+ руб., 100+ брендов, 1300+ дилеров).',
          solution: 'Разработана интегрированная коммерческая модель: цифровая экосистема для дилеров (портал, CRM, автоматизация), программы лояльности, многоуровневые скидки, автоматизированный контроль резервов и дебиторской задолженности. Координация кросс-функциональных проектов: продажи, закупки, логистика, IT, бухгалтерия.',
          result: 'Участие в росте оборота с 800 млн до 2+ млрд руб. Создан один из наиболее функциональных дилерских порталов в отрасли. Рост посещаемости цифровых ресурсов на 30%+. Цифровая инфраструктура прошла полную миграцию платформы с сохранением всех бизнес-процессов.'
        },
        en: {
          task: 'Lead and build the marketing function in one of Russia\'s largest distributors of professional equipment (turnover 2+ billion RUB, 100+ brands, 1300+ dealers).',
          solution: 'Developed an integrated commercial model: digital ecosystem for dealers (portal, CRM, automation), loyalty programs, multi-level discounts, automated control of reserves and accounts receivable. Cross-functional coordination: sales, procurement, logistics, IT, accounting.',
          result: 'Contributed to revenue growth from 800 million to 2+ billion RUB. Created one of the most functional dealer portals in the industry. Increased digital resource traffic by 30%+. Full platform migration with all business processes preserved.'
        }
      }
    },
    {
      company: 'A&T Trade',
      url: 'ATTRADE.RU',
      stats: [
        { label: { ru: 'Дилеров и партнёров', en: 'Dealers & Partners' }, value: '1 500+' },
        { label: { ru: 'Розничных магазинов', en: 'Retail stores' }, value: '40+' },
        { label: { ru: 'Сотрудников', en: 'Employees' }, value: '300+' },
        { label: { ru: 'Рост Fender', en: 'Fender growth' }, value: '+20%', highlight: true }
      ],
      blocks: {
        ru: {
          task: 'Развивать портфель брендов Fender Musical Instruments Corporation (Fender, Jackson, Charvel, Gretsch, Squier) в 40+ собственных розничных магазинах сети и дилерских точках по всей России (онлайн и офлайн витрина).',
          solution: 'Выстроена полная система развития бренда: ассортиментная стратегия, планирование закупок, совместные маркетинговые программы с европейским офисом производителя, федеральные обучающие программы, масштабные мероприятия (Fender Day одновременно в Москве и Санкт-Петербурге).',
          result: 'Стабильный рост продаж портфеля Fender в среднем на 20% год к году. Управление одним из наиболее маржинальных международных брендов на российском рынке. Развитие artist relations и партнёрских программ на федеральном уровне.'
        },
        en: {
          task: 'Develop the Fender Musical Instruments Corporation brand portfolio (Fender, Jackson, Charvel, Gretsch, Squier) across 40+ owned retail stores and dealer points throughout Russia (online and offline).',
          solution: 'Built a comprehensive brand development system: assortment strategy, procurement planning, joint marketing programs with the manufacturer\'s European office, federal training programs, and large-scale events (Fender Day simultaneously in Moscow and Saint Petersburg).',
          result: 'Stable year-over-year sales growth of the Fender portfolio averaging 20%. Managed one of the most profitable international brands in the Russian market. Developed artist relations and partnership programs at the federal level.'
        }
      }
    },
    {
      company: 'ANZHEE',
      url: 'ANZHEE.RU',
      stats: [
        { label: { ru: 'Оборот', en: 'Revenue' }, value: '400+ млн ₽' },
        { label: { ru: 'SKU', en: 'SKU' }, value: '1 500+' },
        { label: { ru: 'Брендов', en: 'Brands' }, value: '20+' },
        { label: { ru: 'Активных дилеров', en: 'Active Dealers' }, value: '300+' }
      ],
      blocks: {
        ru: {
          task: 'Выстроить маркетинговую стратегию и цифровую инфраструктуру для производителя и дистрибьютора профессионального оборудования (оборот 400 млн+ руб., 20+ брендов, 300+ дилеров). Обеспечить рост лидов и усиление органической видимости в условиях жёсткой конкуренции на профессиональном рынке.',
          solution: 'Оптимизированы digital-каналы: перераспределение бюджетов, настройка аналитики и рекламных кампаний. Рост органической видимости на 310+ пунктов ИКС за счёт контент-стратегии и технической оптимизации. Организованы отраслевые мероприятия и дилерские программы с бюджетом до 6 млн руб. Внедрена AI-автоматизация маркетинга, контента и внутренних процессов, что позволило сократить ручной труд и ускорить обработку заявок.',
          result: 'Количество лидов выросло на 30%+. Поисковая видимость увеличилась на 310+ пунктов ИКС. За счёт AI-автоматизации сокращены операционные затраты и время обработки заявок. Запущены новые продуктовые направления совместно с коммерческим отделом.'
        },
        en: {
          task: 'Build the marketing strategy and digital infrastructure for a manufacturer and distributor of professional equipment (revenue 400+ million RUB, 20+ brands, 300+ dealers). Drive lead growth and increase organic visibility in a highly competitive professional market.',
          solution: 'Optimized digital channels: budget reallocation, analytics setup, and campaign tuning. Increased organic visibility by 310+ ICS points through content strategy and technical optimization. Organized industry events and dealer programs with budgets up to 6 million RUB. Implemented AI-based automation of marketing, content, and internal processes, reducing manual workload and accelerating lead processing.',
          result: 'Lead generation increased by 30%+. Search visibility improved by 310+ ICS points. AI automation reduced operational costs and processing times. Launched new product lines in collaboration with the commercial department.'
        }
      }
    }
  ],
  marketing: [
    {
      company: 'INVASK',
      url: 'INVASK.RU',
      stats: [
        { label: { ru: 'Оборот', en: 'Revenue' }, value: '2+ млрд ₽', highlight: true },
        { label: { ru: 'SKU', en: 'SKU' }, value: '15 000+' },
        { label: { ru: 'Брендов', en: 'Brands' }, value: '100+' },
        { label: { ru: 'Дилеров', en: 'Dealers' }, value: '1 300+' }
      ],
      blocks: {
        ru: {
          task: 'Выстроить маркетинговую систему для крупнейшего дистрибьютора профессионального оборудования. Обеспечить рост узнаваемости брендов и усиление позиций на рынке.',
          solution: 'Разработана комплексная маркетинговая стратегия: цифровая экосистема для дилеров (портал, CRM, автоматизация), программы лояльности, трейд-маркетинг, контент-стратегия. Координация кросс-функциональных проектов для усиления брендов.',
          result: 'Рост посещаемости цифровых ресурсов на 30%+. Создан один из наиболее функциональных дилерских порталов в отрасли. Участие в росте оборота с 800 млн до 2+ млрд руб.'
        },
        en: {
          task: 'Build a marketing system for the largest distributor of professional equipment. Drive brand awareness growth and strengthen market positions.',
          solution: 'Developed a comprehensive marketing strategy: digital dealer ecosystem (portal, CRM, automation), loyalty programs, trade marketing, content strategy. Cross-functional coordination to strengthen brand positioning.',
          result: 'Increased digital resource traffic by 30%+. Created one of the industry\'s most functional dealer portals. Contributed to revenue growth from 800 million to 2+ billion RUB.'
        }
      }
    },
    {
      company: 'A&T Trade',
      url: 'ATTRADE.RU',
      stats: [
        { label: { ru: 'Дилеров и партнёров', en: 'Dealers & Partners' }, value: '1 500+' },
        { label: { ru: 'Розничных магазинов', en: 'Retail stores' }, value: '40+' },
        { label: { ru: 'Сотрудников', en: 'Employees' }, value: '300+' },
        { label: { ru: 'Рост Fender', en: 'Fender growth' }, value: '+20%', highlight: true }
      ],
      blocks: {
        ru: {
          task: 'Усилить позиции Fender, Jackson, Charvel, Gretsch, Squier на российском рынке. Повысить узнаваемость брендов и лояльность дилеров.',
          solution: 'Разработана ассортиментная стратегия, запущены совместные маркетинговые программы с европейским офисом Fender. Проведены федеральные обучающие программы для дилеров и масштабные мероприятия (Fender Day в Москве и Санкт-Петербурге).',
          result: 'Стабильный рост продаж портфеля Fender на 20% год к году. Развитие artist relations и партнёрских программ на федеральном уровне.'
        },
        en: {
          task: 'Strengthen the positions of Fender, Jackson, Charvel, Gretsch, and Squier in the Russian market. Increase brand awareness and dealer loyalty.',
          solution: 'Developed an assortment strategy and launched joint marketing programs with Fender\'s European office. Conducted federal training programs for dealers and large-scale events (Fender Day in Moscow and Saint Petersburg).',
          result: 'Stable year-over-year sales growth of the Fender portfolio averaging 20%. Developed artist relations and partnership programs at the federal level.'
        }
      }
    },
    {
      company: 'ANZHEE',
      url: 'ANZHEE.RU',
      stats: [
        { label: { ru: 'Оборот', en: 'Revenue' }, value: '400+ млн ₽' },
        { label: { ru: 'SKU', en: 'SKU' }, value: '1 500+' },
        { label: { ru: 'Брендов', en: 'Brands' }, value: '20+' },
        { label: { ru: 'Активных дилеров', en: 'Active Dealers' }, value: '300+' }
      ],
      blocks: {
        ru: {
          task: 'Выстроить маркетинговую стратегию для производителя профессионального оборудования. Обеспечить рост лидов и усиление бренда в условиях конкуренции.',
          solution: 'Оптимизированы digital-каналы, усилена органическая видимость (+310 ИКС). Запущены отраслевые мероприятия и дилерские программы (бюджет 6 млн руб.). Внедрена AI-автоматизация маркетинга и контента.',
          result: 'Рост лидов на 30%+. Увеличение поисковой видимости на 310+ пунктов ИКС. Сокращение операционных затрат за счёт AI-автоматизации. Запуск новых продуктовых направлений.'
        },
        en: {
          task: 'Build a marketing strategy for a professional equipment manufacturer. Drive lead growth and strengthen the brand in a competitive environment.',
          solution: 'Optimized digital channels, enhanced organic visibility (+310 ICS). Launched industry events and dealer programs (budget 6 million RUB). Implemented AI-based marketing and content automation.',
          result: 'Lead generation increased by 30%+. Search visibility improved by 310+ ICS points. AI automation reduced operational costs. Launched new product lines.'
        }
      }
    }
  ],
  strategy: [
    {
      company: 'INVASK',
      url: 'INVASK.RU',
      stats: [
        { label: { ru: 'Оборот', en: 'Revenue' }, value: '2+ млрд ₽', highlight: true },
        { label: { ru: 'SKU', en: 'SKU' }, value: '15 000+' },
        { label: { ru: 'Брендов', en: 'Brands' }, value: '100+' },
        { label: { ru: 'Дилеров', en: 'Dealers' }, value: '1 300+' }
      ],
      blocks: {
        ru: {
          task: 'Построить долгосрочную стратегию развития крупнейшего дистрибьютора профессионального оборудования. Определить точки роста и конкурентные преимущества на 5 лет вперёд.',
          solution: 'Разработана многолетняя стратегия цифровой трансформации: миграция платформы, внедрение CRM и 1С, автоматизация резервов и контроля дебиторки. Определены ключевые показатели эффективности и дорожная карта развития.',
          result: 'Рост оборота с 800 млн до 2+ млрд руб. Создана устойчивая система управления, прошедшая проверку кризисами и изменениями рынка.'
        },
        en: {
          task: 'Build a long-term development strategy for the largest distributor of professional equipment. Identify growth points and competitive advantages for the next 5 years.',
          solution: 'Developed a multi-year digital transformation strategy: platform migration, CRM and 1C implementation, automation of reserves and receivables control. Defined KPIs and a development roadmap.',
          result: 'Revenue growth from 800 million to 2+ billion RUB. Created a resilient management system that weathered market crises and changes.'
        }
      }
    },
    {
      company: 'A&T Trade',
      url: 'ATTRADE.RU',
      stats: [
        { label: { ru: 'Дилеров и партнёров', en: 'Dealers & Partners' }, value: '1 500+' },
        { label: { ru: 'Розничных магазинов', en: 'Retail stores' }, value: '40+' },
        { label: { ru: 'Сотрудников', en: 'Employees' }, value: '300+' },
        { label: { ru: 'Рост Fender', en: 'Fender growth' }, value: '+20%', highlight: true }
      ],
      blocks: {
        ru: {
          task: 'Разработать стратегию развития портфеля Fender в России на 3–5 лет с учётом глобальных трендов и локальных особенностей рынка.',
          solution: 'Построена система долгосрочного развития брендов: ассортиментная стратегия на основе аналитики, федеральные программы обучения дилеров, масштабные мероприятия (Fender Day) для усиления бренда на годы вперёд.',
          result: 'Стабильный рост продаж на 20% год к году на протяжении 3 лет. Создана устойчивая система развития брендов, не зависящая от отдельных рыночных колебаний.'
        },
        en: {
          task: 'Develop a strategy for the Fender portfolio in Russia over 3–5 years, taking into account global trends and local market specifics.',
          solution: 'Built a long-term brand development system: analytics-based assortment strategy, federal dealer training programs, and large-scale events (Fender Day) to strengthen the brand for years ahead.',
          result: 'Stable year-over-year sales growth averaging 20% for 3 consecutive years. Created a sustainable brand development system independent of short-term market fluctuations.'
        }
      }
    },
    {
      company: 'ANZHEE',
      url: 'ANZHEE.RU',
      stats: [
        { label: { ru: 'Оборот', en: 'Revenue' }, value: '400+ млн ₽' },
        { label: { ru: 'SKU', en: 'SKU' }, value: '1 500+' },
        { label: { ru: 'Брендов', en: 'Brands' }, value: '20+' },
        { label: { ru: 'Активных дилеров', en: 'Active Dealers' }, value: '300+' }
      ],
      blocks: {
        ru: {
          task: 'Разработать стратегию роста для производителя профессионального оборудования на 3 года. Усилить позиции в нише и выйти на новые сегменты рынка.',
          solution: 'Построена стратегия развития на основе AI-аналитики и рыночных данных. Определены ключевые направления роста, запущены новые продуктовые линейки, выстроена система мероприятий и дилерских программ.',
          result: 'Рост лидов на 30%+. Создана стратегия, которая продолжает работать после завершения проекта. Компания вышла на новые рыночные сегменты.'
        },
        en: {
          task: 'Develop a 3-year growth strategy for a professional equipment manufacturer. Strengthen niche positions and expand into new market segments.',
          solution: 'Built a development strategy based on AI analytics and market data. Identified key growth areas, launched new product lines, and established a system of events and dealer programs.',
          result: 'Lead generation increased by 30%+. Created a strategy that continues to deliver results beyond the project. Company entered new market segments.'
        }
      }
    }
  ]
};

// ============================================================
// 3. ЛОГИКА ПРИЛОЖЕНИЯ
// ============================================================

let currentLang = 'ru';
let currentPerspective = 'business';

function getLangData() { return data[currentLang]; }
function getCaseBlocks() { return data[currentLang].caseBlocks[currentPerspective] || data[currentLang].caseBlocks.business; }

// ============================================================
// 4. РЕНДЕРИНГ
// ============================================================

function syncAccentStyles() {
  const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#C9A84C';
  document.querySelectorAll('.highlight').forEach(el => { el.style.color = accent; });
  document.querySelectorAll('.hero-metric__number').forEach(el => { el.style.color = accent; });
  document.querySelectorAll('.metric-node__number').forEach(el => { el.style.color = accent; });
  document.querySelectorAll('.competency-card__num').forEach(el => { el.style.color = accent; });
}

function renderHero() {
  const d = getLangData();
  document.getElementById('heroTag').innerHTML = d.heroTag;
  document.getElementById('heroTitle').innerHTML = d.heroTitle;
  const textEl = document.getElementById('heroText');
  textEl.innerHTML = d.heroText.map(p => `<p>${p}</p>`).join('');
  document.getElementById('heroThought').querySelector('p').textContent = d.heroThought;
  const labels = ['m1','m2','m3','m4','m5','m6'];
  d.metrics.forEach((label, i) => {
    if (labels[i]) document.getElementById(labels[i]).textContent = label;
  });
}

function renderNav() {
  const d = getLangData();
  const navItems = ['navCases','navMetrics','navCompetencies','navContact'];
  d.nav.forEach((label, i) => {
    if (navItems[i]) document.getElementById(navItems[i]).textContent = label;
  });
  document.getElementById('headerContact').textContent = d.headerContact;
  document.getElementById('logoSub').textContent = d.logoSub;
  document.getElementById('burger').setAttribute('aria-label', d.burgerLabel);
  document.getElementById('backToTop').setAttribute('aria-label', d.backToTopLabel);
}

function renderPerspective() {
  const d = getLangData();
  document.getElementById('perspectiveLabel').innerHTML = `<span class="pulse-text">${d.perspectiveLabel}</span>`;
  document.getElementById('perspectiveSub').textContent = d.perspectiveSub;
  const labels = ['pBusinessLabel','pMarketingLabel','pStrategyLabel'];
  d.pLabels.forEach((label, i) => {
    if (labels[i]) document.getElementById(labels[i]).textContent = label;
  });
}

function renderMetrics() {
  const d = getLangData();
  document.getElementById('metricsTitle').innerHTML = d.metricsTitle;
  document.getElementById('metricsSub').textContent = d.metricsSub;
  const nodeIds = ['n1','n2','n3','n4','n5','n6','n7','n8','n9','n10','n11','n12','n13','n14','n15','n16','n17'];
  d.nodes.forEach((label, i) => {
    const el = document.getElementById(nodeIds[i]);
    if (el) el.textContent = label;
  });

  // Update category labels per language
  const ruCats = ['Опыт','Масштаб','Портфель','Ассортимент','Сеть','Лидген','Розница','SEO','Продажи','Команда','Автоматизация','B2B','Бюджет','Digital','Индустрия','CRM','Рост'];
  const enCats = ['Experience','Scale','Portfolio','Assortment','Network','Lead Gen','Retail','SEO','Sales','Team','Automation','B2B','Budget','Digital','Industry','CRM','Growth'];
  const cats = d === getLangData() && document.documentElement.lang === 'en' ? enCats : (currentLang === 'en' ? enCats : ruCats);
  for (let i = 1; i <= 17; i++) {
    const el = document.getElementById('nc' + i);
    if (el) el.textContent = cats[i-1] || '';
  }
}

function renderCompetencies() {
  const d = getLangData();
  document.getElementById('compTitle').innerHTML = d.compTitle;
  document.getElementById('compSub').textContent = d.compSub;
  const items = d.compItems[currentPerspective] || d.compItems.business;
  const grid = document.getElementById('compGrid');
  grid.innerHTML = items.map(item => `
    <div class="competency-card reveal">
      <div class="competency-card__num">${item.num}</div>
      <h4>${item.title}</h4>
      <p>${item.desc}</p>
    </div>
  `).join('');
  setTimeout(() => {
    grid.querySelectorAll('.competency-card').forEach(el => el.classList.add('visible'));
  }, 100);
}

function renderFuture() {
  const d = getLangData();
  document.getElementById('futureTitle').innerHTML = d.futureTitle;
  document.getElementById('futureP1').textContent = d.futureP1;
  document.getElementById('futureP2').textContent = d.futureP2;
  document.getElementById('futureP3').innerHTML = d.futureP3;
}

function renderContact() {
  const d = getLangData();
  document.getElementById('contactTitle').innerHTML = d.contactTitle;
  document.getElementById('contactP1').textContent = d.contactP1;
  document.getElementById('contactP2').textContent = d.contactP2;
  document.getElementById('contactP3').textContent = d.contactP3;
  document.getElementById('nameLabel').textContent = d.nameLabel || 'Your name';
  document.getElementById('emailLabel').textContent = d.emailLabel || 'Email';
  document.getElementById('msgLabel').textContent = d.msgLabel;
  document.getElementById('name').setAttribute('placeholder', d.namePlaceholder || 'What should I call you?');
  document.getElementById('email').setAttribute('placeholder', d.emailPlaceholder || 'your@email.com');
  document.getElementById('sendBtn').textContent = d.sendBtn;
  document.getElementById('message').setAttribute('placeholder', d.textareaPlaceholder);
  document.getElementById('valuesTitle').textContent = d.valuesTitle;
  const vIds = ['v1t','v2t','v3t','v4t','v5t','v6t'];
  d.values.forEach((text, i) => {
    if (vIds[i]) document.getElementById(vIds[i]).textContent = text;
  });
  document.getElementById('quote1').textContent = d.quote1;
  document.getElementById('quote2').textContent = d.quote2;
}

function renderBrands() {
  const d = getLangData();
  const labelEl = document.getElementById('brandsLabel');
  const subEl = document.getElementById('brandsSub');
  const track = document.getElementById('brandsTrack');
  
  if (labelEl) labelEl.textContent = d.brandsLabel;
  if (subEl) subEl.textContent = d.brandsSub;
  if (!track) return;
  
  if (track.children.length > 0) return;
  
  const brands = d.brandsList || [];
  const doubled = [...brands, ...brands];
  track.innerHTML = doubled.map(brand => `<span class="brand-slide">${brand}</span>`).join('');
}

function renderCases(preserveScroll = false) {
  const d = getLangData();
  const perspective = currentPerspective;
  const scrollY = preserveScroll ? window.scrollY : 0;

  let title, subtitle;
  if (perspective === 'business') {
    title = d.caseBusinessTitle;
    subtitle = d.caseBusinessSub;
  } else if (perspective === 'marketing') {
    title = d.caseMarketingTitle;
    subtitle = d.caseMarketingSub;
  } else {
    title = d.caseStrategyTitle;
    subtitle = d.caseStrategySub;
  }

  document.getElementById('casesTitle').innerHTML = title;
  document.getElementById('casesSub').innerHTML = `<p>${subtitle}</p>`;
  document.getElementById('heroThought').querySelector('p').textContent = d.caseThoughts[perspective] || d.caseThoughts.business;

  const cases = casesList[perspective] || casesList.business;
  const container = document.getElementById('casesContainer');
  const blockLabels = getCaseBlocks();

  let html = '<div class="cases-list stagger">';
  cases.forEach(c => {
    const b = c.blocks[currentLang] || c.blocks.ru;
    html += `
      <div class="case-card reveal">
        <div class="case-card__top">
          <span class="case-card__company">${c.company}</span>
          <span class="case-card__url">${c.url}</span>
        </div>
        <div class="case-card__stats">
          ${c.stats.map(s => `<span><strong>${s.value}</strong> ${s.label[currentLang] || s.label.ru}</span>`).join('')}
        </div>
        <div class="case-card__block">
          <div class="case-card__block-title">${blockLabels.task}</div>
          <p>${b.task}</p>
        </div>
        <div class="case-card__block">
          <div class="case-card__block-title">${blockLabels.solution}</div>
          <p>${b.solution}</p>
        </div>
        <div class="case-card__block">
          <div class="case-card__block-title">${blockLabels.result}</div>
          <p>${b.result}</p>
        </div>
      </div>
    `;
  });
  html += '</div>';

  container.classList.remove('fade-in');
  container.classList.add('fade-out');

  setTimeout(() => {
    container.innerHTML = html;
    container.classList.remove('fade-out');
    container.classList.add('fade-in');
    syncAccentStyles();
    requestAnimationFrame(() => {
      container.querySelectorAll('.case-card').forEach(el => el.classList.add('visible'));
      if (preserveScroll) {
        window.scrollTo({ top: scrollY, behavior: 'auto' });
      }
    });
  }, 180);
}

function renderAll() {
  renderHero();
  renderNav();
  renderPerspective();
  renderMetrics();
  renderCompetencies();
  renderFuture();
  renderContact();
  renderBrands();
  renderCases();
  syncAccentStyles();
}

// ============================================================
// 5. ПЕРЕКЛЮЧЕНИЕ
// ============================================================

function switchPerspective(perspective) {
  if (perspective === currentPerspective) return;

  const scrollY = window.scrollY;
  currentPerspective = perspective;

  document.querySelectorAll('.perspective-option').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`.perspective-option[data-perspective="${perspective}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  applyTheme(perspective);
  renderCases(true);

  setTimeout(() => {
    const section = document.getElementById('cases');
    if (section) {
      const top = window.scrollY + section.getBoundingClientRect().top - 96;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, 220);

  try { localStorage.setItem('executive_perspective', perspective); } catch (e) {}
}

function applyTheme(perspective) {
  const accentMap = {
    business: '#C9A84C',
    marketing: '#4A9EFF',
    strategy: '#A78BFA'
  };
  const glowMap = {
    business: 'rgba(201,168,76,0.20)',
    marketing: 'rgba(74,158,255,0.20)',
    strategy: 'rgba(167,139,250,0.20)'
  };
  const borderMap = {
    business: 'rgba(201,168,76,0.12)',
    marketing: 'rgba(74,158,255,0.12)',
    strategy: 'rgba(167,139,250,0.12)'
  };

  const accent = accentMap[perspective] || '#C9A84C';
  const glow = glowMap[perspective] || 'rgba(201,168,76,0.20)';
  const border = borderMap[perspective] || 'rgba(201,168,76,0.12)';

  document.body.className = `perspective-${perspective}`;
  document.documentElement.style.setProperty('--accent', accent);
  document.documentElement.style.setProperty('--accent-glow', glow);
  document.documentElement.style.setProperty('--accent-border', border);

  const switchEl = document.querySelector('.perspective-switch');
  if (switchEl) switchEl.style.borderColor = border;

  document.querySelectorAll('.btn--primary').forEach(el => { el.style.background = accent; });

  syncAccentStyles();
}

function switchLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  document.title = lang === 'ru' ? data.ru.pageTitle : data.en.pageTitle;

  const langMap = {
    ru: { active: 'Русский', inactive: 'English' },
    en: { active: 'English', inactive: 'Русский' }
  };

  document.getElementById('langActive').textContent = langMap[lang].active;
  document.getElementById('langInactive').textContent = langMap[lang].inactive;
  document.getElementById('langActiveF').textContent = langMap[lang].active;
  document.getElementById('langInactiveF').textContent = langMap[lang].inactive;

  renderAll();
  try { localStorage.setItem('executive_lang', lang); } catch (e) {}
}

function loadSaved() {
  let savedLang = 'ru';
  let savedPerspective = 'business';

  try {
    const sl = localStorage.getItem('executive_lang');
    if (sl === 'ru' || sl === 'en') savedLang = sl;
    const sp = localStorage.getItem('executive_perspective');
    if (sp === 'business' || sp === 'marketing' || sp === 'strategy') savedPerspective = sp;
  } catch (e) {}

  currentLang = savedLang;
  currentPerspective = savedPerspective;

  document.title = savedLang === 'ru' ? data.ru.pageTitle : data.en.pageTitle;

  const langMap = {
    ru: { active: 'Русский', inactive: 'English' },
    en: { active: 'English', inactive: 'Русский' }
  };

  document.getElementById('langActive').textContent = langMap[savedLang].active;
  document.getElementById('langInactive').textContent = langMap[savedLang].inactive;
  document.getElementById('langActiveF').textContent = langMap[savedLang].active;
  document.getElementById('langInactiveF').textContent = langMap[savedLang].inactive;

  document.querySelectorAll('.perspective-option').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.perspective-option[data-perspective="${savedPerspective}"]`);
  if (btn) btn.classList.add('active');

  applyTheme(savedPerspective);
  renderAll();
}

// ============================================================
// 6. АНИМАЦИЯ ДЛЯ ГЕОМЕТРИЧЕСКОЙ СЕТКИ
// ============================================================

function initMetricsCloud() {
  const nodes = document.querySelectorAll('.metric-node');
  const diagonals = document.querySelector('.cloud-diagonals');
  const orbits = document.querySelectorAll('.cloud-orbit');

  if (!nodes.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay) || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  nodes.forEach(node => observer.observe(node));

  // Trigger progress bars when node becomes visible
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.mn-bar-fill');
        if (fill) {
          const w = fill.style.cssText.match(/--mnw:\s*([\d.%]+)/);
          if (w) setTimeout(() => { fill.style.width = w[1]; }, 400);
        }
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  nodes.forEach(node => barObserver.observe(node));

  let visibleCount = 0;
  const totalNodes = nodes.length;
  nodes.forEach(node => {
    const checkObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visibleCount++;
          if (visibleCount >= Math.ceil(totalNodes * 0.6)) {
            if (diagonals) diagonals.classList.add('active');
            orbits.forEach(orbit => orbit.classList.add('active'));
          }
          checkObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    checkObserver.observe(node);
  });
}

// ============================================================
// 7. ИНИЦИАЛИЗАЦИЯ
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

  const buttons = document.querySelectorAll('.perspective-option');

  buttons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();

      const perspective = this.dataset.perspective;
      if (perspective === currentPerspective) return;

      buttons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      switchPerspective(perspective);
    });
  });

  loadSaved();

  document.getElementById('langSwitch').addEventListener('click', function() {
    switchLang(currentLang === 'ru' ? 'en' : 'ru');
  });

  document.getElementById('langSwitchFooter').addEventListener('click', function() {
    switchLang(currentLang === 'ru' ? 'en' : 'ru');
  });

  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    nav.classList.toggle('open');
  });

  document.querySelectorAll('.nav a').forEach(function(link) {
    link.addEventListener('click', function() {
      burger.classList.remove('active');
      nav.classList.remove('open');
    });
  });

  const backBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', function() {
    backBtn.classList.toggle('visible', window.pageYOffset > 400);
  });
  backBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    header.classList.toggle('scrolled', window.pageYOffset > 50);
  });

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .stagger, .competency-card, .case-card, .value-item, .card')
    .forEach(function(el) {
      observer.observe(el);
    });

  initMetricsCloud();

  console.log('✅ Executive Casebook v20 — полная версия');
});

// ============================================================
// 8. ФОРСИРОВАННАЯ ЗАГРУЗКА СЛАЙДЕРА
// ============================================================
(function forceBrands() {
  function renderBrandsForce() {
    const track = document.getElementById('brandsTrack');
    const label = document.getElementById('brandsLabel');
    const sub = document.getElementById('brandsSub');
    
    if (!track) {
      setTimeout(renderBrandsForce, 300);
      return;
    }
    
    if (track.children.length > 0) return;
    
    const d = getLangData();
    if (!d || !d.brandsList) {
      setTimeout(renderBrandsForce, 300);
      return;
    }
    
    if (label) label.textContent = d.brandsLabel;
    if (sub) sub.textContent = d.brandsSub;
    
    const brands = d.brandsList || [];
    const doubled = [...brands, ...brands];
    track.innerHTML = doubled.map(b => `<span class="brand-slide">${b}</span>`).join('');
    
    console.log('✅ Слайдер загружен принудительно');
  }
  
  renderBrandsForce();
  setTimeout(renderBrandsForce, 500);
})();