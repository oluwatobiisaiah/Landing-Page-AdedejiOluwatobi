const { NEXT, PREV } = require("./constant/navigationActions");

const useHireUsnavigationReducer = (navigationState,action)=>{
    switch(action.type){
        case NEXT : {
            if(navigationState.formProgress < 100){
                return {currentNavigationState:navigationState.currentNavigationState+1,formProgress:navigationState.formProgress+20}
            }else{
                return navigationState
            }
        }
        case PREV:{
            if(navigationState.formProgress > 0){
                return {currentNavigationState:navigationState.currentNavigationState-1,formProgress:navigationState.formProgress-20}
   
            }else{
                return navigationState
            }
        }
    }
}

const useNextBtn = (navigationDispatch)=>{
    navigationDispatch({type:NEXT})
}

const usePreviousBtn = (navigationDispatch)=>{
    navigationDispatch({type:PREV})
}

export {useHireUsnavigationReducer,useNextBtn,usePreviousBtn}
