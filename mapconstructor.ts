    //the constructor initializes the center and boundaries of the playing field
    constructor(public navCtrl: NavController, public geolocation: Geolocation, private TreeFactory : TreeFactory, 
                private alertCtrl: AlertController, private toastCtrl: ToastController){
        this.areaCenter = new google.maps.LatLng(47.002927, -120.537427);

        this.mapBounds = new google.maps.LatLngBounds(
                                new google.maps.LatLng(46.999761, -120.543179),
                                new google.maps.LatLng(47.010421, -120.531785)
                             );
        this.tree_list = [];
        this.saplings = [];

        this.everImage = {
            url: '/assets/icon/evergreen.png',
            size: new google.maps.Size(36, 43),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(20, 43)
        }

        this.decidImage = {
            url: '/assets/icon/deciduous.png',
            size: new google.maps.Size(32, 40),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(16, 40)
        }

        
    }