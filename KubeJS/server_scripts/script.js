onEvent('recipes', event => {


  //Compressed Use
  event.shapeless('minecraft:redstone','4x kubejs:double_compressed_cobblestone')
  event.shapeless('minecraft:quartz','4x kubejs:double_compressed_netherrack')

  //Decraft
  event.shapeless('9x minecraft:warped_stem', 'kubejs:compressed_hyphae')
  event.shapeless('9x minecraft:crimson_stem', 'kubejs:compressed_hyphae')
  event.shapeless('9x biomesoplenty:hellbark_log', 'kubejs:compressed_hyphae')

  event.shapeless('9x minecraft:soul_sand', 'kubejs:compressed_soul_sand')
  event.shapeless('9x minecraft:soul_soil', 'kubejs:compressed_soul_sand')

  event.shapeless('9x minecraft:end_stone', 'kubejs:compressed_end_stone')
  event.shapeless('9x minecraft:obsidian', 'kubejs:compressed_obsidian')

  event.shapeless('9x kubejs:compressed_cobblestone', 'kubejs:double_compressed_cobblestone')
  event.shapeless('9x kubejs:compressed_wood', 'kubejs:double_compressed_wood')
  event.shapeless('9x kubejs:compressed_dirt', 'kubejs:double_compressed_dirt')

  event.shapeless('9x kubejs:compressed_netherrack', 'kubejs:double_compressed_netherrack')
  event.shapeless('9x kubejs:compressed_hyphae', 'kubejs:double_compressed_hyphae')
  event.shapeless('9x kubejs:compressed_soul_sand', 'kubejs:double_compressed_soul_sand')

  event.shapeless('9x kubejs:compressed_end_stone', 'kubejs:double_compressed_end_stone')
  event.shapeless('9x kubejs:compressed_obsidian', 'kubejs:double_compressed_obsidian')

  event.shapeless('9x minecraft:slime_block', 'kubejs:compressed_slime_block')
  event.shapeless('9x tconstruct:sky_slime','kubejs:compressed_slime_block')
  event.shapeless('9x tconstruct:ichor_slime','kubejs:compressed_slime_block')
  event.shapeless('9x tconstruct:ender_slime', 'kubejs:compressed_slime_block')
  event.shapeless('9x tconstruct:blood_slime','kubejs:compressed_slime_block')
  event.shapeless('9x usefulslime:slippery_slime_block','kubejs:compressed_slime_block')
  event.shapeless('9x tconstruct:earth_congealed_slime', 'kubejs:compressed_slime_block')
  event.shapeless('9x tconstruct:sky_congealed_slime','kubejs:compressed_slime_block')
  event.shapeless('9x tconstruct:ender_congealed_slime','kubejs:compressed_slime_block')


  event.shapeless('9x minecraft:oak_log', 'kubejs:compressed_wood')
  event.shapeless('9x minecraft:spruce_log', 'kubejs:compressed_wood')
  event.shapeless('9x minecraft:birch_log', 'kubejs:compressed_wood')
  event.shapeless('9x minecraft:jungle_log', 'kubejs:compressed_wood')
  event.shapeless('9x minecraft:acacia_log', 'kubejs:compressed_wood')
  event.shapeless('9x minecraft:dark_oak_log', 'kubejs:compressed_wood')

  event.shapeless('9x biomesoplenty:dead_log', 'kubejs:compressed_wood')
  event.shapeless('9x biomesoplenty:willow_log', 'kubejs:compressed_wood')
  event.shapeless('9x biomesoplenty:palm_log', 'kubejs:compressed_wood')
  event.shapeless('9x biomesoplenty:jacaranda_log', 'kubejs:compressed_wood')
  event.shapeless('9x biomesoplenty:mahogany_log', 'kubejs:compressed_wood')
  event.shapeless('9x biomesoplenty:cherry_log', 'kubejs:compressed_wood')
  event.shapeless('9x biomesoplenty:redwood_log', 'kubejs:compressed_wood')
  event.shapeless('9x biomesoplenty:fir_log', 'kubejs:compressed_wood')
  event.shapeless('9x iceandfire:dreadwood_log', 'kubejs:compressed_wood')
  event.shapeless('9x biomesoplenty:umbran_log', 'kubejs:compressed_wood')
  event.shapeless('9x biomesoplenty:magic_log', 'kubejs:compressed_wood')

  event.shapeless('9x minecraft:andesite','kubejs:compressed_cobblestone')
  event.shapeless('9x minecraft:blackstone','kubejs:compressed_cobblestone')
  event.shapeless('9x minecraft:granite','kubejs:compressed_cobblestone')
  event.shapeless('9x minecraft:diorite','kubejs:compressed_cobblestone')
  event.shapeless('9x minecraft:cobblestone','kubejs:compressed_cobblestone')
  event.shapeless('9x minecraft:mossy_cobblestone','kubejs:compressed_cobblestone')
  event.shapeless('9x iceandfire:crackled_cobblestone','kubejs:compressed_cobblestone')
  event.shapeless('9x mysticalagriculture:soulstone_cobble','kubejs:compressed_cobblestone')
  event.shapeless('9x quark:cobbled_deepslate','kubejs:compressed_cobblestone')

  event.shapeless('9x minecraft:coarse_dirt', 'kubejs:compressed_dirt')
  event.shapeless('9x tconstruct:sky_slime_dirt', 'kubejs:compressed_dirt')
  event.shapeless('9x tconstruct:ender_slime_dirt', 'kubejs:compressed_dirt')
  event.shapeless('9x minecraft:dirt', 'kubejs:compressed_dirt')
  event.shapeless('9x tconstruct:earth_slime_dirt', 'kubejs:compressed_dirt')
  event.shapeless('9x tconstruct:ichor_slime_dirt', 'kubejs:compressed_dirt')
  event.shapeless('9x minecraft:mycelium', 'kubejs:compressed_dirt')
  event.shapeless('9x minecraft:podzol', 'kubejs:compressed_dirt')

  event.shapeless('9x minecraft:netherrack', 'kubejs:compressed_netherrack')
  event.shapeless('9x minecraft:crimson_nylium', 'kubejs:compressed_netherrack')
  event.shapeless('9x minecraft:warped_nylium', 'kubejs:compressed_netherrack')

  //Craft

  function shape_full(output, a){
    event.shaped(output,[
    'AAA', 
    'AAA',
    'AAA'
    ],
  {
    A: a
  }
)}

shape_full('kubejs:compressed_cobblestone','minecraft:andesite')
shape_full('kubejs:compressed_cobblestone','minecraft:blackstone')
shape_full('kubejs:compressed_cobblestone','minecraft:granite')
shape_full('kubejs:compressed_cobblestone','minecraft:diorite')
shape_full('kubejs:compressed_cobblestone','minecraft:cobblestone')
shape_full('kubejs:compressed_cobblestone','minecraft:mossy_cobblestone')
shape_full('kubejs:compressed_cobblestone','iceandfire:crackled_cobblestone')
shape_full('kubejs:compressed_cobblestone','mysticalagriculture:soulstone_cobble')
shape_full('kubejs:compressed_cobblestone','quark:cobbled_deepslate')
shape_full('kubejs:double_compressed_cobblestone','kubejs:compressed_cobblestone')

  shape_full('kubejs:compressed_wood','minecraft:oak_log')
  shape_full('kubejs:compressed_wood','minecraft:spruce_log')
  shape_full('kubejs:compressed_wood','minecraft:birch_log')
  shape_full('kubejs:compressed_wood','minecraft:jungle_log')
  shape_full('kubejs:compressed_wood','minecraft:acacia_log')
  shape_full('kubejs:compressed_wood','minecraft:dark_oak_log')

  shape_full('kubejs:compressed_wood','biomesoplenty:dead_log')
  shape_full('kubejs:compressed_wood','biomesoplenty:willow_log')
  shape_full('kubejs:compressed_wood','biomesoplenty:palm_log')
  shape_full('kubejs:compressed_wood','biomesoplenty:jacaranda_log')
  shape_full('kubejs:compressed_wood','biomesoplenty:mahogany_log')
  shape_full('kubejs:compressed_wood','biomesoplenty:cherry_log')
  shape_full('kubejs:compressed_wood','biomesoplenty:redwood_log')
  shape_full('kubejs:compressed_wood','biomesoplenty:fir_log')
  shape_full('kubejs:compressed_wood','iceandfire:dreadwood_log')
  shape_full('kubejs:compressed_wood','biomesoplenty:umbran_log')
  shape_full('kubejs:compressed_wood','biomesoplenty:magic_log')
shape_full('kubejs:double_compressed_wood', 'kubejs:compressed_wood')

shape_full('kubejs:compressed_dirt','minecraft:coarse_dirt')
  shape_full('kubejs:compressed_dirt','tconstruct:sky_slime_dirt')
  shape_full('kubejs:compressed_dirt','tconstruct:ender_slime_dirt')
  shape_full('kubejs:compressed_dirt','minecraft:dirt')
  shape_full('kubejs:compressed_dirt','tconstruct:earth_slime_dirt')
  shape_full('kubejs:compressed_dirt','tconstruct:ichor_slime_dirt')
  shape_full('kubejs:compressed_dirt','minecraft:mycelium')
  shape_full('kubejs:compressed_dirt','minecraft:podzol')
shape_full('kubejs:double_compressed_dirt', 'kubejs:compressed_dirt')

shape_full('kubejs:compressed_netherrack','minecraft:netherrack')
  shape_full('kubejs:compressed_netherrack','minecraft:crimson_nylium')
  shape_full('kubejs:compressed_netherrack','minecraft:warped_nylium')
shape_full('kubejs:double_compressed_netherrack', 'kubejs:compressed_netherrack')

shape_full('kubejs:compressed_hyphae', 'minecraft:crimson_stem')
shape_full('kubejs:compressed_hyphae', 'minecraft:warped_stem')
shape_full('kubejs:compressed_hyphae', 'biomesoplenty:hellbark_log')
shape_full('kubejs:double_compressed_hyphae', 'kubejs:compressed_hyphae')

shape_full('kubejs:compressed_soul_sand','minecraft:soul_sand')
shape_full('kubejs:compressed_soul_sand','minecraft:soul_soil')
shape_full('kubejs:double_compressed_soul_sand', 'kubejs:compressed_soul_sand')

shape_full('kubejs:compressed_end_stone', 'minecraft:end_stone')
shape_full('kubejs:double_compressed_end_stone', 'kubejs:compressed_end_stone')
shape_full('kubejs:compressed_obsidian', 'minecraft:obsidian')
shape_full('kubejs:double_compressed_obsidian', 'kubejs:compressed_obsidian')

function shape_original(output, a, b, c, d){
  event.shaped(output,[
  'AB ', 
  'CD ',
  '   '
  ],
{
  A: a, 
  B: b,
  C: c,
  D: d
}
)}

event.shaped('kubejs:misshapen_overworld_cluster',[
  'BCA', 
  'AED',
  'CDB'
  ],
{
  A:'minecraft:bone', 
  B:'minecraft:rotten_flesh',
  C:'minecraft:gunpowder',
  D:'minecraft:spider_eye',
  E:'minecraft:coal_block'   
})

event.shaped('kubejs:misshapen_nether_cluster',[
  'BCA', 
  'ADB',
  'CCB'
  ],
{
  A:'minecraft:ghast_tear', 
  B:'minecraft:magma_cream',
  C:'minecraft:blaze_rod',
  D:'minecraft:coal_block'   
})

event.shaped('kubejs:misshapen_end_cluster',[
  'ABA', 
  'BCB',
  'ABA'
  ],
{
  A:'minecraft:ender_pearl', 
  B:'minecraft:chorus_fruit',
  C:'minecraft:coal_block'   
})

// event.shaped('minecraft:experience_bottle',[
//   'DC ', 
//   'BA ',
//   '   '
//   ],
// {
//   A:'minecraft:watter_bottle', 
//   B:'potionsmaster:tile_mortar',
//   C:'#kubejs:remains',
//   D:'potionsmaster:pestle'
// })

// event.shaped('kubejs:remains_powder',[
//   'AC ', 
//   'B  ',
//   '   '
//   ],
// {
//   A:'potionsmaster:pestle', 
//   B:'potionsmaster:tile_mortar',
//   C:'#kubejs:remains'   
// })

event.shaped('9x minecraft:obsidian',[
  'AAA', 
  'ACB',
  'BBB'
  ],
{
  A:'4x kubejs:double_compressed_cobblestone', 
  B:'4x kubejs:double_compressed_netherrack',
  C:'minecraft:obsidian'   
})

event.shaped('minecraft:enchanted_golden_apple',[
  'BCD', 
  'IAE',
  'HGF'
  ],
{
  A:'minecraft:golden_apple', 
  B:'unifyall:brass_ingot',
  C:'unifyall:bronze_ingot',
  D:'unifyall:electrum_ingot', 
  E:'tconstruct:hepatizon_ingot',
  F:'unifyall:invar_ingot',
  G:'tconstruct:pig_iron_ingot', 
  H:'tconstruct:rose_gold_ingot',
  I:'tconstruct:slimesteel_ingot'
})

event.shaped('kubejs:compressed_slime_block',[
  'GHI',
  'ABC', 
  'DEF'
  ],
{
  A:'minecraft:slime_block', 
  B:'tconstruct:sky_slime',
  C:'tconstruct:ichor_slime',
  D:'tconstruct:ender_slime', 
  E:'tconstruct:blood_slime',
  F:'usefulslime:slippery_slime_block',
  G:'tconstruct:earth_congealed_slime', 
  H:'tconstruct:sky_congealed_slime',
  I:'tconstruct:ender_congealed_slime'
})


shape_original('kubejs:overworld_original_material', 'kubejs:double_compressed_cobblestone','kubejs:overworld_remains' ,'kubejs:double_compressed_wood','kubejs:double_compressed_dirt')
shape_original('kubejs:nether_original_material', 'kubejs:double_compressed_netherrack','kubejs:nether_remains' ,'kubejs:double_compressed_hyphae','kubejs:double_compressed_dirt')
shape_original('kubejs:end_original_material', 'kubejs:double_compressed_end_stone','kubejs:end_remains' ,'minecraft:shulker_shell','kubejs:double_compressed_obsidian')
shape_original('kubejs:interdimensional_original_material','kubejs:original_ore','kubejs:nether_original_ore','kubejs:from_beyond_original_ore','kubejs:compressed_slime_block')

function originalOre(output,a,b){
event.shaped(output,[
  'BBB', 
  'BAB',
  'BBB'
  ],
{
  A:a, 
  B:b
  })
}

function impossibleTC(output,a,b){
  event.shaped(output,[  //Materials which do not have a molten version
    'B B', 
    ' A ',
    'B B'
    ],
  {
    A:a, 
    B:b
    })
  }

impossibleTC('kubejs:original_coal','kubejs:original_ore', 'minecraft:coal')
originalOre('kubejs:original_iron','kubejs:original_ore', 'minecraft:iron_ingot')
impossibleTC('kubejs:original_redstone','kubejs:original_ore', 'minecraft:redstone')
impossibleTC('kubejs:original_lapis','kubejs:original_ore', 'minecraft:lapis_lazuli')
originalOre('kubejs:original_emerald','kubejs:original_ore', 'minecraft:emerald')
originalOre('kubejs:original_diamond','kubejs:original_ore', 'minecraft:diamond')

originalOre('kubejs:original_aluminium', 'kubejs:original_ore', 'unifyall:aluminium_ingot')
originalOre('kubejs:original_inferium', 'kubejs:original_ore', 'mysticalagriculture:inferium_ingot')
originalOre('kubejs:original_lead', 'kubejs:original_ore', 'unifyall:lead_ingot')
originalOre('kubejs:original_nickel', 'kubejs:original_ore', 'unifyall:nickel_ingot')
originalOre('kubejs:original_osmium', 'kubejs:original_ore', 'unifyall:osmium_ingot')
originalOre('kubejs:original_platinum', 'kubejs:original_ore', 'unifyall:platinum_ingot')
originalOre('kubejs:original_silver', 'kubejs:original_ore', 'unifyall:silver_ingot')
originalOre('kubejs:original_tin', 'kubejs:original_ore', 'unifyall:tin_ingot')
impossibleTC('kubejs:original_titanium', 'kubejs:original_ore', 'unifyall:titanium_ingot')
originalOre('kubejs:original_tungsten', 'kubejs:original_ore', 'unifyall:tungsten_ingot')
originalOre('kubejs:original_zinc', 'kubejs:original_ore', 'unifyall:zinc_ingot')
originalOre('kubejs:original_tantalum', 'kubejs:original_ore', 'tinkersarchery:tantalum_ingot')
impossibleTC('kubejs:original_prosperity', 'kubejs:original_ore', 'mysticalagriculture:prosperity_ingot')
originalOre('kubejs:original_copper', 'kubejs:original_ore', 'tconstruct:copper_ingot')

impossibleTC('kubejs:original_nether_prosperity', 'kubejs:nether_original_ore', 'mysticalagriculture:prosperity_ingot')
originalOre('kubejs:original_nether_inferium', 'kubejs:nether_original_ore', 'mysticalagriculture:inferium_ingot')
originalOre('kubejs:original_cobalt', 'kubejs:nether_original_ore', 'tconstruct:cobalt_ingot')
originalOre('kubejs:original_soulium', 'kubejs:nether_original_ore', 'mysticalagriculture:soulium_ingot')

impossibleTC('kubejs:original_quartz','kubejs:nether_original_ore', 'minecraft:quartz')
originalOre('kubejs:original_ancient_debris','kubejs:nether_original_ore', 'minecraft:ancient_debris')


impossibleTC('kubejs:original_end_prosperity', 'kubejs:from_beyond_original_ore', 'mysticalagriculture:prosperity_ingot')
originalOre('kubejs:original_end_inferium', 'kubejs:from_beyond_original_ore', 'mysticalagriculture:inferium_ingot')
impossibleTC('kubejs:original_biotite', 'kubejs:from_beyond_original_ore', 'quark:biotite')


impossibleTC('kubejs:original_coal','kubejs:universal_original_ore', 'minecraft:coal')
originalOre('kubejs:original_iron','kubejs:universal_original_ore', 'minecraft:iron_ingot')
impossibleTC('kubejs:original_redstone','kubejs:universal_original_ore', 'minecraft:redstone')
impossibleTC('kubejs:original_lapis','kubejs:universal_original_ore', 'minecraft:lapis_lazuli')
originalOre('kubejs:original_emerald','kubejs:universal_original_ore', 'minecraft:emerald')
originalOre('kubejs:original_diamond','kubejs:universal_original_ore', 'minecraft:diamond')

originalOre('kubejs:original_aluminium', 'kubejs:universal_original_ore', 'unifyall:aluminium_ingot')
originalOre('kubejs:original_inferium', 'kubejs:universal_original_ore', 'mysticalagriculture:inferium_ingot')
originalOre('kubejs:original_lead', 'kubejs:universal_original_ore', 'unifyall:lead_ingot')
originalOre('kubejs:original_nickel', 'kubejs:universal_original_ore', 'unifyall:nickel_ingot')
originalOre('kubejs:original_osmium', 'kubejs:universal_original_ore', 'unifyall:osmium_ingot')
originalOre('kubejs:original_platinum', 'kubejs:universal_original_ore', 'unifyall:platinum_ingot')
originalOre('kubejs:original_silver', 'kubejs:universal_original_ore', 'unifyall:silver_ingot')
originalOre('kubejs:original_tin', 'kubejs:universal_original_ore', 'unifyall:tin_ingot')
impossibleTC('kubejs:original_titanium', 'kubejs:universal_original_ore', 'unifyall:titanium_ingot')
originalOre('kubejs:original_tungsten', 'kubejs:universal_original_ore', 'unifyall:tungsten_ingot')
originalOre('kubejs:original_zinc', 'kubejs:universal_original_ore', 'unifyall:zinc_ingot')
originalOre('kubejs:original_tantalum', 'kubejs:universal_original_ore', 'tinkersarchery:tantalum_ingot')
impossibleTC('kubejs:original_prosperity', 'kubejs:universal_original_ore', 'mysticalagriculture:prosperity_ingot')
originalOre('kubejs:original_copper', 'kubejs:universal_original_ore', 'tconstruct:copper_ingot')

impossibleTC('kubejs:original_nether_prosperity', 'kubejs:universal_original_ore', 'mysticalagriculture:prosperity_ingot')
originalOre('kubejs:original_nether_inferium', 'kubejs:universal_original_ore', 'mysticalagriculture:inferium_ingot')
originalOre('kubejs:original_cobalt', 'kubejs:universal_original_ore', 'tconstruct:cobalt_ingot')
originalOre('kubejs:original_soulium', 'kubejs:universal_original_ore', 'mysticalagriculture:soulium_ingot')

impossibleTC('kubejs:original_quartz','kubejs:universal_original_ore', 'minecraft:quartz')
originalOre('kubejs:original_ancient_debris','kubejs:universal_original_ore', 'minecraft:ancient_debris')


impossibleTC('kubejs:original_end_prosperity', 'kubejs:universal_original_ore', 'mysticalagriculture:prosperity_ingot')
originalOre('kubejs:original_end_inferium', 'kubejs:universal_original_ore', 'mysticalagriculture:inferium_ingot')
impossibleTC('kubejs:original_biotite', 'kubejs:universal_original_ore', 'quark:biotite')


function removeAll(objet){
  event.remove({output: objet})
  event.remove({input: objet})
}

event.remove({output:'minecarft:wooden_axe'})
event.remove({input:'minecarft:wooden_axe'})
removeAll('minecarft:wooden_axe')
removeAll(['iceandfire:silver_ore', 'iceandfire:silver_block', 'iceandfire:silver_ingot', 'iceandfire:silver_nugget', 'iceandfire:silver_pile', 'iceandfire:copper_block', 'iceandfire:copper_nugget', 'unifyall:raw_block_copper', 'unifyall:raw_copper', 'unifyall:copper_ore', 'unifyall:cut_copper_block', 'iceandfire:copper_pile', 'unifyall:rod_copper', 'unifyall:copper_block', 'unifyall:copper_nugget', 'unifyall:copper_gear', 'iceandfire:copper_ore', 'iceandfire:copper_ingot', 'unifyall:copper_ingot', 'unifyall:copper_dust', 'unifyall:copper_plate','iceandfire:sapphire_gem', 'iceandfire:sapphire_ore', 'iceandfire:sapphire_block'])
event.remove({ id:'minecraft:wooden_axe' })

})