import {FETCH_CATEGORYLIST, FETCH_SPACE_DETAIL, FETCH_SPACEFINDREACT, FETCH_SPACELIST} from "../actions/types";

// 데이터 저장 (useState)
const initialState={
    spaceList:[],
    find_list:[],
    space_detail:{},
    cate_info:{},
    page_info:{},
    food_data:[]
}

export default function (state=initialState,action) {
    console.log("reducer function call..")

    switch (action.type) {
        case FETCH_CATEGORYLIST:
            return {
                ...state,
                categoryList:action.payload
            }
        case FETCH_SPACEFINDREACT:
            return {
                ...state,
                find_list: action.payload
            }
        case FETCH_SPACELIST:
            return {
                ...state,
                spaceList: action.payload
        }

        case FETCH_SPACE_DETAIL:
            return {
                ...state,
                space_detail: action.payload
        }

        default:
            return state;
    }
}