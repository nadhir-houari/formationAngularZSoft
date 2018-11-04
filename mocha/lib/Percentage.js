module.exports = {
   evolution:  (a, b)=>{
        return Math.round(10000*( b - a ) / a)/100;
    },
    wait:(time,callback)=>{
        setTimeout(() => {
            callback(18);
        }, time);
    }
}