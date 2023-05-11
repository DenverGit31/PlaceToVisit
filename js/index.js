document.addEventListener('DOMContentLoaded',function(){

    // image 1
    const bg1 = document.querySelector('#img1')
    function func1(a){
        a.preventDefault()
        const createbg = document.querySelector('.body')
        createbg.style.backgroundImage ='url(../assets/Img1.jpg)';
        createbg.style.opacity = '1'


    }bg1.addEventListener("click",func1)

    // image2
    const bg2 = document.querySelector('#img2')
    function func2(a){
        a.preventDefault()
        const createbg = document.querySelector('.body')
        createbg.style.backgroundImage ='url(../assets/img2.jpg)';
        createbg.style.opacity = '1'

        const changeLbl = document.querySelector('#lbl')
        changeLbl.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis culpa repellendus vitae itaque veritatis iusto, ipsum ea sed fuga dolor, sit maiores rem ullam? Voluptas illo repudiandae labore sint! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ullam quas mollitia earum deserunt voluptatum voluptatem sunt assumenda accusantium repellat doloremque debitis beatae illo dolorem aperiam, labore repudiandae quisquam suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis culpa repellendus vitae itaque veritatis iusto, ipsum ea sed fuga dolor, sit maiores rem ullam? Voluptas illo repudiandae labore sint! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ullam quas mollitia earum deserunt voluptatum voluptatem sunt assumenda accusantium repellat doloremque debitis beatae illo dolorem aperiam, labore repudiandae quisquam suscipit.'

        const changeTtle = document.querySelector('#title')
        changeTtle.innerHTML = 'Place to Visit number 2'
    }bg2.addEventListener("click",func2)

    
    // image3
    const bg3 = document.querySelector('#img3')
    function func3(a){
        a.preventDefault()
        const createbg = document.querySelector('.body')
        createbg.style.backgroundImage ='url(../assets/img3.jpg)';
        createbg.style.opacity = '1'


        const changeLbl = document.querySelector('#lbl')
        changeLbl.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis culpa repellendus vitae itaque veritatis iusto, ipsum ea sed fuga dolor, sit maiores rem ullam? Voluptas illo repudiandae labore sint! Lorem ipsum dolor,'
        const changeTtle = document.querySelector('#title')
        changeTtle.innerHTML = 'Place to Visit number 3'
    }bg3.addEventListener("click",func3)

    
    // image4
    const bg4 = document.querySelector('#img4')
    function func4(a){
        a.preventDefault()
        const createbg = document.querySelector('.body')
        createbg.style.backgroundImage ='url(../assets/img4.jpg)';
        createbg.style.opacity = '1'

        const changeLbl = document.querySelector('#lbl')
        changeLbl.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis culpa repellendus vitae itaque veritatis iusto, ipsum ea sed fuga dolor, sit maiores rem ullam? Voluptas illo repudiandae labore sint! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ullam quas mollitia earum deserunt voluptatum voluptatem sunt assumenda accusantium repellat doloremque debitis beatae illo dolorem aperiam, labore repudiandae quisquam suscipit.'

        const changeTtle = document.querySelector('#title')
        changeTtle.innerHTML = 'Place to Visit number 4'
    }bg4.addEventListener("click",func4)


    
    // image5
    const bg5 = document.querySelector('#img5')
    function func5(a){
        a.preventDefault()
        const createbg = document.querySelector('.body')
        createbg.style.backgroundImage ='url(../assets/img5.jpg)';
        createbg.style.opacity = '1'

        const changeLbl = document.querySelector('#lbl')
        changeLbl.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis culpa repellendus vitae itaque veritatis iusto, ipsum ea sed fuga dolor, sit maiores rem ullam? Voluptas illo repudiandae labore sint! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ullam quas mollitia earum deserunt voluptatum voluptatem sunt assumenda accusantium repellat doloremque debitis beatae illo dolorem aperiam, labore repudiandae quisquam suscipit.'

        const changeTtle = document.querySelector('#title')
        changeTtle.innerHTML = 'Place to Visit number 5'
    }bg5.addEventListener("click",func5)

    
    // image6
    const bg6 = document.querySelector('#img6')
    function func6(a){
        a.preventDefault()
        const createbg = document.querySelector('.body')
        createbg.style.backgroundImage ='url(../assets/img6.jpg)';
        createbg.style.opacity = '1'

        const changeLbl = document.querySelector('#lbl')
        changeLbl.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis culpa repellendus vitae itaque veritatis iusto, ipsum ea sed fuga dolor, sit maiores rem ullam? Voluptas illo repudiandae labore sint! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ullam quas mollitia earum deserunt voluptatum voluptatem sunt assumenda accusantium repellat doloremque debitis beatae illo dolorem aperiam, labore repudiandae quisquam suscipit.ipsum ea sed fuga dolor, sit maiores rem ullam? Voluptas illo repudiandae labore sint! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ullam quas mollitia earum deserunt voluptatum voluptatem sunt assumenda accusantium repellat doloremque debitis beatae illo dolorem aperiam, labore repudiandae quisquam suscipit.'

        const changeTtle = document.querySelector('#title')
        changeTtle.innerHTML = 'Place to Visit number 6'
    }bg6.addEventListener("click",func6)


})
