import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchSpaceList} from "../../actions/spaceAction";
function Home() {

    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchSpaceList());
    }, []);

        const spaceList = useSelector((state) => state.spaces.spaceList);

    const html=spaceList.slice(0, 9).map((s,key)=>
            <div className="col-lg-4 mb-4">
                <div className="post-entry-alt">
                    <NavLink to={"/space/space_detail/"+s.spaceId} className="img-link"><img src={s.poster} className="img-fluid" style={{"width":"350px","height":"250px"}}/></NavLink>
                    <div className="excerpt">

                        <h2><a href="#">{s.title}</a></h2>
                        <div className="post-meta align-items-center text-left clearfix">
                            <figure className="author-figure mb-0 me-3 float-start"></figure>
                            <span className="d-inline-block mt-1">{s.subject}</span>
                            <span>&nbsp;-&nbsp; {s.category}</span>
                        </div>

                        <p>{s.price}</p>
                        <p><NavLink to={"/space/space_detail/"+s.spaceId} className="read-more">Continue Reading</NavLink></p>
                    </div>
                </div>
            </div>
    )


    return (
        <Fragment>

            <section className="section bg-light">
                <div className="container">
                    <div className="row align-items-stretch retro-layout">
                        <div className="col-md-4">
                            <a href="#" className="h-entry mb-30 v-height gradient">

                                <div className="featured-img" style={{ backgroundImage: 'url(/static/images/강의실.jpg)' }}></div>

                                <div className="text">
                                    <h2>강의실</h2>
                                </div>
                            </a>
                            <a href="#" className="h-entry v-height gradient">

                                <div className="featured-img" style={{ backgroundImage: 'url(/static/images/세미나.jpg)' }}></div>

                                <div className="text">
                                    <h2>세미나실</h2>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="#" className="h-entry img-5 h-100 gradient">

                                <div className="featured-img" style={{ backgroundImage: 'url(/static/images/카페.jpg)' }}></div>

                                <div className="text">
                                    <h2>카페</h2>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="#" className="h-entry mb-30 v-height gradient">

                                <div className="featured-img" style={{ backgroundImage: 'url(/static/images/컨퍼런스.jpg)' }}></div>

                                <div className="text">
                                    <h2>컨퍼런스</h2>
                                </div>
                            </a>
                            <a href="#" className ="h-entry v-height gradient">

                                <div className="featured-img" style={{ backgroundImage: 'url(/static/images/회의실.jpg)' }}></div>

                                <div className="text">
                                    <h2>회의실</h2>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <div className="section sec-features">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="feature d-flex">
                                <span className="bi-bag-check-fill"></span>
                                <div>
                                    <h3>"모임의 장소, 우리와 함께 찾아보세요!"</h3>
                                    <p>비즈니스 모임부터 친구들과의 소규모 파티까지, 우리의 다양한 공간들이 여러분을 기다리고 있습니다. 지금 예약하세요! </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="feature d-flex">
                                <span className="bi-wallet-fill"></span>
                                <div>
                                    <h3>"편리한 예약, 특별한 순간"</h3>
                                    <p>우리의 공간 예약 서비스를 이용하고 특별한 순간을 더욱 특별하게 만들어보세요. 빠른 예약, 편리한 이용이 가능합니다. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <div className="feature d-flex">
                                <span className="bi-pie-chart-fill"></span>
                                <div>
                                    <h3>"프로페셔널한 공간과 비즈니스"</h3>
                                    <p>회의실, 세미나실, 컨퍼런스룸 등 다양한 비즈니스 공간을 제공합니다. 업무를 위한 프로페셔널한 환경을 경험하세요. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="section">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-sm-6">
                            <h2 className="posts-entry-title">Space List</h2>
                        </div>
                        <div className="col-sm-6 text-sm-end"><NavLink to={"/space/all_list"} className="read-more">View All</NavLink></div>
                    </div>
                    <div className="row">
                        {html}
                    </div>
                </div>
            </section>
        </Fragment>
    )

}
export default Home