var Game = function(data){
    var game = this;

    game.currentEvent;
    game.eventCount = 0;

    game.elm = data.element;
    game.container = document.querySelector(game.elm);

    game.append('Welcome');
    game.append('This is the story...');

    //here shold trigger character method ( new character or load saved game )
    this.character();
};

// character method
Game.prototype.character = function(){
    var game = this;

    game.my_car = Data.character;

    game.append('<br />Name your character:<br /><input type="text" name="name" />');
    var this_input = game.container.querySelector('input[name="name"]');
    this_input.focus();
    this_input.addEventListener('keypress', function(e){
        if(e.charCode == 13){
            game.my_car.name = this_input.value;
            this_input.setAttribute('disabled',true);
            this_input.style.display = 'none';
            game.append('<span class="picked">'+game.my_car.name+'</span>');
            game.setClass();
        }
    });
};

// select character class
Game.prototype.setClass = function(){
    var game = this;

    // select classes from db and pull here
    game.classes = Data.classes;

    // create selector
    game.append('<br />Select your character class:');
    var class_options = '';
    game.classListeners = {};

    for( var i = 0; i < game.classes.length; i++ )
    {
        var my_class = game.classes[i].class_name;
        var my_id = i;

        class_options += '<a class="option" data-class-id="'+my_id+'" data-class="'+my_class+'">'+my_class+'</a>';
        if( i < game.classes.length-1 ) class_options += ' &ndash; ';

    }

    game.append(class_options);

    for( var i = 0; i < game.classes.length; i++ )
    {
        game.classListeners[i] = game.container.querySelector('a[data-class-id="'+i+'"').addEventListener('click', function(){

            //update the character stats based on the choise
            game.update_car(game.classes[this.getAttribute('data-class-id')]);

            game.append('<br />The <span class="picked">' + this.getAttribute('data-class') + '</span> named <span class="picked">'+game.my_car.name+'</span> is ready for adventure.');
            game.append('Starting attributes:<br /><br />');
            game.append('Strength: <span>' + game.my_car.attributes.strength + '</span>');
            game.append('Stamina: <span>' + game.my_car.attributes.stamina + '</span>');
            game.append('Dexterity: <span>' + game.my_car.attributes.dexterity + '</span>');
            game.append('Speed: <span>' + game.my_car.attributes.speed + '</span>');
            game.append('Inteligence: <span>' + game.my_car.attributes.inteligence + '</span>');
            game.append('Magic: <span>' + game.my_car.attributes.magic + '</span>');
            game.append('<br />Good luck!');
            game.classListeners = {};
            game.event( Math.floor(Math.random() * 1000) );
        });
    }
};

// make new event method
Game.prototype.event = function(nr){
    var game = this;

    //here should be pulled the event and options from the events list

    var options_len = Math.floor(Math.random()*3) + 2;

    game.optionsListeners = {};
    game.eventCount++;
    game.currentEvent = nr;

    var options = 'Chose between';

    for( var i = 0; i < options_len; i++ )
    {
        options += ' ' + game.option('option&nbsp;' + (i+1));
        if( i < options_len-1 ) options += ' and';
    }

    game.append('<br />Event ' + nr + ':');
    game.append(options);

    game.current_options = game.container.querySelectorAll('a[data-count="'+game.eventCount+'"');
    window.scrollTo(0,game.container.offsetHeight);

    for( var i = 0; i < game.current_options.length; i++ )
    {
        game.optionsListeners[i] = game.current_options[i].addEventListener('click', function(){
            game.append('You have chosen <span class="picked">' + this.getAttribute('data-content') + '</span>.');
            game.append('Something happend!');
            game.event( Math.floor(Math.random() * 1000) );
        });
    }    
};

// make option for event method
Game.prototype.option = function(text){
    return '<a class="option" data-content="'+text+'" data-event="'+this.currentEvent+'" data-count="'+this.eventCount+'">'+text+'</a>';
};

// add new line method
Game.prototype.append = function(text){
    this.container.innerHTML += '<p>' + text + '<span class="right">&crarr;</span></p>';
};

Game.prototype.update_car = function(new_data){
    //to be refactor
    
    var char = this.my_car;

    if( typeof new_data.name != 'undefined' ) char.name = new_data.name;
    if( typeof new_data.class != 'undefined' ) char.class = new_data.class;
    if( typeof new_data.class_name != 'undefined' ) char.class_name = new_data.class_name;
    if( typeof new_data.level != 'undefined' ) char.level = new_data.level;
    if( typeof new_data.life != 'undefined' ) char.life = new_data.life;
    if( typeof new_data.luck != 'undefined' ) char.luck = new_data.luck;
    if( typeof new_data.attributes != 'undefined' )
    {
        if( typeof new_data.attributes.strength != 'undefined' ) char.attributes.strength = new_data.attributes.strength;
        if( typeof new_data.attributes.stamina != 'undefined' ) char.attributes.stamina = new_data.attributes.stamina;
        if( typeof new_data.attributes.speed != 'undefined' ) char.attributes.speed = new_data.attributes.speed;
        if( typeof new_data.attributes.dexterity != 'undefined' ) char.attributes.dexterity = new_data.attributes.dexterity;
        if( typeof new_data.attributes.inteligence != 'undefined' ) char.attributes.inteligence = new_data.attributes.inteligence;
        if( typeof new_data.attributes.magic != 'undefined' ) char.attributes.magic = new_data.attributes.magic;

    }
    if( typeof new_data.equipment != 'undefined' )
    {
        if( typeof new_data.equipment.head != 'undefined' ) char.equipment.head = new_data.equipment.head;
        if( typeof new_data.equipment.body != 'undefined' ) char.equipment.body = new_data.equipment.body;
        if( typeof new_data.equipment.arms != 'undefined' ) char.equipment.arms = new_data.equipment.arms;
        if( typeof new_data.equipment.hands != 'undefined' ) char.equipment.hands = new_data.equipment.hands;
        if( typeof new_data.equipment.legs != 'undefined' ) char.equipment.legs = new_data.equipment.legs;
        if( typeof new_data.equipment.feet != 'undefined' ) char.equipment.feet = new_data.equipment.feet;
        if( typeof new_data.equipment.right_hand != 'undefined' ) char.equipment.right_hand = new_data.equipment.right_hand;
        if( typeof new_data.equipment.left_hand != 'undefined' ) char.equipment.left_hand = new_data.equipment.left_hand;
        if( typeof new_data.equipment.bracelets != 'undefined' ) char.equipment.bracelets = new_data.equipment.bracelets;
        if( typeof new_data.equipment.pandants != 'undefined' ) char.equipment.pandants = new_data.equipment.pandants;
        if( typeof new_data.equipment.rings != 'undefined' ) char.equipment.rings = new_data.equipment.rings;
    }

    if( typeof new_data.inventory != 'undefined' )
    {
        if( new_data.inventory.capacity != 'undefined' ) char.inventory.capacity = new_data.equipment.capacity;
        if( new_data.inventory.items != 'undefined' ) char.inventory.items = new_data.equipment.items;
    }
};