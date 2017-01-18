var Events = {
    //game events
    1: {
        event: 'You found a wooden box.',
        options: {
            1: {
                option: 'Open the box',
                outcomes: { // outcomes weight should be a function like: 1 - 50% | 2 - 25% | 3 - 12% | 4 - 6% | 5 - 3% | 6 - 1% | 7 - 0.5% | 8 - 0.2% ... -always the last takes the rest
                    1: 'item:uncommon-random', //can give item or trigger specific event
                    2: 'item:uncommon-body', //item is declared like: item:item_rarity-item_type || item:item_id
                    3: 'item:uncommon-right_hand',
                    4: 'trap',
                    5: 'nothing'
                }
            },
            2: {
                option: 'Leave the box',
                outcomes: {
                    1: 'nothing',
                    2: 'trap',
                    3: 'attack'
                }
            },
            3: {
                option: 'Burn the box',
                outcomes: {
                    1: 'nothing',
                    2: 'trap',
                    3: 'attack',
                    4: 'item:magical-ring'
                }
            }
        }
    },
    2: {},
    3: {}
};