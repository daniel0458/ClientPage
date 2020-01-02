import React from 'react';

import message from 'material-ui/svg-icons/communication/message';
import axios from 'axios';
import { ToggleIndeterminateCheckBox } from 'material-ui/svg-icons';
import '../css/map.css'

const { kakao } = window;

class Juhyun extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      address: [],
    }
  }

  //좌표 데려오는 함수
  //  -> 결과를 state address
  stateRefresh = () => {
    this.setState({
      address: '',
    });
    this.callApi()
      .then(res => this.setState({ address: res }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    //   await axios({
    //     method: 'get',
    //     url: '/api/theater'
    //   })
    //     .then(res => this.setState({ address: res}))
    //     .catch(err => console.log(err))
    // }
     const response = await fetch('/api/theater');
     const body = await response.json();
     return body;
  }
  componentDidMount() {
    this.callApi()
    .then(res => this.setState({address: res}))
    .catch(err => console.log(err))

    // let el = document.getElementById('map');
    // let map = new kakao.maps.Map(el, {
    //   center: new kakao.maps.LatLng(37.5725254, 126.9756429)
    // })
  }


   componentDidUpdate() {
    const {address} =this.state;
    const script = document.createElement("script");
    script.async = true;
    script.src =
    //  " /* api key 넣어라*/"
    "https://dapi.kakao.com/v2/maps/sdk.js?appkey=33ccad9cee7a819a54a9b315939115a5";
    document.head.appendChild(script);

    script.onload = () => {
      var container = document.getElementById("map");
      var options = {
        center: new kakao.maps.LatLng(37.5725254, 126.9756429),
        level: 3
      };

        var map = new kakao.maps.Map(container, options); //지도 생성 + 객체 리턴
       
        // if(navigator.geolocation) {
        //   navigator.geolocation.getCurrentPosition(function(position) {
        //     var lat = position.coords.latitude,
        //     lon = position.coords.longitude;

        //     var locPosition = new kakao.maps.LatLng(address[0]['longtitude'],address[0]['latitude']),
        //     message = '<div style="padding:5px;">여기에 계신가요?!</div>';
          
        //       displayMarker(locPosition, meeage);
        //   });
        // }
        //var coords = new kakao.maps.LatLng(37.5725254, 126.9756429);
        //console.log(address[0]);
        //var coords = new kakao.maps.LatLng(this.state.address["latitude"]+ "," +this.state.address["longtitude"] ); 안찍혀(주현이꺼) 
        //var coords = new kakao.maps.LatLng(address[0],address[1]); 
        console.log(address);
        console.log(address[0]['latitude']);  //36.0000?
        console.log(address[0]['longitude']); //127.001
        //var coords = new kakao.maps.LatLng(address[0]['latitude']+","+address[0]['longtitude']); => 안찍혀... 
        
        
        var coords = new kakao.maps.LatLng(address[0]['longtitude'],address[0]['latitude']); 
        
        // 결과로 받은 위치를 마커로 표시
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
          // title: theater,
          clickable: false // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정
          
        });

        marker.setMap(map); //마커를 지도에 붙이기

//         var iwContent = '<div style="padding:5px;">연극어때? <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
//        coords = new kakao.maps.LatLng(address[0]['longtitude'],address[0]['latitude']); 
//        ; //인포윈도우 표시 위치입니다

//        // 인포윈도우를 생성합니다
//       var infowindow = new kakao.maps.InfoWindow({
//       position : coords, 
//       content : iwContent 
// });
  
// // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
// infowindow.open(map, marker); 


// // 인포윈도우를 생성합니다
// var infowindow = new kakao.maps.InfoWindow({
//   position : coords, 
//     content : iwContent
// });



//       // 마커에 마우스오버 이벤트를 등록합니다
// kakao.maps.event.addListener(marker, 'mouseover', function() {
//   // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
//     infowindow.open(map, marker);
// });

// // 마커에 마우스아웃 이벤트를 등록합니다
// kakao.maps.event.addListener(marker, 'mouseout', function() {
//     // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
//     infowindow.close();
// });
     
      
      
      //  kakao.maps.event.preventMap();
       map.setCenter(coords)  //마커의 coords 를 지도의 center로 지정!
      
      }

  }
  render() {
    const {address} =this.state;  
    return (
      <div>
        <div id="map" className="kakao">
    
        </div>
         {/* {this.state.address} */}
        {address.map(c => <div>{c.longtitude}</div>)}
        {address.map(c => <div>{c.latitude}</div>)}
        
      </div>

    )
  }
}


export default Juhyun;


