var config = {
    style: 'mapbox://styles/hsellheim/cmdqdtowk00n601s27a0cd8ow',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiaHNlbGxoZWltIiwiYSI6ImNtYzBvNHMyMTAzdHQyanM3bWdoeTBod2IifQ.L8Tb7OrlOPKoJBQmHjsCtQ',
    showMarkers: true,
    markerColor: '#ff4f94',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#ff4f94'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Under attack',
    subtitle: 'Media reports about attacks on pride parades in Germany have recently become more frequent, making the events feel increasingly unsafe for members of the community. A look at the data illustrates the magnitude of the problem.',
    byline: 'By Hanna Sellheim',
    footer: 'You can find the data and methodology <a href="https://github.com/hsellheim/Project-3">here</a>. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '17.5.2025: Gelsenkirchen',
            description: 'Shortly before the annual pride parade is supposed to start, the organizers decide to cancel it. The reason according to the police: an "abstract threat". In other words: An attack might happen.',
            location: {
                center: [7.094440877963962, 51.51122433955416],
                zoom: 12,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: '14.6.2025: Emden',
            description: 'A teenager hits a 31-year-old participant of the pride event in the face. He has to be taken to a hospital.',
            location: {
                center: [7.205061958214344, 53.36758774653296],
                zoom: 12,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: '17.6.2025: Regensburg',
            description: 'The pride organizers receive a threatening letter. They decide to shorten the route of the parade and opt for a static gathering instead.',
            location: {
                 center: [12.094565431104513, 49.01969594179485],
                zoom: 12,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
