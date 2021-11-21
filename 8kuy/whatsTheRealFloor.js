function getRealFloor(n) {
    if (n < 0){
        return n
    }else if ( n >= 13 && n>0){
        return n = n-2;
    } else if(n < 13 && n > 0) {
        return n - 1
    }
    return n
}