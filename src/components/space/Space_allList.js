import {useState,useEffect,Fragment} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
function Space_allList() {

/*    const [spaceAllList,setSpaceAllList]=useState([])*/
    const [categoryList,setCategoryList]=useState([])
    const [curpage,setCurpage]=useState(1)
    const [totalpage,setTotalpage]=useState(0)
    const [findList,setFindList]=useState([])
    const [startPage,setStartPage]=useState(0)
    const [endPage,setEndPage]=useState(0)
    const [fd,setFd]=useState('서울')

    const dispatch=useDispatch()

    useEffect(() => {

        const findList=useSelector((state)=>state.spaces.find_list)
        const categoryList=useSelector((state)=>state.spaces.category)


/*
        // 페이지
        axios.get('http://localhost/space/space_page_react',{
            params:{
                fd:fd,
                page:curpage
            }
        }).then(res=>{
            setCurpage(res.data.curpage)
            setTotalpage(res.data.totalpage)
            setStartPage(res.data.startPage)
            setEndPage(res.data.endPage)
        }).catch(error=>{
            console.log(error)
        })
*/


    }, [fd]);

    // 입력 값으로 바꿀 때
    const findChange=(e)=>{
        setFd(e.target.value)
    }

    // 버튼 클릭시 처리
    const findBtn=()=>{

        setCurpage(1)
        pages(curpage)
    }

    const html = findList.map((s, key) => (
        <div className="blog-entry d-flex blog-entry-search-item">
            <a href="#" className="img-link me-4">
                <img src={s.poster} alt="Image" className="img-fluid" style={{width:"300px",height:"200px"}}/>
            </a>
            <div>
                <span className="date">{s.title}</span>
                <h2><a href="single.html">{s.subject}</a></h2>
                <p>{s.address}</p>
                <p><NavLink to={"/space/space_detail/"+s.spaceId} className="btn btn-sm btn-outline-primary">Read More</NavLink></p>
            </div>
        </div>
    ))  ;

    const pages = (page) => {
        axios
            .get("http://localhost/space/space_find_react", {
                params: {
                    fd: fd,
                    page: page
                },
            })
            .then((res) => {
                setFindList(res.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get("http://localhost/space/space_page_react", {
                params: {
                    fd: fd,
                    page: page
                },
            })
            .then((res) => {
                setCurpage(res.data.curpage);
                setTotalpage(res.data.totalpage);
                setStartPage(res.data.startPage);
                setEndPage(res.data.endPage);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const pageChange=(page)=>{
        pages(page)
    }

    const pagePrev = () => {
        pages(startPage - 1);
    };

    const pageNext = () => {
        pages(endPage + 1);
    };

    let row=[]
    if(startPage>1) {
        row.push(<li><a href={"#"} onClick={()=>pagePrev(startPage>1?startPage-1:startPage)}>&lt;</a></li>)
    }

    for(let i=startPage;i<=endPage;i++) {
        if(i==curpage) {
            row.push(<a href={"#"} className={"active"} onClick={()=>pageChange(i)}>{i}</a>)
        } else {
            row.push(<a href={"#"} onClick={()=>pageChange(i)}>{i}</a>)
        }
    }

    if(endPage<totalpage) {
        row.push(<li><a href={"#"} onClick={() => pageNext(endPage < totalpage ? endPage + 1 : endPage)}>&gt;</a></li>)
    }


    const changeCategory=(category)=> {
        axios.get('http://localhost/space/space_cateFind', {
            params: {
                category: category
            }
        }).then(res => {
            console.log(res.data);
        }).catch(error => {
            console.log(error);
        });


    }

    return (
    <Fragment>
        <div className="section search-result-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading">Hidden Space</div>
                    </div>
                </div>
                <div className="row posts-entry">
                    <div className="col-lg-8">

                        {html}

                        <div className="row text-start pt-5 border-top">
                            <div className="col-md-12">
                                <div className="custom-pagination">
                                    <span>&lt;</span>
                                    {row.map((item, index) => (
                                        <a key={index} href="#">
                                            {item}
                                        </a>
                                    ))}
                                    <span>&gt;</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 sidebar">

                        <div className="sidebar-box search-form-wrap mb-4">
                            <form action="#" className="sidebar-search-form">
                                <span className="bi-search"></span>
                                <input type="text" className="form-control" id="s" placeholder="Type a keyword and hit enter" value={fd} onChange={findChange}/>
                                <input type={"button"} className={"btn btn-sm btn-default"} value={"검색"} onClick={findBtn}/>
                            </form>
                        </div>


                        <div className="sidebar-box">
                            <h3 className="heading">Categories</h3>
                            <ul className="categories">
                                {categoryList.map((category, index) => (
                                    <li key={index}>
                                        <a href="#" onClick={() => changeCategory(category)}>
                                            {category}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    )

}
export default Space_allList