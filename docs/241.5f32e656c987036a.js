"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[241],{7241:(C,f,c)=>{c.r(f),c.d(f,{OffersProductsModule:()=>O});var p=c(4755),s=c(5030),a=c(7568),t=c(9523),u=c(5482);function l(o,i){if(1&o&&(t.TgZ(0,"div",2)(1,"a",3),t._UZ(2,"img",4),t.TgZ(3,"div",5)(4,"h3",6),t._uU(5),t.qZA()(),t.TgZ(6,"div",7)(7,"div",8)(8,"div",9)(9,"span",10),t._uU(10),t.ALo(11,"currency"),t.qZA()(),t.TgZ(12,"span",11),t._uU(13),t.qZA()(),t.TgZ(14,"p",12)(15,"span",13),t._uU(16),t.ALo(17,"currency"),t.qZA()()()()()),2&o){const e=i.$implicit;t.xp6(1),t.MGl("routerLink","/offers/",e.id,""),t.xp6(1),t.Q6J("src",e.image,t.LSH),t.xp6(3),t.Oqu(e.description),t.xp6(5),t.Oqu(t.lcZ(11,6,e.price)),t.xp6(3),t.hij(" ",e.offers[0].discount,"%"),t.xp6(3),t.Oqu(t.lcZ(17,8,e.price-e.price*(e.offers[0].discount/100)))}}let g=(()=>{class o{constructor(e,n){this.productsService=e,this.route=n}ngOnInit(){const e=this.productsService.getAllOffers();this.route.queryParamMap.subscribe(n=>{const r=n.get("description")?.toLowerCase();this.products=r?e.filter(d=>d.description.toLowerCase().includes(r)):e})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.s),t.Y36(a.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-offers-products"]],decls:2,vars:1,consts:[[1,"offers"],["class","offers-list",4,"ngFor","ngForOf"],[1,"offers-list"],[1,"offers-list__link",3,"routerLink"],[3,"src"],[1,"offers-name__container"],[1,"offers-item__name"],[1,"offers-price__container"],[1,"price-card"],[1,"offers-item__price"],[1,"normal-price"],[1,"offers-item__discount"],[1,"new-price"],[1,"new-price__for"]],template:function(e,n){1&e&&(t.TgZ(0,"section",0),t.YNc(1,l,18,10,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",n.products))},dependencies:[p.sg,a.rH,p.H9],styles:[".home__container[_ngcontent-%COMP%]{padding:50px;margin-bottom:0}.offers[_ngcontent-%COMP%]{padding:40px;width:-moz-fit-content;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.offers-list[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;max-width:270px;background-color:#fff;box-shadow:#63636333 0 2px 8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.offers-list[_ngcontent-%COMP%]:hover{outline:1px solid var(--acadia);transform:scale(1.1);cursor:pointer}.offers-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.offers-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;max-width:250px;display:block;border-radius:4px}.offers-item__name[_ngcontent-%COMP%]{font-size:18px;color:var(--brown-tumbleweed);margin-bottom:0}.offers-price__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:left}.offers-item__discount[_ngcontent-%COMP%]{height:16px;padding:2px;border-radius:1rem;align-items:center;justify-content:right;color:var(--metalic-bronze);background-color:var(--peridot);font-size:12px;font-weight:700}.price-card[_ngcontent-%COMP%]{margin-bottom:10px;display:flex;flex-direction:row;align-items:flex-start;justify-content:space-around}.offers-item__price[_ngcontent-%COMP%]{color:red;font-size:10px;font-weight:700;margin-right:10px;justify-content:space-evenly}.offers-item__price[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:12px;color:red;text-decoration:line-through}.new-price[_ngcontent-%COMP%]{color:var(--metalic-bronze);font-size:20px;font-weight:700}.new-price__for[_ngcontent-%COMP%]{color:var(--peridot);font-size:32px;font-weight:700}.offers-item__see-more-button[_ngcontent-%COMP%]{background-color:var(--brown-tumbleweed);border:none;color:#fff;font-size:20px;padding:6px 12px}.btn-see-more[_ngcontent-%COMP%]{background-color:var(--brown-tumbleweed);border:none;border-radius:1.5rem;color:#fff;font-size:20px;padding:6px 12px;display:flex;justify-content:center}.btn-see-more[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}@media (max-width: 550px){.offers[_ngcontent-%COMP%]{flex-flow:row wrap;gap:10px}.offers-list[_ngcontent-%COMP%]{flex-basis:calc(50% - 10px)}.offers-item__name[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:109.6px}}@media (max-width: 768px){.offers[_ngcontent-%COMP%]{flex-flow:row wrap;padding:40px 15px}.offers-list[_ngcontent-%COMP%]{flex-basis:calc(50% - 10px);height:269.2px;width:165px}img[_ngcontent-%COMP%]{width:155px;height:155px}.offers-item__name[_ngcontent-%COMP%]{font-size:.9rem}.offers-item__price[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:.6rem}.offers-item__discount[_ngcontent-%COMP%]{font-size:.6rem}.new-price__for[_ngcontent-%COMP%]{font-size:1rem}}@media (min-width: 768px){.offers-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:250px}}"]}),o})();var _=c(1645),m=c(4128);const h=[{path:"",component:g},{path:":id",component:(()=>{class o{constructor(e,n,r,d){this.productsService=e,this.route=n,this.notificationService=r,this.cartService=d,this.cartItems=[],this.quantity=1,this.total=0}ngOnInit(){const n=Number(this.route.snapshot.paramMap.get("id"));this.product=this.productsService.getOne(n),this.cartItems=this.cartService.getCart()}addToCart(){this.notificationService.notify("The product has been added to the cart!");const e={...this.product,quantity:this.quantity};this.cartService.addToCart(e)}findProductInCart(e){const n=this.cartService.itens;for(const r of n)if(r.id===e)return r}addQuantity(e){if(!this.product)return;const n=this.cartItems.find(r=>r.id===e);void 0!==n&&(n.quantity++,this.cartService.updateProductInCart(n))}decreaseQuantity(e){if(!this.product)return;const n=this.cartItems.find(r=>r.id===e);void 0!==n&&n.quantity>1&&(n.quantity--,this.cartService.updateProductInCart(n))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.s),t.Y36(a.gz),t.Y36(_.g),t.Y36(m.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-details-offers-product"]],decls:29,vars:11,consts:[[1,"product__container"],[1,"product-image__container"],["alt","",3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],[1,"product__offers-price-container"],[1,"product__offers-price"],[1,"product__offers-discount"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-minus"],["type","number","min","1",3,"ngModel","ngModelChange"],[1,"add-button",3,"click"],[1,"fa-solid","fa-plus"],[1,"product__avaiability"],[1,"add-to-cart",3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"section",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h2",4),t._uU(5),t.qZA(),t.TgZ(6,"h3",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"div",6)(10,"p",7),t._uU(11),t.ALo(12,"currency"),t.qZA(),t.TgZ(13,"span",8),t._uU(14),t.qZA()(),t.TgZ(15,"p"),t._uU(16,"Stock available:"),t.qZA(),t.TgZ(17,"label"),t._uU(18," Quantity: "),t.TgZ(19,"button",9),t.NdJ("click",function(){return n.quantity>1?n.quantity=n.quantity-1:null}),t._UZ(20,"i",10),t.qZA(),t.TgZ(21,"input",11),t.NdJ("ngModelChange",function(d){return n.quantity=d}),t.qZA(),t.TgZ(22,"button",12),t.NdJ("click",function(){return n.quantity=n.quantity+1}),t._UZ(23,"i",13),t.qZA(),t._uU(24," unit(s) "),t.qZA(),t.TgZ(25,"p",14),t._uU(26),t.qZA(),t.TgZ(27,"button",15),t.NdJ("click",function(){return n.addToCart()}),t._uU(28,"Add to cart"),t.qZA()()()),2&e){let r;t.xp6(2),t.Q6J("src",null==n.product?null:n.product.image,t.LSH),t.xp6(3),t.Oqu(null==n.product?null:n.product.description),t.xp6(2),t.Oqu(t.lcZ(8,7,null==n.product?null:n.product.price)),t.xp6(4),t.Oqu(t.lcZ(12,9,n.product.price*(1-(null!==(r=null==n.product||null==n.product.offers||null==n.product.offers[0]?null:n.product.offers[0].discount)&&void 0!==r?r:0)/100))),t.xp6(3),t.hij("",null==n.product||null==n.product.offers||null==n.product.offers[0]?null:n.product.offers[0].discount,"% off"),t.xp6(7),t.Q6J("ngModel",n.quantity),t.xp6(5),t.hij(" ",null==n.product?null:n.product.inventoryQuantity," unit(s) in Stock ")}},dependencies:[s.Fj,s.wV,s.JJ,s.qQ,s.On,p.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:14px;font-weight:400;margin:20px 0 0;color:var(--venetian-red);text-decoration:line-through}.product-description__container[_ngcontent-%COMP%]{border:1px solid var(--light-grey);border-radius:8px;padding:15px;flex:1}.product__offers-price-container[_ngcontent-%COMP%]{display:flex;flex-direction:grid row}.product__offers-price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product__offers-discount[_ngcontent-%COMP%]{color:var(--dark-mint-green);font-weight:100;display:flex;align-items:center;margin-left:20px}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.add-to-cart[_ngcontent-%COMP%]{background-color:var(--acadia);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}.add-to-cart[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}.add-button[_ngcontent-%COMP%], .remove-button[_ngcontent-%COMP%]{color:var(--acadia);background-color:transparent;border:none;transition:.2s all}@media (max-width: 700px){.product__container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.product-image__container[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:250px;height:250px}}"]}),o})()}];let x=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.Bz.forChild(h),a.Bz]}),o})(),O=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,x,s.u5]}),o})()}}]);