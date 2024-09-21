import meteorRushImg from '../assets/meteor-rush.png'
import mcquestImg from '../assets/mcquest.png'

const projects = [
  {
    title: 'MCQuest',
    image: mcquestImg,
    description: `Develop a scalable massively multiplayer online role-playing
    game (MMORPG) accessible through a vanilla Minecraft client. Players embark
    on quests, explore an open world, delve through dungeons, level their
    character, acquire items and gear, and slay powerful foes with others in a
    medieval fantasy setting. Implemented physics (spatial hash-based collision
    detection and ray casting), non-player character artificial intelligence (A*
    navigation agents, behavior trees, finite state machines), a scalable game
    object manager, a high-level scripting API/interpreter, and common
    role-playing game elements such as quests, items, player classes, skills,
    combat, open-world exploration, dungeons, parties, mounts, a music
    soundtrack, an economy, and a heads-up display. Collaborate with artists to
    integrate 3D models, audio, cartography, and particle effects. Adapt the
    Minecraft client-server network protocol through low level packets to create
    an accessible MMORPG experience similar to the game World of Warcraft, but
    of smaller scale.`,
    skills: [
      'Java',
      'Kotlin',
      'Docker',
      'Kubernetes',
    ]
  },
  {
    title: 'Meteor Rush',
    image: meteorRushImg,
    description: `Designed and programmed a space-themed shoot 'em up game
    implemented in a custom 2D game engine built from scratch in Java.
    Implemented physics, graphics, the game loop, menus, and enemy AI.
    Collaborated with artist to produce textures and audio that created a
    visually-compelling experience.`,
    skills: [
      'Java',
    ]
  },
]

export default projects
