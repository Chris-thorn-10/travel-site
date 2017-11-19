import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader { 
    constructor() {
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".large-hero__title");
        this.createHeaderWaypoint();
    }
    
    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
                if(direction == "down"){
                    that.siteHeader.addClass("site-header__dark");    
                }
                else{
                    that.siteHeader.removeClass("site-header__dark");    
                }
                
            }
        });
    }
}


export default StickyHeader;