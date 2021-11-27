import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[] = [];   
  
    constructor( ) { }
  
    ngOnInit(): void {    
      
      this.items = [                
                {            
                label: 'Samsung',                
                routerLink: 'marca',
                queryParams: {                
                    url: 'https://marcas-logos.net/wp-content/uploads/2020/02/Logo-Samsung.png',                        
                            modelo:'',
                            marca:'Samsung'                
                },
                        
                        items: [
                            {
                                label: 'Samsung Galaxy S21 Ultra', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1713/samsung-galaxy-s21-ultra.jpg',                    
                                    modelo:'Samsung Galaxy S21 Ultra',
                                    marca:'Samsung',
                                    imgMarca: 'https://marcas-logos.net/wp-content/uploads/2020/02/Logo-Samsung.png'
                                }         
                            },
                            {
                                label: 'Samsung Galaxy S21 Plus', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/artigo/47/samsung-galaxy-10-.jpg',                    
                                    modelo:'Samsung Galaxy S21 Plus',
                                    marca:'Samsung',
                                    imgMarca: 'https://marcas-logos.net/wp-content/uploads/2020/02/Logo-Samsung.png'
                                }         
                            },
                            {
                                label: 'Samsung Galaxy S21', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1711/samsung-galaxy-s21.jpg',                    
                                    modelo:'Samsung Galaxy S21',
                                    marca:'Samsung',
                                    imgMarca: 'https://marcas-logos.net/wp-content/uploads/2020/02/Logo-Samsung.png'
                                }         
                            },
                            {
                                label: 'Samsung Galaxy Note 20 Ultra', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1247/samsung-galaxy-note-20-ultra.jpg',                    
                                    modelo:'Samsung Galaxy Note 20 Ultra',
                                    marca:'Samsung',
                                    imgMarca: 'https://marcas-logos.net/wp-content/uploads/2020/02/Logo-Samsung.png'
                                }         
                            },
                            {
                                label: 'Samsung Galaxy S20 Ultra', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/artigo/47/samsung-galaxy-s20-ultra.jpg',                    
                                    modelo:'Samsung Galaxy S20 Ultra',
                                    marca:'Samsung',
                                    imgMarca: 'https://marcas-logos.net/wp-content/uploads/2020/02/Logo-Samsung.png'
                                }         
                            },
                            {
                                label: 'Samsung Galaxy S20 Plus', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1689/galaxy-s20-plus.jpg',                    
                                    modelo:'Samsung Galaxy S20 Plus',
                                    marca:'Samsung',
                                    imgMarca: 'https://marcas-logos.net/wp-content/uploads/2020/02/Logo-Samsung.png'
                                }         
                            },
                            {
                                label: 'Samsung Galaxy A71', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/artigo/47/samsung-galaxy-a71.jpg',                    
                                    modelo:'Samsung Galaxy A71',
                                    marca:'Samsung',
                                    imgMarca: 'https://marcas-logos.net/wp-content/uploads/2020/02/Logo-Samsung.png'
                                }         
                            },
                            {
                                label: 'Samsung Galaxy A32', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1741/samsung-galaxy-a32.jpg',                    
                                    modelo:'Samsung Galaxy A32',
                                    marca:'Samsung',
                                    imgMarca: 'https://marcas-logos.net/wp-content/uploads/2020/02/Logo-Samsung.png'
                                }         
                            },
                            {
                                label: 'Samsung Galaxy M51', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1688/galaxy-m51.jpg',                    
                                    modelo:'Samsung Galaxy M51',
                                    marca:'Samsung',
                                    imgMarca: 'https://marcas-logos.net/wp-content/uploads/2020/02/Logo-Samsung.png'
                                }         
                            },
                            {
                                label: 'Samsung Galaxy A51', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/artigo/47/samsung-galaxy-a51.jpg',                    
                                    modelo:'Samsung Galaxy A51',
                                    marca:'Samsung',
                                    imgMarca: 'https://marcas-logos.net/wp-content/uploads/2020/02/Logo-Samsung.png'
                                }         
                            },                    
                            
                        ],
                },
                
                {
                
                    label: 'Xiaomi',
                    routerLink: 'marca',
                    queryParams: {                
                        url: 'https://logospng.org/download/xiaomi/logo-xiaomi-768.png',
                        marca:'Xiaomi',
                        modelo:''
                    },
                    
                    items: [
                        {
                            label: 'Poco M3', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://www.promobit.com.br/blog/wp-content/uploads/2021/02/04183148/ar/800/poco-m3-3-1024x595.jpg',                        
                                modelo:'Poco M3',
                                marca:'Xiaomi',
                                imgMarca: 'https://logospng.org/download/xiaomi/logo-xiaomi-768.png' 
                            }         
                        },
                        {
                            label: 'Redmi Note 9s', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://www.promobit.com.br/blog/wp-content/uploads/2020/03/24174344/ar/800/redmi-note-9s-camera-1024x595.jpg',                        
                                modelo:'Redmi Note 9s',
                                marca:'Xiaomi',
                                imgMarca: 'https://logospng.org/download/xiaomi/logo-xiaomi-768.png' 
                            }         
                        },
                        {
                            label: 'Redmi Note 10', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://www.promobit.com.br/blog/wp-content/uploads/2021/04/01164103/ar/800/Redmi-Note-10-3-1024x595.jpg',                        
                                modelo:'Redmi Note 10',
                                marca:'Xiaomi',
                                imgMarca: 'https://logospng.org/download/xiaomi/logo-xiaomi-768.png' 
                            }         
                        },
                        {
                            label: 'Poco X3 NFC', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://www.promobit.com.br/blog/wp-content/uploads/2021/01/28174941/ar/800/poco-x3-3-1024x595.jpg',                        
                                modelo:'Poco X3 NFC',
                                marca:'Xiaomi',
                                imgMarca: 'https://logospng.org/download/xiaomi/logo-xiaomi-768.png' 
                            }         
                        },
                        {
                            label: 'Xiaomi Mi Note 10', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://www.promobit.com.br/blog/wp-content/uploads/2020/08/13185124/ar/800/Mi-Note-10-2-1024x595.jpg',                        
                                modelo:'Xiaomi Mi Note 10',
                                marca:'Xiaomi',
                                imgMarca: 'https://logospng.org/download/xiaomi/logo-xiaomi-768.png' 
                            }         
                        },
                        {
                            label: 'Xiaomi Mi Note 10 Pro', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://www.promobit.com.br/blog/wp-content/uploads/2020/11/06210444/ar/800/mi-note-10-pro-1024x595.jpg',                        
                                modelo:'Xiaomi Mi Note 10 Pro',
                                marca:'Xiaomi',
                                imgMarca: 'https://logospng.org/download/xiaomi/logo-xiaomi-768.png' 
                            }         
                        },
                        {
                            label: 'Poco F3', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://www.promobit.com.br/blog/wp-content/uploads/2021/05/11141413/ar/800/poco-f3-1024x595.jpg',                        
                                modelo:'Poco F3',
                                marca:'Xiaomi',
                                imgMarca: 'https://logospng.org/download/xiaomi/logo-xiaomi-768.png' 
                            }         
                        },
                        {
                            label: 'Mi 11 Lite', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://www.promobit.com.br/blog/wp-content/uploads/2021/04/12204225/ar/800/mi-11-lite-1024x595.jpg',                        
                                modelo:'Mi 11 Lite',
                                marca:'Xiaomi',
                                imgMarca: 'https://logospng.org/download/xiaomi/logo-xiaomi-768.png' 
                            }         
                        },
                        {
                            label: 'Xiaomi Mi 10T Pro', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://www.promobit.com.br/blog/wp-content/uploads/2020/11/12165301/ar/800/mi-10t-2-1024x595.jpg',                        
                                modelo:'Xiaomi Mi 10T Pro',
                                marca:'Xiaomi',
                                imgMarca: 'https://logospng.org/download/xiaomi/logo-xiaomi-768.png' 
                            }         
                        },
                        {
                            label: 'Xiaomi Mi 11', 
                            icon: 'pi pi-fw pi-check',
                            routerLink: 'exibicao',
                            queryParams: {
                                url: 'https://www.promobit.com.br/blog/wp-content/uploads/2021/03/24173650/ar/800/Mi-11-6-1024x595.jpg',                        
                                modelo:'Xiaomi Mi 11',
                                marca:'Xiaomi',
                                imgMarca: 'https://logospng.org/download/xiaomi/logo-xiaomi-768.png' 
                            }         
                        },
                    
                        
                    ],
                },
                    {
                
                        label: 'Apple',
                        routerLink: 'marca',
                        queryParams: {                
                            url: 'https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1-1.png',
                            marca:'Apple',
                            modelo:''
                        },
                        
                        items: [
                            {
                                label: 'Iphone 1', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://t.ctcdn.com.br/NcfYU6fIwyCm1srBOyIZP2Jmevs=/1024x0/smart/i317696.png',                        
                                    modelo:'Iphone 1',
                                    marca:'Apple',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Iphone 2', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://http2.mlstatic.com/D_NQ_NP_967363-MLA47681019809_092021-O.jpg',                        
                                    modelo:'Iphone 2',
                                    marca:'Apple',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Iphone 3', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'http://s2.glbimg.com/yZ9XQ1x_PuZPWEX66v3pIuo9Qjg=/48x93:964x697/494x325/s.glbimg.com/po/tt2/f/original/2013/08/27/iphone-3gs.jpg',                        
                                    modelo:'Iphone 3',
                                    marca:'Apple',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Iphone 4', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'http://s2.glbimg.com/7RsLnsyOxAYDkwrV_sxnKH5GCHs=/175x185:855x632/494x325/s.glbimg.com/po/tt2/f/original/2013/08/27/iphone-4.jpg',                        
                                    modelo:'Iphone 4',
                                    marca:'Apple',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Iphone 5', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://http2.mlstatic.com/D_NQ_NP_863680-MLA43771584497_102020-O.jpg',                        
                                    modelo:'Iphone 5',
                                    marca:'Apple',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Iphone 6', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://images-americanas.b2w.io/produtos/41964138/imagens/iphone-6-32gb-dourado-tela-4-7-ios-8-camera-8mp-4g-processador-1-4-ghz-dual-core-apple/41964138_1_xlarge.jpg',                        
                                    modelo:'Iphone 6',
                                    marca:'Apple',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Iphone 7', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://files.tecnoblog.net/wp-content/uploads/2020/11/iphone7-700x700.png',                        
                                    modelo:'Iphone 7',
                                    marca:'Apple',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Iphone 8', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://http2.mlstatic.com/D_NQ_NP_920800-MLA43694099479_102020-O.jpg',                        
                                    modelo:'Iphone 8',
                                    marca:'Apple',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Iphone XR', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://a-static.mlcdn.com.br/618x463/iphone-xr-apple-64gb-branco-61-12mp/magazineluiza/155607600/acc9e0944fe8e858358a35db0f62d33d.jpg',                        
                                    modelo:'Iphone XR',
                                    marca:'Apple',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Iphone X', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=863751831',                        
                                    modelo:'Iphone X',
                                    marca:'Apple',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1-1.png' 
                                }         
                            },
                        
                            
                        ],
        
                    },
                    {
                
                        label: 'Motorola',
                        routerLink: 'marca',
                        queryParams: {                
                            url: 'https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png',
                            marca:'Motorola',
                            modelo:''
                        },
                        
                        items: [
                            {
                                label: 'Moto G9 Play', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.promobit.com.br/blog/wp-content/uploads/2021/03/24165649/ar/800/moto-g9-play-1-1024x595.jpg',                        
                                    modelo:'Moto G9 Play',
                                    marca:'Motorola',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Moto G10', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.promobit.com.br/blog/wp-content/uploads/2021/03/25124756/ar/800/moto-g10-1024x595.jpg',                        
                                    modelo:'Moto G10',
                                    marca:'Motorola',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Moto G20', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.promobit.com.br/blog/wp-content/uploads/2021/05/03125831/ar/800/moto-g20-1024x595.jpg',                        
                                    modelo:'Moto G20',
                                    marca:'Motorola',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Motorola One Hyper', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.promobit.com.br/blog/wp-content/uploads/2019/11/19190406/ar/800/one-hyper-1024x595.jpg',                        
                                    modelo:'Motorola One Hyper',
                                    marca:'Motorola',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Moto G30', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.promobit.com.br/blog/wp-content/uploads/2021/03/25124500/ar/800/moto-g30-1024x595.jpg',                        
                                    modelo:'Moto G30',
                                    marca:'Motorola',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Moto G9 Plus', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.promobit.com.br/blog/wp-content/uploads/2020/09/16193202/ar/800/g9-plus-3-1024x595.jpg',                        
                                    modelo:'Moto G9 Plus',
                                    marca:'Motorola',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Motorola One Fusion+', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.promobit.com.br/blog/wp-content/uploads/2020/08/04190315/ar/800/fusion-1-1024x595.jpg',                        
                                    modelo:'Motorola One Fusion+',
                                    marca:'Motorola',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Moto G 5G', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.promobit.com.br/blog/wp-content/uploads/2020/10/26115713/ar/800/moto-g-5g-1024x595.jpg',                        
                                    modelo:'Moto G 5G',
                                    marca:'Motorola',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Moto G60', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.promobit.com.br/blog/wp-content/uploads/2020/10/31204732/ar/800/g60-1024x595.jpg',                        
                                    modelo:'Moto G60',
                                    marca:'Motorola',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Motorola Edge 20 Lite', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.promobit.com.br/blog/wp-content/uploads/2021/11/10105601/ar/800/motorola-edge20-life-1024x576.jpg',                        
                                    modelo:'Motorola Edge 20 Lite',
                                    marca:'Motorola',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/10/motorola-logo-1-1.png' 
                                }         
                            },
                        
                            
                        ],
                    },
                    {
                
                        label: 'Asus',
                        routerLink: 'marca',
                        queryParams: {                
                            url: 'https://logodownload.org/wp-content/uploads/2014/09/asus_logo.png',
                            marca:'Asus',
                            modelo:''
                        },
                        
                        items: [
                            {
                                label: 'Zenfone Live (L2)', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1248/zenfone-live-l2.jpg',                        
                                    modelo:'Zenfone Live (L2)',
                                    marca:'Asus',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/asus_logo.png' 
                                }         
                            },
                            {
                                label: 'Zenfone Live (L1)', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/artigo/132/zenfone-live-l1.jpg',                        
                                    modelo:'Zenfone Live (L1)',
                                    marca:'Asus',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/asus_logo.png' 
                                }         
                            },
                            {
                                label: 'Zenfone Max Pro (M1)', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/artigo/132/zenfone-max-pro-m1.jpg',                        
                                    modelo:'Zenfone Max Pro (M1)',
                                    marca:'Asus',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/asus_logo.png' 
                                }         
                            },
                            {
                                label: 'Zenfone Max Shot', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1249/zenfone-max-shot.jpg',                        
                                    modelo:'Zenfone Max Shot',
                                    marca:'Asus',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/asus_logo.png' 
                                }         
                            },
                            {
                                label: 'Zenfone Max M2 Plus', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1250/zenfone-max-m2-plus.jpg',                        
                                    modelo:'Zenfone Max M2 Plus',
                                    marca:'Asus',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/asus_logo.png' 
                                }         
                            },
                            {
                                label: 'Zenfone 5 Selfie Pro', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1251/zenfone-5-selfie-pro.jpg',                        
                                    modelo:'Zenfone 5 Selfie Pro',
                                    marca:'Asus',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/asus_logo.png' 
                                }         
                            },
                            {
                                label: 'Zenfone 5', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/artigo/132/zenfone-5.jpg',                        
                                    modelo:'Zenfone 5',
                                    marca:'Asus',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/asus_logo.png' 
                                }         
                            },
                            {
                                label: 'Zenfone 5Z', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1252/zenfone-5z.jpg',                        
                                    modelo:'Zenfone 5Z',
                                    marca:'Asus',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/asus_logo.png' 
                                }         
                            },
                            {
                                label: 'Zenfone 6', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/artigo/132/zenfone-6.jpg',                        
                                    modelo:'Zenfone 6',
                                    marca:'Asus',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/asus_logo.png' 
                                }         
                            },
                            {
                                label: 'Asus Rog Phone 2', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/artigo/132/asus-rog-phone-2.jpg',                        
                                    modelo:'Asus Rog Phone 2',
                                    marca:'Asus',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/asus_logo.png' 
                                }         
                            },
                        
                            
                        ],
                    },
                    {
                
                        label: 'LG',
                        routerLink: 'marca',
                        queryParams: {                
                            url: 'https://logodownload.org/wp-content/uploads/2014/04/lg-logo-1.png',
                            marca:'LG',
                            modelo:''
                        },
                        
                        items: [
                            {
                                label: 'LG K11+', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1969/lg-k11-.jpg',                        
                                    modelo:'LG K11+',
                                    marca:'LG',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/04/lg-logo-1.png' 
                                }         
                            },
                            {
                                label: 'LG K41s', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1970/lg-k41s.jpg',                        
                                    modelo:'LG K41s',
                                    marca:'LG',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/04/lg-logo-1.png' 
                                }         
                            },
                            {
                                label: 'LG K22+', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1732/lg-k22-.jpg',                        
                                    modelo:'LG K22+',
                                    marca:'LG',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/04/lg-logo-1.png' 
                                }         
                            },
                            {
                                label: 'LG K51S', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1203/lg-k51s.jpg',                        
                                    modelo:'LG K51S',
                                    marca:'LG',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/04/lg-logo-1.png' 
                                }         
                            },
                            {
                                label: 'LG K62', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1971/lg-k62.jpg',                        
                                    modelo:'LG K62',
                                    marca:'LG',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/04/lg-logo-1.png' 
                                }         
                            },
                            {
                                label: 'LG K61', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1204/lg-k61.jpg',                        
                                    modelo:'LG K61',
                                    marca:'LG',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/04/lg-logo-1.png' 
                                }         
                            },
                            {
                                label: 'LG K62+', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1972/lg-k62-.jpg',                        
                                    modelo:'LG K62+',
                                    marca:'LG',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/04/lg-logo-1.png' 
                                }         
                            },
                            {
                                label: 'LG K71', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1973/lg-k71.jpg',                        
                                    modelo:'LG K71',
                                    marca:'LG',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/04/lg-logo-1.png' 
                                }         
                            },
                            {
                                label: 'LG Velvet', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1974/lg-velvet.jpg',                        
                                    modelo:'LG Velvet',
                                    marca:'LG',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/04/lg-logo-1.png' 
                                }         
                            },
                            {
                                label: 'LG ThinQ G8S', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.manualdacompra.com.br/file/produto/1975/lg-thinq-g8s.jpg',                        
                                    modelo:'LG ThinQ G8S',
                                    marca:'LG',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/04/lg-logo-1.png' 
                                }         
                            },
                        
                            
                        ],
                    },
                    {
                
                        label: 'Huawei',
                        routerLink: 'marca',
                        queryParams: {                
                            url: 'https://logosmarcas.net/wp-content/uploads/2020/04/Huawei-Logo-2006%E2%80%932018.jpg',
                            marca:'Huawei',
                            modelo:''
                        },
                        
                        items: [
                            {
                                label: 'Huawei P30 Lite', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.casamelhor.com/wp-content/uploads/2019/11/10_huawei_p30_lite.jpg',                        
                                    modelo:'Huawei P30 Lite',
                                    marca:'Huawei',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Huawei-Logo-2006%E2%80%932018.jpg' 
                                }         
                            },
                            {
                                label: 'Huawei Honor 8 X', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.casamelhor.com/wp-content/uploads/2019/11/9_smartphone_huawei__euzUk.jpg',                        
                                    modelo:'Huawei Honor 8 X',
                                    marca:'Huawei',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Huawei-Logo-2006%E2%80%932018.jpg' 
                                }         
                            },
                            {
                                label: 'Huawei Mate 20 Lite', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.casamelhor.com/wp-content/uploads/2019/11/8_smartphone_huawei__gdGaL.jpg',                        
                                    modelo:'Huawei Mate 20 Lite',
                                    marca:'Huawei',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Huawei-Logo-2006%E2%80%932018.jpg' 
                                }         
                            },
                            {
                                label: 'Huawei Honor 8 x', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.casamelhor.com/wp-content/uploads/2019/11/7_celular_huawei_hon_nRrVd.jpg',                        
                                    modelo:'Huawei Honor 8 x',
                                    marca:'Huawei',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Huawei-Logo-2006%E2%80%932018.jpg' 
                                }         
                            },
                            {
                                label: 'Huawei Y9 Prime', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.casamelhor.com/wp-content/uploads/2019/11/6_smartphone_huawei__gKzLE.jpg',                        
                                    modelo:'Huawei Y9 Prime',
                                    marca:'Huawei',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Huawei-Logo-2006%E2%80%932018.jpg' 
                                }         
                            },
                            {
                                label: 'Huawei Honor 9', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.casamelhor.com/wp-content/uploads/2019/11/5_huawei_honor_9_4_g_brhg9.jpg',                        
                                    modelo:'Huawei Honor 9',
                                    marca:'Huawei',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Huawei-Logo-2006%E2%80%932018.jpg' 
                                }         
                            },
                            {
                                label: 'Huawei Mate 10 Pro', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.casamelhor.com/wp-content/uploads/2019/11/4_huawei_mate_10_pro.jpg',                        
                                    modelo:'Huawei Mate 10 Pro',
                                    marca:'Huawei',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Huawei-Logo-2006%E2%80%932018.jpg' 
                                }         
                            },
                            {
                                label: 'Huawei Honor 7 X', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.casamelhor.com/wp-content/uploads/2019/11/3_celular_huawei_hon_Z4GOr.jpg',                        
                                    modelo:'Huawei Honor 7 X',
                                    marca:'Huawei',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Huawei-Logo-2006%E2%80%932018.jpg' 
                                }         
                            },
                            {
                                label: 'Huawei Honor 8 A JAT', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.casamelhor.com/wp-content/uploads/2019/11/2_smartphone_huawei__uZS2q.jpg',                        
                                    modelo:'Huawei Honor 8 A JAT',
                                    marca:'Huawei',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Huawei-Logo-2006%E2%80%932018.jpg' 
                                }         
                            },
                            {
                                label: 'Huawei Honor 7 S', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.casamelhor.com/wp-content/uploads/2019/11/1_celular_huawei_hon_rF5KK.jpg',                        
                                    modelo:'Huawei Honor 7 S',
                                    marca:'Huawei',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/04/Huawei-Logo-2006%E2%80%932018.jpg' 
                                }         
                            },
                        
                            
                        ],
                    },
                    {
                
                        label: 'Lenovo',
                        routerLink: 'marca',
                        queryParams: {                
                            url: 'https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-1-1.png',
                            marca:'Lenovo',
                            modelo:''
                        },
                        
                        items: [
                            {
                                label: 'Lenovo Z5', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://geek360.com.br/wp-content/uploads/2019/09/Lenovo-Z5-1024x512.jpg',                        
                                    modelo:'Lenovo Z5',
                                    marca:'Lenovo',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Lenovo K8 Plus', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://geek360.com.br/wp-content/uploads/2019/09/Lenovo-K8-Plus-1024x512.jpg',                        
                                    modelo:'Lenovo K8 Plus',
                                    marca:'Lenovo',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Lenovo S5 K520', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://geek360.com.br/wp-content/uploads/2019/09/Lenovo-S5-K520-1024x512.jpg',                        
                                    modelo:'Lenovo S5 K520',
                                    marca:'Lenovo',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Lenovo Vibe K5', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://geek360.com.br/wp-content/uploads/2019/09/Lenovo-Vibe-K5-1024x512.jpg',                        
                                    modelo:'Lenovo Vibe K5',
                                    marca:'Lenovo',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Lenovo Vibe K6 Plus', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://geek360.com.br/wp-content/uploads/2019/09/Lenovo-Vibe-K6-Plus-1024x512.jpg',                        
                                    modelo:'Lenovo Vibe K6 Plus',
                                    marca:'Lenovo',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Lenovo Vibe C2', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://geek360.com.br/wp-content/uploads/2019/09/Lenovo-Vibe-C2-1024x512.jpg',                        
                                    modelo:'Lenovo Vibe C2',
                                    marca:'Lenovo',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Lenovo Z6 Pro 5G', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://cdn-files.kimovil.com/default/0003/77/thumb_276543_default_big.jpeg',                        
                                    modelo:'Lenovo Z6 Pro 5G',
                                    marca:'Lenovo',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Lenovo Z6 Pro', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://t2.tudocdn.net/388597?w=660',                        
                                    modelo:'Lenovo Z6 Pro',
                                    marca:'Lenovo',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Lenovo Z5s', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://http2.mlstatic.com/D_NQ_NP_932349-MLA41919603290_052020-O.jpg',                        
                                    modelo:'Lenovo Z5s',
                                    marca:'Lenovo',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-1-1.png' 
                                }         
                            },
                            {
                                label: 'Lenovo A5', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://img.ibxk.com.br/2018/12/14/14105005175371.jpg',                        
                                    modelo:'Lenovo A5',
                                    marca:'Lenovo',
                                    imgMarca: 'https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-1-1.png' 
                                }         
                            },
                        
                            
                        ],
                    },
                    {
                
                        label: 'Nokia',
                        routerLink: 'marca',
                        queryParams: {                
                            url: 'https://logosmarcas.net/wp-content/uploads/2020/09/Nokia-Logo.png',
                            marca:'Nokia',
                            modelo:''
                        },
                        
                        items: [
                            {
                                label: 'Nokia XR20', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://cdn.pocket-lint.com/r/s/660x/assets/images/131502-phones-news-feature-nokia-through-the-years-the-best-and-worst-phones-in-pictures-image38-hw6kn4baav.JPG?v1',                        
                                    modelo:'Nokia XR20 (2021)',
                                    marca:'Nokia',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/09/Nokia-Logo.png' 
                                }         
                            },
                            {
                                label: 'Nokia 5.3', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://cdn.pocket-lint.com/r/s/660x/assets/images/131502-phones-news-feature-nokia-through-the-years-the-best-and-worst-phones-in-pictures-image37-byulipmg8j.JPG?v1',                        
                                    modelo:'Nokia 5.3',
                                    marca:'Nokia',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/09/Nokia-Logo.png' 
                                }         
                            },
                            {
                                label: 'Nokia 9 PureView', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://cdn.pocket-lint.com/r/s/660x/assets/images/131502-phones-feature-nokia-through-the-years-the-best-and-worst-phones-in-pictures-image2-nwcfnygt6w-jpg.webp?v1',                        
                                    modelo:'Nokia 9 PureView',
                                    marca:'Nokia',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/09/Nokia-Logo.png' 
                                }         
                            },
                            {
                                label: 'Nokia 3310', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://cdn.pocket-lint.com/r/s/660x/assets/images/131502-phones-news-feature-nokia-through-the-years-the-best-and-worst-phones-in-pictures-image3-cvq2qiymaw-jpg.webp?v1',                        
                                    modelo:'Nokia 3310',
                                    marca:'Nokia',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/09/Nokia-Logo.png' 
                                }         
                            },
                            {
                                label: 'Nokia Lumia 1020', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://cdn.pocket-lint.com/r/s/660x/assets/images/131502-phones-news-feature-nokia-through-the-years-the-best-and-worst-phones-in-pictures-image4-t7lhcypdvw-jpg.webp?v1',                        
                                    modelo:'Nokia Lumia 1020',
                                    marca:'Nokia',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/09/Nokia-Logo.png' 
                                }         
                            },
                            {
                                label: 'Nokia 808 Pureview', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://cdn.pocket-lint.com/r/s/660x/assets/images/131502-phones-news-feature-nokia-through-the-years-the-best-and-worst-phones-in-pictures-image5-zuuc4wt2bj-jpg.webp?v1',                        
                                    modelo:'Nokia 808 Pureview',
                                    marca:'Nokia',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/09/Nokia-Logo.png' 
                                }         
                            },
                            {
                                label: 'Nokia 1280', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://cdn.pocket-lint.com/r/s/660x/assets/images/131502-phones-news-feature-nokia-through-the-years-the-best-and-worst-phones-in-pictures-image6-cdbahlr03u-jpg.webp?v1',                        
                                    modelo:'Nokia 1280',
                                    marca:'Nokia',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/09/Nokia-Logo.png' 
                                }         
                            },
                            {
                                label: 'Nokia N95', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://cdn.pocket-lint.com/r/s/660x/assets/images/131502-phones-news-feature-nokia-through-the-years-the-best-and-worst-phones-in-pictures-image7-qg91jomnxw-jpg.webp?v1',                        
                                    modelo:'Nokia N95',
                                    marca:'Nokia',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/09/Nokia-Logo.png' 
                                }         
                            },
                            {
                                label: 'Nokia N81', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://cdn.pocket-lint.com/r/s/660x/assets/images/131502-phones-news-feature-nokia-through-the-years-the-best-and-worst-phones-in-pictures-image8-hfyezpmol7-jpg.webp?v1',                        
                                    modelo:'Nokia N81',
                                    marca:'Nokia',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/09/Nokia-Logo.png' 
                                }         
                            },
                            {
                                label: 'Nokia 5300', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://cdn.pocket-lint.com/r/s/660x/assets/images/131502-phones-news-feature-nokia-through-the-years-the-best-and-worst-phones-in-pictures-image9-t7edzk8rg3-jpg.webp?v1',                        
                                    modelo:'Nokia 5300',
                                    marca:'Nokia',
                                    imgMarca: 'https://logosmarcas.net/wp-content/uploads/2020/09/Nokia-Logo.png' 
                                }         
                            },
                        
                            
                        ],
                    },
                    {
                
                        label: 'Google',
                        routerLink: 'marca',
                        queryParams: {                
                            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png',
                            marca:'Google',
                            modelo:''
                        },
                        
                        items: [
                            {
                                label: 'Pixel 4A', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://s2.glbimg.com/N2pOWtant-sh11dMtvEnF_t-6ew=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/X/0/uT8TeCRxqgK6ZW4OTgYQ/pixel-4a-1280x720.jpg',                        
                                    modelo:'Pixel 4A',
                                    marca:'Google',
                                    imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png' 
                                }         
                            },
                            {
                                label: 'Pixel 6', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://t2.tudocdn.net/573515?w=660&h=371',                        
                                    modelo:'Pixel 6',
                                    marca:'Google',
                                    imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png' 
                                }         
                            },
                            {
                                label: 'Pixel 4', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://s2.glbimg.com/wGQt5rsM9_4OitBqrYAhlkE5cKE=/0x0:1920x1080/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/6/8/W7ffjbSyClkFVBBLH1Aw/google-pixel-4-2.jpg',                        
                                    modelo:'Pixel 4',
                                    marca:'Google',
                                    imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png' 
                                }         
                            },
                            {
                                label: 'Pixel 3a', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://i.zst.com.br/images/pixel-3a-e-3a-xl-google-mira-no-mercado-de-celulares-com-preco-baixo-photo814623012-44-37-17.jpg',                        
                                    modelo:'Pixel 3a',
                                    marca:'Google',
                                    imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png' 
                                }         
                            },
                            {
                                label: 'Pixel 5', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.notebookcheck.info/uploads/tx_nbc2/4_zu_3_Teaser_Google_Pixel_5.jpg',                        
                                    modelo:'Pixel 5',
                                    marca:'Google',
                                    imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png' 
                                }         
                            },
                            {
                                label: 'Pixel 6 Pro', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://files.tecnoblog.net/wp-content/uploads/2021/10/google-pixel-6-cores.jpeg',                        
                                    modelo:'Pixel 6 Pro',
                                    marca:'Google',
                                    imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png' 
                                }         
                            },
                            {
                                label: 'Pixel 6 XL', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://http2.mlstatic.com/D_NQ_NP_761571-MLA32931519155_112019-O.jpg',                        
                                    modelo:'Pixel 6 XL',
                                    marca:'Google',
                                    imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png' 
                                }         
                            },
                            {
                                label: 'Pixel 2', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://img.ibxk.com.br/2017/10/04/04170302188126.jpg',                        
                                    modelo:'Pixel 2',
                                    marca:'Google',
                                    imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png' 
                                }         
                            },
                            {
                                label: 'Pixel 1', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://www.kickmobiles.com/images/thumbs/0013491_google-pixel-1-xl_808.jpeg',                        
                                    modelo:'Pixel 1',
                                    marca:'Google',
                                    imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png' 
                                }         
                            },
                            {
                                label: 'Pixel 2 XL', 
                                icon: 'pi pi-fw pi-check',
                                routerLink: 'exibicao',
                                queryParams: {
                                    url: 'https://t.ctcdn.com.br/W2XG2myonbgl5haS5gzMHRxQ77s=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i410297.png',                        
                                    modelo:'Pixel 2 XL',
                                    marca:'Google',
                                    imgMarca: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png' 
                                }         
                            },
                        
                            
                        ],
                },
           
        
        ]   
    }
}

