function setup() {
  cl = createButton("Clear")
  cl.position(40,40);
  cl.mousePressed(clr)

  heroes = [
  new hero("Abaddon", ["Undead"], "Knight"),
  new hero("Alchemist", ["Goblin"], "Warlock"),
  new hero("Anti-Mage", ["Elf"], "DH"),
  new hero("Axe", ["Orc"], "Warrior"),
  new hero("Batrider", ["Troll"], "Knight"),
  new hero("Beastmaster", ["Orc"], "Hunter"),
  new hero("Bounty Hunter", ["Goblin"], "Assassin"),
  new hero("Chaos Knight", ["Demon"], "Knight"),
  new hero("Clockwerk", ["Goblin"], "Mech"),
  new hero("Crystal Maiden", ["Human"], "Mage"),
  new hero("Disruptor", ["Orc"], "Shaman"),
  new hero("Doom", ["Demon"], "Warrior"),
  new hero("Dragon Knight", ["Human","Dragon"], "Knight"),
  new hero("Drow Ranger", ["Undead"], "Hunter"),
  new hero("Enchantress", ["Beast"], "Druid"),
  new hero("Enigma",["Elemental"], "Warlock"),
  new hero("Juggernaut", ["Orc"],"Warrior"),
  new hero("Keeper of the Light", ["Human"], "Mage"),
  new hero("Kunkka", ["Human"], "Warrior"),
  new hero("Lich", ["Undead"], "Mage"),
  new hero("Lina", ["Human"], "Mage"),
  new hero("Lone Druid", ["Beast"], "Druid"),
  new hero("Luna", ["Elf"], "Knight"),
  new hero("Lycan", ["Human", "Beast"], "Warrior"),
  new hero("Medusa", ["Naga"],"Hunter"),
  new hero("Morphling", ["Elemental"], "Assassin"),
  new hero("Nature's Prophet", ["Elf"], "Druid"),
  new hero("Necrophos", ["Undead"], "Warlock"),
  new hero("Ogre Magi",[ "Ogre"], "Mage"),
  new hero("Omniknight", ["Human"], "Knight"),
  new hero("Phantom Assassin", ["Elf"], "Assassin"),
  new hero("Puck", ["Elf", "Dragon"], "Mage"),
  new hero("Queen of Pain", ["Demon"], "Assassin"),
  new hero("Razor", ["Elemental"], "Mage"),
  new hero("Sand King", ["Beast"], "Assassin"),
  new hero("Shadow Fiend", ["Demon"], "Warlock"),
  new hero("Shadow Shaman", ["Troll"], "Shaman"),
  new hero("Slardar", ["Naga"], "Warrior"),
  new hero("Slark",[ "Naga"], "Assassin"),
  new hero("Sniper", ["Dwarf"], "Hunter"),
  new hero("Techies", ["Goblin"], "Mech"),
  new hero("Templar Assassin", ["Elf"], "Assassin"),
  new hero("Terrorblade", ["Demon"], "DH"),
  new hero("Tidehunter", ["Naga"], "Hunter"),
  new hero("Timbersaw", ["Goblin"], "Mech"),
  new hero("Tinker", ["Goblin"], "Mech"),
  new hero("Tiny", ["Elemental"], "Warrior"),
  new hero("Treant Protector", ["Elf"], "Druid"),
  new hero("Troll Warlord", ["Troll"], "Warrior"),
  new hero("Tusk",["Beast"], "Warrior"),
  new hero("Venomancer",[ "Beast"], "Warlock"),
  new hero("Windranger", ["Elf"], "Hunter"),
  new hero("Viper", ["Dragon"], "Assassin"),
  new hero("Witch Doctor", ["Troll"], "Warlock")
  ]
  picked = []

  racecolor = {
    Beast : color(41,131,0),
    Demon : color(151,0,239),
    Dwarf : color(182,98,74),
    Dragon : color(201,3,0),
    Elemental : color(254,252,11),
    Elf : color(0,97,177),
    Goblin : color(171,42,23),
    Human : color(255,255,255),
    Naga : color(78,73,101),
    Ogre : color(0,134,152),
    Orc : color(218,9,40),
    Troll : color(147,146,100),
    Undead : color(87,87,87)
  }

  typecolor = {
    Assassin : color(222,212,89),
    DH : color(100,16,130),
    Druid : color(220,100,0),
    Hunter : color(155,194,87),
    Knight : color(249,135,187),
    Mage : color(97,192,222),
    Mech : color(183,115,16),
    Shaman : color(27,60,157),
    Warlock : color(90,69,160),
    Warrior : color(184,141,99)
  }

  racelimit = {
  	Beast : [2,4,6],
  	Demon : [1],
  	Dwarf : [2],
  	Dragon : [3],
  	Elemental : [2,4],
  	Elf : [3,6],
  	Goblin : [3,6],
  	Human : [2,4,6],
  	Naga : [2,4],
  	Ogre : [1],
  	Orc : [2,4],
  	Troll : [2,4],
  	Undead : [2,4]
  }

  typelimit = {
  	Assassin : [3,6],
  	DH : [1,2],
  	Druid : [2,4],
  	Hunter : [3,6],
  	Knight : [2,4,6],
  	Mage : [3,6],
  	Mech : [2,4],
  	Shaman : [2],
  	Warlock : [3,6],
  	Warrior : [3,6,9]
  }

    racebonus = {
    Beast : ["Increase damage for allies by 10%","Increase damage for allies by 15%","Increase damage for allies by 20%"],
    Demon : ["Deal 50% extra pure damage"],
    Dwarf : ["increase range by 300"],
    Dragon : ["All dragons have full mana at start"],
    Elemental : ["Enemy melee attacks against elementals petrify attacker 30% of the time","Enemy melee attacks against allies petrify attacker 30% of the time"],
    Elf : ["25% evasion for elves","25% evasion for elves"],
    Goblin : ["15 armor and hp regen for a random ally","15 armor and hp regen for all boblins"],
    Human : ["Human attacks have a 20% chanse to disarm for 3s","Human attacks have a 25% chanse to disarm for 3s","Human attacks have a 30% chanse to disarm for 3s"],
    Naga : ["Magic resistance increased by 20 for all allies","Magic resistance increased by 40 for all allies"],
    Ogre : ["+5% max health per head"],
    Orc : ["+250 hp for all orcs","+350 hp for all orcs"],
    Troll : ["+30% attack speed for all trolls","+30% attack speed for all allies"],
    Undead : ["-5 armor for all enemies","-7 armor for all enemies"]
  }

  typebonus = {
    Assassin : ["10 % chanse to crit for 3.5x damage", "20 % chanse to crit for 4.5x damage"],
    DH : ["Negates an enemys demon power", "All friendly demons keep their power"],
    Druid : ["Two one-star druids make a two star", "Two two-star druids make a three-star"],
    Hunter : ["Hunter damage increased by 25%" ,"Hunter damage increased by 35% more"],
    Knight : ["25% chanse to trigger shield on attack","35% chanse to trigger shield on attack","45% chanse to trigger shield on attack"],
    Mage : ["Enemy magic resistance reduced by 50", "Enemy magic resistance reduced by 30%"],
    Mech : ["15 hp regen for all mechs","25 hp regen for mechs"],
    Shaman : ["Hex enemy when battle starts"],
    Warlock : ["20% lifesteal for allies","20% additional lifesteal for allies"],
    Warrior : ["Increase armor by 7 for all warriors","Increase armor by 8 for all warriors","Increase armor by 9 for all warriors"]
  }
}

function clr(){
	picked = [];
}

function draw() {
  createCanvas(1200,800);
  background(255);
  races = {};
  classes = {};
  noFill();
  stroke(0);
  strokeWeight(1);

  rect(90, 40, 450, 300);

  for (var i=0; i<heroes.length;i++){
  	x = (i % 9) * 50 + 100;
  	y = int( i/9)*50 + 50;
 
  	for (g = 0; g < picked.length; g++){

      test = checkRace(picked[g].race, heroes[i].race);
	  	if (test){
        fill(racecolor[test]);
	   		ellipse(x+16, y+16, 48)
	  	}


	  	
	   	if (picked[g].type == heroes[i].type){
        fill(typecolor[picked[g].type])
        ellipse(x+16,y+16, 40);
  	 	}
    }
    image(heroes[i].img, x, y);
  	heroes[i].pos.set(x,y);
  	
  }
  checked = []
  for (j = 0; j < picked.length; j++){
  	x = j * 50 + 100;
  	y = 360;

  	image(picked[j].img, x, y);
  	picked[j].pos.set(x,y);

    if (!(checked.includes(picked[j].name))){
    	for (i = 0; i < picked[j].race.length; i++){
  	  	if (picked[j].race[i] in races){
  	  		races[picked[j].race[i]] += 1;
  	  	} 
  	  	else{
  	  		races[picked[j].race[i]] = 1;
  	  	}
    	}

      if (picked[j].type in classes){
    		classes[picked[j].type] += 1;
      }
      else{
    		classes[picked[j].type] = 1;
      }
      checked.push(picked[j].name);
    }
  }

  k = 1 
  noStroke();
  var bonuses = 0
  for (var key in races){
    textSize(20);
    fill(0);
    noStroke();
  	text(key + ": " + races[key] + " [" + racelimit[key] + "]", 600, 50*k + 21);
  	k += 1
    for (var i=0; i<racelimit[key].length;i++){
      if (races[key] >= racelimit[key][i]){
        textSize(16);
        if (key != "Demon"){
          fill(0);
          noStroke();
          text(key + " [" + racelimit[key][i] + "] : " + racebonus[key][i], 100, 430 + bonuses*18);
          fill(racecolor[key]);
          stroke(0);
          strokeWeight(1);
          ellipse(90,424 + bonuses*18, 15);
        }
        else if (races[key] == 1){
          fill(0);
          noStroke();
          text(key + " [" + racelimit[key][i] + "] : " + racebonus[key][i], 100, 430 + bonuses*18);
          fill(racecolor[key]);
          strokeWeight(1);
          ellipse(90,424 + bonuses*18, 15);
        }
        bonuses += 1;
      }
    }
  }
  
  l = 1
  for (var key in classes){
    textSize(20);
    noStroke();
    fill(0);
  	text(key + ": " + classes[key] + " [" + typelimit[key] + "]", 800, 50*l + 21);
  	l += 1

    for (var i=0; i<typelimit[key].length; i++){
      if (classes[key] >= typelimit[key][i]){
        textSize(16);
        fill(0);
        noStroke();
        text(key + " [" + typelimit[key][i] + "] : " + typebonus[key][i], 100, 430 + bonuses*18);
        fill(typecolor[key]);
        stroke(0);
        strokeWeight(1);
        ellipse(90,424 + bonuses*18, 15);
        bonuses += 1;
      }
    }
  }
  noFill();
  stroke(0)
  if (k>1){
  	rect(590, 40, 190, 50*(k-1));
  }
  if (l>1){
  	rect(790, 40, 190, 50*(l-1));
  }
}

function checkRace(arr1, arr2){
  for (var i=0; i<arr1.length; i++){
    for (var j=0; j<arr2.length; j++){
      if (arr1[i] == arr2[j]){
        return arr1[i];
      }
    }
  }
  return false;
}

function mousePressed(){
	pressx = mouseX
	pressy = mouseY
	for (var i = 0; i < heroes.length; i++){
		if (pressx > heroes[i].pos.x && pressx < heroes[i].pos.x + 50 && pressy > heroes[i].pos.y && pressy < heroes[i].pos.y + 50 && picked.length<10){
			picked.push(new hero(heroes[i].name, heroes[i].race, heroes[i].type, heroes[i].rating));
		}
	}
	for (var i = 0; i < picked.length; i++){
		if (pressx > picked[i].pos.x && pressx < picked[i].pos.x + 50 && pressy > picked[i].pos.y && pressy < picked[i].pos.y + 50){
			picked.splice(i,1);
		}
	}
}

function hero(name, race, type, rating = 5){
	this.name = name;
	this.img = loadImage("pics/" + this.name + ".png");
	this.type = type;
	this.race = race;
	this.rating = rating;
	this.pos = createVector(0,0);
}