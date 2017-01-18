var Data = {
    // character data structure
    character: {
        name:'',
        class: 0,
        class_name:'',
        level: 0,
        life: 150,
        luck: 0,
        attributes: {
            strength: 0,
            stamina:0,
            speed: 0,
            dexterity: 0,
            inteligence: 0,
            magic: 0
        },
        equipment: {
            head: 0,
            body: 0,
            arms: 0,
            hands: 0,
            legs: 0,
            feet: 0,
            rings: [],
            bracelets: [],
            pandants: [],
            right_hand: 0,
            left_hand: 0
        },
        inventory: {
            capacity: 0,
            items: []
        }
    },
    
    //character starting classes
    classes: [
        {
            class: 1,
            class_name:'Mercenary',
            attributes: {
                strength: 8,
                stamina: 10,
                speed: 3,
                dexterity: 6,
                inteligence: 3,
                magic: 0
            },
            equipment: {
                body: 7, //basic medium armor (id 7)
                pandants: [9], //medal of victory (id 9)
                right_hand: 1,
                left_hand: 4 //basic sword (id 1) and basic shield (id 4)
            }
        },
        {
            class: 2,
            class_name:'Thief',
            attributes: {
                strength: 3,
                stamina: 3,
                speed: 10,
                dexterity: 8,
                inteligence: 6,
                magic: 0
            },
            equipment: {
                hands: 6, //basic gloves (id 6)
                rings: [12], //thief guild ring (id 12)
                right_hand: 2,
                left_hand: 3 //basic short sword (id 2) and basic dagger (id 3)
            }
        },
        {
            class: 3,
            class_name:'Priest',
            attributes: {
                strength: 0,
                stamina: 6,
                speed: 3,
                dexterity: 3,
                inteligence: 10,
                magic: 8
            },
            equipment: {
                bracelets: [16], // daemon stopers (id 16)
                pandants: [10], // amulet of peace (id 10)
                right_hand: 5 //basic staff (id 5)
            }
        }
    ]
};