import{j as e,c as o,R as a,r as n,P as i}from"./globals-750fb78f.js";import{N as c,F as d}from"./Footer-1bb7c5e1.js";import{P as m}from"./ProcuctsHeader-927b34a2.js";import{P as p}from"./ProductCard-37594f8b.js";import{p as l}from"./ShopProducts-07a154ac.js";const j="_section_17ddy_1",u={section:j},r=l.filter(t=>t.cathegory==="beers");console.log(r);function x(){const t=r.map(s=>e.jsx(p,{product:s}));return e.jsx("section",{className:u.section,children:t})}function f(){const[t,s]=n.useState(!0);return t?(setTimeout(()=>{s(!1)},500),e.jsx(i,{})):e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsx(m,{imageUrl:"https://i.imgur.com/1mIWtfK.jpg",text:"Cervejas triplamente geladas",description:"Cervejas de diferentes tipos, linhas e sabores!"}),e.jsx(x,{}),e.jsx(d,{})]})}o.createRoot(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(f,{})}));
