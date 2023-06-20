import {
    j as t,
    c as m,
    R as p,
    r as d,
    P as u,
    N as _,
    F as h
} from "./globals-47b881bb.js";
const j = "_cartProduct_hvvz7_1",
    x = "_productIcon_hvvz7_13",
    g = "_productInfo_hvvz7_17",
    C = "_productName_hvvz7_23",
    N = "_productPrice_hvvz7_30",
    S = "_button_hvvz7_35",
    n = {
        cartProduct: j,
        productIcon: x,
        productInfo: g,
        productName: C,
        productPrice: N,
        button: S
    };

function T({
    product: e
}) {
    let o = localStorage.getItem("localStorageData");
    o = JSON.parse(o);

    function l() {
        let r = JSON.parse(localStorage.getItem("localStorageData")),
            s = r.indexOf(r.find(i => i.name === e.name));
        r.splice(s, 1), localStorage.setItem("localStorageData", JSON.stringify(r));
        const c = document.querySelector(".popup");
        c.classList.add("open"), setTimeout(() => {
            c.classList.remove("open")
        }, 2500), window.location.reload()
    }
    return t.jsxs("div", {
        className: n.cartProduct,
        children: [t.jsx("img", {
            src: e.imgUrl,
            alt: e.name,
            className: n.productIcon
        }), t.jsxs("div", {
            className: n.productInfo,
            children: [t.jsx("p", {
                className: n.productName,
                children: e.name
            }), t.jsxs("p", {
                className: n.productPrice,
                children: ["R$ ", e.price]
            })]
        }), t.jsx("button", {
            className: n.button,
            onClick: () => l(),
            children: "Remover"
        })]
    })
}
const v = "_section_jhakb_1",
    y = "_emptyCart_jhakb_11",
    f = "_emptyCartTitle_jhakb_19",
    b = "_emptyCartImage_jhakb_24",
    I = "_emptyCartText_jhakb_28",
    k = "_salesLink_jhakb_33",
    P = "_cartContainer_jhakb_42",
    z = "_cartTitle_jhakb_49",
    D = "_saleTotal_jhakb_57",
    L = "_totalText_jhakb_69",
    O = "_totalAmount_jhakb_78",
    R = "_finishSale_jhakb_87",
    a = {
        section: v,
        emptyCart: y,
        emptyCartTitle: f,
        emptyCartImage: b,
        emptyCartText: I,
        salesLink: k,
        cartContainer: P,
        cartTitle: z,
        saleTotal: D,
        totalText: L,
        totalAmount: O,
        finishSale: R
    };

function F() {
    let e = JSON.parse(localStorage.getItem("localStorageData"));
    const o = e.map((s, c) => t.jsx(T, {
            product: s
        }, c)),
        l = [];
    e.map(s => l.push(s.price));
    const r = l.reduce((s, c) => s + c, 0).toFixed(2);
    return t.jsx("section", {
        className: a.section,
        id: "cartContainer",
        children: e.length < 1 ? t.jsxs("div", {
            className: a.emptyCart,
            children: [t.jsx("p", {
                className: a.emptyCartTitle,
                children: "Oh não! Seu carrinho está vazio!"
            }), t.jsx("img", {
                src: "https://i.imgur.com/iQj8GPa.png",
                alt: "emptyCart",
                className: a.emptyCartImage
            }), t.jsxs("p", {
                className: a.emptyCartText,
                children: ["Que tal dar uma olhada nas nossas ", t.jsx("a", {
                    href: "/src/pages/onsale.html",
                    className: a.salesLink,
                    children: " ofertas "
                }), "e escolher algo interessante?"]
            })]
        }) : t.jsxs("div", {
            className: a.cartContainer,
            children: [t.jsx("p", {
                className: a.cartTitle,
                children: "Meu Carrinho"
            }), o, t.jsxs("div", {
                className: a.saleTotal,
                children: [t.jsx("p", {
                    className: a.totalText,
                    children: "Total"
                }), t.jsxs("p", {
                    className: a.totalAmount,
                    children: ["R$ ", r]
                })]
            }), t.jsx("button", {
                className: a.finishSale,
                children: "Finalizar compra"
            })]
        })
    })
}
JSON.parse(localStorage.getItem("localStorageData"));

function A() {
    const [e, o] = d.useState(!0);
    return e ? (setTimeout(() => {
        o(!1)
    }, 100), t.jsx(u, {})) : t.jsxs(t.Fragment, {
        children: [t.jsx(_, {}), t.jsx(F, {}), t.jsx(h, {})]
    })
}
m.createRoot(document.getElementById("root")).render(t.jsx(p.StrictMode, {
    children: t.jsx(A, {})
}));