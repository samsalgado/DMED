import React, { useState } from "react";
import '../App.css';
import Description from "../info/description";
import Plants from "./Plants";
const Apothecary = () => {
    const [columns, setColumns] = useState(2); // Optional state for dynamic column count
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [error, setError] = useState(null); // Track potential error
  
    //Price: BTC
    //Medical Rating: 
    //Source:
  const [plant, setPlants] = useState(
    [
        {
            id:1,
            image: Plants.abiesbalsema,
            name: 'Abies balsamea',
            price: 0.00019,
            medrating: 5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Abies+balsamea            '
        },
        {
            id:2,
            image:Plants.rhusglabra,
            name: 'Rhus Glabra',
            price: 0.000734,
            medrating:3,
            source: ' https://pfaf.org/user/plant.aspx?LatinName=Rhus+glabra'
        },
        {
            id:3,
            image:Plants.sweetacacia,
            name:'Acacia farnesiana',
            price:0.0002320248,
            medrating:1,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Paeonia+mascula            '
        },
        {
            id:4,
            image:Plants.blackwood,
            name:'Blackwood',
            price:0.0001320248,
            medrating:1,
            source:'                 https://pfaf.org/user/Plant.aspx?LatinName=Acacia+melanoxylon"            '
        },
        {
            id:5,
            image:Plants.muskmilfoil,
            name:'Achillea millefolium',
            price:0.000284320248,
            medrating:4,
            source:'                          https://pfaf.org/user/plant.aspx?LatinName=Achillea+millefolium            '
        },
        {
            id:6,
            image:Plants.californiayarrow,
            name: 'Achillea erba-rotta moschata',
            price:0.0000014,
            medrating:2,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Achillea+erba-rotta+moschata#google_vignette'
        },
        {
            id:7,
            image:Plants.californianettle,
            name:'Urtica dioica',
            price:0.00018111950024,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Urtica+dioica'
        },
        {
            id:8,
            image:Plants.toothacheplant,
            name:'Acmella oleracea',
            price:0.000211119500248,
            medrating:3,
            source:'                       https://pfaf.org/user/Plant.aspx?LatinName=Acmella+oleracea            '
        },
        {
            id:9,
            image:Plants.sweetflag,
            name:'Acorus calmus',
            price:0.0003320248,
            medrating:4,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Acorus+calamus'
        },
        {
            id:10,
            image:Plants.horsechesnut,
            name:'Aesculus hippocastanum',
            price:0.000351119500248,
            medrating:4,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Aesculus+hippocastanum'
        },
        {
            id:11,
            image:Plants.whitesnakeroot,
            name:'Ageratina altissima',
            price: 0.000264320248,
            medrating:2,
            source:'    https://pfaf.org/user/Plant.aspx?LatinName=Ageratina+altissima'
        },
        {
            id:12,
            image:Plants.giantelephantear,
            name:'Alocasia macrorrhizo',
            price: 0.000184320248,
            medrating:2,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Alocasia_macrorrhizos'

        },
        {
            id:13,
            image:Plants.shortawnfoxtail,
            name:'Alopecurus aequalis',
            price:0.000012314,
            medrating:1,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Alopecurus+aequalis'
        },
        {
            id:14,
            image:Plants.commonmarshmallow,
            name:'Althaea officinalis',
            price:0.000294320248,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Althaea+officinalis'

        },
        {
            id:15,
            image:Plants.bishopsweed,
            name:'Ammi visnaga',
            price: 0.0007211119500248,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Ammi%20visnaga'
            
        },
        {
            id:16,
            image:Plants.blackpoplar,
            name:'Populus nigra',
            price:0.000036500248,
            medrating:3,
            source:'https://pfaf.org/User/Plant.aspx?LatinName=Populus+nigra'
        },
      
        {
            id:18,
            image:Plants.commonbugloss,
            name:'Anchusa officinalis',
            price:0.000081992119500248,
            medrating:2,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Anchusa+officinalis'
        },
        {
            id:19,
            image:Plants.greenchireta,
            name:'Andrographis paniculata',
            price:0.00038119500248,
            medrating:4,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Andrographis+paniculata'
        },
        {
            id:20,
            image:Plants.bigbluestem,
            name:'Andropogon gerardii',
            price: 0.0001020248,
            medrating:1,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Andropogon+gerardii'

        },
        {
            id:21,
            image:Plants.blacktupello,
            name:'Nyssa sylvatica',
            price:0.00011119500248,
            medrating:1,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Nyssa+sylvatica'

        },
        {
            id:22,
            image:Plants.indianbarberry,
            name:'Berberis aristata',
            price:0.0002184320248,
            medrating:3,
            source:'https://pfaf.org/user/plant.aspx?LatinName=Berberis+aristata'

        },
        {
            id:23,
            image:Plants.angelicaanomala,
            name:'Angelica anomala',
            price:0.0002987429,
            medrating:2,
            source:' https://pfaf.org/user/Plant.aspx?LatinName=Angelica+anomala'

        },
        {
            id:24,
            image:Plants.chineseangelica,
            name:'Angelica sinensis',
            price: 0.0004184320248,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Angelica+sinensis'

        },
        {
            id:25,
            image:Plants.thalecross,
            name:'Arabidopsis thaliana',
            price:0.0001920248,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Arabidopsis+thaliana'
        },
        {
            id:26,
            image:Plants.bearberry,
            name:'Arctostaphylos uva-ursi',
            price:0.0007211119500248,
            medrating:4,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Arctostaphylos+uva-ursi'
        },
        {
            id:27,
            image:Plants.thymesandword,
            name:'Arenaria serpyllifolia',
            price:0.00023426101992119500248,
            medrating:2,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Arenaria+serpyllifolia'
        },
        {
            id:28,
            image:Plants.shatavari,
            name:'Asparagus racemosus',
            price:0.000371920248,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Asparagus+racemosus'
        },
        {
            id:29,
            image:Plants.herbofgrace,
            name:'Bacopa monnieri',
            price:0.000172321920248,
            medrating:4,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Bacopa+monnieri'

        },
        {
            id:30,
            image:Plants.banksiaattenuata,
            name:'banksia attenuata',
            price:0.000123421261019921195002480,
            medrating:0,
            source:' https://www.friendsofqueensparkbushland.org.au/banksia-attenuata/#:~:text=Banksia%20attenuataCommon%20name%3A%20Candle%20Banksia&text=Aboriginal%20name%3A%20Piara.,and%20as%20a%20refreshing%20drink.'
        },
        {
            id:31,
            image:Plants.batflower,
            name:'Batflower',
            price: 0.0000194320248,
            medrating:0,
            source:' https://www.guide-to-houseplants.com/bat-flower.html'
        },
        {
            id:32,
            image:Plants.orchid,
            name:'Orchid',
            price:0.0000194320248,
            medrating:2,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Bauhinia+purpurea'
        },
        {
            id:33,
            image:Plants.beggarsticks,
            name:'Bidens pilosa',
            price:0.0009832742,
            medrating:2,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Bauhinia+purpurea'
        },
        {
            id:34,
            image:Plants.potmarigold,
            name:'Calendula Officinalis',
            price:0.0001594320248,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Calendula+officinalis'

        },
        {
            id:35,
            image:Plants.callunavulgaris,
            name:'Calluna vulgaris',
            price:0.000091094320248,
            medrating:2,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Calluna+vulgaris'
        },
        {
            id:36,
            image:Plants.caper,
            name:'Capparis Spinosa',
            price:0.000091094320248,
            medrating:3,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Capparis+spinosa'
        },
        {
            id:37,
            image:Plants.goldenchaintree,
            name:'Cassia fistula',
            price:0.00073594320248,
            medrating:2,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Cassia+fistula'
        },
        {
            id:38,
            image:Plants.trumpettree,
            name:'Cecropia peltata',
            price: 0.0000943594320248,
            medrating:3,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Cecropia+peltata'
        },
        {
            id:39,
            image:Plants.cornflower,
            name:'Centaurea cyanus',
            price:0.0001119500248,
            medrating:2,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Centaurea+cyanus'
        },
        {
            id:40,
            image:Plants.spadeleaf,
            name:'Centella asiatica',
            price:0.00023428423,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Centella+asiatica'
        },
        {
            id:41,
            image:Plants.fieldmouseear,
            name:'Cerastium arvense',
            price:0.0000943594320248,
            medrating:1,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Cerastium+arvense'
        },
        {
            id:42,
            image:Plants.stjohnsbread,
            name:'Ceratonia Siliqua',
            price: 0.0000943594320248,
            medrating:2,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Ceratonia+siliqua'
        },
        {
            id:43,
            image:Plants.broom,
            name:'Cytisus scoparius',
            price:0.000171920248,
            medrating:3,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Cytisus+scoparius'
        },
        {
            id:44,
            image:Plants.oakleafdatura,
            name:'Datura quercifolia',
            price:0.0000943594320248,
            medrating:3,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Datura+quercifolia'
        },
        {
            id:45,
            image:Plants.chineseyam,
            name:'Dioscorea batatas',
            price:0.000521119500248,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Dioscorea+batatas'
        },
        {
            id:46,
            image:Plants.Enterolobiumcyclocarpum,
            name:'Enterolobium cyclocarpum',
            price:0.0000943594320248,
            medrating:3,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Enterolobium+cyclocarpum'
        },
        {
            id:47,
            image:Plants.yellowgentian,
            name:'Yellow gentian',
            price:0.000485900248,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Gentiana%20lutea'
        },
        {
            id:48,
            image:Plants.sweetteavine,
            name:'Sweet Tea Vine',
            price:0.00042943594320248,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Gentiana%20lutea'
        },
        {
            id:49,
            image:Plants.pinktrumpettree,
            name:'Handroanthus impetiginosus',
            price:0.000265900248,
            medrating:4,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Handroanthus+impetiginosus'
        },
        {
            id:50,
            image:Plants.seabuckthorn,
            name:'Hippophae Rhamnoides',
            price: 0.000565900248,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Hippophae+rhamnoides'
        },
        {
            id:51,
            image:Plants.hop,
            name:'Humulus lupulus',
            price:0.000165900248,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Humulus+lupulus'

        },
        {
            id:52,
            image:Plants.rockycandytuft,
            name:'Iberis amara',
            price:0.000484320248,
            medrating:2,
            source:' https://pfaf.org/User/Plant.aspx?LatinName=Iberis+amara'
        },
        {
            id:53,
            image:Plants.Juniperuscommunis,
            name:'Juniperus communis',
            price:0.000284320248,
            medrating:0,
            source:' https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4897106/'
        },
        {
            id:54,
            image:Plants.Kalmiapolifolia,
            name:'Kalmia polifolia',
            price:0.0001119500248,
            medrating:2,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Kalmia+polifolia'
        },
        {
            id:55,
            image:Plants.truelaurel,
            name:'True laurel',
            price:0.00042842,
            medrating:3,
            source:'https://pfaf.org/user/plant.aspx?latinname=laurus'
        },
        {
            id:56,
            image:Plants.flax,
            name:'Linum usitatissimum',
            price:0.000324123193,
            medrating:2,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Linum+usitatissimum'
        },
        {
            id:57,
            image:Plants.teatree,
            name:'Melaleuca alternifolia',
            price:0.000307200248,
            medrating:5,
            source:' https://pfaf.org/USER/Plant.aspx?LatinName=Melaleuca+alternifolia'
        },
        {
            id:58,
            image:Plants.yellowalfala,
            name:'Medicago sativa',
            price:0.000123421261019921195002480,
            medrating:3,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Medicago+sativa'
        },
        {
            id:59,
            image:Plants.sensitiveplant,
            name:'Mimosa pudica',
            price:0.0002312312,
            medrating:2,
            source:' https://pfaf.org/User/Plant.aspx?LatinName=Mimosa+pudica'
        },
        {
            id:60,
            image:Plants.marvelofperu,
            name:'Mirabilis jalapa',
            price:0.000342341,
            medrating:0,
            source:'http://www.conabio.gob.mx/malezasdemexico/asteraceae/montanoa-tomentosa/fichas/ficha.htm#:~:text=Este%20arbusto%20es%20com%C3%BAn%20en,su%20uso%20es%20de%20cuidado'
        },
        {
            id:61,
            image:Plants.Monotropauniflora,
            name:'Monotropa uniflora',
            price:0.000031311412,
            medrating:3,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Monotropa+uniflora'
        },
        {
            id:62,
            image:Plants.montanoa,
            name:'Montanoa',
            price:0.000031311412,
            medrating:0,
            source:'http://www.conabio.gob.mx/malezasdemexico/asteraceae/montanoa-tomentosa/fichas/ficha.htm#:~:text=Este%20arbusto%20es%20com%C3%BAn%20en,su%20uso%20es%20de%20cuidado'
        },
        {
            id:63,
            image:Plants.waxmyrtle,
            name:'Myrica communis',
            price:0.0021119500248,
            medrating:3,
            source:'https://pfaf.org/user/plant.aspx?LatinName=Myrica+cerifera'
        },
        {
            id:64,
            image:Plants.myrtle,
            name:'Myrtus communis',
            price:0.0002312324,
            medrating:3,
            source:'https://pfaf.org/User/Plant.aspx?LatinName=Myrtus+communis'
        },
        {
            id:65,
            image:Plants.rosebay,
            name:'Rosebay',
            price:0.000442634101992119500248,
            medrating:2,
            source:' https://pfaf.org/user/Plant.aspx?LatinName=Nerium+oleander'
        },
        {
            id:66,
            image:Plants.nigellaicarica,
            name:'Nigella icarica',
            price:0.0002131413,
            medrating:0,
            source: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8107825/'

        },
        {
            id:67,
            image:Plants.beeorchid,
            name:'Ophyrs apifera',
            price:0.00011119500248,
            medrating:2,
            source:'   https://pfaf.org/user/Plant.aspx?LatinName=Oxalis+grandis'
        },
        {
            id:68,
            image:Plants.greatyellowwoodsorrel,
            name:'Oxalis grandis',
            price:0.000012342421,
            medrating:1,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Oxalis+grandis'
        },
        {
            id:69,
            image:Plants.paeoniamascula,
            name:'Paeonia mascula',
            price:0.0001119500248,
            medrating:1,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Paeonia+mascula'
        },
        {
            id:70,
            image:Plants.maypops,
            name:'Passiflora incarnata',
            price:0.00022342481,
            medrating:3,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Passiflora+incarnata'
        },
        {
            id:71,
            image:Plants.Pinushalepensis,
            name:'Pinus halepensis',
            price:0.0000261500248,
            medrating:2,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Pinus+halepensis'
        },
        {
            id:72,
            image:Plants.dogrose,
            name:'Rosa canina',
            price:0.000489500248,
            medrating:3,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Rosa+canina'
        },
        {
            id:73,
            image:Plants.mastictree,
            name:'Pistacia lentiscus',
            price:0.000012342421,
            medrating:3,
            source:' https://pfaf.org/user/Plant.aspx?LatinName=Pistacia+lentiscus'
        },
        {
            id:74,
            image:Plants.plumeria,
            name:'Plumeria',
            price:0.0004652294,
            medrating:4,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=plumeria'
        },
        {
            id:75,
            image:Plants.selfheal,
            name:'Prunella vulgaris',
            price:0.00026500248,
            medrating:3,
            source:' https://pfaf.org/user/plant.aspx?LatinName=Prunella+vulgaris'

        },
        {
            id:76,
            image:Plants.kudzuvine,
            name:'Pueraria montana lobata',
            price:0.00036500248,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Pueraria+montana+lobata'
        },
        {
            id:77,
            image:Plants.corkoak,
            name:'Quercus suber',
            price:0.0002500248,
            medrating:2,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Quercus+suber'
        },
        {
            id:78,
            image:Plants.Rheumpalmatumtanguticum,
            name:'Rheum palmatum tanguticum',
            price:0.00384273,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Rheum+palmatum+tanguticum'
        },
        {
            id:79,
            image:Plants.westernwildrose,
            name:'Rosa woodsii',
            price:0.00011234587,
            medrating:2,
            source:' https://pfaf.org/User/Plant.aspx?LatinName=Rosa+woodsii'
        },
        {
            id:80,
            image:Plants.rosemary,
            name:'Rosemarinus',
            price:0.00074324245,
            medrating:3,
            source:'https://pfaf.org/user/plant.aspx?latinname=Rosmarinus+officinalis'
        },
        {
            id:81,
            image:Plants.curleddock,
            name:'Rumex crispus',
            price:0.00004348520834,
            medrating:3,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Rumex+crispus'
        },
        {
            id:82,
            image:Plants.magnoliavine,
            name:'Schisandra chinensis',
            price:0.000926101992119500248,
            medrating:5,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Schisandra+sphenanthera'
        },
        {
            id:83,
            image:Plants.ringwormbush,
            name:'Senna alata',
            price:0.000126101992119500248,
            medrating:4,
            source:' https://pfaf.org/user/Plant.aspx?LatinName=Senna+alata'
        },
        {
            id:84,
            image:Plants.sarsaparilla,
            name:'Rafflesia',
            price:0.000465002873,
            medrating:4,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Rauvolfia+serpentina'
        },
        {
            id:85,
            image:Plants.reedmace,
            name:'Typha latifolia',
            price:0.000081992119500248,
            medrating:3,
            source: 'https://pfaf.org/user/plant.aspx?LatinName=Typha+latifolia         ' 
        },
        {
            id:86,
            image:Plants.masticthyme,
            name:'Thymus mastichina',
            price:0.00001141992119500248,
            medrating:3,
            source:'                            https://pfaf.org/User/Plant.aspx?LatinName=Thymus+mastichina            '
        },
        {
            id:87,
            image:Plants.redclover,
            name:'Trifolium pratense',
            price:0.00001181992119500248,
            medrating:3,
            source:' https://pfaf.org/user/Plant.aspx?LatinName=Trifolium+pratense'

        },
        {
            id:88,
            image:Plants.tuliptree,
            name:'Thespesia populneoides',
            price:0.000211119500248,
            medrating:3,
            source:'https://pfaf.org/user/Plant.aspx?LatinName=Thespesia+populneoides            '
        },
        {
            id:89,
            image:Plants.soursop,
            name:'Soursop'
        },
        {
            id:90,
            image:Plants.valerian,
            name:'Valeriana officinalis',
            price:0.000061920248,
            medrating:3,
            source:' https://pfaf.org/user/Plant.aspx?LatinName=Valeriana+officinalis'
        },
        {
            id:91,
            image:Plants.verbascumikaricum,
            name:'Verbascum ikaricum.png',
            price:0.000071920248,
            medrating:0,
            source:'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:811159-1'
        },
        {
            id:92,
            image:Plants.greatmullein,
            name:'Verbascum thapsus',
            price:0.0001920248,
            medrating:3,
            source:'   https://pfaf.org/user/plant.aspx?LatinName=Verbascum+thapsus'
        },
        {
            id:93,
            image:Plants.lesserperiwinkle,
            name:'Typha latifolia',
            price:0.0001920248,
            medrating:3,
            source:'https://pfaf.org/user/plant.aspx?latinname=Vinca+minor'
        },
        {
            id:95,
            image:Plants.bixaorellana,
            name:'Bixa orellana',
            price:0.0003184320248,
            medrating:3,
            source:'https://pfaf.org/User/Plant.aspx?LatinName=Bixa+orellana'
        }
    ]
  );
  // Function to handle displaying plants in rows (3 columns)
  return (
    
<div className="plant-container">
            
                {plant.map((val, key) => {
                  return (
                    <div key={key} className="contain">
                    <img className='pic1' src={val.image} alt="" />
                    <h3>{val.price} BTC</h3>
                    <h3>Medical Rating: {val.medrating}</h3>
                    <h3>
                    <a href={val.source} target="_blank" rel="noopener noreferrer">Source</a>
                    </h3>
                    <Description />
                    </div>
                  )
                })}

                
    </div>
  );
}
export default Apothecary;
