
import {
    FETCH_CATEGORYLIST,
    FETCH_SPACE_DETAIL, FETCH_SPACEFINDREACT, FETCH_SPACELIST, FETCH_SPACEPAGEREACT
} from "./types";
import axios from "axios";

// Home
export const fetchSpaceList = () => (dispatch) => {
    axios.get("http://localhost/space/space_list")
        .then((res) => {
            dispatch({
                type: FETCH_SPACELIST,
                payload: res.data
            }); 
        }).catch((error) => {
        console.error('Error', error);
    })
}


// 카테고리별 목록
export const fetchCategoryList = () => (dispatch) => {
    axios.get("http://localhost/space/space_category")
        .then((res) => {
            dispatch({
                type: FETCH_CATEGORYLIST,
                payload: res.data
            });
        }).catch((error) => {
            console.error('Error', error);
        })
}

// 상세보기
export const fetchSpaceDetail=(spaceId)=>dispatch=>{
    axios.get("http://localhost/space/space_detail",{
        params:{
            spaceId:spaceId
        }
    }).then((res)=>dispatch({
        type:FETCH_SPACE_DETAIL,
        payload :res.data
    }))
}

export const fetchSpaceFindReact=(fd,page)=>dispatch=>{
    axios.get("http://localhost/space/space_find_react",{
        params:{
            fd:fd,
            page:page
        }
    }).then((res)=>dispatch({
        type:FETCH_SPACEFINDREACT,
        payload :res.data
    }))
}


export const fetchSpacePageReact=(fd,page)=>dispatch=>{
    axios.get("http://localhost/space/space_page_react",{
        params:{
            fd:fd,
            page:page
        }
    }).then((res)=>dispatch({
        type:FETCH_SPACEPAGEREACT,
        payload :res.data
    }))
}


