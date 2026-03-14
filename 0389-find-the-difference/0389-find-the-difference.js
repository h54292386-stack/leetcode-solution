/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
     let tarray =  t.split(",")
      for(i=0;i<t.length;i++){
        if(!s.includes(t[i]) || s.split(t[i]).length !== t.split(t[i]).length){
          return t[i]
      }}
};