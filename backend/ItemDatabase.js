const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'items.db');
const item_db = new sqlite3.Database(dbPath);

item_db.serialize(() => {
  item_db.run(`
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      image TEXT NOT NULL,
      price INTEGER NOT NULL
      type: TEXT NOT NULL
      info TEXT NOT NULL
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  item_db.get("SELECT COUNT(*) as count FROM items", (err, row) => {
    if (err) {
      console.error('Error checking items count:', err);
      return;
    }
    
    if (row.count === 0) {
      console.log('Adding sample items...');
      const items = [
        {
          name: 'Close Quarters',
          image: 'https://cdn.deadlock.wiki/thumb/Close_Quarters.png/144px-Close_Quarters.png',
          price: 800,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Close_Quarters'
        },
        {
          name: 'Extended Magazine',
          image: 'https://cdn.deadlock.wiki/thumb/Extended_Magazine.png/144px-Extended_Magazine.png',
          price: 800,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Extended_Magazine'
        },
        {
          name: 'Headshot Booster',
          image: 'https://cdn.deadlock.wiki/thumb/Headshot_Booster.png/144px-Headshot_Booster.png',
          price: 800,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Headshot_Booster'
        },
        {
          name: 'High-Velocity Rounds',
          image: 'https://cdn.deadlock.wiki/thumb/High-Velocity_Rounds.png/144px-High-Velocity_Rounds.png',
          price: 800,
          type: 'Weapon',
          info: 'https://deadlock.wiki/High-Velocity_Rounds'
        },
        {
          name: 'Monster Rounds',
          image: 'https://cdn.deadlock.wiki/thumb/Monster_Rounds.png/144px-Monster_Rounds.png',
          price: 800,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Monster_Rounds'
        },
        {
          name: 'Rapid Rounds',
          image: 'https://cdn.deadlock.wiki/thumb/Rapid_Rounds.png/144px-Rapid_Rounds.png',
          price: 800,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Rapid_Rounds'
        },
        {
          name: 'Restorative Shot',
          image: 'https://cdn.deadlock.wiki/thumb/Restorative_Shot.png/144px-Restorative_Shot.png',
          price: 800,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Restorative_Shot'
        },
        {
          name: 'Active Reload',
          image: 'https://cdn.deadlock.wiki/thumb/Restorative_Shot.png/144px-Restorative_Shot.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Restorative_Shot'
        },
        {
          name: 'Fleetfoot',
          image: 'https://cdn.deadlock.wiki/thumb/Fleetfoot.png/144px-Fleetfoot.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Fleetfoot'
        },
        {
          name: 'Intensifying Magazine',
          image: 'https://cdn.deadlock.wiki/thumb/Intensifying_Magazine.png/144px-Intensifying_Magazine.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Intensifying_Magazine'
        },
        {
          name: 'Kinetic Dash',
          image: 'https://cdn.deadlock.wiki/thumb/Kinetic_Dash.png/144px-Kinetic_Dash.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Kinetic_Dash'
        },
        {
          name: 'Long Range',
          image: 'https://cdn.deadlock.wiki/thumb/Long_Range.png/144px-Long_Range.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Long_Range'
        },
        {
          name: 'Melee Charge',
          image: 'https://cdn.deadlock.wiki/thumb/Melee_Charge.png/144px-Melee_Charge.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Melee_Charge'
        },
        {
          name: 'Mystic Shot',
          image: 'https://cdn.deadlock.wiki/thumb/Mystic_Shot.png/144px-Mystic_Shot.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Mystic_Shot'
        },
        {
          name: 'Opening Rounds',
          image: 'https://cdn.deadlock.wiki/thumb/Opening_Rounds.png/144px-Opening_Rounds.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Opening_Rounds'
        },
        {
          name: 'Recharging Rush',
          image: 'https://cdn.deadlock.wiki/thumb/Recharging_Rush.png/144px-Recharging_Rush.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Recharing_Rush'
        },
        {
          name: 'Slowing Bullets',
          image: 'https://cdn.deadlock.wiki/thumb/Slowing_Bullets.png/144px-Slowing_Bullets.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Slowing_Bullets'
        },
        {
          name: 'Spirit Shredder',
          image: 'https://cdn.deadlock.wiki/thumb/Spirit_Shredder.png/144px-Spirit_Shredder.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Spirit_Shredder'
        },
        {
          name: 'Split Shot',
          image: 'https://cdn.deadlock.wiki/thumb/Split_Shot.png/144px-Split_Shot.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Split_Shot'
        },
        {
          name: 'Split Shot',
          image: 'https://cdn.deadlock.wiki/thumb/Stalker.png/144px-Stalker.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Stalker'
        },
        {
          name: 'Split Shot',
          image: 'https://cdn.deadlock.wiki/thumb/Swift_Striker.png/144px-Swift_Striker.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Swift_Striker'
        },
        {
          name: 'Titanic Magazinet',
          image: 'https://cdn.deadlock.wiki/thumb/Titanic_Magazine.png/144px-Titanic_Magazine.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Titanic_Magazine'
        },
        {
          name: 'Titanic Magazine',
          image: 'https://cdn.deadlock.wiki/thumb/Titanic_Magazine.png/144px-Titanic_Magazine.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Titanic_Magazine'
        },
        {
          name: 'Weakening Headshot',
          image: 'https://cdn.deadlock.wiki/thumb/Weakening_Headshot.png/144px-Weakening_Headshot.png',
          price: 1600,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Weakening_Headshot'
        },
        {
          name: 'Alchemical Fire',
          image: 'https://cdn.deadlock.wiki/thumb/Alchemical_Fire.png/144px-Alchemical_Fire.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Alchemical_Fire'
        },
        {
          name: 'Ballistic Enchantment',
          image: 'https://cdn.deadlock.wiki/thumb/Ballistic_Enchantment.png/144px-Ballistic_Enchantment.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Ballistic_Enchantment'
        },
        {
          name: 'Berserker',
          image: 'https://cdn.deadlock.wiki/thumb/Berserker.png/144px-Berserker.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Berserker'
        },
        {
          name: 'Blood Tribute',
          image: 'https://cdn.deadlock.wiki/thumb/Blood_Tribute.png/144px-Blood_Tribute.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Blood_Tribute'
        },
        {
          name: 'Burst Fire',
          image: 'https://cdn.deadlock.wiki/thumb/Burst_Fire.png/144px-Burst_Fire.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Burst_Fire'
        },
        {
          name: 'Cultist Sacrifice',
          image: 'https://cdn.deadlock.wiki/thumb/Cultist_Sacrifice.png/144px-Cultist_Sacrifice.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Cultist_Sacrifice'
        },
        {
          name: 'Escalating Resilience',
          image: 'https://cdn.deadlock.wiki/thumb/Escalating_Resilience.png/144px-Escalating_Resilience.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Escalating_Resilience'
        },
        {
          name: 'Express Shot',
          image: 'https://cdn.deadlock.wiki/thumb/Express_Shot.png/144px-Express_Shot.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Express_Shot'
        },
        {
          name: 'Headhunter',
          image: 'https://cdn.deadlock.wiki/thumb/Headhunter.png/144px-Headhunter.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Headhunter'
        },
        {
          name: 'Heroic Aura',
          image: 'https://cdn.deadlock.wiki/thumb/Heroic_Aura.png/144px-Heroic_Aura.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Heroic_Aura'
        },
        {
          name: 'Hollow Point',
          image: 'https://cdn.deadlock.wiki/thumb/Hollow_Point.png/144px-Hollow_Point.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Hollow_Point'
        },
        {
          name: "Hunter's Aura",
          image: 'https://cdn.deadlock.wiki/thumb/Hunter%27s_Aura.png/144px-Hunter%27s_Aura.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Hunter%27s_Aura'
        },
        {
          name: 'Point Blank',
          image: 'https://cdn.deadlock.wiki/thumb/Point_Blank.png/144px-Point_Blank.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Point_Blank'
        },
        {
          name: 'Shadow Weave',
          image: 'https://cdn.deadlock.wiki/thumb/Shadow_Weave.png/144px-Shadow_Weave.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Shadow_Weave'
        },
        {
          name: 'Sharpshooter',
          image: 'https://cdn.deadlock.wiki/thumb/Sharpshooter.png/144px-Sharpshooter.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Sharpshooter'
        },
        {
          name: 'Spirit Rend',
          image: 'https://cdn.deadlock.wiki/thumb/Spirit_Rend.png/144px-Spirit_Rend.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Spirit_Rend'
        },
        {
          name: 'Tesla Bullets',
          image: 'https://cdn.deadlock.wiki/thumb/Tesla_Bullets.png/144px-Tesla_Bullets.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Tesla_Bullets'
        },
        {
          name: 'Toxic Bullets',
          image: 'https://cdn.deadlock.wiki/thumb/Toxic_Bullets.png/144px-Toxic_Bullets.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Toxic_Bullets'
        },
        {
          name: 'Weighted Shots',
          image: 'https://cdn.deadlock.wiki/thumb/Weighted_Shots.png/144px-Weighted_Shots.png',
          price: 3200,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Weighted_Shots'
        },
        {
          name: 'Armor Piercer',
          image: 'https://cdn.deadlock.wiki/thumb/Armor_Piercer.png/144px-Armor_Piercers.png',
          price: 6400,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Armor_Piercer'
        },
        {
          name: 'Capacitor',
          image: 'https://cdn.deadlock.wiki/thumb/Capacitor.png/144px-Capacitor.png',
          price: 6400,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Capacitor'
        },
        {
          name: 'Crippling Headshot',
          image: 'https://cdn.deadlock.wiki/thumb/Crippling_Headshot.png/144px-Crippling_Headshot.png',
          price: 6400,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Crippling_Headshot'
        },
        {
          name: 'Crushing Fists',
          image: 'https://cdn.deadlock.wiki/thumb/Crushing_Fists.png/144px-Crushing_Fists.png',
          price: 6400,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Crushing_Fists'
        },
        {
          name: 'Frenzy',
          image: 'https://cdn.deadlock.wiki/thumb/Frenzy.png/144px-Frenzy.png',
          price: 6400,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Frenzy'
        },
        {
          name: 'Glass Cannon',
          image: 'https://cdn.deadlock.wiki/thumb/Glass_Cannon.png/144px-Glass_Cannon.png',
          price: 6400,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Glass_Cannon'
        },
        {
          name: 'Lucky Shot',
          image: 'https://cdn.deadlock.wiki/thumb/Lucky_Shot.png/144px-Lucky_Shot.png',
          price: 6400,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Lucky_Shot'
        },
        {
          name: 'Ricochet',
          image: 'https://cdn.deadlock.wiki/thumb/Ricochet.png/144px-Ricochet.png',
          price: 6400,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Ricochet'
        },
        {
          name: 'Silencer',
          image: 'https://cdn.deadlock.wiki/thumb/Silencer.png/144px-Silencer.png',
          price: 6400,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Silencer'
        },
        {
          name: 'Spellslinger',
          image: 'https://cdn.deadlock.wiki/thumb/Spellslinger.png/144px-Spellslinger.png',
          price: 6400,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Spellslinger'
        },
        {
          name: 'Spiritual Overflow',
          image: 'https://cdn.deadlock.wiki/thumb/Spiritual_Overflow.png/144px-Spiritual_Overflow.png',
          price: 6400,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Spiritual_Overflow'
        },
        {
          name: 'Haunting Shot',
          image: 'https://cdn.deadlock.wiki/thumb/Haunting_Shot.png/144px-Haunting_Shot.png',
          price: 6400,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Haunting_Shot'
        },
        {
          name: 'Infinite Rounds',
          image: 'https://cdn.deadlock.wiki/thumb/Infinite_Rounds.png/144px-Infinite_Rounds.png',
          price: 6400,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Infinite_Rounds'
        },
        {
          name: 'Runed Gauntlets',
          image: 'https://cdn.deadlock.wiki/thumb/Runed_Gauntlets.png/144px-Runed_Gauntlets.png',
          price: 6400,
          type: 'Weapon',
          info: 'https://deadlock.wiki/Runed_Gauntlets'
        },
        {
          name: 'Extra Charge',
          image: 'https://cdn.deadlock.wiki/thumb/Extra_Charge.png/144px-Extra_Charge.png',
          price: 800,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Extra_Charge'
        },
        {
          name: 'Extra Spirit',
          image: 'https://cdn.deadlock.wiki/thumb/Extra_Spirit.png/144px-Extra_Spirit.png',
          price: 800,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Extra_Spirit'
        },
        {
          name: 'Golden Goose Egg',
          image: 'https://cdn.deadlock.wiki/thumb/Golden_Goose_Egg.png/144px-Golden_Goose_Egg.png',
          price: 800,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Golden_Goose_Egg'
        },
        {
          name: 'Mystic Burst',
          image: 'https://cdn.deadlock.wiki/thumb/Mystic_Burst.png/144px-Mystic_Burst.png',
          price: 800,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Mystic_Burst'
        },
        {
          name: 'Mystic Expansion',
          image: 'https://cdn.deadlock.wiki/thumb/Mystic_Expansion.png/144px-Mystic_Expansion.png',
          price: 800,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Mystic_Expansion'
        },
        {
          name: 'Mystic Regeneration',
          image: 'https://cdn.deadlock.wiki/thumb/Mystic_Regeneration.png/144px-Mystic_Regeneration.png',
          price: 800,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Mystic_Regeneration'
        },
        {
          name: 'Rusted Barrel',
          image: 'https://cdn.deadlock.wiki/thumb/Rusted_Barrel.png/144px-Rusted_Barrel.png',
          price: 800,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Rusted_Barrel'
        },
        {
          name: 'Spirit Strike',
          image: 'https://cdn.deadlock.wiki/thumb/Spirit_Strike.png/144px-Spirit_Strike.png',
          price: 800,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Spirit_Strike'
        },
        {
          name: 'Arcane Surge',
          image: 'https://cdn.deadlock.wiki/thumb/Arcane_Surge.png/144px-Arcane_Surge.png',
          price: 1600,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Arcane_Surge'
        },
        {
          name: 'Bullet Resist Shredder',
          image: 'https://cdn.deadlock.wiki/thumb/Bullet_Resist_Shredder.png/144px-Bullet_Resist_Shredder.png',
          price: 1600,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Bullet_Resist_Shredder'
        },
        {
          name: 'Cold Front',
          image: 'https://cdn.deadlock.wiki/thumb/Cold_Front.png/144px-Cold_Front.png',
          price: 1600,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Cold_Front'
        },
        {
          name: 'Compress Cooldown',
          image: 'https://cdn.deadlock.wiki/thumb/Compress_Cooldown.png/144px-Compress_Cooldown.png',
          price: 1600,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Compress_Cooldown'
        },
        {
          name: 'Duration Extender',
          image: 'https://cdn.deadlock.wiki/thumb/Duration_Extender.png/144px-Duration_Extender.png',
          price: 1600,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Duration_Extender'
        },
        {
          name: 'Improved Spirit',
          image: 'https://cdn.deadlock.wiki/thumb/Improved_Spirit.png/144px-Improved_Spirit.png',
          price: 1600,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Improved_Spirit'
        },
        {
          name: 'Mystic Slow',
          image: 'https://cdn.deadlock.wiki/thumb/Mystic_Slow.png/144px-Mystic_Slow.png',
          price: 1600,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Mystic_Slow'
        },
        {
          name: 'Mystic Vulnerability',
          image: 'https://cdn.deadlock.wiki/thumb/Mystic_Vulnerability.png/144px-Mystic_Vulnerability.png',
          price: 1600,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Mystic_Vulnerability'
        },
        {
          name: 'Quicksilver Reload',
          image: 'https://cdn.deadlock.wiki/thumb/Quicksilver_Reload.png/144px-Quicksilver_Reload.png',
          price: 1600,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Quicksilver_Reload'
        },
        {
          name: 'Slowing Hex',
          image: 'https://cdn.deadlock.wiki/thumb/Slowing_Hex.png/144px-Slowing_Hex.png',
          price: 1600,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Slowing_Hex'
        },
        {
          name: 'Spirit Sap',
          image: 'https://cdn.deadlock.wiki/thumb/Spirit_Sap.png/144px-Spirit_Sap.png',
          price: 1600,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Spirit_Sap'
        },
        {
          name: 'Suppressor',
          image: 'https://cdn.deadlock.wiki/thumb/Suppressor.png/144px-Suppressor.png',
          price: 1600,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Suppressor'
        },
        {
          name: 'Decay',
          image: 'https://cdn.deadlock.wiki/thumb/Decay.png/144px-Decay.png',
          price: 3200,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Decay'
        },
        {
          name: 'Disarming Hex',
          image: 'https://cdn.deadlock.wiki/thumb/Disarming_Hex.png/144px-Disarming_Hex.png',
          price: 3200,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Disarming_Hex'
        },
        {
          name: 'Greater Expansion',
          image: 'https://cdn.deadlock.wiki/thumb/Greater_Expansion.png/144px-Greater_Expansion.png',
          price: 3200,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Greater_Expansion'
        },
        {
          name: 'Knockdown',
          image: 'https://cdn.deadlock.wiki/thumb/Knockdown.png/144px-Knockdown.png',
          price: 3200,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Knockdown'
        },
        {
          name: 'Radiant Regeneration',
          image: 'https://cdn.deadlock.wiki/thumb/Radiant_Regeneration.png/144px-Radiant_Regeneration.png',
          price: 3200,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Radiant_Regeneration'
        },
        {
          name: 'Rapid Recharge',
          image: 'https://cdn.deadlock.wiki/thumb/Rapid_Recharge.png/144px-Rapid_Recharge.png',
          price: 3200,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Rapid_Recharge'
        },
        {
          name: 'Silence Wave',
          image: 'https://cdn.deadlock.wiki/thumb/Silence_Wave.png/144px-Silence_Wave.png',
          price: 3200,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Silence_Wave'
        },
        {
          name: 'Spirit Snatch',
          image: 'https://cdn.deadlock.wiki/thumb/Spirit_Snatch.png/144px-Spirit_Snatch.png',
          price: 3200,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Spirit_Snatch'
        },
        {
          name: 'Superior Duration',
          image: 'https://cdn.deadlock.wiki/thumb/Superior_Duration.png/144px-Superior_Duration.png',
          price: 3200,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Superior_Duration'
        },
        {
          name: 'Surge_of_Power',
          image: 'https://cdn.deadlock.wiki/thumb/Surge_of_Power.png/144px-Surge_of_Power.png',
          price: 3200,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Surge_of_Power'
        },
        {
          name: 'Surge of Power',
          image: 'https://cdn.deadlock.wiki/thumb/Surge_of_Power.png/144px-Surge_of_Power.png',
          price: 3200,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Surge_of_Power'
        },
        {
          name: 'Tankbuster',
          image: 'https://cdn.deadlock.wiki/thumb/Tankbuster.png/144px-Tankbuster.png',
          price: 3200,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Tankbuster'
        },
        {
          name: 'Torment Pulse',
          image: 'https://cdn.deadlock.wiki/thumb/Torment_Pulse.png/144px-Torment_Pulse.png',
          price: 3200,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Torment_Pulse'
        },
        {
          name: 'Torment Pulse',
          image: 'https://cdn.deadlock.wiki/thumb/Torment_Pulse.png/144px-Torment_Pulse.png',
          price: 3200,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Torment_Pulse'
        },
        {
          name: 'Arctic Blast',
          image: 'https://cdn.deadlock.wiki/thumb/Arctic_Blast.png/144px-Arctic_Blast.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Arctic_Blast'
        },
        {
          name: 'Boundless Spirit',
          image: 'https://cdn.deadlock.wiki/thumb/Boundless_Spirit.png/144px-Boundless_Spirit.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Boundless_Spirit'
        },
        {
          name: 'Cursed Relic',
          image: 'https://cdn.deadlock.wiki/thumb/Cursed_Relic.png/144px-Cursed_Relic.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Cursed_Relic'
        },
        {
          name: 'Echo Shard',
          image: 'https://cdn.deadlock.wiki/thumb/Echo_Shard.png/144px-Echo_Shard.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Echo_Shard'
        },
        {
          name: 'Escalating Exposure',
          image: 'https://cdn.deadlock.wiki/thumb/Escalating_Exposure.png/144px-Escalating_Exposure.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Escalating_Exposure'
        },
        {
          name: 'Ethereal Shift',
          image: 'https://cdn.deadlock.wiki/thumb/Ethereal_Shift.png/144px-Ethereal_Shift.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Ethereal_Shift'
        },
        {
          name: 'Focus Lens',
          image: 'https://cdn.deadlock.wiki/thumb/Focus_Lens.png/144px-Focus_Lens.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Focus_Lens'
        },
        {
          name: 'Lightning Scroll',
          image: 'https://cdn.deadlock.wiki/thumb/Lightning_Scroll.png/144px-Lightning_Scroll.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Lightning_Scroll'
        },
        {
          name: 'Magic Carpet',
          image: 'https://cdn.deadlock.wiki/thumb/Magic_Carpet.png/144px-Magic_Carpet.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Magic_Carpet'
        },
        {
          name: 'Mercurial Magnum',
          image: 'https://cdn.deadlock.wiki/thumb/Mercurial_Magnum.png/144px-Mercurial_Magnum.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Mercurial_Magnum'
        },
        {
          name: 'Mystic Reverb',
          image: 'https://cdn.deadlock.wiki/thumb/Mystic_Reverb.png/144px-Mystic_Reverb.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Mystic_Reverb'
        },
        {
          name: 'Refresher',
          image: 'https://cdn.deadlock.wiki/thumb/Refresher.png/144px-Refresher.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Refresher'
        },
        {
          name: 'Scourge',
          image: 'https://cdn.deadlock.wiki/thumb/Scourge.png/144px-Scourge.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Scourge'
        },
        {
          name: 'Spirit Burn',
          image: 'https://cdn.deadlock.wiki/thumb/Spirit_Burn.png/144px-Spirit_Burn.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Spirit_Burn'
        },
        {
          name: 'Transcendent Cooldown',
          image: 'https://cdn.deadlock.wiki/thumb/Transcendent_Cooldown.png/144px-Transcendent_Cooldown.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Transcendent_Cooldown'
        },
        {
          name: 'Vortex_Web',
          image: 'https://cdn.deadlock.wiki/thumb/Vortex_Web.png/144px-Vortex_Web.png',
          price: 6400,
          type: 'Spirit',
          info: 'https://deadlock.wiki/Vortex_Web'
        },
        {
          name: 'Extra_Health',
          image: 'https://cdn.deadlock.wiki/thumb/Extra_Health.png/144px-Extra_Health.png',
          price: 800,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Extra_Health'
        },
        {
          name: 'Extra_Regen',
          image: 'https://cdn.deadlock.wiki/thumb/Extra_Regen.png/144px-Extra_Regen.png',
          price: 800,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Extra_Regen'
        },
        {
          name: 'Extra Stamina',
          image: 'https://cdn.deadlock.wiki/thumb/Extra_Stamina.png/144px-Extra_Stamina.png',
          price: 800,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Extra_Stamina'
        },
        {
          name: 'Grit',
          image: 'https://cdn.deadlock.wiki/thumb/Grit.png/144px-Grit.png',
          price: 800,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Grit'
        },
        {
          name: 'Melee_Lifesteal',
          image: 'https://cdn.deadlock.wiki/thumb/Melee_Lifesteal.png/144px-Melee_Lifesteal.png',
          price: 800,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Melee_Lifesteal'
        },
        {
          name: 'Rebuttal',
          image: 'https://cdn.deadlock.wiki/thumb/Melee_Lifesteal.png/144px-Melee_Lifesteal.png',
          price: 800,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Melee_Lifesteal'
        },
        {
          name: 'Sprint Boots',
          image: 'https://cdn.deadlock.wiki/thumb/Sprint_Boots.png/144px-Sprint_Boots.png',
          price: 800,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Sprint_Boots'
        },
        {
          name: 'Battle Vest',
          image: 'https://cdn.deadlock.wiki/thumb/Battle_Vest.png/144px-Battle_Vest.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Battle_Vest'
        },
        {
          name: 'Bullet Lifesteal',
          image: 'https://cdn.deadlock.wiki/thumb/Bullet_Lifesteal.png/144px-Bullet_Lifesteal.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Bullet_Lifesteal_(item)'
        },
        {
          name: 'Debuff Reducer',
          image: 'https://cdn.deadlock.wiki/thumb/Debuff_Reducer.png/144px-Debuff_Reducer.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Debuff_Reducer'
        },
        {
          name: "Enchanter's Emblem",
          image: 'https://cdn.deadlock.wiki/thumb/Enchanter%27s_Emblem.png/144px-Enchanter%27s_Emblem.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Enchanter%27s_Emblem'
        },
        {
          name: 'Enduring_Speed',
          image: 'https://cdn.deadlock.wiki/thumb/Enduring_Speed.png/144px-Enduring_Speed.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Enduring_Speed'
        },
        {
          name: 'Enduring Speed',
          image: 'https://cdn.deadlock.wiki/thumb/Enduring_Speed.png/144px-Enduring_Speed.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Enduring_Speed'
        },
        {
          name: 'Guardian Ward',
          image: 'https://cdn.deadlock.wiki/thumb/Guardian_Ward.png/144px-Guardian_Ward.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Guardian_Ward'
        },
        {
          name: 'Healbane',
          image: 'https://cdn.deadlock.wiki/thumb/Healbane.png/144px-Healbane.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Healbane'
        },
        {
          name: 'Healing Booster',
          image: 'https://cdn.deadlock.wiki/thumb/Healing_Booster.png/144px-Healing_Booster.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Healing_Booster'
        },
        {
          name: 'Reactive Barrier',
          image: 'https://cdn.deadlock.wiki/thumb/Reactive_Barrier.png/144px-Reactive_Barrier.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Reactive_Barrier'
        },
        {
          name: 'Restorative Locket',
          image: 'https://cdn.deadlock.wiki/thumb/Restorative_Locket.png/144px-Restorative_Locket.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Restorative_Locket'
        },
        {
          name: 'Return Fire',
          image: 'https://cdn.deadlock.wiki/thumb/Return_Fire.png/144px-Return_Fire.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Return_Fire'
        },
        {
          name: 'Spirit Lifesteal',
          image: 'https://cdn.deadlock.wiki/thumb/Spirit_Lifesteal.png/144px-Spirit_Lifesteal.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Spirit_Lifesteal_(item)'
        },
        {
          name: 'Spirit Lifesteal',
          image: 'https://cdn.deadlock.wiki/thumb/Spirit_Lifesteal.png/144px-Spirit_Lifesteal.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Spirit_Lifesteal_(item)'
        },
        {
          name: 'Spirit Shielding',
          image: 'https://cdn.deadlock.wiki/thumb/Spirit_Shielding.png/144px-Spirit_Shielding.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Spirit_Shielding'
        },
        {
          name: 'Trophy Collector',
          image: 'https://cdn.deadlock.wiki/thumb/Trophy_Collector.png/144px-Trophy_Collector.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Trophy_Collector'
        },
        {
          name: 'Weapon_Shielding',
          image: 'https://cdn.deadlock.wiki/thumb/Weapon_Shielding.png/144px-Weapon_Shielding.png',
          price: 1600,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Weapon_Shielding'
        },
        {
          name: 'Bullet Resilience',
          image: 'https://cdn.deadlock.wiki/thumb/Bullet_Resilience.png/144px-Bullet_Resilience.png',
          price: 3200,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Bullet_Resilience'
        },
        {
          name: 'Counterspell',
          image: 'https://cdn.deadlock.wiki/thumb/Counterspell.png/144px-Counterspell.png',
          price: 3200,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Counterspell'
        },
        {
          name: 'Dispel Magic',
          image: 'https://cdn.deadlock.wiki/thumb/Dispel_Magic.png/144px-Dispel_Magic.png',
          price: 3200,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Dispel_Magic'
        },
        {
          name: 'Fortitude',
          image: 'https://cdn.deadlock.wiki/thumb/Fortitude.png/144px-Fortitude.png',
          price: 3200,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Fortitude'
        },
        {
          name: 'Fury_Trance',
          image: 'https://cdn.deadlock.wiki/thumb/Fury_Trance.png/144px-Fury_Trance.png',
          price: 3200,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Fury_Trance'
        },
        {
          name: 'Healing Nova',
          image: 'https://cdn.deadlock.wiki/thumb/Healing_Nova.png/144px-Healing_Nova.png',
          price: 3200,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Healing_Nova'
        },
        {
          name: 'Lifestrike',
          image: 'https://cdn.deadlock.wiki/thumb/Lifestrike.png/144px-Lifestrike.png',
          price: 3200,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Lifestrike'
        },
        {
          name: 'Majestic Leap',
          image: 'https://cdn.deadlock.wiki/thumb/Majestic_Leap.png/144px-Majestic_Leap.png',
          price: 3200,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Majestic_Leap'
        },
        {
          name: 'Metal Skin',
          image: 'https://cdn.deadlock.wiki/thumb/Metal_Skin.png/144px-Metal_Skin.png',
          price: 3200,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Metal_Skin'
        },
        {
          name: 'Rescue Beam',
          image: 'https://cdn.deadlock.wiki/thumb/Rescue_Beam.png/144px-Rescue_Beam.png',
          price: 3200,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Rescue_Beam'
        },
        {
          name: 'Spirit Resilience',
          image: 'https://cdn.deadlock.wiki/thumb/Spirit_Resilience.png/144px-Spirit_Resilience.png',
          price: 3200,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Spirit_Resilience'
        },
        {
          name: 'Stamina Mastery',
          image: 'https://cdn.deadlock.wiki/thumb/Stamina_Mastery.png/144px-Stamina_Mastery.png',
          price: 3200,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Stamina_Mastery'
        },
        {
          name: 'Veil Walker',
          image: 'https://cdn.deadlock.wiki/thumb/Veil_Walker.png/144px-Veil_Walker.png',
          price: 3200,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Veil_Walker'
        },
        {
          name: 'Warp_Stone',
          image: 'https://cdn.deadlock.wiki/thumb/Warp_Stone.png/144px-Warp_Stone.png',
          price: 3200,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Warp_Stone'
        },
        {
          name: 'Cheat Death',
          image: 'https://cdn.deadlock.wiki/thumb/Cheat_Death.png/144px-Cheat_Death.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Cheat_Death'
        },
        {
          name: 'Colossus',
          image: 'https://cdn.deadlock.wiki/thumb/Colossus.png/144px-Colossus.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Colossus'
        },
        {
          name: 'Divine_Barrier',
          image: 'https://cdn.deadlock.wiki/thumb/Divine_Barrier.png/144px-Divine_Barrier.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Divine_Barrier'
        },
        {
          name: "Diviner's Kevlar",
          image: 'https://cdn.deadlock.wiki/thumb/Diviner%27s_Kevlar.png/144px-Diviner%27s_Kevlar.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Diviner%27s_Kevlar'
        },
        {
          name: 'Healing_Tempo',
          image: 'https://cdn.deadlock.wiki/thumb/Healing_Tempo.png/144px-Healing_Tempo.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Healing_Tempo'
        },
        {
          name: 'Indomitable',
          image: 'https://cdn.deadlock.wiki/thumb/Indomitable.png/144px-Indomitable.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Indomitable'
        },
        {
          name: 'Infuser',
          image: 'https://cdn.deadlock.wiki/thumb/Infuser.png/144px-Infuser.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Infuser'
        },
        {
          name: 'Inhibitor',
          image: 'https://cdn.deadlock.wiki/thumb/Inhibitor.png/144px-Inhibitor.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Inhibitor'
        },
        {
          name: 'Juggernaut',
          image: 'https://cdn.deadlock.wiki/thumb/Juggernaut.png/144px-Juggernaut.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Juggernaut'
        },
        {
          name: 'Leech',
          image: 'https://cdn.deadlock.wiki/thumb/Leech.png/144px-Leech.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Leech'
        },
        {
          name: 'Phantom Strike',
          image: 'https://cdn.deadlock.wiki/thumb/Phantom_Strike.png/144px-Phantom_Strike.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Phantom_Strike'
        },
        {
          name: 'Plated Armor',
          image: 'https://cdn.deadlock.wiki/thumb/Plated_Armor.png/144px-Plated_Armor.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Plated_Armor'
        },
        {
          name: 'Siphon Bullets',
          image: 'https://cdn.deadlock.wiki/thumb/Siphon_Bullets.png/144px-Siphon_Bullets.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Siphon_Bullets'
        },
        {
          name: 'Spellbreaker',
          image: 'https://cdn.deadlock.wiki/thumb/Spellbreaker.png/144px-Spellbreaker.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Spellbreaker'
        },
        {
          name: 'Unstoppable',
          image: 'https://cdn.deadlock.wiki/thumb/Unstoppable.png/144px-Unstoppable.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Unstoppable'
        },
        {
          name: 'Vampiric Burst',
          image: 'https://cdn.deadlock.wiki/thumb/Vampiric_Burst.png/144px-Vampiric_Burst.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Vampiric_Burst'
        },
        {
          name: 'Witchmail',
          image: 'https://cdn.deadlock.wiki/thumb/Witchmail.png/144px-Witchmail.png',
          price: 6400,
          type: 'Vitality',
          info: 'https://deadlock.wiki/Witchmail'
        },
      ];

      const stmt = item_db.prepare("INSERT INTO items (name, image, price, type, info) VALUES (?, ?, ?, ?, ?)");
      items.forEach(item => {
        stmt.run(item.name, item.image, item.price, item.type, item.info);
      });
      stmt.finalize();
    }
  });
});

module.exports = item_db;