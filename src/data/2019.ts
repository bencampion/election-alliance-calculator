import { Party, Result } from "./types";

export const majoritySeats: Partial<Record<Party, number>> = {
  apni: 0,
  brx: 0,
  con: 280,
  dup: 0,
  green: 1,
  lab: 120,
  ld: 6,
  pc: 0,
  sdlp: 2,
  sf: 1,
  snp: 10,
  uup: 0,
  other: 1,
};

export const results: Result[] = [
  {
    name: "Aberconwy",
    region: "Wales",
    winner: "con",
    con: 14687,
    lab: 12653,
    ld: 1821,
    pc: 2704,
  },
  {
    name: "Aberdeen South",
    region: "Scotland",
    winner: "snp",
    con: 16398,
    lab: 3834,
    ld: 5018,
    snp: 20388,
  },
  {
    name: "Airdrie and Shotts",
    region: "Scotland",
    winner: "snp",
    con: 7011,
    green: 685,
    lab: 12728,
    ld: 1419,
    snp: 17929,
  },
  {
    name: "Altrincham and Sale West",
    region: "North West",
    winner: "con",
    con: 26311,
    green: 1566,
    lab: 20172,
    ld: 6036,
    other: 678,
  },
  {
    name: "Alyn and Deeside",
    region: "Wales",
    winner: "lab",
    brx: 2678,
    con: 18058,
    lab: 18271,
    ld: 2548,
    pc: 1453,
  },
  {
    name: "Angus",
    region: "Scotland",
    winner: "snp",
    con: 17421,
    lab: 2051,
    ld: 2482,
    snp: 21216,
  },
  {
    name: "Arfon",
    region: "Wales",
    winner: "pc",
    brx: 1159,
    con: 4428,
    lab: 10353,
    pc: 13134,
  },
  {
    name: "Argyll and Bute",
    region: "Scotland",
    winner: "snp",
    con: 16930,
    lab: 3248,
    ld: 6832,
    snp: 21040,
  },
  {
    name: "Ashfield",
    region: "East Midlands",
    winner: "con",
    brx: 2501,
    con: 19231,
    green: 674,
    lab: 11971,
    ld: 1105,
    other: 13498,
  },
  {
    name: "Ashton-Under-Lyne",
    region: "North West",
    winner: "lab",
    brx: 3151,
    con: 14281,
    green: 1208,
    lab: 18544,
    ld: 1395,
  },
  {
    name: "Ayr, Carrick and Cumnock",
    region: "Scotland",
    winner: "snp",
    con: 17943,
    lab: 6219,
    ld: 2158,
    snp: 20272,
  },
  {
    name: "Barnsley Central",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 11233,
    con: 7892,
    green: 900,
    lab: 14804,
    ld: 1176,
    other: 898,
  },
  {
    name: "Barnsley East",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 11112,
    con: 10377,
    green: 922,
    lab: 14329,
    ld: 1330,
  },
  {
    name: "Batley and Spen",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 1678,
    con: 19069,
    green: 692,
    lab: 22594,
    ld: 2462,
    other: 6432,
  },
  {
    name: "Battersea",
    region: "London",
    winner: "lab",
    brx: 386,
    con: 21622,
    green: 1529,
    lab: 27290,
    ld: 9150,
  },
  {
    name: "Bedford",
    region: "East of England",
    winner: "lab",
    brx: 896,
    con: 20346,
    green: 960,
    lab: 20491,
    ld: 4608,
  },
  {
    name: "Belfast East",
    region: "Northern Ireland",
    winner: "dup",
    apni: 19055,
    dup: 20874,
    uup: 2516,
  },
  {
    name: "Belfast North",
    region: "Northern Ireland",
    winner: "sf",
    apni: 4824,
    dup: 21135,
    sf: 23078,
  },
  {
    name: "Berwickshire, Roxburgh and Selkirk",
    region: "Scotland",
    winner: "con",
    con: 25747,
    lab: 2513,
    ld: 4287,
    snp: 20599,
  },
  {
    name: "Birmingham, Northfield",
    region: "West Midlands",
    winner: "con",
    brx: 1655,
    con: 19957,
    green: 954,
    lab: 18317,
    ld: 1961,
    other: 254,
  },
  {
    name: "Blackpool South",
    region: "North West",
    winner: "con",
    brx: 2009,
    con: 16247,
    green: 563,
    lab: 12557,
    ld: 1008,
    other: 368,
  },
  {
    name: "Blaenau Gwent",
    region: "Wales",
    winner: "lab",
    brx: 6215,
    con: 5749,
    green: 386,
    lab: 14862,
    ld: 1285,
    pc: 1722,
  },
  {
    name: "Blaydon",
    region: "North East",
    winner: "lab",
    brx: 5833,
    con: 14263,
    green: 1279,
    lab: 19794,
    ld: 3703,
    other: 809,
  },
  {
    name: "Blyth Valley",
    region: "North East",
    winner: "con",
    brx: 3394,
    con: 17440,
    green: 1146,
    lab: 16728,
    ld: 2151,
  },
  {
    name: "Bolsover",
    region: "East Midlands",
    winner: "con",
    brx: 4151,
    con: 21791,
    green: 758,
    lab: 16492,
    ld: 1759,
    other: 987,
  },
  {
    name: "Bolton North East",
    region: "North West",
    winner: "con",
    brx: 1880,
    con: 19759,
    green: 689,
    lab: 19381,
    ld: 1847,
  },
  {
    name: "Bradford South",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 2819,
    con: 16044,
    green: 983,
    lab: 18390,
    ld: 1505,
  },
  {
    name: "Bridgend",
    region: "Wales",
    winner: "con",
    brx: 1811,
    con: 18193,
    green: 815,
    lab: 17036,
    ld: 2368,
    pc: 2013,
  },
  {
    name: "Bristol North West",
    region: "South West",
    winner: "lab",
    con: 21638,
    green: 1977,
    lab: 27330,
    ld: 4940,
  },
  {
    name: "Broxtowe",
    region: "East Midlands",
    winner: "con",
    con: 26602,
    green: 1806,
    lab: 21271,
    other: 5593,
  },
  {
    name: "Burnley",
    region: "North West",
    winner: "con",
    brx: 3362,
    con: 15720,
    green: 739,
    lab: 14368,
    ld: 3501,
    other: 1294,
  },
  {
    name: "Bury North",
    region: "North West",
    winner: "con",
    brx: 1240,
    con: 21660,
    green: 802,
    lab: 21555,
    ld: 1584,
  },
  {
    name: "Bury South",
    region: "North West",
    winner: "con",
    brx: 1672,
    con: 22034,
    green: 848,
    lab: 21632,
    ld: 2315,
    other: 1773,
  },
  {
    name: "Caerphilly",
    region: "Wales",
    winner: "lab",
    brx: 4490,
    con: 11185,
    lab: 18018,
    pc: 6424,
  },
  {
    name: "Caithness, Sutherland and Easter Ross",
    region: "Scotland",
    winner: "ld",
    brx: 1139,
    con: 5176,
    lab: 1936,
    ld: 11705,
    snp: 11501,
  },
  {
    name: "Cambridge",
    region: "East of England",
    winner: "lab",
    brx: 1041,
    con: 8342,
    green: 2164,
    lab: 25776,
    ld: 16137,
    other: 269,
  },
  {
    name: "Canterbury",
    region: "South East",
    winner: "lab",
    con: 27182,
    lab: 29018,
    ld: 3408,
    other: 505,
  },
  {
    name: "Cardiff North",
    region: "Wales",
    winner: "lab",
    brx: 1311,
    con: 19082,
    green: 820,
    lab: 26064,
    ld: 3580,
    pc: 1606,
    other: 203,
  },
  {
    name: "Carmarthen East and Dinefwr",
    region: "Wales",
    winner: "pc",
    brx: 2311,
    con: 14130,
    lab: 8622,
    pc: 15939,
  },
  {
    name: "Carshalton and Wallington",
    region: "London",
    winner: "con",
    brx: 1043,
    con: 20822,
    green: 759,
    lab: 6081,
    ld: 20193,
    other: 200,
  },
  {
    name: "Central Ayrshire",
    region: "Scotland",
    winner: "snp",
    con: 16182,
    lab: 6583,
    ld: 2283,
    snp: 21486,
  },
  {
    name: "Ceredigion",
    region: "Wales",
    winner: "pc",
    brx: 2063,
    con: 8879,
    green: 663,
    lab: 6317,
    ld: 6975,
    pc: 15208,
  },
  {
    name: "Cheadle",
    region: "North West",
    winner: "con",
    con: 25694,
    lab: 6851,
    ld: 23358,
  },
  {
    name: "Chelsea and Fulham",
    region: "London",
    winner: "con",
    con: 23345,
    lab: 10872,
    ld: 12104,
    other: 500,
  },
  {
    name: "Cheltenham",
    region: "South West",
    winner: "con",
    con: 28486,
    lab: 2921,
    ld: 27505,
    other: 445,
  },
  {
    name: "Chesterfield",
    region: "East Midlands",
    winner: "lab",
    brx: 4771,
    con: 16720,
    green: 1148,
    lab: 18171,
    ld: 3985,
    other: 391,
  },
  {
    name: "Chingford and Woodford Green",
    region: "London",
    winner: "con",
    con: 23481,
    lab: 22219,
    ld: 2744,
  },
  {
    name: "Chipping Barnet",
    region: "London",
    winner: "con",
    con: 25745,
    green: 1288,
    lab: 24533,
    ld: 5932,
    other: 71,
  },
  {
    name: "Cities Of London and Westminster",
    region: "London",
    winner: "con",
    con: 17049,
    green: 728,
    lab: 11624,
    ld: 13096,
    other: 226,
  },
  {
    name: "City Of Chester",
    region: "North West",
    winner: "lab",
    brx: 1388,
    con: 20918,
    green: 1438,
    lab: 27082,
    ld: 3734,
  },
  {
    name: "City Of Durham",
    region: "North East",
    winner: "lab",
    brx: 3252,
    con: 15506,
    green: 1635,
    lab: 20531,
    ld: 7935,
  },
  {
    name: "Clwyd South",
    region: "Wales",
    winner: "con",
    brx: 1468,
    con: 16222,
    lab: 14983,
    ld: 1496,
    pc: 2137,
  },
  {
    name: "Coatbridge, Chryston and Bellshill",
    region: "Scotland",
    winner: "snp",
    con: 6113,
    green: 808,
    lab: 17056,
    ld: 1564,
    snp: 22680,
  },
  {
    name: "Colne Valley",
    region: "Yorkshire and The Humber",
    winner: "con",
    brx: 1268,
    con: 29482,
    green: 1068,
    lab: 24379,
    ld: 3815,
    other: 880,
  },
  {
    name: "Coventry North West",
    region: "West Midlands",
    winner: "lab",
    brx: 1956,
    con: 20710,
    green: 1443,
    lab: 20918,
    ld: 2717,
  },
  {
    name: "Coventry South",
    region: "West Midlands",
    winner: "lab",
    brx: 1432,
    con: 19143,
    green: 1092,
    lab: 19544,
    ld: 3398,
    other: 435,
  },
  {
    name: "Dagenham and Rainham",
    region: "London",
    winner: "lab",
    brx: 2887,
    con: 19175,
    green: 602,
    lab: 19468,
    ld: 1182,
    other: 421,
  },
  {
    name: "Darlington",
    region: "North East",
    winner: "con",
    brx: 1544,
    con: 20901,
    green: 1057,
    lab: 17607,
    ld: 2097,
    other: 292,
  },
  {
    name: "Delyn",
    region: "Wales",
    winner: "con",
    brx: 1971,
    con: 16756,
    lab: 15891,
    ld: 2346,
    pc: 1406,
  },
  {
    name: "Derby North",
    region: "East Midlands",
    winner: "con",
    brx: 1908,
    con: 21259,
    green: 1046,
    lab: 18719,
    ld: 3450,
    other: 635,
  },
  {
    name: "Dewsbury",
    region: "Yorkshire and The Humber",
    winner: "con",
    brx: 1874,
    con: 26179,
    green: 1060,
    lab: 24618,
    ld: 2406,
    other: 252,
  },
  {
    name: "Doncaster Central",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 6842,
    con: 14360,
    green: 981,
    lab: 16638,
    ld: 1748,
    other: 1012,
  },
  {
    name: "Doncaster North",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 8294,
    con: 13370,
    lab: 15740,
    ld: 1476,
    other: 1818,
  },
  {
    name: "Don Valley",
    region: "Yorkshire and The Humber",
    winner: "con",
    brx: 6247,
    con: 19609,
    green: 872,
    lab: 15979,
    ld: 1907,
    other: 823,
  },
  {
    name: "Dumfries and Galloway",
    region: "Scotland",
    winner: "con",
    con: 22678,
    lab: 4745,
    ld: 3133,
    snp: 20873,
  },
  {
    name: "Dumfriesshire, Clydesdale and Tweeddale",
    region: "Scotland",
    winner: "con",
    con: 22611,
    lab: 4172,
    ld: 3540,
    snp: 18830,
  },
  {
    name: "Dunfermline and West Fife",
    region: "Scotland",
    winner: "snp",
    con: 11207,
    green: 1258,
    lab: 13028,
    ld: 4262,
    snp: 23727,
  },
  {
    name: "Dwyfor Meirionnydd",
    region: "Wales",
    winner: "pc",
    brx: 1776,
    con: 9707,
    lab: 3998,
    pc: 14447,
  },
  {
    name: "Easington",
    region: "North East",
    winner: "lab",
    brx: 6744,
    con: 9142,
    lab: 15723,
    ld: 1526,
    other: 1448,
  },
  {
    name: "East Antrim",
    region: "Northern Ireland",
    winner: "dup",
    apni: 10165,
    con: 1043,
    dup: 16871,
    green: 685,
    sdlp: 902,
    sf: 2120,
    uup: 5475,
  },
  {
    name: "Eastbourne",
    region: "South East",
    winner: "con",
    brx: 1530,
    con: 26951,
    lab: 3848,
    ld: 22620,
    other: 185,
  },
  {
    name: "East Dunbartonshire",
    region: "Scotland",
    winner: "snp",
    con: 7455,
    green: 916,
    lab: 4839,
    ld: 19523,
    snp: 19672,
    other: 626,
  },
  {
    name: "East Kilbride, Strathaven and Lesmahagow",
    region: "Scotland",
    winner: "snp",
    con: 11961,
    green: 1153,
    lab: 12791,
    ld: 3760,
    snp: 26113,
    other: 559,
  },
  {
    name: "East Londonderry",
    region: "Northern Ireland",
    winner: "dup",
    apni: 5921,
    dup: 15765,
    sdlp: 6158,
    sf: 6128,
    uup: 3599,
    other: 1731,
  },
  {
    name: "East Lothian",
    region: "Scotland",
    winner: "snp",
    con: 15523,
    lab: 17270,
    ld: 4071,
    snp: 21156,
    other: 493,
  },
  {
    name: "East Renfrewshire",
    region: "Scotland",
    winner: "snp",
    con: 19451,
    lab: 6855,
    ld: 4174,
    snp: 24877,
  },
  {
    name: "Edinburgh East",
    region: "Scotland",
    winner: "snp",
    con: 6549,
    green: 2064,
    lab: 12748,
    ld: 3289,
    snp: 23165,
  },
  {
    name: "Edinburgh North and Leith",
    region: "Scotland",
    winner: "snp",
    brx: 558,
    con: 11000,
    green: 1971,
    lab: 13117,
    ld: 6635,
    snp: 25925,
    other: 138,
  },
  {
    name: "Edinburgh South",
    region: "Scotland",
    winner: "lab",
    con: 8161,
    green: 1357,
    lab: 23745,
    ld: 3819,
    snp: 12650,
  },
  {
    name: "Edinburgh South West",
    region: "Scotland",
    winner: "snp",
    brx: 625,
    con: 12848,
    green: 1265,
    lab: 7478,
    ld: 4971,
    snp: 24830,
    other: 114,
  },
  {
    name: "Edinburgh West",
    region: "Scotland",
    winner: "ld",
    con: 9283,
    green: 1027,
    lab: 4460,
    ld: 21766,
    snp: 17997,
  },
  {
    name: "Eltham",
    region: "London",
    winner: "lab",
    brx: 1523,
    con: 17353,
    green: 1322,
    lab: 20550,
    ld: 2941,
  },
  {
    name: "Enfield, Southgate",
    region: "London",
    winner: "lab",
    brx: 494,
    con: 18473,
    green: 1042,
    lab: 22923,
    ld: 4344,
  },
  {
    name: "Erith and Thamesmead",
    region: "London",
    winner: "lab",
    brx: 2246,
    con: 16124,
    green: 876,
    lab: 19882,
    ld: 1984,
    other: 272,
  },
  {
    name: "Esher and Walton",
    region: "South East",
    winner: "con",
    con: 31132,
    lab: 2838,
    ld: 28389,
    other: 725,
  },
  {
    name: "Fermanagh and South Tyrone",
    region: "Northern Ireland",
    winner: "sf",
    apni: 2650,
    sdlp: 3446,
    sf: 21986,
    uup: 21929,
    other: 751,
  },
  {
    name: "Filton and Bradley Stoke",
    region: "South West",
    winner: "con",
    con: 26293,
    green: 1563,
    lab: 20647,
    ld: 4992,
    other: 257,
  },
  {
    name: "Finchley and Golders Green",
    region: "London",
    winner: "con",
    con: 24162,
    lab: 13347,
    ld: 17600,
  },
  {
    name: "Gedling",
    region: "East Midlands",
    winner: "con",
    brx: 1820,
    con: 22718,
    green: 1097,
    lab: 22039,
    ld: 2279,
  },
  {
    name: "Glasgow Central",
    region: "Scotland",
    winner: "snp",
    con: 3698,
    green: 1429,
    lab: 13276,
    ld: 1952,
    snp: 19750,
  },
  {
    name: "Glasgow East",
    region: "Scotland",
    winner: "snp",
    con: 5709,
    lab: 12791,
    ld: 1626,
    snp: 18357,
  },
  {
    name: "Glasgow North",
    region: "Scotland",
    winner: "snp",
    brx: 320,
    con: 3806,
    green: 1308,
    lab: 11381,
    ld: 2394,
    snp: 16982,
  },
  {
    name: "Glasgow North East",
    region: "Scotland",
    winner: "snp",
    con: 3558,
    lab: 13363,
    ld: 1093,
    snp: 15911,
  },
  {
    name: "Glasgow North West",
    region: "Scotland",
    winner: "snp",
    con: 6022,
    lab: 11319,
    ld: 2716,
    snp: 19678,
  },
  {
    name: "Glasgow South",
    region: "Scotland",
    winner: "snp",
    brx: 516,
    con: 6237,
    green: 1251,
    lab: 13824,
    ld: 2786,
    snp: 22829,
  },
  {
    name: "Glasgow South West",
    region: "Scotland",
    winner: "snp",
    brx: 802,
    con: 4224,
    lab: 12743,
    ld: 1435,
    snp: 17643,
  },
  {
    name: "Gordon",
    region: "Scotland",
    winner: "snp",
    con: 23066,
    lab: 3052,
    ld: 5913,
    snp: 23885,
  },
  {
    name: "Gower",
    region: "Wales",
    winner: "lab",
    brx: 1379,
    con: 18371,
    lab: 20208,
    ld: 2236,
    pc: 2288,
  },
  {
    name: "Guildford",
    region: "South East",
    winner: "con",
    con: 26317,
    lab: 4515,
    ld: 22980,
    other: 4839,
  },
  {
    name: "Halifax",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 2813,
    con: 18927,
    green: 946,
    lab: 21496,
    ld: 2276,
  },
  {
    name: "Hampstead and Kilburn",
    region: "London",
    winner: "lab",
    brx: 684,
    con: 13892,
    green: 1608,
    lab: 28080,
    ld: 13121,
  },
  {
    name: "Hartlepool",
    region: "North East",
    winner: "lab",
    brx: 10603,
    con: 11869,
    lab: 15464,
    ld: 1696,
    other: 1405,
  },
  {
    name: "Hastings and Rye",
    region: "South East",
    winner: "con",
    con: 26896,
    lab: 22853,
    ld: 3960,
    other: 565,
  },
  {
    name: "Hazel Grove",
    region: "North West",
    winner: "con",
    con: 21592,
    lab: 5508,
    ld: 17169,
  },
  {
    name: "Hemsworth",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 5930,
    con: 15280,
    green: 916,
    lab: 16460,
    ld: 1734,
    other: 3587,
  },
  {
    name: "Hendon",
    region: "London",
    winner: "con",
    con: 26878,
    green: 921,
    lab: 22648,
    ld: 4628,
  },
  {
    name: "Heywood and Middleton",
    region: "North West",
    winner: "con",
    brx: 3952,
    con: 20453,
    green: 1220,
    lab: 19790,
    ld: 2073,
  },
  {
    name: "High Peak",
    region: "East Midlands",
    winner: "con",
    brx: 1177,
    con: 24844,
    green: 1148,
    lab: 24254,
    ld: 2750,
  },
  {
    name: "Hitchin and Harpenden",
    region: "East of England",
    winner: "con",
    con: 27719,
    lab: 9959,
    ld: 20824,
    other: 369,
  },
  {
    name: "Houghton and Sunderland South",
    region: "North East",
    winner: "lab",
    brx: 6165,
    con: 13095,
    green: 1125,
    lab: 16210,
    ld: 2319,
    other: 897,
  },
  {
    name: "Huddersfield",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 1666,
    con: 15572,
    green: 1768,
    lab: 20509,
    ld: 2367,
  },
  {
    name: "Hyndburn",
    region: "North West",
    winner: "con",
    brx: 2156,
    con: 20565,
    green: 845,
    lab: 17614,
    ld: 1226,
  },
  {
    name: "Inverclyde",
    region: "Scotland",
    winner: "snp",
    con: 6265,
    lab: 11783,
    ld: 2560,
    snp: 19295,
  },
  {
    name: "Inverness, Nairn, Badenoch and Strathspey",
    region: "Scotland",
    winner: "snp",
    brx: 1078,
    con: 15807,
    green: 1709,
    lab: 4123,
    ld: 5846,
    snp: 26247,
  },
  {
    name: "Islwyn",
    region: "Wales",
    winner: "lab",
    brx: 4834,
    con: 9892,
    green: 669,
    lab: 15356,
    ld: 1313,
    pc: 2286,
  },
  {
    name: "Jarrow",
    region: "North East",
    winner: "lab",
    brx: 4122,
    con: 11243,
    green: 831,
    lab: 18363,
    ld: 2360,
    other: 3817,
  },
  {
    name: "Keighley",
    region: "Yorkshire and The Humber",
    winner: "con",
    brx: 850,
    con: 25298,
    lab: 23080,
    ld: 2573,
    other: 799,
  },
  {
    name: "Kensington",
    region: "London",
    winner: "con",
    brx: 384,
    con: 16768,
    green: 535,
    lab: 16618,
    ld: 9312,
    other: 145,
  },
  {
    name: "Kingston upon Hull East",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 5764,
    con: 11474,
    green: 784,
    lab: 12713,
    ld: 1707,
  },
  {
    name: "Kingston upon Hull North",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 4771,
    con: 9440,
    green: 875,
    lab: 17033,
    ld: 2084,
  },
  {
    name: "Kingston upon Hull West and Hessle",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 5638,
    con: 10528,
    green: 50,
    lab: 13384,
    ld: 1756,
  },
  {
    name: "Kirkcaldy and Cowdenbeath",
    region: "Scotland",
    winner: "snp",
    brx: 1132,
    con: 9449,
    green: 1628,
    lab: 15325,
    ld: 2903,
    snp: 16568,
  },
  {
    name: "Lagan Valley",
    region: "Northern Ireland",
    winner: "dup",
    apni: 13087,
    con: 955,
    dup: 19586,
    sdlp: 1758,
    sf: 1098,
    uup: 8606,
    other: 315,
  },
  {
    name: "Lanark and Hamilton East",
    region: "Scotland",
    winner: "snp",
    con: 17056,
    lab: 10736,
    ld: 3037,
    snp: 22243,
  },
  {
    name: "Lancaster and Fleetwood",
    region: "North West",
    winner: "lab",
    brx: 1817,
    con: 18804,
    green: 1396,
    lab: 21184,
    ld: 2018,
  },
  {
    name: "Leeds East",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 2981,
    con: 13933,
    green: 878,
    lab: 19464,
    ld: 1796,
  },
  {
    name: "Leeds North West",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 1304,
    con: 13222,
    green: 1389,
    lab: 23971,
    ld: 9397,
  },
  {
    name: "Leicester West",
    region: "East Midlands",
    winner: "lab",
    brx: 1620,
    con: 13079,
    green: 977,
    lab: 17291,
    ld: 1808,
  },
  {
    name: "Leigh",
    region: "North West",
    winner: "con",
    brx: 3161,
    con: 21266,
    lab: 19301,
    ld: 2252,
    other: 999,
  },
  {
    name: "Lewes",
    region: "South East",
    winner: "con",
    con: 26268,
    green: 1453,
    lab: 3206,
    ld: 23811,
    other: 113,
  },
  {
    name: "Lincoln",
    region: "East Midlands",
    winner: "con",
    brx: 1079,
    con: 24267,
    green: 1195,
    lab: 20753,
    ld: 2422,
    other: 913,
  },
  {
    name: "Linlithgow and East Falkirk",
    region: "Scotland",
    winner: "snp",
    brx: 1257,
    con: 14285,
    green: 1184,
    lab: 10517,
    ld: 4393,
    snp: 25551,
    other: 588,
  },
  {
    name: "Livingston",
    region: "Scotland",
    winner: "snp",
    con: 12182,
    green: 1421,
    lab: 11915,
    ld: 3457,
    snp: 25617,
  },
  {
    name: "Llanelli",
    region: "Wales",
    winner: "lab",
    brx: 3605,
    con: 11455,
    lab: 16125,
    pc: 7048,
  },
  {
    name: "Makerfield",
    region: "North West",
    winner: "lab",
    brx: 5817,
    con: 15214,
    green: 1166,
    lab: 19954,
    ld: 2108,
  },
  {
    name: "Midlothian",
    region: "Scotland",
    winner: "snp",
    con: 10467,
    lab: 14328,
    ld: 3393,
    snp: 20033,
  },
  {
    name: "Mid Ulster",
    region: "Northern Ireland",
    winner: "sf",
    apni: 3526,
    dup: 10936,
    sdlp: 6384,
    sf: 20473,
    uup: 2611,
    other: 690,
  },
  {
    name: "Milton Keynes North",
    region: "South East",
    winner: "con",
    con: 30938,
    green: 1931,
    lab: 24683,
    ld: 4991,
  },
  {
    name: "Moray",
    region: "Scotland",
    winner: "con",
    con: 22112,
    lab: 2432,
    ld: 2269,
    snp: 21599,
    other: 413,
  },
  {
    name: "Motherwell and Wishaw",
    region: "Scotland",
    winner: "snp",
    con: 7150,
    lab: 14354,
    ld: 1675,
    snp: 20622,
    other: 619,
  },
  {
    name: "Na h-Eileanan An Iar",
    region: "Scotland",
    winner: "snp",
    con: 3216,
    lab: 4093,
    ld: 637,
    snp: 6531,
  },
  {
    name: "Neath",
    region: "Wales",
    winner: "lab",
    brx: 3184,
    con: 10283,
    green: 728,
    lab: 15920,
    ld: 1485,
    pc: 4495,
    other: 661,
  },
  {
    name: "Newcastle Upon Tyne North",
    region: "North East",
    winner: "lab",
    brx: 4331,
    con: 15589,
    green: 1368,
    lab: 21354,
    ld: 4357,
  },
  {
    name: "Newport East",
    region: "Wales",
    winner: "lab",
    brx: 2454,
    con: 14133,
    green: 577,
    lab: 16125,
    ld: 2121,
    pc: 872,
  },
  {
    name: "Newport West",
    region: "Wales",
    winner: "lab",
    brx: 1727,
    con: 18075,
    green: 902,
    lab: 18977,
    ld: 2565,
    pc: 1187,
  },
  {
    name: "Newry and Armagh",
    region: "Northern Ireland",
    winner: "sf",
    apni: 4211,
    dup: 11000,
    sdlp: 9449,
    sf: 20287,
    uup: 4204,
    other: 1628,
  },
  {
    name: "Normanton, Pontefract and Castleford",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 8032,
    con: 17021,
    lab: 18297,
    ld: 3147,
    other: 1762,
  },
  {
    name: "North Antrim",
    region: "Northern Ireland",
    winner: "dup",
    apni: 6231,
    dup: 20860,
    sdlp: 2943,
    sf: 5632,
    uup: 8139,
    other: 246,
  },
  {
    name: "North Ayrshire and Arran",
    region: "Scotland",
    winner: "snp",
    con: 14855,
    green: 1114,
    lab: 6702,
    ld: 2107,
    snp: 23376,
  },
  {
    name: "North Down",
    region: "Northern Ireland",
    winner: "apni",
    apni: 18358,
    con: 1959,
    dup: 15390,
    uup: 4936,
  },
  {
    name: "North Durham",
    region: "North East",
    winner: "lab",
    brx: 4693,
    con: 13897,
    green: 1126,
    lab: 18639,
    ld: 2879,
    other: 961,
  },
  {
    name: "North East Fife",
    region: "Scotland",
    winner: "ld",
    con: 5961,
    lab: 1707,
    ld: 19763,
    snp: 18447,
  },
  {
    name: "North Tyneside",
    region: "North East",
    winner: "lab",
    brx: 5254,
    con: 15490,
    green: 1393,
    lab: 25051,
    ld: 3241,
  },
  {
    name: "North West Durham",
    region: "North East",
    winner: "con",
    brx: 3193,
    con: 19990,
    green: 1173,
    lab: 18846,
    ld: 2831,
    other: 1630,
  },
  {
    name: "Nottingham North",
    region: "East Midlands",
    winner: "lab",
    brx: 2686,
    con: 12847,
    green: 868,
    lab: 17337,
    ld: 1582,
  },
  {
    name: "Ochil and South Perthshire",
    region: "Scotland",
    winner: "snp",
    con: 22384,
    lab: 4961,
    ld: 3204,
    snp: 26882,
    other: 382,
  },
  {
    name: "Ogmore",
    region: "Wales",
    winner: "lab",
    brx: 2991,
    con: 9797,
    green: 621,
    lab: 17602,
    ld: 1460,
    pc: 2919,
  },
  {
    name: "Oldham East and Saddleworth",
    region: "North West",
    winner: "lab",
    brx: 2980,
    con: 18589,
    green: 778,
    lab: 20088,
    ld: 2423,
    other: 1306,
  },
  {
    name: "Orkney and Shetland",
    region: "Scotland",
    winner: "ld",
    brx: 900,
    con: 2287,
    lab: 1550,
    ld: 10381,
    snp: 7874,
    other: 168,
  },
  {
    name: "Paisley and Renfrewshire North",
    region: "Scotland",
    winner: "snp",
    con: 11217,
    lab: 11451,
    ld: 3661,
    snp: 23353,
  },
  {
    name: "Penistone and Stocksbridge",
    region: "Yorkshire and The Humber",
    winner: "con",
    brx: 4300,
    con: 23688,
    lab: 16478,
    ld: 5054,
  },
  {
    name: "Peterborough",
    region: "East of England",
    winner: "con",
    brx: 2127,
    con: 22334,
    green: 728,
    lab: 19754,
    ld: 2334,
    other: 524,
  },
  {
    name: "Plymouth, Sutton and Devonport",
    region: "South West",
    winner: "lab",
    brx: 2909,
    con: 20704,
    green: 1557,
    lab: 25461,
    ld: 2545,
  },
  {
    name: "Pontypridd",
    region: "Wales",
    winner: "lab",
    brx: 2917,
    con: 11494,
    lab: 17381,
    pc: 4990,
    other: 2278,
  },
  {
    name: "Portsmouth South",
    region: "South East",
    winner: "lab",
    brx: 994,
    con: 17705,
    lab: 23068,
    ld: 5418,
    other: 240,
  },
  {
    name: "Pudsey",
    region: "Yorkshire and The Humber",
    winner: "con",
    con: 26453,
    green: 894,
    lab: 22936,
    ld: 3088,
    other: 844,
  },
  {
    name: "Putney",
    region: "London",
    winner: "lab",
    con: 18006,
    green: 1133,
    lab: 22780,
    ld: 8548,
  },
  {
    name: "Reading East",
    region: "South East",
    winner: "lab",
    brx: 852,
    con: 21178,
    green: 1549,
    lab: 27102,
    ld: 5035,
    other: 202,
  },
  {
    name: "Reading West",
    region: "South East",
    winner: "con",
    con: 24393,
    green: 1263,
    lab: 20276,
    ld: 4460,
  },
  {
    name: "Redcar",
    region: "North East",
    winner: "con",
    brx: 2915,
    con: 18811,
    green: 491,
    lab: 15284,
    ld: 2018,
    other: 1323,
  },
  {
    name: "Ross, Skye and Lochaber",
    region: "Scotland",
    winner: "snp",
    brx: 710,
    con: 6900,
    lab: 2448,
    ld: 9820,
    snp: 19263,
    other: 728,
  },
  {
    name: "Rotherham",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 6125,
    con: 11615,
    lab: 14736,
    ld: 2090,
    other: 1085,
  },
  {
    name: "Rother Valley",
    region: "Yorkshire and The Humber",
    winner: "con",
    brx: 6264,
    con: 21970,
    green: 1219,
    lab: 15652,
    ld: 2553,
    other: 1040,
  },
  {
    name: "Rushcliffe",
    region: "East Midlands",
    winner: "con",
    con: 28765,
    lab: 21122,
    ld: 9600,
    other: 1018,
  },
  {
    name: "Rutherglen and Hamilton West",
    region: "Scotland",
    winner: "snp",
    con: 8054,
    lab: 18545,
    ld: 2791,
    snp: 23775,
    other: 629,
  },
  {
    name: "Sedgefield",
    region: "North East",
    winner: "con",
    brx: 3518,
    con: 19609,
    green: 994,
    lab: 15096,
    ld: 1955,
    other: 394,
  },
  {
    name: "Sheffield, Hallam",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 1562,
    con: 14696,
    green: 1630,
    lab: 19709,
    ld: 18997,
    other: 291,
  },
  {
    name: "Sheffield South East",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 4478,
    con: 15070,
    lab: 19359,
    ld: 2125,
    other: 966,
  },
  {
    name: "Southampton, Test",
    region: "South East",
    winner: "lab",
    brx: 1591,
    con: 16043,
    green: 1433,
    lab: 22256,
    ld: 3449,
    other: 222,
  },
  {
    name: "South Antrim",
    region: "Northern Ireland",
    winner: "dup",
    apni: 8190,
    dup: 15149,
    sdlp: 2288,
    sf: 4887,
    uup: 12460,
  },
  {
    name: "South Cambridgeshire",
    region: "East of England",
    winner: "con",
    con: 31015,
    lab: 7803,
    ld: 28111,
  },
  {
    name: "South Down",
    region: "Northern Ireland",
    winner: "sf",
    apni: 6916,
    dup: 7619,
    sdlp: 14517,
    sf: 16137,
    uup: 3307,
    other: 1266,
  },
  {
    name: "South East Cambridgeshire",
    region: "East of England",
    winner: "con",
    con: 32187,
    lab: 10492,
    ld: 20697,
    other: 1009,
  },
  {
    name: "Southport",
    region: "North West",
    winner: "con",
    con: 22914,
    lab: 18767,
    ld: 6499,
  },
  {
    name: "South Shields",
    region: "North East",
    winner: "lab",
    brx: 6446,
    con: 7688,
    green: 1303,
    lab: 17273,
    ld: 1514,
    other: 3658,
  },
  {
    name: "South West Hertfordshire",
    region: "East of England",
    winner: "con",
    con: 30327,
    green: 1466,
    lab: 7228,
    ld: 6251,
    other: 15919,
  },
  {
    name: "Stalybridge and Hyde",
    region: "North West",
    winner: "lab",
    brx: 3591,
    con: 16079,
    green: 1411,
    lab: 19025,
    ld: 1827,
    other: 435,
  },
  {
    name: "St Ives",
    region: "South West",
    winner: "con",
    con: 25365,
    green: 964,
    lab: 3553,
    ld: 21085,
    other: 446,
  },
  {
    name: "Stockton North",
    region: "North East",
    winner: "lab",
    brx: 3907,
    con: 16701,
    lab: 17728,
    ld: 1631,
    other: 1189,
  },
  {
    name: "Stoke-On-Trent Central",
    region: "West Midlands",
    winner: "con",
    brx: 1691,
    con: 14557,
    green: 819,
    lab: 13887,
    ld: 1116,
  },
  {
    name: "Strangford",
    region: "Northern Ireland",
    winner: "dup",
    apni: 10634,
    con: 1476,
    dup: 17705,
    green: 790,
    sdlp: 1994,
    sf: 555,
    uup: 4023,
    other: 308,
  },
  {
    name: "Stroud",
    region: "South West",
    winner: "con",
    brx: 1085,
    con: 31582,
    green: 4954,
    lab: 27742,
    other: 567,
  },
  {
    name: "Sunderland Central",
    region: "North East",
    winner: "lab",
    brx: 5047,
    con: 15372,
    green: 1212,
    lab: 18336,
    ld: 3025,
    other: 484,
  },
  {
    name: "Sutton and Cheam",
    region: "London",
    winner: "con",
    con: 25235,
    green: 1168,
    lab: 7200,
    ld: 16884,
  },
  {
    name: "Torfaen",
    region: "Wales",
    winner: "lab",
    brx: 5742,
    con: 11804,
    green: 812,
    lab: 15546,
    ld: 1831,
    pc: 1441,
  },
  {
    name: "Truro and Falmouth",
    region: "South West",
    winner: "con",
    con: 27237,
    green: 1714,
    lab: 22676,
    ld: 7150,
    other: 413,
  },
  {
    name: "Tynemouth",
    region: "North East",
    winner: "lab",
    brx: 1963,
    con: 22071,
    green: 1281,
    lab: 26928,
    ld: 3791,
  },
  {
    name: "Upper Bann",
    region: "Northern Ireland",
    winner: "dup",
    apni: 6433,
    dup: 20501,
    sdlp: 4623,
    sf: 12291,
    uup: 6197,
  },
  {
    name: "Vale Of Clwyd",
    region: "Wales",
    winner: "con",
    brx: 1477,
    con: 17270,
    lab: 15443,
    ld: 1471,
    pc: 1552,
  },
  {
    name: "Vale Of Glamorgan",
    region: "Wales",
    winner: "con",
    con: 27305,
    green: 3251,
    lab: 23743,
    other: 508,
  },
  {
    name: "Wakefield",
    region: "Yorkshire and The Humber",
    winner: "con",
    brx: 2725,
    con: 21283,
    lab: 17925,
    ld: 1772,
    other: 1322,
  },
  {
    name: "Walsall South",
    region: "West Midlands",
    winner: "lab",
    brx: 1660,
    con: 17416,
    green: 634,
    lab: 20872,
    ld: 1602,
    other: 288,
  },
  {
    name: "Wansbeck",
    region: "North East",
    winner: "lab",
    brx: 3141,
    con: 16310,
    green: 1217,
    lab: 17124,
    ld: 2539,
    other: 178,
  },
  {
    name: "Warrington North",
    region: "North West",
    winner: "lab",
    brx: 2626,
    con: 19102,
    green: 1257,
    lab: 20611,
    ld: 3071,
  },
  {
    name: "Warrington South",
    region: "North West",
    winner: "con",
    brx: 1635,
    con: 28187,
    lab: 26177,
    ld: 5732,
    other: 168,
  },
  {
    name: "Warwick and Leamington",
    region: "West Midlands",
    winner: "lab",
    brx: 807,
    con: 22929,
    green: 1536,
    lab: 23718,
    ld: 4995,
    other: 220,
  },
  {
    name: "Washington and Sunderland West",
    region: "North East",
    winner: "lab",
    brx: 5439,
    con: 12218,
    green: 1005,
    lab: 15941,
    ld: 2071,
    other: 839,
  },
  {
    name: "Watford",
    region: "East of England",
    winner: "con",
    con: 26421,
    lab: 21988,
    ld: 9323,
    other: 333,
  },
  {
    name: "Weaver Vale",
    region: "North West",
    winner: "lab",
    brx: 1380,
    con: 22210,
    green: 1051,
    lab: 22772,
    ld: 3300,
  },
  {
    name: "Wentworth and Dearne",
    region: "Yorkshire and The Humber",
    winner: "lab",
    brx: 7019,
    con: 14577,
    lab: 16742,
    ld: 1705,
    other: 1514,
  },
  {
    name: "West Aberdeenshire and Kincardine",
    region: "Scotland",
    winner: "con",
    con: 22752,
    lab: 2431,
    ld: 6253,
    snp: 21909,
  },
  {
    name: "West Bromwich East",
    region: "West Midlands",
    winner: "con",
    brx: 1475,
    con: 16804,
    green: 627,
    lab: 15211,
    ld: 1313,
    other: 545,
  },
  {
    name: "West Dunbartonshire",
    region: "Scotland",
    winner: "snp",
    con: 6436,
    green: 867,
    lab: 12843,
    ld: 1890,
    snp: 22396,
    other: 708,
  },
  {
    name: "Westmorland and Lonsdale",
    region: "North West",
    winner: "ld",
    brx: 763,
    con: 23861,
    lab: 2293,
    ld: 25795,
  },
  {
    name: "West Tyrone",
    region: "Northern Ireland",
    winner: "sf",
    apni: 3979,
    dup: 9066,
    green: 521,
    sdlp: 7330,
    sf: 16544,
    uup: 2774,
    other: 972,
  },
  {
    name: "Wigan",
    region: "North West",
    winner: "lab",
    brx: 5959,
    con: 14314,
    green: 1299,
    lab: 21042,
    ld: 2428,
  },
  {
    name: "Wimbledon",
    region: "London",
    winner: "con",
    con: 20373,
    lab: 12543,
    ld: 19745,
    other: 366,
  },
  {
    name: "Winchester",
    region: "South East",
    winner: "con",
    con: 28430,
    lab: 2723,
    ld: 27445,
    other: 292,
  },
  {
    name: "Wirral West",
    region: "North West",
    winner: "lab",
    brx: 860,
    con: 17692,
    green: 965,
    lab: 20695,
    ld: 2706,
  },
  {
    name: "Woking",
    region: "South East",
    winner: "con",
    con: 26396,
    green: 1485,
    lab: 8827,
    ld: 16629,
    other: 600,
  },
  {
    name: "Wokingham",
    region: "South East",
    winner: "con",
    con: 30734,
    green: 1382,
    lab: 6450,
    ld: 23351,
    other: 80,
  },
  {
    name: "Wolverhampton South East",
    region: "West Midlands",
    winner: "lab",
    brx: 2094,
    con: 14287,
    green: 521,
    lab: 15522,
    ld: 1019,
  },
  {
    name: "Wolverhampton South West",
    region: "West Midlands",
    winner: "con",
    brx: 1028,
    con: 19864,
    lab: 18203,
    ld: 2041,
  },
  {
    name: "Workington",
    region: "North West",
    winner: "con",
    brx: 1749,
    con: 20488,
    green: 596,
    lab: 16312,
    ld: 1525,
    other: 929,
  },
  {
    name: "Worsley and Eccles South",
    region: "North West",
    winner: "lab",
    brx: 3224,
    con: 17227,
    green: 1300,
    lab: 20446,
    ld: 2510,
  },
  {
    name: "Wrexham",
    region: "Wales",
    winner: "con",
    brx: 1222,
    con: 15199,
    green: 445,
    lab: 13068,
    ld: 1447,
    pc: 2151,
  },
  {
    name: "Wycombe",
    region: "South East",
    winner: "con",
    con: 24766,
    green: 1454,
    lab: 20552,
    ld: 6543,
    other: 1441,
  },
  {
    name: "Ynys Môn",
    region: "Wales",
    winner: "con",
    brx: 2184,
    con: 12959,
    lab: 10991,
    pc: 10418,
  },
  {
    name: "York Outer",
    region: "Yorkshire and The Humber",
    winner: "con",
    con: 27324,
    lab: 17339,
    ld: 9992,
    other: 692,
  },
];
