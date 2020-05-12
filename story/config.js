var config = {
    style: 'mapbox://styles/smebinger/ck91xdm5e1ms41ho8b5w63oha',
    accessToken: 'pk.eyJ1Ijoic21lYmluZ2VyIiwiYSI6ImNqMGVlZ3ducjAwejEzMm5zOG05aWUzcjEifQ.BuETqSmrqIHckR2AdhGmFw',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Frank Lloyd Wright Architecture in the Northeast:',
    subtitle: 'Publicly Accessible Sites',
    byline: 'By Samara Ebinger',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'The Martin House',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Darwin_D_Martin_House%2C_Buffalo%2C_NY.jpg',
            description: 'Built in 1904, considered one of the most important designs of Wright career.View details at Frank Lloyd Wright Foundation website.<br> Tour information: Martin House website.',
            location: {
              center: { lon: -78.84837, lat: 42.93666 },
              zoom: 16.00,
              pitch: 57.00,
              bearing: 16.81,
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
