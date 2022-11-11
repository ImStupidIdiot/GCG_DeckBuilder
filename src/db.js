import Ganyu_Card from './images/Ganyu_Card.webp'
import Ganyu_Icon from './images/Ganyu_Icon.png'
import Kaeya_Card from './images/Kaeya_Card.webp'
import Kaeya_Icon from './images/Kaeya_Icon.png'
import Chongyun_Card from './images/Chongyun_Card.webp'
import Chongyun_Icon from './images/Chongyun_Icon.png'
import Ayaka_Card from './images/Ayaka_Card.webp'
import Ayaka_Icon from './images/Ayaka_Icon.png'
import Xingqiu_Card from './images/Xingqiu_Card.webp'
import Xingqiu_Icon from './images/Xingqiu_Icon.png'
import Mona_Icon from './images/Mona_Icon.png'
import Diluc_Icon from './images/Diluc_Icon.png'
import Xiangling_Icon from './images/Xiangling_Icon.png'
import Bennett_Icon from './images/Bennett_Icon.png'
import Yoimiya_Icon from './images/Yoimiya_Icon.png'
import Fischl_Icon from './images/Fischl_Icon.png'
import Razor_Icon from './images/Razor_Icon.png'
import Keqing_Icon from './images/Keqing_Icon.png'
import Sucrose_Icon from './images/Sucrose_Icon.png'
import Jean_Icon from './images/Jean_Icon.png'
import Ningguang_Icon from './images/Ningguang_Icon.png'
import Noelle_Icon from './images/Noelle_Icon.png'
import Collei_Icon from './images/Collei_Icon.png'
import Oceanoid_Icon from './images/Oceanoid_Icon.png'
import Pyroagent_Icon from './images/Pyroagent_Icon.png'
import Maguu_Icon from './images/Maguu_Icon.png'
import Stonehidelawachurl_Icon from './images/Stonehidelawachurl_Icon.png'
import Diona_Icon from './images/Diona_Icon.png'
import Cyno_Icon from './images/Cyno_Icon.png'
import Barbara_Icon from './images/Barbara_Icon.png'
import Mirrormaiden_Icon from './images/Mirrormaiden_Icon.png'
import Terrorshroom_Icon from './images/Terrorshroom_Icon.png'

import Nullchar_Icon from './images/Nullchar_Icon.png'

import Anemo_Sort from './images/Anemo_Sort.png'
import Anemo_Sort_Activated from './images/Anemo_Sort_Activated.png'
import Cryo_Sort from './images/Cryo_Sort.png'
import Cryo_Sort_Activated from './images/Cryo_Sort_Activated.png'
import Dendro_Sort from './images/Dendro_Sort.png'
import Dendro_Sort_Activated from './images/Dendro_Sort_Activated.png'
import Electro_Sort from './images/Electro_Sort.png'
import Electro_Sort_Activated from './images/Electro_Sort_Activated.png'
import Geo_Sort from './images/Geo_Sort.png'
import Geo_Sort_Activated from './images/Geo_Sort_Activated.png'
import Hydro_Sort from './images/Hydro_Sort.png'
import Hydro_Sort_Activated from './images/Hydro_Sort_Activated.png'
import Pyro_Sort from './images/Pyro_Sort.png'
import Pyro_Sort_Activated from './images/Pyro_Sort_Activated.png'

import NoElement_Sort from './images/NoElement_Sort.png'

import Fatui_Sort from './images/Fatui_Sort.png'
import Hilichurl_Sort from './images/Hilichurl_Sort.png'
import Inazuma_Sort from './images/Inazuma_Sort.png'
import Kairagi_Sort from './images/Kairagi_Sort.png'
import Liyue_Sort from './images/Liyue_Sort.png'
import Mond_Sort from './images/Mond_Sort.png'
import Monster_Sort from './images/Monster_Sort.png'
import Sumeru_Sort from './images/Sumeru_Sort.png'

import Action_Toggle from './images/Action_Toggle.png'


import Action_Block_Test from './images/Action_Block_Test.png'


const db = {
    "chars": {
        "kaeya": {
            "card": Kaeya_Card,
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334001.webp',
            "icon": Kaeya_Icon,
            "element": 'cryo',
            "region": 'mond'
        },
        "diona": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330023.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334023.webp',
            "icon": Diona_Icon,
            "element": 'cryo',
            "region": 'mond'
        },
        "ganyu": {
            "card": Ganyu_Card,
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334000.webp',
            "icon": Ganyu_Icon,
            "element": 'cryo',
            "region": 'liyue'
        },
        "chongyun": {
            "card": Chongyun_Card,
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334002.webp',
            "icon": Chongyun_Icon,
            "element": 'cryo',
            "region": 'liyue'
        },
        "ayaka": {
            "card": Ayaka_Card,
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334003.webp',
            "icon": Ayaka_Icon,
            "element": 'cryo',
            "region": 'inazuma'
        },
        "mona": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330005.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334005.webp',
            "icon": Mona_Icon,
            "element": 'hydro',
            "region": 'mond'
        },
        "barbara": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330025.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334025.webp',
            "icon": Barbara_Icon,
            "element": 'hydro',
            "region": 'mond'
        },
        "xingqiu": {
            "card": Xingqiu_Card,
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334004.webp',
            "icon": Xingqiu_Icon,
            "element": 'hydro',
            "region": 'liyue'
        },
        "oceanoid": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330019.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334019.webp',
            "icon": Oceanoid_Icon,
            "element": 'hydro',
            "region": 'monster'
        },
        "mirrormaiden": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330026.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334026.webp',
            "icon": Mirrormaiden_Icon,
            "element": 'hydro',
            "region": 'fatui'
        },
        "diluc": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330006.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334006.webp',
            "icon": Diluc_Icon,
            "element": 'pyro',
            "region": 'mond'
        },
        "bennett": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330008.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334008.webp',
            "icon": Bennett_Icon,
            "element": 'pyro',
            "region": 'mond'
        },
        "xiangling": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330007.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334007.webp',
            "icon": Xiangling_Icon,
            "element": 'pyro',
            "region": 'liyue'
        },
        "yoimiya": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330010.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334010.webp',
            "icon": Yoimiya_Icon,
            "element": 'pyro',
            "region": 'inazuma'
        },
        "pyroagent": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330020.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334020.webp',
            "icon": Pyroagent_Icon,
            "element": 'pyro',
            "region": 'fatui'
        },
        "fischl": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330011.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334011.webp',
            "icon": Fischl_Icon,
            "element": 'electro',
            "region": 'mond'
        },
        "razor": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330012.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334012.webp',
            "icon": Razor_Icon,
            "element": 'electro',
            "region": 'mond'
        },
        "keqing": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330013.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334013.webp',
            "icon": Keqing_Icon,
            "element": 'electro',
            "region": 'liyue'
        },
        "cyno": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330024.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334024.webp',
            "icon": Cyno_Icon,
            "element": 'electro',
            "region": 'sumeru'
        },
        "sucrose": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330014.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334014.webp',
            "icon": Sucrose_Icon,
            "element": 'anemo',
            "region": 'mond'
        },
        "jean": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330015.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334015.webp',
            "icon": Jean_Icon,
            "element": 'anemo',
            "region": 'mond'
        },
        "maguu": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330021.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334021.webp',
            "icon": Maguu_Icon,
            "element": 'anemo',
            "region": 'monster'
        },
        "noelle": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330017.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334017.webp',
            "icon": Noelle_Icon,
            "element": 'geo',
            "region": 'mond'
        },
        "ningguang": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330016.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334016.webp',
            "icon": Ningguang_Icon,
            "element": 'geo',
            "region": 'liyue'
        },
        "stonehidelawachurl": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330022.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334022.webp',
            "icon": Stonehidelawachurl_Icon,
            "element": 'geo',
            "region": 'monster'
        },
        "collei": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330018.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334018.webp',
            "icon": Collei_Icon,
            "element": 'dendro',
            "region": 'sumeru'
        },
        "terrorshroom": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330027.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334027.webp',
            "icon": Terrorshroom_Icon,
            "element": 'dendro',
            "region": 'monster'
        },
    },

    "actions": {
        "magicguide": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n331000.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n335000.webp',
            "icon": 'https://genshin.honeyhunterworld.com/img/i_n331000.webp',
            "type": 'weapon',
            "cost": 2
        },
        "ravenbow": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n331003.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n335003.webp',
            "icon": 'https://genshin.honeyhunterworld.com/img/i_n331003.webp',
            "type": 'weapon',
            "cost": 2
        },
        "whiteirongs": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n331006.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n335006.webp',
            "icon": 'https://genshin.honeyhunterworld.com/img/i_n331006.webp',
            "type": 'weapon',
            "cost": 2
        },
        "sacfrags": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n331001.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n335001.webp',
            "icon": 'https://genshin.honeyhunterworld.com/img/i_n331001.webp',
            "type": 'weapon',
            "cost": 3
        },
        "sacbow": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n331004.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n335004.webp',
            "icon": 'https://genshin.honeyhunterworld.com/img/i_n331004.webp',
            "type": 'weapon',
            "cost": 3
        },
        "sacgs": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n331007.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n335007.webp',
            "icon": 'https://genshin.honeyhunterworld.com/img/i_n331007.webp',
            "type": 'weapon',
            "cost": 3
        },
        "skywardatlas": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n331002.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n335002.webp',
            "icon": 'https://genshin.honeyhunterworld.com/img/i_n331002.webp',
            "type": 'weapon',
            "cost": 3
        },
        "skywardharp": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n331005.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n335005.webp',
            "icon": 'https://genshin.honeyhunterworld.com/img/i_n331005.webp',
            "type": 'weapon',
            "cost": 3
        },
        "wgs": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n331008.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n335008.webp',
            "icon": 'https://genshin.honeyhunterworld.com/img/i_n331008.webp',
            "type": 'weapon',
            "cost": 3
        },
    },

    "nullchar": {
        "icon": Nullchar_Icon
    },

    "elements": {
        'anemo': Anemo_Sort,
        'anemo_activated': Anemo_Sort_Activated,
        'cryo': Cryo_Sort,
        'cryo_activated': Cryo_Sort_Activated,
        'dendro':Dendro_Sort,
        'dendro_activated': Dendro_Sort_Activated,
        'electro': Electro_Sort,
        'electro_activated': Electro_Sort_Activated,
        'geo': Geo_Sort,
        'geo_activated': Geo_Sort_Activated,
        'hydro': Hydro_Sort,
        'hydro_activated': Hydro_Sort_Activated,
        'pyro': Pyro_Sort,
        'pyro_activated': Pyro_Sort_Activated,
        'noelement': NoElement_Sort
    },

    "factions": {
        'fatui': Fatui_Sort,
        'hilichurl': Hilichurl_Sort,
        'inazuma': Inazuma_Sort,
        'kairagi': Kairagi_Sort,
        'liyue': Liyue_Sort,
        'mondstadt': Mond_Sort,
        'monster': Monster_Sort,
        'sumeru': Sumeru_Sort,
    },

    "misc": {
        'char_toggle': Anemo_Sort,
        "action_toggle": Anemo_Sort_Activated
    }
}

export default db