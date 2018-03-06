    //tree search-----------------------------------------------------------------------------------------------------
    /*
        here is where the the app checks if it needs to reveal a 
        nearby hidden tree
    */
    revealHidden(){
    
        let farProxim = 20;
    
        let nearProxim = 5;
    
        let closest = this.findTree(true);
    
        if(closest !== undefined){
            let proxim = this.inProximity(closest);
            if(proxim <= nearProxim){
                this.alertMessage(1);
                var loc = new google.maps.LatLng(this.tree_list[closest.ind].lat, 
                                                 this.tree_list[closest.ind].long);
                var treeMark = new google.maps.Marker({
                    position: loc,
                    //title: trees.name,
                    map: this.map
                    //icon: image
                });
                //make the hidden value in the database false
                //notify everyone else that a tree has been found
            }else if(proxim <= farProxim){
                this.hintToast({
                    pro: proxim,
                    dir: closest.direct
                })
            }
        }else{
            this.hintToast(undefined);
        }

    }