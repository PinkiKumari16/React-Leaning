function searchBinary(arr, val, s_p=0, e_p=array.length){
    if(s_p > e_p) return -1;

    let min_ind = Math.floor((s_p + e_p)/2);

    if(arr[min_ind] === val) return min_ind;
    else if(arr[min_ind]>val){
        return searchBinary(arr, val,s_p, e_p=min_ind-1);
    }
    else{
        return searchBinary(arr, val, s_p=min_ind+1, e_p)
    }
}

let array = [1,2,3,4,5,6];
console.log(searchBinary(array, 6))