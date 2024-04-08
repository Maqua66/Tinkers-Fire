// ITEM TAGS
ServerEvents.tags('item', event => {

    // Add all items from the forge:stone tag to the c:stone tag, unless the id contains diorite
    //const stones = event.get('forge:stone').getObjectIds()
    //stones.forEach(stone => {
      //event.add('forge:monsters_remains', stone)


    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    //event.add('forge:cobblestone', 'minecraft:diamond_ore')
    
    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    //event.remove('forge:cobblestone', 'minecraft:mossy_cobblestone')
    
    // Get #forge:ingots/copper tag and remove all entries from it
    //event.removeAll('forge:ingots/copper')
    
    // Removes all tags from this entry
  event.removeAllTagsFrom('minecraft:wooden_axe') //Removed due to WorldEdit
  event.remove('forge:tools', 'minecraft:wooden_axe')
  event.remove('forge:tools/axes', 'minecraft:wooden_axe')
    
})
  
  //BLOCK TAGS
// ServerEvents.tags('block', event => {

     //liste en jeux avec kjs inventory
     
    
    // })