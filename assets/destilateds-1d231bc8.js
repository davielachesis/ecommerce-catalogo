import{p as r,j as s,c as a,R as i,N as c,F as d}from"./globals-13c69faa.js";import{P as n}from"./ProcuctsHeader-76a5c91f.js";import{P as l}from"./ProductCard-c1411686.js";const m="_section_yjoef_1",p={section:m},e=r.filter(t=>t.cathegory==="destilateds");console.log(e);function j(){const t=e.map(o=>s.jsx(l,{product:o}));return s.jsx("section",{className:p.section,children:t})}a.createRoot(document.getElementById("root")).render(s.jsxs(i.StrictMode,{children:[s.jsx(c,{}),s.jsx(n,{imageUrl:"https://i.imgur.com/9POP9dN.jpg",text:"Destilados & adoçados",description:"Para drinks, ou para sozinho ser apreciado"}),s.jsx(j,{}),s.jsx(d,{})]}));