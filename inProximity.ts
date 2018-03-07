    /*
        this function returns the distance a user is from a tree
    */
    inProximity(closest){
        /*let a = closest.latDist * closest.latDist;
        let b = closest.lngDist * closest.lngDist;
        let squaredDist = a+b;
    
        return Math.sqrt(squaredDist);*/
        let ind = closest.ind;
        let treeLoc = new google.maps.LatLng(this.tree_list[ind].lat, this.tree_list[ind].long);
        return google.maps.geometry.spherical.computeDistanceBetween(this.userLoc, treeLoc);

    }