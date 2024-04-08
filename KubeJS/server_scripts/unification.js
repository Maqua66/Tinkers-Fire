// ITEM TAGS
ServerEvents.tags('item', event => {

    event.removeAllTagsFrom(['iceandfire:silver_ingot', 'iceandfire:silver_nugget', 'iceandfire:copper_nugget', 'unifyall:raw_copper', 'iceandfire:copper_pile', 'unifyall:rod_copper', 'unifyall:copper_nugget', 'unifyall:copper_gear', 'iceandfire:copper_ingot', 'unifyall:copper_ingot', 'unifyall:copper_dust', 'unifyall:copper_plate','iceandfire:sapphire_gem'])
    event.remove('forge:ingots', 
    ['iceandfire:silver_ingot', 
    'unifyall:copper_ingot',
    'unifyall:quick_silver_ingot',
    'unifyall:gunmetal_ingot',
    'unifyall:cast_iron_ingot',
    'unifyall:rose_gold_ingot',
    'unifyall:white_gold_ingot',
    'unifyall:sterling_silver_ingot',
    'iceandfire:copper_ingot'])
    event.removeAllTagsFrom('iceandfire:silver_ingot') 
    event.removeAllTagsFrom('unifyall:copper_ingot')
    event.removeAllTagsFrom('unifyall:quick_silver_ingot')
    event.removeAllTagsFrom('unifyall:gunmetal_ingot')
    event.removeAllTagsFrom('unifyall:cast_iron_ingot')
    event.removeAllTagsFrom('unifyall:rose_gold_ingot')
    event.removeAllTagsFrom('unifyall:white_gold_ingot')
    event.removeAllTagsFrom('unifyall:sterling_silver_ingot')
    event.removeAllTagsFrom('iceandfire:copper_ingot')

    event.remove('forge:ingots/copper', ['unifyall:copper_ingot', 'iceandfire:copper_ingot','unifyall:quick_silver_ingot','unifyall:sterling_silver_ingot','unifyall:rose_gold','unifyall:cast_iron','unifyall:gunmetal','unifyall:white_gold'])
    event.removeAllTagsFrom(['mysticalagriculture:supremium_hoe', 'mysticalagradditions:supremium_paxel', Item.of('mysticalagriculture:imperium_hoe', '{Damage:0}'), 'mysticalagriculture:supremium_staff', 'mysticalagriculture:imperium_staff', 'mysticalagriculture:tertium_staff', 'mysticalagriculture:prudentium_staff', 'mysticalagriculture:inferium_staff', Item.of('mysticalagriculture:supremium_boots', '{Damage:0}'), Item.of('mysticalagriculture:imperium_boots', '{Damage:0}'), Item.of('mysticalagriculture:tertium_boots', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_boots', '{Damage:0}'), Item.of('mysticalagriculture:inferium_boots', '{Damage:0}'), Item.of('mysticalagriculture:supremium_leggings', '{Damage:0}'), Item.of('mysticalagriculture:imperium_leggings', '{Damage:0}'), Item.of('mysticalagriculture:tertium_leggings', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_leggings', '{Damage:0}'), Item.of('mysticalagriculture:inferium_leggings', '{Damage:0}'), Item.of('mysticalagriculture:supremium_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:imperium_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:tertium_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:inferium_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:supremium_helmet', '{Damage:0}'), Item.of('mysticalagriculture:imperium_helmet', '{Damage:0}'), Item.of('mysticalagriculture:tertium_helmet', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_helmet', '{Damage:0}'), Item.of('mysticalagriculture:inferium_helmet', '{Damage:0}'), Item.of('mysticalagradditions:inferium_paxel', '{Damage:0}'), Item.of('mysticalagriculture:inferium_hoe', '{Damage:0}'), Item.of('mysticalagriculture:inferium_hoe', '{Damage:0}'), Item.of('mysticalagradditions:prudentium_paxel', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_hoe', '{Damage:0}'), Item.of('mysticalagradditions:tertium_paxel', '{Damage:0}'), Item.of('mysticalagriculture:tertium_hoe', '{Damage:0}'), Item.of('mysticalagradditions:imperium_paxel', '{Damage:0}')])
    event.removeAllTagsFrom(['aquaculture:neptunium_block', 'aquaculture:neptunium_ingot', 'aquaculture:neptunium_nugget', Item.of('mysticalagriculture:imperium_boots', '{Damage:0}'), Item.of('mysticalagriculture:inferium_sword', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_sword', '{Damage:0}'), Item.of('mysticalagriculture:tertium_sword', '{Damage:0}'), Item.of('mysticalagriculture:imperium_sword', '{Damage:0}'), 'mysticalagriculture:supremium_sword', Item.of('mysticalagriculture:inferium_axe', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_axe', '{Damage:0}'), Item.of('mysticalagriculture:tertium_axe', '{Damage:0}'), Item.of('mysticalagriculture:imperium_axe', '{Damage:0}'), Item.of('mysticalagriculture:inferium_shovel', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_shovel', '{Damage:0}'), Item.of('mysticalagriculture:tertium_shovel', '{Damage:0}'), Item.of('mysticalagriculture:imperium_shovel', '{Damage:0}'), 'mysticalagriculture:supremium_shovel', Item.of('mysticalagriculture:inferium_pickaxe', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_pickaxe', '{Damage:0}'), Item.of('mysticalagriculture:tertium_pickaxe', '{Damage:0}'), Item.of('mysticalagriculture:imperium_pickaxe', '{Damage:0}')])
    event.remove('forge:ingots/silver', 'iceandfire:silver_ingot')
    event.remove('forge:ingots/quicksilver', 'unifyall:quick_silver_ingot')
    event.remove('forge:ingots/gunmetal', 'unifyall:gunmetal_ingot')
    event.remove('forge:ingots/cast_iron', 'unifyall:cast_iron_ingot')
    event.remove('forge:ingots/rose_gold', 'unifyall:rose_gold_ingot')

    event.remove('forge:tools/axes', 'minecraft:wooden_axe')
    event.removeAllTagsFrom([Item.of('minecraft:netherite_boots', '{Damage:0}'), Item.of('minecraft:netherite_leggings', '{Damage:0}'), Item.of('minecraft:netherite_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:soulium_dagger', '{Damage:0}'), Item.of('mysticalagriculture:passive_soulium_dagger', '{Damage:0}'), Item.of('mysticalagriculture:hostile_soulium_dagger', '{Damage:0}'), 'mysticalagriculture:creative_soulium_dagger', Item.of('minecraft:netherite_pickaxe', '{Damage:0}'), Item.of('minecraft:diamond_sword', '{Damage:0}'), Item.of('minecraft:diamond_shovel', '{Damage:0}'), Item.of('minecraft:diamond_pickaxe', '{Damage:0}'), Item.of('minecraft:diamond_axe', '{Damage:0}'), Item.of('minecraft:iron_boots', '{Damage:0}'), Item.of('minecraft:iron_shovel', '{Damage:0}'), Item.of('minecraft:iron_helmet', '{Damage:0}'), Item.of('minecraft:iron_pickaxe', '{Damage:0}'), Item.of('minecraft:netherite_axe', '{Damage:0}'), Item.of('minecraft:netherite_shovel', '{Damage:0}'), Item.of('minecraft:netherite_sword', '{Damage:0}'), Item.of('minecraft:diamond_helmet', '{Damage:0}'), Item.of('minecraft:diamond_hoe', '{Damage:0}'), Item.of('minecraft:diamond_chestplate', '{Damage:0}'), Item.of('minecraft:iron_helmet', '{Damage:0}'), Item.of('minecraft:iron_hoe', '{Damage:0}'), Item.of('minecraft:iron_axe', '{Damage:0}'), Item.of('minecraft:netherite_helmet', '{Damage:0}'), Item.of('minecraft:netherite_hoe', '{Damage:0}'), Item.of('minecraft:iron_sword', '{Damage:0}'), Item.of('minecraft:diamond_boots', '{Damage:0}'), Item.of('minecraft:diamond_leggings', '{Damage:0}'), Item.of('minecraft:iron_chestplate', '{Damage:0}'), Item.of('minecraft:iron_leggings', '{Damage:0}'), Item.of('aquaculture:diamond_fillet_knife', '{Damage:0}'), Item.of('aquaculture:iron_fillet_knife', '{Damage:0}')])
    

    event.add('forge:ingots/copper', 'tconstruct:copper_ingot')
    event.add('forge:ingots/silver', 'unifyall:silver_ingot')


  
  
  })
  
  // BLOCK TAGS
ServerEvents.tags('block', event => {

    event.removeAllTagsFrom(['iceandfire:silver_ore', 'iceandfire:silver_block', 'iceandfire:silver_pile', 'iceandfire:copper_block', 'unifyall:raw_block_copper','unifyall:copper_ore', 'unifyall:cut_copper_block', 'iceandfire:copper_pile','unifyall:copper_block', 'iceandfire:copper_ore', 'iceandfire:sapphire_ore', 'iceandfire:sapphire_block'])
    
    })


//REMOVE
onEvent('recipes', event => {
    // function removeAll(objet){
    //     event.remove({output: objet})
    //     event.remove({input: objet})
    //   }
    event.remove({output:['iceandfire:silver_ore', 'iceandfire:silver_block', 'iceandfire:silver_ingot', 'iceandfire:silver_nugget', 'iceandfire:silver_pile', 'iceandfire:copper_block', 'iceandfire:copper_nugget', 'unifyall:raw_block_copper', 'unifyall:raw_copper', 'unifyall:copper_ore', 'unifyall:cut_copper_block', 'iceandfire:copper_pile', 'unifyall:rod_copper', 'unifyall:copper_block', 'unifyall:copper_nugget', 'unifyall:copper_gear', 'iceandfire:copper_ore', 'iceandfire:copper_ingot', 'unifyall:copper_ingot', 'unifyall:copper_dust', 'unifyall:copper_plate','iceandfire:sapphire_gem', 'iceandfire:sapphire_ore', 'iceandfire:sapphire_block']})
    event.remove({output:['mysticalagriculture:supremium_hoe', 'mysticalagradditions:supremium_paxel', Item.of('mysticalagriculture:imperium_hoe', '{Damage:0}'), 'mysticalagriculture:supremium_staff', 'mysticalagriculture:imperium_staff', 'mysticalagriculture:tertium_staff', 'mysticalagriculture:prudentium_staff', 'mysticalagriculture:inferium_staff', Item.of('mysticalagriculture:supremium_boots', '{Damage:0}'), Item.of('mysticalagriculture:imperium_boots', '{Damage:0}'), Item.of('mysticalagriculture:tertium_boots', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_boots', '{Damage:0}'), Item.of('mysticalagriculture:inferium_boots', '{Damage:0}'), Item.of('mysticalagriculture:supremium_leggings', '{Damage:0}'), Item.of('mysticalagriculture:imperium_leggings', '{Damage:0}'), Item.of('mysticalagriculture:tertium_leggings', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_leggings', '{Damage:0}'), Item.of('mysticalagriculture:inferium_leggings', '{Damage:0}'), Item.of('mysticalagriculture:supremium_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:imperium_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:tertium_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:inferium_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:supremium_helmet', '{Damage:0}'), Item.of('mysticalagriculture:imperium_helmet', '{Damage:0}'), Item.of('mysticalagriculture:tertium_helmet', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_helmet', '{Damage:0}'), Item.of('mysticalagriculture:inferium_helmet', '{Damage:0}'), Item.of('mysticalagradditions:inferium_paxel', '{Damage:0}'), Item.of('mysticalagriculture:inferium_hoe', '{Damage:0}'), Item.of('mysticalagriculture:inferium_hoe', '{Damage:0}'), Item.of('mysticalagradditions:prudentium_paxel', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_hoe', '{Damage:0}'), Item.of('mysticalagradditions:tertium_paxel', '{Damage:0}'), Item.of('mysticalagriculture:tertium_hoe', '{Damage:0}'), Item.of('mysticalagradditions:imperium_paxel', '{Damage:0}')]})
    event.remove({output:[Item.of('mysticalagriculture:imperium_boots', '{Damage:0}'), Item.of('mysticalagriculture:inferium_sword', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_sword', '{Damage:0}'), Item.of('mysticalagriculture:tertium_sword', '{Damage:0}'), Item.of('mysticalagriculture:imperium_sword', '{Damage:0}'), 'mysticalagriculture:supremium_sword', Item.of('mysticalagriculture:inferium_axe', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_axe', '{Damage:0}'), Item.of('mysticalagriculture:tertium_axe', '{Damage:0}'), Item.of('mysticalagriculture:imperium_axe', '{Damage:0}'), Item.of('mysticalagriculture:inferium_shovel', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_shovel', '{Damage:0}'), Item.of('mysticalagriculture:tertium_shovel', '{Damage:0}'), Item.of('mysticalagriculture:imperium_shovel', '{Damage:0}'), 'mysticalagriculture:supremium_shovel', Item.of('mysticalagriculture:inferium_pickaxe', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_pickaxe', '{Damage:0}'), Item.of('mysticalagriculture:tertium_pickaxe', '{Damage:0}'), Item.of('mysticalagriculture:imperium_pickaxe', '{Damage:0}')]})
    
    event.remove({output:['unifyall:recipe_rose_gold_block', 
    'unifyall:recipe_rose_gold_nugget', 
    'unifyall:recipe_rod_rose_gold', 
    'unifyall:recipe_raw_block_rose_gold', 
    'unifyall:recipe_rose_gold_dust', 
    'unifyall:recipe_rose_gold_plate', 
    'unifyall:recipe_raw_rose_gold', 
    'unifyall:recipe_rose_gold_gear', 
    'unifyall:recipe_rose_gold_ingot']})

    event.remove({output:['unifyall:recipe_quick_silver_block', 
    'unifyall:recipe_quick_silver_nugget', 
    'unifyall:recipe_rod_quick_silver', 
    'unifyall:recipe_raw_block_quick_silver', 
    'unifyall:recipe_quick_silver_dust', 
    'unifyall:recipe_quick_silver_plate', 
    'unifyall:recipe_raw_quick_silver', 
    'unifyall:recipe_quick_silver_gear', 
    'unifyall:recipe_quick_silver_ingot']})

    event.remove({output:['unifyall:recipe_sterling_silver_block', 
    'unifyall:recipe_sterling_silver_nugget', 
    'unifyall:recipe_rod_sterling_silver', 
    'unifyall:recipe_raw_block_sterling_silver', 
    'unifyall:recipe_sterling_silver_dust', 
    'unifyall:recipe_sterling_silver_plate', 
    'unifyall:recipe_raw_sterling_silver', 
    'unifyall:recipe_sterling_silver_gear', 
    'unifyall:recipe_sterling_silver_ingot']})

    event.remove({output:['unifyall:recipe_cast_iron_block', 
    'unifyall:recipe_cast_iron_nugget', 
    'unifyall:recipe_rod_cast_iron', 
    'unifyall:recipe_raw_block_cast_iron', 
    'unifyall:recipe_cast_iron_dust', 
    'unifyall:recipe_cast_iron_plate', 
    'unifyall:recipe_raw_cast_iron', 
    'unifyall:recipe_cast_iron_gear', 
    'unifyall:recipe_cast_iron_ingot']})

    event.remove({output:['unifyall:recipe_gunmetal_block', 
    'unifyall:recipe_gunmetal_nugget', 
    'unifyall:recipe_rod_gunmetal', 
    'unifyall:recipe_raw_block_gunmetal', 
    'unifyall:recipe_gunmetal_dust', 
    'unifyall:recipe_gunmetal_plate', 
    'unifyall:recipe_raw_gunmetal', 
    'unifyall:recipe_gunmetal_gear', 
    'unifyall:recipe_gunmetal_ingot']})

    event.remove({output:['unifyall:recipe_white_gold_block', 
    'unifyall:recipe_white_gold_nugget', 
    'unifyall:recipe_rod_white_gold', 
    'unifyall:recipe_raw_block_white_gold', 
    'unifyall:recipe_white_gold_dust', 
    'unifyall:recipe_white_gold_plate', 
    'unifyall:recipe_raw_white_gold', 
    'unifyall:recipe_white_gold_gear', 
    'unifyall:recipe_white_gold_ingot']})

    event.remove({input:['iceandfire:silver_ore', 'iceandfire:silver_block', 'iceandfire:silver_ingot', 'iceandfire:silver_nugget', 'iceandfire:silver_pile', 'iceandfire:copper_block', 'iceandfire:copper_nugget', 'unifyall:raw_block_copper', 'unifyall:raw_copper', 'unifyall:copper_ore', 'unifyall:cut_copper_block', 'iceandfire:copper_pile', 'unifyall:rod_copper', 'unifyall:copper_block', 'unifyall:copper_nugget', 'unifyall:copper_gear', 'iceandfire:copper_ore', 'iceandfire:copper_ingot', 'unifyall:copper_ingot', 'unifyall:copper_dust', 'unifyall:copper_plate','iceandfire:sapphire_gem', 'iceandfire:sapphire_ore', 'iceandfire:sapphire_block']})
    event.remove({input:['mysticalagriculture:supremium_hoe', 'mysticalagradditions:supremium_paxel', Item.of('mysticalagriculture:imperium_hoe', '{Damage:0}'), 'mysticalagriculture:supremium_staff', 'mysticalagriculture:imperium_staff', 'mysticalagriculture:tertium_staff', 'mysticalagriculture:prudentium_staff', 'mysticalagriculture:inferium_staff', Item.of('mysticalagriculture:supremium_boots', '{Damage:0}'), Item.of('mysticalagriculture:imperium_boots', '{Damage:0}'), Item.of('mysticalagriculture:tertium_boots', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_boots', '{Damage:0}'), Item.of('mysticalagriculture:inferium_boots', '{Damage:0}'), Item.of('mysticalagriculture:supremium_leggings', '{Damage:0}'), Item.of('mysticalagriculture:imperium_leggings', '{Damage:0}'), Item.of('mysticalagriculture:tertium_leggings', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_leggings', '{Damage:0}'), Item.of('mysticalagriculture:inferium_leggings', '{Damage:0}'), Item.of('mysticalagriculture:supremium_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:imperium_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:tertium_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:inferium_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:supremium_helmet', '{Damage:0}'), Item.of('mysticalagriculture:imperium_helmet', '{Damage:0}'), Item.of('mysticalagriculture:tertium_helmet', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_helmet', '{Damage:0}'), Item.of('mysticalagriculture:inferium_helmet', '{Damage:0}'), Item.of('mysticalagradditions:inferium_paxel', '{Damage:0}'), Item.of('mysticalagriculture:inferium_hoe', '{Damage:0}'), Item.of('mysticalagriculture:inferium_hoe', '{Damage:0}'), Item.of('mysticalagradditions:prudentium_paxel', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_hoe', '{Damage:0}'), Item.of('mysticalagradditions:tertium_paxel', '{Damage:0}'), Item.of('mysticalagriculture:tertium_hoe', '{Damage:0}'), Item.of('mysticalagradditions:imperium_paxel', '{Damage:0}')]})
    event.remove({input:[Item.of('mysticalagriculture:imperium_boots', '{Damage:0}'), Item.of('mysticalagriculture:inferium_sword', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_sword', '{Damage:0}'), Item.of('mysticalagriculture:tertium_sword', '{Damage:0}'), Item.of('mysticalagriculture:imperium_sword', '{Damage:0}'), 'mysticalagriculture:supremium_sword', Item.of('mysticalagriculture:inferium_axe', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_axe', '{Damage:0}'), Item.of('mysticalagriculture:tertium_axe', '{Damage:0}'), Item.of('mysticalagriculture:imperium_axe', '{Damage:0}'), Item.of('mysticalagriculture:inferium_shovel', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_shovel', '{Damage:0}'), Item.of('mysticalagriculture:tertium_shovel', '{Damage:0}'), Item.of('mysticalagriculture:imperium_shovel', '{Damage:0}'), 'mysticalagriculture:supremium_shovel', Item.of('mysticalagriculture:inferium_pickaxe', '{Damage:0}'), Item.of('mysticalagriculture:prudentium_pickaxe', '{Damage:0}'), Item.of('mysticalagriculture:tertium_pickaxe', '{Damage:0}'), Item.of('mysticalagriculture:imperium_pickaxe', '{Damage:0}')]})
    
    event.remove({input:['unifyall:recipe_rose_gold_block', 
    'unifyall:recipe_rose_gold_nugget', 
    'unifyall:recipe_rod_rose_gold', 
    'unifyall:recipe_raw_block_rose_gold', 
    'unifyall:recipe_rose_gold_dust', 
    'unifyall:recipe_rose_gold_plate', 
    'unifyall:recipe_raw_rose_gold', 
    'unifyall:recipe_rose_gold_gear', 
    'unifyall:recipe_rose_gold_ingot']})

    event.remove({input:['unifyall:recipe_quick_silver_block', 
    'unifyall:recipe_quick_silver_nugget', 
    'unifyall:recipe_rod_quick_silver', 
    'unifyall:recipe_raw_block_quick_silver', 
    'unifyall:recipe_quick_silver_dust', 
    'unifyall:recipe_quick_silver_plate', 
    'unifyall:recipe_raw_quick_silver', 
    'unifyall:recipe_quick_silver_gear', 
    'unifyall:recipe_quick_silver_ingot']})

    event.remove({input:['unifyall:recipe_sterling_silver_block', 
    'unifyall:recipe_sterling_silver_nugget', 
    'unifyall:recipe_rod_sterling_silver', 
    'unifyall:recipe_raw_block_sterling_silver', 
    'unifyall:recipe_sterling_silver_dust', 
    'unifyall:recipe_sterling_silver_plate', 
    'unifyall:recipe_raw_sterling_silver', 
    'unifyall:recipe_sterling_silver_gear', 
    'unifyall:recipe_sterling_silver_ingot']})

    event.remove({input:['unifyall:recipe_cast_iron_block', 
    'unifyall:recipe_cast_iron_nugget', 
    'unifyall:recipe_rod_cast_iron', 
    'unifyall:recipe_raw_block_cast_iron', 
    'unifyall:recipe_cast_iron_dust', 
    'unifyall:recipe_cast_iron_plate', 
    'unifyall:recipe_raw_cast_iron', 
    'unifyall:recipe_cast_iron_gear', 
    'unifyall:recipe_cast_iron_ingot']})

    event.remove({input:['unifyall:recipe_gunmetal_block', 
    'unifyall:recipe_gunmetal_nugget', 
    'unifyall:recipe_rod_gunmetal', 
    'unifyall:recipe_raw_block_gunmetal', 
    'unifyall:recipe_gunmetal_dust', 
    'unifyall:recipe_gunmetal_plate', 
    'unifyall:recipe_raw_gunmetal', 
    'unifyall:recipe_gunmetal_gear', 
    'unifyall:recipe_gunmetal_ingot']})

    event.remove({input:['unifyall:recipe_white_gold_block', 
    'unifyall:recipe_white_gold_nugget', 
    'unifyall:recipe_rod_white_gold', 
    'unifyall:recipe_raw_block_white_gold', 
    'unifyall:recipe_white_gold_dust', 
    'unifyall:recipe_white_gold_plate', 
    'unifyall:recipe_raw_white_gold', 
    'unifyall:recipe_white_gold_gear', 
    'unifyall:recipe_white_gold_ingot']})
    



    event.remove({input:[Item.of('minecraft:netherite_boots', '{Damage:0}'), Item.of('minecraft:netherite_leggings', '{Damage:0}'), Item.of('minecraft:netherite_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:soulium_dagger', '{Damage:0}'), Item.of('mysticalagriculture:passive_soulium_dagger', '{Damage:0}'), Item.of('mysticalagriculture:hostile_soulium_dagger', '{Damage:0}'), 'mysticalagriculture:creative_soulium_dagger', Item.of('minecraft:netherite_pickaxe', '{Damage:0}'), Item.of('minecraft:diamond_sword', '{Damage:0}'), Item.of('minecraft:diamond_shovel', '{Damage:0}'), Item.of('minecraft:diamond_pickaxe', '{Damage:0}'), Item.of('minecraft:diamond_axe', '{Damage:0}'), Item.of('minecraft:iron_boots', '{Damage:0}'), Item.of('minecraft:iron_shovel', '{Damage:0}'), Item.of('minecraft:iron_helmet', '{Damage:0}'), Item.of('minecraft:iron_pickaxe', '{Damage:0}'), Item.of('minecraft:netherite_axe', '{Damage:0}'), Item.of('minecraft:netherite_shovel', '{Damage:0}'), Item.of('minecraft:netherite_sword', '{Damage:0}'), Item.of('minecraft:diamond_helmet', '{Damage:0}'), Item.of('minecraft:diamond_hoe', '{Damage:0}'), Item.of('minecraft:diamond_chestplate', '{Damage:0}'), Item.of('minecraft:iron_helmet', '{Damage:0}'), Item.of('minecraft:iron_hoe', '{Damage:0}'), Item.of('minecraft:iron_axe', '{Damage:0}'), Item.of('minecraft:netherite_helmet', '{Damage:0}'), Item.of('minecraft:netherite_hoe', '{Damage:0}'), Item.of('minecraft:iron_sword', '{Damage:0}'), Item.of('minecraft:diamond_boots', '{Damage:0}'), Item.of('minecraft:diamond_leggings', '{Damage:0}'), Item.of('minecraft:iron_chestplate', '{Damage:0}'), Item.of('minecraft:iron_leggings', '{Damage:0}'), Item.of('aquaculture:diamond_fillet_knife', '{Damage:0}'), Item.of('aquaculture:iron_fillet_knife', '{Damage:0}')]})
    event.remove({output:[Item.of('minecraft:netherite_boots', '{Damage:0}'), Item.of('minecraft:netherite_leggings', '{Damage:0}'), Item.of('minecraft:netherite_chestplate', '{Damage:0}'), Item.of('mysticalagriculture:soulium_dagger', '{Damage:0}'), Item.of('mysticalagriculture:passive_soulium_dagger', '{Damage:0}'), Item.of('mysticalagriculture:hostile_soulium_dagger', '{Damage:0}'), 'mysticalagriculture:creative_soulium_dagger', Item.of('minecraft:netherite_pickaxe', '{Damage:0}'), Item.of('minecraft:diamond_sword', '{Damage:0}'), Item.of('minecraft:diamond_shovel', '{Damage:0}'), Item.of('minecraft:diamond_pickaxe', '{Damage:0}'), Item.of('minecraft:diamond_axe', '{Damage:0}'), Item.of('minecraft:iron_boots', '{Damage:0}'), Item.of('minecraft:iron_shovel', '{Damage:0}'), Item.of('minecraft:iron_helmet', '{Damage:0}'), Item.of('minecraft:iron_pickaxe', '{Damage:0}'), Item.of('minecraft:netherite_axe', '{Damage:0}'), Item.of('minecraft:netherite_shovel', '{Damage:0}'), Item.of('minecraft:netherite_sword', '{Damage:0}'), Item.of('minecraft:diamond_helmet', '{Damage:0}'), Item.of('minecraft:diamond_hoe', '{Damage:0}'), Item.of('minecraft:diamond_chestplate', '{Damage:0}'), Item.of('minecraft:iron_helmet', '{Damage:0}'), Item.of('minecraft:iron_hoe', '{Damage:0}'), Item.of('minecraft:iron_axe', '{Damage:0}'), Item.of('minecraft:netherite_helmet', '{Damage:0}'), Item.of('minecraft:netherite_hoe', '{Damage:0}'), Item.of('minecraft:iron_sword', '{Damage:0}'), Item.of('minecraft:diamond_boots', '{Damage:0}'), Item.of('minecraft:diamond_leggings', '{Damage:0}'), Item.of('minecraft:iron_chestplate', '{Damage:0}'), Item.of('minecraft:iron_leggings', '{Damage:0}'), Item.of('aquaculture:diamond_fillet_knife', '{Damage:0}'), Item.of('aquaculture:iron_fillet_knife', '{Damage:0}')]})
    event.remove({ id:'mysticalagriculture:essence/common/copper_ingot' })
    event.remove({ id:'minecraft:iron_sword' })
    event.remove({ id:'minecraft:iron_shovel' })
    event.remove({ id:'minecraft:iron_pickaxe' })
    event.remove({ id:'minecraft:iron_axe' })
    event.remove({ id:'minecraft:iron_hoe' })
    event.remove({ id:'minecraft:iron_helmet' })
    event.remove({ id:'minecraft:iron_chestplate' })
    event.remove({ id:'minecraft:iron_leggings' })
    event.remove({ id:'minecraft:iron_boots' })

    event.remove({ id:'minecraft:netherite_sword_smithing' })
    event.remove({ id:'minecraft:netherite_shovel_smithing' })
    event.remove({ id:'minecraft:netherite_pickaxe_smithing' })
    event.remove({ id:'minecraft:netherite_axe_smithing' })
    event.remove({ id:'minecraft:netherite_hoe_smithing' })
    event.remove({ id:'minecraft:netherite_helmet_smithing' })
    event.remove({ id:'minecraft:netherite_chestplate_smithing' })
    event.remove({ id:'minecraft:netherite_leggings_smithing' })
    event.remove({ id:'minecraft:netherite_boots_smithing' })

    event.remove({ id:'minecraft:diamond_sword' })
    event.remove({ id:'minecraft:diamond_shovel' })
    event.remove({ id:'minecraft:diamond_pickaxe' })
    event.remove({ id:'minecraft:diamond_axe' })
    event.remove({ id:'minecraft:diamond_hoe' })
    event.remove({ id:'minecraft:diamond_helmet' })
    event.remove({ id:'minecraft:diamond_chestplate' })
    event.remove({ id:'minecraft:diamond_leggings' })
    event.remove({ id:'minecraft:diamond_boots' })

    event.remove({ id:'minecraft:gold_sword' })
    event.remove({ id:'minecraft:gold_shovel' })
    event.remove({ id:'minecraft:gold_pickaxe' })
    event.remove({ id:'minecraft:gold_axe' })
    event.remove({ id:'minecraft:gold_hoe' })
    event.remove({ id:'minecraft:gold_helmet' })
    event.remove({ id:'minecraft:gold_chestplate' })
    event.remove({ id:'minecraft:gold_leggings' })
    event.remove({ id:'minecraft:gold_boots' })

    event.remove({ id:'aquaculture:neptunium_sword' })
    event.remove({ id:'aquaculture:neptunium_shovel' })
    event.remove({ id:'aquaculture:neptunium_pickaxe' })
    event.remove({ id:'aquaculture:neptunium_axe' })
    event.remove({ id:'aquaculture:neptunium_hoe' })
    event.remove({ id:'aquaculture:neptunium_helmet' })
    event.remove({ id:'aquaculture:neptunium_chestplate' })
    event.remove({ id:'aquaculture:neptunium_leggings' })
    event.remove({ id:'aquaculture:neptunium_boots' })
    event.remove({ id:'aquaculture:neptunium_bow' })

    event.remove({ id:'aquaculture:iron_fillet_knife' })
    event.remove({ id:'aquaculture:gold_fillet_knife' })
    event.remove({ id:'aquaculture:diamond_fillet_knife' })
    event.remove({ id:'aquaculture:neptunium_fillet_knife' })

    // event.remove({ id:'iceandfire:copper_sword' })
    // event.remove({ id:'iceandfire:copper_shovel' })
    // event.remove({ id:'iceandfire:copper_pickaxe' })
    // event.remove({ id:'iceandfire:copper_axe' })
    // event.remove({ id:'iceandfire:copper_hoe' })
    // event.remove({ id:'iceandfire:copper_helmet' })

    // event.remove({ id:'iceandfire:silver_sword' })
    // event.remove({ id:'iceandfire:silver_shovel' })
    // event.remove({ id:'iceandfire:silver_pickaxe' })
    // event.remove({ id:'iceandfire:silver_axe' })
    // event.remove({ id:'iceandfire:silver_hoe' })
    // event.remove({ id:'iceandfire:silver_helmet' })

    // event.remove({ id:'iceandfire:armor_copper_metal_helmet' })
    // event.remove({ id:'iceandfire:armor_copper_metal_chestplate' })
    // event.remove({ id:'iceandfire:armor_copper_metal_leggings' })
    // event.remove({ id:'iceandfire:armor_copper_metal_boots' })

    // event.remove({ id:'iceandfire:armor_silver_metal_helmet' })
    // event.remove({ id:'iceandfire:armor_silver_metal_chestplate' })
    // event.remove({ id:'iceandfire:armor_silver_metal_leggings' })
    // event.remove({ id:'iceandfire:armor_silver_metal_boots' })

    


    event.replaceOutput('unifyall:copper_ingot', 'tconstruct:copper_ingot')
    

    event.shaped('ironchest:copper_chest',[
        'AAA', 
        'ABA',
        'AAA'
        ],
      {
        A:'tconstruct:copper_ingot', 
        B:'#forge:chests/wooden'
      })

      event.shaped('ironchest:iron_chest',[
        'AAA', 
        'ABA',
        'AAA'
        ],
      {
        A:'minecraft:iron_ingot', 
        B:'ironchest:copper_chest'
      })

      event.shaped('ironchest:silver_chest',[
        'AAA', 
        'ABA',
        'AAA'
        ],
      {
        A:'minecraft:silver_ingot', 
        B:'ironchest:copper_chest'
      })

      event.shaped('ironchest:silver_chest',[
        'AAA', 
        'ABA',
        'AAA'
        ],
      {
        A:'minecraft:silver_ingot', 
        B:'ironchest:iron_chest'
      })

      event.shaped('ironchest:gold_chest',[
        'AAA', 
        'ABA',
        'AAA'
        ],
      {
        A:'minecraft:gold_ingot', 
        B:'ironchest:silver_chest'
      })

      event.shaped('ironchest:diamond_chest',[
        'CCC', 
        'ABA',
        'CCC'
        ],
      {
        A:'minecraft:diamond_ingot', 
        B:'ironchest:silver_chest',
        C: '#forge:glass'
      })

      event.shaped('ironchest:copper_to_iron_chest_upgrade',[
        'ACA', 
        'CBC',
        'AAA'
        ],
      {
        A:'minecraft:iron_ingot', 
        B:'tconstruct:copper_ingot',
        C: '#forge:glass'
      })

      event.shaped('ironchest:copper_to_silver_chest_upgrade',[
        'AAA', 
        'ABA',
        'AAA'
        ],
      {
        A:'minecraft:silver_ingot', 
        B:'tconstruct:copper_ingot'
      })

      event.shaped('ironchest:silver_to_gold_chest_upgrade',[
        'ACA', 
        'CBC',
        'AAA'
        ],
      {
        A:'minecraft:gold_ingot', 
        B:'unifyall:silver_ingot',
        C: '#forge:glass'
      })

      event.shaped('ironchest:wood_to_copper_chest_upgrade',[
        'AAA', 
        'ABA',
        'AAA'
        ],
      {
        A:'minecraft:copper_ingot', 
        B:'#minecraft:planks'
      })

   


})