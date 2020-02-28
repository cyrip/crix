// Cyrip's Crix by Zoltan Konya aka Cyrip in 2010/2011, some little modifications in 2020 for public repository (github,gitlab) version
// This game originally was developed for a HTML5 game competition in 2010

// I downloaded the music and effects from these sites
// http://www.mediacollege.com/downloads/sound-effects/explosion/
// http://soundbible.com/1886-Crumbling.html

(function() {

    const __GAME_STAGE_DEFINITIONS__ = [
        // level 0
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],

        // level 1
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8,13,11, 1, 1, 9, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1,14, 7, 1,10, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1,14,13, 1, 1, 9, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1,11, 1,13,10, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1,12,10, 1,10,12, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8,11, 7,11, 1,13, 8, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0]
        ],

        // level 2
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 9, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 1,10, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 1,12, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 1, 8, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 1, 1, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8, 8,10, 1, 8, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8, 9, 1, 8, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8,12, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0]
        ],

        // level 3
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 8,16, 8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 1,14, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8,12, 7,16, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8,14,16,12, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
        // level 4
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 8, 1,10, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 8,10, 8, 8, 1,12, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8, 8,12, 1, 1,10, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 1, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 1, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8,10, 7,10, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8,12,10,12, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8,12, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],

        // level 5
        [
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1,16,14,13, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1,10, 8,11, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 8, 8, 8, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8,14, 1,15, 1, 1,13,10,13, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8,16, 8,10, 1, 1, 9, 8,10, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 1, 1, 8, 8, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 1,11,13,11, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 1,15, 8, 9, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 8, 8, 8, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0]
        ],
        // level 6
        [
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1,16, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8,14, 1,15, 1,16, 8,15, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 8, 1,11, 1,14, 1,11, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 8, 8, 8, 1, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8,15,11, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 1, 8, 8, 8, 8, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 1, 1,14, 1, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8,14, 8, 1, 8, 8, 8, 8, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8,15, 1, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8,11,16, 1,16,14,15,11,16, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0]
        ],
        // level 7
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 1, 1,12,10, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 1, 1,14,11, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 8, 1,13, 9, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 8, 1,15, 8, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 8, 1, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 8,15, 1, 8, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8,13,14, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8,11,12, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 9,10, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0]
        ],
        // level 8
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1,12, 1, 9, 1, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1,11, 1,12, 1, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1,10, 1,10, 1,14, 1,13, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 9, 1,11, 1,13, 1,14, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0]
        ],
        // level 9
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1,15, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1,16, 8, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1,15,16, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 7,16, 8, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8,15, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0]
        ],
        // level 10
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8, 8,14, 1, 8, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 9, 7, 8, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8, 1,11, 1, 9, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 9, 1,14, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 8, 1,11, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0]
        ],
        // level 11
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8,14,10, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 1,11, 1, 1, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 8, 1, 1, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 8, 1,14, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8,10, 9, 1, 1, 8, 8, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 9,10,11, 1, 1,10, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0]
        ],
        // level 12
        [
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 1,15, 1, 1, 1, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1,15, 1,14, 1,15, 1, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1,12, 1,13, 1,14, 1, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 8, 8, 1, 8, 8, 1, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 7, 1, 1, 1, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 8, 8,13, 1, 8, 1, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 8, 1, 8, 1, 8, 1, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 8, 1, 1, 1, 8, 1, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 8, 1, 8,12, 8, 1, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 8, 8, 8, 8, 8, 1, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0]
        ],
        // level 13
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 8, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 8,13, 1, 1, 8, 7, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 8,13, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1,13, 8, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        // level 14
        [
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 7, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 1,14, 8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1,10, 9, 8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1,14, 9, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1,10, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8,10, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 9, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8,10, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 9, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        // level 15
        [
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8,14,15, 8, 9, 8, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8,12,16, 8,10, 8, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8,15, 8, 8, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8,14,16,12,10, 9, 1, 1, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 7, 8, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0]
        ],
        // level 16
        [
            [0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 8, 8, 8, 8,14, 9,14, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1,10,11,15, 1, 8,14, 9, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1,13, 9,10,15,14,12, 8, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 8, 8, 8, 8, 8, 8, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1,13,10, 1,12, 1,10, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 8, 8, 8,10, 1, 8, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 9,11, 8,10, 8, 1, 8, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 8, 8, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 1, 1, 9,10, 8, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 9, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    ];

    // __GLOBAL_STAGE_SCREEN_PROBLEMS__: time and cursor starting postions
    const __GAME_STAGES_STARTING_POSITIONS__ = [
        { timeInSec: 90, cursorX: 320, cursorY: 320 }, // L0
        { timeInSec: 90, cursorX: 224, cursorY: 288 }, // L1
        { timeInSec: 90, cursorX: 352, cursorY: 224 }, // L2
        { timeInSec: 90, cursorX: 288, cursorY: 256 }, // L3
        { timeInSec: 90, cursorX: 384, cursorY: 160 }, // L4
        { timeInSec: 90, cursorX: 256, cursorY: 160 }, // L5
        { timeInSec: 150, cursorX: 448, cursorY: 192 }, // L6
        { timeInSec: 60, cursorX: 352, cursorY: 320 }, // L7
        { timeInSec: 90, cursorX: 224, cursorY: 320 }, // L8
        { timeInSec: 60, cursorX: 352, cursorY: 288 }, // L9
        { timeInSec: 90, cursorX: 288, cursorY: 320 }, // L10
        { timeInSec: 90, cursorX: 256, cursorY: 224 }, // L11
        { timeInSec: 120, cursorX: 288, cursorY: 288 }, // L12
        { timeInSec: 90, cursorX: 320, cursorY: 96 }, // L13
        { timeInSec: 120, cursorX: 320, cursorY: 32 }, // L14
        { timeInSec: 240, cursorX: 224, cursorY: 32 }, // L15
        { timeInSec: 270, cursorX: 448, cursorY: 128 }, // L16
        { timeInSec: 90, cursorX: 288, cursorY: 128 }  // L17
    ];

    const __NAME__ = "Cyrip's crix";
    const __CODED_BY__ = "Cyrip";
    const __GRAPHIC_BY__ = "Godlike";
    const __VERSION__ = "0.2020";

    const __NEEDED_RESOURCE__ = 58

    const __DEVELOPMENT__ = false;
    const __KEY_SOLVED_ENABLED__ = __DEVELOPMENT__;

    const __PICTURE_BASE__ = "./images/";

    // firefox canplaytrough miatt?
    const __SOUND_EXTENSION__ = "mp3";

    const constCurrentLevel = 1;

    // 32*32, csak négyzetekkel dolgozunk
    const constSpriteSize = 32;

    const mapSizeX = 20;
    const mapSizeY = 12;

    const constStageWidth = 800;
    const constStageHeight = 500;

    const constBackgroundColor = "#000000";

    const interruptTimer = 1000 / 100;  // PS beállitasa 25
    const constLiftSpeed = 1;

    const stageOffsetX = 0;
    const stageOffsetY = 0;

    const __EFFECTS_COUNT__ = 5;

    // http://www.musicaddict.com/mp3/ancient-egypt-ritual-music--youtube.html
    const __SOUNDS_BASE__ = "./sounds/";

    const __BG_MUSIC__ = [
        "ae." + __SOUND_EXTENSION__,
        "arabic." + __SOUND_EXTENSION__
    ];

    const __SOUND_EFFECTS__ = [
        'click.' + __SOUND_EXTENSION__,
        'ravensound.' + __SOUND_EXTENSION__,
        'crowcall.' + __SOUND_EXTENSION__
    ];

    const __EFFECT_CLICK__ = 0;
    const __EFFECT_GAME_OVER__ = 1;
    const __EFFECT_RETRY__ = 2;
    const __EFFECT_GAME_WIN__ = 0;

    // játszott index
    var playedBackgroundMusic = 0;
    var loadedResources = 0;
    var currentAudioTrack = 0;

    // tipusok, spriteImages
    var __SI__ = [
        "stone_frame.png", "empty", // 0, 1
        "ni", "ni", "ni", "cursor_moved.gif", "cursor.gif", "lift.png", // 2,3,4,5,6,7 fenntartva
        "stone_inner.png", // 8
        // __NORMAL_SPRITE__, 16x képek is innen töltődnek
        "stone_1.png", // 9
        "stone_2.png", "stone_3.png", // 10, 11
        "stone_4.png", "stone_5.png", // 12, 13
        "stone_6.png", "stone_7.png", // 14, 15
        "stone_8.png"
    ]; // 16

    const __IMAGE_NAMES__ = [
        "popupwindow.png",
        "new_game_off.png",
        "new_game_on.png",
        "retry_off.png",
        "retry_on.png",
        "game_over_off.png",
        "game_over_on.png",
        "you_win_off.png",
        "you_win_on.png",
        "next_stage_off.png",
        "next_stage_on.png",
        "brix_dos.png"
    ];

    const __BACKGROUND_IMAGES__ = [
        {
            name: "deskboard1.png",
            x: 192,
            y: 192
        }, {
            name: "time.png",
            x: 64,
            y: 16
        }, {
            name: "minsign.png",
            x: 16,
            y: 16
        }, {
            name: "retry.png",
            x: 80,
            y: 16
        }, {
            name: "level.png",
            x: 80,
            y: 16
        }, {
            name: "x.png",
            x: 16,
            y: 16
        }, {
            name: "score.png",
            x: 30,
            y: 12
        }, {
            name: "right.png",
            x: 160,
            y: 384
        }, {
            name: "bottom1.png",
            x: 832,
            y: 116
        }, {
            name: "sound_high.png",
            x: 32,
            y: 32
        }, {
            name: "sound_mute.png",
            x: 32,
            y: 32
        }, {
            name: "music_run.png",
            x: 32,
            y: 32
        }, {
            name: "music_stop.png",
            x: 32,
            y: 32
        }, {
            name: "exit.png",
            x: 32,
            y: 32
        }, {
            name: "reload.png",
            x: 32,
            y: 32
        }
    ];

    const __POPUP_WIN_CENTER__ = constStageWidth / 2;

    const __POPUP_WIN_OFFSET_X__ = __POPUP_WIN_CENTER__ - (150);
    const __POPUP_WIN_OFFSET_Y__ = constStageHeight / 2 - 100;

    const __POPUP_BUTTON_OFFSET_Y__ = 85;

    const __ICON_EFFECT__ = 0;
    const __ICON_SOUND__ = 1;
    const __ICON_RETRY__ = 2;
    const __ICON_EXIT__ = 3;

    const __OPTIONS_OFFSET_X__ = 660;
    const __OPTIONS_OFFSET_Y__ = 80;

    const __ICONS__ = [
        {
            top: __OPTIONS_OFFSET_Y__,
            left: __OPTIONS_OFFSET_X__,
            width: 24,
            height: 24
        }, {
            top: __OPTIONS_OFFSET_Y__ + 48,
            left: __OPTIONS_OFFSET_X__,
            width: 24,
            height: 24
        }, {

            top: __OPTIONS_OFFSET_Y__ + 96,
            left: __OPTIONS_OFFSET_X__,
            width: 24,
            height: 24
        }, {
            top: __OPTIONS_OFFSET_Y__ + 144,
            left: __OPTIONS_OFFSET_X__,
            width: 24,
            height: 24
        }
    ];

    const __WINDOW_TARGET_LOADER__ = 0;
    const __WINDOW_TARGET_MAIN__ = 1;
    const __WINDOW_TARGET_GAME__ = 2;
    const __WINDOW_TARGET_RETRY__ = 3;
    const __WINDOW_TARGET_WIN__ = 4;
    const __WINDOW_TARGET_NEXT_STAGE__ = 5;
    const __WINDOW_TARGET_GAME_OVER__ = 6;

    const __HANDLER_FUNCTION__ = 1;

    const __START_LIFE__ = 3;

    const __STAND__ = 0;
    const __FALL__ = 1;

    const __EMPTY__ = -1;

    const __FALSE__ = -1;
    const __NO_COLLISION__ = -1;

    const __NORMAL_SPRITE__ = 8;
    const __WALL_SPRITE__ = 8;
    const __BG_SPRITE__ = 0;

    const __LIFT_SPRITE__ = 7;

    const __CURSOR_MOVE__ = 5;
    const __CURSOR__ = 6;

    const __LEFT__ = -1;
    const __RIGHT__ = 1;
    const __UP__ = -1;
    const __DOWN__ = 1;

    const __KEY_UP__ = 119;
    const __KEY_DOWN__ = 115;
    const __KEY_LEFT__ = 97;
    const __KEY_RIGHT__ = 100;
    const __KEY_SEL__ = 32;
    const __KEY_RESTART__ = 114; // r
    const __KEY_NEW__ = 110; // B

    const __KEY_MUSIC__ = 109; // M
    const __KEY_EFFECT__ = 101; // E

    const __KEY_SOLVED__ = 67; // 67

    const __RUN__ = true;
    const __STOP__ = false;

    const constXDirections = [0, 0, 1, 0, 0, 0, 0, 0, -1];
    const constYDirections = [0, -1, 0, 0, 1, 0, 0, 0, 0];

    const __IMG_POPUP__ = 0;

    const __IMG_NEW_GAME__ = 1;
    const __IMG_NEW_GAME_ON__ = 2;

    const __IMG_RETRY__ = 3;
    const __IMG_RETRY_ON__ = 4;

    const __IMG_GAME_OVER__ = 5;
    const __IMG_GAME_OVER_ON__ = 6;

    const __IMG_WIN__ = 7;
    const __IMG_WIN_ON__ = 8;

    const __IMG_NEXT_STAGE__ = 9;
    const __IMG_NEXT_STAGE_ON__ = 10;

    const __IMG_BRIX_DOS__ = 11;

    const __NEW_GAME_FLIPFLOP__ = 1;

    var musicEnabled = true;
    var effectsEnabled = true;

    var __IMAGES__ = Array();

    var onRetry = false;
    var onNewGame = false;
    var onGameOver = false;
    var onWin = false;
    var onNextStage = false;

    // for debugging purposes
    /*
        function asyncWriter() {
            console.log(loadedResources)
        }
        setInterval(asyncWriter, 5000);
    */

    function EffectHandler() {
        this._EFFECTS = Array();
        for (var count = 0; count < __SOUND_EFFECTS__.length; count++) {
            var audio = document.createElement('audio');
            audio.src = __SOUNDS_BASE__ + __SOUND_EFFECTS__[count];
            //audio.preload = 'auto';
            audio.addEventListener('canplaythrough', function () {
                loadedResources++
            })
            audio.volume = 0.8;
            audio.loop = false;
            this._EFFECTS[count] = audio;
            // audio.play();
        };
        // az ütközések, egyszerre több is mehet
        this._TRACKS = Array();
        for (var count = 0; count <= __EFFECTS_COUNT__; count++) {
            var audio = document.createElement('audio');
            audio.src = './sounds/crash.' + __SOUND_EXTENSION__;
            audio.addEventListener('canplaythrough', function () {
                loadedResources++
            })
            audio.volume = 0.8;
            audio.loop = false;
            this._TRACKS[count] = audio;
        }

        var music = document.createElement('audio');
        music.volume = 0.1;
        music.loop = false;

        var helper = this;
        // ha vége, jöhet a következő
        music.addEventListener('ended', function () {
            helper.playNextMusic();
        })
        this._music = music;
    }

    EffectHandler.prototype.playNextMusic = function () {
        this._music.src = __SOUNDS_BASE__ + __BG_MUSIC__[playedBackgroundMusic];
        // betöltődött
        if (musicEnabled) this._music.play();
        if (playedBackgroundMusic < __BG_MUSIC__.length - 1) playedBackgroundMusic++; else playedBackgroundMusic = 0;
    }

    EffectHandler.prototype.stopMusic = function () {
        this._music.pause();
    }

    EffectHandler.prototype.getTrack = function () {
        if (currentAudioTrack < __EFFECTS_COUNT__)
            currentAudioTrack++;
        else
            currentAudioTrack = 0;
        return this._TRACKS[currentAudioTrack];
    }

    EffectHandler.prototype.playEffect = function (effect) {
        if (effectsEnabled) this._EFFECTS[effect].play();
    }

    EffectHandler.prototype.playNext = function () {
        var audio = this.getTrack();
        // audio.src = __SOUNDS_BASE__ + __EFFECTS__[sound];
        if (effectsEnabled) audio.play();
    }

    function WantToMove() {
        this.delSprite();
    }

    WantToMove.prototype.setSprite = function (sprite, direction) {
        this.sprite = sprite;
        this.counter = 16; // ennyi pixelt engedünk
        this.direction = direction;
    }

    WantToMove.prototype.delSprite = function () {
        this.sprite = null;
        this.counter = 0;
        this.direction = 0;
    }

    WantToMove.prototype.getSprite = function () {
        return this.sprite;
    }

    function Sprite(spriteType, x, y, stageContext, images) {
        this.x = x;
        this.y = y;
        this.stageContext = stageContext;
        this.spriteType = spriteType;
        this.images = images;
        this.direction = 0;
        this.load = 0;
        this.rendered = false;
        this.loadSprites = new Array();
        this.onLift = 0;
        this.onLiftSprite;
        this.dead = false;
        this.falling = __STAND__;
    }

    Sprite.prototype.draw = function () {
        this.stageContext.drawImage(this.images[this.spriteType], this.x, this.y);
    }

    Sprite.prototype.normalSprite = function () {
        return this.spriteType > __NORMAL_SPRITE__;
    }

    Sprite.prototype.liftSprite = function () {
        return this.spriteType == __LIFT_SPRITE__;
    }

    Sprite.prototype.setDirection = function (direction) {
        this.direction = direction;
    }

    Sprite.prototype.incLoad = function () {
        this.load++;
    }

    Sprite.prototype.decLoad = function () {
        if (this.load != 0)
            this.load--;
    }

    Sprite.prototype.isOnLift = function () {
        return this.onLift == 1;
    }

    Sprite.prototype.upWards = function () {
        return this.direction == __UP__;
    }

    Sprite.prototype.downWards = function () {
        return this.direction == __DOWN__;
    }

    Sprite.prototype.setIndex = function (index) {
        this.index = index;
    }

    Sprite.prototype.setType = function (type) {
        this.spriteType = type;
    }

    Sprite.prototype.setLoad = function (load) {
        this.load = load;
    }

    Sprite.prototype.setXY = function (x, y) {
        this.x = x;
        this.y = y;
    }

    Sprite.prototype.pushToLift = function (lift) {
        this.onLift = 1;
        this.onLiftSprite = lift;
    }

    Sprite.prototype.delFromLift = function () {
        this.onLift = 0;
        this.onLiftSprite = -1;
    }

    Sprite.prototype.isMapShape = function () {
        // ha nem esik, még nem tűnt el, és egész koordinátán van
        var intY = (this.y % constSpriteSize == 0);
        return (!this.dead) && (intY) && (this.falling != __FALL__) && (this.normalSprite());
    }

    Sprite.prototype.getMatrixX = function () {
        return Math.floor((stageOffsetX + this.x) / constSpriteSize);
    }

    Sprite.prototype.getMatrixY = function () {
        return Math.floor((stageOffsetY + this.y) / constSpriteSize);
    }

    Sprite.prototype.setX = function (x) {
        this.x = x;
    }

    Sprite.prototype.setY = function (y) {
        this.y = y;
    }

    Sprite.prototype.toString = function () {
        var intY = (this.y % constSpriteSize == 0);
    }

    Sprite.prototype.isDead = function () {
        return this.dead;
    }

    function Crix(currentLevel, stageContainer, stageWidth, stageHeight, backgroundColor, effectHandler) {
        console.log("Initializing Cyrip's Crix ...")
        // _Effect az ésszes hanggal kapcsolatos tevékenység

        this.currentWindow = __WINDOW_TARGET_LOADER__;
        document.body.addEventListener('click', this.generalMouseClickEventHandler.bind(this))
        document.body.addEventListener('mousemove', this.generalMouseMoveEventHandler.bind(this))
        document.body.addEventListener('keypress', this.generalKeyPressEventHandler.bind(this))

        this.playGround = document.getElementById("stage0");
        this.playGroundOffsetTop = this.playGround.getBoundingClientRect().top
        this.playGroundOffsetLeft = this.playGround.getBoundingClientRect().left

        this._Effect = effectHandler;
        this._Effect.playNextMusic();

        this.images = new Array();
        this.matrix = new Array(mapSizeY);

        for (var i = 0; i < mapSizeY; i++) {
            this.matrix[i] = new Array(mapSizeX);
        }

        // témbkezelések miatt
        this.CL = currentLevel;

        this.stageContainer = stageContainer; //#
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.backgroundColor = backgroundColor;

        this.selected = false;
        this.select = 0;
        this.selectedSprite = -1;

        this.restartGame = false;


        this.initStage();
        this.loadImages();

        this.numbers = new Array();
        this.smallNumbers = new Array();

        this.bgImages = new Array();

        this.loadNumbers();
        this.loadSmallNumbers();
        this.loadBGImages();

        this.restart = false;

        this.retry = __START_LIFE__;
        this.stageStartTime = 0;
        this.wantToMove = new WantToMove();
        this.textColor = "#FFF";
        this.cursor = new Sprite(__CURSOR__, 9 * constSpriteSize, 9 * constSpriteSize, this.stageContext, this.images);

        this.loadStageImages();
        this.initLoadWindow();
    }

    Crix.prototype.loadStageImages = function () {
        for (var i = 0; i < __IMAGE_NAMES__.length; i++) {
            var img = new Image();
            img.src = __PICTURE_BASE__ + __IMAGE_NAMES__[i];
            img.addEventListener('load', (e) => {
                loadedResources++
            })
            __IMAGES__[i] = img;
        }
    }

    Crix.prototype.initLoadWindow = function () {
        this.timeOutHandler = this.showLoadWindow.bind(this);
        this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);
    }

    Crix.prototype.showLoadWindow = function () {
        this.stageContext.fillStyle = "black";
        this.stageContext.fillRect(0, 0, this.stageWidth, this.stageHeight);
        this.stageContext.fill();

        this._loadStr = "Loading... " + String.fromCharCode(32 + Math.floor((Math.random() * 128)));

        this.stageContext.lineWidth = 1;
        this.stageContext.font = "32px arial";
        this.stageContext.fillStyle = "white";

        this.stageContext.fillText(this._loadStr, 8, 30);
        if (loadedResources >= __NEEDED_RESOURCE__) {
            return this.initMainWindow();
        } else {
            this.timeOutHandler = this.showLoadWindow.bind(this);
            this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);
        }
    }

    Crix.prototype.initMainWindow = function () {
        this.currentWindow = __WINDOW_TARGET_MAIN__;
        this.timeOutHandler = this.showMainWindow.bind(this);
        this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);
    }

    Crix.prototype.showMainWindow = function () {
        this.stageContext.fillStyle = "black";
        this.stageContext.fillRect(0, 0, this.stageWidth, this.stageHeight);
        this.stageContext.fill();
        this.stageContext.drawImage(__IMAGES__[__IMG_POPUP__], __POPUP_WIN_OFFSET_X__, __POPUP_WIN_OFFSET_Y__);
        // retry 110x24
        if (onNewGame) showImg = __IMAGES__[__IMG_NEW_GAME_ON__]; else showImg = __IMAGES__[__IMG_NEW_GAME__];
        this.stageContext.drawImage(showImg, __POPUP_WIN_CENTER__ - 90, __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__);
        this.stageContext.drawImage(__IMAGES__[__IMG_BRIX_DOS__], __POPUP_WIN_OFFSET_X__ + 8, __POPUP_WIN_OFFSET_Y__ + 128);

        this.timeOutHandler = this.showMainWindow.bind(this);
        this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);
    }

    Crix.prototype.initRetryWindow = function () {
        // képek betöltése
        // this.loadStageImages();
        // mouse katt.
        this.currentWindow = __WINDOW_TARGET_RETRY__;

        this._Effect.playEffect(__EFFECT_RETRY__); // __EFFECT_GAME_OVER__ = 2;

        // indulókép renderelése
        this.timeOutHandler = this.showRetryWindow.bind(this);
        this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);
    }

    Crix.prototype.showRetryWindow = function () {
        // this.stageContext.fillRect(0, 0, this.stageWidth, this.stageHeight);

        this.stageContext.drawImage(__IMAGES__[__IMG_POPUP__], __POPUP_WIN_OFFSET_X__, __POPUP_WIN_OFFSET_Y__);
        // retry 110x24
        if (onRetry) showImg = __IMAGES__[__IMG_RETRY_ON__]; else showImg = __IMAGES__[__IMG_RETRY__];
        this.stageContext.drawImage(showImg, __POPUP_WIN_CENTER__ - 55, __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__);
        this.timeOutHandler = this.showRetryWindow.bind(this);
        this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);
    }

    Crix.prototype.initWinWindow = function () {
        this._Effect.playEffect(__EFFECT_GAME_WIN__);
        this.currentWindow = __WINDOW_TARGET_WIN__;
        this.timeOutHandler = this.showWinWindow.bind(this);
        this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);
    }

    Crix.prototype.showWinWindow = function () {
        this.stageContext.drawImage(__IMAGES__[__IMG_POPUP__], __POPUP_WIN_OFFSET_X__, __POPUP_WIN_OFFSET_Y__);
        // retry 110x24
        if (onWin) showImg = __IMAGES__[__IMG_WIN_ON__]; else showImg = __IMAGES__[__IMG_WIN__];
        this.stageContext.drawImage(showImg, __POPUP_WIN_CENTER__ - 80, __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__);

        this.timeOutHandler = this.showWinWindow.bind(this);
        this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);
    }

    Crix.prototype.initNextStageWindow = function () {
        this._Effect.playEffect(__EFFECT_GAME_WIN__);
        this.currentWindow = __WINDOW_TARGET_NEXT_STAGE__;
        // indulókép renderelése
        this.timeOutHandler = this.showNextStageWindow.bind(this);
        this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);
    }

    Crix.prototype.showNextStageWindow = function () {
        this.stageContext.drawImage(__IMAGES__[__IMG_POPUP__], __POPUP_WIN_OFFSET_X__, __POPUP_WIN_OFFSET_Y__);
        // retry 110x24
        if (onNextStage) showImg = __IMAGES__[__IMG_NEXT_STAGE_ON__]; else showImg = __IMAGES__[__IMG_NEXT_STAGE__];
        this.stageContext.drawImage(showImg, __POPUP_WIN_CENTER__ - 105, __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__);
        this.timeOutHandler = this.showNextStageWindow.bind(this);
        this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);
    }

    Crix.prototype.initGameOverWindow = function () {
        this.currentWindow = __WINDOW_TARGET_GAME_OVER__;
        this._Effect.playEffect(__EFFECT_GAME_OVER__);
        // indulókép renderelése
        this.timeOutHandler = this.showGameOverWindow.bind(this);
        this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);
    }

    Crix.prototype.showGameOverWindow = function () {
        // this.stageContext.fillRect(0, 0, this.stageWidth, this.stageHeight);
        this.stageContext.drawImage(__IMAGES__[__IMG_POPUP__], __POPUP_WIN_OFFSET_X__, __POPUP_WIN_OFFSET_Y__);
        // retry 110x24
        if (onGameOver) showImg = __IMAGES__[__IMG_GAME_OVER_ON__]; else showImg = __IMAGES__[__IMG_GAME_OVER__];
        this.stageContext.drawImage(showImg, __POPUP_WIN_CENTER__ - 94, __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__);

        this.timeOutHandler = this.showGameOverWindow.bind(this);
        this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);
    }

    Crix.prototype.startStage = function () {
        this.currentWindow = __WINDOW_TARGET_GAME__;
        this.selected = false;
        this.select = 0;
        this.selectedSprite = -1;

        this.stageState = __RUN__;
        this.stageSolved = false;

        this.cursor.setXY(__GAME_STAGES_STARTING_POSITIONS__[this.CL].cursorX, __GAME_STAGES_STARTING_POSITIONS__[this.CL].cursorY);
        this.sprites = new Array();

        this.spriteNums = new Array();
        for (var i = __LIFT_SPRITE__; i < __SI__.length; i++) {
            this.spriteNums[i] = 0;
        }

        this.parseStage();

        if (__HANDLER_FUNCTION__ == 0) {
            // this.timeOutHandler = this.timeOutFunction.bind(this);
            // this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);
        }
        else {
            //	showMainWindow
            this.timeOutHandler = this.doChange.bind(this);
            this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);
        }
        this.stageStartTime = new Date().getTime();
    }

    Crix.prototype.gameRestart = function () {
        this.restartGame = false;
        this.restart = false;
        this.retry = __START_LIFE__;
        this.CL = constCurrentLevel;
        this.score = 0;
        this.startStage();
    }

    Crix.prototype.stageRestart = function () {

        this.wantToMove.delSprite();

        this.restart = false;

        if (this.retry > 0) {
            //log("retry");
            // this.startStage();
            this.initRetryWindow();
        }

        else {
            this.stageSolved = false;
            this.endGame();
        }
    }

    Crix.prototype.endGame = function () {
        this.initGameOverWindow();
    }
    // minden idefut, stop, timeout, retry = 0
    Crix.prototype.endStage = function () {

        this.wantToMove.delSprite();

        if (this.stageSolved) {
            // van még pálya
            this.score += this.timeBack * 10;

            if (this.CL < __GAME_STAGE_DEFINITIONS__.length - 1) {
                this.CL++;
                this.initNextStageWindow();
                // this.startStage();
            } else {
                this.initWinWindow();
            }
        }
        else {
            if (this.retry >= 1) this.retry--;
            this.stageRestart();
        }
    }

    Crix.prototype.tryMove = function (sprite, direction) {
        // direction = __LEFT__;			
        var movingSprite = this.sprites[sprite];

        if (this.select == 1) {
            var collision = this.spriteAtPosNew(movingSprite.x + (direction * constSpriteSize), movingSprite.y, 0);
            if (collision == -1) {
                collision = this.spriteAtPosNew(movingSprite.x + (direction * constSpriteSize), movingSprite.y + 31, 0);
            };

            if (movingSprite.falling != __FALL__) {

                // nincs ütközés, mehet a mozgás
                if (collision == -1) {

                    this.cursor.x = this.cursor.x + (constSpriteSize * direction);
                    this.sprites[sprite].x = this.sprites[sprite].x + (constSpriteSize * direction);

                    // ha direction változásnál vagyunk
                    if (movingSprite.isOnLift()) {
                        this.deleteLoads(this.sprites[movingSprite.onLiftSprite]);
                    }

                    // this.wanToMove.delSprite();
                    return true;
                }
                else {
                    //	this.wantToMove.setSprite(this.sprites[this.selectedSprite],this.cursor.x - constSpriteSize, this.cursor.y);
                }
            }
        }
        else {
            //	this.cursor.x -= constSpriteSize;
        }
        return false;
    }
    // UP,DOWN
    Crix.prototype.liftCollision = function (lift, direction) {
        currentLift = this.sprites[lift];
        if (direction == __DOWN__) {
            var collision = this.spriteAtPos(currentLift.x, currentLift.y, direction);
        }
        else {
            var collision = this.spriteAtPos(currentLift.x, currentLift.y - (currentLift.load * constSpriteSize), direction);
        }
        return collision;
    }

    Crix.prototype.liftCollisionWNS = function (lift, direction) {
        // currentLift = this.sprites[lift];
        var collision = this.liftCollision(lift, direction);
        if (collision != __FALSE__) {
            if (this.sprites[collision].normalSprite()) {
                return collision;
            }
        }
        return __FALSE__;
    }

    Crix.prototype.showMatrix = function () {
        this.makeMap();
        for (var i = 0; i < mapSizeY; i++) {
            var line = "";
            for (var j = 0; j < mapSizeX; j++) {
                if (this.matrix[i][j] == -1) {
                    line += " ";

                }
                else
                    line += "x";

            }
        }
    }

    Crix.prototype.deleteMatrix = function () {
        var matrixElement = {
            index: -1,
            spriteType: -1,
            vector: 0
        };
        for (var i = 0; i < mapSizeY; i++) {
            for (var j = 0; j < mapSizeX; j++) {
                this.matrix[i][j] = matrixElement;
            }
        }
    }

    Crix.prototype.getShapeAtDirection = function (y0, x0, direction) {
        var x = 0;
        var y = 0;

        if (direction == 1)
            y = -1;
        if (direction == 2)
            x = 1;
        if (direction == 4)
            y = 1;
        if (direction == 8)
            x = -1;
        x += x0;
        y += y0;

        if (x >= 0 && x < mapSizeX && y >= 0 && y < mapSizeY) {
            return this.matrix[y][x];
        }
        else
            return -1;
    }

    Crix.prototype.makeMap = function () {
        var spriteNum = 0;
        this.deleteMatrix();
        //	this.shapes = new Array();
        for (var i = this.sprites.length - 1; i > 0; i--) {

            var CSP = this.sprites[i];
            var matrixElement = {
                index: i,
                spriteType: CSP.spriteType,
                vector: 0
            };
            if (CSP.isMapShape()) {
                spriteNum++;
                this.matrix[CSP.getMatrixY()][CSP.getMatrixX()] = matrixElement;
            }
            else {
                var matrixElement = {
                    index: -1,
                    spriteType: CSP.spriteType,
                    vector: 0
                };
                this.matrix[CSP.getMatrixY()][CSP.getMatrixX()] = matrixElement;
            }
        }
        // először fura a shape?
        var direction;
        var vector = 0;

        for (var i = 0; i < mapSizeY; i++) {
            for (var j = 0; j < mapSizeX; j++) {
                if (this.matrix[i][j].index != -1) {
                    var vector = 0;
                    for (pow = 0; pow <= 3; pow++) {
                        var direction = Math.pow(2, pow);
                        var shape = this.getShapeAtDirection(i, j, direction);
                        if (shape.index != -1 && this.matrix[i][j].index != -1)
                            if (shape.spriteType == this.matrix[i][j].spriteType) {
                                vector += direction;

                                // ezen a pozon, ennek a typenak testvere van, ebben az iranyban

                            }
                    }
                    this.matrix[i][j].vector = vector;
                }
            }

        }
    }

    Crix.prototype.spriteInShapes = function (index, type) {
        var found = false;
        var sl = this.shapes.length;
        if (index > __EMPTY__) {
            for (var shape = 0; shape < sl; shape++) {
                var ssl = this.shapes[shape].elements.length;
                for (var elm = 0; elm < ssl; elm++) {
                    if (index == this.shapes[shape].elements[elm])
                        found = true;
                }
            }
        }
        else
            return true; //empty sprite-tal nem foglalkozuink
        return found;
    }

    Crix.prototype.reverseDirection = function (direction) {
        if (direction <= 2)
            return direction * 4
        else
            return direction / 4;
    }

    Crix.prototype.searchSiblings = function (i, j, rootDistance, parentDirection, spriteType, shapeNumber) {
        var index = this.matrix[i][j].index;
        this.shapes[shapeNumber].elements.push(index);

        rootDistance++; // 1
        var vector = this.matrix[i][j].vector;

        for (var pow = 0; pow <= 3; pow++) {
            var direction = Math.pow(2, pow);

            // ebben az iranyban van ilyen tipusu elem, a vektorizálás adja
            if ((vector & direction) == direction) {
                // és ez nem a bejévé irény
                if (direction != parentDirection) {
                    var last = this.searchSiblings(i + constYDirections[direction], j + constXDirections[direction], rootDistance, this.reverseDirection(direction), spriteType, shapeNumber);
                }
            }
        }
    }

    Crix.prototype.getShapes = function () {
        this.shapes = new Array();
        this.makeMap();
        var shapeNumber = 0;

        for (var i = 0; i < mapSizeY; i++) {
            for (var j = 0; j < mapSizeX; j++) {
                var index = this.matrix[i][j].index;
                var spriteType = this.matrix[i][j].type;

                if (!this.spriteInShapes(index, spriteType)) {
                    // console.log(index);
                    var elements = new Array();
                    this.shapes[shapeNumber] = {
                        spriteType: spriteType,
                        elements: elements
                    };
                    //console.log("siblingek keresése " + index + " vec " + this.matrix[i][j].vector);
                    this.searchSiblings(i, j, -1, 0, spriteType, shapeNumber++);

                }
            }
        }
        for (var i = 0; i < shapeNumber; i++) {

            var elmNum = this.shapes[i].elements.length;

            if (elmNum > 1) {

                for (var j = 0; j < elmNum; j++) {
                    var elm = this.shapes[i].elements[j];

                    this.sprites[elm].dead = true;
                    this.sprites[elm].visible = false;
                    this.sprites[elm].x = 0;
                    this.sprites[elm].y = 0;

                    this.spriteNums[this.sprites[elm].spriteType]--;
                    if (this.selectedSprite == elm) {
                        this.selectedSprite = -1;
                        this.select = 0;
                    }
                    // this.sprites[this.shapes[i].elements[j]] = null;

                    // this.
                }
                this.playTrack(); // __EFFECT_GAME_OVER__ = 2;
                // nincs dapp
            }
        }

        // elemek ellenőrzése
        if (this.checkShapesOnStage() == 0) {
            this.stageState = __STOP__;
            this.stageSolved = true;
        };
    }

    Crix.prototype.checkShapesOnStage = function () {
        var notDead = 0;
        var sl = this.sprites.length;
        for (var i = 0; i < sl; i++) {
            if (this.sprites[i].normalSprite()) {
                if (!this.sprites[i].isDead()) {
                    notDead++;
                }
            }
        }
        return notDead;
    }

    Crix.prototype.isFall = function (i) {
        return this.sprites[i].normalSprite() && this.sprites[i].direction == __STAND__ && !this.sprites[i].isOnLift() && !this.sprites[i].isDead();
    }

    Crix.prototype.thereIsFalling = function () {
        var falling = false;
        var sl = this.sprites.length - 1;
        for (var i = sl; i > 0; i--) {
            var collision = this.spriteAtPos(this.sprites[i].x, this.sprites[i].y, __DOWN__);

            //	 if ( this.sprites[i].normalSprite() && collision == __FALSE__ && this.sprites[i].direction == __STAND__ && !this.sprites[i].isOnLift() ) {
            if (this.isFall(i) && collision == __FALSE__) {
                this.sprites[i].direction = __FALL__;
                this.sprites[i].y += 1;
                this.sprites[i].falling = __FALL__;
                falling = true;

            }
            else
                if (this.sprites[i].normalSprite() && collision != __FALSE__) {

                    // hibés falling cursor mozgatés esetén
                    this.sprites[i].falling = __STAND__;
                }
        }
        return falling;
    }

    Crix.prototype.thereIsNewLoad = function () {
        var newLoad = false;

        for (var lift = this.sprites.length - 1; lift > 0; lift--) {
            if (this.sprites[lift].liftSprite()) {
                //	var lift = this.sprites[i].getSprite();
                var CWNS = this.liftCollisionWNS(lift, __UP__);
                if (this.sprites[lift].upWards && CWNS != __FALSE__ && !this.sprites[CWNS].isOnLift()) {
                    this.sprites[lift].loadSprites.push(CWNS);
                    //this.sprites[CWNS].onLift = 1;
                    this.sprites[CWNS].pushToLift(lift);
                    this.sprites[lift].incLoad();
                    newLoad = true;

                }
            }
        }
        return newLoad;
    }

    Crix.prototype.setLiftAndLoadPos = function (liftIndex, direction) {
        var currLift = this.sprites[liftIndex];
        currLift.y = currLift.y + direction;
        currLift.direction = direction;
        var sl = currLift.loadSprites.length;
        for (var i = 0; i < sl; i++) {
            var load = currLift.loadSprites[i];
            this.sprites[load].direction = direction;
            this.sprites[load].y += direction;
            //this.sprites[collisionSprite].direction = -1 	
        };
    }

    Crix.prototype.deleteLoads = function (currLift) {
            // var currLift = this.sprites[liftIndex];
            var sl = currLift.loadSprites.length
            for (var i = 0; i < sl; i++) {
                var load = currLift.loadSprites[i];
                this.sprites[load].delFromLift();
                //this.sprites[load].onLift = 0;
                //this.sprites[load].y-=1;
                //this.sprites[collisionSprite].direction = -1 	
            };
            currLift.load = 0;
            currLift.loadSprites = new Array();
    }

    Crix.prototype.fromLiftToSpace = function () {
        // megyénk végig, ha csak a liftonk tesztelése
        // ha nincs alatta, akkor leesett, az adott lift minden elemének térlése
        for (var sprite = this.sprites.length - 1; sprite > 0; sprite--) {
            if (this.sprites[sprite].isOnLift()) {
                var collision = this.spriteAtPosFromLift(this.sprites[sprite].x, this.sprites[sprite].y, __DOWN__);
                if (collision == __FALSE__) {
                    this.deleteLoads(this.sprites[this.sprites[sprite].onLiftSprite]);
                }
            }
        }
    }

    Crix.prototype.liftCollisions = function () {
        for (var lift = this.sprites.length - 1; lift > 0; lift--) {

            var liftSprite = this.sprites[lift];

            if (liftSprite.liftSprite()) {

                var CUP = this.liftCollision(lift, __UP__);
                var CDOWN = this.liftCollision(lift, __DOWN__);

                //*** felfelé megyünk
                if (liftSprite.direction == __UP__) {

                    //*** nincs ütközés
                    if (CUP == __FALSE__) {
                        this.setLiftAndLoadPos(lift, __UP__);

                        //*** ütközés	
                    }
                    else
                        if (CUP != __FALSE__ && CDOWN == __FALSE__) {

                            this.setLiftAndLoadPos(lift, __DOWN__);
                        }
                        else
                            if (CUP == __FALSE__ && CDOWN != __FALSE__) {
                                //semmit nem teszünk	
                            }
                            else {
                                // hiba

                            }
                }
                //*** lefelé megyünk
                if (liftSprite.direction == __DOWN__) {
                    //*** nincs ütközés
                    if (CDOWN == __FALSE__) {
                        this.setLiftAndLoadPos(lift, __DOWN__);

                        //*** ütközés	
                    }
                    else
                        if (CDOWN != __FALSE__ && CUP == __FALSE__) {
                            this.setLiftAndLoadPos(lift, __UP__);
                        }
                        else
                            if (CDOWN == __FALSE__ && CUP != __FALSE__) {
                                //semmit nem teszünk				
                            }
                            else {
                                // elvileg hiba
                            }
                }

            }
        }
    }

    Crix.prototype.stageInit = function () {
        this.stageContext.fillStyle = this.backgroudnColor;
        this.stageContext.fillRect(0, 0, this.stageWidth, this.stageHeight);
        this.drawBackground();

        if (this.wantToMove.getSprite() != null) {

            //if (this.tryMove(this.wantToMove.newX,this.wantToMove.newY,this.wantToMove.sprite,this.wantToMove.direction) ) {
            if (this.tryMove(this.wantToMove.sprite, this.wantToMove.direction)) {
                this.wantToMove.delSprite();
            };

        }

        if (this.wantToMove.getSprite() != null) {
            this.wantToMove.counter -= 1;
            if (this.wantToMove.counter == 0) {
                this.wantToMove.delSprite();
            }
        }
    }

    Crix.prototype.doChange = function () {
        // rajzolás és wanttomove teszt
        // sorrend stageinit thereisfall
        // forditva meg az eltunés bibi
        // trymove-t is!

        while (this.thereIsFalling()) { }

        this.getShapes();
        this.stageInit();

        while (this.thereIsFalling()) { }

        // liftről mozgatás ell.
        this.fromLiftToSpace();
        // összes normal sprite direction beallítása __STAND__-re
        for (var i = this.sprites.length - 1; i > 0; i--) {
            if (this.sprites[i].normalSprite()) {
                this.sprites[i].direction = __STAND__;
                this.sprites[i].falling = __STAND__;
            }
        }

        while (this.thereIsNewLoad()) {}

        this.liftCollisions();
        this.drawSprites();

        if (this.stageState == __RUN__) {
            var __timeOutHandler = this.doChange.bind(this);
            this.timeOut = setTimeout(__timeOutHandler, interruptTimer);
        }
        else {

            if (this.restart) {
                this.stageRestart();
            }
            else
                if (this.restartGame) {
                    this.gameRestart();
                }
                else {

                    this.endStage();
                }

        }
    }

    Crix.prototype.playTrack = function () {
        this._Effect.playNext();
    }

    Crix.prototype.mainWindowMouseMoveEvent = function (evt) {
        var y = evt.clientY - this.playGroundOffsetTop;
        var x = evt.clientX - this.playGroundOffsetLeft;

        var btnWidth = 180 / 2;
        var btnLeft = __POPUP_WIN_CENTER__ - btnWidth;
        var btnRight = __POPUP_WIN_CENTER__ + btnWidth;

        var btnTop = __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__;
        var btnBottom = __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__ + 24;

        if (x > btnLeft && x < btnRight && y > btnTop && y < btnBottom) {
            onNewGame = true;
        } else {
            onNewGame = false;
        }
    }

    Crix.prototype.generalKeyPressEventHandler = function (evt) {
        if (this.currentWindow == __WINDOW_TARGET_GAME__) {
            return this.stageKeyEvent(evt)
        }
    }

    Crix.prototype.generalMouseClickEventHandler = function (evt) {
        if (this.currentWindow == __WINDOW_TARGET_LOADER__) {
            return this.loadWindowMouseEvent(evt)
        } else if (this.currentWindow == __WINDOW_TARGET_MAIN__) {
            return this.mainWindowMouseEvent(evt)
        } else if (this.currentWindow == __WINDOW_TARGET_RETRY__) {
            return this.retryWindowMouseEvent(evt)
        } else if (this.currentWindow == __WINDOW_TARGET_WIN__) {
            return this.winWindowMouseEvent(evt)
        } else if (this.currentWindow == __WINDOW_TARGET_NEXT_STAGE__) {
            return this.nextStageWindowMouseEvent(evt)
        } else if (this.currentWindow == __WINDOW_TARGET_GAME_OVER__) {
            return this.gameOverWindowMouseEvent(evt)
        } else if (this.currentWindow == __WINDOW_TARGET_GAME__) {
            return this.stageMouseEvent(evt)
        }
        return false
    }

    Crix.prototype.generalMouseMoveEventHandler = function (evt) {
        if (this.currentWindow == __WINDOW_TARGET_LOADER__) {
            return true
        } else if (this.currentWindow == __WINDOW_TARGET_MAIN__) {
            return this.mainWindowMouseMoveEvent(evt)
        } else if (this.currentWindow == __WINDOW_TARGET_RETRY__) {
            return this.retryWindowMouseMoveEvent(evt)
        } else if (this.currentWindow == __WINDOW_TARGET_WIN__) {
            return this.winWindowMouseMoveEvent(evt)
        } else if (this.currentWindow == __WINDOW_TARGET_NEXT_STAGE__) {
            return this.nextStageWindowMouseMoveEvent(evt)
        } else if (this.currentWindow == __WINDOW_TARGET_GAME_OVER__) {
            return this.gameOverWindowMouseMoveEvent(evt)
        }
        return false
    }

    Crix.prototype.loadWindowMouseEvent = function (evt) {
        clearTimeout(this.timeOut);
        this.initMainWindow();
    }

    Crix.prototype.mainWindowMouseEvent = function (evt) {
        var y = evt.clientY - this.playGroundOffsetTop
        var x = evt.clientX - this.playGroundOffsetLeft;

        // felette, indulhat a játék
        if (onNewGame) {
            this._Effect.playEffect(__EFFECT_CLICK__);
            clearTimeout(this.timeOut);
            this.gameRestart();
        }
    }

    Crix.prototype.retryWindowMouseMoveEvent = function (evt) {
        var y = evt.clientY - this.playGroundOffsetTop;
        var x = evt.clientX - this.playGroundOffsetLeft;

        var btnWidth = 110 / 2;
        var btnLeft = __POPUP_WIN_CENTER__ - btnWidth;
        var btnRight = __POPUP_WIN_CENTER__ + btnWidth;

        var btnTop = __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__;
        var btnBottom = __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__ + 24;

        // , __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__);

        if (x > btnLeft && x < btnRight && y > btnTop && y < btnBottom) {
            onRetry = true;
        } else {
            onRetry = false;
        }
    }

    Crix.prototype.retryWindowMouseEvent = function (evt) {
        // felette, indulhat a játék
        if (onRetry) {
            this._Effect.playEffect(__EFFECT_CLICK__);
            // jelenlegi timeout mainwindow törlése
            clearTimeout(this.timeOut);

            this.startStage();
        }
    }

    Crix.prototype.gameOverWindowMouseMoveEvent = function (evt) {
            var y = evt.clientY - this.playGroundOffsetTop;
            var x = evt.clientX - this.playGroundOffsetLeft;

            var btnWidth = 188 / 2;
            var btnLeft = __POPUP_WIN_CENTER__ - btnWidth;
            var btnRight = __POPUP_WIN_CENTER__ + btnWidth;

            var btnTop = __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__;
            var btnBottom = __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__ + 24;

            // , __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__);

            if (x > btnLeft && x < btnRight && y > btnTop && y < btnBottom) {
                onGameOver = true;
            } else {
                onGameOver = false;
            }
    }

    Crix.prototype.gameOverWindowMouseEvent = function (evt) {
        // felette, indulhat a játék
        if (onGameOver) {
            this._Effect.playEffect(__EFFECT_CLICK__);
            clearTimeout(this.timeOut);
            this.initMainWindow();
        }
    }

    Crix.prototype.winWindowMouseEvent = function (evt) {
        // felette, indulhat a játék
        if (onWin) {
            this._Effect.playEffect(__EFFECT_CLICK__);
            // jelenlegi timeout mainwindow törlése
            clearTimeout(this.timeOut);
            this.initMainWindow();
        }
    }

    Crix.prototype.winWindowMouseMoveEvent = function (evt) {
        var y = evt.clientY - this.playGroundOffsetTop;
        var x = evt.clientX - this.playGroundOffsetLeft;

        var btnWidth = 160 / 2;
        var btnLeft = __POPUP_WIN_CENTER__ - btnWidth;
        var btnRight = __POPUP_WIN_CENTER__ + btnWidth;

        var btnTop = __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__;
        var btnBottom = __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__ + 24;

        // , __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__);

        if (x > btnLeft && x < btnRight && y > btnTop && y < btnBottom) {
            onWin = true;
        } else {
            onWin = false;
        }
    }

    Crix.prototype.nextStageWindowMouseEvent = function (evt) {
        if (onNextStage) {
            this._Effect.playEffect(__EFFECT_CLICK__);
            // jelenlegi timeout mainwindow törlése
            clearTimeout(this.timeOut);
            this.startStage();
        }
    }

    Crix.prototype.nextStageWindowMouseMoveEvent = function (evt) {
            var y = evt.clientY - this.playGroundOffsetTop;
            var x = evt.clientX - this.playGroundOffsetLeft;

            var btnWidth = 210 / 2;
            var btnLeft = __POPUP_WIN_CENTER__ - btnWidth;
            var btnRight = __POPUP_WIN_CENTER__ + btnWidth;

            var btnTop = __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__;
            var btnBottom = __POPUP_WIN_OFFSET_Y__ + __POPUP_BUTTON_OFFSET_Y__ + 24;

            if (x > btnLeft && x < btnRight && y > btnTop && y < btnBottom) {
                onNextStage = true;
            } else {
                onNextStage = false;
            }
    };

    Crix.prototype.stageMouseEvent = function (evt) {
        clearTimeout(this.timeOut);
        this._Effect.playEffect(__EFFECT_CLICK__);

        this.wantToMove.delSprite();
        var y = evt.clientY - this.playGroundOffsetTop;
        var x = evt.clientX - this.playGroundOffsetLeft;

        var cx = Math.floor(x / constSpriteSize) * constSpriteSize;
        var cy = Math.floor(y / constSpriteSize) * constSpriteSize;

        if (cx >= 192 && cx < 640 && cy < 384) {

            var sac = this.spriteAtCursor(cx, cy);
            //  console.log(sac);
            // ha ki van jelölve
            if (this.select == 1) {
                // ha ugyanaz, select levétele

                if (sac == this.selectedSprite) {
                    this.select = 0;
                    this.selectedSprite = -1;
                    this.cursor.x = cx;
                    this.cursor.y = cy;
                }
                else
                    if (sac == -1) {

                        // this.selectedSprite = sac;
                        // console.log("x " + x + " this.sprites[this.selectedSprite].x" + this.sprites[this.selectedSprite].x);
                        x < this.sprites[this.selectedSprite].x ? direction = __LEFT__ : direction = __RIGHT__;
                        this.wantToMove.setSprite(this.selectedSprite, direction);
                    }
                    else {
                        // ez jé csénya, de lasan 1 éra :)					
                        this.cursor.x = Math.floor(x / constSpriteSize) * constSpriteSize;
                        this.cursor.y = Math.floor(y / constSpriteSize) * constSpriteSize;

                        this.selectedSprite = sac;
                        if (this.selectedSprite == -1) {
                            this.select = 0;
                        }
                        if (this.selectedSprite != -1) {
                            // mindenféleképp selectél!
                            // kurzornél nem
                            this.select = 1;
                            this.sprites[this.selectedSprite].selected = true;
                        }
                    }

            }
            else {

                this.cursor.x = Math.floor(x / constSpriteSize) * constSpriteSize;
                this.cursor.y = Math.floor(y / constSpriteSize) * constSpriteSize;

                this.selectedSprite = sac;
                if (this.selectedSprite == -1) {

                    this.select = 0;
                }
                if (this.selectedSprite != -1) {
                    // mindenféleképp selectél!
                    // kurzornél nem
                    this.select = 1;
                    this.sprites[this.selectedSprite].selected = true;
                }
            }

        } else {
            // effect ki/be
            if (this.clickIcon(0, x, y)) effectsEnabled = !effectsEnabled;
            // zene ki/be
            if (this.clickIcon(1, x, y)) {
                musicEnabled = !musicEnabled;
                if (musicEnabled) this._Effect.playNextMusic(); else this._Effect.stopMusic();
            }

            // retry
            if (this.clickIcon(2, x, y)) {

                // this.retry--;
                this.stageSolved = false;
                this.stageState = __STOP__;
            }

            // vége
            if (this.clickIcon(3, x, y)) {

                this.stageSolved = false;
                // this.endGame();
                this.retry = 0;
                this.stageState = __STOP__;
            }
        }
        this.timeOutHandler = this.doChange.bind(this);
        this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);
    };

    Crix.prototype.clickIcon = function (index, cx, cy) {
        // icon koordináták ellenőrzése
        if (cx >= __ICONS__[index].left && cx <= __ICONS__[index].left + __ICONS__[index].width &&
            cy >= __ICONS__[index].top && cy <= __ICONS__[index].top + __ICONS__[index].height
        ) return true;
        return false;
    };

    Crix.prototype.stageKeyEvent = function () {
        clearTimeout(this.timeOut);
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        if (event.keyCode == __KEY_UP__ && this.cursor.y >= constSpriteSize) {
            this.cursor.y -= constSpriteSize;
        }

        if (event.keyCode == __KEY_DOWN__ && this.cursor.y < 352) {
            this.cursor.y += constSpriteSize;
        }

        if (event.keyCode == __KEY_RESTART__) {
            // this.cursor.y += constSpriteSize;
            //log("restart")
            // this.restart = true;
            this.stageSolved = false;
            this.stageState = __STOP__;
        }

        if (event.keyCode == __KEY_NEW__) {
            // this.cursor.y += constSpriteSize;
            //log("new");
            this.restartGame = true;
            this.stageState = __STOP__;
        }

        if (event.keyCode == __KEY_MUSIC__) {
            musicEnabled = !musicEnabled;
            if (musicEnabled) this._Effect.playNextMusic(); else this._Effect.stopMusic();
        }

        if (event.keyCode == __KEY_SOLVED__ && __KEY_SOLVED_ENABLED__ == true) {
            this.stageSolved = true;
            this.stageState = __STOP__;
        }

        if (event.keyCode == __KEY_EFFECT__) {
            effectsEnabled = !effectsEnabled;
        }

        if (event.keyCode == __KEY_LEFT__) {
            this.wantToMove.delSprite();

            if (this.select == 1 && this.sprites[this.selectedSprite].falling == __STAND__) {

                var collision = this.spriteAtPosNew(this.cursor.x, this.cursor.y, __LEFT__);
                if (collision == -1) {
                    collision = this.spriteAtPosNew(this.cursor.x, this.cursor.y + 31, __LEFT__);
                };
                // nincs étkézés, mehet a mozgés
                if (collision == -1) {
                    this.wantToMove.setSprite(this.selectedSprite, __LEFT__);
                }
                else {
                    this.wantToMove.setSprite(this.selectedSprite, __LEFT__);
                }
            }
            else if (this.cursor.x > 192) {
                this.cursor.x -= constSpriteSize;
            }
        }
        // rajzolás
        if (event.keyCode == 49) {
            this.showMatrix();
            this.getShapes();
        }

        if (event.keyCode == __KEY_RIGHT__) {
            this.wantToMove.delSprite();

            if (this.select == 1 && this.sprites[this.selectedSprite].falling == __STAND__) {

                var collision = this.spriteAtPosNew(this.cursor.x, this.cursor.y, __RIGHT__);
                if (collision == -1) {
                    collision = this.spriteAtPosNew(this.cursor.x, this.cursor.y + 31, __RIGHT__);
                };
                // nincs étkézés, mehet a mozgés
                // wantToMove, most mér mehet!
                if (collision == -1) {
                    this.wantToMove.setSprite(this.selectedSprite, __RIGHT__);
                }
                else {
                    this.wantToMove.setSprite(this.selectedSprite, __RIGHT__);
                }
            }
            else if (this.cursor.x < 608) {
                this.cursor.x += constSpriteSize;
            }
        }

        if (event.keyCode == __KEY_SEL__) {
            this.wantToMove.delSprite();
            this.cursor.setY(Math.ceil(this.cursor.y / constSpriteSize) * constSpriteSize);

            this.selectedSprite = this.spriteAtCursor(this.cursor.x, this.cursor.y);
            if (this.selectedSprite == -1) {
                this.select = 0;
            }
            if (this.selectedSprite != -1) {
                this.select = 1 - this.select;
                this.sprites[this.selectedSprite].selected = true;
            }

        }

        this.timeOutHandler = this.doChange.bind(this);
        this.timeOut = setTimeout(this.timeOutHandler, interruptTimer);

        return false;
    };

    Crix.prototype.getType = function (spriteNum) {
    };

    Crix.prototype.spriteAtCursor = function (posx, posy) {
        for (var i = this.sprites.length - 1; i > 0; i--) {
            // sprite teteje feljebb van, alja pedig lejjebb
            if (this.sprites[i].spriteType != __LIFT_SPRITE__ && this.sprites[i].spriteType != __WALL_SPRITE__) {
                if (this.sprites[i].x == posx && posy == Math.floor((this.sprites[i].y + (constSpriteSize / 2)) / constSpriteSize) * constSpriteSize) {
                    return i;
                }
            }
        }
        return -1;
    };

    Crix.prototype.spriteAtPosNew = function (posx, posy, direction) {
        if (direction == -1) {
            posx = (posx - constSpriteSize);
        }
        else
            if (direction == 1) {
                posx = (posx + constSpriteSize);
            }
        for (var i = this.sprites.length - 1; i > 0; i--) {
            // sprite teteje feljebb van, alja pedig lejjebb
            if (this.sprites[i].spriteType == __LIFT_SPRITE__) {
                if (((this.sprites[i].y - this.sprites[i].load * constSpriteSize) <= posy) && (this.sprites[i].y + constSpriteSize - 1 >= posy) && (this.sprites[i].x == posx)) {
                    return i;
                }
            }
            else {
                if ((this.sprites[i].y <= posy) && (this.sprites[i].y + (constSpriteSize - 1) >= posy) && (this.sprites[i].x == posx)) {
                    return i;
                }
            };
        }
        return -1;
    };

    Crix.prototype.spriteAtPosX = function (posx, posy, direction) {
        if (direction == -1) {
            posx = (posx - constSpriteSize);
        }
        else
            if (direction == 1) {
                posx = (posx + constSpriteSize);
            }

        for (var i = this.sprites.length - 1; i > 0; i--) {
            if ((this.sprites[i].y == posy) && (this.sprites[i].x == posx))
                return i;
        }
        return -1;
    };

    Crix.prototype.liftAtPos = function (posx, posy, direction) {
    };

    Crix.prototype.spriteAtPos = function (posx, posy, direction) {
        if (direction == -1) {
            posy = (posy - constSpriteSize);
        }
        else
            if (direction == 1) {
                posy = (posy + constSpriteSize);
            }

        for (var i = this.sprites.length - 1; i > 0; i--) {
            if (this.sprites[i].spriteType == __LIFT_SPRITE__) {
                var load = 0;
                if (direction == 1)
                    load = this.sprites[i].load * constSpriteSize + posy;
                //console.log(load);
                if ((this.sprites[i].y == load) && (this.sprites[i].x == posx))
                    return i;
            }
            else {
                if ((this.sprites[i].y == posy) && (this.sprites[i].x == posx))
                    return i;
            }
        }
        return -1;
    };

    Crix.prototype.spriteAtPosFromLift = function (posx, posy, direction) {
        if (direction == -1) {
            posy = (posy - constSpriteSize);
        }
        else
            if (direction == 1) {
                posy = (posy + constSpriteSize);
            }

        for (var i = this.sprites.length - 1; i > 0; i--) {
            if ((this.sprites[i].y == posy) && (this.sprites[i].x == posx)) {
                return i;
            }
        }
        return -1;
    };

    Crix.prototype.setLoadsDirection = function (liftIndex, direction) {
        var currLift = this.sprites[liftIndex];
        for (var i = 0; i < currLift.loadSprites.length; i++) {
            var load = currLift.loadSprites[i];
            this.sprites[load].direction = direction;
            //this.sprites[load].y-=1;
            //this.sprites[collisionSprite].direction = -1 	
        };
    };

    Crix.prototype.timeOutFunction = function () {
        this.stageInit();

        for (var i = this.sprites.length - 1; i > 0; i--) {

            var currSP = this.sprites[i];

            if (currSP.spriteType != __WALL_SPRITE__ && currSP.spriteType != __LIFT_SPRITE__) {

                var onLift;
                var collisionSprite = this.spriteAtPos(currSP.x, currSP.y, __DOWN__);

                onLift = currSP.onLift;

                if (onLift == 0) {
                    if (collisionSprite == -1) {
                        // console.log("eses" + i);
                        currSP.direction = 1;
                    }
                    else
                        if (collisionSprite != -1)
                            currSP.direction = 0;
                };
            }
            // ami nem nulla az mozog
            if (currSP.direction != 0) {

                if (currSP.spriteType == __LIFT_SPRITE__) {
                    // ha felfelé megyénk, a lift magasséga a lift + load, itt keresénk étkézést
                    var newPos;

                    if (currSP.direction == __UP__) {
                        newPos = currSP.y + (currSP.direction * constSpriteSize) + (currSP.load * constSpriteSize * -1);
                    }
                    else {
                        newPos = currSP.y + (currSP.direction * constSpriteSize);
                    }

                    var collisionSprite = this.spriteAtPos(currSP.x, newPos, 0);
                    //console.log(collisionSprite);
                    if (collisionSprite == -1) { // ha üres, mozgatás
                        currSP.y = currSP.y + currSP.direction;

                    }
                    else {
                        if ((currSP.direction == __UP__) && (collisionSprite > __NORMAL_SPRITE__)) {
                            this.sprites[collisionSprite].onLift = 1;
                            currSP.load += 1;
                            currSP.loadSprites.push(collisionSprite); //this.liftRoot = currSP;
                            this.setLoadsDirection(currSP.index, __UP__);

                            currSP.y = currSP.y + currSP.direction;
                        }
                        else {
                            // *** DE CSAK AKKOR, HA ELLENKEZé IRéNYBAN MEHET!
                            currSP.direction = currSP.direction * -1;
                            var collisionSprite = -1;
                            this.setLoadsDirection(currSP.index, currSP.direction);

                            if (currSP.direction == __DOWN__)
                                collisionSprite = this.spriteAtPos(currSP.x, currSP.y, currSP.direction);
                            if (currSP.direction == __UP__)
                                collisionSprite = this.spriteAtPos(currSP.x, currSP.y, currSP.direction);

                            if (collisionSprite == -1) {

                                currSP.y = currSP.y + currSP.direction;
                            }

                        }
                    }
                    // normal spriteok esése
                }
                else {

                    currSP.y += currSP.direction * constLiftSpeed;
                }
            }
        };

        this.drawSprites();

        var __timeOutHandler = this.timeOutFunction.bind(this);
        this.timeOut = setTimeout(__timeOutHandler, interruptTimer);
    };

    Crix.prototype.initStage = function () {

        var stage = document.getElementById("stage0");
        this.stageContext = stage.getContext('2d');

        img = new Image(constSpriteSize, constSpriteSize);
        img.src = __PICTURE_BASE__ + __SI__[0];
        this.stageContext.lineWidth = 4;
        this.stageContext.fillRect(0, 0, this.stageWidth, this.stageHeight);
    };

    Crix.prototype.loadImages = function () {
        var img = new Image(constSpriteSize, constSpriteSize);

        img.src = __PICTURE_BASE__ + __SI__[0];
        this.images[0] = img;

        for (var i = __CURSOR_MOVE__; i < __SI__.length; i++) {
            this.images[i] = new Image(constSpriteSize, constSpriteSize);
            this.images[i].addEventListener('load', function () {
                loadedResources++
            })
            this.images[i].src = __PICTURE_BASE__ + __SI__[i];
        };
    };

    Crix.prototype.loadBGImages = function () {
        for (var i = 0; i < __BACKGROUND_IMAGES__.length; i++) {
            var bgi = __BACKGROUND_IMAGES__[i];
            this.bgImages[i] = new Image(bgi.x, bgi.y);
            this.bgImages[i].addEventListener('load', function () {
                loadedResources++;
            })
            this.bgImages[i].src = __PICTURE_BASE__ + bgi.name;
        }
    };

    Crix.prototype.loadNumbers = function () {
        for (var i = 0; i < 10; i++) {
            this.numbers[i] = new Image(constSpriteSize, constSpriteSize);
            this.numbers[i].addEventListener('load', function () {
                loadedResources++
            })
            this.numbers[i].src = __PICTURE_BASE__ + i + ".png";
        };
    };

    Crix.prototype.loadSmallNumbers = function () {
        for (var i = 0; i < 10; i++) {
            this.smallNumbers[i] = new Image(constSpriteSize, constSpriteSize);
            this.smallNumbers[i].src = __PICTURE_BASE__ + "s" + i + ".png";
        };
    };

    Crix.prototype.parseStage = function () {
        var spriteNum = 0;
        for (var i = 0; i < __GAME_STAGE_DEFINITIONS__[this.CL].length; i++) {
            for (var j = 0; j < __GAME_STAGE_DEFINITIONS__[this.CL][0].length; j++) {
                var spriteType = __GAME_STAGE_DEFINITIONS__[this.CL][i][j];
                // sprite létrehozása és kirajzolása
                if ((spriteType >= __NORMAL_SPRITE__) || (spriteType == __LIFT_SPRITE__)) {

                    this.sprites[spriteNum] = new Sprite(spriteType, stageOffsetX + j * constSpriteSize, stageOffsetY + i * constSpriteSize, this.stageContext, this.images);
                    this.sprites[spriteNum].draw();

                    this.spriteNums[spriteType]++;

                    if (spriteType == __LIFT_SPRITE__) {
                        this.sprites[spriteNum].setDirection(__UP__);
                        this.sprites[spriteNum].setLoad(0);
                        this.sprites[spriteNum].setIndex(spriteNum);
                    }
                    spriteNum++;
                    // háttér rajzolása
                }
                else
                    if (spriteType == __BG_SPRITE__) {
                        this.stageContext.drawImage(this.images[__BG_SPRITE__], stageOffsetX + j * constSpriteSize, stageOffsetY + i * constSpriteSize);
                    }
            };
        };
    };

    Crix.prototype.drawBackground = function () {
        var gl = __GAME_STAGE_DEFINITIONS__[this.CL].length;
        for (var i = 0; i < gl; i++) {
            var glx = __GAME_STAGE_DEFINITIONS__[this.CL][0].length;
            for (var j = 0; j < glx; j++) {
                var spriteType = __GAME_STAGE_DEFINITIONS__[this.CL][i][j];
                if (spriteType == __BG_SPRITE__) {
                    this.stageContext.drawImage(this.images[__BG_SPRITE__], stageOffsetX + j * constSpriteSize, stageOffsetY + i * constSpriteSize);
                }
            }
        }
        this.stageContext.font = "24px arial";
        this.stageContext.textAlign = "left";
        //this.stageContext.fillStyle = this.textColor;
        var top = 16;

        var timeNow = new Date().getTime();

        this.timeBack = __GAME_STAGES_STARTING_POSITIONS__[this.CL].timeInSec - Math.floor((timeNow - this.stageStartTime) / 1000);

        this.stageContext.drawImage(this.bgImages[7], 640, 0);
        this.stageContext.drawImage(this.bgImages[8], 0, 384);

        if (effectsEnabled) this.stageContext.drawImage(this.bgImages[9], __ICONS__[0].left, __ICONS__[0].top); else
            this.stageContext.drawImage(this.bgImages[10], __ICONS__[0].left, __ICONS__[0].top);

        if (musicEnabled) this.stageContext.drawImage(this.bgImages[11], __ICONS__[1].left, __ICONS__[1].top); else
            this.stageContext.drawImage(this.bgImages[12], __ICONS__[1].left, __ICONS__[1].top);

        this.stageContext.drawImage(this.bgImages[14], __ICONS__[2].left, __ICONS__[2].top);
        this.stageContext.drawImage(this.bgImages[13], __ICONS__[3].left, __ICONS__[3].top);

        var timeTop = 80;

        this.stageContext.drawImage(this.bgImages[0], 0, 0);
        this.stageContext.drawImage(this.bgImages[0], 0, 192);

        // level kiiratasa
        this.stageContext.drawImage(this.bgImages[4], 62, top);

        var level1 = this.CL % 10;
        var level10 = Math.floor((this.CL - level1) / 10);

        this.stageContext.drawImage(this.numbers[level10], 68, top + 24);
        this.stageContext.drawImage(this.numbers[level1], 100, top + 24);

        // ido szémolésa
        var timeBackMin = Math.floor(this.timeBack / 60);
        var timeBackSec = Math.floor(this.timeBack % 60);
        ;
        var timeBackSec1 = timeBackSec % 10;

        var timeBackSec10 = (timeBackSec - timeBackSec1) / 10;

        // ido kiérésa
        this.stageContext.drawImage(this.bgImages[1], 66, timeTop);
        this.stageContext.drawImage(this.numbers[timeBackMin], 36, timeTop + 20);
        this.stageContext.drawImage(this.bgImages[2], 72, timeTop + 20);
        this.stageContext.drawImage(this.numbers[timeBackSec10], 92, timeTop + 20);
        this.stageContext.drawImage(this.numbers[timeBackSec1], 124, timeTop + 20);

        // életek széma
        this.stageContext.drawImage(this.bgImages[3], 42, timeTop + 54);
        this.stageContext.drawImage(this.numbers[this.retry], 124, timeTop + 54);
        // this.stageContext.drawImage(this.numbers[0],24,48);
        // pontok kiérésa
        var subs;

        var s1 = Math.floor(this.score / 10000);
        subs = this.score - (s1 * 10000);

        var s2 = Math.floor(subs / 1000);
        subs -= (s2 * 1000);

        var s3 = Math.floor(subs / 100);
        subs -= (s3 * 100);

        var s4 = Math.floor(subs / 10);
        subs -= (s4 * 10);

        var s5 = Math.floor(subs);

        var scoreTop = 160;

        this.stageContext.drawImage(this.bgImages[6], 16, scoreTop);

        this.stageContext.drawImage(this.smallNumbers[s1], 44, scoreTop);
        this.stageContext.drawImage(this.smallNumbers[s2], 58, scoreTop);
        this.stageContext.drawImage(this.smallNumbers[s3], 72, scoreTop);
        this.stageContext.drawImage(this.smallNumbers[s4], 86, scoreTop);
        this.stageContext.drawImage(this.smallNumbers[s5], 100, scoreTop);

        var boardTop = 208;
        var boardLeft = 16;

        var count = 0;

        for (var i = __NORMAL_SPRITE__ + 1; i < __SI__.length; i++) {
            if (this.spriteNums[i] > 0) {
                count++;
            }
        }

        if (count <= 15)
            boardLeft = 16;
        if (count <= 10)
            boardLeft = 56;
        if (count <= 5)
            boardLeft = 80;


        var count = 0;
        var si = __SI__.length;
        for (var i = __NORMAL_SPRITE__ + 1; i < si; i++) {
            if (this.spriteNums[i] > 0) {

                var column = Math.floor((count / 5));
                var row = count % 5;

                this.stageContext.drawImage(this.images[i], boardLeft + (column * 48), boardTop + row * 32);
                this.stageContext.drawImage(this.smallNumbers[this.spriteNums[i]], boardLeft + 30 + (column * 48), 8 + boardTop + row * 32);
                count++;

            }
        }

        if (this.timeBack == 0) {
            this.stageSolved = false;
            this.stageState = __STOP__;
            // this.endStage();
        }
    };

    Crix.prototype.drawSprites = function () {
        var spriteNum = 0;
        var sl = this.sprites.length;
        for (var i = 0; i < sl; i++) {

            var currSP = this.sprites[i];
            if (!currSP.isDead())
                currSP.draw();

        };
        if (this.select != 0) {
            this.cursor.setType(__CURSOR_MOVE__);

        }
        else
            this.cursor.setType(__CURSOR__);
        if (this.select == 1) {
            this.cursor.setX(this.sprites[this.selectedSprite].x);
            this.cursor.setY(this.sprites[this.selectedSprite].y);

        }
        this.cursor.draw();
    };

    document.addEventListener('DOMContentLoaded', function() {
        init()
    }, false);

    function init() {
        crixInstance = new Crix(constCurrentLevel, "stage0", constStageWidth, constStageHeight, constBackgroundColor, new EffectHandler());
    }
}())