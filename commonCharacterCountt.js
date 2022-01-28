function solution(s1, s2) {
    // Split up the strings into arrays
    s1 = s1.split("");
    s2 = s2.split("");
    
    let s1Object = {};
    let s2Object = {};
    
    // Iterate through the s1Object. If it doesn't exist we add to object. else we add count
    for (let i=0; i < s1.length; i++) {
        (s1Object.hasOwnProperty(s1[i]) === false)
        ?
        s1Object[s1[i]] = 1
        :
        s1Object[s1[i]]++;
    }
    
    for (let i=0; i < s2.length; i++) {
        (s2Object.hasOwnProperty(s2[i]) === false)
        ?
        s2Object[s2[i]] = 1
        :
        s2Object[s2[i]]++;
    }
    
    var total = 0;
    for ( var prop in s1Object) {
        if(s2Object.hasOwnProperty(prop) === true) {
            (s2Object[prop] < s1Object[prop])
            ?
                total += s2Object[prop]
            :
                total += s1Object[prop]
        }
    }
    
    return total;
}