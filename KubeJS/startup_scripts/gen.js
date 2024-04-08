onEvent('worldgen.remove', event => {

    //Suppression de la génération de minerais
    event.removeOres(ores => {
      ores.blocks = [ 'iceandfire:silver_ore', 
      'iceandfire:sapphire_ore',
      'iceandfire:copper_ore',
      'unifyall:copper_ore',
      'unifyall:quicksilver_ore',]
    })


  })