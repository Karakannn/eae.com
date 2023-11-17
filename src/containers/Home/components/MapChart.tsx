import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import features from '@assets/map/features.json'
import { PatternCircles } from "@vx/pattern";
import { Fragment } from 'react';

export default function MapChart({ setContent }: any) {

    const markers = [
        {
            name: 'Almanya',
            coordinates: [10, 51],
            sellers: [
                {
                    name: 'ABH Stromschienen GmbH',
                    address: 'Borsigstraße 23, 47169 Duisburg, Almanya',
                    phone: '(+49) 203 393 560',
                    mail: 'info@abh-stromschienen.de',
                    fax: '(+49) 203 393 5613',
                }
            ]
        },
        {
            name: 'Bahreyn',
            coordinates: [50, 25],
            sellers: [
                {
                    name: 'Capital Electrical Equipments',
                    address: 'P.O.Box 2637 Manama / BAHRAIN',
                    phone: '+973 17 274774 / 973 17 277778',
                    mail: 'capitals@batelco.com.bh',
                    fax: '+973 17 275324',
                }
            ]

        },
        {
            name: 'Bangladeş',
            coordinates: [90, 23],
            sellers: [
                {
                    name: 'CROSS WORLD POWER LTD',
                    address: 'House 06, Road 92, Gulshan, Dhaka 1212, Bangladesh',
                    phone: '(+880) 2 58811858, 989 1442, 01755514800',
                    mail: 'info@cross-world.com',
                    fax: '+880 2 58811858',
                },
                {
                    name: '4s Energy System',
                    address: 'Plot-34, (14th floor), Road-2, Sector-3 Uttara, C/A, Dhaka-1230, Bangladesh',
                    phone: '+8801913-632009',
                    mail: 'sarwar@4senergy-bd.com',
                    fax: '+8801623-387890',
                },
                {
                    name: 'Namm Power Elektrik',
                    address: 'H-52/55(4th Floor) Amtali Mohakhali, C/A',
                    phone: '01819 220347',
                    mail: null,
                    fax: '0088 02 8753211',
                },
                {
                    name: 'PERFECT Automation Engineering',
                    address: 'Concept Tower I 5th Floor I 5-H I 68-69 I Green road I Dhanmondi I Dhaka-1205 I Bangladesh',
                    phone: '+88 02 9641015 / +88 0171 4114965',
                    mail: 'zakir@paebd.com - zakirpen@yahoo.com',
                    fax: '+88 02 9641016',
                },
            ],


        },
        {
            name: 'Belçika',
            coordinates: [4, 50],
            sellers: [
                {
                    name: 'BSB-Busbar Systems Belgium',
                    address: 'Ploegsebaan 84 2930 Brasschaat',
                    phone: '32 3 6638607',
                    mail: 'eddy.vertommen@busbarsystems.be',
                    fax: '32 3 6332098',
                }
            ]

        },

        {
            name: 'Beyaz Rusya',
            coordinates: [27, 53],
            sellers: [
                {
                    name: 'LLC Full TEAM',
                    address: 'Respublika Belarus, Minsk, 220007, Aerodromnaya street, house 125, room 28',
                    phone: '+375(17) 235 01 94 / +375 (29) 641 11 10',
                    mail: 'office@fullteam.by / v.melnichek@fullteam.by',
                    fax: '32 3 6332098',
                }
            ]

        },

        {
            name: 'Birleşik Arap Emirlikleri',
            coordinates: [52, 20],
            sellers: [
                {
                    name: 'PRIME TECHNOLOGIES LLC',
                    address: 'P.O Box : 26736, Dubai – BAE',
                    phone: '00971 4 3256555',
                    mail: null,
                    fax: '00971 4 32343748',
                }
            ]

        },

        {
            name: 'Etiyopya',
            coordinates: [40, 9],
            sellers: [
                {
                    name: 'Splenor Technology',
                    address: ' Garrad Mall, 1st Floor, Room # 432-1-4A, P.O.Box:18243',
                    phone: '251-911-733485',
                    mail: null,
                    fax: '251-114-703171',
                }
            ]

        },

        {
            name: 'Fransa',
            coordinates: [1, 46],
            sellers: [
                {
                    name: 'VOLTADIS',
                    address: "16 Rue le Corbusier 63800 Cournon-d'Auvergne",
                    phone: '+33 4 73 60 40 80',
                    mail: 'contact@voltadis.fr',
                    fax: null,
                }
            ]

        },

        {
            name: 'Gana',
            coordinates: [-1, 7],
            sellers: [
                {
                    name: 'ICURRENTS AFRICA LIMITED',
                    address: "80 Boundary Road,East Legon",
                    phone: '233 302 519 585',
                    mail: null,
                    fax: null,
                }
            ]

        },

        {
            name: 'Hindistan',
            coordinates: [82, 21],
            sellers: [
                {
                    name: 'IIGM-India Industrial Garment Machines Pvt. Ltd.',
                    address: "Springdale, No.51, 1st Cross Residency Road",
                    phone: '91 80 25323444 / 91 80 4193360',
                    mail: 'gangadhara@iigm.in',
                    fax: '91 80 25320899',
                }
            ]

        },

        {
            name: 'Hollanda',
            coordinates: [5, 52],
            sellers: [
                {
                    name: 'BSB-Busbar Systems Benelux',
                    address: "OORGAT 82 NL 1135 CT",
                    phone: '31 299 371557',
                    mail: null,
                    fax: '31 299 374213',
                }
            ]

        },

        {
            name: 'İngiltere',
            coordinates: [-3, 55],
            sellers: [
                {
                    name: 'Elbagate Ltd',
                    address: "Cypress House First floor, Unit A 2 Coburg road London N22 6UJ",
                    phone: '+44 (0) 20 7254 9991 / +44 (0) 15 2757 5075',
                    mail: 'sales@elbagate.com',
                    fax: '+44 (0) 20 7249 3519',
                }
            ]

        },

        {
            name: 'İspanya',
            coordinates: [-3, 40],
            sellers: [
                {
                    name: 'INDUTEC S.L',
                    address: "Polígono Industrial",
                    phone: '+(34) 963 17 16 96',
                    mail: 'admin@indutec.com.es',
                    fax: '+(34) 964 60 25 03',
                }
            ]

        },

        {
            name: 'İsveç',
            coordinates: [17, 62],
            sellers: [
                {
                    name: 'Terasaki Skandinaviska AB',
                    address: "Snickarvägen 2, SE-132 38 Saltsjö-Boo Sweden",
                    phone: '(+46) 855 628 230',
                    mail: 'info@terasaki.se',
                    fax: '(+46) 855 628 239',
                }
            ]

        },

        {
            name: 'İzlanda',
            coordinates: [-19, 64],
            sellers: [
                {
                    name: 'Iskraft',
                    address: "Smiðjuvegur 5 200 Kopavogur",
                    phone: '354 535 1200',
                    mail: 'helgi@iskraft.is',
                    fax: '354 535 1201',
                }
            ]

        },

        {
            name: 'Katar',
            coordinates: [51, 25],
            sellers: [
                {
                    name: 'Engineering Supplies Company (E&amp;I) W.L.L',
                    address: "Doha/ Katar",
                    phone: '(+974) 4442 9800 / (+974) 5519 2089',
                    mail: 'infoesc@escqatar.com / sreejith@escqatar.com',
                    fax: '(+974) 4444 4586',
                }
            ]

        },

        {
            name: 'Kıbrıs',
            coordinates: [33, 35],
            sellers: [
                {
                    name: 'Ertek Elektrik Sistemleri Ltd.',
                    address: "K.Kaymaklı / Lefkoşa 83 Okullar Yolu",
                    phone: '0392 228 68 21',
                    mail: null,
                    fax: '0392 228 84 21',
                }
            ]

        },

        {
            name: 'Kuveyt',
            coordinates: [47, 29],
            sellers: [
                {
                    name: 'Yousef Al Alghanim &amp; Sons',
                    address: "Kuwait",
                    phone: '+965 1881 111',
                    mail: null,
                    fax: null,
                }
            ]

        },

        {
            name: 'Lübnan',
            coordinates: [35, 33],
            sellers: [
                {
                    name: 'Albina S.A.L.',
                    address: "Axa Middle East Building,Rome Street Clemenceau",
                    phone: '00961 (1) 374 287',
                    mail: null,
                    fax: '+961 (1) 371 864',
                }
            ]

        },

        {
            name: 'Macaristan',
            coordinates: [19, 47],
            sellers: [
                {
                    name: 'Techniq 2000 Kft.',
                    address: "H-7624 Pecs Hungaria Ut. 53/1",
                    phone: '36 1 2201804',
                    mail: null,
                    fax: '36 1 242409',
                }
            ]

        },

        {
            name: 'Norveç',
            coordinates: [17, 64],
            sellers: [
                {
                    name: 'Efa Elektro AS',
                    address: "Skiveien 123, N-1415 Oppegård",
                    phone: '(+47) 66 81 24 00',
                    mail: 'petter.sandsnes@efa.no',
                    fax: '(+47) 990 43 383',
                }
            ]

        },

        {
            name: 'Pakistan',
            coordinates: [69, 30],
            sellers: [
                {
                    name: 'Mecatron Solutions',
                    address: "Ground Floor, Plot 353, Street 20,Sharfabad, Karachi",
                    phone: null,
                    mail: null,
                    fax: '0092 21 3493 4441',
                }
            ]

        },
    ]

    return (

        <ComposableMap className='lg:max-w-3xl xl:max-w-5xl xl:w-full mx-auto'>
            <PatternCircles id="circles" height={5} width={5} fill='#D0D5DD' />
            <Geographies geography={features} >
                {({ geographies }) =>
                    geographies.map(geography => (
                        <Geography key={geography.rsmKey} geography={geography} fill="url('#circles')" />
                    ))
                }
            </Geographies>

            {markers.map((item) => {
                return (
                    <Fragment>
                        <Marker
                            className='hover:cursor-pointer'
                            coordinates={item.coordinates}
                            onMouseEnter={() => {
                                setContent(item);
                            }}
                            onMouseLeave={() => {
                                setContent("");
                            }}
                        >

                            <circle
                                className='animate-ping-slow '
                                cx={0}
                                cy={0}
                                r={12}
                                style={{
                                    fill: "#DF473C",
                                    opacity: 0.2,

                                }}
                            />

                            <circle
                                className='animate-ping-slow'
                                cx={0}
                                cy={0}
                                r={7}
                                style={{
                                    fill: "#DF473C",
                                    opacity: 0.6,

                                }}
                            />

                            <circle
                                data-tooltip-id='map-tooltip'
                                cx={0}
                                stroke='white'
                                strokeWidth={2}
                                cy={0}
                                r={7}
                                style={{
                                    fill: "#DF473C",
                                }}
                            />

                        </Marker>
                    </Fragment>
                )
            })}

        </ComposableMap>

    )
}
