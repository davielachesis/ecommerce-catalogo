import{p as l}from"./ShopProducts-07a154ac.js";import{j as t}from"./globals-750fb78f.js";const p=l.filter(e=>e.onSale===!0);console.log(p);const u="_featuredProductCard_11bsl_1",m="_productKind_11bsl_11",_="_kind_11bsl_27",P="_productImage_11bsl_31",x="_productName_11bsl_35",g="_splitter_11bsl_43",N="_latePrice_11bsl_50",b="_printedPrice_11bsl_56",S="_newPrice_11bsl_62",h="_button_11bsl_68",s={featuredProductCard:u,productKind:m,kind:_,productImage:P,productName:x,splitter:g,latePrice:N,printedPrice:b,newPrice:S,button:h};localStorage.getItem("shopCart");function C({product:e}){const r=(e.price+e.price*.18).toFixed(2),c=document.querySelector("#addedFeaturedProductPopup");function n(o){const d=localStorage.getItem("localStorageData"),a=JSON.parse(d)||[];a.push(o),localStorage.setItem("localStorageData",JSON.stringify(a)),c.classList.add("open"),setTimeout(()=>{c.classList.remove("open")},2e3)}function i(){const o=document.querySelector("#notAnyOnStock");o.classList.add("open"),setTimeout(()=>{o.classList.remove("open")},2e3)}return t.jsxs("div",{className:s.featuredProductCard,children:[t.jsx("div",{id:"addedFeaturedProductPopup",className:"popup",style:{backgroundColor:"green",padding:"20px",width:"300px",height:"40px",margin:"20px",position:"fixed",bottom:0,left:0},children:t.jsx("p",{className:"popupText",children:"Adicionado com sucesso!"})}),t.jsx("span",{className:s.productKind,children:t.jsx("p",{className:s.kind,children:e.kind})}),t.jsx("img",{src:e.imgUrl,alt:e.name,className:s.productImage}),t.jsx("p",{className:s.productName,children:e.name}),t.jsx("div",{className:s.splitter}),t.jsxs("p",{className:s.latePrice,children:["De: ",t.jsxs("span",{className:s.printedPrice,children:["R$ ",r]})]}),t.jsx("p",{className:s.newPrice,children:`Por: R$ ${e.price}`}),t.jsx("button",{className:s.button,onClick:e.inStock>=1?()=>n(e):()=>i(),children:e.inStock>=1?"Adicionar":"Avise-me"})]})}export{C as F,p as o};
