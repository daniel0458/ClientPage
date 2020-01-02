import React, { Component } from "react";
import { MapsMap } from "material-ui/svg-icons";
import {kakao} from "react"


class mapmap extends Component {
    componentDidMount() {
        let el = document.getElementById('map');
        let map = new kakao.maps.Map(el, {
            center : new kakao.maps.LatLng(33.450701, 126.570667)
        });
    }    
      render() {
            return (
                <div className="mapmap" id="map"></div>
            );
        
    }

}

export default mapmap;