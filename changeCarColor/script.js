 function btn(){
        alert('Item added to cart');
    }
    function red(){
        document.querySelector('.mainDiv img').src='./red1.jfif' ;
        document.querySelector('.red').style='cursor:pointer';
        document.querySelector('.batch').style='background-color:red';
        document.querySelector('.btn').style='background-color:red';
    }

    function grey(){
        document.querySelector('.mainDiv img').src='./gray1.jfif';
        document.querySelector('.grey').style='cursor:pointer';
         document.querySelector('.batch').style='background-color:grey';
         document.querySelector('.btn').style='background-color:grey';
    }
    function black(){
        document.querySelector('.mainDiv img').src='./black1.jfif';
        document.querySelector('.black').style='cursor:pointer';
        document.querySelector('.batch').style='background-color:black';
        document.querySelector('.btn').style='background-color:black';
    }
    document.querySelector('.btn').addEventListener('click', btn);

    document.querySelector('.red').addEventListener('click', red);
    document.querySelector('.grey').addEventListener('click', grey);
    document.querySelector('.black').addEventListener('click', black);

    btn();

