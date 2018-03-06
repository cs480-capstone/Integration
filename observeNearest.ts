    /*
        this function, attached with an on click listener to
        a button in the HTML page, allows the user to observe the
        nearest tree, if possible
    */
    observeNearest(){
    
        let proxim = 5;
        
        let closest = this.findTree(false);
    
        if(closest !== undefined && this.inProximity(closest) <= proxim){
            //this should be the part where we take the user to the data collection screen 
            //which is showing collection options based on the specific tree
            this.collectData(closest.ind);
        }else{
            //this message is generic
            this.alertMessage(2);
        }
        
    }