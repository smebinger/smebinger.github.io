var config = {
    style: 'mapbox://styles/smebinger/ck91xdm5e1ms41ho8b5w63oha',
    accessToken: 'pk.eyJ1Ijoic21lYmluZ2VyIiwiYSI6ImNqMGVlZ3ducjAwejEzMm5zOG05aWUzcjEifQ.BuETqSmrqIHckR2AdhGmFw',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'The Martin House',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
              center: { lon: -78.84826, lat: 42.93704 },
              zoom: 16.00,
              pitch: 0.00,
              bearing: 0.00,
            },
            onChapterEnter: [
              {
                layer: 'pet-waste-complaints',
                opacity: 1,
              },

          ],
          onChapterExit: [
            {
              layer: 'pet-waste-complaints',
              opacity: 0,
            },

          ],
        },
        {
            id: 'other-identifier',
            title: 'Blue Sky Mausoleum',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: { lon: -78.86287, lat: 42.92336 },
              zoom: 15.80,
              pitch: 44.50,
              bearing: 0.01,
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
