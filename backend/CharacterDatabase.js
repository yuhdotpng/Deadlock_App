const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'characters.db');
const char_db = new sqlite3.Database(dbPath);

char_db.serialize(() => {
  char_db.run(`
    CREATE TABLE IF NOT EXISTS characters (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      tag1 TEXT NOT NULL,
      tag2 TEXT NOT NULL,
      tag3 TEXT NOT NULL
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  char_db.get("SELECT COUNT(*) as count FROM characters", (err, row) => {
    if (err) {
      console.error('Error checking characters count:', err);
      return;
    }
    
    if (row.count === 0) {
      console.log('Adding characters...');
      const characters = [
        {
          name: 'Abrams',
          image: 'https://cdn.deadlock.wiki/thumb/Abrams_card.png/150px-Abrams_card.png',
          tag1: 'Tank',
          tag2: 'Brawler',
          tag3: 'Bull-Headed'
        },
        {
          name: 'Apollo',
          image: 'https://cdn.deadlock.wiki/thumb/Apollo_card.png/150px-Apollo_card.png',
          tag1: 'Finesse',
          tag2: 'Mobility',
          tag3: 'A Cut Above'
        },
        {
          name: 'Baba',
          image: 'https://cdn.deadlock.wiki/Baba_card.png',
          tag1: 'Cackling',
          tag2: 'Beady',
          tag3: 'Hexing'
        },
         {
          name: 'Bebop',
          image: 'https://cdn.deadlock.wiki/thumb/Bebop_card.png/150px-Bebop_card.png',
          tag1: 'Hook',
          tag2: 'Bomb',
          tag3: 'Punch'
        },
        {
          name: 'Billy',
          image: 'https://cdn.deadlock.wiki/thumb/Billy_card.png/150px-Billy_card.png',
          tag1: 'Punk',
          tag2: 'Chaotic',
          tag3: 'G.O.A.T.'
        },
        {
          name: 'Calico',
          image: 'https://cdn.deadlock.wiki/thumb/Calico_card.png/150px-Calico_card.png',
          tag1: 'Tricksy',
          tag2: 'Slippery',
          tag3: 'Burst Damage'
        },
        {
          name: 'Celeste',
          image: 'https://cdn.deadlock.wiki/thumb/Celeste_card.png/150px-Celeste_card.png',
          tag1: 'Performer',
          tag2: 'Disruptive',
          tag3: 'Dazzling'
        },
        {
          name: 'Deadman Danny',
          image: 'https://cdn.deadlock.wiki/thumb/Deadman_Danny_card.png/150px-Deadman_Danny_card.png',
          tag1: 'Reckless',
          tag2: 'High-Flying',
          tag3: 'Explosive'
        },
        {
          name: 'The Doorman',
          image: 'https://cdn.deadlock.wiki/thumb/The_Doorman_card.png/150px-The_Doorman_card.png',
          tag1: 'Disorienting',
          tag2: 'Map Control',
          tag3: 'Mind Games'
        },
        {
          name: 'Drifter',
          image: 'https://cdn.deadlock.wiki/thumb/Drifter_card.png/150px-Drifter_card.png',
          tag1: 'Stalker',
          tag2: 'Bloodthirsty',
          tag3: 'Cruel'
        },
        {
          name: 'Dynamo',
          image: 'https://cdn.deadlock.wiki/thumb/Dynamo_card.png/150px-Dynamo_card.png',
          tag1: 'Teamplay',
          tag2: 'Initiator',
          tag3: 'Clutch'
        },
        {
          name: 'Dynamo',
          image: 'https://cdn.deadlock.wiki/thumb/Dynamo_card.png/150px-Dynamo_card.png',
          tag1: 'Teamplay',
          tag2: 'Initiator',
          tag3: 'Clutch'
        },
        {
          name: 'Graves',
          image: 'https://cdn.deadlock.wiki/thumb/Graves_card.png/150px-Graves_card.png',
          tag1: 'Morbid',
          tag2: 'Area Denial',
          tag3: 'Necromancer'
        },
        {
          name: 'Grey Talon',
          image: 'https://cdn.deadlock.wiki/thumb/Grey_Talon_card.png/150px-Grey_Talon_card.png',
          tag1: 'Precision',
          tag2: 'Hunter',
          tag3: 'Area Denial'
        },
        {
          name: 'Haze',
          image: 'https://cdn.deadlock.wiki/thumb/Haze_card.png/150px-Haze_card.png',
          tag1: 'Assassin',
          tag2: 'Stealthy',
          tag3: 'Lethal'
        },
        {
          name: 'Haze',
          image: 'https://cdn.deadlock.wiki/thumb/Haze_card.png/150px-Haze_card.png',
          tag1: 'Assassin',
          tag2: 'Stealthy',
          tag3: 'Lethal'
        },
        {
          name: 'Holliday',
          image: 'https://cdn.deadlock.wiki/thumb/Holliday_card.png/150px-Holliday_card.png',
          tag1: 'Crackshot',
          tag2: 'Explosive',
          tag3: 'Apprehender'
        },
        {
          name: 'Infernus',
          image: 'https://cdn.deadlock.wiki/thumb/Infernus_card.png/150px-Infernus_card.png',
          tag1: 'Arsonist',
          tag2: 'Explosive',
          tag3: 'Burn Rubber'
        },
        {
          name: 'Ivy',
          image: 'https://cdn.deadlock.wiki/thumb/Ivy_card.png/150px-Ivy_card.png',
          tag1: 'Team-up',
          tag2: 'Disruptor',
          tag3: 'Rock Solid'
        },
        {
          name: 'Kelvin',
          image: 'https://cdn.deadlock.wiki/thumb/Kelvin_card.png/150px-Kelvin_card.png',
          tag1: 'Protector',
          tag2: 'Explorer',
          tag3: 'Ice Cold'
        },
        {
          name: 'Lady Geist',
          image: 'https://cdn.deadlock.wiki/thumb/Lady_Geist_card.png/150px-Lady_Geist_card.png',
          tag1: 'Lifesteal',
          tag2: 'Self Damage',
          tag3: 'Fatale'
        },
        {
          name: 'Lash',
          image: 'https://cdn.deadlock.wiki/thumb/Lash_card.png/150px-Lash_card.png',
          tag1: 'Intiator',
          tag2: 'High-Flying',
          tag3: 'Arrogant'
        },
        {
          name: 'McGinnis',
          image: 'https://cdn.deadlock.wiki/thumb/McGinnis_card.png/150px-McGinnis_card.png',
          tag1: 'Inventor',
          tag2: 'Support',
          tag3: 'Disruption'
        },
        {
          name: 'Mina',
          image: 'https://cdn.deadlock.wiki/thumb/Mina_card.png/150px-Mina_card.png',
          tag1: 'Harasser',
          tag2: 'Nimble',
          tag3: 'Vexing'
        },
        {
          name: 'Mirage',
          image: 'https://cdn.deadlock.wiki/thumb/Mirage_card.png/150px-Mirage_card.png',
          tag1: 'Bodygaurd',
          tag2: 'Traveller',
          tag3: 'Focused'
        },
        {
          name: 'Mo + Krill',
          image: 'https://cdn.deadlock.wiki/thumb/Mo_%26_Krill_card.png/150px-Mo_%26_Krill_card.png',
          tag1: 'Tag-Team',
          tag2: 'Intiator',
          tag3: 'Burrower'
        },
        {
          name: 'Nurse Harrow',
          image: 'https://cdn.deadlock.wiki/thumb/Nurse_Harrow_card.png/150px-Nurse_Harrow_card.png',
          tag1: 'Strict',
          tag2: 'Terrifying',
          tag3: 'Savior'
        },
        {
          name: 'Paige',
          image: 'https://cdn.deadlock.wiki/thumb/Paige_card.png/150px-Paige_card.png',
          tag1: 'Helpful',
          tag2: 'Protector',
          tag3: 'Booksmart'
        },
        {
          name: 'Paradox',
          image: 'https://cdn.deadlock.wiki/thumb/Paradox_card.png/150px-Paradox_card.png',
          tag1: 'Calculated',
          tag2: 'Disruptor',
          tag3: 'Tactician'
        },
        {
          name: 'Pocket',
          image: 'https://cdn.deadlock.wiki/thumb/Pocket_card.png/150px-Pocket_card.png',
          tag1: 'Trickster',
          tag2: 'Burst Damage',
          tag3: 'Frogs'
        },
        {
          name: 'Rat King',
          image: 'https://cdn.deadlock.wiki/thumb/Rat_King_card.png/150px-Rat_King_card.png',
          tag1: 'Scrappy',
          tag2: 'Regal',
          tag3: 'Tenacious'
        },
        {
          name: 'Rem',
          image: 'https://cdn.deadlock.wiki/thumb/Rem_card.png/150px-Rem_card.png',
          tag1: 'Helpful',
          tag2: 'Tiny',
          tag3: 'zZzzZ'
        },
        {
          name: 'Seven',
          image: 'https://cdn.deadlock.wiki/thumb/Seven_card.png/150px-Seven_card.png',
          tag1: 'High Voltage',
          tag2: 'Merciless',
          tag3: 'Area Denial'
        },
        {
          name: 'Shiv',
          image: 'https://cdn.deadlock.wiki/thumb/Shiv_card.png/150px-Shiv_card.png',
          tag1: 'Rage',
          tag2: 'Bleed',
          tag3: 'Repeat'
        },
        {
          name: 'Silver',
          image: 'https://cdn.deadlock.wiki/thumb/Silver_card.png/150px-Silver_card.png',
          tag1: 'Feral',
          tag2: 'Hot Mess',
          tag3: 'Transformation'
        },
        {
          name: 'Sinclair',
          image: 'https://cdn.deadlock.wiki/thumb/Sinclair_card.png/150px-Sinclair_card.png',
          tag1: 'Trickster',
          tag2: 'CopyCat',
          tag3: 'Versatile'
        },
        {
          name: 'Solomon',
          image: 'https://cdn.deadlock.wiki/thumb/Solomon_card.png/150px-Solomon_card.png',
          tag1: 'Strategist',
          tag2: 'Focused',
          tag3: 'Checkmate'
        },
        {
          name: 'Venator',
          image: 'https://cdn.deadlock.wiki/thumb/Venator_card.png/150px-Venator_card.png',
          tag1: 'Devout',
          tag2: 'Arms Expert',
          tag3: 'Tactical'
        },
        {
          name: 'Victor',
          image: 'https://cdn.deadlock.wiki/thumb/Victor_card.png/150px-Victor_card.png',
          tag1: 'You',
          tag2: "Can't",
          tag3: 'Kill Me'
        },
        {
          name: 'Vindicta',
          image: 'https://cdn.deadlock.wiki/thumb/Vindicta_card.png/150px-Vindicta_card.png',
          tag1: 'Sniper',
          tag2: 'Soaring',
          tag3: 'One Shot Kill'
        },
        {
          name: 'Vindicta',
          image: 'https://cdn.deadlock.wiki/thumb/Violet_card.png/150px-Violet_card.png',
          tag1: 'Ambitious',
          tag2: 'Nimble',
          tag3: 'Creative'
        },
        {
          name: 'Viscous',
          image: 'https://cdn.deadlock.wiki/thumb/Viscous_card.png/150px-Viscous_card.png',
          tag1: 'Evasive',
          tag2: 'Disruptor',
          tag3: 'Gooey'
        },
        {
          name: 'Vyper',
          image: 'https://cdn.deadlock.wiki/thumb/Vyper_card.png/150px-Vyper_card.png',
          tag1: 'Gunner',
          tag2: 'Slipper',
          tag3: 'Rat-a-Tat'
        },
        {
          name: 'Warden',
          image: 'https://cdn.deadlock.wiki/thumb/Warden_card.png/150px-Warden_card.png',
          tag1: 'Initiator',
          tag2: 'Fearless',
          tag3: 'One Man Army'
        },
        {
          name: 'Wraith',
          image: 'https://cdn.deadlock.wiki/thumb/Wraith_card.png/150px-Wraith_card.png',
          tag1: 'Duelist',
          tag2: 'Isolator',
          tag3: 'Telekinetic'
        },
        {
          name: 'Yamato',
          image: 'https://cdn.deadlock.wiki/thumb/Yamato_card.png/150px-Yamato_card.png',
          tag1: 'Relentless',
          tag2: 'Acrobatics',
          tag3: 'Pursuer'
        }
      ];

      const stmt = char_db.prepare("INSERT INTO characters (name, image, tag1, tag2, tag3) VALUES (?, ?, ?, ?, ?)");
      characters.forEach(character => {
        stmt.run(character.name, character.image, character.tag1, character.tag2, character.tag3);
      });
      stmt.finalize();
    }
  });
});

module.exports = char_db;