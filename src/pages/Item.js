import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Item = ({ food }) => {
    const { item } = useParams();
    const Store = food.find(it => it.MAIN_TITLE == item);

    const { kakao } = window;
    const KakaoMapScript = () => {
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(Store.LAT, Store.LNG),
            level: 3
        };

        var map = new kakao.maps.Map(container, options);

        // 마커가 표시될 위치입니다 
        var markerPosition = new kakao.maps.LatLng(Store.LAT, Store.LNG);
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
        var imageSize = new kakao.maps.Size(24, 35);
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
    }
    useEffect(() => {
        //맵 api 소환
        Store && KakaoMapScript();
    }, [Store])


    return (
        <>
            {
                Store && (
                    <section className="Item">
                        <div className="case">
                            <div className="desc">
                                <h3>{Store.MAIN_TITLE}</h3>
                                <div className="img_box">
                                    <img src={Store.MAIN_IMG_NORMAL} alt={Store.MAIN_TITLE} />
                                </div>
                            </div>
                            <div className="map_case">
                                <div id="map" style={{ height: '400px' }}></div>
                            </div>
                        </div>
                        <table className="table inner">
                            <colgroup>
                                <col style={{ width: '100px' }} />
                                <col />
                            </colgroup>
                            <caption className="blind">음식점설명</caption>
                            <tbody>
                                <tr>
                                    <td className="tit">위치</td>
                                    <td>{Store.ADDR1}</td>
                                </tr>
                                <tr>
                                    <td className="tit">영업시간</td>
                                    <td>{Store.USAGE_DAY_WEEK_AND_TIME}</td>
                                </tr>
                                <tr>
                                    <td className="tit">연락처</td>
                                    <td><a href={`tel:${Store.CNTCT_TEL}`}>{Store.CNTCT_TEL}</a></td>
                                </tr>
                                <tr>
                                    <td className="tit">설명</td>
                                    <td>{Store.ITEMCNTNTS}</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                )
            }
        </>

    )
}

export default Item;