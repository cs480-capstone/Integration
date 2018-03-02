updateTreeMarks(trees){

        var everImage = {
            url: '../assets/icon/evergreen.png',
            size: new google.maps.Size(36, 43),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(20, 43)
        }

        var decidImage = {
            url: '../assets/icon/deciduous.png',
            size: new google.maps.Size(32, 40),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(16, 40)
        }

        for(let tree of trees){
        
            if(!tree.hidden){
                var loc = new google.maps.LatLng(tree.lat, tree.long);
                var treeMark = new google.maps.Marker({
                    position: loc,
                    map: this.map,
                    icon: (/*insert condition that is true if the tree has the pinecone decorator*/)
                          ? everImage
                          : decidImage
                });
            }
        }
    }