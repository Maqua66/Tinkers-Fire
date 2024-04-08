onEvent('recipes', event => {
    function tinkerisation(item, fluid){
event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": item
    },
    "result": {
      "fluid": fluid,
      "amount": 2592
    },
    "temperature": 600,
    "time": 200
  })}

  event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": "unifyall:silver_ingot"
    },
    "result": {
      "fluid": "tconstruct:molten_silver",
      "amount": 144
    },
    "temperature": 600,
    "time": 200
  })

  event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": "minecraft:iron_ingot"
    },
    "result": {
      "fluid": "tconstruct:molten_iron",
      "amount": 144
    },
    "temperature": 600,
    "time": 200
  })

// tinkerisation('kubejs:original_tantalum','tinkersarchery:molten_tantalum') //already in kubejs/data/tinkersarchery
tinkerisation('kubejs:original_iron', 'tconstruct:molten_iron')
tinkerisation('kubejs:original_emerald', 'tconstruct:molten_emerald')
tinkerisation('kubejs:original_diamond', 'tconstruct:molten_diamond')

tinkerisation('kubejs:original_aluminium', 'tconstruct:molten_aluminum')
tinkerisation('kubejs:original_inferium', 'mysticalagradditions:molten_inferium')
tinkerisation('kubejs:original_lead', 'tconstruct:molten_lead')
tinkerisation('kubejs:original_nickel', 'tconstruct:molten_nickel')
tinkerisation('kubejs:original_osmium', 'tconstruct:molten_osmium')
tinkerisation('kubejs:original_platinum', 'tconstruct:molten_platinum')
tinkerisation('kubejs:original_silver', 'tconstruct:molten_silver')
tinkerisation('kubejs:original_tin', 'tconstruct:molten_tin')
// tinkerisation('kubejs:original_titanium', 'unifyall:titanium_ingot')
tinkerisation('kubejs:original_tungsten', 'tconstruct:molten_tungsten')
tinkerisation('kubejs:original_zinc', 'tconstruct:molten_zinc')
tinkerisation('kubejs:original_tantalum', 'tinkersarchery:molten_tantalum')
// tinkerisation('kubejs:original_prosperity', 'mysticalagradditions:molten_prosperity')
tinkerisation('kubejs:original_copper', 'tconstruct:molten_copper')

// tinkerisation('kubejs:original_nether_prosperity', 'mysticalagradditions:molten_prosperity')
tinkerisation('kubejs:original_nether_inferium', 'mysticalagradditions:molten_inferium')
tinkerisation('kubejs:original_cobalt', 'tconstruct:molten_cobalt')
tinkerisation('kubejs:original_soulium', 'mysticalagradditions:molten_soulium')

// tinkerisation('kubejs:original_quartz', 'minecraft:quartz')
tinkerisation('kubejs:original_ancient_debris', 'tconstruct:molten_debris')


// tinkerisation('kubejs:original_end_prosperity', 'mysticalagradditions:molten_prosperity')
tinkerisation('kubejs:original_end_inferium', 'mysticalagradditions:molten_inferium')
// tinkerisation('kubejs:original_biotite', 'quark:biotite')












})