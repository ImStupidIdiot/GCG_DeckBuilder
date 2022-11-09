import React from 'react';
import Card from './components/card';
import Deck from './components/deck';
import Ganyu_Card from './images/Ganyu_Card.webp';
import Kaeya_Card from './images/Kaeya_Card.webp';
import Chongyun_Card from './images/Chongyun_Card.webp';
import getCounter from './components/card';


export var char_lst = {ganyu:<Card name = 'ganyu' url={Ganyu_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334000.webp' />, 
kaeya:<Card name = 'kaeya' url={Kaeya_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334001.webp'/>, 

chongyun: <Card name = 'chongyun' url={Chongyun_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334002.webp'/>}

// {
//     {
//         name: "Ganyu",
//         img1: "oshjdpfoaf"
//     }
//     {
//         name: "Kaeya",
//         img1: "oshjdpfoaf"
//     }
// }