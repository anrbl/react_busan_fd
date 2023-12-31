import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Search from "./Search";

const AllList = ({ food }) => {
    const { kakao } = window;
    const KakaoMapScript = () => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
            mapOption = {
                center: new kakao.maps.LatLng(food[20]?.LAT, food[20]?.LNG), // 지도의 중심좌표
                level: 9 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 마커를 표시할 위치와 title 객체 배열입니다 
        var positions = food.map(it => {
            return {
                title: it.TITLE,
                latlng: new kakao.maps.LatLng(it.LAT, it.LNG),
            }
        });

        // 마커 이미지의 이미지 주소입니다
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (var i = 0; i < positions.length; i++) {

            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new kakao.maps.Size(24, 35);

            // 마커 이미지를 생성합니다    
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage // 마커 이미지 
            });
        }
    }

    useEffect(() => {
        food && KakaoMapScript();
    }, [food]);

    return (
        <section className="AllList sec">
            <div className="map_case">
                <div id="map" style={{ height: '600px' }}></div>
                <div className="search_map">
                    <h2>부산광역시의 <b>맛집</b>찾기</h2>
                    <Search />
                    <p>관련된 음식 키워드를 입력하거나 지역구를 입력해주세요. 저희가 도와드리겠습니다.</p>
                </div>
            </div>
            <div className="inner">
                <ul className="list">
                    <div className="tit">
                        <h3><strong>추천 가게</strong> 전체 보기</h3>
                        <p>부산광역시에서 추천하는 모든 메뉴를 한 눈에! 마음에 드는 가게는 클릭해보세요.</p>
                    </div>
                    {
                        food.map(it => {
                            return (
                                <li key={it.UC_SEQ}>
                                    <Link to={`item/${it.MAIN_TITLE}`}>
                                        <div className="case">
                                            <strong>{it.MAIN_TITLE}</strong>
                                            <div className="img_box">
                                                <img src={it.MAIN_IMG_NORMAL} alt={it.MAIN_TITLE} />
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </section>
    )
}

export default AllList;