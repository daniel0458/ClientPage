/*global kakao*/

import React, { Component } from 'react';

const {kakao} = window;

class Maps extends Component {
      constructor(props) {
          super(props);
          this.state = {
            latitude: '',
            longtitude: ''
          }
      }
      stateRefresh = () => {
          this.setState({
            latitude: '',
            longtitude: '' 
          });

          this.callApi()
          .then(res => this.setState({ theater : res }))
          .catch(err => console.log(err));
          }
     callApi = async () => {
        const response = await fetch('/api/theater');
        const body = await response.json();
        return body
      }

    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=33ccad9cee7a819a54a9b315939115a5&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let el = document.getElementById('map');
                let map = new kakao.maps.Map(el, {
                    center: new kakao.maps.Coords(37.5725254, 126.9756429)
                });
            });
        };
    }

    render() {
        return (
            <div>
            <div id="map"></div>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=33ccad9cee7a819a54a9b315939115a5"></script>

            </div>
        );
    }
}

export default Maps;