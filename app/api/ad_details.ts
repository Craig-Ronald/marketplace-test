import { ApiResponse } from "../types/apitypes";



export default function GetAdDetails(advertId: string): ApiResponse
{
        //mocked API call to return advert deata
        const jsonString = `{
	"error_code": 0,
	"error_text": "",
	"data": {
		"ID": ${advertId},
		"AdRef": "CS43707C7",
		"UserID": "123456",
		"Username": "testing",
		"UserEmail": "testing@test.com",
		"Type": "Touring Caravans",
		"TypeID": "1",
		"Category": "Conventionals",
		"CategoryID": "76",
		"SubCategory": "",
		"SubCategoryID": "0",
		"Country": "United Kingdom",
		"CountryCode": "GB",
		"Region": "North East",
		"County": "Humberside",
		"City": "Airmyn",
		"Locality": "",
		"PostalCode": "",
		"Title": "Coachman 2022 Laser 575 extra, 4 berth, (2021) Touring Caravan",
		"Description": "Luxury 2022 caravan. Island bed and end bathroom,\\r\\nlarge fridge, full cooker with extractor fan and microwave, wet central heating, onboard water tank, motor mover fitted. Body work and interior both Diamond brighted  from new, non smokers.\\r\\n",
		"DescriptionHtml": "<h2>Luxury 2022 caravan. Island bed and end bathroom,\\r\\n</h2><p>large fridge, full cooker with extractor fan and microwave, wet central heating, onboard water tank, motor mover fitted. Body work and interior both Diamond brighted from new, non smokers.\\r</p><p></p>",
		"Price": "2830000",
		"PriceOptions": "ONO",
		"PriceOriginal": "28.300",
		"PriceOriginalCents": "2830000",
		"PriceEuros": "28.300",
		"PriceCurrency": "&pound; 28,300",
		"Currency": "GBP",
		"StartOn": "2024-09-15 15:50:42",
		"EndOn": "2024-10-15 15:50:42",
		"LastEdited": "2024-09-15 15:52:29",
		"Phone": "0123456789",
		"Mobile": "",
		"Advertcode": "CS43707C7",
		"TrackbackUrl": "https://www.caravansforsale.co.uk/Conventional/coachman-2022-laser-575-extra-4-berth-2021-touring-caravan/1443761",
		"DataFields": [
			{
				"label": "Make",
				"key": "make_name",
				"value": "Coachman",
				"ftype": "1",
				"ValueID": "24",
				"ValueLabel": "",
				"ValueDisplay": "",
				"MainDetails": "1",
				"BottomDetails": "0"
			},
			{
				"label": "Berth",
				"key": "berth",
				"value": "4 berth",
				"ftype": "1",
				"ValueID": "4",
				"ValueLabel": "",
				"ValueDisplay": "",
				"MainDetails": "1",
				"BottomDetails": "0"
			},
			{
				"label": "Reg Year",
				"key": "year",
				"value": "2021",
				"ftype": "1",
				"ValueID": "31",
				"ValueLabel": "",
				"ValueDisplay": "",
				"MainDetails": "1",
				"BottomDetails": "0"
			},
			{
				"label": "Model",
				"key": "model_name",
				"value": "2022 Laser 575 extra",
				"ftype": "1",
				"ValueID": "0",
				"ValueLabel": "",
				"ValueDisplay": "",
				"MainDetails": "1",
				"BottomDetails": "0"
			},
			{
				"label": "Length",
				"key": "length",
				"value": "24’5”",
				"ftype": "1",
				"ValueID": 0,
				"ValueLabel": "",
				"ValueDisplay": "",
				"MainDetails": "1",
				"BottomDetails": "0"
			},
			{
				"label": "Width",
				"key": "width",
				"value": "8’",
				"ftype": "1",
				"ValueID": 0,
				"ValueLabel": "",
				"ValueDisplay": "",
				"MainDetails": "1",
				"BottomDetails": "0"
			},
			{
				"label": "Condition",
				"key": "newused",
				"value": "Used - Good condition",
				"ftype": "1",
				"ValueID": "2",
				"ValueLabel": "",
				"ValueDisplay": "",
				"MainDetails": "0",
				"BottomDetails": "1"
			},
			{
				"category": "",
				"label": "CRIS Registered",
				"key": "feature_CRIS-Registered",
				"value": "1",
				"ftype": "2",
				"MainDetails": "0",
				"BottomDetails": "1"
			}
		],
		"Photos": [
			{
				"Position": 1,
				"Hash": "",
				"PathBig": "https://imgal.caravansforsale.co.uk/img/adphotos/paa/761/1443761_-_photo_1_1726411842_big.jpg"
			},
			{
				"Position": 2,
				"Hash": "",
				"PathBig": "https://imgal.caravansforsale.co.uk/img/adphotos/paa/761/1443761_-_photo_2_1726411844_big.jpg"
			},
			{
				"Position": 3,
				"Hash": "",
				"PathBig": "https://imgal.caravansforsale.co.uk/img/adphotos/paa/761/1443761_-_photo_3_1726411844_big.jpg"
			},
			{
				"Position": 4,
				"Hash": "",
				"PathBig": "https://imgal.caravansforsale.co.uk/img/adphotos/paa/761/1443761_-_photo_4_1726411845_big.jpg"
			},
			{
				"Position": 5,
				"Hash": "",
				"PathBig": "https://imgal.caravansforsale.co.uk/img/adphotos/paa/761/1443761_-_photo_5_1726411846_big.jpg"
			},
			{
				"Position": 6,
				"Hash": "",
				"PathBig": "https://imgal.caravansforsale.co.uk/img/adphotos/paa/761/1443761_-_photo_6_1726411846_big.jpg"
			},
			{
				"Position": 7,
				"Hash": "",
				"PathBig": "https://imgal.caravansforsale.co.uk/img/adphotos/paa/761/1443761_-_photo_7_1726411847_big.jpg"
			},
			{
				"Position": 8,
				"Hash": "",
				"PathBig": "https://imgal.caravansforsale.co.uk/img/adphotos/paa/761/1443761_-_photo_8_1726411848_big.jpg"
			},
			{
				"Position": 9,
				"Hash": "",
				"PathBig": "https://imgal.caravansforsale.co.uk/img/adphotos/paa/761/1443761_-_photo_9_1726411849_big.jpg"
			},
			{
				"Position": 10,
				"Hash": "",
				"PathBig": "https://imgal.caravansforsale.co.uk/img/adphotos/paa/761/1443761_-_photo_10_1726411849_big.jpg"
			},
			{
				"Position": 11,
				"Hash": "",
				"PathBig": "https://imgal.caravansforsale.co.uk/img/adphotos/paa/761/1443761_-_photo_11_1726411850_big.jpg"
			},
			{
				"Position": 12,
				"Hash": "",
				"PathBig": "https://imgal.caravansforsale.co.uk/img/adphotos/paa/761/1443761_-_photo_12_1726411851_big.jpg"
			},
			{
				"Position": 13,
				"Hash": "",
				"PathBig": "https://imgal.caravansforsale.co.uk/img/adphotos/paa/761/1443761_-_photo_13_1726411851_big.jpg"
			}
		]
	}
}
        `;
        const result: ApiResponse = JSON.parse(jsonString);
        console.log(`ID: ${result.data.ID}`);
        return result;


}