let num = [1,2,3,4,5,6,7,8,9,10,11,12,13];

function maiorNum(){

    for (let i = 0; i < num.length; i++) {
    
        if(num[i]>num[i+1]){
        
            console.log(num[i]);
        }
    }
    
}
maiorNum();
