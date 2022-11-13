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
            "cost": '5',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1101], equip this card.<br/>After $[A1101] equips this card, immediately use <color=#ffd780ff>$[S11013] once.<br/>When your $[A1101], who has this card equipped, uses <color=#ffffffff>$[S11013]: If this Skill has been used before during this match, Cryo DMG dealt by this Skill +1, and it now deals 3 $[K5] to all opposing characters on standby instead.<br/>(You must have $[A1101] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "coldbloodedstrike": {
            "name": "Cold-Blooded Strike",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330501.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334501.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330501_gcg_high_resolution.webp",
            "cost": '4',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1103], equip this card.<br/>After $[A1103] equips this card, immediately use <color=#ffd780ff>$[S11032] once.<br/>After your $[A1103], who has this card equipped, uses <color=#ffffffff>$[S11032], he heals himself for 2 HP. (Once per Round)<br/>(You must have $[A1103] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "steadybreathing": {
            "name": "Steady Breathing",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330502.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334502.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330502_gcg_high_resolution.webp",
            "cost": '4',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1104], equip this card.<br/>After $[A1104] equips this card, immediately use <color=#ffd780ff>$[S11042] once.<br/>When your $[A1104], who has this card equipped, creates a <color=#ffffffff>$[C111041], its $[K4] +1, and its effect will cause your Sword, Claymore, and Polearm-wielding characters’ <color=#ffffffff>Normal Attacks to deal +1 DMG.<br/>(You must have $[A1104] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "kantensenmyoublessing": {
            "name": "Kanten Senmyou Blessing",
            "tags": ['modify', 'talent'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330503.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334503.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330503_gcg_high_resolution.webp",
            "cost": '2',
            "description": "The <color=#ffffffff>$[C111052] created by your $[A1105], who has this card equipped, allows the character to which it is attached to deal +1 <color=#99ffffff>$[K101].<br/>When you switch to a $[A1105] who has this card equipped: Spend 1 less Elemental Dice. (Once per Round)<br/>(You must have $[A1105] in your deck to add this card to your deck.)</color=#99ffffff></color=#ffffffff>"
        },
        
        "thescentremained": {
            "name": "The Scent Remained",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330504.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334504.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330504_gcg_high_resolution.webp",
            "cost": '4',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1102], equip this card.<br/>After $[A1102] equips this card, immediately use <color=#ffd780ff>$[S11022] once.<br/>When your $[A1102], who has this card equipped, creates a <color=#ffffffff>$[C111021], its $[K3]s +1.<br/>(You must have $[A1102] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "prophecyofsubmersion": {
            "name": "Prophecy of Submersion",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330505.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334505.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330505_gcg_high_resolution.webp",
            "cost": '3 + 3',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1203], equip this card.<br/>When $[A1203] equips this card, immediately use <color=#ffd780ff>$[S12033] once.<br/>When your $[A1203], who has this card equipped, is the active character, the $[K212] you trigger deal +2 additional DMG.<br/>(You must have $[A1203] in your deck to add this card to your deck.)</color=#ffd780ff></color=#ffffffff>"
        },
        
        "flowingflame": {
            "name": "Flowing Flame",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330506.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334506.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330506_gcg_high_resolution.webp",
            "cost": '3',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1301], equip this card.<br/>After $[A1301] equips this card, immediately use <color=#ffd780ff>$[S13012] once.<br/>When your $[A1301], who has this card equipped, uses <color=#ffffffff>$[S13012] for the second time in one Round, spend 1 less {SPRITE_PRESET#1103}Pyro Die.<br/>(You must have $[A1301] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "crossfire": {
            "name": "Crossfire",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330507.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334507.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330507_gcg_high_resolution.webp",
            "cost": '4',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1302], equip this card.<br/>After $[A1302] equips this card, immediately use <color=#ffd780ff>$[S13022] once.<br/>When your $[A1302], who has this card equipped, uses <color=#ffffffff>$[S13022], she will also deal 1 $[K103].<br/>(You must have $[A1302] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "grandexpectation": {
            "name": "Grand Expectation",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330508.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334508.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330508_gcg_high_resolution.webp",
            "cost": '4 + 2',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1303], equip this card.<br/>After $[A1303] equips this card, immediately use <color=#ffd780ff>$[S13033] once.<br/>When your $[A1303], who has this card equipped, creates a <color=#ffffffff>$[C113031], its DMG Bonus is now always active and will no longer have an HP restriction.<br/>(You must have $[A1303] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "naganoharameteorswarm": {
            "name": "Naganohara Meteor Swarm",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330510.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334510.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330510_gcg_high_resolution.webp",
            "cost": '2',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1305], equip this card.<br/>After $[A1305] equips this card, immediately use <color=#ffd780ff>$[S13052] once.<br/>After your $[A1305], who has this card equipped, triggers <color=#ffffffff>$[C113051]: Deal 1 additional $[K103].<br/>(You must have $[A1305] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "stellarpredator": {
            "name": "Stellar Predator",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330511.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334511.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330511_gcg_high_resolution.webp",
            "cost": '3',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1401], equip this card.<br/>After $[A1401] equips this card, immediately use <color=#ffd780ff>$[S14012] once.<br/>When your $[A1401], who has this card equipped, creates an <color=#ffffffff>$[C114011], and after $[A1401] uses a <color=#ffffffff>Normal Attack: Deal 2 $[K104].(Consumes $[K3])<br/>(You must have $[A1401] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "awakening": {
            "name": "Awakening",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330512.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334512.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330512_gcg_high_resolution.webp",
            "cost": '4',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1402], equip this card.<br/>After $[A1402] equips this card, immediately use <color=#ffd780ff>$[S14022] once.<br/>After your $[A1402], who has this card equipped, <color=#ffffffff>uses $[S14022]: 1 of your Electro characters gains 1 Energy.<br/>(You must have $[A1402] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "thunderingpenance": {
            "name": "Thundering Penance",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330513.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334513.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330513_gcg_high_resolution.webp",
            "cost": '3',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1403], equip this card.<br/>After $[A1403] equips this card, immediately use <color=#ffd780ff>$[S14032] once.<br/>When your $[A1403], who has this card equipped, creates an <color=#ffffffff>$[C114032], its $[K104] +1, and $[K104] dealt by the character +1.<br/>(You must have $[A1403] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "chaoticentropy": {
            "name": "Chaotic Entropy",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330514.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334514.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330514_gcg_high_resolution.webp",
            "cost": '3 + 2',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1501], equip this card.<br/>After $[A1501] equips this card, immediately use <color=#ffd780ff>$[S15013] once.<br/>After the <color=#ffffffff>$[C115011] created by your $[A1501], who had this card equipped, has converted to another Element: Deal +1 DMG of this Element.<br/>(You must have $[A1501] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "landsofdandelion": {
            "name": "Lands of Dandelion",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330515.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334515.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330515_gcg_high_resolution.webp",
            "cost": '4 + 3',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1502], equip this card.<br/>After $[A1502] equips this card, immediately use <color=#ffd780ff>$[S15023] once.<br/>When your $[A1502], who has this card equipped, creates a <color=#ffffffff>$[C115021], it will cause you to deal +1 <color=#80ffd7ff>$[K105].<br/>(You must have $[A1502] in your deck to add this card to your deck.)</color=#80ffd7ff></color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "strategicreserve": {
            "name": "Strategic Reserve",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330516.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334516.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330516_gcg_high_resolution.webp",
            "cost": '4',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1601], equip this card.<br/>After $[A1601] equips this card, immediately use <color=#ffd780ff>$[S16012] once.<br/>When your $[A1601], who has this card equipped, creates a <color=#ffffffff>$[C116011], it will cause you to deal +1 <color=#ffe699ff>$[K106].<br/>(You must have $[A1601] in your deck to add this card to your deck.)</color=#ffe699ff></color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "igotyourback": {
            "name": "I Got Your Back",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330517.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334517.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330517_gcg_high_resolution.webp",
            "cost": '3',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1602], equip this card.<br/>After $[A1602] equips this card, immediately use <color=#ffd780ff>$[S16022] once.<br/>When your $[A1602], who has this card equipped, creates a <color=#ffffffff>$[C116021], it will heal all your characters for 1 HP after $[A1602] uses a <color=#ffffffff>Normal Attack. (Once per Round)<br/>(You must have $[A1602] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "floralsidewinder": {
            "name": "Floral Sidewinder",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330518.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334518.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330518_gcg_high_resolution.webp",
            "cost": '3',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1701], equip this card.<br/>After $[A1701] equips this card, immediately use <color=#ffd780ff>$[S17012] once.<br/>After your $[A1701], who has this card equipped, <color=#ffffffff>uses $[S17012], during this Round, after your characters’ Skills trigger $[K217]: Deal 1 $[K107]. (Once per Round)<br/>(You must have $[A1701] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "streamingsurge": {
            "name": "Streaming Surge",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330519.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334519.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330519_gcg_high_resolution.webp",
            "cost": '4 + 3',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A2201], equip this card.<br/>After $[A2201] equips this card, immediately use <color=#ffd780ff>$[S22014] once.<br/>When your $[A2201], who has this card equipped, uses <color=#ffffffff>$[S22014], all of your Summon(s) gain +1 $[K3].<br/>(You must have $[A2201] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "paidinfull": {
            "name": "Paid in Full",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330520.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334520.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330520_gcg_high_resolution.webp",
            "cost": '3',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A2301], equip this card.<br/>After $[A2301] equips this card, immediately use <color=#ffd780ff>$[S23012] once.<br/>When your $[A2301], who has this card equipped, creates a <color=#ffffffff>$[C123012], its $[K3] +1, and the $[K100] this character deals will be converted to $[K103].<br/>(You must have $[A2301] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "transcendentautomaton": {
            "name": "Transcendent Automaton",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330521.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334521.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330521_gcg_high_resolution.webp",
            "cost": "4*",
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A2501], equip this card.<br/>After $[A2501] equips this card, immediately use <color=#ffd780ff>$[S25012] once.<br/>After your $[A2501], who has this card equipped, uses <color=#ffffffff>$[S25012], you will switch to your next character. You will switch to your previous character when your $[A2501], who has this card equipped, uses <color=#ffffffff>$[S25013].<br/>(You must have $[A2501] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "stonehidereforged": {
            "name": "Stonehide Reforged",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330522.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334522.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330522_gcg_high_resolution.webp",
            "cost": "4*",
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A2601], equip this card.<br/>After $[A2601] equips this card, immediately use <color=#ffd780ff>$[S26013] once.<br/>When your $[A2601], who has this card equipped, defeats an opposing character: $[A2601] will re-attach <color=#ffffffff>$[C126011] and <color=#ffffffff>$[C126012].<br/>(You must have $[A2601] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "shakennotpurred": {
            "name": "Shaken, Not Purred",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330523.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334523.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330523_gcg_high_resolution.webp",
            "cost": '4',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1102], equip this card.<br/>After $[A1102] equips this card, immediately use <color=#ffd780ff>$[S11022] once.<br/>When your $[A1102], who has this card equipped, creates a <color=#ffffffff>$[C111021], its $[K3]s +1.<br/>(You must have $[A1102] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "featherfalljudgment": {
            "name": "Featherfall Judgment",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330524.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334524.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330524_gcg_high_resolution.webp",
            "cost": '5*',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1404], equip this card.<br/>After $[A1404] equips this card, immediately use <color=#ffd780ff>$[S14042] once.<br/>When your $[A1404], who has this card equipped, uses <color=#ffffffff>$[S14042] with 3 or 5 levels of <color=#ffffffff>$[C114041]‘s [Indwelling] effect, deal +1 additional DMG.<br/>(You must have $[A1404] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "gloriousseason": {
            "name": "Glorious Season",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330525.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334525.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330525_gcg_high_resolution.webp",
            "cost": '4',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A1201], equip this card.<br/>After $[A1201] equips this card, immediately use <color=#ffd780ff>$[S12012] once.<br/>When [Melody Loop] is on the field, switching characters will cost you 1 less Elemental Die. (Once per Round)<br/>(You must have $[A1201] in your deck to add this card to your deck.)</color=#ffd780ff></color=#ffffffff>"
        },
        
        "mirrorcage": {
            "name": "Mirror Cage",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330526.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334526.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330526_gcg_high_resolution.webp",
            "cost": '4*',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A2202], equip this card.<br/>After $[A2202] equips this card, immediately use <color=#ffd780ff>$[S22022] once.<br/>When your $[A2202], who has this card equipped, creates a <color=#ffffffff>$[C122021], its $[K4] +1, and it will increase the Elemental Dice Cost of switching from the character to which this is attached to another character by 1.<br/>(You must have $[A2202] in your deck to add this card to your deck.)</color=#ffffffff></color=#ffd780ff></color=#ffffffff>"
        },
        
        "proliferatingspores": {
            "name": "Proliferating Spores",
            "tags": ['modify', 'talent', 'slowly'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n330527.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n334527.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n330527_gcg_high_resolution.webp",
            "cost": '4*',
            "description": "$[K1]: When your active character is <color=#ffffffff>$[A2701], equip this card.<br/>After $[A2701] equips this card, immediately use <color=#ffd780ff>$[S27012] once.<br/>Your $[A2701], who has this card equipped, can gain 1 more stack of Radical Vitality.<br/>(You must have $[A2701] in your deck to add this card to your deck.)</color=#ffd780ff></color=#ffffffff>"
        },
        
        "magicguide": {
            "name": "Magic Guide",
            "tags": ['modify', 'weapon', 'weapon_catalyst'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331000.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335000.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331000_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>The character deals +1 DMG.<br/>(<color=#ffffffff>Only {SPRITE_PRESET#3201}Catalyst Characters can equip this. A character can equip a maximum of 1 {SPRITE_PRESET#3003}Weapon)</color=#ffffffff></color=#ffffffff>"
        },
        
        "sacrificialfragments": {
            "name": "Sacrificial Fragments",
            "tags": ['modify', 'weapon', 'weapon_catalyst'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331001.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335001.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331001_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>The character deals +1 DMG.<br/><color=#ffffffff>After the character uses an Elemental Skill: Create 1 Elemental Die of the same Elemental Type as this character. (Once per Round)<br/>(<color=#ffffffff>Only {SPRITE_PRESET#3201}Catalyst Characters can equip this. A character can equip a maximum of 1 {SPRITE_PRESET#3003}Weapon)</color=#ffffffff></color=#ffffffff></color=#ffffffff>"
        },
        
        "skywardatlas": {
            "name": "Skyward Atlas",
            "tags": ['modify', 'weapon', 'weapon_catalyst'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331002.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335002.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331002_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>The character deals +1 DMG.<br/><color=#ffffffff>Once per Round: This character’s Normal Attacks deal +1 additional DMG.<br/>(<color=#ffffffff>Only {SPRITE_PRESET#3201}Catalyst Characters can equip this. A character can equip a maximum of 1 {SPRITE_PRESET#3003}Weapon)</color=#ffffffff></color=#ffffffff></color=#ffffffff>"
        },
        
        "ravenbow": {
            "name": "Raven Bow",
            "tags": ['modify', 'weapon', 'weapon_bow'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331003.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335003.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331003_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>The character deals +1 DMG.<br/>(<color=#ffffffff>Only {SPRITE_PRESET#3202}Bow Characters can equip this. A character can equip a maximum of 1 {SPRITE_PRESET#3003}Weapon)</color=#ffffffff></color=#ffffffff>"
        },
        
        "sacrificialbow": {
            "name": "Sacrificial Bow",
            "tags": ['modify', 'weapon', 'weapon_bow'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331004.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335004.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331004_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>The character deals +1 DMG.<br/><color=#ffffffff>After the character uses an Elemental Skill: Create 1 Elemental Die of the same Elemental Type as this character. (Once per Round)<br/>(<color=#ffffffff>Only {SPRITE_PRESET#3202}Bow Characters can equip this. A character can equip a maximum of 1 {SPRITE_PRESET#3003}Weapon)</color=#ffffffff></color=#ffffffff></color=#ffffffff>"
        },
        
        "skywardharp": {
            "name": "Skyward Harp",
            "tags": ['modify', 'weapon', 'weapon_bow'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331005.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335005.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331005_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>The character deals +1 DMG.<br/><color=#ffffffff>Once per Round: This character’s Normal Attacks deal +1 additional DMG.<br/>(<color=#ffffffff>Only {SPRITE_PRESET#3202}Bow Characters can equip this. A character can equip a maximum of 1 {SPRITE_PRESET#3003}Weapon)</color=#ffffffff></color=#ffffffff></color=#ffffffff>"
        },
        
        "whiteirongreatsword": {
            "name": "White Iron Greatsword",
            "tags": ['modify', 'weapon', 'weapon_claymore'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331006.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335006.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331006_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>The character deals +1 DMG.<br/>(<color=#ffffffff>Only {SPRITE_PRESET#3203}Claymore Characters can equip this. A character can equip a maximum of 1 {SPRITE_PRESET#3003}Weapon)</color=#ffffffff></color=#ffffffff>"
        },
        
        "sacrificialgreatsword": {
            "name": "Sacrificial Greatsword",
            "tags": ['modify', 'weapon', 'weapon_claymore'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331007.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335007.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331007_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>The character deals +1 DMG.<br/><color=#ffffffff>After the character uses an Elemental Skill: Create 1 Elemental Die of the same Elemental Type as this character. (Once per Round)<br/>(<color=#ffffffff>Only {SPRITE_PRESET#3203}Claymore Characters can equip this. A character can equip a maximum of 1 {SPRITE_PRESET#3003}Weapon)</color=#ffffffff></color=#ffffffff></color=#ffffffff>"
        },
        
        "wolfsgravestone": {
            "name": "Wolf’s Gravestone",
            "tags": ['modify', 'weapon', 'weapon_claymore'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331008.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335008.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331008_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>The character deals +1 DMG.<br/>Deal +2 additional DMG if the target’s remaining HP is equal to or less than 6.<br/>(<color=#ffffffff>Only {SPRITE_PRESET#3203}Claymore Characters can equip this. A character can equip a maximum of 1 {SPRITE_PRESET#3003}Weapon)</color=#ffffffff></color=#ffffffff>"
        },
        
        "whitetassel": {
            "name": "White Tassel",
            "tags": ['modify', 'weapon', 'weapon_pole'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331009.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335009.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331009_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>The character deals +1 DMG.<br/>(<color=#ffffffff>Only {SPRITE_PRESET#3204}Polearm Characters can equip this. A character can equip a maximum of 1 {SPRITE_PRESET#3003}Weapon)</color=#ffffffff></color=#ffffffff>"
        },
        
        "lithicspear": {
            "name": "Lithic Spear",
            "tags": ['modify', 'weapon', 'weapon_pole'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331010.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335010.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331010_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>The character deals +1 DMG.<br/>When played: For each party member from Liyue, grant <color=#ffffffff>1 $[K6] point to the character to which this is attached. (Max 3 points)<br/>(<color=#ffffffff>Only {SPRITE_PRESET#3204}Polearm Characters can equip this. A character can equip a maximum of 1 {SPRITE_PRESET#3003}Weapon)</color=#ffffffff></color=#ffffffff></color=#ffffffff>"
        },
        
        "skywardspine": {
            "name": "Skyward Spine",
            "tags": ['modify', 'weapon', 'weapon_pole'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331011.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335011.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331011_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>The character deals +1 DMG.<br/><color=#ffffffff>Once per Round: This character’s Normal Attacks deal +1 additional DMG.<br/>(<color=#ffffffff>Only {SPRITE_PRESET#3204}Polearm Characters can equip this. A character can equip a maximum of 1 {SPRITE_PRESET#3003}Weapon)</color=#ffffffff></color=#ffffffff></color=#ffffffff>"
        },
        
        "travelershandysword": {
            "name": "Traveler’s Handy Sword",
            "tags": ['modify', 'weapon', 'weapon_sword'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331012.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335012.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331012_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>The character deals +1 DMG.<br/>(<color=#ffffffff>Only {SPRITE_PRESET#3205}Sword Characters can equip this. A character can equip a maximum of 1 {SPRITE_PRESET#3003}Weapon)</color=#ffffffff></color=#ffffffff>"
        },
        
        "sacrificialsword": {
            "name": "Sacrificial Sword",
            "tags": ['modify', 'weapon', 'weapon_sword'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331013.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335013.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331013_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>The character deals +1 DMG.<br/><color=#ffffffff>After the character uses an Elemental Skill: Create 1 Elemental Die of the same Elemental Type as this character. (Once per Round)<br/>(<color=#ffffffff>Only {SPRITE_PRESET#3205}Sword Characters can equip this. A character can equip a maximum of 1 {SPRITE_PRESET#3003}Weapon)</color=#ffffffff></color=#ffffffff></color=#ffffffff>"
        },
        
        "aquilafavonia": {
            "name": "Aquila Favonia",
            "tags": ['modify', 'weapon', 'weapon_sword'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331014.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335014.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331014_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>The character deals +1 DMG.<br/><color=#ffffffff>After the opposing character uses a Skill: If the character with this attached is the active character, heal this character for 1 HP. (Max twice per Round)<br/>(<color=#ffffffff>Only {SPRITE_PRESET#3205}Sword Characters can equip this. A character can equip a maximum of 1 {SPRITE_PRESET#3003}Weapon)</color=#ffffffff></color=#ffffffff></color=#ffffffff>"
        },
        
        "adventurersbandana": {
            "name": "Adventurer’s Bandana",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331015.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335015.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331015_gcg_high_resolution.webp",
            "cost": '1',
            "description": "<color=#ffffffff>After this character uses a Normal Attack: Heal self for 1 HP. (Max 3 times per Round)<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#ffffffff>"
        },
        
        "luckydogssilvercirclet": {
            "name": "Lucky Dog’s Silver Circlet",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331016.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335016.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331016_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>After this character uses an Elemental Skill: Heal self for 2 HP. (Once per Round)<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#ffffffff>"
        },
        
        "travelingdoctorshandkerchief": {
            "name": "Traveling Doctor’s Handkerchief",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331017.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335017.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331017_gcg_high_resolution.webp",
            "cost": '1',
            "description": "<color=#ffffffff>After this character uses an Elemental Burst: Heal all your characters for 1 HP. (Once per Round)<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#ffffffff>"
        },
        
        "gamblersearrings": {
            "name": "Gambler’s Earrings",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331018.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335018.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331018_gcg_high_resolution.webp",
            "cost": '1',
            "description": "<color=#ffffffff>After this character defeats an opposing character: Create $[K411] ×2.<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#ffffffff>"
        },
        
        "instructorscap": {
            "name": "Instructor’s Cap",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331019.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335019.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331019_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>After this character triggers an Elemental Reaction: Create 1 Elemental Die that matches this Character’s Elemental Type. (Max 3 times per Round)<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#ffffffff>"
        },
        
        "exilescirclet": {
            "name": "Exile’s Circlet",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331020.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335020.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331020_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>After this character uses an Elemental Burst: All your characters on standby gain 1 $[K310]. (Once per Round)<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#ffffffff>"
        },
        
        "brokenrimesecho": {
            "name": "Broken Rime’s Echo",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331021.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335021.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331021_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>When a character uses a Skill or equips a {SPRITE_PRESET#3006}Talent: Spend 1 less <color=#99ffffff>Cryo Die. (Once per Round)<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#99ffffff></color=#ffffffff>"
        },
        
        "blizzardstrayer": {
            "name": "Blizzard Strayer",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331022.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335022.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331022_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>When a character uses a Skill or equips a {SPRITE_PRESET#3006}Talent: Spend 1 less <color=#99ffffff>Cryo Die. (Once per Round)<br/><color=#ffffffff>Roll Phase: 2 of the starting Elemental Dice you roll are always guaranteed to be <color=#99ffffff>Cryo Dice.<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#99ffffff></color=#ffffffff></color=#99ffffff></color=#ffffffff>"
        },
        
        "winestainedtricorne": {
            "name": "Wine-Stained Tricorne",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331023.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335023.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331023_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>When a character uses a Skill or equips a {SPRITE_PRESET#3006}Talent: Spend 1 less <color=#80c0ffff>Hydro Die. (Once per Round)<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#80c0ffff></color=#ffffffff>"
        },
        
        "heartofdepth": {
            "name": "Heart of Depth",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331024.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335024.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331024_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>When a character uses a Skill or equips a {SPRITE_PRESET#3006}Talent: Spend 1 less <color=#80c0ffff>Hydro Die. (Once per Round)<br/><color=#ffffffff>Roll Phase: 2 of the starting Elemental Dice you roll are always guaranteed to be <color=#80c0ffff>Hydro Dice.<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#80c0ffff></color=#ffffffff></color=#80c0ffff></color=#ffffffff>"
        },
        
        "witchsscorchinghat": {
            "name": "Witch’s Scorching Hat",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331025.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335025.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331025_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>When a character uses a Skill or equips a {SPRITE_PRESET#3006}Talent: Spend 1 less <color=#ff9999ff>Pyro Die. (Once per Round)<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#ff9999ff></color=#ffffffff>"
        },
        
        "crimsonwitchofflames": {
            "name": "Crimson Witch of Flames",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331026.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335026.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331026_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>When a character uses a Skill or equips a {SPRITE_PRESET#3006}Talent: Spend 1 less <color=#ff9999ff>Pyro Die. (Once per Round)<br/><color=#ffffffff>Roll Phase: 2 of the starting Elemental Dice you roll are always guaranteed to be <color=#ff9999ff>Pyro Dice.<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#ff9999ff></color=#ffffffff></color=#ff9999ff></color=#ffffffff>"
        },
        
        "thundersummonerscrown": {
            "name": "Thunder Summoner’s Crown",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331027.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335027.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331027_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>When a character uses a Skill or equips a {SPRITE_PRESET#3006}Talent: Spend 1 less <color=#ffacffff>Electro Die. (Once per Round)<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#ffacffff></color=#ffffffff>"
        },
        
        "thunderingfury": {
            "name": "Thundering Fury",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331028.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335028.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331028_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>When a character uses a Skill or equips a {SPRITE_PRESET#3006}Talent: Spend 1 less <color=#ffacffff>Electro Die. (Once per Round)<br/><color=#ffffffff>Roll Phase: 2 of the starting Elemental Dice you roll are always guaranteed to be <color=#ffacffff>Electro Dice.<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#ffacffff></color=#ffffffff></color=#ffacffff></color=#ffffffff>"
        },
        
        "viridescentvenerersdiadem": {
            "name": "Viridescent Venerer’s Diadem",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331029.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335029.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331029_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>When a character uses a Skill or equips a {SPRITE_PRESET#3006}Talent: Spend 1 less <color=#80ffd7ff>Anemo Die. (Once per Round)<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#80ffd7ff></color=#ffffffff>"
        },
        
        "viridescentvenerer": {
            "name": "Viridescent Venerer",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331030.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335030.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331030_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>When a character uses a Skill or equips a {SPRITE_PRESET#3006}Talent: Spend 1 less <color=#80ffd7ff>Anemo Die. (Once per Round)<br/><color=#ffffffff>Roll Phase: 2 of the starting Elemental Dice you roll are always guaranteed to be <color=#80ffd7ff>Anemo Dice.<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#80ffd7ff></color=#ffffffff></color=#80ffd7ff></color=#ffffffff>"
        },
        
        "maskofsolitudebasalt": {
            "name": "Mask of Solitude Basalt",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331031.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335031.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331031_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>When a character uses a Skill or equips a {SPRITE_PRESET#3006}Talent: Spend 1 less <color=#ffe699ff>Geo Die. (Once per Round)<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#ffe699ff></color=#ffffffff>"
        },
        
        "archaicpetra": {
            "name": "Archaic Petra",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331032.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335032.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331032_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>When a character uses a Skill or equips a {SPRITE_PRESET#3006}Talent: Spend 1 less <color=#ffe699ff>Geo Die. (Once per Round)<br/><color=#ffffffff>Roll Phase: 2 of the starting Elemental Dice you roll are always guaranteed to be <color=#ffe699ff>Geo Dice.<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#ffe699ff></color=#ffffffff></color=#ffe699ff></color=#ffffffff>"
        },
        
        "laurelcoronet": {
            "name": "Laurel Coronet",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331033.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335033.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331033_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>When a character uses a Skill or equips a {SPRITE_PRESET#3006}Talent: Spend 1 less <color=#99ff88ff>Dendro Die. (Once per Round)<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#99ff88ff></color=#ffffffff>"
        },
        
        "deepwoodmemories": {
            "name": "Deepwood Memories",
            "tags": ['modify', 'artifact'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n331034.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n335034.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n331034_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>When a character uses a Skill or equips a {SPRITE_PRESET#3006}Talent: Spend 1 less <color=#99ff88ff>Dendro Die. (Once per Round)<br/><color=#ffffffff>Roll Phase: 2 of the starting Elemental Dice you roll are always guaranteed to be <color=#99ff88ff>Dendro Dice.<br/>(A character can equip a maximum of 1 {SPRITE_PRESET#3004}Artifact)</color=#99ff88ff></color=#ffffffff></color=#99ff88ff></color=#ffffffff>"
        },
        
        "liyueharborwharf": {
            "name": "Liyue Harbor Wharf",
            "tags": ['assist', 'place'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332000.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336000.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332000_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>End Phase: Draw 2 cards.<br/>$[K3]s: 2</color=#ffffffff>"
        },
        
        "knightsoffavoniuslibrary": {
            "name": "Knights of Favonius Library",
            "tags": ['assist', 'place'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332001.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336001.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332001_gcg_high_resolution.webp",
            "cost": '1',
            "description": "<color=#ffffffff>When played: Select any Elemental Die to reroll.<br/><color=#ffffffff>Roll Phase: Gain another chance to reroll.</color=#ffffffff></color=#ffffffff>"
        },
        
        "jadechamber": {
            "name": "Jade Chamber",
            "tags": ['assist', 'place'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332002.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336002.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332002_gcg_high_resolution.webp",
            "cost": '1',
            "description": "<color=#ffffffff>Roll Phase: 2 of the starting Elemental Dice you roll are always guaranteed to match the Elemental Type of your active character.</color=#ffffffff>"
        },
        
        "dawnwinery": {
            "name": "Dawn Winery",
            "tags": ['assist', 'place'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332003.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336003.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332003_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>When you switch characters: Spend 1 less Elemental Die. (Once per Round)</color=#ffffffff>"
        },
        
        "wangshuinn": {
            "name": "Wangshu Inn",
            "tags": ['assist', 'place'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332004.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336004.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332004_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>End Phase: Heal the most injured character on standby for 2 HP.<br/><color=#ffffffff>$[K3]s: 2</color=#ffffffff></color=#ffffffff>"
        },
        
        "favoniuscathedral": {
            "name": "Favonius Cathedral",
            "tags": ['assist', 'place'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332005.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336005.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332005_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>End Phase: Heal your active character for 2 HP.<br/><color=#ffffffff>$[K3]s: 2</color=#ffffffff></color=#ffffffff>"
        },
        
        "paimon": {
            "name": "Paimon",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332006.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336006.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332006_gcg_high_resolution.webp",
            "cost": '3',
            "description": "<color=#ffffffff>When Action Phase begins: Create $[K411] ×2.<br/><color=#ffffffff>$[K3]s: 2</color=#ffffffff></color=#ffffffff>"
        },
        
        "katheryne": {
            "name": "Katheryne",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332007.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336007.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332007_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>When you switch characters: This switch is considered a $[K2] instead of a $[K1]. (Once per Round)</color=#ffffffff>"
        },
        
        "timaeus": {
            "name": "Timaeus",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332008.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336008.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332008_gcg_high_resolution.webp",
            "cost": '2',
            "description": "Comes with 2 Transmutation Materials when played.<br/><color=#ffffffff>End Phase: Gain 1 Transmutation Material.<br/><color=#ffffffff>When playing an {SPRITE_PRESET#3004}Artifact Card: If possible, spend Transmutation Materials equal to the total cost of the {SPRITE_PRESET#3004}Artifact and equip this {SPRITE_PRESET#3004}Artifact for free. (Once per Round)</color=#ffffffff></color=#ffffffff>"
        },
        
        "wagner": {
            "name": "Wagner",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332009.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336009.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332009_gcg_high_resolution.webp",
            "cost": '2',
            "description": "Comes with 2 Forging Billets when played.<br/><color=#ffffffff>End Phase: Gain 1 Forging Billet.<br/><color=#ffffffff>When playing a {SPRITE_PRESET#3003}Weapon Card: If possible, spend Forging Billets equal to the total cost of the {SPRITE_PRESET#3003}Weapon and equip this {SPRITE_PRESET#3003}Weapon for free. (Once per Round)</color=#ffffffff></color=#ffffffff>"
        },
        
        "chefmao": {
            "name": "Chef Mao",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332010.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336010.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332010_gcg_high_resolution.webp",
            "cost": '1',
            "description": "<color=#ffffffff>After playing a {SPRITE_PRESET#3101}Food Event Card: Create 1 random Elemental Die. (Once per Round)</color=#ffffffff>"
        },
        
        "tubby": {
            "name": "Tubby",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332011.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336011.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332011_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>When playing a {SPRITE_PRESET#3104}Location Support Card: Spend 2 less Elemental Dice. (Once per Round)</color=#ffffffff>"
        },
        
        "timmie": {
            "name": "Timmie",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332012.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336012.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332012_gcg_high_resolution.webp",
            "cost": '0',
            "description": "<color=#ffffffff>Triggers automatically once per Round: This card gains <color=#ffffffff>1 Pigeon.<br/>When this card gains <color=#ffffffff>3 Pigeons, discard this card, then draw 1 card and create $[K411] ×1.</color=#ffffffff></color=#ffffffff></color=#ffffffff>"
        },
        
        "liben": {
            "name": "Liben",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332013.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336013.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332013_gcg_high_resolution.webp",
            "cost": '0',
            "description": "<color=#ffffffff>End Phase: Collect your unused Elemental Dice (Max 1 of each Elemental Type).<br/><color=#ffffffff>When Action Phase begins: If this card has collected 3 Elemental Dice, draw 2 cards and create $[K411] ×2, then discard this card.</color=#ffffffff></color=#ffffffff>"
        },
        
        "changtheninth": {
            "name": "Chang the Ninth",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332014.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336014.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332014_gcg_high_resolution.webp",
            "cost": '0',
            "description": "After both sides deal $[K100], $[K5], or trigger an <color=#ffffffff>Elemental Reaction: This card gains <color=#ffffffff>1 Inspiration.<br/>When this card gains <color=#ffffffff>3 Inspiration, discard this card, then draw 2 cards.</color=#ffffffff></color=#ffffffff></color=#ffffffff>"
        },
        
        "ellin": {
            "name": "Ellin",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332015.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336015.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332015_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>When you use a Skill that has already been used in this Round: Spend 1 less Elemental Die. (Once per Round)</color=#ffffffff>"
        },
        
        "irontonguetian": {
            "name": "Iron Tongue Tian",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332016.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336016.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332016_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>End Phase: One of your characters gains 1 $[K310].<br/><color=#ffffffff>$[K3]s: 3</color=#ffffffff></color=#ffffffff>"
        },
        
        "liusu": {
            "name": "Liu Su",
            "tags": ['assist', 'ally'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332017.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336017.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332017_gcg_high_resolution.webp",
            "cost": '1',
            "description": "<color=#ffffffff>After you switch characters: If the character you switched to does not have $[K310], they will gain 1 $[K310]. (Once per Round)<br/><color=#ffffffff>$[K3]s: 2</color=#ffffffff></color=#ffffffff>"
        },
        
        "parametrictransformer": {
            "name": "Parametric Transformer",
            "tags": ['assist', 'item'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332018.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336018.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332018_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>After both sides use Skills: If Elemental DMG was dealt, this card gains <color=#ffffffff>1 Qualitative Progress.<br/>When this card gains <color=#ffffffff>3 Qualitative Progress, discard this card, then create 3 different Basic Elemental Dice.</color=#ffffffff></color=#ffffffff></color=#ffffffff>"
        },
        
        "nre": {
            "name": "NRE",
            "tags": ['assist', 'item'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n332019.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n336019.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n332019_gcg_high_resolution.webp",
            "cost": '2',
            "description": "<color=#ffffffff>When played: Draw 1 {SPRITE_PRESET#3101}Food Event Card from your deck.<br/><color=#ffffffff>When you play a {SPRITE_PRESET#3101]}Food Event Card: Draw 1 {SPRITE_PRESET#3101}Food Event Card from your deck. (Once per Round)</color=#ffffffff></color=#ffffffff>"
        },
        
        "elementalresonancewovenice": {
            "name": "Elemental Resonance: Woven Ice",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333000.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337000.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333000_gcg_high_resolution.webp",
            "cost": '0',
            "description": "Create 1 <color=#99ffffff>{SPRITE_PRESET#1101}Cryo Die.<br/>(You must have at least 2 <color=#99ffffff>Cryo characters in your deck to add this card to your deck.)</color=#99ffffff></color=#99ffffff>"
        },
        
        "elementalresonanceshatteringice": {
            "name": "Elemental Resonance: Shattering Ice",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333001.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337001.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333001_gcg_high_resolution.webp",
            "cost": '1',
            "description": "During this Round, your current active character will deal +2 DMG for the next instance.<br/>(You must have at least 2 <color=#99ffffff>Cryo characters in your deck to add this card to your deck.)</color=#99ffffff>"
        },
        
        "elementalresonancewovenwaters": {
            "name": "Elemental Resonance: Woven Waters",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333002.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337002.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333002_gcg_high_resolution.webp",
            "cost": '0',
            "description": "Create 1 <color=#80c0ffff>{SPRITE_PRESET#1102}Hydro Die.<br/>(You must have at least 2 <color=#80c0ffff>Hydro characters in your deck to add this card to your deck.)</color=#80c0ffff></color=#80c0ffff>"
        },
        
        "elementalresonancesoothingwater": {
            "name": "Elemental Resonance: Soothing Water",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333003.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337003.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333003_gcg_high_resolution.webp",
            "cost": '1',
            "description": "Heal your active characters for 2 HP, and also heals all your characters on standby for 1 HP.<br/>(You must have at least 2 <color=#80c0ffff>Hydro characters in your deck to add this card to your deck.)</color=#80c0ffff>"
        },
        
        "elementalresonancewovenflames": {
            "name": "Elemental Resonance: Woven Flames",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333004.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337004.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333004_gcg_high_resolution.webp",
            "cost": '0',
            "description": "Create 1 <color=#ff9999ff>{SPRITE_PRESET#1103}Pyro Die.<br/>(You must have at least 2 <color=#ff9999ff>Pyro characters in your deck to add this card to your deck.)</color=#ff9999ff></color=#ff9999ff>"
        },
        
        "elementalresonanceferventflames": {
            "name": "Elemental Resonance: Fervent Flames",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333005.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337005.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333005_gcg_high_resolution.webp",
            "cost": '1',
            "description": "During this round, the next instance of $[K213] your active character triggers deals +3 DMG.<br/>(You must have at least 2 <color=#ff9999ff>Pyro characters in your deck to add this card to your deck.)</color=#ff9999ff>"
        },
        
        "elementalresonancewoventhunder": {
            "name": "Elemental Resonance: Woven Thunder",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333006.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337006.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333006_gcg_high_resolution.webp",
            "cost": '0',
            "description": "Create 1 <color=#ffacffff>{SPRITE_PRESET#1104}Electro Die.<br/>(You must have at least 2 <color=#ffacffff>Electro characters in your deck to add this card to your deck.)</color=#ffacffff></color=#ffacffff>"
        },
        
        "elementalresonancehighvoltage": {
            "name": "Elemental Resonance: High Voltage",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333007.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337007.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333007_gcg_high_resolution.webp",
            "cost": '1',
            "description": "Your active and next standby characters gain 1 $[K310].<br/>(You must have at least 2 <color=#ffacffff>Electro characters in your deck to add this card to your deck.)</color=#ffacffff>"
        },
        
        "elementalresonancewovenwinds": {
            "name": "Elemental Resonance: Woven Winds",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333008.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337008.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333008_gcg_high_resolution.webp",
            "cost": '0',
            "description": "Create 1 <color=#80ffd7ff>{SPRITE_PRESET#1105}Anemo Die.<br/>(You must have at least 2 <color=#80ffd7ff>Anemo characters in your deck to add this card to your deck.)</color=#80ffd7ff></color=#80ffd7ff>"
        },
        
        "elementalresonanceimpetuouswinds": {
            "name": "Elemental Resonance: Impetuous Winds",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333009.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337009.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333009_gcg_high_resolution.webp",
            "cost": '1',
            "description": "Switch to the target character and create $[K411] ×1.<br/>(You must have at least 2 <color=#80ffd7ff>Anemo characters in your deck to add this card to your deck.)</color=#80ffd7ff>"
        },
        
        "elementalresonancewovenstone": {
            "name": "Elemental Resonance: Woven Stone",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333010.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337010.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333010_gcg_high_resolution.webp",
            "cost": '0',
            "description": "Create 1 <color=#ffe699ff>{SPRITE_PRESET#1106}Geo Die.<br/>(You must have at least 2 <color=#ffe699ff>Geo characters in your deck to add this card to your deck.)</color=#ffe699ff></color=#ffe699ff>"
        },
        
        "elementalresonanceenduringrock": {
            "name": "Elemental Resonance: Enduring Rock",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333011.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337011.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333011_gcg_high_resolution.webp",
            "cost": '1',
            "description": "During this round, after your character deals $[K106] next time: Should there be any Combat Status on your side that provides $[K6], grant one such Status with 3 $[K6] points. <br/>(You must have at least 2 <color=#ffe699ff>Geo characters in your deck to add this card to your deck.)</color=#ffe699ff>"
        },
        
        "elementalresonancewovenweeds": {
            "name": "Elemental Resonance: Woven Weeds",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333012.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337012.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333012_gcg_high_resolution.webp",
            "cost": '0',
            "description": "Create 1 <color=#99ff88ff>{SPRITE_PRESET#1107}Dendro Die.<br/>(You must have at least 2 <color=#99ff88ff>Dendro characters in your deck to add this card to your deck.)</color=#99ff88ff></color=#99ff88ff>"
        },
        
        "elementalresonancesprawlinggreenery": {
            "name": "Elemental Resonance: Sprawling Greenery",
            "tags": ['event', 'resonance'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333013.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337013.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333013_gcg_high_resolution.webp",
            "cost": '1',
            "description": "During this round, the next Elemental Reaction your active character triggers deals +2 DMG.<br/>Your active <color=#ffffffff>$[C115], $[C116], and $[C117] gain +1 $[K3].<br/>(You must have at least 2 <color=#99ff88ff>Dendro characters in your deck to add this card to your deck.)</color=#99ff88ff></color=#ffffffff>"
        },
        
        "thebestesttravelcompanion": {
            "name": "The Bestest Travel Companion!",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333014.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337014.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333014_gcg_high_resolution.webp",
            "cost": '2',
            "description": "Convert the Elemental Dice spent to $[K411] ×2."
        },
        
        "changingshifts": {
            "name": "Changing Shifts",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333015.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337015.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333015_gcg_high_resolution.webp",
            "cost": '0',
            "description": "Your next character switch costs 1 less Elemental Die."
        },
        
        "tossup": {
            "name": "Toss-Up",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333016.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337016.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333016_gcg_high_resolution.webp",
            "cost": '0',
            "description": "Select any Elemental Die to <color=#ffffffff>reroll. Can reroll 2 times.</color=#ffffffff>"
        },
        
        "strategize": {
            "name": "Strategize",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333017.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337017.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333017_gcg_high_resolution.webp",
            "cost": '1',
            "description": "Draw 2 cards."
        },
        
        "ihaventlostyet": {
            "name": "I Haven’t Lost Yet!",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333018.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337018.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333018_gcg_high_resolution.webp",
            "cost": '0',
            "description": "Only playable if one of your characters is defeated this Round:<br/>Create $[K411] ×1 and your current active character gains 1 $[K310]."
        },
        
        "leaveittome": {
            "name": "Leave It to Me!",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333019.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337019.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333019_gcg_high_resolution.webp",
            "cost": '0',
            "description": "Your next character switch will be considered a $[K2] instead of a $[K1]."
        },
        
        "whenthecranereturned": {
            "name": "When the Crane Returned",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333020.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337020.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333020_gcg_high_resolution.webp",
            "cost": '1',
            "description": "<color=#ffffffff>The next time you use a Skill: Switch your next character in to be the active character.</color=#ffffffff>"
        },
        
        "starsigns": {
            "name": "Starsigns",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333021.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337021.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333021_gcg_high_resolution.webp",
            "cost": '2',
            "description": "Your current active character <color=#ffffffff>gains 1 $[K310].<br/>After this character next uses an Elemental Burst: Gain <color=#ffffffff>Starsigns: Obstructed. (The next time this character uses a Normal Attack or Elemental Skill: Lose 1 $[K310].)</color=#ffffffff></color=#ffffffff>"
        },
        
        "calxsarts": {
            "name": "Calx’s Arts",  
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333022.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337022.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333022_gcg_high_resolution.webp",
            "cost": '1',
            "description": "Shift 1 $[K310] from at most 2 of your characters on standby to your active character."
        },
        
        "masterofweaponry": {
            "name": "Master of Weaponry",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333023.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337023.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333023_gcg_high_resolution.webp",
            "cost": '0',
            "description": "Shift 1 {SPRITE_PRESET#3003}Weapon Equipment Card that has been equipped to one of your characters to another one of your characters of the same Weapon Type."
        },
        
        "blessingofthedivinerelicsinstallation": {
            "name": "Blessing of the Divine Relic’s Installation",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333024.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337024.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333024_gcg_high_resolution.webp",
            "cost": '0',
            "description": "Shift 1 {SPRITE_PRESET#3004}Artifact Equipment Card that has been equipped to one of your characters to another one of your characters."
        },
        
        "quickknit": {
            "name": "Quick Knit",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333025.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337025.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333025_gcg_high_resolution.webp",
            "cost": '1',
            "description": "Choose one Summon on your side and grant it +1 $[K3]."
        },
        
        "sendoff": {
            "name": "Send Off",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333026.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337026.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333026_gcg_high_resolution.webp",
            "cost": '2',
            "description": "Choose one Summon on the opposing side and destroy it."
        },
        
        "guardiansoath": {
            "name": "Guardian’s Oath",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333027.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337027.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333027_gcg_high_resolution.webp",
            "cost": '4',
            "description": "Destroy all Summons. (Affects both you and your opponent!)"
        },
        
        "abyssalsummons": {
            "name": "Abyssal Summons",
            "tags": ['event'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333028.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337028.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333028_gcg_high_resolution.webp",
            "cost": '2',
            "description": "Summon 1 $[K1001]!<br/>(You must have at least 2 Monster characters in your deck to add this card to your deck.)"
        },
        
        "jueyunguoba": {
            "name": "Jueyun Guoba",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333029.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337029.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333029_gcg_high_resolution.webp",
            "cost": '0',
            "description": "During this Round, the target character’s next <color=#ffffffff>Normal Attack deals +1 DMG.<br/>(A character can consume at most 1 {SPRITE_PRESET#3101}Food per Round)</color=#ffffffff>"
        },
        
        "adeptustemptation": {
            "name": "Adeptus’ Temptation",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333030.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337030.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333030_gcg_high_resolution.webp",
            "cost": '2',
            "description": "During this Round, the target character’s next <color=#ffffffff>Elemental Burst deals +3 DMG.<br/>(A character can consume at most 1 {SPRITE_PRESET#3101}Food per Round)</color=#ffffffff>"
        },
        
        "lotusflowercrisp": {
            "name": "Lotus Flower Crisp",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333031.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337031.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333031_gcg_high_resolution.webp",
            "cost": '1',
            "description": "During this Round, the next time, the target character takes -3 DMG.<br/>(A character can consume at most 1 {SPRITE_PRESET#3101}Food per Round)"
        },
        
        "northernsmokedchicken": {
            "name": "Northern Smoked Chicken",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333032.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337032.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333032_gcg_high_resolution.webp",
            "cost": '0',
            "description": "During this Round, the target character’s next <color=#ffffffff>Normal Attack costs 1 less $[K309].<br/>(A character can consume at most 1 {SPRITE_PRESET#3101}Food per Round)</color=#ffffffff>"
        },
        
        "sweetmadame": {
            "name": "Sweet Madame",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333033.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337033.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333033_gcg_high_resolution.webp",
            "cost": '0',
            "description": "Heal the target character for 1 HP.<br/>(A character can consume at most 1 {SPRITE_PRESET#3101}Food per Round)"
        },
        
        "mondstadthashbrown": {
            "name": "Mondstadt Hash Brown",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333034.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337034.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333034_gcg_high_resolution.webp",
            "cost": '1',
            "description": "Heal the target character for 2 HP.<br/>(A character can consume at most 1 {SPRITE_PRESET#3101}Food per Round)"
        },
        
        "mushroompizza": {
            "name": "Mushroom Pizza",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333035.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337035.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333035_gcg_high_resolution.webp",
            "cost": '1',
            "description": "Heal the target character for 1 HP. For the next two Rounds, heal this character for 1 HP again at the End Phase.<br/>(A character can consume at most 1 {SPRITE_PRESET#3101}Food per Round)"
        },
        
        "mintymeatrolls": {
            "name": "Minty Meat Rolls",
            "tags": ['event', 'food'],
            "image": "https://genshin.honeyhunterworld.com/img/i_n333036.webp",
            "golden_image": "https://genshin.honeyhunterworld.com/img/i_n337036.webp",
            "hi_res_image": "https://genshin.honeyhunterworld.com/img/i_n333036_gcg_high_resolution.webp",
            "cost": '1',
            "description": "Before this Round ends, the target character’s <color=#ffffffff>Normal Attacks cost 1 less $[K309].<br/>(A character can consume at most 1 {SPRITE_PRESET#3101}Food per Round)</color=#ffffffff>"
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