var reverseOnlyLetters = function(S) {
    let T = Array.from(S.replace(/[^a-zA-Z]/g, ''));
    let ans = new Array(S.length).fill().map((_, j) => {
        if(S[j].match(/[^a-zA-Z]/)) return S[j];
        else return T.pop();
    });
    return ans.join('');
};
