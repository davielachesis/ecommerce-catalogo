import{p as a,j as s,c as o,R as n,N as c,F as i}from"./globals-13c69faa.js";import{P as p}from"./ProcuctsHeader-76a5c91f.js";import{P as m}from"./ProductCard-c1411686.js";const l="_section_yjoef_1",d={section:l},e=a.filter(t=>t.cathegory==="sparklings");console.log(e);function j(){const t=e.map(r=>s.jsx(m,{product:r}));return s.jsx("section",{className:d.section,children:t})}o.createRoot(document.getElementById("root")).render(s.jsxs(n.StrictMode,{children:[s.jsx(c,{}),s.jsx(p,{imageUrl:"https://i.imgur.com/F3CCbE9.jpg",text:"Especialmente espumante",description:"Seja para fazer festa ou só para aproveitar, aqui você encontra o melhor para te agradar!"}),s.jsx(j,{}),s.jsx(i,{})]}));