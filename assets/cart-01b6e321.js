import{j as t,c as m,R as p,r as d,P as u}from"./globals-750fb78f.js";import{N as h,F as _}from"./Footer-f0309114.js";const x="_cartProduct_hvvz7_1",g="_productIcon_hvvz7_13",j="_productInfo_hvvz7_17",N="_productName_hvvz7_23",C="_productPrice_hvvz7_30",S="_button_hvvz7_35",c={cartProduct:x,productIcon:g,productInfo:j,productName:N,productPrice:C,button:S};function v({product:a}){let s=localStorage.getItem("localStorageData");s=JSON.parse(s);function n(){let r=JSON.parse(localStorage.getItem("localStorageData")),o=r.indexOf(r.find(i=>i.name===a.name));r.splice(o,1),localStorage.setItem("localStorageData",JSON.stringify(r));const l=document.querySelector(".popup");l.classList.add("open"),setTimeout(()=>{l.classList.remove("open")},2500),setTimeout(()=>{window.location.reload(!0)},300)}return t.jsxs("div",{className:c.cartProduct,children:[t.jsx("div",{className:"popup",style:{backgroundColor:"red",padding:"20px",width:"300px",height:"40px",margin:"20px",position:"fixed",bottom:0,left:0},children:t.jsx("p",{className:"popupText",children:"Produto removido!"})}),t.jsx("img",{src:a.imgUrl,alt:a.name,className:c.productIcon}),t.jsxs("div",{className:c.productInfo,children:[t.jsx("p",{className:c.productName,children:a.name}),t.jsxs("p",{className:c.productPrice,children:["R$ ",a.price]})]}),t.jsx("button",{className:c.button,onClick:()=>n(),children:"Remover"})]})}const T="_section_jhakb_1",f="_emptyCart_jhakb_11",y="_emptyCartTitle_jhakb_19",b="_emptyCartImage_jhakb_24",I="_emptyCartText_jhakb_28",k="_salesLink_jhakb_33",P="_cartContainer_jhakb_42",z="_cartTitle_jhakb_49",L="_saleTotal_jhakb_57",O="_totalText_jhakb_69",D="_totalAmount_jhakb_78",R="_finishSale_jhakb_87",e={section:T,emptyCart:f,emptyCartTitle:y,emptyCartImage:b,emptyCartText:I,salesLink:k,cartContainer:P,cartTitle:z,saleTotal:L,totalText:O,totalAmount:D,finishSale:R};function F(){let a=JSON.parse(localStorage.getItem("localStorageData"));JSON.parse(localStorage.getItem("shopCart"));const s=a.map(o=>t.jsx(v,{product:o})),n=[];a.map(o=>n.push(o.price));const r=n.reduce((o,l)=>o+l,0).toFixed(2);return t.jsx("section",{className:e.section,id:"cartContainer",children:a.length<1?t.jsxs("div",{className:e.emptyCart,children:[t.jsx("p",{className:e.emptyCartTitle,children:"Oh não! Seu carrinho está vazio!"}),t.jsx("img",{src:"https://i.imgur.com/iQj8GPa.png",alt:"emptyCart",className:e.emptyCartImage}),t.jsxs("p",{className:e.emptyCartText,children:["Que tal dar uma olhada nas nossas ",t.jsx("a",{href:"/src/pages/onsale.html",className:e.salesLink,children:" ofertas "}),"e escolher algo interessante?"]})]}):t.jsxs("div",{className:e.cartContainer,children:[t.jsx("p",{className:e.cartTitle,children:"Meu Carrinho"}),s,t.jsxs("div",{className:e.saleTotal,children:[t.jsx("p",{className:e.totalText,children:"Total"}),t.jsxs("p",{className:e.totalAmount,children:["R$ ",r]})]}),t.jsx("button",{className:e.finishSale,children:"Finalizar compra"})]})})}JSON.parse(localStorage.getItem("isLoggedIn"))===!0||window.location.replace("/beverage-ecommerce/src/pages/signin.html");function J(){const[a,s]=d.useState(!0);return a?(setTimeout(()=>{s(!1)},300),t.jsx(u,{})):t.jsxs(t.Fragment,{children:[t.jsx(h,{}),t.jsx(F,{}),t.jsx(_,{})]})}m.createRoot(document.getElementById("root")).render(t.jsx(p.StrictMode,{children:t.jsx(J,{})}));