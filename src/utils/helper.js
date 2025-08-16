import { Address, Ciebiesvg1, Ciebiesvg2, Ciebiesvg3, Ciebiesvg4, Ciebiesvg5, Ciebiesvg6, Dlasvg1, Dlasvg2, Dlasvg3, Dlasvg4, Email, Facebook, Insta, Jaksvg1, Jaksvg2, Jaksvg3, Linkedin, Modutydlasvg1, Modutydlasvg2, Modutydlasvg3, Modutydlasvg4, Phone, Swipersvg1, Swipersvg2, Swipersvg3, Swipersvg4, Wartosvg1, Wartosvg2, Wartosvg3, Wartosvg4, Wartosvg5, Youtube } from "./icons"
import img1 from '../assets/webp/img1.webp'
import img2 from '../assets/webp/img2.webp'
import img3 from '../assets/webp/img3.webp'
import img4 from '../assets/webp/img4.webp'
import zoelogo from '../assets/png/Zoe LOGO.png'

export const NavLinks = [
    {
        name: 'Strona Główna',
        link: '/',
    },
    {
        name: 'Dla kogo?',
        link: 'dlakogo',
    },
    {
        name: 'Jak to działa?',
        link: 'jak',
    },
    {
        name: 'Moduły',
        link: 'moduty',
    },
    {
        withImage: true,
        image: zoelogo,
        link: '/',
    },

]

export const Heroswiper_Data = [
    {
        img: img1,
        description: 'Twoje automatyczne faktury, obliczenia depozytów, dochody i obsługa zadłużenia',
        svg: Swipersvg1,
    },
    {
        img: img2,
        description: 'Wszystkie informacje o Twoich mieszkaniach, domach, pokojach i kawalerkach',
        svg: Swipersvg2,
    },
    {
        img: img3,
        description: 'Twoje automatyczne faktury, obliczenia depozytów, dochody i obsługa zadłużenia',
        svg: Swipersvg3,
    },
    {
        img: img4,
        description: 'Wszystko, czego potrzebujesz, aby zapewnić najlepszą obsługę swoim partnerom.',
        svg: Swipersvg4,
    },
    {
        img: img3,
        description: 'Wszystko, czego potrzebujesz, aby zarządzać wszystkimi najemcami i zapewnić im bardziej komfortowy pobyt.',
        svg: Swipersvg1,
    },
    {
        img: img1,
        description: 'Twoje automatyczne faktury, obliczenia depozytów, dochody i obsługa zadłużenia',
        svg: Swipersvg2,
    },
    {
        img: img2,
        description: 'Wszystkie informacje o Twoich mieszkaniach, domach, pokojach i kawalerkach',
        svg: Swipersvg3,
    },
    {
        img: img3,
        description: 'Twoje automatyczne faktury, obliczenia depozytów, dochody i obsługa zadłużenia',
        svg: Swipersvg4,
    },

]

export const Dla_Data = [
    {
        title: 'Zarządzają wynajmem',
        description: 'Długoterminowym lub krótkoterminowym.',
        svg: Dlasvg1,

    },
    {
        title: 'Obsługują aparthotele',
        description: 'lub kwatery pracownicze.',
        svg: Dlasvg2,
    },
    {
        title: 'Maja własne mieszkania',
        description: 'i chcą je prowadzić profesjonalnie.',
        svg: Dlasvg3,
    },
    {
        title: 'Walczą z chaosem',
        description: 'przestają ogarniać wszystko w Excelu, mailu i na telefonie.',
        svg: Dlasvg4,
    },
]

export const Dla_Box_Color = [
    "#5E13F6",
    "#FF3B61",
    "#FF4DF5",
    "#00F0FF",
];

export const Dla_Box_Shadow = [
    "group-hover:shadow-[5px_7px_58.2px_0px_#9e77ec]",
    "group-hover:shadow-[5px_7px_58.2px_0px_#EF414363]",
    "group-hover:shadow-[5px_7px_58.2px_0px_#ce6fc9]",
    "group-hover:shadow-[5px_7px_58.2px_0px_#56dde7]",
];

export const Dla_Card_Shadow = [
    "hover:shadow-[5px_7px_58.2px_0px_#5E13F61A]",
    "hover:shadow-[5px_7px_58.2px_0px_#FF3B611A]",
    "hover:shadow-[5px_7px_58.2px_0px_#FF4DF51A]",
    "hover:shadow-[5px_7px_58.2px_0px_#00F0FF1A]",
];

export const CieBie_Box_Color = [
    "#5E13F6",
    "#FF3B61",
    "#FF4DF5",
    "#00F0FF",
    "#D5C7FF",
    "#1B1E3C",
]

export const Ciebie_Data = [
    {
        svg: Ciebiesvg1,
        title: 'Zautomatyzuj windykację i rozliczenia',
        description: 'Pozwól systemowi automatycznie obsługiwać przypomnienia, zawiadomienia prawne i eskalacje do partnerów prawnych.',
    },
    {
        svg: Ciebiesvg2,
        title: 'Zminimalizuj błędy ludzkie',
        description: 'Zoe, Twoja inteligentna asystentka, śledzi terminy, dokumenty, płatności i interakcje z najemcami.',
    },
    {
        svg: Ciebiesvg3,
        title: 'Usprawnij swoje działania',
        description: 'Od wystawiania ofert i rejestracji nowych klientów po realizację zamówień i fakturowanie — zarządzaj wszystkim z jednej platformy.',
    },
    {
        svg: Ciebiesvg4,
        title: 'Oszczędzaj swój czas',
        description: 'Wbudowany menedżer zadań + panel samoobsługi najemcy = mniej połączeń, większa przejrzystość.',
    },
    {
        svg: Ciebiesvg5,
        title: 'Zyskaj przewagę konkurencyjną',
        description: 'Ocena najemców, rezerwacje online, integracja inteligentnych zamków, faktury, e-sąd — wszystko w jednym miejscu.',
    },
    {
        svg: Ciebiesvg6,
        title: 'Łatwa skalowalność',
        description: 'Dodaj więcej nieruchomości bez zatrudniania dodatkowych pracowników i bez wprowadzania chaosu. RentEasy.AI rozwija się razem z Tobą.',
    },
]

export const Warto_Box_Color = [
    "#5E13F6",
    "#FF3B61",
    "#FF4DF5",
    "#00F0FF",
    "#1B1E3C",
]

export const Warto_Data = [
    {
        svg: Wartosvg1,
        title: 'Przewaga Konkurencyjna',
        description: 'Ponieważ nie jesteśmy tylko oprogramowaniem — jesteśmy Twoją przewagą konkurencyjną.',
    },
    {
        svg: Wartosvg2,
        title: 'Efektywność Kosztowa',
        description: 'Zamiast zatrudniać trzech nowych pracowników, uruchamiasz RentEasy.AI. I to działa.',
    },
    {
        svg: Wartosvg3,
        title: 'Wgląd W Branżę',
        description: 'Stworzyliśmy ten system we współpracy z prawdziwymi zarządcami nieruchomości — rozumiemy Twoją branżę, tempo pracy i formalności, z którymi się zmagasz.',
    },
    {
        svg: Wartosvg4,
        title: 'Aktywna Automatyzacja',
        description: 'RentEasy.AI nie tylko przechowuje informacje — wykonuje pracę za Ciebie.',
    },
    {
        svg: Wartosvg5,
        title: 'Łatwe Wdrożenie',
        description: 'Brak skomplikowanego procesu wdrażania — jest intuicyjny, nie wymaga szkolenia, a my pomagamy w migracji z innych narzędzi, takich jak SON.',
    },
]


export const Jak_Data = [
    {
        title: 'Skonfiguruj Swój Pakiet',
        description: 'Porozmawiaj z Zoe i pozwól jej wybrać funkcje, które odpowiadają potrzebom Twojej firmy.',
        svg:Jaksvg1,
    },
    {

        title: 'Uzyskaj Spersonalizowane Rekomendacje',
        description: 'Otrzymaj natychmiastową, dostosowaną do Twoich potrzeb propozycję modułu — wraz z przejrzystą wyceną.',
        svg:Jaksvg2,
    },
    {
        title: 'Przetestuj lub Skontaktuj się z nami',
        description: 'Załóż konto, lub umów się na bezpłatną konsultację z naszym zespołem.',
        svg:Jaksvg3,
    },
]


export const Footer_Social_Links = [
    {
        svg: Facebook,
        link: 'https://www.facebook.com/',
    },
    {
        svg: Insta,
        link: 'https://www.instagram.com/',
    },
    {
        svg: Linkedin,
        link: 'https://in.linkedin.com/',
    },
    {
        svg: Youtube,
        link: 'https://www.youtube.com/',
    },
]

export const Footer_Links = [
    {
        title: 'Szybkie linki',
        link: [
            {
                text: 'Strona Główna',
                href: '/'
            },
            {
                text: 'Dla kogo?',
                href: 'dlakogo'
            },
            {
                text: 'Jak to działa?',
                href: 'jak'
            },
            {
                text: 'Moduły',
                href: 'moduty'
            },
            {
                text: 'Zoe',
                href: '/'
            },
        ],
    },
    {
        title: 'Napisz do nas',
        link: [
            {
                icon: Address,
                text: 'ul. Nowy Świat 33/13, 00-029 Warszawa',
                href: '',
            },
            {
                icon: Phone,
                text: '+48 519 519 190',
                href: 'tel:+48519519190',
            },
            {
                icon: Email,
                text: 'info@renteasy.ai',
                href: 'mailto:info@renteasy.ai',
            },
        ],
    },
]

export const Moduty_Tabs_Data = [
    {
        name: 'Moduł ofert z integracjami',
    },
    {
        name: 'Moduł podstawowy',

    },
    {
        name: 'Moduł Integracji z Google Workspace',
    },
    {
        name: 'Moduł Bramki SMS',
    },
    {
        name: 'Moduł płatności + umowy + klamki',
    },
    {
        name: 'Moduł Task Manager',
    },

]

export const Moduty_Middle_Part_Data = [
    {
        description: "Możliwość Tworzenia | Publikowania Ogłoszeń Z Poziomu Systemu.",
        bg: "#5E13F6",
    },

    {
        description: "Własna Podstrona Ofertowa Z Brandingiem Klienta.",
        bg: "#FF3B61",

    },
    {
        description: "Zbieranie Rezerwacji I Danych Kontaktowych Online.",
        bg: "#FF4DF5",
    },

    {
        description: "Integracja Z Popularnymi Portalami Ogłoszeniowymi (Planowana).",
        bg: "#1B1E3C",

    },
]


export const Moduty_Last_Part_Data = [
    {
        svg: Modutydlasvg1,
        description: 'Zwiększyć Kontrolę Nad Procesem Wynajmu',
    },
    {
        svg: Modutydlasvg2,
        description: 'Zminimalizować Czas Od Publikacji Do Podpisania Umowy',
    },
    {
        svg: Modutydlasvg3,
        description: 'Pozyskiwać Najemców Bez Pośredników',
    },
    {
        svg: Modutydlasvg4,
        description: 'Budować Markę Własną W Ramach Strony Ofertowej',
    },
]

