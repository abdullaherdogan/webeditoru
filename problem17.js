let aa = ['','bir','iki','uc','dort','bes','alti','yedi',
'sekiz','dokuz','on'];

let cc = ['','on','yirmi','otuz','kirk','elli','altmis',
'yetmis','seksen','doksan'];

let dd = ['','yuz','ikiyuz','ucyuz','dortyuz','besyuz',
'altiyuz','yediyuz','sekizyuz','dokuzyuz'];

let ee = ['','yuz','ikiyuz','ucyuz','dortyuz','besyuz',
'altiyuz','yediyuz','sekizyuz','dokuzyuz'];

let ff = 'yuz';

function numb(num) {
    arr = '';
    for (i = 1; i <= num; i++) {
        j = i.toString();
        if (i < 10){
            arr += aa[i];
        } else if (i < 100 && i % 10 === 0) {
            arr += cc[j[0]];
        } else if (i < 100) {
            arr += cc[j[0] + aa[j[1]]];
        } else if (i < 1000 && j[1] == 0 && j[2] == 0) {
            arr += ee[j[0]];
        } else if (i < 1000 && j[1] != 0 && j[1] != 1 && j[2] != 0) {
            arr += dd[j[0]] + cc[j[1]] + aa[j[2]];
        } else if (i < 1000 && j[1] == 0) {
            arr += dd[j[0]] + aa[j[2]];
        } else if (i < 1000 && j[2] == 0) {
            arr += dd[j[0]] + cc[j[1]];
        } else {
            arr += ff;
        }
    } console.log(arr.lenght);
}
numb(1000);