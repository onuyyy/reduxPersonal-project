import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchSpaceDetail} from "../../actions/spaceAction";

function Space_detail() {

    const {spaceId}=useParams();
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchSpaceDetail(spaceId))
    },{})

    const spaceDetail=useSelector((state)=>state.spaces.space_detail)

    return (

        <div className="section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-7 mb-4 mb-lg-0">
                        <img src={spaceDetail.poster} alt="Image" className="img-fluid rounded" style={{width:"630px",height:"420px"}}/>
                    </div>
                    <div className="col-lg-4 ps-lg-2">
                        <div className="mb-5">
                            <h2 className="text-black h4">{spaceDetail.title}</h2>
                            <p>{spaceDetail.address}</p>
                        </div>
                        <div className="d-flex mb-3 service-alt">
                            <div>
                                <span className="bi-wallet-fill me-4"></span>
                            </div>
                            <div>
                                <h3>전화번호</h3>
                                <p>{spaceDetail.phone}</p>
                            </div>
                        </div>

                        <div className="d-flex mb-3 service-alt">
                            <div>
                                <span className="bi-pie-chart-fill me-4"></span>
                            </div>
                            <div>
                                <h3>상세 정보</h3>
                                <p>{spaceDetail.category}&nbsp;&nbsp;{spaceDetail.price}</p>
                            </div>
                        </div>

                        <div className="d-flex mb-3 service-alt">
                            <div>
                                <span className="bi-bag-check-fill me-4"></span>
                            </div>
                            <div>
                                <h3>소개 내용</h3>
                                <p>{spaceDetail.description}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Space_detail