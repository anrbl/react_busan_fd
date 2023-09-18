import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

const GuList = ({ food }) => {
    const { gu } = useParams();
    const guList = food.filter(it => it.GUGUN_NM == gu);
    console.log(guList)


    const { kakao } = window;

    const KakaoMapScript = () => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
            mapOption = {
                center: new kakao.maps.LatLng(guList[0].LAT, guList[0].LNG), // 지도의 중심좌표
                level: 4 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 마커를 표시할 위치와 title 객체 배열입니다 
        var positions = guList.map(it => {
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
        //맵 api 불러오는 함수
        KakaoMapScript();
    }, [food, gu])

    return (
        <>
            <h2>{gu} 구별 맛집</h2>
            <div id="map" style={{ height: '400px' }}></div>
            <div className="inner">
                <ul className="list">
                    {
                        guList.map(it => {
                            return (
                                <li key={it.UC_SEQ}>

                                    <Link to={`/item/${it.MAIN_TITLE}`}>
                                        <strong>{it.MAIN_TITLE}</strong>
                                        <div className="img_box">
                                            <img src={it.MAIN_IMG_NORMAL} alt={it.MAIN_TITLE} />
                                        </div>
                                    </Link>
                                    <table className="table inner">
                                        <colgroup>
                                            <col style={{ width: '100px' }} />
                                            <col />
                                        </colgroup>
                                        <caption className="blind">음식점설명</caption>
                                        <tbody>
                                            <tr>
                                                <td className="tit">위치</td>
                                                <td>{it.ADDR1}</td>
                                            </tr>
                                            <tr>
                                                <td className="tit">영업시간</td>
                                                <td>{it.USAGE_DAY_WEEK_AND_TIME}</td>
                                            </tr>
                                            <tr>
                                                <td className="tit">연락처</td>
                                                <td><a href={`tel:${it.CNTCT_TEL}`}>{it.CNTCT_TEL}</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </>
    )
}

export default GuList;