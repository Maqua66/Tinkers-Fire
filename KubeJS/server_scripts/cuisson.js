onEvent('recipes', event => {

    // function compactFondu(output, input, exp, bol){
    //     event.smelting(output, input).exp(exp)
    //     event.blasting(output, input).exp(exp)
    //     if (bol){
    //         event.smoking(output, input).exp(exp)
    //         event.campfireCooking(output, input).exp(exp)
    //     }
    // }
    event.smelting('kubejs:overworld_remains', 'kubejs:misshapen_overworld_cluster')
    event.smelting('kubejs:nether_remains', 'kubejs:misshapen_nether_cluster')
    event.smelting('kubejs:end_remains', 'kubejs:misshapen_end_cluster')
    
    event.blasting('kubejs:overworld_remains', 'kubejs:misshapen_overworld_cluster')
    event.blasting('kubejs:nether_remains', 'kubejs:misshapen_nether_cluster')
    event.blasting('kubejs:end_remains', 'kubejs:misshapen_end_cluster')

    event.blasting('kubejs:original_ore', 'kubejs:overworld_original_material')
    event.blasting('kubejs:nether_original_ore', 'kubejs:nether_original_material')
    event.blasting('kubejs:from_beyond_original_ore', 'kubejs:end_original_material')
    event.blasting('kubejs:universal_original_ore','kubejs:interdimensional_original_material')

    event.blasting('minecraft:coal_block','kubejs:original_coal')
    event.blasting('minecraft:redstone_block','kubejs:original_redstone')
    event.blasting('minecraft:lapis_block','kubejs:original_lapis')
    event.blasting('unifyall:titanium_block','kubejs:original_titanium')
    event.blasting('mysticalagriculture:prosperity_block','kubejs:original_prosperity')
    event.blasting('mysticalagriculture:prosperity_block','kubejs:original_nether_prosperity')
    event.blasting('mysticalagriculture:prosperity_block','kubejs:original_end_prosperity')
    event.blasting('minecraft:quartz_block','kubejs:original_quartz')
    event.blasting('quark:biotite_block','kubejs:original_biotite')
})