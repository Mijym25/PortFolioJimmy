//#region
let encoursdetop = false
let animation = 1

if(window.scrollY != 0) {
    document.querySelector('body').classList.remove('active');
}

window.addEventListener('scroll', async function(){
    const But = document.querySelector('.NavButton');
    const ScrollBody = document.querySelector('body');
    const Nav_Barre = document.querySelector('.Nav-Barre');
    ScrollBody.classList.toggle('active', window.scrollY == 0);
    Nav_Barre.classList.remove('active', window.scrollY == 0);
    But.classList.remove('active', window.scrollY == 0);
    const projet = document.querySelector('.Projets_Section');
    if ((window.scrollY >= (projet.offsetTop) * 0.75) && (window.scrollY <= (projet.offsetTop + projet.offsetHeight))) {
        animation_projets(true,'.Projets_Section > .contents_list > div:nth-child(1)','.content')
    }
})

async function test() {
    const projet = document.querySelector('.Projets_Section');
    if ((window.scrollY >= (projet.offsetTop) * 0.75)) {
        animation_projets()
    }
}

//#endregion


//#region 



function Nav_Active() {
    const But = document.querySelector('.NavButton');
    const Nav_Barre = document.querySelector('.Nav-Barre')
    But.classList.toggle('active')
    Nav_Barre.classList.toggle('active')
}

function ToggleStart() {
    const ScrollBody = document.querySelector('body');
    ScrollBody.classList.toggle('active');
}

var tour = 0;
    //#region Propos 

    function nav_propos(id) {
        tour++;
        let ids = ['Vie','Parcours','Atouts','Pro'];
        let idsp = ['content_Vie','content_Parcours','content_Atouts','content_Pro'];
        const tabid = [ids, idsp];
        const idstock = document.getElementById(id);
        let result = null;

        for (let i = 0; i < ids.length; i++) {
            if (ids[i] != id) {
                document.getElementById(ids[i]).classList.remove('select')
                document.getElementById(ids[i]).classList.add('deselect');
            } else {
                if (idstock.classList.contains('select') == true) {
                    idstock.classList.remove('select');
                    for (let j = 0; j < ids.length; j++) {
                        document.getElementById(ids[j]).classList.remove('deselect');
                    }
                    break
                } else {
                    idstock.classList.remove('deselect')
                    idstock.classList.add('select')
                    result = i;
                }
            }
        }


        for(let i = 0; i < idsp.length; i++) {
            let elem = document.getElementById(idsp[i]);
            if (result == i) {
                elem.classList.toggle('active');
            } else {
                elem.classList.remove('active');
            }
        }


    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function nav_view() {
        const container = document.querySelectorAll('.nav-button');
        container.forEach(function(elem) {
            elem.classList.toggle('start');
        })
        await sleep(1000)
        container.forEach(function(elem) {
            elem.classList.toggle('start');
        })
    }


    var num = 0;
    function changenum(numr) {
        num = numr;
    }

    async function animation_parcours_suite() {
        const test = document.querySelector('.DBlocks');
        const block = test.querySelectorAll('.block')
        
        for (let j = 0; j < (num); j++) {
            block[j].classList.remove('uncolored');
            block[j].classList.remove('anime');
            block[j].classList.add('colored');
        }

        for(let i = num; i < (num + 2); i++) {
            block[i].classList.remove('uncolored');
            block[i].classList.add('anime');
            await sleep(750);
            block[i].classList.remove('anime');
            block[i].classList.add('colored');
        }
        block.forEach(function(elem) {
            elem.classList.remove('colored');
            elem.classList.add('uncolored');
        })
        if (document.querySelector('#content_Parcours').classList.contains('active') == true) {
            animation_parcours_suite();
        }
    }


    function toggle_button(elem) {
        let eleme = ('.' + elem);
        const elemclass = document.querySelector(eleme);
        elemclass.classList.toggle('active');
    }

    function remove_button(elem) {
        let eleme = ('.' + elem);
        const elemclass = document.querySelector(eleme);
        elemclass.classList.remove('active');
    }

    function toggle_button2(elem) {
        let eleme = elem
        console.log(elem)
        const elemclass = document.querySelector(eleme);
        elemclass.classList.toggle('active');
    }

    async function normal_button(elem, elem2 = 0, elem3 = false) {
        console.log('deb')
        await sleep(elem2)
        console.log('fin')
        if (!elem3) {
            let elemclass = document.querySelector(elem);
            if (elemclass.classList.contains('active') == false) {
                elemclass.classList.add('active');
            }
        } else {
            let elemclass = document.querySelectorAll(elem);
            elemclass.forEach(function(felem) {
                if (felem.classList.contains('active') == false) {
                    felem.classList.add('active');
                }
            })     
        }
    }

    function remove_button2(elem, elem2 = false) {
        if (!elem2) {
            const elemclass = document.querySelector(elem);
            elemclass.classList.remove('active');
        } else {
            const elemclass = document.querySelectorAll(elem);
            elemclass.forEach(function(felem) {
                felem.classList.remove('active');
            })
        }
    }




    function toggle_parcours_2(telem) {
        const tcontainer1 = document.querySelector('.content_parcours_annee');
        const tcontainer = tcontainer1.querySelectorAll('div#pge')
        for (let i = 0; i < tcontainer.length; i++) {
            if (tcontainer[i].className.includes(telem) == false) {
                tcontainer[i].classList.remove('active');
            } else {
                if (tcontainer[i].classList.contains('active') == false) {
                    tcontainer[i].classList.add('active');
                }
            }
        }
        Multi_Button_Parcours('.' + telem,'div',3,'')
    }

    function toggle_parcours_1(yelem, yelem2, num2) {
        const ycontainer2 = document.querySelector(('.' + yelem));
        const ycontainer3 = ycontainer2.querySelectorAll(('.' + yelem2));
        for (let i = 0; i < ycontainer3.length; i++) {
            if (i != num2) {
                ycontainer3[i].classList.remove('active2');
            } else {
                if (ycontainer3[i].classList.contains('active2') == false) {
                    ycontainer3[i].classList.add('active2');
                }
            }
        }
    }


    function Multi_Button_Parcours(elem, elem2, p_rort, p_class) {
        let container = document.querySelector(elem)
        let container2 = container.querySelectorAll(elem2)
        switch(p_rort) {
            case 1 :
                container2.forEach(function(felem) {
                felem.classList.toggle(p_class)
                })
                break;
            
            case 2 :
                container2.forEach(function(felem) {
                felem.classList.remove(p_class)
                })
                break;

            case 3 :
                container2.forEach(function(felem) {
                if (felem.className.includes('img') == true) {
                    switch(elem) {
                        case '.OLD' :
                            felem.setAttribute("style","background-image : url(Images/Collège_Albert_Thomas.jpg);")
                            break;
                        
                        case '.college' :
                            felem.setAttribute("style","background-image : url(Images/Lycée_Carnot.jpg);")
                            break;
                        
                        case '.lycee1' :
                            felem.setAttribute("style","background-image : url(Images/Lycée_Albert_Londres.jpg);")
                            break;

                        case '.lycee2' :
                            felem.setAttribute("style","background-image : url(Images/IUT.jpg);")
                            break;

                        }
                    }   
                })

        }
    }



    async function One_for_All_Button_Active(elem, elem2, elem4 = "") {
        let nume = elem        
        let container2 = document.querySelectorAll(elem2);
        if (container2[nume[0]].classList.contains('active') == false) {
            animation_projets(false,elem4,'.content',false)
        }
        container2.forEach(function(felem) {
            felem.classList.remove('active');
        })
        for (let j = 0; j < nume.length; j++) {
            let i = nume[j]
            console.log('test : ' + container2[i].classList.contains('active'))
            console.log('test : ' + container2[i].className)
            if (container2[i].classList.contains('active') == false) {
                container2[i].classList.add('active');
                animation_projets(true,elem4,'.content')
            }
        }
    }
    
//#endregion



//#region Mouse over

// console.log('en cours')
// let containerpripri = getelem('body > .Projets_Section > .contents_list > #contentsupertest')
// console.log(containerpripri)
// let test20 = document.getElementById('contentsupertest')
// console.log(test20)
// // container.addEventListener('mouseover',function(event) {
//     event.target.style.color = "orange";
// })
function mouseover(elem, elem2,elem3) {
    let container = document.querySelector(elem);
    let container2 = container.querySelectorAll(elem3);
    container2.forEach(function(felem) {
        // console.log(felem)
    })
    for(let i = 0; i < container2.length; i++) {
        if ( i != elem2) {
            container2[i].setAttribute("style","opacity : 0.5;");
        }
    }
}



function mouseoff(elem, elem2) {
    let container = document.querySelector(elem);
    // console.log(container);
    let container2 = container.querySelectorAll(elem2);
    container2.forEach(function(felem) {
        felem.setAttribute("style","opacity : 1;")
    })
}



async function animation_projets(bool,elem,elem2,bool2 = true) {
    const projet = document.querySelector(elem);
    const lesprojets = projet.querySelectorAll(elem2);
    for (let i = 0; i < lesprojets.length; i++) {
        if (bool) {
            if(bool2) {
                await sleep(100)
            }
            if (lesprojets[i].classList.contains('active') == false) {
                if (!bool2) {
                    await sleep(100)
                }
                lesprojets[i].classList.add('active');
            }
        } else {
            lesprojets[i].classList.remove('active')
        }
    }
}

let ouvert = false;
function animation_projets_ouverture(numero, elem, elem2) {
    normal_button('.projet-close',2000,true);
    const projet = document.querySelector(elem);
        const lesprojets = projet.querySelectorAll(elem2);
        let in_lesprojets;
        for (let i = 0; i < lesprojets.length; i++) {
            in_lesprojets = lesprojets[i].querySelectorAll('.in_content > * > *');
            if ( i == numero ) {
                // lesprojets[i].classList.toggle('open');
                if (lesprojets[i].classList.contains('open') == false) {
                    lesprojets[i].classList.remove('close_cours');
                    lesprojets[i].classList.add('open');
                    incontent(lesprojets[i])
                } 
            } else {
                lesprojets[i].classList.remove('open')
                lesprojets[i].classList.add('close')
            }
        }
    ouvert = true
}

function info(elem, elem2) {
    console.log(elem)
    console.log(elem2)
}

async function fermeture_All() {
    let numj;
    let numi;
    const contains = document.querySelectorAll('.contents_list > *');
    for (let j = 0; j < contains.length; j++) {
        let container1 = contains[j].querySelectorAll('.content')
        for (let i = 0; i < container1.length; i++) {
            if (container1[i].classList.contains('open') == true) {
                numj = j;
                numi = i;
            }
        }
    }
    let contentname;
    switch (numj) {
        case 0 :
            contentname = '.content_1years'
            break;
        case 1 :
            contentname = '.content_2years'
            break;
        case 2 :
            contentname = '.content_perso'
            break;
    }
    let sp_elem = '.Projets_Section > .contents_list > ' + contentname 
    animation_projets_fermeture(numi, sp_elem, '.content')
}


async function animation_projets_fermeture(numero, elem, elem2) {
    const projet = document.querySelector(elem);
    const lesprojets = projet.querySelectorAll(elem2);
    let in_lesprojets;
    for (let i = 0; i < lesprojets.length; i++) {
        in_lesprojets = lesprojets[i].querySelectorAll('.in_content > *, .in_content > * > *');
        if ( i == numero ) {
            // lesprojets[i].classList.toggle('open');
            if (lesprojets[i].classList.contains('open') == true) {
                lesprojets[i].classList.remove('open');
                lesprojets[i].classList.add('close_cours');
                retireclass_time(lesprojets[i], 'close_cours', 1400)
                in_lesprojets.forEach(function(felem){
                    felem.classList.remove('active')
                })
            } 
        } else {
                lesprojets[i].classList.remove('close')
                lesprojets[i].classList.add('open_encours')
                retireclass_time(lesprojets[i],'open_encours',1400)
                in_lesprojets.forEach(function(felem){
                    felem.classList.remove('active')
                })
                remove_button2('button.projet-close',true);
        }
    }
    await sleep(100)
    ouvert = false;
}



async function incontent(elem) {
    in_lesprojets = elem.querySelectorAll('.in_content > *, .in_content > * > :not(.modal) ');
    await sleep(2000);
    in_lesprojets.forEach(function(felem){
        felem.classList.add('active')
    })
}

async function retireclass_time(elem, elem1,elem2) {
    await sleep(elem2);
    elem.classList.remove(elem1);
};

async function asti_projets() {
    fermeture_All();
    window.scrollTo(0,document.querySelector('.Projets_Section').offsetTop);
    await sleep(1000)
    await sleep(500);
    One_for_All_Button_Active([2],'.Projets_Section > .nav_content > ul > li');
    One_for_All_Button_Active([2],'.Projets_Section > .contents_list > div', '.Projets_Section > .contents_list > .content_perso');  
    let container2 = document.querySelectorAll('.Projets_Section > .contents_list > .content_perso > .content');
    await sleep(1000);
    console.log(container2)
    for (let i = 1; i < container2.length; i++) {
        container2[i].addAttribute('style','transform: scale(1.1);transition: 0.3s;')
        await sleep(500)
        container2[i].setAttribute('style','transform: scale(1);transition: 0.3s;')
    }
}


async function Selects_projets(elem, elem3) {
    fermeture_All();
    window.scrollTo(0,document.querySelector('.Projets_Section').offsetTop);
    await sleep(1000)
    let elem2;
    switch (elem[0]) {
        case 0 :
            elem2 = '.content_1years';
            break;
        case 1 :
            elem2 = '.content_2years'
            break;
        case 2 :
            elem2 = '.content_perso'
            break;
    }
    console.log("elem :" + elem2)
    console.log(elem)
    await sleep(500);
    One_for_All_Button_Active(elem,'.Projets_Section > .nav_content > ul > li');
    One_for_All_Button_Active(elem,'.Projets_Section > .contents_list > div', '.Projets_Section > .contents_list > ' + elem2);
    let container2 = document.querySelectorAll('.Projets_Section > .contents_list > ' + elem2 + ' > .content');
    await sleep(1000);
    console.log(container2)
    for (let i = 0; i < elem3.length; i++) {
        container2[elem3[i]].setAttribute('style','transform: scale(1.1);transition: 0.3s;')
        await sleep(500)
        container2[elem3[i]].setAttribute('style','transform: scale(1);transition: 0.3s;')
    }
}


binding(document.querySelector(".DL_PDF"));
binding(document.querySelector(".InfoBulle"));


function binding(elem) {
    elem.onmouseover = function() {
        var InfoBull = document.querySelector(".InfoBulle");
        InfoBull.setAttribute('style','display: flex;');
        console.log(InfoBull)
    }
    elem.onmouseout = function() {
        var InfoBull = document.querySelector(".InfoBulle");
        InfoBull.setAttribute('style','display: none;');
        console.log(InfoBull)
    }
    elem.onclick = function() {
        window.open("File/Veille Techno/Veille Technologique Documentation.pdf","_blank", null);
    }
}