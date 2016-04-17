"use strict";

module.exports = {
    getAttractSequence: function () {
    return {
            name: "Attract Sequence",
            video: "project.mp4"
        }},
    getMenus: function() {
        var menus = [
            {
                name: "Play Clip 1",
                video: "museum-app-1.mp4"
            },
            {
                name: "Play Clip 2",
                video: "museum-app-2.mp4"
            },
            {
                name: "Play Clip 3",
                video: "museum-app-3.mp4"
            },
            {
                name: "Play Clip 4",
                video: "museum-app-4.mp4"
            },
            {
                name: "Play Clip 5",
                video: "museum-app-5.mp4"
            },
            {
                name: "Play Clip 6",
                video: "museum-app-6.mp4"
            }
        ];

        menus.forEach(function(menu) {
            menu.id = menu.name.split(' ').join('-');
        });

        return menus;
    }
};
