export const getAllUserDetails = () => {
    return {
        type : "GET_ALL_USER",
    };
};

export const setAllUserDetails = (data) => {
    return {
        type : "SET_ALL_USER",
        allUsers : data,
    };
};
