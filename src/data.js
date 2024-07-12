const majoritySeats = {
  apni: 0,
  brexit: 0,
  dup: 0,
  con: 280,
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

const results = [
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
    lab: 12728,
    ld: 1419,
    green: 685,
    snp: 17929,
  },
  {
    name: "Altrincham and Sale West",
    region: "North West",
    winner: "con",
    con: 26311,
    lab: 20172,
    ld: 6036,
    green: 1566,
    other: 678,
  },
  {
    name: "Alyn and Deeside",
    region: "Wales",
    winner: "lab",
    con: 18058,
    lab: 18271,
    ld: 2548,
    brexit: 2678,
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
    con: 4428,
    lab: 10353,
    brexit: 1159,
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
    con: 19231,
    lab: 11971,
    ld: 1105,
    brexit: 2501,
    green: 674,
    other: 13498,
  },
  {
    name: "Ashton-Under-Lyne",
    region: "North West",
    winner: "lab",
    con: 14281,
    lab: 18544,
    ld: 1395,
    brexit: 3151,
    green: 1208,
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
    con: 7892,
    lab: 14804,
    ld: 1176,
    brexit: 11233,
    green: 900,
    other: 898,
  },
  {
    name: "Barnsley East",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 10377,
    lab: 14329,
    ld: 1330,
    brexit: 11112,
    green: 922,
  },
  {
    name: "Batley and Spen",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 19069,
    lab: 22594,
    ld: 2462,
    brexit: 1678,
    green: 692,
    other: 6432,
  },
  {
    name: "Battersea",
    region: "London",
    winner: "lab",
    con: 21622,
    lab: 27290,
    ld: 9150,
    brexit: 386,
    green: 1529,
  },
  {
    name: "Bedford",
    region: "East",
    winner: "lab",
    con: 20346,
    lab: 20491,
    ld: 4608,
    brexit: 896,
    green: 960,
  },
  {
    name: "Belfast East",
    region: "Northern Ireland",
    winner: "dup",
    dup: 20874,
    uup: 2516,
    apni: 19055,
  },
  {
    name: "Belfast North",
    region: "Northern Ireland",
    winner: "sf",
    dup: 21135,
    sf: 23078,
    apni: 4824,
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
    con: 19957,
    lab: 18317,
    ld: 1961,
    brexit: 1655,
    green: 954,
    other: 254,
  },
  {
    name: "Blackpool South",
    region: "North West",
    winner: "con",
    con: 16247,
    lab: 12557,
    ld: 1008,
    brexit: 2009,
    green: 563,
    other: 368,
  },
  {
    name: "Blaenau Gwent",
    region: "Wales",
    winner: "lab",
    con: 5749,
    lab: 14862,
    ld: 1285,
    brexit: 6215,
    green: 386,
    pc: 1722,
  },
  {
    name: "Blaydon",
    region: "North East",
    winner: "lab",
    con: 14263,
    lab: 19794,
    ld: 3703,
    brexit: 5833,
    green: 1279,
    other: 809,
  },
  {
    name: "Blyth Valley",
    region: "North East",
    winner: "con",
    con: 17440,
    lab: 16728,
    ld: 2151,
    brexit: 3394,
    green: 1146,
  },
  {
    name: "Bolsover",
    region: "East Midlands",
    winner: "con",
    con: 21791,
    lab: 16492,
    ld: 1759,
    brexit: 4151,
    green: 758,
    other: 987,
  },
  {
    name: "Bolton North East",
    region: "North West",
    winner: "con",
    con: 19759,
    lab: 19381,
    ld: 1847,
    brexit: 1880,
    green: 689,
  },
  {
    name: "Bradford South",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 16044,
    lab: 18390,
    ld: 1505,
    brexit: 2819,
    green: 983,
  },
  {
    name: "Bridgend",
    region: "Wales",
    winner: "con",
    con: 18193,
    lab: 17036,
    ld: 2368,
    brexit: 1811,
    green: 815,
    pc: 2013,
  },
  {
    name: "Bristol North West",
    region: "South West",
    winner: "lab",
    con: 21638,
    lab: 27330,
    ld: 4940,
    green: 1977,
  },
  {
    name: "Broxtowe",
    region: "East Midlands",
    winner: "con",
    con: 26602,
    lab: 21271,
    green: 1806,
    other: 5593,
  },
  {
    name: "Burnley",
    region: "North West",
    winner: "con",
    con: 15720,
    lab: 14368,
    ld: 3501,
    brexit: 3362,
    green: 739,
    other: 1294,
  },
  {
    name: "Bury North",
    region: "North West",
    winner: "con",
    con: 21660,
    lab: 21555,
    ld: 1584,
    brexit: 1240,
    green: 802,
  },
  {
    name: "Bury South",
    region: "North West",
    winner: "con",
    con: 22034,
    lab: 21632,
    ld: 2315,
    brexit: 1672,
    green: 848,
    other: 1773,
  },
  {
    name: "Caerphilly",
    region: "Wales",
    winner: "lab",
    con: 11185,
    lab: 18018,
    brexit: 4490,
    pc: 6424,
  },
  {
    name: "Caithness, Sutherland and Easter Ross",
    region: "Scotland",
    winner: "ld",
    con: 5176,
    lab: 1936,
    ld: 11705,
    brexit: 1139,
    snp: 11501,
  },
  {
    name: "Cambridge",
    region: "East",
    winner: "lab",
    con: 8342,
    lab: 25776,
    ld: 16137,
    brexit: 1041,
    green: 2164,
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
    con: 19082,
    lab: 26064,
    ld: 3580,
    brexit: 1311,
    green: 820,
    pc: 1606,
    other: 203,
  },
  {
    name: "Carmarthen East and Dinefwr",
    region: "Wales",
    winner: "pc",
    con: 14130,
    lab: 8622,
    brexit: 2311,
    pc: 15939,
  },
  {
    name: "Carshalton and Wallington",
    region: "London",
    winner: "con",
    con: 20822,
    lab: 6081,
    ld: 20193,
    brexit: 1043,
    green: 759,
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
    con: 8879,
    lab: 6317,
    ld: 6975,
    brexit: 2063,
    green: 663,
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
    con: 16720,
    lab: 18171,
    ld: 3985,
    brexit: 4771,
    green: 1148,
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
    lab: 24533,
    ld: 5932,
    green: 1288,
    other: 71,
  },
  {
    name: "Cities Of London and Westminster",
    region: "London",
    winner: "con",
    con: 17049,
    lab: 11624,
    ld: 13096,
    green: 728,
    other: 226,
  },
  {
    name: "City Of Chester",
    region: "North West",
    winner: "lab",
    con: 20918,
    lab: 27082,
    ld: 3734,
    brexit: 1388,
    green: 1438,
  },
  {
    name: "City Of Durham",
    region: "North East",
    winner: "lab",
    con: 15506,
    lab: 20531,
    ld: 7935,
    brexit: 3252,
    green: 1635,
  },
  {
    name: "Clwyd South",
    region: "Wales",
    winner: "con",
    con: 16222,
    lab: 14983,
    ld: 1496,
    brexit: 1468,
    pc: 2137,
  },
  {
    name: "Coatbridge, Chryston and Bellshill",
    region: "Scotland",
    winner: "snp",
    con: 6113,
    lab: 17056,
    ld: 1564,
    green: 808,
    snp: 22680,
  },
  {
    name: "Colne Valley",
    region: "Yorkshire and The Humber",
    winner: "con",
    con: 29482,
    lab: 24379,
    ld: 3815,
    brexit: 1268,
    green: 1068,
    other: 880,
  },
  {
    name: "Coventry North West",
    region: "West Midlands",
    winner: "lab",
    con: 20710,
    lab: 20918,
    ld: 2717,
    brexit: 1956,
    green: 1443,
  },
  {
    name: "Coventry South",
    region: "West Midlands",
    winner: "lab",
    con: 19143,
    lab: 19544,
    ld: 3398,
    brexit: 1432,
    green: 1092,
    other: 435,
  },
  {
    name: "Dagenham and Rainham",
    region: "London",
    winner: "lab",
    con: 19175,
    lab: 19468,
    ld: 1182,
    brexit: 2887,
    green: 602,
    other: 421,
  },
  {
    name: "Darlington",
    region: "North East",
    winner: "con",
    con: 20901,
    lab: 17607,
    ld: 2097,
    brexit: 1544,
    green: 1057,
    other: 292,
  },
  {
    name: "Delyn",
    region: "Wales",
    winner: "con",
    con: 16756,
    lab: 15891,
    ld: 2346,
    brexit: 1971,
    pc: 1406,
  },
  {
    name: "Derby North",
    region: "East Midlands",
    winner: "con",
    con: 21259,
    lab: 18719,
    ld: 3450,
    brexit: 1908,
    green: 1046,
    other: 635,
  },
  {
    name: "Dewsbury",
    region: "Yorkshire and The Humber",
    winner: "con",
    con: 26179,
    lab: 24618,
    ld: 2406,
    brexit: 1874,
    green: 1060,
    other: 252,
  },
  {
    name: "Doncaster Central",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 14360,
    lab: 16638,
    ld: 1748,
    brexit: 6842,
    green: 981,
    other: 1012,
  },
  {
    name: "Doncaster North",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 13370,
    lab: 15740,
    ld: 1476,
    brexit: 8294,
    other: 1818,
  },
  {
    name: "Don Valley",
    region: "Yorkshire and The Humber",
    winner: "con",
    con: 19609,
    lab: 15979,
    ld: 1907,
    brexit: 6247,
    green: 872,
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
    lab: 13028,
    ld: 4262,
    green: 1258,
    snp: 23727,
  },
  {
    name: "Dwyfor Meirionnydd",
    region: "Wales",
    winner: "pc",
    con: 9707,
    lab: 3998,
    brexit: 1776,
    pc: 14447,
  },
  {
    name: "Easington",
    region: "North East",
    winner: "lab",
    con: 9142,
    lab: 15723,
    ld: 1526,
    brexit: 6744,
    other: 1448,
  },
  {
    name: "East Antrim",
    region: "Northern Ireland",
    winner: "dup",
    con: 1043,
    green: 685,
    dup: 16871,
    sf: 2120,
    sdlp: 902,
    uup: 5475,
    apni: 10165,
  },
  {
    name: "Eastbourne",
    region: "South East",
    winner: "con",
    con: 26951,
    lab: 3848,
    ld: 22620,
    brexit: 1530,
    other: 185,
  },
  {
    name: "East Dunbartonshire",
    region: "Scotland",
    winner: "snp",
    con: 7455,
    lab: 4839,
    ld: 19523,
    green: 916,
    snp: 19672,
    other: 626,
  },
  {
    name: "East Kilbride, Strathaven and Lesmahagow",
    region: "Scotland",
    winner: "snp",
    con: 11961,
    lab: 12791,
    ld: 3760,
    green: 1153,
    snp: 26113,
    other: 559,
  },
  {
    name: "East Londonderry",
    region: "Northern Ireland",
    winner: "dup",
    dup: 15765,
    sf: 6128,
    sdlp: 6158,
    uup: 3599,
    apni: 5921,
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
    lab: 12748,
    ld: 3289,
    green: 2064,
    snp: 23165,
  },
  {
    name: "Edinburgh North and Leith",
    region: "Scotland",
    winner: "snp",
    con: 11000,
    lab: 13117,
    ld: 6635,
    brexit: 558,
    green: 1971,
    snp: 25925,
    other: 138,
  },
  {
    name: "Edinburgh South",
    region: "Scotland",
    winner: "lab",
    con: 8161,
    lab: 23745,
    ld: 3819,
    green: 1357,
    snp: 12650,
  },
  {
    name: "Edinburgh South West",
    region: "Scotland",
    winner: "snp",
    con: 12848,
    lab: 7478,
    ld: 4971,
    brexit: 625,
    green: 1265,
    snp: 24830,
    other: 114,
  },
  {
    name: "Edinburgh West",
    region: "Scotland",
    winner: "ld",
    con: 9283,
    lab: 4460,
    ld: 21766,
    green: 1027,
    snp: 17997,
  },
  {
    name: "Eltham",
    region: "London",
    winner: "lab",
    con: 17353,
    lab: 20550,
    ld: 2941,
    brexit: 1523,
    green: 1322,
  },
  {
    name: "Enfield, Southgate",
    region: "London",
    winner: "lab",
    con: 18473,
    lab: 22923,
    ld: 4344,
    brexit: 494,
    green: 1042,
  },
  {
    name: "Erith and Thamesmead",
    region: "London",
    winner: "lab",
    con: 16124,
    lab: 19882,
    ld: 1984,
    brexit: 2246,
    green: 876,
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
    sf: 21986,
    sdlp: 3446,
    uup: 21929,
    apni: 2650,
    other: 751,
  },
  {
    name: "Filton and Bradley Stoke",
    region: "South West",
    winner: "con",
    con: 26293,
    lab: 20647,
    ld: 4992,
    green: 1563,
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
    con: 22718,
    lab: 22039,
    ld: 2279,
    brexit: 1820,
    green: 1097,
  },
  {
    name: "Glasgow Central",
    region: "Scotland",
    winner: "snp",
    con: 3698,
    lab: 13276,
    ld: 1952,
    green: 1429,
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
    con: 3806,
    lab: 11381,
    ld: 2394,
    brexit: 320,
    green: 1308,
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
    con: 6237,
    lab: 13824,
    ld: 2786,
    brexit: 516,
    green: 1251,
    snp: 22829,
  },
  {
    name: "Glasgow South West",
    region: "Scotland",
    winner: "snp",
    con: 4224,
    lab: 12743,
    ld: 1435,
    brexit: 802,
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
    con: 18371,
    lab: 20208,
    ld: 2236,
    brexit: 1379,
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
    con: 18927,
    lab: 21496,
    ld: 2276,
    brexit: 2813,
    green: 946,
  },
  {
    name: "Hampstead and Kilburn",
    region: "London",
    winner: "lab",
    con: 13892,
    lab: 28080,
    ld: 13121,
    brexit: 684,
    green: 1608,
  },
  {
    name: "Hartlepool",
    region: "North East",
    winner: "lab",
    con: 11869,
    lab: 15464,
    ld: 1696,
    brexit: 10603,
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
    con: 15280,
    lab: 16460,
    ld: 1734,
    brexit: 5930,
    green: 916,
    other: 3587,
  },
  {
    name: "Hendon",
    region: "London",
    winner: "con",
    con: 26878,
    lab: 22648,
    ld: 4628,
    green: 921,
  },
  {
    name: "Heywood and Middleton",
    region: "North West",
    winner: "con",
    con: 20453,
    lab: 19790,
    ld: 2073,
    brexit: 3952,
    green: 1220,
  },
  {
    name: "High Peak",
    region: "East Midlands",
    winner: "con",
    con: 24844,
    lab: 24254,
    ld: 2750,
    brexit: 1177,
    green: 1148,
  },
  {
    name: "Hitchin and Harpenden",
    region: "East",
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
    con: 13095,
    lab: 16210,
    ld: 2319,
    brexit: 6165,
    green: 1125,
    other: 897,
  },
  {
    name: "Huddersfield",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 15572,
    lab: 20509,
    ld: 2367,
    brexit: 1666,
    green: 1768,
  },
  {
    name: "Hyndburn",
    region: "North West",
    winner: "con",
    con: 20565,
    lab: 17614,
    ld: 1226,
    brexit: 2156,
    green: 845,
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
    con: 15807,
    lab: 4123,
    ld: 5846,
    brexit: 1078,
    green: 1709,
    snp: 26247,
  },
  {
    name: "Islwyn",
    region: "Wales",
    winner: "lab",
    con: 9892,
    lab: 15356,
    ld: 1313,
    brexit: 4834,
    green: 669,
    pc: 2286,
  },
  {
    name: "Jarrow",
    region: "North East",
    winner: "lab",
    con: 11243,
    lab: 18363,
    ld: 2360,
    brexit: 4122,
    green: 831,
    other: 3817,
  },
  {
    name: "Keighley",
    region: "Yorkshire and The Humber",
    winner: "con",
    con: 25298,
    lab: 23080,
    ld: 2573,
    brexit: 850,
    other: 799,
  },
  {
    name: "Kensington",
    region: "London",
    winner: "con",
    con: 16768,
    lab: 16618,
    ld: 9312,
    brexit: 384,
    green: 535,
    other: 145,
  },
  {
    name: "Kingston upon Hull East",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 11474,
    lab: 12713,
    ld: 1707,
    brexit: 5764,
    green: 784,
  },
  {
    name: "Kingston upon Hull North",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 9440,
    lab: 17033,
    ld: 2084,
    brexit: 4771,
    green: 875,
  },
  {
    name: "Kingston upon Hull West and Hessle",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 10528,
    lab: 13384,
    ld: 1756,
    brexit: 5638,
    green: 50,
  },
  {
    name: "Kirkcaldy and Cowdenbeath",
    region: "Scotland",
    winner: "snp",
    con: 9449,
    lab: 15325,
    ld: 2903,
    brexit: 1132,
    green: 1628,
    snp: 16568,
  },
  {
    name: "Lagan Valley",
    region: "Northern Ireland",
    winner: "dup",
    con: 955,
    dup: 19586,
    sf: 1098,
    sdlp: 1758,
    uup: 8606,
    apni: 13087,
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
    con: 18804,
    lab: 21184,
    ld: 2018,
    brexit: 1817,
    green: 1396,
  },
  {
    name: "Leeds East",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 13933,
    lab: 19464,
    ld: 1796,
    brexit: 2981,
    green: 878,
  },
  {
    name: "Leeds North West",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 13222,
    lab: 23971,
    ld: 9397,
    brexit: 1304,
    green: 1389,
  },
  {
    name: "Leicester West",
    region: "East Midlands",
    winner: "lab",
    con: 13079,
    lab: 17291,
    ld: 1808,
    brexit: 1620,
    green: 977,
  },
  {
    name: "Leigh",
    region: "North West",
    winner: "con",
    con: 21266,
    lab: 19301,
    ld: 2252,
    brexit: 3161,
    other: 999,
  },
  {
    name: "Lewes",
    region: "South East",
    winner: "con",
    con: 26268,
    lab: 3206,
    ld: 23811,
    green: 1453,
    other: 113,
  },
  {
    name: "Lincoln",
    region: "East Midlands",
    winner: "con",
    con: 24267,
    lab: 20753,
    ld: 2422,
    brexit: 1079,
    green: 1195,
    other: 913,
  },
  {
    name: "Linlithgow and East Falkirk",
    region: "Scotland",
    winner: "snp",
    con: 14285,
    lab: 10517,
    ld: 4393,
    brexit: 1257,
    green: 1184,
    snp: 25551,
    other: 588,
  },
  {
    name: "Livingston",
    region: "Scotland",
    winner: "snp",
    con: 12182,
    lab: 11915,
    ld: 3457,
    green: 1421,
    snp: 25617,
  },
  {
    name: "Llanelli",
    region: "Wales",
    winner: "lab",
    con: 11455,
    lab: 16125,
    brexit: 3605,
    pc: 7048,
  },
  {
    name: "Makerfield",
    region: "North West",
    winner: "lab",
    con: 15214,
    lab: 19954,
    ld: 2108,
    brexit: 5817,
    green: 1166,
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
    dup: 10936,
    sf: 20473,
    sdlp: 6384,
    uup: 2611,
    apni: 3526,
    other: 690,
  },
  {
    name: "Milton Keynes North",
    region: "South East",
    winner: "con",
    con: 30938,
    lab: 24683,
    ld: 4991,
    green: 1931,
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
    con: 10283,
    lab: 15920,
    ld: 1485,
    brexit: 3184,
    green: 728,
    pc: 4495,
    other: 661,
  },
  {
    name: "Newcastle Upon Tyne North",
    region: "North East",
    winner: "lab",
    con: 15589,
    lab: 21354,
    ld: 4357,
    brexit: 4331,
    green: 1368,
  },
  {
    name: "Newport East",
    region: "Wales",
    winner: "lab",
    con: 14133,
    lab: 16125,
    ld: 2121,
    brexit: 2454,
    green: 577,
    pc: 872,
  },
  {
    name: "Newport West",
    region: "Wales",
    winner: "lab",
    con: 18075,
    lab: 18977,
    ld: 2565,
    brexit: 1727,
    green: 902,
    pc: 1187,
  },
  {
    name: "Newry and Armagh",
    region: "Northern Ireland",
    winner: "sf",
    dup: 11000,
    sf: 20287,
    sdlp: 9449,
    uup: 4204,
    apni: 4211,
    other: 1628,
  },
  {
    name: "Normanton, Pontefract and Castleford",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 17021,
    lab: 18297,
    ld: 3147,
    brexit: 8032,
    other: 1762,
  },
  {
    name: "North Antrim",
    region: "Northern Ireland",
    winner: "dup",
    dup: 20860,
    sf: 5632,
    sdlp: 2943,
    uup: 8139,
    apni: 6231,
    other: 246,
  },
  {
    name: "North Ayrshire and Arran",
    region: "Scotland",
    winner: "snp",
    con: 14855,
    lab: 6702,
    ld: 2107,
    green: 1114,
    snp: 23376,
  },
  {
    name: "North Down",
    region: "Northern Ireland",
    winner: "apni",
    con: 1959,
    dup: 15390,
    uup: 4936,
    apni: 18358,
  },
  {
    name: "North Durham",
    region: "North East",
    winner: "lab",
    con: 13897,
    lab: 18639,
    ld: 2879,
    brexit: 4693,
    green: 1126,
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
    con: 15490,
    lab: 25051,
    ld: 3241,
    brexit: 5254,
    green: 1393,
  },
  {
    name: "North West Durham",
    region: "North East",
    winner: "con",
    con: 19990,
    lab: 18846,
    ld: 2831,
    brexit: 3193,
    green: 1173,
    other: 1630,
  },
  {
    name: "Nottingham North",
    region: "East Midlands",
    winner: "lab",
    con: 12847,
    lab: 17337,
    ld: 1582,
    brexit: 2686,
    green: 868,
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
    con: 9797,
    lab: 17602,
    ld: 1460,
    brexit: 2991,
    green: 621,
    pc: 2919,
  },
  {
    name: "Oldham East and Saddleworth",
    region: "North West",
    winner: "lab",
    con: 18589,
    lab: 20088,
    ld: 2423,
    brexit: 2980,
    green: 778,
    other: 1306,
  },
  {
    name: "Orkney and Shetland",
    region: "Scotland",
    winner: "ld",
    con: 2287,
    lab: 1550,
    ld: 10381,
    brexit: 900,
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
    con: 23688,
    lab: 16478,
    ld: 5054,
    brexit: 4300,
  },
  {
    name: "Peterborough",
    region: "East",
    winner: "con",
    con: 22334,
    lab: 19754,
    ld: 2334,
    brexit: 2127,
    green: 728,
    other: 524,
  },
  {
    name: "Plymouth, Sutton and Devonport",
    region: "South West",
    winner: "lab",
    con: 20704,
    lab: 25461,
    ld: 2545,
    brexit: 2909,
    green: 1557,
  },
  {
    name: "Pontypridd",
    region: "Wales",
    winner: "lab",
    con: 11494,
    lab: 17381,
    brexit: 2917,
    pc: 4990,
    other: 2278,
  },
  {
    name: "Portsmouth South",
    region: "South East",
    winner: "lab",
    con: 17705,
    lab: 23068,
    ld: 5418,
    brexit: 994,
    other: 240,
  },
  {
    name: "Pudsey",
    region: "Yorkshire and The Humber",
    winner: "con",
    con: 26453,
    lab: 22936,
    ld: 3088,
    green: 894,
    other: 844,
  },
  {
    name: "Putney",
    region: "London",
    winner: "lab",
    con: 18006,
    lab: 22780,
    ld: 8548,
    green: 1133,
  },
  {
    name: "Reading East",
    region: "South East",
    winner: "lab",
    con: 21178,
    lab: 27102,
    ld: 5035,
    brexit: 852,
    green: 1549,
    other: 202,
  },
  {
    name: "Reading West",
    region: "South East",
    winner: "con",
    con: 24393,
    lab: 20276,
    ld: 4460,
    green: 1263,
  },
  {
    name: "Redcar",
    region: "North East",
    winner: "con",
    con: 18811,
    lab: 15284,
    ld: 2018,
    brexit: 2915,
    green: 491,
    other: 1323,
  },
  {
    name: "Ross, Skye and Lochaber",
    region: "Scotland",
    winner: "snp",
    con: 6900,
    lab: 2448,
    ld: 9820,
    brexit: 710,
    snp: 19263,
    other: 728,
  },
  {
    name: "Rotherham",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 11615,
    lab: 14736,
    ld: 2090,
    brexit: 6125,
    other: 1085,
  },
  {
    name: "Rother Valley",
    region: "Yorkshire and The Humber",
    winner: "con",
    con: 21970,
    lab: 15652,
    ld: 2553,
    brexit: 6264,
    green: 1219,
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
    con: 19609,
    lab: 15096,
    ld: 1955,
    brexit: 3518,
    green: 994,
    other: 394,
  },
  {
    name: "Sheffield, Hallam",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 14696,
    lab: 19709,
    ld: 18997,
    brexit: 1562,
    green: 1630,
    other: 291,
  },
  {
    name: "Sheffield South East",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 15070,
    lab: 19359,
    ld: 2125,
    brexit: 4478,
    other: 966,
  },
  {
    name: "Southampton, Test",
    region: "South East",
    winner: "lab",
    con: 16043,
    lab: 22256,
    ld: 3449,
    brexit: 1591,
    green: 1433,
    other: 222,
  },
  {
    name: "South Antrim",
    region: "Northern Ireland",
    winner: "dup",
    dup: 15149,
    sf: 4887,
    sdlp: 2288,
    uup: 12460,
    apni: 8190,
  },
  {
    name: "South Cambridgeshire",
    region: "East",
    winner: "con",
    con: 31015,
    lab: 7803,
    ld: 28111,
  },
  {
    name: "South Down",
    region: "Northern Ireland",
    winner: "sf",
    dup: 7619,
    sf: 16137,
    sdlp: 14517,
    uup: 3307,
    apni: 6916,
    other: 1266,
  },
  {
    name: "South East Cambridgeshire",
    region: "East",
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
    con: 7688,
    lab: 17273,
    ld: 1514,
    brexit: 6446,
    green: 1303,
    other: 3658,
  },
  {
    name: "South West Hertfordshire",
    region: "East",
    winner: "con",
    con: 30327,
    lab: 7228,
    ld: 6251,
    green: 1466,
    other: 15919,
  },
  {
    name: "Stalybridge and Hyde",
    region: "North West",
    winner: "lab",
    con: 16079,
    lab: 19025,
    ld: 1827,
    brexit: 3591,
    green: 1411,
    other: 435,
  },
  {
    name: "St Ives",
    region: "South West",
    winner: "con",
    con: 25365,
    lab: 3553,
    ld: 21085,
    green: 964,
    other: 446,
  },
  {
    name: "Stockton North",
    region: "North East",
    winner: "lab",
    con: 16701,
    lab: 17728,
    ld: 1631,
    brexit: 3907,
    other: 1189,
  },
  {
    name: "Stoke-On-Trent Central",
    region: "West Midlands",
    winner: "con",
    con: 14557,
    lab: 13887,
    ld: 1116,
    brexit: 1691,
    green: 819,
  },
  {
    name: "Strangford",
    region: "Northern Ireland",
    winner: "dup",
    con: 1476,
    green: 790,
    dup: 17705,
    sf: 555,
    sdlp: 1994,
    uup: 4023,
    apni: 10634,
    other: 308,
  },
  {
    name: "Stroud",
    region: "South West",
    winner: "con",
    con: 31582,
    lab: 27742,
    brexit: 1085,
    green: 4954,
    other: 567,
  },
  {
    name: "Sunderland Central",
    region: "North East",
    winner: "lab",
    con: 15372,
    lab: 18336,
    ld: 3025,
    brexit: 5047,
    green: 1212,
    other: 484,
  },
  {
    name: "Sutton and Cheam",
    region: "London",
    winner: "con",
    con: 25235,
    lab: 7200,
    ld: 16884,
    green: 1168,
  },
  {
    name: "Torfaen",
    region: "Wales",
    winner: "lab",
    con: 11804,
    lab: 15546,
    ld: 1831,
    brexit: 5742,
    green: 812,
    pc: 1441,
  },
  {
    name: "Truro and Falmouth",
    region: "South West",
    winner: "con",
    con: 27237,
    lab: 22676,
    ld: 7150,
    green: 1714,
    other: 413,
  },
  {
    name: "Tynemouth",
    region: "North East",
    winner: "lab",
    con: 22071,
    lab: 26928,
    ld: 3791,
    brexit: 1963,
    green: 1281,
  },
  {
    name: "Upper Bann",
    region: "Northern Ireland",
    winner: "dup",
    dup: 20501,
    sf: 12291,
    sdlp: 4623,
    uup: 6197,
    apni: 6433,
  },
  {
    name: "Vale Of Clwyd",
    region: "Wales",
    winner: "con",
    con: 17270,
    lab: 15443,
    ld: 1471,
    brexit: 1477,
    pc: 1552,
  },
  {
    name: "Vale Of Glamorgan",
    region: "Wales",
    winner: "con",
    con: 27305,
    lab: 23743,
    green: 3251,
    other: 508,
  },
  {
    name: "Wakefield",
    region: "Yorkshire and The Humber",
    winner: "con",
    con: 21283,
    lab: 17925,
    ld: 1772,
    brexit: 2725,
    other: 1322,
  },
  {
    name: "Walsall South",
    region: "West Midlands",
    winner: "lab",
    con: 17416,
    lab: 20872,
    ld: 1602,
    brexit: 1660,
    green: 634,
    other: 288,
  },
  {
    name: "Wansbeck",
    region: "North East",
    winner: "lab",
    con: 16310,
    lab: 17124,
    ld: 2539,
    brexit: 3141,
    green: 1217,
    other: 178,
  },
  {
    name: "Warrington North",
    region: "North West",
    winner: "lab",
    con: 19102,
    lab: 20611,
    ld: 3071,
    brexit: 2626,
    green: 1257,
  },
  {
    name: "Warrington South",
    region: "North West",
    winner: "con",
    con: 28187,
    lab: 26177,
    ld: 5732,
    brexit: 1635,
    other: 168,
  },
  {
    name: "Warwick and Leamington",
    region: "West Midlands",
    winner: "lab",
    con: 22929,
    lab: 23718,
    ld: 4995,
    brexit: 807,
    green: 1536,
    other: 220,
  },
  {
    name: "Washington and Sunderland West",
    region: "North East",
    winner: "lab",
    con: 12218,
    lab: 15941,
    ld: 2071,
    brexit: 5439,
    green: 1005,
    other: 839,
  },
  {
    name: "Watford",
    region: "East",
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
    con: 22210,
    lab: 22772,
    ld: 3300,
    brexit: 1380,
    green: 1051,
  },
  {
    name: "Wentworth and Dearne",
    region: "Yorkshire and The Humber",
    winner: "lab",
    con: 14577,
    lab: 16742,
    ld: 1705,
    brexit: 7019,
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
    con: 16804,
    lab: 15211,
    ld: 1313,
    brexit: 1475,
    green: 627,
    other: 545,
  },
  {
    name: "West Dunbartonshire",
    region: "Scotland",
    winner: "snp",
    con: 6436,
    lab: 12843,
    ld: 1890,
    green: 867,
    snp: 22396,
    other: 708,
  },
  {
    name: "Westmorland and Lonsdale",
    region: "North West",
    winner: "ld",
    con: 23861,
    lab: 2293,
    ld: 25795,
    brexit: 763,
  },
  {
    name: "West Tyrone",
    region: "Northern Ireland",
    winner: "sf",
    green: 521,
    dup: 9066,
    sf: 16544,
    sdlp: 7330,
    uup: 2774,
    apni: 3979,
    other: 972,
  },
  {
    name: "Wigan",
    region: "North West",
    winner: "lab",
    con: 14314,
    lab: 21042,
    ld: 2428,
    brexit: 5959,
    green: 1299,
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
    con: 17692,
    lab: 20695,
    ld: 2706,
    brexit: 860,
    green: 965,
  },
  {
    name: "Woking",
    region: "South East",
    winner: "con",
    con: 26396,
    lab: 8827,
    ld: 16629,
    green: 1485,
    other: 600,
  },
  {
    name: "Wokingham",
    region: "South East",
    winner: "con",
    con: 30734,
    lab: 6450,
    ld: 23351,
    green: 1382,
    other: 80,
  },
  {
    name: "Wolverhampton South East",
    region: "West Midlands",
    winner: "lab",
    con: 14287,
    lab: 15522,
    ld: 1019,
    brexit: 2094,
    green: 521,
  },
  {
    name: "Wolverhampton South West",
    region: "West Midlands",
    winner: "con",
    con: 19864,
    lab: 18203,
    ld: 2041,
    brexit: 1028,
  },
  {
    name: "Workington",
    region: "North West",
    winner: "con",
    con: 20488,
    lab: 16312,
    ld: 1525,
    brexit: 1749,
    green: 596,
    other: 929,
  },
  {
    name: "Worsley and Eccles South",
    region: "North West",
    winner: "lab",
    con: 17227,
    lab: 20446,
    ld: 2510,
    brexit: 3224,
    green: 1300,
  },
  {
    name: "Wrexham",
    region: "Wales",
    winner: "con",
    con: 15199,
    lab: 13068,
    ld: 1447,
    brexit: 1222,
    green: 445,
    pc: 2151,
  },
  {
    name: "Wycombe",
    region: "South East",
    winner: "con",
    con: 24766,
    lab: 20552,
    ld: 6543,
    green: 1454,
    other: 1441,
  },
  {
    name: "Ynys Mon",
    region: "Wales",
    winner: "con",
    con: 12959,
    lab: 10991,
    brexit: 2184,
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

export { majoritySeats, results };