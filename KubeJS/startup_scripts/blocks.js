// onEvent('item.registry', event => {

// 	function createItems(name, display){
// 		event.create(name).displayName(display)
// 	}

// 	createItems('remains_powder','Remains Powder')
// 	createItems('calcinatedremains_powder','Calcinated Remains Powder')
// })



onEvent('block.registry', event => {
	event.create('compressed_cobblestone').material('stone').hardness(1.5).tag('mineable/pickaxe').displayName('Compressed Cobbletone') 
	event.create('double_compressed_cobblestone').material('stone').hardness(2).tag('mineable/pickaxe').displayName('Double Compressed CobbleStone') 
	event.create('compressed_wood').material('wood').hardness(1.5).tag('mineable/axe').displayName('Compressed Wood') 
	event.create('double_compressed_wood').material('wood').hardness(2).tag('mineable/axe').displayName('Double Compressed Wood') 
	event.create('compressed_dirt').material('dirt').hardness(1.5).tag('mineable/shovel').displayName('Compressed Dirt') 
	event.create('double_compressed_dirt').material('dirt').hardness(2).tag('mineable/shovel').displayName('Double Compressed Dirt') 


	event.create('compressed_netherrack').material('stone').hardness(1.5).tag('mineable/pickaxe').displayName('Compressed Netherrack')
	event.create('double_compressed_netherrack').material('stone').hardness(2).tag('mineable/pickaxe').displayName('Double Compressed Netherrack')
	event.create('compressed_hyphae').material('wood').hardness(1.5).tag('mineable/axe').displayName('Compressed Hyphae')
	event.create('double_compressed_hyphae').material('wood').hardness(2).tag('mineable/axe').displayName('Double Compressed Hyphae')
	event.create('compressed_soul_sand').material('sand').hardness(1.5).tag('mineable/shovel').displayName('Compressed Soul Sand')
	event.create('double_compressed_soul_sand').material('sand').hardness(2).tag('mineable/shovel').displayName('Double Compressed Soul Sand')

	event.create('compressed_end_stone').material('stone').hardness(1.5).tag('mineable/pickaxe').displayName('Compressed Endstone')
	event.create('double_compressed_end_stone').material('stone').hardness(2).tag('mineable/pickaxe').displayName('Double Compressed Endstone')
	event.create('compressed_obsidian').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Compressed Obsidian')
	event.create('double_compressed_obsidian').material('stone').hardness(4).tag('mineable/pickaxe').displayName('Double Compressed Obsidian')

	event.create('misshapen_overworld_cluster').material('slime').hardness(0.5).tag('mineable/pickaxe').displayName('Misshapen Overworld Cluster') 
	event.create('misshapen_nether_cluster').material('slime').hardness(1).tag('mineable/pickaxe').displayName('Misshapen Nether Cluster')
	event.create('misshapen_end_cluster').material('slime').hardness(1).tag('mineable/pickaxe').displayName('Misshapen End Cluster')

	event.create('overworld_remains').material('clay').hardness(1.5).tag('mineable/pickaxe').displayName('Overworld Remains').tag('kubejs:remains')
	event.create('nether_remains').material('clay').hardness(2).tag('mineable/pickaxe').displayName('Nether Remains').tag('kubejs:remains')
	event.create('end_remains').material('clay').hardness(2).tag('mineable/pickaxe').displayName('End Remains').tag('kubejs:remains')

	event.create('overworld_original_material').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Overworld Original Material')
	event.create('nether_original_material').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Nether Original Material')
	event.create('end_original_material').material('stone').hardness(3).tag('mineable/pickaxe').displayName('End Original Material')
	event.create('interdimensional_original_material').material('stone').hardness(4).tag('mineable/pickaxe').displayName('Interdimensional Original Material')

	event.create('original_ore').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original ore')
	event.create('nether_original_ore').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Nether Original Ore')
	event.create('from_beyond_original_ore').material('stone').hardness(3).tag('mineable/pickaxe').displayName('From Beyond Original Ore')
	event.create('universal_original_ore').material('stone').hardness(4).tag('mineable/pickaxe').displayName('Universal Original Ore')

	event.create('original_coal').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Coal')
	event.create('original_iron').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Iron')
	event.create('original_redstone').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Redstone')
	event.create('original_lapis').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Lapis Lazuli')
	event.create('original_emerald').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Emerald')
	event.create('original_diamond').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Diamond')

	event.create('original_aluminium').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Aluminium')
	event.create('original_inferium').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Inferium')
	event.create('original_lead').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Lead')
	event.create('original_nickel').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Nickel')
	event.create('original_osmium').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Osmium')
	event.create('original_platinum').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Platinum')
	event.create('original_silver').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Silver')
	event.create('original_tin').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Tin')
	event.create('original_titanium').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Titanium')
	event.create('original_tungsten').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Tungsten')
	event.create('original_zinc').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Zinc')
	event.create('original_tantalum').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Tantalum')
	event.create('original_prosperity').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Prosperity')
	event.create('original_copper').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Copper')


	event.create('original_quartz').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Quartz')
	event.create('original_ancient_debris').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Ancient Debris')

	event.create('original_nether_prosperity').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Nether Prosperity')
	event.create('original_nether_inferium').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Nether Inferium')
	event.create('original_cobalt').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Cobalt')
	event.create('original_soulium').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Soulium')


	event.create('original_end_prosperity').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original End Prosperity')
	event.create('original_end_inferium').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original End Inferium')
	event.create('original_biotite').material('stone').hardness(3).tag('mineable/pickaxe').displayName('Original Biotite')


	event.create('compressed_slime_block').material('slime').hardness(2).displayName('Compressed Slime Block').tag('quark:slime_blocks')
	//reste TINKERS ORE








})