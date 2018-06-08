import {
    FETCH_ALL_ORDER,
    FETCH_ALL_ORDER_SUCCESS,
    FILTER_ORDER,
    GET_ALL_ORDER,
} from 'constants/ActionTypes';


export const fetchOrders = () => {
    return {
        type: FETCH_ALL_ORDER
    };
};

export const fetchOrdersSuccess = (order) => {
    return {
        type: FETCH_ALL_ORDER_SUCCESS,
        payload: order
    }
};
export const showOrderMessage = (message) => {
    return {
        type: SHOW_MESSAGE,
        payload: message
    };
};
export const addFavourite = (data) => {
    return {
        type: ADD_FAVOURITE,
        payload: data
    };
};
export const onOrderSelect = (data) => {
    return {
        type: ON_ORDER_SELECT,
        payload: data
    };
};


export const onAddOrder = () => {
    return {
        type: ON_ADD_ORDER,
        payload: ''
    };
};
export const onOrderClose = () => {
    return {
        type: ON_ORDER_CLOSE,
        payload: ''
    };
};
export const onFilterOptionSelect = (option) => {
    return {
        type: ON_FILTER_OPTION_SELECT,
        payload: option
    };
};
export const onSaveOrder = (data) => {
    return {
        type: ON_SAVE_ORDER,
        payload: data
    };
};
export const onDeleteOrder = (data) => {
    return {
        type: ON_DELETE_ORDER,
        payload: data
    };
};
export const onDeleteSelectedOrder = () => {
    return {
        type: ON_DELETE_SELECTED_ORDER,
        payload: ''
    };
};
export const filterOrder = (userName) => {
    return {
        type: FILTER_ORDER,
        payload: userName
    };
};
export const getAllOrder = () => {
    return {
        type: GET_ALL_ORDER,
        payload: ''
    };
};
export const getUnselectedAllOrder = () => {
    return {
        type: GET_UNSELECTED_ALL_ORDER,
        payload: ''
    };
};
export const onAllOrderSelect = () => {
    return {
        type: ON_ALL_ORDER_SELECT,
        payload: ''
    };
};
export const updateOrderUser = (userName) => {
    return {
        type: UPDATE_SEARCH_USER,
        payload: userName
    };
};
export const onToggleDrawer = () => {
    return {
        type: ON_TOGGLE_DRAWER,
    };
};
export const handleRequestClose = () => {
    return {
        type: HANDLE_REQUEST_CLOSE,
    };
};
export const hideOrderLoader = () => {
    return {
        type: HIDE_ORDER_LOADER,
    };
};
