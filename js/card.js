function card(){
    var card = document.getElementById(cont).innerHTML;
    var win = window.open();
    win.document.write(card);
    for (var i = 0; i < 10; i++){
        win.print();
    }
}