var constants = {
  "config": {
    "appTitle": "Historic Tale Construction Kit"
  },
  "colors":[
    "#303030",
    "#BA3030",
    "#0F0FA6",
    "#B89735",
    "#438005",
    "#A61BA3"
  ],
  "tabs": [
   {
      "title": "Beasts",
      "images": [
        "content//images/beasts/01_horse.png",
        "content//images/beasts/02_cow.png",
        "content//images/beasts/03_bird1.png",
        "content//images/beasts/04_bird2.png",
        "content//images/beasts/05_bird3.png",
        "content//images/beasts/06_bird4.png",
        "content//images/beasts/07_bird5.png",
        "content//images/beasts/08_bird6.png",
        "content//images/beasts/09_ram1.png",
        "content//images/beasts/10_otter.png",
        "content//images/beasts/11_lion1.png",
        "content//images/beasts/12_beast1.png",
        "content//images/beasts/13_lion2.png",
        "content//images/beasts/14_dog1.png",
        "content//images/beasts/15_goat.png",
        "content//images/beasts/16_dog2.png",
        "content//images/beasts/17_dog3.png",
        "content//images/beasts/18_dog4.png",
        "content//images/beasts/19_beast2.png",
        "content//images/beasts/20_dog5.png",
        "content//images/beasts/21_dogs.png",
        "content//images/beasts/22_lion3.png",
        "content//images/beasts/23_lamb.png",
        "content//images/beasts/24_donkey.png",
      ]
    },
   {
      "title": "Braves",
      "images": [
        "content//images/brave/01_archer1.png",
        "content//images/brave/02_archer2.png",
        "content//images/brave/03_archer3.png",
        "content//images/brave/04_archer4.png",
        "content//images/brave/05_falling_hero.png",
        "content//images/brave/06_beheaded_warrior1.png",
        "content//images/brave/07_dead_warrior2.png",
        "content//images/brave/08_dead_warrior2.png",
        "content//images/brave/09_dead_warrior3.png",
        "content//images/brave/10_dead_warrior4.png",
        "content//images/brave/11_horseman_with_shield_and_lance.png",
        "content//images/brave/12_horsemen.png",
        "content//images/brave/13_saluting_warrior.png",
        "content//images/brave/14_two_warriors.png",
        "content//images/brave/15_flag_carrying_warrior.png",
        "content//images/brave/16_guy_in_shrubs.png",
        "content//images/brave/17_driver_on_horse.png",
      ]
    },
   {
      "title": "Buildings",
      "images": [
        "content//images/buildings/01_tower.png",
        "content//images/buildings/02_tower2.png",
        "content//images/buildings/03_tower3.png",
        "content//images/buildings/04_tower4.png",
        "content//images/buildings/05_fort.png",
        "content//images/buildings/06_castle_on_hill.png",
        "content//images/buildings/07_house.png",
        "content//images/buildings/08_archway.png",
        "content//images/buildings/09_pillars.png",
        "content//images/buildings/10_pillar.png",
        "content//images/buildings/11_tower6.png",
        "content//images/buildings/12_tower5.png",
      ]
    },
   {
      "title": "Folks",
      "images": [
        "content//images/folc/01_group.png",
        "content//images/folc/02_staring-guys.png",
        "content//images/folc/03_shouting_guy.png",
        "content//images/folc/04_pointing_guy.png",
        "content//images/folc/05_gesturing_guy.png",
        "content//images/folc/06_megaphone_guy.png",
        "content//images/folc/07_guy_with_shield.png",
        "content//images/folc/08_woman1.png",
        "content//images/folc/09_cleric.png",
        "content//images/folc/10_carrying_guy.png",
        "content//images/folc/11_guy_with_ring.png",
        "content//images/folc/12_guy_with_animal.png",
        "content//images/folc/13_boy_with_sheep.png",
        "content//images/folc/14_guy_with_axe.png",
        "content//images/folc/15_pointing_guy.png",
        "content//images/folc/16_fruitbasket_guy.png",
        "content//images/folc/17_king1.png",
        "content//images/folc/18_king2.png",
        "content//images/folc/19_king3.png",
        "content//images/folc/20_benchguys.png",
        "content//images/folc/21_fireguy.png",
        "content//images/folc/22_woman_with_child.png",
        "content//images/folc/23_guy_with_chickens.png",
        "content//images/folc/24_shouting_guy.png",
      ]
    },
   {
      "title": "Misc",
      "images": [
        "content//images/misc/01_tree.png",
        "content//images/misc/02_tree.png",
        "content//images/misc/03_tree.png",
        "content//images/misc/04_tree.png",
        "content//images/misc/05_tree.png",
        "content//images/misc/06_boat.png",
        "content//images/misc/07_boat.png",
        "content//images/misc/08_boat.png",
        "content//images/misc/09_shield.png",
        "content//images/misc/10_shield.png",
        "content//images/misc/11_shields.png",
        "content//images/misc/12_tree1.png",
        "content//images/misc/13_tree.png",
        "content//images/misc/14_guy_on_pole.png",
        "content//images/misc/15_halleys_comet.png",
        "content//images/misc/16_sword.png",
        "content//images/misc/17_sword_helmet.png",
      ]
    },
  ],
  "backgrounds":[
    "content//images/backgrounds/background_1.jpg",
    "content//images/backgrounds/background_2.jpg"
  ],
  "fonts":[
    {
      font:"Bayeux",
      size: 25,
      uppercase: true
    },
    {
      font:"Augusta",
      size: 35,
      uppercase: false
    }
  ],
  "brushes":[
    {
      icon:"content//images/folc/01_group.png",
      speed:300,
      randScaleRange: 0.1,
      randRotationRange: 3,
      scale: 0.5,
      mirror: false,
      randMirror: false,
      images:[
        {
          img:"content//images/folc/01_group.png"
        },
        {
          img:"content//images/folc/02_staring-guys.png",
          mirror:true,
          scale: 0.8
        }
      ]
    }
  ]
}

