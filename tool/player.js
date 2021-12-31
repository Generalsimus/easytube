

function ninjaGo(n) {
    

    function t(t,s) {
        
        t=typeof t == 'string'?document.createElement(t):t;
        for (var o in s) { 
            s[o]?t.setAttribute(o,s[o]):0; 
          }

        return t
    }
    function q(t,s) {
        return s?s.querySelector(t):document.querySelector(t)
    }
    function a(t,s,l) {
        t.appendChild(s);
        return l?t:s
    }
    function i(t,s) {
        t.innerHTML=s;
        return t
    }
    // function e(t,s,f) {
    //     t.addEventListener(s, f);
    // }
    

    

    var v = t('video' ,{poster:(n.poster?n.poster:0)}),
        d = a(t('div' ,{class:'ninja n_qt'}),v,v),
        qr={a:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><path d="M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z"></path></svg>'}
        g=i(a(d,t('div',{class:'n_g'})),qr.a),
        
        l=a(d,t('div',{class:'n_l'})),
        j=a(l,t('div',{class:'n_j'})),
        
        
        nx=a(j,t('div',{class:'n_nx'})),

        qj=a(nx,t('div',{class:'n_nb'})),
        qi=a(nx,t('div',{class:'n_qi'})),
        nb=i(a(qi,t('div',{class:'n_nb'})),'SPEED'),
        qu=a(nx,t('div',{class:'n_qu'})),
        qo= [0.25,0.5,0.75,1,1.25,1.5,1.75,2],
        z=a(j,t('div',{class:'n_z'})),
        u=a(j,t('div',{class:'n_u'})),
        o=a(j,t('div',{class:'n_o'})),
        b=a(j,t('div',{class:'n_b'})),
        k=a(j,t('div',{class:'n_k'})),
        w=a(k,t('div',{class:'n_w'})),
        y=a(k,t('div',{class:'n_y'})),       
        
        c=a(l,t('div',{class:'n_c'})),
        h={a:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><path d="M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z"></path></svg>',b:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><path d="M100,194.9c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H65c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V45c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h30c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V194.9z M180,45.1c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6V195c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V45.1z"></path></svg>'},
        e={a:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><path d="M55.9 100.8C53.2 100.4 52.6 98.4 54.5 96.4L68.9 82L41 54.1L55.2 39.9L83.1 67.8L97.5 53.4C99.4 51.5 101.4 52.1 101.9 54.8L110.3 104.9C110.8 106.7 109.7 108.5 107.9 109C107.2 109.4 106.6 109.4 106 109.2L55.9 100.8ZM144.6 186.3C142.6 188.2 140.6 187.6 140.2 184.9L131.8 134.8C131.6 134.3 131.6 133.6 131.8 133.1C132.3 131.3 134.1 130.2 135.9 130.7L186 139.1C188.7 139.6 189.3 141.6 187.4 143.5L173 157.9L200.9 185.8L186.7 200L158.8 172.1L144.6 186.3Z" /><path d="M100.8 186C100.4 188.7 98.4 189.3 96.4 187.4L82 173L54.1 200.9L39.9 186.7L67.8 158.8L53.4 144.4C51.5 142.5 52.1 140.5 54.8 140L104.9 131.6C106.7 131.1 108.5 132.2 109 134C109.4 134.7 109.4 135.3 109.2 135.9L100.8 186ZM186.3 97.3C188.2 99.3 187.6 101.3 184.9 101.7L134.8 110.1C134.3 110.3 133.6 110.3 133.1 110.1C131.3 109.6 130.2 107.8 130.7 106L139.1 55.9C139.6 53.2 141.6 52.6 143.5 54.5L157.9 68.9L185.8 41L200 55.2L172.1 83.1L186.3 97.3Z" /></svg>',b:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><path d="M96.3 187.1C98.2 189 97.6 191.1 94.9 191.5L44.3 199.9C42.5 200.4 40.6 199.3 40.1 197.5C39.9 196.9 39.9 196.3 40.1 195.8L48.5 145.2C48.9 142.5 50.9 141.8 52.9 143.8L67.4 158.3L95.6 130.1L109.9 144.4L81.7 172.6L96.3 187.1ZM195.8 40.1C196.4 40 197 40 197.5 40C199.3 40.6 200.4 42.4 199.9 44.2L191.5 94.8C191.1 97.5 189 98.1 187.1 96.2L172.6 81.7L144.4 109.9L130.1 95.6L158.3 67.4L143.8 52.9C141.8 50.9 142.5 48.9 145.2 48.5L195.8 40.1Z"/><path d="M52.9 96.32C51 98.22 48.9 97.62 48.5 94.92L40.1 44.32C39.6 42.52 40.7 40.62 42.5 40.12C43.1 39.92 43.7 39.92 44.2 40.12L94.8 48.52C97.5 48.92 98.2 50.92 96.2 52.92L81.7 67.42L109.9 95.62L95.6 109.92L67.4 81.72L52.9 96.32ZM199.9 195.82C200 196.42 200 197.02 200 197.53C199.4 199.33 197.6 200.43 195.8 199.93L145.2 191.53C142.5 191.13 141.9 189.03 143.8 187.13L158.3 172.63L130.1 144.42L144.4 130.12L172.6 158.32L187.1 143.82C189.1 141.82 191.1 142.53 191.5 145.22L199.9 195.82Z"/></svg>'},
        p={a:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><path d="M116.5,42.8v154.4c0,2.8-1.7,3.6-3.8,1.7l-54.1-48H29c-2.8,0-5.2-2.3-5.2-5.2V94.3c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48C114.8,39.2,116.5,39.9,116.5,42.8z"></path><path d="M136.2,160v-20c11.1,0,20-8.9,20-20s-8.9-20-20-20V80c22.1,0,40,17.9,40,40S158.3,160,136.2,160z"></path><path d="M216.2,120c0-44.2-35.8-80-80-80v20c33.1,0,60,26.9,60,60s-26.9,60-60,60v20C180.4,199.9,216.1,164.1,216.2,120z"></path></svg>',b:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.6,39.1,116.4,39.9,116.4,42.8z M212.3,96.4l-14.6-14.6l-23.6,23.6l-23.6-23.6l-14.6,14.6l23.6,23.6l-23.6,23.6l14.6,14.6l23.6-23.6l23.6,23.6l14.6-14.6L188.7,120L212.3,96.4z"></path></svg>'},
        o= i(a(c,t('div',{class:'n_a'})),h.a),
        nv= i(a(c,t('div',{class:'n_nv'})),'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><path d="M113.2,131.078a21.589,21.589,0,0,0-17.7-10.6,21.589,21.589,0,0,0-17.7,10.6,44.769,44.769,0,0,0,0,46.3,21.589,21.589,0,0,0,17.7,10.6,21.589,21.589,0,0,0,17.7-10.6,44.769,44.769,0,0,0,0-46.3Zm-17.7,47.2c-7.8,0-14.4-11-14.4-24.1s6.6-24.1,14.4-24.1,14.4,11,14.4,24.1S103.4,178.278,95.5,178.278Zm-43.4,9.7v-51l-4.8,4.8-6.8-6.8,13-13a4.8,4.8,0,0,1,8.2,3.4v62.7l-9.6-.1Zm162-130.2v125.3a4.867,4.867,0,0,1-4.8,4.8H146.6v-19.3h48.2v-96.4H79.1v19.3c0,5.3-3.6,7.2-8,4.3l-41.8-27.9a6.013,6.013,0,0,1-2.7-8,5.887,5.887,0,0,1,2.7-2.7l41.8-27.9c4.4-2.9,8-1,8,4.3v19.3H209.2A4.974,4.974,0,0,1,214.1,57.778Z"></path></svg>'),
        nh=a(c,t('div',{class:'n_nh'})),
        x= i(a(nh,t('div',{class:'n_x'})),p.a),
        np = a(nh,t('div',{class:'n_np'})),
        m = a(np,t('div',{class:'n_m'})),
        f= i(a(c,t('div',{class:'n_f'})),'00:00 / 00:00'),
        s= i(a(c,t('div',{class:'n_s'})),'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" ><path d="M204,145l-25-14c0.8-3.6,1.2-7.3,1-11c0.2-3.7-0.2-7.4-1-11l25-14c2.2-1.6,3.1-4.5,2-7l-16-26c-1.2-2.1-3.8-2.9-6-2l-25,14c-6-4.2-12.3-7.9-19-11V35c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v28c-6.7,3.1-13,6.7-19,11L56,60c-2.2-0.9-4.8-0.1-6,2L35,88c-1.6,2.2-1.3,5.3,0.9,6.9c0,0,0.1,0,0.1,0.1l25,14c-0.8,3.6-1.2,7.3-1,11c-0.2,3.7,0.2,7.4,1,11l-25,14c-2.2,1.6-3.1,4.5-2,7l16,26c1.2,2.1,3.8,2.9,6,2l25-14c5.7,4.6,12.2,8.3,19,11v28c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6v-28c7-2.3,13.5-6,19-11l25,14c2.5,1.3,5.6,0.4,7-2l15-26C206.7,149.4,206,146.7,204,145z M120,149.9c-16.5,0-30-13.4-30-30s13.4-30,30-30s30,13.4,30,30c0.3,16.3-12.6,29.7-28.9,30C120.7,149.9,120.4,149.9,120,149.9z"></path></svg>'),
        r= i(a(c,t('div',{class:'n_r'})),e.b),
        qv =a(d,t('div',{class:'n_qv'})),
        // sq=n.thumbnail,
        nz={},
        nl=`
        .ninja {
            display: flex;
            position: relative;
            width: 100%;
            background: black;
            overflow: hidden;
        }
        .ninja video {
            width: 100%;
        }
        .ninja * {
            color: #cccccc;
            transition: all .25s ease-in-out;
        }
        .ninja .n_l {
            width: 100%;
            position: absolute;
            display: flex;
            box-sizing: border-box;
            align-self: flex-end;
            align-items: center;
            padding: 15px;
        }
        .ninja .n_c {
            display: flex;
            width: 100%;
            align-items: center;
            align-self: center;
            padding: 30px 10px 5px 5px;
        }
        .ninja .n_j {
            width: calc(100% - 30px);
            position: absolute;
            padding: 9px 0px;
            align-self: baseline;
            cursor: pointer;
            display: flex;
            align-items: center;
            height: 5px;
        }
        
        .ninja .n_j>* {
            position: absolute;
            height: 3px;
            transform-origin: center;
            transform: scale(1);
            transition: transform .25s ease-in-out;
        }
        
        .ninja .n_k {            
            left: 0%;
            pointer-events: none;
            height: auto;
        }
        .ninja.n_qc>*:not(.n_qv):not(.n_ne):not(.n_ne):not(.n_nq){
            display: none;
        }
        .ninja .n_qv{
            display: contents;
        }
        .ninja .n_qv>*{
            width: 100%;
        }
        
        .ninja .n_k,.ninja .n_nx{
            box-shadow: 0 0 10px rgba(0,0,0,0.3);
            transition: none;
            bottom: 30px;
            opacity: 0;
            pointer-events: none;
            transition: opacity .05s ease-in-out;
            height: auto;
        }
        .ninja .n_nx{       
    border-radius: 2px;
    overflow: hidden;
            right: 0;
            background: rgba(0, 0, 0, 0.67);
        }
        .ninja .n_nc .n_nx{
            opacity: 1;
    pointer-events: auto;
        } 
        .ninja .n_y {
            text-align: center;
            background: white;
            color: black;
            font-size: small;
            padding: 3px 10px;
            border-bottom-left-radius: 1px;
            border-bottom-right-radius: 1px;
        }
        .ninja .n_z {
            width: 0%;
            background: rgba(255, 255, 255, 0.4);
        }
        .ninja .n_u {
            width: 0%;
            background: #f2f2f2;
            /* transition: none; */
        }
        .ninja .n_o {
            width: 100%;
            background: rgba(255, 255, 255, 0.2);
        }
        .ninja .n_c>*:not(.n_f) {
            padding: 0 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
        }
        .ninja svg {
            transform: rotate(0deg);
            width: 24px;
            height: 24px;
            fill: #cccccc;
            transition: all .15s ease-out;
        }
        .ninja .n_c>*:hover svg {
            fill: #f2f2f2
        }
        .ninja .n_w {
            margin: 0px auto;
            transition:none;
            
        }
        .ninja .n_x {
            display: flex;
        }
        .ninja .n_b {
            width: 100%;
            height: 100%;  
        }
        .ninja .n_nb {
                padding: 0 10px;
                box-sizing: border-box;
                min-width: 200px;
                height: 35px;
                display: flex;
                align-items: center;
                
        }
        .ninja .n_nb:hover{
            background: rgba(127, 127, 127, 0.5);
        }
        .ninja .n_qi .n_nb,.ninja .n_nx>:first-child{
            background-position: right 10px center;
                background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMjQwIj4KCTxwYXRoIGZpbGw9IiNmMmYyZjIiIGQ9Ik0xMzkuOTYgMTgxLjk2TDIwMS44IDEyMEwxMzkuOTcgNTguMDNMMTU5IDM5TDI0MCAxMjBMMTU5IDIwMUwxMzkuOTYgMTgxLjk2WiIgLz4KPC9zdmc+);
                background-size: 24px;
                background-repeat: no-repeat;
        }
        .ninja .n_np {
            height: 24px;        
            display: flex;
            align-items: center;
            margin-left: 5px;
        }
        .ninja .n_m {
            width: 0px;
            height: 5px;
            background: #f2f2f2;
            line-height: 20px;
        }
        .ninja .n_s {
            margin-left: auto;
        }
        .ninja .n_nc .n_s svg{
            transform: rotate(60deg);
        }

        
        
        
        .ninja .n_k::after {
            content: '';
            position: absolute;
            bottom: -11px;
            left: 50%;
            background: white;
            width: 14px;
            height: 14px;
            z-index: -1;
            transform: translate(-50%, -50%)rotate(45deg);
            border-bottom-right-radius: 1px
        }
        .ninja.n_qt>*:not(.n_g):not(video){
            display: none;
        }
        .ninja.n_qt .n_g svg{
            display: block;
        }
        .ninja .n_g {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.4)77%, rgba(0, 0, 0, 0.4)100%)100% 100% / 100% 240px no-repeat transparent;
            cursor: pointer;
        }
        .ninja .n_g svg{
            display: none;
            width: 90px;
            height: 90px;
            fill: #f2f2f2
        }

        
        .ninja .n_nx>*:not(.n_qi) {
            display: none;
        }
        .ninja .n_qo>:first-child{
            transform: rotateY(180deg);
        }
        .ninja .n_qo .n_nb{
            display: flex;
        }
        .ninja .n_qo .n_qi{
            display: none;
        }
        .ninja .n_qo .n_qu{
            display: block;
        }


        .ninja .n_nh:hover .n_m {
            width: 70px
        }
             
        @media only screen and(max-width:420px) {
            .ninja .n_nv {
                display: none !important;
            }
        }
        @media only screen and(max-width:350px) {
            .ninja .n_nh {
                display: none !important;
            }
        }
        
        `;

        

        function qy(s){
            
            if(Array.isArray(s.file)){

            }else{
                if(s.file){
                    
                    v.src=s.file
                    // v.play()
                    d.classList.remove('n_qc')
                    i(qv,'')
                    return v;
                    
                }else{
                    d.classList.remove('n_qt')
                    d.classList.add('n_qc')
                    v.pause();
                    i(qv,s.ifile)
                    q('*',qv).style.height=screen.height*0.6+'px'
                }
                
                    
            }
            
            if(s.thumbnail){
            var img = new Image();
                img.src = s.thumbnail.url;
                img.onload = function() { 
                    
                var a=s.thumbnail.framewidth,
                    b=s.thumbnail.frameheight,
                    
                    h=this.height,
                    j=this.width,
                    t=s.thumbnail.vertical;
                    
                    w.style.width=a+'px';
                    w.style.height=b+'px';
                    w.style.background = 'url('+s.thumbnail.url+') no-repeat 0px 0px'

                    
                    nz ={h:t?j:h,l:parseInt(h/b)*(j/a),f:t?a:b,s:t?b:a,t:t}
    
                    
                }
            }
            

            }

    function nj(){
        var nq= i(a(d,t('div',{class:'n_nq'})),'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><path d="M0 17L45 17L45 64.54L0 64.54L0 17Z" /><path d="M0 96.23L45 96.23L45 143.77L0 143.77L0 96.23Z" /><path d="M75 17L240 17L240 64.54L75 64.54L75 17Z" /><path d="M75 96.23L240 96.23L240 143.77L75 143.77L75 96.23Z" /><path d="M75 175.46L240 175.46L240 223L75 223L75 175.46Z" /><path d="M0 175.46L45 175.46L45 223L0 223L0 175.46Z" /></svg>'),
        ne=a(d,t('div',{class:'n_ne'})),
        nu=a(ne,t('div',{class:'n_nu'})),       
        ni=a(nu,i(t('span',{class:'n_ni'}),'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><path id="Layer" class="shp0" d="M160.55 53.96L146.59 40L80.28 106.32L13.96 40L0 53.96L66.32 120.28L0 186.59L13.96 200.55L80.28 134.24L146.59 200.55L160.55 186.59L94.24 120.28L160.55 53.96Z"/></svg>')),
        ns=a(nu,i(t('span',{class:'n_ns'}),'«')),
        nr=a(nu,t('ul',{class:'n_nr'})),
        nd=a(nu,i(t('span',{class:'n_nd'}),'»')),
        ny;
        ns.onclick=ng
        nd.onclick=ng
        
        function ng(e){
            e.preventDefault();           
            var  f=q('.n_nf',nr),
            p=f.previousSibling ,
            n=f.nextElementSibling,
            c=this==nd,
            k=f.offsetWidth+10;
            
            nr.scrollLeft =c && !n?0: !c && !p?8888: nr.scrollLeft -(c?-k:k);

            (c?n || nr.children[0]:p|| nr.lastElementChild).click();
        }

        n.sources.map(function(o,s) {
            var nt = a(ne,t('ul',{class:'n_nt'})) 

            a(nr,i(t('li',{class:(s?0:'n_nf')}),o.name)).onclick= function(){
                (ny?ny:ne.children[1]).style.display='none'  
                q('.n_nf',nr).className=''
                this.className='n_nf'
                ny=nt;
                nt.style.display='block'                              
            }
            
            s?0:qy(o.files[0]);
            o.files.map(function(o,d) {
                        
                a(nt,i(t('li'),o.name)).onclick = function(){     
                             
                    v.load()
                    qy(o).play()
                    
                } 
            })


                    
          })
          nq.onclick= function(){ 
            d.classList.add('n_nqo')
        }
        
        ni.onclick= function(){
            d.classList.remove('n_nqo')
        }
nl=nl+`
.ninja .n_ns {
    margin: 0 auto 0 15px;
}

.ninja .n_ns:hover {
    transform: translateX(-2px);
}

.ninja .n_ns,
.ninja .n_nd {
    color: white;
    cursor: pointer;
    width: 18px;
    height: 18px;
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
}

.ninja .n_nd {
    margin: 0 15px 0 auto;
}

.ninja .n_nd:hover {
    transform: translateX(2px);
}

.ninja .n_ni {
    display: flex;
    cursor: pointer;
}

.ninja .n_ni>svg {
    width: 24px;
    height: 24px;
    fill: white;
}

.ninja .n_nu {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    padding-bottom: .5em;
}

.ninja .n_nr {
    display: flex;
    width: 152px;
    margin: 0 auto;
    overflow: hidden;
}

.ninja .n_nr>li:hover {
    background: rgba(255, 255, 255, 0.5);
}

.ninja .n_nr>.n_nf {
    background: rgba(255, 255, 255, 0.15);
}

.ninja .n_nr>li {
    padding: 2px 10px;
    margin: 0 5px;
}

.ninja .n_nt {
    display: none;
    height: calc(100% - 24px);
    overflow: auto;
    position: relative;
}

.ninja .n_nr::-webkit-scrollbar-track,
.ninja .n_nt::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: transparent;
}

.ninja .n_nt::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
}

.ninja .n_nr::-webkit-scrollbar {
    margin-top: 2px;
    height: 6px;
}

.ninja .n_nr::-webkit-scrollbar-thumb,
.ninja .n_nt::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
}

.ninja .n_nt>li {
    padding: 1em 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    min-width: 200px;
}

.ninja .n_ne>:nth-child(2) {
    display: block;
}

.ninja .n_nt:first-child {
    display: block !important;
}

.ninja .n_ne {
    min-width: 36px;
    padding: 1em;
    height: calc(100% - 96px);
    /*background: #33333357;*/
    background: rgba(0, 0, 0, 0.67);
    opacity: 0;
    box-sizing: border-box;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.3);
    transform: translateX(100%);
}

.ninja .n_nq,.ninja .n_ne {
    right: 15px;
    top: 15px;
    position: absolute;
}

.ninja .n_nq {
    padding: 10px;
    display: flex;
    position: absolute;
    opacity: 1;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 1px;
    background: rgba(255, 255, 255, 0.1);
}

.ninja .n_nq svg {
    fill: white;
    width: 24px;
    height: 24px;
}

.ninja.n_nqo .n_nq {
    opacity: 0;
}

.ninja.n_nqo .n_ne {
    transform: translateX(0%);
    opacity: 1;
}

.ninja .n_ne li {
    white-space: nowrap;
    cursor: pointer;
    box-sizing: border-box;
    color: white;
}

.ninja .n_nt li:hover {
    padding: 1em;
    color: rgba(255, 255, 255, 0.2);
    color: #cccccc;
}

.ninja .n_j:hover>*:not(.n_k):not(.n_nx):not(.n_b) {
    transform: scale(1, 1.8);
}

.ninja .n_b:hover+.n_k {
    opacity: 1;
}





@media only screen and (max-width: 600px) {
    .ninja.n_nqo .n_ne{
        width: 100%;
        height: 100%;
        right: 0;
        top: 0;
    }
    .ninja .n_nr{
        width: auto;
        margin: 0px 20px;
    }
    .ninja.n_nqo .n_l {
        display: none;
    }
    
}
`;
    }
    nj()
    
    

    
   

    

qo.map(function(h){
    i(a(qu,t('div',{class:'n_nb'})),h==1?'Default (1)':h).onclick=function(){
        v.playbackRate=h
        s.click()
    }
    
})
        
function formatSeconds(sec) {
    // gavasworbbb
    var r= [(sec / 3600), ((sec % 3600) / 60), ((sec % 3600) % 60)]
           .map(v => v < 10 ? "0" + parseInt(v) : parseInt(v))
           .filter((i, j) => i !== "00" || j > 0)
           .join(":");
           
           return r
}

// ..........

// ...........


o.onclick= ply;
g.onclick= ply;
function ply(){
    v.paused?v.play():v.pause();
}
v.onplay = function() {
    i(o,h.b);
}
v.onpause = function() {
    i(o,h.a);
};
nb.onclick=function(){
nx.classList.add('n_qo')
}
qj.onclick=function(){
    nx.classList.remove('n_qo')
}
s.onclick=function() {    
    l.className=q('.n_nc',d)?'n_l':'n_l n_nc';
}
g.onclick=function() {   
    d.classList.remove('n_qt')
    ply()
}

window.onkeydown = function(e){
    if(e.keyCode==39 || e.keyCode==37){
    v.currentTime=v.currentTime-(e.keyCode==39?-10:10)
    }
};

v.ontimeupdate = function() {
    var d =v.duration,    
    c=v.currentTime;
    u.style.width=c/d *100+'%'   
    
    i(f,formatSeconds(c)+' / '+formatSeconds(d))
};
v.onprogress = function() {
    v.buffered.length>0?z.style.width = v.buffered.end(--v.buffered.length)/v.duration*100+"%":0;
}

v.onloadedmetadata = function() {
    i(f,'00:00 / '+formatSeconds(v.duration))
  };
  

  b.onmousemove=function(e){
    var q=e.offsetX,
    z=b.offsetWidth,
    l=k.offsetWidth;      
    nz.e=q/z;
    nz.a=(q-l/2);     
    k.style.left =(nz.a<0?0:nz.a>z-l?z-l:nz.a)/z*100+'%'; 
    
    nz.m=Math.round(nz.e*nz.l)*nz.f;  
    nz.n=Math.floor(nz.m/nz.h);
    nz.x=-nz.m+nz.n*nz.h;
    nz.y=nz.n*-nz.s;
   
    w.style.backgroundPosition = (nz.t?nz.x:nz.y)+'px '+(nz.t?nz.y:nz.x)+'px';    
    i(y,formatSeconds(nz.e*v.duration))
  }

  
  function qe(e, m) {
    var qq = e.clientX - e.offsetX;

    function nm(e) {
        e.preventDefault();
        
        if (e.buttons == 0) {
            l != 1 && m == b ? v.play() : 0;
            window.removeEventListener('mousemove', nm);
            return;
        }
        var l = Math.min(1, Math.max(0, (e.clientX - qq) / m.offsetWidth));
        if (m != b) {
            v.muted = false;
            v.volume = l;
        } else {
            u.style.width = l * 100 + '%';
            v.currentTime = l * v.duration;
        }


    }
    nm(e)
    window.addEventListener('mousemove', nm);

}
np.onmousedown = function (e) {qe(e,m)}
b.onmousedown = function (e) {qe(e, b)}

x.onclick = function(){
    v.muted=v.muted || v.volume==0?false:true;
    v.volume=v.volume!==0 && localStorage.ninjaGO?localStorage.ninjaGO:1;    
    }

v.onvolumechange = function() {
    var g= v.volume
    i(x,(g==0 || v.muted?p.b:p.a));

    localStorage.ninjaGO = g;
    

    [].forEach.call(q('svg',x).children,function(o,i){   
        var s= Math.floor(2*g/1);
        
        o.style.opacity= i>s?(2*g/1-(i>1?1:0)):1;
    });

    m.style.background='linear-gradient(90deg, #f2f2f2 '+(v.muted?0:g*100)+'%, rgba(255, 255, 255, 0.2) 0%)'
};
v.volume=localStorage.ninjaGO?localStorage.ninjaGO:1


nv.onclick = function(){
    v.currentTime=v.currentTime-10
}

function qk(){
    window.innerHeight == d.offsetHeight?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen():d.requestFullscreen?d.requestFullscreen():d.webkitRequestFullscreen();
}
r.onclick =qk;
g.ondblclick=qk;
document.addEventListener("fullscreenchange", function () {   
    i(r,window.innerHeight == d.offsetHeight?e.a:e.b)
});



a(document.head,i(t('style'),nl)),
        a(q(n.element),d);
        return v;
}



// ninjaGoo({
//     element: ".player",
//     sources: [{
//         name: "1",
//         files: [{
//             file: "/wp-content/themes/Vinb%20Dester/videoplayback.mp4",
//             thumbnail: {url:'https://content.jwplatform.com/strips/y4VBGyTJ-120.jpg',framewidth:120,frameheight:67,vertical:true},
//             name: '111111 Series'
//         },{
//             file: "/wp-content/themes/Vinb%20Dester/videoplayback.mp4",
//             thumbnail: {url:'http://localhost/pw.png',framewidth:200,frameheight:112,verticall:false},
//             name: '360p SD'
//         },{
//             ifile: '<iframe width="560" height="315" src="https://www.youtube.com/embed/S73zDvMgGmI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//             name: '720p SD'
//         }]
//     },{
//         name: "2",
//         files: [{
//             file: "/wp-content/themes/Vinb%20Dester/videoplayback.mp4",
//             name: '111111 Series'
//         },{
//             file: "/wp-content/themes/Vinb%20Dester/videoplayback.mp4",
//             name: '360p SD'
//         },{
//             file: "/wp-content/themes/Vinb%20Dester/videoplayback.mp4",
//             name: '720p SD'
//         }]
//     }]


// })