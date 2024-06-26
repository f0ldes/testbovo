
/* Selector options and there types for employer form: */

//industry options:
export type IndustryOptionType = {
    value: string;
    label: string;
};

const industryOptions: IndustryOptionType[] = [
    { value: '1', label: 'Agrár- és élelmiszeripar' },
    { value: '2', label: 'Autóipar' },
    { value: '3', label: 'Energia- és közműipar' },
    { value: '4', label: 'Gyógyszer- és egészségipar' },
    { value: '5', label: 'Infrastruktúra' },
    { value: '6', label: 'Közlekedés és logisztika' },
    { value: '7', label: 'Ipari termékek' },
    { value: '8', label: 'Kiskereskedelmi és fogyasztói szektor' },
    { value: '9', label: 'Kormányzat' },
    { value: '10', label: 'Közszolgálat' },
    { value: '11', label: 'Magántulajdonban lévő vállalkozások' },
    { value: '12', label: 'Olaj- és gázipar' },
    { value: '13', label: 'Pénzügyi szolgáltatások' },
    { value: '14', label: 'Sport' },
    { value: '15', label: 'Technológia' },
    { value: '16', label: 'Média és távközlés' },
    { value: '17', label: 'Turizmus tanácsadás' }
];

//employee number options:
export type EmployeeNumberOptionsType = {
    value: string;
    label: string;
};

const numberOfEmployeeOptions: EmployeeNumberOptionsType[] = [
    { value: '<5', label: 'Kevesebb mint 5' },
    { value: '5-10', label: '5-10' },
    { value: '11-25', label: '11-25' },
    { value: '25<', label: 'Több mint 25' }
];


//country code options:
export type CountryCodeOptionsType = {
    value: string;
    label: string;
};

const countryCodeOptions: CountryCodeOptionsType[] = [
    { value: '93', label: 'Afganisztán +93' },
    { value: '355', label: 'Albánia +355' },
    { value: '213', label: 'Algéria +213' },
    { value: '1', label: 'Amerikai Egyesült Államok +1' },
    { value: '684', label: 'Amerikai Szamoa +684' },
    { value: '1340', label: 'Amerikai Virgin-szigetek +1340' },
    { value: '376', label: 'Andorra +376' },
    { value: '244', label: 'Angola +244' },
    { value: '1264', label: 'Anguilla +1264' },
    { value: '1268', label: 'Antigua és Barbuda +1268' },
    { value: '672', label: 'Antarktisz +672' },
    { value: '54', label: 'Argentína +54' },
    { value: '297', label: 'Aruba +297' },
    { value: '247', label: 'Ascension +247' },
    { value: '61', label: 'Ausztrália +61' },
    { value: '43', label: 'Ausztria +43' },
    { value: '994', label: 'Azerbajdzsán +994' },
    { value: '1242', label: 'Bahama-szigetek +1242' },
    { value: '973', label: 'Bahrein +973' },
    { value: '880', label: 'Banglades +880' },
    { value: '1246', label: 'Barbados +1246' },
    { value: '32', label: 'Belgium +32' },
    { value: '501', label: 'Belize +501' },
    { value: '229', label: 'Benin +229' },
    { value: '1441', label: 'Bermuda +1441' },
    { value: '975', label: 'Bhután +975' },
    { value: '245', label: 'Bissau-Guinea +245' },
    { value: '591', label: 'Bolívia +591' },
    { value: '387', label: 'Bosznia-Hercegovina +387' },
    { value: '267', label: 'Botswana +267' },
    { value: '55', label: 'Brazília +55' },
    { value: '1284', label: 'Brit Virgin-szigetek +1284' },
    { value: '673', label: 'Brunei +673' },
    { value: '359', label: 'Bulgária +359' },
    { value: '226', label: 'Burkina Faso +226' },
    { value: '257', label: 'Burundi +257' },
    { value: '56', label: 'Chile +56' },
    { value: '357', label: 'Ciprus +357' },
    { value: '61', label: 'Cocos-Keeling szigetek +61' },
    { value: '269', label: 'Comore-szigetek +269' },
    { value: '682', label: 'Cook-szigetek +682' },
    { value: '506', label: 'Costa Rica +506' },
    { value: '235', label: 'Csád +235' },
    { value: '420', label: 'Csehország +420' },
    { value: '45', label: 'Dánia +45' },
    { value: '243', label: 'Kongói Demokratikus Köztársaság +243' },
    { value: '1809', label: 'Dominikai Köztársaság +1809' },
    { value: '593', label: 'Ecuador +593' },
    { value: '20', label: 'Egyiptom +20' },
    { value: '503', label: 'Salvador +503' },
    { value: '291', label: 'Eritrea +291' },
    { value: '372', label: 'Észtország +372' },
    { value: '251', label: 'Etiópia +251' },
    { value: '500', label: 'Falkland-szigetek +500' },
    { value: '298', label: 'Feröer-szigetek +298' },
    { value: '679', label: 'Fidzsi-szigetek +679' },
    { value: '358', label: 'Finnország +358' },
    { value: '33', label: 'Franciaország +33' },
    { value: '596', label: 'Francia Antillák +596' },
    { value: '594', label: 'Francia Guyana +594' },
    { value: '689', label: 'Francia Polinézia +689' },
    { value: '241', label: 'Gabon +241' },
    { value: '220', label: 'Gambia +220' },
    { value: '995', label: 'Grúzia +995' },
    { value: '49', label: 'Németország +49' },
    { value: '233', label: 'Ghána +233' },
    { value: '350', label: 'Gibraltár +350' },
    { value: '30', label: 'Görögország +30' },
    { value: '1473', label: 'Grenada +1473' },
    { value: '299', label: 'Grönland +299' },
    { value: '590', label: 'Guadeloupe +590' },
    { value: '1671', label: 'Guam +1671' },
    { value: '502', label: 'Guatemala +502' },
    { value: '224', label: 'Guinea +224' },
    { value: '245', label: 'Guinea-Bissau +245' },
    { value: '592', label: 'Guyana +592' },
    { value: '509', label: 'Haiti +509' },
    { value: '504', label: 'Honduras +504' },
    { value: '852', label: 'Hong Kong +852' },
    { value: '36', label: 'Magyarország +36' },
    { value: '354', label: 'Izland +354' },
    { value: '91', label: 'India +91' },
    { value: '62', label: 'Indonézia +62' },
    { value: '98', label: 'Irán +98' },
    { value: '964', label: 'Irak +964' },
    { value: '353', label: 'Írország +353' },
    { value: '972', label: 'Izrael +972' },
    { value: '39', label: 'Olaszország +39' },
    { value: '225', label: 'Elefántcsontpart +225' },
    { value: '1876', label: 'Jamaica +1876' },
    { value: '81', label: 'Japán +81' },
    { value: '967', label: 'Jemen +967' },
    { value: '962', label: 'Jordánia +962' },
    { value: '1345', label: 'Kajmán-szigetek +1345' },
    { value: '855', label: 'Kambodzsa +855' },
    { value: '237', label: 'Kamerun +237' },
    { value: '1', label: 'Kanada +1' },
    { value: '61', label: 'Karácsony-sziget +61' },
    { value: '974', label: 'Katar +974' },
    { value: '7', label: 'Kazahsztán +7' },
    { value: '254', label: 'Kenya +254' },
    { value: '686', label: 'Kiribati +686' },
    { value: '965', label: 'Kuvait +965' },
    { value: '996', label: 'Kirgizisztán +996' },
    { value: '856', label: 'Laosz +856' },
    { value: '371', label: 'Lettország +371' },
    { value: '961', label: 'Libanon +961' },
    { value: '231', label: 'Libéria +231' },
    { value: '218', label: 'Líbia +218' },
    { value: '423', label: 'Liechtenstein +423' },
    { value: '370', label: 'Litvánia +370' },
    { value: '352', label: 'Luxemburg +352' },
    { value: '853', label: 'Makaó +853' },
    { value: '389', label: 'Észak-Macedónia +389' },
    { value: '261', label: 'Madagaszkár +261' },
    { value: '265', label: 'Malawi +265' },
    { value: '60', label: 'Malajzia +60' },
    { value: '960', label: 'Maldív-szigetek +960' },
    { value: '223', label: 'Mali +223' },
    { value: '356', label: 'Málta +356' },
    { value: '692', label: 'Marshall-szigetek +692' },
    { value: '596', label: 'Martinique +596' },
    { value: '222', label: 'Mauritánia +222' },
    { value: '230', label: 'Mauritius +230' },
    { value: '262', label: 'Réunion +262' },
    { value: '52', label: 'Mexikó +52' },
    { value: '691', label: 'Mikronézia +691' },
    { value: '373', label: 'Moldova +373' },
    { value: '377', label: 'Monaco +377' },
    { value: '976', label: 'Mongólia +976' },
    { value: '382', label: 'Montenegro +382' },
    { value: '1664', label: 'Montserrat +1664' },
    { value: '212', label: 'Marokkó +212' },
    { value: '258', label: 'Mozambik +258' },
    { value: '95', label: 'Mianmar +95' },
    { value: '264', label: 'Namíbia +264' },
    { value: '674', label: 'Nauru +674' },
    { value: '977', label: 'Nepál +977' },
    { value: '31', label: 'Hollandia +31' },
    { value: '599', label: 'Holland Antillák +599' },
    { value: '687', label: 'Új-Kaledónia +687' },
    { value: '64', label: 'Új-Zéland +64' },
    { value: '505', label: 'Nicaragua +505' },
    { value: '227', label: 'Niger +227' },
    { value: '234', label: 'Nigéria +234' },
    { value: '683', label: 'Niue +683' },
    { value: '672', label: 'Norfolk-sziget +672' },
    { value: '850', label: 'Északi-Korea +850' },
    { value: '1670', label: 'Északi-Mariana-szigetek +1670' },
    { value: '47', label: 'Norvégia +47' },
    { value: '968', label: 'Omán +968' },
    { value: '92', label: 'Pakisztán +92' },
    { value: '680', label: 'Palau +680' },
    { value: '970', label: 'Palesztin Hatóság +970' },
    { value: '507', label: 'Panama +507' },
    { value: '675', label: 'Pápua Új-Guinea +675' },
    { value: '595', label: 'Paraguay +595' },
    { value: '51', label: 'Peru +51' },
    { value: '63', label: 'Fülöp-szigetek +63' },
    { value: '48', label: 'Lengyelország +48' },
    { value: '351', label: 'Portugália +351' },
    { value: '1787', label: 'Puerto Rico +1787' },
    { value: '974', label: 'Katar +974' },
    { value: '262', label: 'Réunion +262' },
    { value: '40', label: 'Románia +40' },
    { value: '7', label: 'Oroszország +7' },
    { value: '250', label: 'Ruanda +250' },
    { value: '290', label: 'Saint Helena +290' },
    { value: '1869', label: 'Saint Kitts és Nevis +1869' },
    { value: '1758', label: 'Saint Lucia +1758' },
    { value: '508', label: 'Saint Pierre és Miquelon +508' },
    { value: '1784', label: 'Saint Vincent és Grenadines +1784' },
    { value: '685', label: 'Szamoa +685' },
    { value: '378', label: 'San Marino +378' },
    { value: '239', label: 'São Tomé és Príncipe +239' },
    { value: '966', label: 'Szaúd-Arábia +966' },
    { value: '221', label: 'Szenegál +221' },
    { value: '381', label: 'Szerbia +381' },
    { value: '248', label: 'Seychelle-szigetek +248' },
    { value: '232', label: 'Sierra Leone +232' },
    { value: '65', label: 'Szingapúr +65' },
    { value: '421', label: 'Szlovákia +421' },
    { value: '386', label: 'Szlovénia +386' },
    { value: '677', label: 'Salamon-szigetek +677' },
    { value: '252', label: 'Szomália +252' },
    { value: '27', label: 'Dél-Afrika +27' },
    { value: '500', label: 'Dél-Georgia és a Déli-Sandwich-szigetek +500' },
    { value: '82', label: 'Dél-Korea +82' },
    { value: '211', label: 'Dél-Szudán +211' },
    { value: '34', label: 'Spanyolország +34' },
    { value: '94', label: 'Srí Lanka +94' },
    { value: '249', label: 'Szudán +249' },
    { value: '597', label: 'Suriname +597' },
    { value: '268', label: 'Szváziföld +268' },
    { value: '46', label: 'Svédország +46' },
    { value: '41', label: 'Svájc +41' },
    { value: '963', label: 'Szíria +963' },
    { value: '886', label: 'Tajvan +886' },
    { value: '992', label: 'Tádzsikisztán +992' },
    { value: '255', label: 'Tanzánia +255' },
    { value: '66', label: 'Thaiföld +66' },
    { value: '670', label: 'Kelet-Timor +670' },
    { value: '228', label: 'Togo +228' },
    { value: '690', label: 'Tokelau +690' },
    { value: '676', label: 'Tonga +676' },
    { value: '1868', label: 'Trinidad és Tobago +1868' },
    { value: '216', label: 'Tunézia +216' },
    { value: '90', label: 'Törökország +90' },
    { value: '993', label: 'Türkmenisztán +993' },
    { value: '1649', label: 'Turks- és Caicos-szigetek +1649' },
    { value: '688', label: 'Tuvalu +688' },
    { value: '256', label: 'Uganda +256' },
    { value: '380', label: 'Ukrajna +380' },
    { value: '971', label: 'Egyesült Arab Emirátusok +971' },
    { value: '44', label: 'Egyesült Királyság +44' },
    { value: '598', label: 'Uruguay +598' },
    { value: '998', label: 'Üzbegisztán +998' },
    { value: '678', label: 'Vanuatu +678' },
    { value: '39', label: 'Vatikán +39' },
    { value: '58', label: 'Venezuela +58' },
    { value: '84', label: 'Vietnám +84' },
    { value: '1340', label: 'Virgin-szigetek +1340' },
    { value: '681', label: 'Wallis és Futuna +681' },
    { value: '967', label: 'Jemen +967' },
    { value: '260', label: 'Zambia +260' },
    { value: '263', label: 'Zimbabwe +263' }
]

export type ContactPersonPositionsType = {
    value: string;
    label: string;
}

const contactPersonOptions: ContactPersonPositionsType[] = [
    { value: '1', label: 'Tulajdonos' },
    { value: '2', label: 'Cégvezető' },
    { value: '3', label: 'Gazdasági vezető' },
    { value: '4', label: 'Egyéb vezető' },
    { value: '5', label: 'HR vezető' },
    { value: '6', label: 'HR munkatárs' }
]

export {
    industryOptions,
    numberOfEmployeeOptions,
    countryCodeOptions, 
    contactPersonOptions
};