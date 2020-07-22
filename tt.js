let jumper = 0;
let hoodie = 0;
let jacket = 0;
let sweater = 0;
let raincoat = 0;
let blazer = 0;

let a = {
    "name": "swapnil",
    "payload": [
        {
            "id": "0001",
            "date": "2020-07-19",
            "clothe": "jumper"
        },
        {
            "id": "0002",
            "date": "2020-07-18",
            "clothe": "hoodie"
        },
        {
            "id": "0003",
            "date": "2020-07-17",
            "clothe": "jacket"
        },
        {
            "id": "0004",
            "date": "2020-07-16",
            "clothe": "jacket"
        },
        {
            "id": "0005",
            "date": "2020-07-15",
            "clothe": "sweater"
        },
        {
            "id": "0006",
            "date": "2020-07-14",
            "clothe": "hoodie"
        },
        {
            "id": "0007",
            "date": "2020-07-13",
            "clothe": "jumper"
        },
        {
            "id": "0008",
            "date": "2020-07-12",
            "clothe": "jumper"
        },
        {
            "id": "0009",
            "date": "2020-07-11",
            "clothe": "jacket"
        },
        {
            "id": "0010",
            "date": "2020-07-10",
            "clothe": "sweater"
        },
        {
            "id": "0011",
            "date": "2020-07-09",
            "clothe": "jacket"
        },
        {
            "id": "0012",
            "date": "2020-07-08",
            "clothe": "sweater"
        },
        {
            "id": "0013",
            "date": "2020-07-07",
            "clothe": "sweater"
        },
        {
            "id": "0014",
            "date": "2020-07-06",
            "clothe": "jacket"
        },
        {
            "id": "0015",
            "date": "2020-07-05",
            "clothe": "blazer"
        },
        {
            "id": "0016",
            "date": "2020-07-04",
            "clothe": "sweater"
        },
        {
            "id": "0017",
            "date": "2020-07-03",
            "clothe": "jacket"
        },
        {
            "id": "0018",
            "date": "2020-07-02",
            "clothe": "raincoat"
        },
        {
            "id": "0019",
            "date": "2020-07-01",
            "clothe": "sweater"
        },
        {
            "id": "0020",
            "date": "2020-06-30",
            "clothe": "blazer"
        },
        {
            "id": "0021",
            "date": "2020-06-29",
            "clothe": "jacket"
        },
        {
            "id": "0022",
            "date": "2020-06-28",
            "clothe": "jacket"
        },
        {
            "id": "0023",
            "date": "2020-06-27",
            "clothe": "raincoat"
        },
        {
            "id": "0024",
            "date": "2020-06-26",
            "clothe": "raincoat"
        },
        {
            "id": "0025",
            "date": "2020-06-25",
            "clothe": "blazer"
        },
        {
            "id": "0026",
            "date": "2020-06-24",
            "clothe": "blazer"
        },
        {
            "id": "0027",
            "date": "2020-06-23",
            "clothe": "sweater"
        },
        {
            "id": "0028",
            "date": "2020-06-22",
            "clothe": "sweater"
        },
        {
            "id": "0029",
            "date": "2020-06-21",
            "clothe": "raincoat"
        },
        {
            "id": "0030",
            "date": "2020-06-20",
            "clothe": "jacket"
        },
        {
            "id": "0031",
            "date": "2020-06-19",
            "clothe": "jumper"
        },
        {
            "id": "0032",
            "date": "2020-06-18",
            "clothe": "jumper"
        },
        {
            "id": "0033",
            "date": "2020-06-17",
            "clothe": "blazer"
        },
        {
            "id": "0034",
            "date": "2020-06-16",
            "clothe": "hoodie"
        },
        {
            "id": "0035",
            "date": "2020-06-15",
            "clothe": "hoodie"
        },
        {
            "id": "0036",
            "date": "2020-06-14",
            "clothe": "sweater"
        },
        {
            "id": "0037",
            "date": "2020-06-13",
            "clothe": "jumper"
        },
        {
            "id": "0038",
            "date": "2020-06-12",
            "clothe": "jacket"
        },
        {
            "id": "0039",
            "date": "2020-06-11",
            "clothe": "blazer"
        },
        {
            "id": "0040",
            "date": "2020-06-10",
            "clothe": "hoodie"
        },
        {
            "id": "0041",
            "date": "2020-06-09",
            "clothe": "hoodie"
        },
        {
            "id": "0042",
            "date": "2020-06-08",
            "clothe": "raincoat"
        },
        {
            "id": "0043",
            "date": "2020-06-07",
            "clothe": "jacket"
        },
        {
            "id": "0044",
            "date": "2020-06-06",
            "clothe": "jacket"
        },
        {
            "id": "0045",
            "date": "2020-06-05",
            "clothe": "jumper"
        },
        {
            "id": "0046",
            "date": "2020-06-04",
            "clothe": "jacket"
        },
        {
            "id": "0047",
            "date": "2020-06-03",
            "clothe": "blazer"
        },
        {
            "id": "0048",
            "date": "2020-06-02",
            "clothe": "sweater"
        },
        {
            "id": "0049",
            "date": "2020-06-01",
            "clothe": "jacket"
        },
        {
            "id": "0050",
            "date": "2020-05-31",
            "clothe": "sweater"
        },
        {
            "id": "0051",
            "date": "2020-05-30",
            "clothe": "sweater"
        },
        {
            "id": "0052",
            "date": "2020-05-29",
            "clothe": "sweater"
        },
        {
            "id": "0053",
            "date": "2020-05-28",
            "clothe": "hoodie"
        },
        {
            "id": "0054",
            "date": "2020-05-27",
            "clothe": "hoodie"
        },
        {
            "id": "0055",
            "date": "2020-05-26",
            "clothe": "hoodie"
        },
        {
            "id": "0056",
            "date": "2020-05-25",
            "clothe": "sweater"
        },
        {
            "id": "0057",
            "date": "2020-05-24",
            "clothe": "sweater"
        },
        {
            "id": "0058",
            "date": "2020-05-23",
            "clothe": "jacket"
        },
        {
            "id": "0059",
            "date": "2020-05-22",
            "clothe": "jacket"
        },
        {
            "id": "0060",
            "date": "2020-05-21",
            "clothe": "hoodie"
        },
        {
            "id": "0061",
            "date": "2020-05-20",
            "clothe": "sweater"
        },
        {
            "id": "0062",
            "date": "2020-05-19",
            "clothe": "hoodie"
        },
        {
            "id": "0063",
            "date": "2020-05-18",
            "clothe": "jacket"
        },
        {
            "id": "0064",
            "date": "2020-05-17",
            "clothe": "sweater"
        },
        {
            "id": "0065",
            "date": "2020-05-16",
            "clothe": "sweater"
        },
        {
            "id": "0066",
            "date": "2020-05-15",
            "clothe": "raincoat"
        },
        {
            "id": "0067",
            "date": "2020-05-14",
            "clothe": "raincoat"
        },
        {
            "id": "0068",
            "date": "2020-05-13",
            "clothe": "raincoat"
        },
        {
            "id": "0069",
            "date": "2020-05-12",
            "clothe": "jacket"
        },
        {
            "id": "0070",
            "date": "2020-05-11",
            "clothe": "blazer"
        },
        {
            "id": "0071",
            "date": "2020-05-10",
            "clothe": "hoodie"
        },
        {
            "id": "0072",
            "date": "2020-05-09",
            "clothe": "blazer"
        },
        {
            "id": "0073",
            "date": "2020-05-08",
            "clothe": "raincoat"
        },
        {
            "id": "0074",
            "date": "2020-05-07",
            "clothe": "raincoat"
        },
        {
            "id": "0075",
            "date": "2020-05-06",
            "clothe": "jacket"
        },
        {
            "id": "0076",
            "date": "2020-05-05",
            "clothe": "jumper"
        },
        {
            "id": "0077",
            "date": "2020-05-04",
            "clothe": "jacket"
        },
        {
            "id": "0078",
            "date": "2020-05-03",
            "clothe": "raincoat"
        },
        {
            "id": "0079",
            "date": "2020-05-02",
            "clothe": "raincoat"
        },
        {
            "id": "0080",
            "date": "2020-05-01",
            "clothe": "sweater"
        },
        {
            "id": "0081",
            "date": "2020-04-30",
            "clothe": "sweater"
        },
        {
            "id": "0082",
            "date": "2020-04-29",
            "clothe": "sweater"
        },
        {
            "id": "0083",
            "date": "2020-04-28",
            "clothe": "jacket"
        },
        {
            "id": "0084",
            "date": "2020-04-27",
            "clothe": "jumper"
        },
        {
            "id": "0085",
            "date": "2020-04-26",
            "clothe": "jumper"
        },
        {
            "id": "0086",
            "date": "2020-04-25",
            "clothe": "blazer"
        },
        {
            "id": "0087",
            "date": "2020-04-24",
            "clothe": "raincoat"
        },
        {
            "id": "0088",
            "date": "2020-04-23",
            "clothe": "blazer"
        },
        {
            "id": "0089",
            "date": "2020-04-22",
            "clothe": "jacket"
        },
        {
            "id": "0090",
            "date": "2020-04-21",
            "clothe": "jumper"
        },
        {
            "id": "0091",
            "date": "2020-04-20",
            "clothe": "hoodie"
        },
        {
            "id": "0092",
            "date": "2020-04-19",
            "clothe": "hoodie"
        },
        {
            "id": "0093",
            "date": "2020-04-18",
            "clothe": "raincoat"
        },
        {
            "id": "0094",
            "date": "2020-04-17",
            "clothe": "blazer"
        },
        {
            "id": "0095",
            "date": "2020-04-16",
            "clothe": "jacket"
        },
        {
            "id": "0096",
            "date": "2020-04-15",
            "clothe": "sweater"
        },
        {
            "id": "0097",
            "date": "2020-04-14",
            "clothe": "blazer"
        },
        {
            "id": "0098",
            "date": "2020-04-13",
            "clothe": "jumper"
        },
        {
            "id": "0099",
            "date": "2020-04-12",
            "clothe": "sweater"
        },
        {
            "id": "0100",
            "date": "2020-04-11",
            "clothe": "raincoat"
        },
        {
            "id": "0101",
            "date": "2020-04-10",
            "clothe": "jacket"
        },
        {
            "id": "0102",
            "date": "2020-04-09",
            "clothe": "jumper"
        },
        {
            "id": "0103",
            "date": "2020-04-08",
            "clothe": "raincoat"
        },
        {
            "id": "0104",
            "date": "2020-04-07",
            "clothe": "jumper"
        },
        {
            "id": "0105",
            "date": "2020-04-06",
            "clothe": "jumper"
        },
        {
            "id": "0106",
            "date": "2020-04-05",
            "clothe": "jacket"
        },
        {
            "id": "0107",
            "date": "2020-04-04",
            "clothe": "hoodie"
        },
        {
            "id": "0108",
            "date": "2020-04-03",
            "clothe": "hoodie"
        },
        {
            "id": "0109",
            "date": "2020-04-02",
            "clothe": "jumper"
        },
        {
            "id": "0110",
            "date": "2020-04-01",
            "clothe": "blazer"
        },
        {
            "id": "0111",
            "date": "2020-03-31",
            "clothe": "jacket"
        },
        {
            "id": "0112",
            "date": "2020-03-30",
            "clothe": "raincoat"
        },
        {
            "id": "0113",
            "date": "2020-03-29",
            "clothe": "sweater"
        },
        {
            "id": "0114",
            "date": "2020-03-28",
            "clothe": "sweater"
        },
        {
            "id": "0115",
            "date": "2020-03-27",
            "clothe": "sweater"
        },
        {
            "id": "0116",
            "date": "2020-03-26",
            "clothe": "blazer"
        },
        {
            "id": "0117",
            "date": "2020-03-25",
            "clothe": "jumper"
        },
        {
            "id": "0118",
            "date": "2020-03-24",
            "clothe": "hoodie"
        },
        {
            "id": "0119",
            "date": "2020-03-23",
            "clothe": "blazer"
        },
        {
            "id": "0120",
            "date": "2020-03-22",
            "clothe": "sweater"
        },
        {
            "id": "0121",
            "date": "2020-03-21",
            "clothe": "jacket"
        },
        {
            "id": "0122",
            "date": "2020-03-20",
            "clothe": "sweater"
        },
        {
            "id": "0123",
            "date": "2020-03-19",
            "clothe": "jumper"
        },
        {
            "id": "0124",
            "date": "2020-03-18",
            "clothe": "jumper"
        },
        {
            "id": "0125",
            "date": "2020-03-17",
            "clothe": "sweater"
        },
        {
            "id": "0126",
            "date": "2020-03-16",
            "clothe": "hoodie"
        },
        {
            "id": "0127",
            "date": "2020-03-15",
            "clothe": "raincoat"
        },
        {
            "id": "0128",
            "date": "2020-03-14",
            "clothe": "jumper"
        },
        {
            "id": "0129",
            "date": "2020-03-13",
            "clothe": "raincoat"
        },
        {
            "id": "0130",
            "date": "2020-03-12",
            "clothe": "hoodie"
        },
        {
            "id": "0131",
            "date": "2020-03-11",
            "clothe": "sweater"
        },
        {
            "id": "0132",
            "date": "2020-03-10",
            "clothe": "jumper"
        },
        {
            "id": "0133",
            "date": "2020-03-09",
            "clothe": "raincoat"
        },
        {
            "id": "0134",
            "date": "2020-03-08",
            "clothe": "sweater"
        },
        {
            "id": "0135",
            "date": "2020-03-07",
            "clothe": "hoodie"
        },
        {
            "id": "0136",
            "date": "2020-03-06",
            "clothe": "sweater"
        },
        {
            "id": "0137",
            "date": "2020-03-05",
            "clothe": "blazer"
        },
        {
            "id": "0138",
            "date": "2020-03-04",
            "clothe": "jumper"
        },
        {
            "id": "0139",
            "date": "2020-03-03",
            "clothe": "jacket"
        },
        {
            "id": "0140",
            "date": "2020-03-02",
            "clothe": "jumper"
        },
        {
            "id": "0141",
            "date": "2020-03-01",
            "clothe": "jumper"
        },
        {
            "id": "0142",
            "date": "2020-02-29",
            "clothe": "sweater"
        },
        {
            "id": "0143",
            "date": "2020-02-28",
            "clothe": "jumper"
        },
        {
            "id": "0144",
            "date": "2020-02-27",
            "clothe": "blazer"
        },
        {
            "id": "0145",
            "date": "2020-02-26",
            "clothe": "jacket"
        },
        {
            "id": "0146",
            "date": "2020-02-25",
            "clothe": "raincoat"
        },
        {
            "id": "0147",
            "date": "2020-02-24",
            "clothe": "blazer"
        },
        {
            "id": "0148",
            "date": "2020-02-23",
            "clothe": "sweater"
        },
        {
            "id": "0149",
            "date": "2020-02-22",
            "clothe": "hoodie"
        },
        {
            "id": "0150",
            "date": "2020-02-21",
            "clothe": "blazer"
        },
        {
            "id": "0151",
            "date": "2020-02-20",
            "clothe": "jacket"
        },
        {
            "id": "0152",
            "date": "2020-02-19",
            "clothe": "raincoat"
        },
        {
            "id": "0153",
            "date": "2020-02-18",
            "clothe": "jumper"
        },
        {
            "id": "0154",
            "date": "2020-02-17",
            "clothe": "hoodie"
        },
        {
            "id": "0155",
            "date": "2020-02-16",
            "clothe": "jumper"
        },
        {
            "id": "0156",
            "date": "2020-02-15",
            "clothe": "blazer"
        },
        {
            "id": "0157",
            "date": "2020-02-14",
            "clothe": "jumper"
        },
        {
            "id": "0158",
            "date": "2020-02-13",
            "clothe": "jumper"
        },
        {
            "id": "0159",
            "date": "2020-02-12",
            "clothe": "jumper"
        },
        {
            "id": "0160",
            "date": "2020-02-11",
            "clothe": "jumper"
        },
        {
            "id": "0161",
            "date": "2020-02-10",
            "clothe": "raincoat"
        },
        {
            "id": "0162",
            "date": "2020-02-09",
            "clothe": "raincoat"
        },
        {
            "id": "0163",
            "date": "2020-02-08",
            "clothe": "hoodie"
        },
        {
            "id": "0164",
            "date": "2020-02-07",
            "clothe": "raincoat"
        },
        {
            "id": "0165",
            "date": "2020-02-06",
            "clothe": "hoodie"
        },
        {
            "id": "0166",
            "date": "2020-02-05",
            "clothe": "sweater"
        },
        {
            "id": "0167",
            "date": "2020-02-04",
            "clothe": "hoodie"
        },
        {
            "id": "0168",
            "date": "2020-02-03",
            "clothe": "sweater"
        },
        {
            "id": "0169",
            "date": "2020-02-02",
            "clothe": "raincoat"
        },
        {
            "id": "0170",
            "date": "2020-02-01",
            "clothe": "raincoat"
        },
        {
            "id": "0171",
            "date": "2020-01-31",
            "clothe": "blazer"
        },
        {
            "id": "0172",
            "date": "2020-01-30",
            "clothe": "jumper"
        },
        {
            "id": "0173",
            "date": "2020-01-29",
            "clothe": "sweater"
        },
        {
            "id": "0174",
            "date": "2020-01-28",
            "clothe": "jumper"
        },
        {
            "id": "0175",
            "date": "2020-01-27",
            "clothe": "jumper"
        },
        {
            "id": "0176",
            "date": "2020-01-26",
            "clothe": "blazer"
        },
        {
            "id": "0177",
            "date": "2020-01-25",
            "clothe": "jumper"
        },
        {
            "id": "0178",
            "date": "2020-01-24",
            "clothe": "jacket"
        },
        {
            "id": "0179",
            "date": "2020-01-23",
            "clothe": "sweater"
        },
        {
            "id": "0180",
            "date": "2020-01-22",
            "clothe": "jacket"
        },
        {
            "id": "0181",
            "date": "2020-01-21",
            "clothe": "raincoat"
        },
        {
            "id": "0182",
            "date": "2020-01-20",
            "clothe": "hoodie"
        },
        {
            "id": "0183",
            "date": "2020-01-19",
            "clothe": "jacket"
        },
        {
            "id": "0184",
            "date": "2020-01-18",
            "clothe": "sweater"
        },
        {
            "id": "0185",
            "date": "2020-01-17",
            "clothe": "sweater"
        },
        {
            "id": "0186",
            "date": "2020-01-16",
            "clothe": "hoodie"
        },
        {
            "id": "0187",
            "date": "2020-01-15",
            "clothe": "sweater"
        },
        {
            "id": "0188",
            "date": "2020-01-14",
            "clothe": "blazer"
        },
        {
            "id": "0189",
            "date": "2020-01-13",
            "clothe": "raincoat"
        },
        {
            "id": "0190",
            "date": "2020-01-12",
            "clothe": "raincoat"
        },
        {
            "id": "0191",
            "date": "2020-01-11",
            "clothe": "jumper"
        },
        {
            "id": "0192",
            "date": "2020-01-10",
            "clothe": "raincoat"
        },
        {
            "id": "0193",
            "date": "2020-01-09",
            "clothe": "raincoat"
        },
        {
            "id": "0194",
            "date": "2020-01-08",
            "clothe": "jacket"
        },
        {
            "id": "0195",
            "date": "2020-01-07",
            "clothe": "raincoat"
        },
        {
            "id": "0196",
            "date": "2020-01-06",
            "clothe": "hoodie"
        },
        {
            "id": "0197",
            "date": "2020-01-05",
            "clothe": "hoodie"
        },
        {
            "id": "0198",
            "date": "2020-01-04",
            "clothe": "blazer"
        },
        {
            "id": "0199",
            "date": "2020-01-03",
            "clothe": "jacket"
        },
        {
            "id": "0200",
            "date": "2020-01-02",
            "clothe": "hoodie"
        },
        {
            "id": "0201",
            "date": "2020-01-01",
            "clothe": "blazer"
        },
        {
            "id": "0202",
            "date": "2019-12-31",
            "clothe": "jacket"
        },
        {
            "id": "0203",
            "date": "2019-12-30",
            "clothe": "raincoat"
        },
        {
            "id": "0204",
            "date": "2019-12-29",
            "clothe": "sweater"
        },
        {
            "id": "0205",
            "date": "2019-12-28",
            "clothe": "hoodie"
        },
        {
            "id": "0206",
            "date": "2019-12-27",
            "clothe": "sweater"
        },
        {
            "id": "0207",
            "date": "2019-12-26",
            "clothe": "jumper"
        },
        {
            "id": "0208",
            "date": "2019-12-25",
            "clothe": "jacket"
        },
        {
            "id": "0209",
            "date": "2019-12-24",
            "clothe": "hoodie"
        },
        {
            "id": "0210",
            "date": "2019-12-23",
            "clothe": "blazer"
        },
        {
            "id": "0211",
            "date": "2019-12-22",
            "clothe": "sweater"
        },
        {
            "id": "0212",
            "date": "2019-12-21",
            "clothe": "blazer"
        },
        {
            "id": "0213",
            "date": "2019-12-20",
            "clothe": "hoodie"
        },
        {
            "id": "0214",
            "date": "2019-12-19",
            "clothe": "blazer"
        },
        {
            "id": "0215",
            "date": "2019-12-18",
            "clothe": "sweater"
        },
        {
            "id": "0216",
            "date": "2019-12-17",
            "clothe": "jacket"
        },
        {
            "id": "0217",
            "date": "2019-12-16",
            "clothe": "sweater"
        },
        {
            "id": "0218",
            "date": "2019-12-15",
            "clothe": "raincoat"
        },
        {
            "id": "0219",
            "date": "2019-12-14",
            "clothe": "jacket"
        },
        {
            "id": "0220",
            "date": "2019-12-13",
            "clothe": "sweater"
        },
        {
            "id": "0221",
            "date": "2019-12-12",
            "clothe": "raincoat"
        },
        {
            "id": "0222",
            "date": "2019-12-11",
            "clothe": "sweater"
        },
        {
            "id": "0223",
            "date": "2019-12-10",
            "clothe": "sweater"
        },
        {
            "id": "0224",
            "date": "2019-12-09",
            "clothe": "raincoat"
        },
        {
            "id": "0225",
            "date": "2019-12-08",
            "clothe": "blazer"
        },
        {
            "id": "0226",
            "date": "2019-12-07",
            "clothe": "hoodie"
        },
        {
            "id": "0227",
            "date": "2019-12-06",
            "clothe": "hoodie"
        },
        {
            "id": "0228",
            "date": "2019-12-05",
            "clothe": "sweater"
        },
        {
            "id": "0229",
            "date": "2019-12-04",
            "clothe": "sweater"
        },
        {
            "id": "0230",
            "date": "2019-12-03",
            "clothe": "raincoat"
        },
        {
            "id": "0231",
            "date": "2019-12-02",
            "clothe": "jumper"
        },
        {
            "id": "0232",
            "date": "2019-12-01",
            "clothe": "jumper"
        },
        {
            "id": "0233",
            "date": "2019-11-30",
            "clothe": "jumper"
        },
        {
            "id": "0234",
            "date": "2019-11-29",
            "clothe": "sweater"
        },
        {
            "id": "0235",
            "date": "2019-11-28",
            "clothe": "raincoat"
        },
        {
            "id": "0236",
            "date": "2019-11-27",
            "clothe": "raincoat"
        },
        {
            "id": "0237",
            "date": "2019-11-26",
            "clothe": "raincoat"
        },
        {
            "id": "0238",
            "date": "2019-11-25",
            "clothe": "jumper"
        },
        {
            "id": "0239",
            "date": "2019-11-24",
            "clothe": "jacket"
        },
        {
            "id": "0240",
            "date": "2019-11-23",
            "clothe": "blazer"
        },
        {
            "id": "0241",
            "date": "2019-11-22",
            "clothe": "jacket"
        },
        {
            "id": "0242",
            "date": "2019-11-21",
            "clothe": "hoodie"
        },
        {
            "id": "0243",
            "date": "2019-11-20",
            "clothe": "hoodie"
        },
        {
            "id": "0244",
            "date": "2019-11-19",
            "clothe": "raincoat"
        },
        {
            "id": "0245",
            "date": "2019-11-18",
            "clothe": "sweater"
        },
        {
            "id": "0246",
            "date": "2019-11-17",
            "clothe": "jacket"
        },
        {
            "id": "0247",
            "date": "2019-11-16",
            "clothe": "jacket"
        },
        {
            "id": "0248",
            "date": "2019-11-15",
            "clothe": "raincoat"
        },
        {
            "id": "0249",
            "date": "2019-11-14",
            "clothe": "jumper"
        },
        {
            "id": "0250",
            "date": "2019-11-13",
            "clothe": "jumper"
        },
        {
            "id": "0251",
            "date": "2019-11-12",
            "clothe": "hoodie"
        },
        {
            "id": "0252",
            "date": "2019-11-11",
            "clothe": "jumper"
        },
        {
            "id": "0253",
            "date": "2019-11-10",
            "clothe": "raincoat"
        },
        {
            "id": "0254",
            "date": "2019-11-09",
            "clothe": "jacket"
        },
        {
            "id": "0255",
            "date": "2019-11-08",
            "clothe": "sweater"
        },
        {
            "id": "0256",
            "date": "2019-11-07",
            "clothe": "blazer"
        },
        {
            "id": "0257",
            "date": "2019-11-06",
            "clothe": "raincoat"
        },
        {
            "id": "0258",
            "date": "2019-11-05",
            "clothe": "jacket"
        },
        {
            "id": "0259",
            "date": "2019-11-04",
            "clothe": "sweater"
        },
        {
            "id": "0260",
            "date": "2019-11-03",
            "clothe": "hoodie"
        },
        {
            "id": "0261",
            "date": "2019-11-02",
            "clothe": "jumper"
        },
        {
            "id": "0262",
            "date": "2019-11-01",
            "clothe": "blazer"
        },
        {
            "id": "0263",
            "date": "2019-10-31",
            "clothe": "raincoat"
        },
        {
            "id": "0264",
            "date": "2019-10-30",
            "clothe": "hoodie"
        },
        {
            "id": "0265",
            "date": "2019-10-29",
            "clothe": "jumper"
        },
        {
            "id": "0266",
            "date": "2019-10-28",
            "clothe": "jacket"
        },
        {
            "id": "0267",
            "date": "2019-10-27",
            "clothe": "blazer"
        },
        {
            "id": "0268",
            "date": "2019-10-26",
            "clothe": "jumper"
        },
        {
            "id": "0269",
            "date": "2019-10-25",
            "clothe": "sweater"
        },
        {
            "id": "0270",
            "date": "2019-10-24",
            "clothe": "raincoat"
        },
        {
            "id": "0271",
            "date": "2019-10-23",
            "clothe": "jumper"
        },
        {
            "id": "0272",
            "date": "2019-10-22",
            "clothe": "blazer"
        },
        {
            "id": "0273",
            "date": "2019-10-21",
            "clothe": "blazer"
        },
        {
            "id": "0274",
            "date": "2019-10-20",
            "clothe": "raincoat"
        },
        {
            "id": "0275",
            "date": "2019-10-19",
            "clothe": "blazer"
        },
        {
            "id": "0276",
            "date": "2019-10-18",
            "clothe": "jumper"
        },
        {
            "id": "0277",
            "date": "2019-10-17",
            "clothe": "jumper"
        },
        {
            "id": "0278",
            "date": "2019-10-16",
            "clothe": "jacket"
        },
        {
            "id": "0279",
            "date": "2019-10-15",
            "clothe": "sweater"
        },
        {
            "id": "0280",
            "date": "2019-10-14",
            "clothe": "hoodie"
        },
        {
            "id": "0281",
            "date": "2019-10-13",
            "clothe": "hoodie"
        },
        {
            "id": "0282",
            "date": "2019-10-12",
            "clothe": "jacket"
        },
        {
            "id": "0283",
            "date": "2019-10-11",
            "clothe": "jacket"
        },
        {
            "id": "0284",
            "date": "2019-10-10",
            "clothe": "hoodie"
        },
        {
            "id": "0285",
            "date": "2019-10-09",
            "clothe": "sweater"
        },
        {
            "id": "0286",
            "date": "2019-10-08",
            "clothe": "hoodie"
        },
        {
            "id": "0287",
            "date": "2019-10-07",
            "clothe": "hoodie"
        },
        {
            "id": "0288",
            "date": "2019-10-06",
            "clothe": "sweater"
        },
        {
            "id": "0289",
            "date": "2019-10-05",
            "clothe": "raincoat"
        },
        {
            "id": "0290",
            "date": "2019-10-04",
            "clothe": "jacket"
        },
        {
            "id": "0291",
            "date": "2019-10-03",
            "clothe": "jacket"
        },
        {
            "id": "0292",
            "date": "2019-10-02",
            "clothe": "jumper"
        },
        {
            "id": "0293",
            "date": "2019-10-01",
            "clothe": "raincoat"
        },
        {
            "id": "0294",
            "date": "2019-09-30",
            "clothe": "jumper"
        },
        {
            "id": "0295",
            "date": "2019-09-29",
            "clothe": "jacket"
        },
        {
            "id": "0296",
            "date": "2019-09-28",
            "clothe": "sweater"
        },
        {
            "id": "0297",
            "date": "2019-09-27",
            "clothe": "sweater"
        },
        {
            "id": "0298",
            "date": "2019-09-26",
            "clothe": "raincoat"
        },
        {
            "id": "0299",
            "date": "2019-09-25",
            "clothe": "blazer"
        },
        {
            "id": "0300",
            "date": "2019-09-24",
            "clothe": "jacket"
        },
        {
            "id": "0301",
            "date": "2019-09-23",
            "clothe": "jacket"
        },
        {
            "id": "0302",
            "date": "2019-09-22",
            "clothe": "jacket"
        },
        {
            "id": "0303",
            "date": "2019-09-21",
            "clothe": "raincoat"
        },
        {
            "id": "0304",
            "date": "2019-09-20",
            "clothe": "raincoat"
        },
        {
            "id": "0305",
            "date": "2019-09-19",
            "clothe": "jumper"
        },
        {
            "id": "0306",
            "date": "2019-09-18",
            "clothe": "raincoat"
        },
        {
            "id": "0307",
            "date": "2019-09-17",
            "clothe": "jumper"
        },
        {
            "id": "0308",
            "date": "2019-09-16",
            "clothe": "blazer"
        },
        {
            "id": "0309",
            "date": "2019-09-15",
            "clothe": "jacket"
        },
        {
            "id": "0310",
            "date": "2019-09-14",
            "clothe": "raincoat"
        },
        {
            "id": "0311",
            "date": "2019-09-13",
            "clothe": "hoodie"
        },
        {
            "id": "0312",
            "date": "2019-09-12",
            "clothe": "blazer"
        },
        {
            "id": "0313",
            "date": "2019-09-11",
            "clothe": "jumper"
        },
        {
            "id": "0314",
            "date": "2019-09-10",
            "clothe": "blazer"
        },
        {
            "id": "0315",
            "date": "2019-09-09",
            "clothe": "hoodie"
        },
        {
            "id": "0316",
            "date": "2019-09-08",
            "clothe": "blazer"
        },
        {
            "id": "0317",
            "date": "2019-09-07",
            "clothe": "sweater"
        },
        {
            "id": "0318",
            "date": "2019-09-06",
            "clothe": "jumper"
        },
        {
            "id": "0319",
            "date": "2019-09-05",
            "clothe": "sweater"
        },
        {
            "id": "0320",
            "date": "2019-09-04",
            "clothe": "hoodie"
        },
        {
            "id": "0321",
            "date": "2019-09-03",
            "clothe": "sweater"
        },
        {
            "id": "0322",
            "date": "2019-09-02",
            "clothe": "blazer"
        },
        {
            "id": "0323",
            "date": "2019-09-01",
            "clothe": "jacket"
        },
        {
            "id": "0324",
            "date": "2019-08-31",
            "clothe": "hoodie"
        },
        {
            "id": "0325",
            "date": "2019-08-30",
            "clothe": "jumper"
        },
        {
            "id": "0326",
            "date": "2019-08-29",
            "clothe": "jumper"
        },
        {
            "id": "0327",
            "date": "2019-08-28",
            "clothe": "jacket"
        },
        {
            "id": "0328",
            "date": "2019-08-27",
            "clothe": "blazer"
        },
        {
            "id": "0329",
            "date": "2019-08-26",
            "clothe": "sweater"
        },
        {
            "id": "0330",
            "date": "2019-08-25",
            "clothe": "jacket"
        },
        {
            "id": "0331",
            "date": "2019-08-24",
            "clothe": "jacket"
        },
        {
            "id": "0332",
            "date": "2019-08-23",
            "clothe": "hoodie"
        },
        {
            "id": "0333",
            "date": "2019-08-22",
            "clothe": "sweater"
        },
        {
            "id": "0334",
            "date": "2019-08-21",
            "clothe": "jumper"
        },
        {
            "id": "0335",
            "date": "2019-08-20",
            "clothe": "hoodie"
        },
        {
            "id": "0336",
            "date": "2019-08-19",
            "clothe": "blazer"
        },
        {
            "id": "0337",
            "date": "2019-08-18",
            "clothe": "jumper"
        },
        {
            "id": "0338",
            "date": "2019-08-17",
            "clothe": "jacket"
        },
        {
            "id": "0339",
            "date": "2019-08-16",
            "clothe": "blazer"
        },
        {
            "id": "0340",
            "date": "2019-08-15",
            "clothe": "hoodie"
        },
        {
            "id": "0341",
            "date": "2019-08-14",
            "clothe": "jacket"
        },
        {
            "id": "0342",
            "date": "2019-08-13",
            "clothe": "sweater"
        },
        {
            "id": "0343",
            "date": "2019-08-12",
            "clothe": "hoodie"
        },
        {
            "id": "0344",
            "date": "2019-08-11",
            "clothe": "hoodie"
        },
        {
            "id": "0345",
            "date": "2019-08-10",
            "clothe": "jumper"
        },
        {
            "id": "0346",
            "date": "2019-08-09",
            "clothe": "jumper"
        },
        {
            "id": "0347",
            "date": "2019-08-08",
            "clothe": "sweater"
        },
        {
            "id": "0348",
            "date": "2019-08-07",
            "clothe": "raincoat"
        },
        {
            "id": "0349",
            "date": "2019-08-06",
            "clothe": "blazer"
        },
        {
            "id": "0350",
            "date": "2019-08-05",
            "clothe": "jacket"
        },
        {
            "id": "0351",
            "date": "2019-08-04",
            "clothe": "hoodie"
        },
        {
            "id": "0352",
            "date": "2019-08-03",
            "clothe": "jumper"
        },
        {
            "id": "0353",
            "date": "2019-08-02",
            "clothe": "raincoat"
        },
        {
            "id": "0354",
            "date": "2019-08-01",
            "clothe": "blazer"
        },
        {
            "id": "0355",
            "date": "2019-07-31",
            "clothe": "jacket"
        },
        {
            "id": "0356",
            "date": "2019-07-30",
            "clothe": "jumper"
        },
        {
            "id": "0357",
            "date": "2019-07-29",
            "clothe": "jumper"
        },
        {
            "id": "0358",
            "date": "2019-07-28",
            "clothe": "jumper"
        },
        {
            "id": "0359",
            "date": "2019-07-27",
            "clothe": "jumper"
        },
        {
            "id": "0360",
            "date": "2019-07-26",
            "clothe": "blazer"
        },
        {
            "id": "0361",
            "date": "2019-07-25",
            "clothe": "hoodie"
        },
        {
            "id": "0362",
            "date": "2019-07-24",
            "clothe": "sweater"
        },
        {
            "id": "0363",
            "date": "2019-07-23",
            "clothe": "sweater"
        },
        {
            "id": "0364",
            "date": "2019-07-22",
            "clothe": "jacket"
        },
        {
            "id": "0365",
            "date": "2019-07-21",
            "clothe": "raincoat"
        },
        {
            "id": "0366",
            "date": "2019-07-20",
            "clothe": "jumper"
        },
        {
            "id": "0367",
            "date": "2019-07-19",
            "clothe": "jacket"
        },
        {
            "id": "0368",
            "date": "2019-07-18",
            "clothe": "jumper"
        },
        {
            "id": "0369",
            "date": "2019-07-17",
            "clothe": "sweater"
        },
        {
            "id": "0370",
            "date": "2019-07-16",
            "clothe": "raincoat"
        },
        {
            "id": "0371",
            "date": "2019-07-15",
            "clothe": "raincoat"
        },
        {
            "id": "0372",
            "date": "2019-07-14",
            "clothe": "blazer"
        },
        {
            "id": "0373",
            "date": "2019-07-13",
            "clothe": "sweater"
        },
        {
            "id": "0374",
            "date": "2019-07-12",
            "clothe": "hoodie"
        },
        {
            "id": "0375",
            "date": "2019-07-11",
            "clothe": "sweater"
        },
        {
            "id": "0376",
            "date": "2019-07-10",
            "clothe": "raincoat"
        },
        {
            "id": "0377",
            "date": "2019-07-09",
            "clothe": "jacket"
        },
        {
            "id": "0378",
            "date": "2019-07-08",
            "clothe": "jacket"
        },
        {
            "id": "0379",
            "date": "2019-07-07",
            "clothe": "raincoat"
        },
        {
            "id": "0380",
            "date": "2019-07-06",
            "clothe": "raincoat"
        },
        {
            "id": "0381",
            "date": "2019-07-05",
            "clothe": "jumper"
        },
        {
            "id": "0382",
            "date": "2019-07-04",
            "clothe": "blazer"
        },
        {
            "id": "0383",
            "date": "2019-07-03",
            "clothe": "sweater"
        },
        {
            "id": "0384",
            "date": "2019-07-02",
            "clothe": "sweater"
        },
        {
            "id": "0385",
            "date": "2019-07-01",
            "clothe": "hoodie"
        },
        {
            "id": "0386",
            "date": "2019-06-30",
            "clothe": "hoodie"
        },
        {
            "id": "0387",
            "date": "2019-06-29",
            "clothe": "blazer"
        },
        {
            "id": "0388",
            "date": "2019-06-28",
            "clothe": "jacket"
        },
        {
            "id": "0389",
            "date": "2019-06-27",
            "clothe": "jacket"
        },
        {
            "id": "0390",
            "date": "2019-06-26",
            "clothe": "jumper"
        },
        {
            "id": "0391",
            "date": "2019-06-25",
            "clothe": "raincoat"
        },
        {
            "id": "0392",
            "date": "2019-06-24",
            "clothe": "blazer"
        },
        {
            "id": "0393",
            "date": "2019-06-23",
            "clothe": "raincoat"
        },
        {
            "id": "0394",
            "date": "2019-06-22",
            "clothe": "hoodie"
        },
        {
            "id": "0395",
            "date": "2019-06-21",
            "clothe": "raincoat"
        },
        {
            "id": "0396",
            "date": "2019-06-20",
            "clothe": "raincoat"
        },
        {
            "id": "0397",
            "date": "2019-06-19",
            "clothe": "raincoat"
        },
        {
            "id": "0398",
            "date": "2019-06-18",
            "clothe": "jumper"
        },
        {
            "id": "0399",
            "date": "2019-06-17",
            "clothe": "jumper"
        },
        {
            "id": "0400",
            "date": "2019-06-16",
            "clothe": "hoodie"
        },
        {
            "id": "0401",
            "date": "2019-06-15",
            "clothe": "jumper"
        },
        {
            "id": "0402",
            "date": "2019-06-14",
            "clothe": "sweater"
        },
        {
            "id": "0403",
            "date": "2019-06-13",
            "clothe": "sweater"
        },
        {
            "id": "0404",
            "date": "2019-06-12",
            "clothe": "raincoat"
        },
        {
            "id": "0405",
            "date": "2019-06-11",
            "clothe": "jumper"
        },
        {
            "id": "0406",
            "date": "2019-06-10",
            "clothe": "jacket"
        },
        {
            "id": "0407",
            "date": "2019-06-09",
            "clothe": "raincoat"
        },
        {
            "id": "0408",
            "date": "2019-06-08",
            "clothe": "sweater"
        },
        {
            "id": "0409",
            "date": "2019-06-07",
            "clothe": "jumper"
        },
        {
            "id": "0410",
            "date": "2019-06-06",
            "clothe": "jacket"
        },
        {
            "id": "0411",
            "date": "2019-06-05",
            "clothe": "sweater"
        },
        {
            "id": "0412",
            "date": "2019-06-04",
            "clothe": "blazer"
        },
        {
            "id": "0413",
            "date": "2019-06-03",
            "clothe": "raincoat"
        },
        {
            "id": "0414",
            "date": "2019-06-02",
            "clothe": "raincoat"
        },
        {
            "id": "0415",
            "date": "2019-06-01",
            "clothe": "jumper"
        },
        {
            "id": "0416",
            "date": "2019-05-31",
            "clothe": "blazer"
        },
        {
            "id": "0417",
            "date": "2019-05-30",
            "clothe": "blazer"
        },
        {
            "id": "0418",
            "date": "2019-05-29",
            "clothe": "jumper"
        },
        {
            "id": "0419",
            "date": "2019-05-28",
            "clothe": "raincoat"
        },
        {
            "id": "0420",
            "date": "2019-05-27",
            "clothe": "raincoat"
        },
        {
            "id": "0421",
            "date": "2019-05-26",
            "clothe": "hoodie"
        },
        {
            "id": "0422",
            "date": "2019-05-25",
            "clothe": "jacket"
        },
        {
            "id": "0423",
            "date": "2019-05-24",
            "clothe": "raincoat"
        },
        {
            "id": "0424",
            "date": "2019-05-23",
            "clothe": "hoodie"
        },
        {
            "id": "0425",
            "date": "2019-05-22",
            "clothe": "blazer"
        },
        {
            "id": "0426",
            "date": "2019-05-21",
            "clothe": "jacket"
        },
        {
            "id": "0427",
            "date": "2019-05-20",
            "clothe": "hoodie"
        },
        {
            "id": "0428",
            "date": "2019-05-19",
            "clothe": "raincoat"
        },
        {
            "id": "0429",
            "date": "2019-05-18",
            "clothe": "sweater"
        },
        {
            "id": "0430",
            "date": "2019-05-17",
            "clothe": "jacket"
        },
        {
            "id": "0431",
            "date": "2019-05-16",
            "clothe": "hoodie"
        },
        {
            "id": "0432",
            "date": "2019-05-15",
            "clothe": "blazer"
        },
        {
            "id": "0433",
            "date": "2019-05-14",
            "clothe": "hoodie"
        },
        {
            "id": "0434",
            "date": "2019-05-13",
            "clothe": "jumper"
        },
        {
            "id": "0435",
            "date": "2019-05-12",
            "clothe": "blazer"
        },
        {
            "id": "0436",
            "date": "2019-05-11",
            "clothe": "raincoat"
        },
        {
            "id": "0437",
            "date": "2019-05-10",
            "clothe": "sweater"
        },
        {
            "id": "0438",
            "date": "2019-05-09",
            "clothe": "blazer"
        },
        {
            "id": "0439",
            "date": "2019-05-08",
            "clothe": "sweater"
        },
        {
            "id": "0440",
            "date": "2019-05-07",
            "clothe": "raincoat"
        },
        {
            "id": "0441",
            "date": "2019-05-06",
            "clothe": "raincoat"
        },
        {
            "id": "0442",
            "date": "2019-05-05",
            "clothe": "jacket"
        },
        {
            "id": "0443",
            "date": "2019-05-04",
            "clothe": "raincoat"
        },
        {
            "id": "0444",
            "date": "2019-05-03",
            "clothe": "jacket"
        },
        {
            "id": "0445",
            "date": "2019-05-02",
            "clothe": "jumper"
        },
        {
            "id": "0446",
            "date": "2019-05-01",
            "clothe": "jumper"
        },
        {
            "id": "0447",
            "date": "2019-04-30",
            "clothe": "raincoat"
        },
        {
            "id": "0448",
            "date": "2019-04-29",
            "clothe": "jacket"
        },
        {
            "id": "0449",
            "date": "2019-04-28",
            "clothe": "blazer"
        },
        {
            "id": "0450",
            "date": "2019-04-27",
            "clothe": "raincoat"
        },
        {
            "id": "0451",
            "date": "2019-04-26",
            "clothe": "jumper"
        },
        {
            "id": "0452",
            "date": "2019-04-25",
            "clothe": "sweater"
        },
        {
            "id": "0453",
            "date": "2019-04-24",
            "clothe": "jacket"
        },
        {
            "id": "0454",
            "date": "2019-04-23",
            "clothe": "jumper"
        },
        {
            "id": "0455",
            "date": "2019-04-22",
            "clothe": "jumper"
        },
        {
            "id": "0456",
            "date": "2019-04-21",
            "clothe": "jacket"
        },
        {
            "id": "0457",
            "date": "2019-04-20",
            "clothe": "sweater"
        },
        {
            "id": "0458",
            "date": "2019-04-19",
            "clothe": "jacket"
        },
        {
            "id": "0459",
            "date": "2019-04-18",
            "clothe": "jacket"
        },
        {
            "id": "0460",
            "date": "2019-04-17",
            "clothe": "raincoat"
        },
        {
            "id": "0461",
            "date": "2019-04-16",
            "clothe": "jumper"
        },
        {
            "id": "0462",
            "date": "2019-04-15",
            "clothe": "blazer"
        },
        {
            "id": "0463",
            "date": "2019-04-14",
            "clothe": "raincoat"
        },
        {
            "id": "0464",
            "date": "2019-04-13",
            "clothe": "raincoat"
        },
        {
            "id": "0465",
            "date": "2019-04-12",
            "clothe": "jacket"
        },
        {
            "id": "0466",
            "date": "2019-04-11",
            "clothe": "raincoat"
        },
        {
            "id": "0467",
            "date": "2019-04-10",
            "clothe": "jacket"
        },
        {
            "id": "0468",
            "date": "2019-04-09",
            "clothe": "blazer"
        },
        {
            "id": "0469",
            "date": "2019-04-08",
            "clothe": "blazer"
        },
        {
            "id": "0470",
            "date": "2019-04-07",
            "clothe": "blazer"
        },
        {
            "id": "0471",
            "date": "2019-04-06",
            "clothe": "raincoat"
        },
        {
            "id": "0472",
            "date": "2019-04-05",
            "clothe": "raincoat"
        },
        {
            "id": "0473",
            "date": "2019-04-04",
            "clothe": "raincoat"
        },
        {
            "id": "0474",
            "date": "2019-04-03",
            "clothe": "raincoat"
        },
        {
            "id": "0475",
            "date": "2019-04-02",
            "clothe": "jumper"
        },
        {
            "id": "0476",
            "date": "2019-04-01",
            "clothe": "jumper"
        },
        {
            "id": "0477",
            "date": "2019-03-31",
            "clothe": "sweater"
        },
        {
            "id": "0478",
            "date": "2019-03-30",
            "clothe": "jumper"
        },
        {
            "id": "0479",
            "date": "2019-03-29",
            "clothe": "hoodie"
        },
        {
            "id": "0480",
            "date": "2019-03-28",
            "clothe": "jumper"
        },
        {
            "id": "0481",
            "date": "2019-03-27",
            "clothe": "sweater"
        },
        {
            "id": "0482",
            "date": "2019-03-26",
            "clothe": "raincoat"
        },
        {
            "id": "0483",
            "date": "2019-03-25",
            "clothe": "raincoat"
        },
        {
            "id": "0484",
            "date": "2019-03-24",
            "clothe": "blazer"
        },
        {
            "id": "0485",
            "date": "2019-03-23",
            "clothe": "sweater"
        },
        {
            "id": "0486",
            "date": "2019-03-22",
            "clothe": "jumper"
        },
        {
            "id": "0487",
            "date": "2019-03-21",
            "clothe": "raincoat"
        },
        {
            "id": "0488",
            "date": "2019-03-20",
            "clothe": "jacket"
        },
        {
            "id": "0489",
            "date": "2019-03-19",
            "clothe": "sweater"
        },
        {
            "id": "0490",
            "date": "2019-03-18",
            "clothe": "jumper"
        },
        {
            "id": "0491",
            "date": "2019-03-17",
            "clothe": "jacket"
        },
        {
            "id": "0492",
            "date": "2019-03-16",
            "clothe": "raincoat"
        },
        {
            "id": "0493",
            "date": "2019-03-15",
            "clothe": "jacket"
        },
        {
            "id": "0494",
            "date": "2019-03-14",
            "clothe": "jumper"
        },
        {
            "id": "0495",
            "date": "2019-03-13",
            "clothe": "jacket"
        },
        {
            "id": "0496",
            "date": "2019-03-12",
            "clothe": "sweater"
        },
        {
            "id": "0497",
            "date": "2019-03-11",
            "clothe": "jumper"
        },
        {
            "id": "0498",
            "date": "2019-03-10",
            "clothe": "jumper"
        },
        {
            "id": "0499",
            "date": "2019-03-09",
            "clothe": "jumper"
        },
        {
            "id": "0500",
            "date": "2019-03-08",
            "clothe": "jumper"
        },
        {
            "id": "0501",
            "date": "2019-03-07",
            "clothe": "jacket"
        },
        {
            "id": "0502",
            "date": "2019-03-06",
            "clothe": "sweater"
        },
        {
            "id": "0503",
            "date": "2019-03-05",
            "clothe": "sweater"
        },
        {
            "id": "0504",
            "date": "2019-03-04",
            "clothe": "jumper"
        },
        {
            "id": "0505",
            "date": "2019-03-03",
            "clothe": "sweater"
        },
        {
            "id": "0506",
            "date": "2019-03-02",
            "clothe": "blazer"
        },
        {
            "id": "0507",
            "date": "2019-03-01",
            "clothe": "hoodie"
        },
        {
            "id": "0508",
            "date": "2019-02-28",
            "clothe": "raincoat"
        },
        {
            "id": "0509",
            "date": "2019-02-27",
            "clothe": "jumper"
        },
        {
            "id": "0510",
            "date": "2019-02-26",
            "clothe": "sweater"
        },
        {
            "id": "0511",
            "date": "2019-02-25",
            "clothe": "sweater"
        },
        {
            "id": "0512",
            "date": "2019-02-24",
            "clothe": "blazer"
        },
        {
            "id": "0513",
            "date": "2019-02-23",
            "clothe": "sweater"
        },
        {
            "id": "0514",
            "date": "2019-02-22",
            "clothe": "sweater"
        },
        {
            "id": "0515",
            "date": "2019-02-21",
            "clothe": "blazer"
        },
        {
            "id": "0516",
            "date": "2019-02-20",
            "clothe": "jacket"
        },
        {
            "id": "0517",
            "date": "2019-02-19",
            "clothe": "raincoat"
        },
        {
            "id": "0518",
            "date": "2019-02-18",
            "clothe": "blazer"
        },
        {
            "id": "0519",
            "date": "2019-02-17",
            "clothe": "jumper"
        },
        {
            "id": "0520",
            "date": "2019-02-16",
            "clothe": "hoodie"
        },
        {
            "id": "0521",
            "date": "2019-02-15",
            "clothe": "jumper"
        },
        {
            "id": "0522",
            "date": "2019-02-14",
            "clothe": "hoodie"
        },
        {
            "id": "0523",
            "date": "2019-02-13",
            "clothe": "hoodie"
        },
        {
            "id": "0524",
            "date": "2019-02-12",
            "clothe": "sweater"
        },
        {
            "id": "0525",
            "date": "2019-02-11",
            "clothe": "raincoat"
        },
        {
            "id": "0526",
            "date": "2019-02-10",
            "clothe": "blazer"
        },
        {
            "id": "0527",
            "date": "2019-02-09",
            "clothe": "jacket"
        },
        {
            "id": "0528",
            "date": "2019-02-08",
            "clothe": "jumper"
        },
        {
            "id": "0529",
            "date": "2019-02-07",
            "clothe": "jumper"
        },
        {
            "id": "0530",
            "date": "2019-02-06",
            "clothe": "hoodie"
        },
        {
            "id": "0531",
            "date": "2019-02-05",
            "clothe": "blazer"
        },
        {
            "id": "0532",
            "date": "2019-02-04",
            "clothe": "sweater"
        },
        {
            "id": "0533",
            "date": "2019-02-03",
            "clothe": "jacket"
        },
        {
            "id": "0534",
            "date": "2019-02-02",
            "clothe": "jumper"
        },
        {
            "id": "0535",
            "date": "2019-02-01",
            "clothe": "blazer"
        },
        {
            "id": "0536",
            "date": "2019-01-31",
            "clothe": "hoodie"
        },
        {
            "id": "0537",
            "date": "2019-01-30",
            "clothe": "jacket"
        },
        {
            "id": "0538",
            "date": "2019-01-29",
            "clothe": "hoodie"
        },
        {
            "id": "0539",
            "date": "2019-01-28",
            "clothe": "blazer"
        },
        {
            "id": "0540",
            "date": "2019-01-27",
            "clothe": "sweater"
        },
        {
            "id": "0541",
            "date": "2019-01-26",
            "clothe": "jacket"
        },
        {
            "id": "0542",
            "date": "2019-01-25",
            "clothe": "jumper"
        },
        {
            "id": "0543",
            "date": "2019-01-24",
            "clothe": "sweater"
        },
        {
            "id": "0544",
            "date": "2019-01-23",
            "clothe": "blazer"
        },
        {
            "id": "0545",
            "date": "2019-01-22",
            "clothe": "blazer"
        },
        {
            "id": "0546",
            "date": "2019-01-21",
            "clothe": "jumper"
        },
        {
            "id": "0547",
            "date": "2019-01-20",
            "clothe": "raincoat"
        },
        {
            "id": "0548",
            "date": "2019-01-19",
            "clothe": "raincoat"
        },
        {
            "id": "0549",
            "date": "2019-01-18",
            "clothe": "jumper"
        },
        {
            "id": "0550",
            "date": "2019-01-17",
            "clothe": "jumper"
        },
        {
            "id": "0551",
            "date": "2019-01-16",
            "clothe": "hoodie"
        },
        {
            "id": "0552",
            "date": "2019-01-15",
            "clothe": "hoodie"
        },
        {
            "id": "0553",
            "date": "2019-01-14",
            "clothe": "raincoat"
        },
        {
            "id": "0554",
            "date": "2019-01-13",
            "clothe": "jumper"
        },
        {
            "id": "0555",
            "date": "2019-01-12",
            "clothe": "jumper"
        },
        {
            "id": "0556",
            "date": "2019-01-11",
            "clothe": "raincoat"
        },
        {
            "id": "0557",
            "date": "2019-01-10",
            "clothe": "jumper"
        },
        {
            "id": "0558",
            "date": "2019-01-09",
            "clothe": "sweater"
        },
        {
            "id": "0559",
            "date": "2019-01-08",
            "clothe": "sweater"
        },
        {
            "id": "0560",
            "date": "2019-01-07",
            "clothe": "hoodie"
        },
        {
            "id": "0561",
            "date": "2019-01-06",
            "clothe": "jumper"
        },
        {
            "id": "0562",
            "date": "2019-01-05",
            "clothe": "jumper"
        },
        {
            "id": "0563",
            "date": "2019-01-04",
            "clothe": "jumper"
        },
        {
            "id": "0564",
            "date": "2019-01-03",
            "clothe": "sweater"
        },
        {
            "id": "0565",
            "date": "2019-01-02",
            "clothe": "blazer"
        },
        {
            "id": "0566",
            "date": "2019-01-01",
            "clothe": "jacket"
        },
        {
            "id": "0567",
            "date": "2018-12-31",
            "clothe": "jumper"
        },
        {
            "id": "0568",
            "date": "2018-12-30",
            "clothe": "jacket"
        },
        {
            "id": "0569",
            "date": "2018-12-29",
            "clothe": "raincoat"
        },
        {
            "id": "0570",
            "date": "2018-12-28",
            "clothe": "jacket"
        },
        {
            "id": "0571",
            "date": "2018-12-27",
            "clothe": "blazer"
        },
        {
            "id": "0572",
            "date": "2018-12-26",
            "clothe": "jumper"
        },
        {
            "id": "0573",
            "date": "2018-12-25",
            "clothe": "hoodie"
        },
        {
            "id": "0574",
            "date": "2018-12-24",
            "clothe": "jumper"
        },
        {
            "id": "0575",
            "date": "2018-12-23",
            "clothe": "jacket"
        },
        {
            "id": "0576",
            "date": "2018-12-22",
            "clothe": "hoodie"
        },
        {
            "id": "0577",
            "date": "2018-12-21",
            "clothe": "blazer"
        },
        {
            "id": "0578",
            "date": "2018-12-20",
            "clothe": "jacket"
        },
        {
            "id": "0579",
            "date": "2018-12-19",
            "clothe": "hoodie"
        },
        {
            "id": "0580",
            "date": "2018-12-18",
            "clothe": "jacket"
        },
        {
            "id": "0581",
            "date": "2018-12-17",
            "clothe": "hoodie"
        },
        {
            "id": "0582",
            "date": "2018-12-16",
            "clothe": "jumper"
        },
        {
            "id": "0583",
            "date": "2018-12-15",
            "clothe": "raincoat"
        },
        {
            "id": "0584",
            "date": "2018-12-14",
            "clothe": "hoodie"
        },
        {
            "id": "0585",
            "date": "2018-12-13",
            "clothe": "blazer"
        },
        {
            "id": "0586",
            "date": "2018-12-12",
            "clothe": "jumper"
        },
        {
            "id": "0587",
            "date": "2018-12-11",
            "clothe": "blazer"
        },
        {
            "id": "0588",
            "date": "2018-12-10",
            "clothe": "jacket"
        },
        {
            "id": "0589",
            "date": "2018-12-09",
            "clothe": "raincoat"
        },
        {
            "id": "0590",
            "date": "2018-12-08",
            "clothe": "sweater"
        },
        {
            "id": "0591",
            "date": "2018-12-07",
            "clothe": "raincoat"
        },
        {
            "id": "0592",
            "date": "2018-12-06",
            "clothe": "sweater"
        },
        {
            "id": "0593",
            "date": "2018-12-05",
            "clothe": "blazer"
        },
        {
            "id": "0594",
            "date": "2018-12-04",
            "clothe": "jumper"
        },
        {
            "id": "0595",
            "date": "2018-12-03",
            "clothe": "jacket"
        },
        {
            "id": "0596",
            "date": "2018-12-02",
            "clothe": "blazer"
        },
        {
            "id": "0597",
            "date": "2018-12-01",
            "clothe": "hoodie"
        },
        {
            "id": "0598",
            "date": "2018-11-30",
            "clothe": "sweater"
        },
        {
            "id": "0599",
            "date": "2018-11-29",
            "clothe": "raincoat"
        },
        {
            "id": "0600",
            "date": "2018-11-28",
            "clothe": "hoodie"
        },
        {
            "id": "0601",
            "date": "2018-11-27",
            "clothe": "blazer"
        },
        {
            "id": "0602",
            "date": "2018-11-26",
            "clothe": "blazer"
        },
        {
            "id": "0603",
            "date": "2018-11-25",
            "clothe": "raincoat"
        },
        {
            "id": "0604",
            "date": "2018-11-24",
            "clothe": "sweater"
        },
        {
            "id": "0605",
            "date": "2018-11-23",
            "clothe": "jacket"
        },
        {
            "id": "0606",
            "date": "2018-11-22",
            "clothe": "jumper"
        },
        {
            "id": "0607",
            "date": "2018-11-21",
            "clothe": "jacket"
        },
        {
            "id": "0608",
            "date": "2018-11-20",
            "clothe": "jacket"
        },
        {
            "id": "0609",
            "date": "2018-11-19",
            "clothe": "hoodie"
        },
        {
            "id": "0610",
            "date": "2018-11-18",
            "clothe": "blazer"
        },
        {
            "id": "0611",
            "date": "2018-11-17",
            "clothe": "jumper"
        },
        {
            "id": "0612",
            "date": "2018-11-16",
            "clothe": "jumper"
        },
        {
            "id": "0613",
            "date": "2018-11-15",
            "clothe": "jumper"
        },
        {
            "id": "0614",
            "date": "2018-11-14",
            "clothe": "sweater"
        },
        {
            "id": "0615",
            "date": "2018-11-13",
            "clothe": "raincoat"
        },
        {
            "id": "0616",
            "date": "2018-11-12",
            "clothe": "jacket"
        },
        {
            "id": "0617",
            "date": "2018-11-11",
            "clothe": "raincoat"
        },
        {
            "id": "0618",
            "date": "2018-11-10",
            "clothe": "raincoat"
        },
        {
            "id": "0619",
            "date": "2018-11-09",
            "clothe": "sweater"
        },
        {
            "id": "0620",
            "date": "2018-11-08",
            "clothe": "raincoat"
        },
        {
            "id": "0621",
            "date": "2018-11-07",
            "clothe": "sweater"
        },
        {
            "id": "0622",
            "date": "2018-11-06",
            "clothe": "sweater"
        },
        {
            "id": "0623",
            "date": "2018-11-05",
            "clothe": "hoodie"
        },
        {
            "id": "0624",
            "date": "2018-11-04",
            "clothe": "sweater"
        },
        {
            "id": "0625",
            "date": "2018-11-03",
            "clothe": "raincoat"
        },
        {
            "id": "0626",
            "date": "2018-11-02",
            "clothe": "blazer"
        },
        {
            "id": "0627",
            "date": "2018-11-01",
            "clothe": "jumper"
        },
        {
            "id": "0628",
            "date": "2018-10-31",
            "clothe": "hoodie"
        },
        {
            "id": "0629",
            "date": "2018-10-30",
            "clothe": "jumper"
        },
        {
            "id": "0630",
            "date": "2018-10-29",
            "clothe": "jumper"
        },
        {
            "id": "0631",
            "date": "2018-10-28",
            "clothe": "sweater"
        },
        {
            "id": "0632",
            "date": "2018-10-27",
            "clothe": "jumper"
        },
        {
            "id": "0633",
            "date": "2018-10-26",
            "clothe": "jacket"
        },
        {
            "id": "0634",
            "date": "2018-10-25",
            "clothe": "hoodie"
        },
        {
            "id": "0635",
            "date": "2018-10-24",
            "clothe": "raincoat"
        },
        {
            "id": "0636",
            "date": "2018-10-23",
            "clothe": "sweater"
        },
        {
            "id": "0637",
            "date": "2018-10-22",
            "clothe": "raincoat"
        },
        {
            "id": "0638",
            "date": "2018-10-21",
            "clothe": "jumper"
        },
        {
            "id": "0639",
            "date": "2018-10-20",
            "clothe": "hoodie"
        },
        {
            "id": "0640",
            "date": "2018-10-19",
            "clothe": "hoodie"
        },
        {
            "id": "0641",
            "date": "2018-10-18",
            "clothe": "jumper"
        },
        {
            "id": "0642",
            "date": "2018-10-17",
            "clothe": "jacket"
        },
        {
            "id": "0643",
            "date": "2018-10-16",
            "clothe": "raincoat"
        },
        {
            "id": "0644",
            "date": "2018-10-15",
            "clothe": "hoodie"
        },
        {
            "id": "0645",
            "date": "2018-10-14",
            "clothe": "hoodie"
        },
        {
            "id": "0646",
            "date": "2018-10-13",
            "clothe": "jacket"
        },
        {
            "id": "0647",
            "date": "2018-10-12",
            "clothe": "raincoat"
        },
        {
            "id": "0648",
            "date": "2018-10-11",
            "clothe": "hoodie"
        },
        {
            "id": "0649",
            "date": "2018-10-10",
            "clothe": "jacket"
        },
        {
            "id": "0650",
            "date": "2018-10-09",
            "clothe": "hoodie"
        },
        {
            "id": "0651",
            "date": "2018-10-08",
            "clothe": "blazer"
        },
        {
            "id": "0652",
            "date": "2018-10-07",
            "clothe": "hoodie"
        },
        {
            "id": "0653",
            "date": "2018-10-06",
            "clothe": "jacket"
        },
        {
            "id": "0654",
            "date": "2018-10-05",
            "clothe": "sweater"
        },
        {
            "id": "0655",
            "date": "2018-10-04",
            "clothe": "jumper"
        },
        {
            "id": "0656",
            "date": "2018-10-03",
            "clothe": "jumper"
        },
        {
            "id": "0657",
            "date": "2018-10-02",
            "clothe": "sweater"
        },
        {
            "id": "0658",
            "date": "2018-10-01",
            "clothe": "hoodie"
        },
        {
            "id": "0659",
            "date": "2018-09-30",
            "clothe": "raincoat"
        },
        {
            "id": "0660",
            "date": "2018-09-29",
            "clothe": "raincoat"
        },
        {
            "id": "0661",
            "date": "2018-09-28",
            "clothe": "raincoat"
        },
        {
            "id": "0662",
            "date": "2018-09-27",
            "clothe": "sweater"
        },
        {
            "id": "0663",
            "date": "2018-09-26",
            "clothe": "jumper"
        },
        {
            "id": "0664",
            "date": "2018-09-25",
            "clothe": "jacket"
        },
        {
            "id": "0665",
            "date": "2018-09-24",
            "clothe": "jumper"
        },
        {
            "id": "0666",
            "date": "2018-09-23",
            "clothe": "sweater"
        },
        {
            "id": "0667",
            "date": "2018-09-22",
            "clothe": "blazer"
        },
        {
            "id": "0668",
            "date": "2018-09-21",
            "clothe": "jumper"
        },
        {
            "id": "0669",
            "date": "2018-09-20",
            "clothe": "blazer"
        },
        {
            "id": "0670",
            "date": "2018-09-19",
            "clothe": "sweater"
        },
        {
            "id": "0671",
            "date": "2018-09-18",
            "clothe": "raincoat"
        },
        {
            "id": "0672",
            "date": "2018-09-17",
            "clothe": "jacket"
        },
        {
            "id": "0673",
            "date": "2018-09-16",
            "clothe": "hoodie"
        },
        {
            "id": "0674",
            "date": "2018-09-15",
            "clothe": "jacket"
        },
        {
            "id": "0675",
            "date": "2018-09-14",
            "clothe": "raincoat"
        },
        {
            "id": "0676",
            "date": "2018-09-13",
            "clothe": "sweater"
        },
        {
            "id": "0677",
            "date": "2018-09-12",
            "clothe": "jumper"
        },
        {
            "id": "0678",
            "date": "2018-09-11",
            "clothe": "raincoat"
        },
        {
            "id": "0679",
            "date": "2018-09-10",
            "clothe": "jacket"
        },
        {
            "id": "0680",
            "date": "2018-09-09",
            "clothe": "hoodie"
        },
        {
            "id": "0681",
            "date": "2018-09-08",
            "clothe": "hoodie"
        },
        {
            "id": "0682",
            "date": "2018-09-07",
            "clothe": "jacket"
        },
        {
            "id": "0683",
            "date": "2018-09-06",
            "clothe": "sweater"
        },
        {
            "id": "0684",
            "date": "2018-09-05",
            "clothe": "raincoat"
        },
        {
            "id": "0685",
            "date": "2018-09-04",
            "clothe": "blazer"
        },
        {
            "id": "0686",
            "date": "2018-09-03",
            "clothe": "blazer"
        },
        {
            "id": "0687",
            "date": "2018-09-02",
            "clothe": "jumper"
        },
        {
            "id": "0688",
            "date": "2018-09-01",
            "clothe": "jumper"
        },
        {
            "id": "0689",
            "date": "2018-08-31",
            "clothe": "sweater"
        },
        {
            "id": "0690",
            "date": "2018-08-30",
            "clothe": "sweater"
        },
        {
            "id": "0691",
            "date": "2018-08-29",
            "clothe": "jumper"
        },
        {
            "id": "0692",
            "date": "2018-08-28",
            "clothe": "hoodie"
        },
        {
            "id": "0693",
            "date": "2018-08-27",
            "clothe": "jacket"
        },
        {
            "id": "0694",
            "date": "2018-08-26",
            "clothe": "blazer"
        },
        {
            "id": "0695",
            "date": "2018-08-25",
            "clothe": "blazer"
        },
        {
            "id": "0696",
            "date": "2018-08-24",
            "clothe": "sweater"
        },
        {
            "id": "0697",
            "date": "2018-08-23",
            "clothe": "jumper"
        },
        {
            "id": "0698",
            "date": "2018-08-22",
            "clothe": "hoodie"
        },
        {
            "id": "0699",
            "date": "2018-08-21",
            "clothe": "blazer"
        },
        {
            "id": "0700",
            "date": "2018-08-20",
            "clothe": "jumper"
        },
        {
            "id": "0701",
            "date": "2018-08-19",
            "clothe": "jumper"
        },
        {
            "id": "0702",
            "date": "2018-08-18",
            "clothe": "raincoat"
        },
        {
            "id": "0703",
            "date": "2018-08-17",
            "clothe": "hoodie"
        },
        {
            "id": "0704",
            "date": "2018-08-16",
            "clothe": "raincoat"
        },
        {
            "id": "0705",
            "date": "2018-08-15",
            "clothe": "jumper"
        },
        {
            "id": "0706",
            "date": "2018-08-14",
            "clothe": "hoodie"
        },
        {
            "id": "0707",
            "date": "2018-08-13",
            "clothe": "sweater"
        },
        {
            "id": "0708",
            "date": "2018-08-12",
            "clothe": "blazer"
        },
        {
            "id": "0709",
            "date": "2018-08-11",
            "clothe": "blazer"
        },
        {
            "id": "0710",
            "date": "2018-08-10",
            "clothe": "blazer"
        },
        {
            "id": "0711",
            "date": "2018-08-09",
            "clothe": "sweater"
        },
        {
            "id": "0712",
            "date": "2018-08-08",
            "clothe": "sweater"
        },
        {
            "id": "0713",
            "date": "2018-08-07",
            "clothe": "raincoat"
        },
        {
            "id": "0714",
            "date": "2018-08-06",
            "clothe": "jacket"
        },
        {
            "id": "0715",
            "date": "2018-08-05",
            "clothe": "hoodie"
        },
        {
            "id": "0716",
            "date": "2018-08-04",
            "clothe": "raincoat"
        },
        {
            "id": "0717",
            "date": "2018-08-03",
            "clothe": "raincoat"
        },
        {
            "id": "0718",
            "date": "2018-08-02",
            "clothe": "jacket"
        },
        {
            "id": "0719",
            "date": "2018-08-01",
            "clothe": "sweater"
        },
        {
            "id": "0720",
            "date": "2018-07-31",
            "clothe": "hoodie"
        },
        {
            "id": "0721",
            "date": "2018-07-30",
            "clothe": "hoodie"
        },
        {
            "id": "0722",
            "date": "2018-07-29",
            "clothe": "raincoat"
        },
        {
            "id": "0723",
            "date": "2018-07-28",
            "clothe": "jumper"
        },
        {
            "id": "0724",
            "date": "2018-07-27",
            "clothe": "blazer"
        },
        {
            "id": "0725",
            "date": "2018-07-26",
            "clothe": "blazer"
        },
        {
            "id": "0726",
            "date": "2018-07-25",
            "clothe": "jumper"
        },
        {
            "id": "0727",
            "date": "2018-07-24",
            "clothe": "jumper"
        },
        {
            "id": "0728",
            "date": "2018-07-23",
            "clothe": "jumper"
        },
        {
            "id": "0729",
            "date": "2018-07-22",
            "clothe": "raincoat"
        },
        {
            "id": "0730",
            "date": "2018-07-21",
            "clothe": "jumper"
        },
        {
            "id": "0731",
            "date": "2018-07-20",
            "clothe": "blazer"
        },
        {
            "id": "0732",
            "date": "2018-07-19",
            "clothe": "sweater"
        },
        {
            "id": "0733",
            "date": "2018-07-18",
            "clothe": "jumper"
        },
        {
            "id": "0734",
            "date": "2018-07-17",
            "clothe": "sweater"
        },
        {
            "id": "0735",
            "date": "2018-07-16",
            "clothe": "sweater"
        },
        {
            "id": "0736",
            "date": "2018-07-15",
            "clothe": "blazer"
        },
        {
            "id": "0737",
            "date": "2018-07-14",
            "clothe": "jacket"
        },
        {
            "id": "0738",
            "date": "2018-07-13",
            "clothe": "jacket"
        },
        {
            "id": "0739",
            "date": "2018-07-12",
            "clothe": "hoodie"
        },
        {
            "id": "0740",
            "date": "2018-07-11",
            "clothe": "raincoat"
        },
        {
            "id": "0741",
            "date": "2018-07-10",
            "clothe": "raincoat"
        },
        {
            "id": "0742",
            "date": "2018-07-09",
            "clothe": "jumper"
        },
        {
            "id": "0743",
            "date": "2018-07-08",
            "clothe": "hoodie"
        },
        {
            "id": "0744",
            "date": "2018-07-07",
            "clothe": "jacket"
        },
        {
            "id": "0745",
            "date": "2018-07-06",
            "clothe": "sweater"
        },
        {
            "id": "0746",
            "date": "2018-07-05",
            "clothe": "sweater"
        },
        {
            "id": "0747",
            "date": "2018-07-04",
            "clothe": "jumper"
        },
        {
            "id": "0748",
            "date": "2018-07-03",
            "clothe": "sweater"
        },
        {
            "id": "0749",
            "date": "2018-07-02",
            "clothe": "hoodie"
        },
        {
            "id": "0750",
            "date": "2018-07-01",
            "clothe": "blazer"
        },
        {
            "id": "0751",
            "date": "2018-06-30",
            "clothe": "jacket"
        },
        {
            "id": "0752",
            "date": "2018-06-29",
            "clothe": "jumper"
        },
        {
            "id": "0753",
            "date": "2018-06-28",
            "clothe": "blazer"
        },
        {
            "id": "0754",
            "date": "2018-06-27",
            "clothe": "hoodie"
        },
        {
            "id": "0755",
            "date": "2018-06-26",
            "clothe": "jumper"
        },
        {
            "id": "0756",
            "date": "2018-06-25",
            "clothe": "blazer"
        },
        {
            "id": "0757",
            "date": "2018-06-24",
            "clothe": "raincoat"
        },
        {
            "id": "0758",
            "date": "2018-06-23",
            "clothe": "hoodie"
        },
        {
            "id": "0759",
            "date": "2018-06-22",
            "clothe": "jumper"
        },
        {
            "id": "0760",
            "date": "2018-06-21",
            "clothe": "jacket"
        },
        {
            "id": "0761",
            "date": "2018-06-20",
            "clothe": "jacket"
        },
        {
            "id": "0762",
            "date": "2018-06-19",
            "clothe": "jacket"
        },
        {
            "id": "0763",
            "date": "2018-06-18",
            "clothe": "hoodie"
        },
        {
            "id": "0764",
            "date": "2018-06-17",
            "clothe": "hoodie"
        },
        {
            "id": "0765",
            "date": "2018-06-16",
            "clothe": "hoodie"
        },
        {
            "id": "0766",
            "date": "2018-06-15",
            "clothe": "jacket"
        },
        {
            "id": "0767",
            "date": "2018-06-14",
            "clothe": "sweater"
        },
        {
            "id": "0768",
            "date": "2018-06-13",
            "clothe": "raincoat"
        },
        {
            "id": "0769",
            "date": "2018-06-12",
            "clothe": "sweater"
        },
        {
            "id": "0770",
            "date": "2018-06-11",
            "clothe": "jacket"
        },
        {
            "id": "0771",
            "date": "2018-06-10",
            "clothe": "raincoat"
        },
        {
            "id": "0772",
            "date": "2018-06-09",
            "clothe": "hoodie"
        },
        {
            "id": "0773",
            "date": "2018-06-08",
            "clothe": "sweater"
        },
        {
            "id": "0774",
            "date": "2018-06-07",
            "clothe": "blazer"
        },
        {
            "id": "0775",
            "date": "2018-06-06",
            "clothe": "blazer"
        },
        {
            "id": "0776",
            "date": "2018-06-05",
            "clothe": "jacket"
        },
        {
            "id": "0777",
            "date": "2018-06-04",
            "clothe": "jumper"
        },
        {
            "id": "0778",
            "date": "2018-06-03",
            "clothe": "jumper"
        },
        {
            "id": "0779",
            "date": "2018-06-02",
            "clothe": "hoodie"
        },
        {
            "id": "0780",
            "date": "2018-06-01",
            "clothe": "jacket"
        },
        {
            "id": "0781",
            "date": "2018-05-31",
            "clothe": "jacket"
        },
        {
            "id": "0782",
            "date": "2018-05-30",
            "clothe": "raincoat"
        },
        {
            "id": "0783",
            "date": "2018-05-29",
            "clothe": "hoodie"
        },
        {
            "id": "0784",
            "date": "2018-05-28",
            "clothe": "raincoat"
        },
        {
            "id": "0785",
            "date": "2018-05-27",
            "clothe": "blazer"
        },
        {
            "id": "0786",
            "date": "2018-05-26",
            "clothe": "raincoat"
        },
        {
            "id": "0787",
            "date": "2018-05-25",
            "clothe": "raincoat"
        },
        {
            "id": "0788",
            "date": "2018-05-24",
            "clothe": "blazer"
        },
        {
            "id": "0789",
            "date": "2018-05-23",
            "clothe": "blazer"
        },
        {
            "id": "0790",
            "date": "2018-05-22",
            "clothe": "jumper"
        },
        {
            "id": "0791",
            "date": "2018-05-21",
            "clothe": "raincoat"
        },
        {
            "id": "0792",
            "date": "2018-05-20",
            "clothe": "raincoat"
        },
        {
            "id": "0793",
            "date": "2018-05-19",
            "clothe": "sweater"
        },
        {
            "id": "0794",
            "date": "2018-05-18",
            "clothe": "hoodie"
        },
        {
            "id": "0795",
            "date": "2018-05-17",
            "clothe": "blazer"
        },
        {
            "id": "0796",
            "date": "2018-05-16",
            "clothe": "jacket"
        },
        {
            "id": "0797",
            "date": "2018-05-15",
            "clothe": "raincoat"
        },
        {
            "id": "0798",
            "date": "2018-05-14",
            "clothe": "jumper"
        },
        {
            "id": "0799",
            "date": "2018-05-13",
            "clothe": "jumper"
        },
        {
            "id": "0800",
            "date": "2018-05-12",
            "clothe": "hoodie"
        },
        {
            "id": "0801",
            "date": "2018-05-11",
            "clothe": "hoodie"
        },
        {
            "id": "0802",
            "date": "2018-05-10",
            "clothe": "sweater"
        },
        {
            "id": "0803",
            "date": "2018-05-09",
            "clothe": "jumper"
        },
        {
            "id": "0804",
            "date": "2018-05-08",
            "clothe": "jumper"
        },
        {
            "id": "0805",
            "date": "2018-05-07",
            "clothe": "jumper"
        },
        {
            "id": "0806",
            "date": "2018-05-06",
            "clothe": "jacket"
        },
        {
            "id": "0807",
            "date": "2018-05-05",
            "clothe": "sweater"
        },
        {
            "id": "0808",
            "date": "2018-05-04",
            "clothe": "blazer"
        },
        {
            "id": "0809",
            "date": "2018-05-03",
            "clothe": "hoodie"
        },
        {
            "id": "0810",
            "date": "2018-05-02",
            "clothe": "jumper"
        },
        {
            "id": "0811",
            "date": "2018-05-01",
            "clothe": "jacket"
        },
        {
            "id": "0812",
            "date": "2018-04-30",
            "clothe": "blazer"
        },
        {
            "id": "0813",
            "date": "2018-04-29",
            "clothe": "sweater"
        },
        {
            "id": "0814",
            "date": "2018-04-28",
            "clothe": "blazer"
        },
        {
            "id": "0815",
            "date": "2018-04-27",
            "clothe": "raincoat"
        },
        {
            "id": "0816",
            "date": "2018-04-26",
            "clothe": "jumper"
        },
        {
            "id": "0817",
            "date": "2018-04-25",
            "clothe": "blazer"
        },
        {
            "id": "0818",
            "date": "2018-04-24",
            "clothe": "raincoat"
        },
        {
            "id": "0819",
            "date": "2018-04-23",
            "clothe": "jacket"
        },
        {
            "id": "0820",
            "date": "2018-04-22",
            "clothe": "blazer"
        },
        {
            "id": "0821",
            "date": "2018-04-21",
            "clothe": "jumper"
        },
        {
            "id": "0822",
            "date": "2018-04-20",
            "clothe": "jumper"
        },
        {
            "id": "0823",
            "date": "2018-04-19",
            "clothe": "blazer"
        },
        {
            "id": "0824",
            "date": "2018-04-18",
            "clothe": "raincoat"
        },
        {
            "id": "0825",
            "date": "2018-04-17",
            "clothe": "raincoat"
        },
        {
            "id": "0826",
            "date": "2018-04-16",
            "clothe": "blazer"
        },
        {
            "id": "0827",
            "date": "2018-04-15",
            "clothe": "jumper"
        },
        {
            "id": "0828",
            "date": "2018-04-14",
            "clothe": "jacket"
        },
        {
            "id": "0829",
            "date": "2018-04-13",
            "clothe": "jacket"
        },
        {
            "id": "0830",
            "date": "2018-04-12",
            "clothe": "hoodie"
        },
        {
            "id": "0831",
            "date": "2018-04-11",
            "clothe": "blazer"
        },
        {
            "id": "0832",
            "date": "2018-04-10",
            "clothe": "raincoat"
        },
        {
            "id": "0833",
            "date": "2018-04-09",
            "clothe": "jacket"
        },
        {
            "id": "0834",
            "date": "2018-04-08",
            "clothe": "jacket"
        },
        {
            "id": "0835",
            "date": "2018-04-07",
            "clothe": "jumper"
        },
        {
            "id": "0836",
            "date": "2018-04-06",
            "clothe": "hoodie"
        },
        {
            "id": "0837",
            "date": "2018-04-05",
            "clothe": "sweater"
        },
        {
            "id": "0838",
            "date": "2018-04-04",
            "clothe": "blazer"
        },
        {
            "id": "0839",
            "date": "2018-04-03",
            "clothe": "hoodie"
        },
        {
            "id": "0840",
            "date": "2018-04-02",
            "clothe": "jacket"
        },
        {
            "id": "0841",
            "date": "2018-04-01",
            "clothe": "jumper"
        },
        {
            "id": "0842",
            "date": "2018-03-31",
            "clothe": "blazer"
        },
        {
            "id": "0843",
            "date": "2018-03-30",
            "clothe": "jacket"
        },
        {
            "id": "0844",
            "date": "2018-03-29",
            "clothe": "blazer"
        },
        {
            "id": "0845",
            "date": "2018-03-28",
            "clothe": "hoodie"
        },
        {
            "id": "0846",
            "date": "2018-03-27",
            "clothe": "jacket"
        },
        {
            "id": "0847",
            "date": "2018-03-26",
            "clothe": "jacket"
        },
        {
            "id": "0848",
            "date": "2018-03-25",
            "clothe": "hoodie"
        },
        {
            "id": "0849",
            "date": "2018-03-24",
            "clothe": "jumper"
        },
        {
            "id": "0850",
            "date": "2018-03-23",
            "clothe": "jumper"
        },
        {
            "id": "0851",
            "date": "2018-03-22",
            "clothe": "sweater"
        },
        {
            "id": "0852",
            "date": "2018-03-21",
            "clothe": "blazer"
        },
        {
            "id": "0853",
            "date": "2018-03-20",
            "clothe": "hoodie"
        },
        {
            "id": "0854",
            "date": "2018-03-19",
            "clothe": "sweater"
        },
        {
            "id": "0855",
            "date": "2018-03-18",
            "clothe": "blazer"
        },
        {
            "id": "0856",
            "date": "2018-03-17",
            "clothe": "blazer"
        },
        {
            "id": "0857",
            "date": "2018-03-16",
            "clothe": "jumper"
        },
        {
            "id": "0858",
            "date": "2018-03-15",
            "clothe": "jacket"
        },
        {
            "id": "0859",
            "date": "2018-03-14",
            "clothe": "jacket"
        },
        {
            "id": "0860",
            "date": "2018-03-13",
            "clothe": "hoodie"
        },
        {
            "id": "0861",
            "date": "2018-03-12",
            "clothe": "raincoat"
        },
        {
            "id": "0862",
            "date": "2018-03-11",
            "clothe": "jacket"
        },
        {
            "id": "0863",
            "date": "2018-03-10",
            "clothe": "hoodie"
        },
        {
            "id": "0864",
            "date": "2018-03-09",
            "clothe": "jumper"
        },
        {
            "id": "0865",
            "date": "2018-03-08",
            "clothe": "sweater"
        },
        {
            "id": "0866",
            "date": "2018-03-07",
            "clothe": "raincoat"
        },
        {
            "id": "0867",
            "date": "2018-03-06",
            "clothe": "raincoat"
        },
        {
            "id": "0868",
            "date": "2018-03-05",
            "clothe": "raincoat"
        },
        {
            "id": "0869",
            "date": "2018-03-04",
            "clothe": "raincoat"
        },
        {
            "id": "0870",
            "date": "2018-03-03",
            "clothe": "hoodie"
        },
        {
            "id": "0871",
            "date": "2018-03-02",
            "clothe": "jumper"
        },
        {
            "id": "0872",
            "date": "2018-03-01",
            "clothe": "jumper"
        },
        {
            "id": "0873",
            "date": "2018-02-28",
            "clothe": "hoodie"
        },
        {
            "id": "0874",
            "date": "2018-02-27",
            "clothe": "hoodie"
        },
        {
            "id": "0875",
            "date": "2018-02-26",
            "clothe": "jacket"
        },
        {
            "id": "0876",
            "date": "2018-02-25",
            "clothe": "sweater"
        },
        {
            "id": "0877",
            "date": "2018-02-24",
            "clothe": "raincoat"
        },
        {
            "id": "0878",
            "date": "2018-02-23",
            "clothe": "sweater"
        },
        {
            "id": "0879",
            "date": "2018-02-22",
            "clothe": "jacket"
        },
        {
            "id": "0880",
            "date": "2018-02-21",
            "clothe": "jumper"
        },
        {
            "id": "0881",
            "date": "2018-02-20",
            "clothe": "blazer"
        },
        {
            "id": "0882",
            "date": "2018-02-19",
            "clothe": "blazer"
        },
        {
            "id": "0883",
            "date": "2018-02-18",
            "clothe": "jacket"
        },
        {
            "id": "0884",
            "date": "2018-02-17",
            "clothe": "hoodie"
        },
        {
            "id": "0885",
            "date": "2018-02-16",
            "clothe": "sweater"
        },
        {
            "id": "0886",
            "date": "2018-02-15",
            "clothe": "jacket"
        },
        {
            "id": "0887",
            "date": "2018-02-14",
            "clothe": "hoodie"
        },
        {
            "id": "0888",
            "date": "2018-02-13",
            "clothe": "raincoat"
        },
        {
            "id": "0889",
            "date": "2018-02-12",
            "clothe": "sweater"
        },
        {
            "id": "0890",
            "date": "2018-02-11",
            "clothe": "blazer"
        },
        {
            "id": "0891",
            "date": "2018-02-10",
            "clothe": "blazer"
        },
        {
            "id": "0892",
            "date": "2018-02-09",
            "clothe": "sweater"
        },
        {
            "id": "0893",
            "date": "2018-02-08",
            "clothe": "raincoat"
        },
        {
            "id": "0894",
            "date": "2018-02-07",
            "clothe": "hoodie"
        },
        {
            "id": "0895",
            "date": "2018-02-06",
            "clothe": "blazer"
        },
        {
            "id": "0896",
            "date": "2018-02-05",
            "clothe": "sweater"
        },
        {
            "id": "0897",
            "date": "2018-02-04",
            "clothe": "blazer"
        },
        {
            "id": "0898",
            "date": "2018-02-03",
            "clothe": "raincoat"
        },
        {
            "id": "0899",
            "date": "2018-02-02",
            "clothe": "hoodie"
        },
        {
            "id": "0900",
            "date": "2018-02-01",
            "clothe": "blazer"
        },
        {
            "id": "0901",
            "date": "2018-01-31",
            "clothe": "blazer"
        },
        {
            "id": "0902",
            "date": "2018-01-30",
            "clothe": "jacket"
        },
        {
            "id": "0903",
            "date": "2018-01-29",
            "clothe": "jumper"
        },
        {
            "id": "0904",
            "date": "2018-01-28",
            "clothe": "sweater"
        },
        {
            "id": "0905",
            "date": "2018-01-27",
            "clothe": "blazer"
        },
        {
            "id": "0906",
            "date": "2018-01-26",
            "clothe": "hoodie"
        },
        {
            "id": "0907",
            "date": "2018-01-25",
            "clothe": "raincoat"
        },
        {
            "id": "0908",
            "date": "2018-01-24",
            "clothe": "blazer"
        },
        {
            "id": "0909",
            "date": "2018-01-23",
            "clothe": "jacket"
        },
        {
            "id": "0910",
            "date": "2018-01-22",
            "clothe": "jumper"
        },
        {
            "id": "0911",
            "date": "2018-01-21",
            "clothe": "jumper"
        },
        {
            "id": "0912",
            "date": "2018-01-20",
            "clothe": "jacket"
        },
        {
            "id": "0913",
            "date": "2018-01-19",
            "clothe": "jumper"
        },
        {
            "id": "0914",
            "date": "2018-01-18",
            "clothe": "hoodie"
        },
        {
            "id": "0915",
            "date": "2018-01-17",
            "clothe": "blazer"
        },
        {
            "id": "0916",
            "date": "2018-01-16",
            "clothe": "raincoat"
        },
        {
            "id": "0917",
            "date": "2018-01-15",
            "clothe": "raincoat"
        },
        {
            "id": "0918",
            "date": "2018-01-14",
            "clothe": "hoodie"
        },
        {
            "id": "0919",
            "date": "2018-01-13",
            "clothe": "jacket"
        },
        {
            "id": "0920",
            "date": "2018-01-12",
            "clothe": "sweater"
        },
        {
            "id": "0921",
            "date": "2018-01-11",
            "clothe": "hoodie"
        },
        {
            "id": "0922",
            "date": "2018-01-10",
            "clothe": "raincoat"
        },
        {
            "id": "0923",
            "date": "2018-01-09",
            "clothe": "jacket"
        },
        {
            "id": "0924",
            "date": "2018-01-08",
            "clothe": "blazer"
        },
        {
            "id": "0925",
            "date": "2018-01-07",
            "clothe": "blazer"
        },
        {
            "id": "0926",
            "date": "2018-01-06",
            "clothe": "jacket"
        },
        {
            "id": "0927",
            "date": "2018-01-05",
            "clothe": "sweater"
        },
        {
            "id": "0928",
            "date": "2018-01-04",
            "clothe": "hoodie"
        },
        {
            "id": "0929",
            "date": "2018-01-03",
            "clothe": "jacket"
        },
        {
            "id": "0930",
            "date": "2018-01-02",
            "clothe": "jumper"
        },
        {
            "id": "0931",
            "date": "2018-01-01",
            "clothe": "sweater"
        },
        {
            "id": "0932",
            "date": "2017-12-31",
            "clothe": "jacket"
        },
        {
            "id": "0933",
            "date": "2017-12-30",
            "clothe": "sweater"
        },
        {
            "id": "0934",
            "date": "2017-12-29",
            "clothe": "raincoat"
        },
        {
            "id": "0935",
            "date": "2017-12-28",
            "clothe": "hoodie"
        },
        {
            "id": "0936",
            "date": "2017-12-27",
            "clothe": "sweater"
        },
        {
            "id": "0937",
            "date": "2017-12-26",
            "clothe": "hoodie"
        },
        {
            "id": "0938",
            "date": "2017-12-25",
            "clothe": "blazer"
        },
        {
            "id": "0939",
            "date": "2017-12-24",
            "clothe": "sweater"
        },
        {
            "id": "0940",
            "date": "2017-12-23",
            "clothe": "raincoat"
        },
        {
            "id": "0941",
            "date": "2017-12-22",
            "clothe": "jumper"
        },
        {
            "id": "0942",
            "date": "2017-12-21",
            "clothe": "raincoat"
        },
        {
            "id": "0943",
            "date": "2017-12-20",
            "clothe": "jacket"
        },
        {
            "id": "0944",
            "date": "2017-12-19",
            "clothe": "hoodie"
        },
        {
            "id": "0945",
            "date": "2017-12-18",
            "clothe": "hoodie"
        },
        {
            "id": "0946",
            "date": "2017-12-17",
            "clothe": "jacket"
        },
        {
            "id": "0947",
            "date": "2017-12-16",
            "clothe": "blazer"
        },
        {
            "id": "0948",
            "date": "2017-12-15",
            "clothe": "hoodie"
        },
        {
            "id": "0949",
            "date": "2017-12-14",
            "clothe": "blazer"
        },
        {
            "id": "0950",
            "date": "2017-12-13",
            "clothe": "raincoat"
        },
        {
            "id": "0951",
            "date": "2017-12-12",
            "clothe": "jumper"
        },
        {
            "id": "0952",
            "date": "2017-12-11",
            "clothe": "hoodie"
        },
        {
            "id": "0953",
            "date": "2017-12-10",
            "clothe": "jacket"
        },
        {
            "id": "0954",
            "date": "2017-12-09",
            "clothe": "sweater"
        },
        {
            "id": "0955",
            "date": "2017-12-08",
            "clothe": "sweater"
        },
        {
            "id": "0956",
            "date": "2017-12-07",
            "clothe": "raincoat"
        },
        {
            "id": "0957",
            "date": "2017-12-06",
            "clothe": "blazer"
        },
        {
            "id": "0958",
            "date": "2017-12-05",
            "clothe": "raincoat"
        },
        {
            "id": "0959",
            "date": "2017-12-04",
            "clothe": "hoodie"
        },
        {
            "id": "0960",
            "date": "2017-12-03",
            "clothe": "jacket"
        },
        {
            "id": "0961",
            "date": "2017-12-02",
            "clothe": "jumper"
        },
        {
            "id": "0962",
            "date": "2017-12-01",
            "clothe": "jumper"
        },
        {
            "id": "0963",
            "date": "2017-11-30",
            "clothe": "jumper"
        },
        {
            "id": "0964",
            "date": "2017-11-29",
            "clothe": "raincoat"
        },
        {
            "id": "0965",
            "date": "2017-11-28",
            "clothe": "sweater"
        },
        {
            "id": "0966",
            "date": "2017-11-27",
            "clothe": "jacket"
        },
        {
            "id": "0967",
            "date": "2017-11-26",
            "clothe": "sweater"
        },
        {
            "id": "0968",
            "date": "2017-11-25",
            "clothe": "jacket"
        },
        {
            "id": "0969",
            "date": "2017-11-24",
            "clothe": "raincoat"
        },
        {
            "id": "0970",
            "date": "2017-11-23",
            "clothe": "jacket"
        },
        {
            "id": "0971",
            "date": "2017-11-22",
            "clothe": "jumper"
        },
        {
            "id": "0972",
            "date": "2017-11-21",
            "clothe": "jumper"
        },
        {
            "id": "0973",
            "date": "2017-11-20",
            "clothe": "jacket"
        },
        {
            "id": "0974",
            "date": "2017-11-19",
            "clothe": "sweater"
        },
        {
            "id": "0975",
            "date": "2017-11-18",
            "clothe": "jacket"
        },
        {
            "id": "0976",
            "date": "2017-11-17",
            "clothe": "blazer"
        },
        {
            "id": "0977",
            "date": "2017-11-16",
            "clothe": "blazer"
        },
        {
            "id": "0978",
            "date": "2017-11-15",
            "clothe": "raincoat"
        },
        {
            "id": "0979",
            "date": "2017-11-14",
            "clothe": "hoodie"
        },
        {
            "id": "0980",
            "date": "2017-11-13",
            "clothe": "blazer"
        },
        {
            "id": "0981",
            "date": "2017-11-12",
            "clothe": "jacket"
        },
        {
            "id": "0982",
            "date": "2017-11-11",
            "clothe": "raincoat"
        },
        {
            "id": "0983",
            "date": "2017-11-10",
            "clothe": "sweater"
        },
        {
            "id": "0984",
            "date": "2017-11-09",
            "clothe": "sweater"
        },
        {
            "id": "0985",
            "date": "2017-11-08",
            "clothe": "hoodie"
        },
        {
            "id": "0986",
            "date": "2017-11-07",
            "clothe": "raincoat"
        },
        {
            "id": "0987",
            "date": "2017-11-06",
            "clothe": "sweater"
        },
        {
            "id": "0988",
            "date": "2017-11-05",
            "clothe": "hoodie"
        },
        {
            "id": "0989",
            "date": "2017-11-04",
            "clothe": "jacket"
        },
        {
            "id": "0990",
            "date": "2017-11-03",
            "clothe": "jumper"
        },
        {
            "id": "0991",
            "date": "2017-11-02",
            "clothe": "blazer"
        },
        {
            "id": "0992",
            "date": "2017-11-01",
            "clothe": "sweater"
        },
        {
            "id": "0993",
            "date": "2017-10-31",
            "clothe": "hoodie"
        },
        {
            "id": "0994",
            "date": "2017-10-30",
            "clothe": "jumper"
        },
        {
            "id": "0995",
            "date": "2017-10-29",
            "clothe": "sweater"
        },
        {
            "id": "0996",
            "date": "2017-10-28",
            "clothe": "jacket"
        },
        {
            "id": "0997",
            "date": "2017-10-27",
            "clothe": "sweater"
        },
        {
            "id": "0998",
            "date": "2017-10-26",
            "clothe": "jacket"
        },
        {
            "id": "0999",
            "date": "2017-10-25",
            "clothe": "sweater"
        },
        {
            "id": "1000",
            "date": "2017-10-24",
            "clothe": "hoodie"
        }
    ]
}

a.payload.forEach(value => {
    switch (value.clothe) {
        case "jumper":
            jumper++;
            break;
        case "hoodie":
            hoodie++;
            break;
        case "jacket":
            jacket++;
            break;
        case "sweater":
            sweater++;
            break;
        case "raincoat":
            raincoat++;
            break;
        case "blazer":
            blazer++;
        default:
            break;
    }
    console.log(b, c, d, e, f, g, b + c + d + e + f + g);
})