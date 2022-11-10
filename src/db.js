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

import Nullchar_Icon from './images/Nullchar_Icon.png'


import Cryo_Sort from './images/Cryo_Sort.png'
import Dendro_Sort from './images/Dendro_Sort.png'
import Electro_Sort from './images/Electro_Sort.png'
import Geo_Sort from './images/Geo_Sort.png'
import Hydro_Sort from './images/Hydro_Sort.png'
import NoElement_Sort from './images/NoElement_Sort.png'
import Pyro_Sort from './images/Pyro_Sort.png'
import Anemo_Sort from './images/Anemo_Sort.png'

import Fatui_Sort from './images/Fatui_Sort.png'
import Hilichurl_Sort from './images/Hilichurl_Sort.png'
import Inazuma_Sort from './images/Inazuma_Sort.png'
import Kairagi_Sort from './images/Kairagi_Sort.png'
import Liyue_Sort from './images/Liyue_Sort.png'
import Mond_Sort from './images/Mond_Sort.png'
import Monster_Sort from './images/Monster_Sort.png'
import Sumeru_Sort from './images/Sumeru_Sort.png'


const db = {
    "chars": {
        "ganyu": {
            "card": Ganyu_Card,
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334000.webp',
            "icon": Ganyu_Icon,
            "element": 'cryo',
            "region": 'liyue'
        },
        "kaeya": {
            "card": Kaeya_Card,
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334001.webp',
            "icon": Kaeya_Icon,
            "element": 'cryo',
            "region": 'mond'
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
        "xingqiu": {
            "card": Xingqiu_Card,
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334004.webp',
            "icon": Xingqiu_Icon,
            "element": 'hydro',
            "region": 'liyue'
        },
        "mona": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330005.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334005.webp',
            "icon": Mona_Icon,
            "element": 'hydro',
            "region": 'mond'
        },
        "diluc": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330006.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334006.webp',
            "icon": Diluc_Icon,
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
        "bennett": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330008.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334008.webp',
            "icon": Bennett_Icon,
            "element": 'pyro',
            "region": 'mond'
        },
        "yoimiya": {
            "card": 'https://genshin.honeyhunterworld.com/img/i_n330010.webp',
            "card_selected": 'https://genshin.honeyhunterworld.com/img/i_n334010.webp',
            "icon": Yoimiya_Icon,
            "element": 'pyro',
            "region": 'inazuma'
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
    },

    "nullchar": {
        "icon": Nullchar_Icon
    },

    "elements": {
        'anemo': Anemo_Sort,
        'cryo': Cryo_Sort,
        'dendro':Dendro_Sort,
        'electro': Electro_Sort,
        'geo': Geo_Sort,
        'hydro': Hydro_Sort,
        'pyro': Pyro_Sort,
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
    }
}

export default db