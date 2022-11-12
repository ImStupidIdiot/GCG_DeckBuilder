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
        "undividedheart": {
            "name": "Undivided Heart",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330500.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334500.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330500_gcg_high_resolution.webp",
            "cost": 5
        },
        "coldbloodedstrike": {
            "name": "Cold-Blooded Strike",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330501.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334501.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330501_gcg_high_resolution.webp",
            "cost": 4
        },
        "steadybreathing": {
            "name": "Steady Breathing",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330502.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334502.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330502_gcg_high_resolution.webp",
            "cost": 4
        },
        "kantensenmyoublessing": {
            "name": "Kanten Senmyou Blessing",
            "tags": ['modify', 'talent'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330503.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334503.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330503_gcg_high_resolution.webp",
            "cost": 5
        },
        "thescentremained": {
            "name": "The Scent Remained",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330504.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334504.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330504_gcg_high_resolution.webp",
            "cost": 4
        },
        "prophecyofsubmersion": {
            "name": "Prophecy of Submersion",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330505.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334505.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330505_gcg_high_resolution.webp",
            "cost": 5
        },
        "flowingflame": {
            "name": "Flowing Flame",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330506.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334506.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330506_gcg_high_resolution.webp",
            "cost": 5
        },
        "crossfire": {
            "name": "Crossfire",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330507.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334507.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330507_gcg_high_resolution.webp",
            "cost": 4
        },
        "grandexpectation": {
            "name": "Grand Expectation",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330508.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334508.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330508_gcg_high_resolution.webp",
            "cost": 4
        },
        "naganoharameteorswarm": {
            "name": "Naganohara Meteor Swarm",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330510.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334510.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330510_gcg_high_resolution.webp",
            "cost": 5
        },
        "stellarpredator": {
            "name": "Stellar Predator",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330511.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334511.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330511_gcg_high_resolution.webp",
            "cost": 4
        },
        "awakening": {
            "name": "Awakening",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330512.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334512.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330512_gcg_high_resolution.webp",
            "cost": 4
        },
        "thunderingpenance": {
            "name": "Thundering Penance",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330513.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334513.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330513_gcg_high_resolution.webp",
            "cost": 5
        },
        "chaoticentropy": {
            "name": "Chaotic Entropy",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330514.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334514.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330514_gcg_high_resolution.webp",
            "cost": 4
        },
        "landsofdandelion": {
            "name": "Lands of Dandelion",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330515.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334515.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330515_gcg_high_resolution.webp",
            "cost": 5
        },
        "strategicreserve": {
            "name": "Strategic Reserve",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330516.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334516.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330516_gcg_high_resolution.webp",
            "cost": 4
        },
        "igotyourback": {
            "name": "I Got Your Back",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330517.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334517.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330517_gcg_high_resolution.webp",
            "cost": 4
        },
        "floralsidewinder": {
            "name": "Floral Sidewinder",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330518.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334518.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330518_gcg_high_resolution.webp",
            "cost": 4
        },
        "streamingsurge": {
            "name": "Streaming Surge",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330519.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334519.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330519_gcg_high_resolution.webp",
            "cost": 4
        },
        "paidinfull": {
            "name": "Paid in Full",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330520.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334520.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330520_gcg_high_resolution.webp",
            "cost": 4
        },
        "transcendentautomaton": {
            "name": "Transcendent Automaton",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330521.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334521.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330521_gcg_high_resolution.webp",
            "cost": 4
        },
        "stonehidereforged": {
            "name": "Stonehide Reforged",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330522.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334522.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330522_gcg_high_resolution.webp",
            "cost": 4
        },
        "shakennotpurred": {
            "name": "Shaken, Not Purred",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330523.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334523.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330523_gcg_high_resolution.webp",
            "cost": 4
        },
        "featherfalljudgment": {
            "name": "Featherfall Judgment",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330524.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334524.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330524_gcg_high_resolution.webp",
            "cost": 5
        },
        "gloriousseason": {
            "name": "Glorious Season",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330525.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334525.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330525_gcg_high_resolution.webp",
            "cost": 4
        },
        "mirrorcage": {
            "name": "Mirror Cage",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330526.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334526.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330526_gcg_high_resolution.webp",
            "cost": 4
        },
        "proliferatingspores": {
            "name": "Proliferating Spores",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330527.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334527.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330527_gcg_high_resolution.webp",
            "cost": 4
        },
        "magicguide": {
            "name": "Magic Guide",
            "tags": ['modify', 'weapon', 'weapon_catalyst'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331000.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335000.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331000_gcg_high_resolution.webp",
            "cost": 2
        },
        "sacrificialfragments": {
            "name": "Sacrificial Fragments",
            "tags": ['modify', 'weapon', 'weapon_catalyst'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331001.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335001.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331001_gcg_high_resolution.webp",
            "cost": 3
        },
        "skywardatlas": {
            "name": "Skyward Atlas",
            "tags": ['modify', 'weapon', 'weapon_catalyst'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331002.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335002.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331002_gcg_high_resolution.webp",
            "cost": 3
        },
        "ravenbow": {
            "name": "Raven Bow",
            "tags": ['modify', 'weapon', 'weapon_bow'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331003.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335003.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331003_gcg_high_resolution.webp",
            "cost": 2
        },
        "sacrificialbow": {
            "name": "Sacrificial Bow",
            "tags": ['modify', 'weapon', 'weapon_bow'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331004.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335004.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331004_gcg_high_resolution.webp",
            "cost": 3
        },
        "skywardharp": {
            "name": "Skyward Harp",
            "tags": ['modify', 'weapon', 'weapon_bow'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331005.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335005.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331005_gcg_high_resolution.webp",
            "cost": 3
        },
        "whiteirongreatsword": {
            "name": "White Iron Greatsword",
            "tags": ['modify', 'weapon', 'weapon_claymore'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331006.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335006.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331006_gcg_high_resolution.webp",
            "cost": 2
        },
        "sacrificialgreatsword": {
            "name": "Sacrificial Greatsword",
            "tags": ['modify', 'weapon', 'weapon_claymore'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331007.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335007.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331007_gcg_high_resolution.webp",
            "cost": 3
        },
        "wolfsgravestone": {
            "name": "Wolf’s Gravestone",
            "tags": ['modify', 'weapon', 'weapon_claymore'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331008.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335008.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331008_gcg_high_resolution.webp",
            "cost": 3
        },
        "whitetassel": {
            "name": "White Tassel",
            "tags": ['modify', 'weapon', 'weapon_pole'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331009.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335009.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331009_gcg_high_resolution.webp",
            "cost": 2
        },
        "lithicspear": {
            "name": "Lithic Spear",
            "tags": ['modify', 'weapon', 'weapon_pole'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331010.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335010.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331010_gcg_high_resolution.webp",
            "cost": 3
        },
        "skywardspine": {
            "name": "Skyward Spine",
            "tags": ['modify', 'weapon', 'weapon_pole'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331011.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335011.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331011_gcg_high_resolution.webp",
            "cost": 3
        },
        "travelershandysword": {
            "name": "Traveler’s Handy Sword",
            "tags": ['modify', 'weapon', 'weapon_sword'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331012.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335012.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331012_gcg_high_resolution.webp",
            "cost": 2
        },
        "sacrificialsword": {
            "name": "Sacrificial Sword",
            "tags": ['modify', 'weapon', 'weapon_sword'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331013.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335013.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331013_gcg_high_resolution.webp",
            "cost": 3
        },
        "aquilafavonia": {
            "name": "Aquila Favonia",
            "tags": ['modify', 'weapon', 'weapon_sword'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331014.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335014.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331014_gcg_high_resolution.webp",
            "cost": 3
        },
        "adventurersbandana": {
            "name": "Adventurer’s Bandana",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331015.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335015.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331015_gcg_high_resolution.webp",
            "cost": 2
        },
        "luckydogssilvercirclet": {
            "name": "Lucky Dog’s Silver Circlet",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331016.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335016.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331016_gcg_high_resolution.webp",
            "cost": 1
        },
        "travelingdoctorshandkerchief": {
            "name": "Traveling Doctor’s Handkerchief",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331017.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335017.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331017_gcg_high_resolution.webp",
            "cost": 1
        },
        "gamblersearrings": {
            "name": "Gambler’s Earrings",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331018.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335018.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331018_gcg_high_resolution.webp",
            "cost": 2
        },
        "instructorscap": {
            "name": "Instructor’s Cap",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331019.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335019.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331019_gcg_high_resolution.webp",
            "cost": 2
        },
        "exilescirclet": {
            "name": "Exile’s Circlet",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331020.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335020.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331020_gcg_high_resolution.webp",
            "cost": 2
        },
        "brokenrimesecho": {
            "name": "Broken Rime’s Echo",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331021.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335021.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331021_gcg_high_resolution.webp",
            "cost": 2
        },
        "blizzardstrayer": {
            "name": "Blizzard Strayer",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331022.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335022.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331022_gcg_high_resolution.webp",
            "cost": 2
        },
        "winestainedtricorne": {
            "name": "Wine-Stained Tricorne",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331023.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335023.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331023_gcg_high_resolution.webp",
            "cost": 2
        },
        "heartofdepth": {
            "name": "Heart of Depth",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331024.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335024.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331024_gcg_high_resolution.webp",
            "cost": 2
        },
        "witchsscorchinghat": {
            "name": "Witch’s Scorching Hat",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331025.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335025.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331025_gcg_high_resolution.webp",
            "cost": 2
        },
        "crimsonwitchofflames": {
            "name": "Crimson Witch of Flames",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331026.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335026.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331026_gcg_high_resolution.webp",
            "cost": 2
        },
        "thundersummonerscrown": {
            "name": "Thunder Summoner’s Crown",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331027.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335027.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331027_gcg_high_resolution.webp",
            "cost": 2
        },
        "thunderingfury": {
            "name": "Thundering Fury",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331028.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335028.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331028_gcg_high_resolution.webp",
            "cost": 2
        },
        "viridescentvenerersdiadem": {
            "name": "Viridescent Venerer’s Diadem",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331029.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335029.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331029_gcg_high_resolution.webp",
            "cost": 2
        },
        "viridescentvenerer": {
            "name": "Viridescent Venerer",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331030.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335030.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331030_gcg_high_resolution.webp",
            "cost": 2
        },
        "maskofsolitudebasalt": {
            "name": "Mask of Solitude Basalt",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331031.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335031.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331031_gcg_high_resolution.webp",
            "cost": 2
        },
        "archaicpetra": {
            "name": "Archaic Petra",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331032.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335032.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331032_gcg_high_resolution.webp",
            "cost": 2
        },
        "laurelcoronet": {
            "name": "Laurel Coronet",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331033.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335033.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331033_gcg_high_resolution.webp",
            "cost": 2
        },
        "deepwoodmemories": {
            "name": "Deepwood Memories",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331034.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335034.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331034_gcg_high_resolution.webp",
            "cost": 2
        },
        "liyueharborwharf": {
            "name": "Liyue Harbor Wharf",
            "tags": ['assist', 'place'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332000.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336000.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332000_gcg_high_resolution.webp",
            "cost": 1
        },
        "knightsoffavoniuslibrary": {
            "name": "Knights of Favonius Library",
            "tags": ['assist', 'place'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332001.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336001.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332001_gcg_high_resolution.webp",
            "cost": 1
        },
        "jadechamber": {
            "name": "Jade Chamber",
            "tags": ['assist', 'place'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332002.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336002.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332002_gcg_high_resolution.webp",
            "cost": 1
        },
        "dawnwinery": {
            "name": "Dawn Winery",
            "tags": ['assist', 'place'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332003.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336003.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332003_gcg_high_resolution.webp",
            "cost": 2
        },
        "wangshuinn": {
            "name": "Wangshu Inn",
            "tags": ['assist', 'place'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332004.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336004.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332004_gcg_high_resolution.webp",
            "cost": 2
        },
        "favoniuscathedral": {
            "name": "Favonius Cathedral",
            "tags": ['assist', 'place'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332005.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336005.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332005_gcg_high_resolution.webp",
            "cost": 2
        },
        "paimon": {
            "name": "Paimon",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332006.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336006.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332006_gcg_high_resolution.webp",
            "cost": 3
        },
        "katheryne": {
            "name": "Katheryne",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332007.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336007.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332007_gcg_high_resolution.webp",
            "cost": 1
        },
        "timaeus": {
            "name": "Timaeus",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332008.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336008.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332008_gcg_high_resolution.webp",
            "cost": 2
        },
        "wagner": {
            "name": "Wagner",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332009.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336009.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332009_gcg_high_resolution.webp",
            "cost": 2
        },
        "chefmao": {
            "name": "Chef Mao",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332010.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336010.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332010_gcg_high_resolution.webp",
            "cost": 1
        },
        "tubby": {
            "name": "Tubby",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332011.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336011.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332011_gcg_high_resolution.webp",
            "cost": 2
        },
        "timmie": {
            "name": "Timmie",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332012.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336012.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332012_gcg_high_resolution.webp",
            "cost": 0
        },
        "liben": {
            "name": "Liben",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332013.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336013.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332013_gcg_high_resolution.webp",
            "cost": 0
        },
        "changtheninth": {
            "name": "Chang the Ninth",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332014.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336014.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332014_gcg_high_resolution.webp",
            "cost": 0
        },
        "ellin": {
            "name": "Ellin",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332015.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336015.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332015_gcg_high_resolution.webp",
            "cost": 0
        },
        "irontonguetian": {
            "name": "Iron Tongue Tian",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332016.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336016.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332016_gcg_high_resolution.webp",
            "cost": 1
        },
        "liusu": {
            "name": "Liu Su",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332017.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336017.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332017_gcg_high_resolution.webp",
            "cost": 1
        },
        "parametrictransformer": {
            "name": "Parametric Transformer",
            "tags": ['assist', 'item'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332018.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336018.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332018_gcg_high_resolution.webp",
            "cost": 0
        },
        "nre": {
            "name": "NRE",
            "tags": ['assist', 'item'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332019.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336019.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332019_gcg_high_resolution.webp",
            "cost": 2
        },
        "elementalresonancewovenice": {
            "name": "Elemental Resonance: Woven Ice",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333000.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337000.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333000_gcg_high_resolution.webp",
            "cost": 0
        },
        "elementalresonanceshatteringice": {
            "name": "Elemental Resonance: Shattering Ice",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333001.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337001.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333001_gcg_high_resolution.webp",
            "cost": 1
        },
        "elementalresonancewovenwaters": {
            "name": "Elemental Resonance: Woven Waters",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333002.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337002.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333002_gcg_high_resolution.webp",
            "cost": 0
        },
        "elementalresonancesoothingwater": {
            "name": "Elemental Resonance: Soothing Water",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333003.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337003.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333003_gcg_high_resolution.webp",
            "cost": 1
        },
        "elementalresonancewovenflames": {
            "name": "Elemental Resonance: Woven Flames",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333004.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337004.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333004_gcg_high_resolution.webp",
            "cost": 0
        },
        "elementalresonanceferventflames": {
            "name": "Elemental Resonance: Fervent Flames",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333005.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337005.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333005_gcg_high_resolution.webp",
            "cost": 1
        },
        "elementalresonancewoventhunder": {
            "name": "Elemental Resonance: Woven Thunder",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333006.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337006.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333006_gcg_high_resolution.webp",
            "cost": 0
        },
        "elementalresonancehighvoltage": {
            "name": "Elemental Resonance: High Voltage",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333007.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337007.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333007_gcg_high_resolution.webp",
            "cost": 1
        },
        "elementalresonancewovenwinds": {
            "name": "Elemental Resonance: Woven Winds",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333008.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337008.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333008_gcg_high_resolution.webp",
            "cost": 0
        },
        "elementalresonanceimpetuouswinds": {
            "name": "Elemental Resonance: Impetuous Winds",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333009.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337009.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333009_gcg_high_resolution.webp",
            "cost": 1
        },
        "elementalresonancewovenstone": {
            "name": "Elemental Resonance: Woven Stone",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333010.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337010.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333010_gcg_high_resolution.webp",
            "cost": 0
        },
        "elementalresonanceenduringrock": {
            "name": "Elemental Resonance: Enduring Rock",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333011.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337011.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333011_gcg_high_resolution.webp",
            "cost": 1
        },
        "elementalresonancewovenweeds": {
            "name": "Elemental Resonance: Woven Weeds",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333012.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337012.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333012_gcg_high_resolution.webp",
            "cost": 0
        },
        "elementalresonancesprawlinggreenery": {
            "name": "Elemental Resonance: Sprawling Greenery",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333013.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337013.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333013_gcg_high_resolution.webp",
            "cost": 1
        },
        "thebestesttravelcompanion": {
            "name": "The Bestest Travel Companion!",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333014.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337014.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333014_gcg_high_resolution.webp",
            "cost": 2
        },
        "changingshifts": {
            "name": "Changing Shifts",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333015.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337015.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333015_gcg_high_resolution.webp",
            "cost": 0
        },
        "tossup": {
            "name": "Toss-Up",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333016.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337016.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333016_gcg_high_resolution.webp",
            "cost": 0
        },
        "strategize": {
            "name": "Strategize",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333017.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337017.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333017_gcg_high_resolution.webp",
            "cost": 1
        },
        "ihaventlostyet": {
            "name": "I Haven’t Lost Yet!",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333018.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337018.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333018_gcg_high_resolution.webp",
            "cost": 0
        },
        "leaveittome": {
            "name": "Leave It to Me!",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333019.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337019.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333019_gcg_high_resolution.webp",
            "cost": 1
        },
        "whenthecranereturned": {
            "name": "When the Crane Returned",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333020.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337020.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333020_gcg_high_resolution.webp",
            "cost": 1
        },
        "starsigns": {
            "name": "Starsigns",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333021.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337021.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333021_gcg_high_resolution.webp",
            "cost": 0
        },
        "calxsarts": {
            "name": "Calx’s Arts",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333022.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337022.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333022_gcg_high_resolution.webp",
            "cost": 1
        },
        "masterofweaponry": {
            "name": "Master of Weaponry",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333023.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337023.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333023_gcg_high_resolution.webp",
            "cost": 0
        },
        "blessingofthedivinerelicsinstallation": {
            "name": "Blessing of the Divine Relic’s Installation",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333024.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337024.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333024_gcg_high_resolution.webp",
            "cost": 0
        },
        "quickknit": {
            "name": "Quick Knit",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333025.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337025.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333025_gcg_high_resolution.webp",
            "cost": 1
        },
        "sendoff": {
            "name": "Send Off",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333026.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337026.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333026_gcg_high_resolution.webp",
            "cost": 2
        },
        "guardiansoath": {
            "name": "Guardian’s Oath",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333027.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337027.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333027_gcg_high_resolution.webp",
            "cost": 4
        },
        "abyssalsummons": {
            "name": "Abyssal Summons",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333028.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337028.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333028_gcg_high_resolution.webp",
            "cost": 2
        },
        "jueyunguoba": {
            "name": "Jueyun Guoba",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333029.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337029.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333029_gcg_high_resolution.webp",
            "cost": 0
        },
        "adeptustemptation": {
            "name": "Adeptus’ Temptation",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333030.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337030.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333030_gcg_high_resolution.webp",
            "cost": 3
        },
        "lotusflowercrisp": {
            "name": "Lotus Flower Crisp",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333031.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337031.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333031_gcg_high_resolution.webp",
            "cost": 1
        },
        "northernsmokedchicken": {
            "name": "Northern Smoked Chicken",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333032.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337032.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333032_gcg_high_resolution.webp",
            "cost": 0
        },
        "sweetmadame": {
            "name": "Sweet Madame",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333033.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337033.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333033_gcg_high_resolution.webp",
            "cost": 0
        },
        "mondstadthashbrown": {
            "name": "Mondstadt Hash Brown",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333034.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337034.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333034_gcg_high_resolution.webp",
            "cost": 1
        },
        "mushroompizza": {
            "name": "Mushroom Pizza",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333035.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337035.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333035_gcg_high_resolution.webp",
            "cost": 1
        },
        "mintymeatrolls": {
            "name": "Minty Meat Rolls",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333036.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337036.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333036_gcg_high_resolution.webp",
            "cost": 1
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