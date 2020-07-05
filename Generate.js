function generate(){
    const values='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$_-*5!&';
    let Password='';

    for(var x =0; x<=12; x++){
        Password= Password+ values.charAt(Math.floor(Math.random()*Math.floor(values.length-1)));
    }
    document.getElementById('display').value=Password;
}