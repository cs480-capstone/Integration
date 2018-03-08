    updateTreeMarks(trees){

        for(let tree of trees){
        
            if(!tree.hidden){
                var loc = new google.maps.LatLng(tree.lat, tree.long);
                var treeMark = new google.maps.Marker({
                    position: loc,
                    map: this.map,
                    icon: (tree.collectData().pinecone)
                          ? this.everImage
                          : this.decidImage
                });
            }
        }
    }