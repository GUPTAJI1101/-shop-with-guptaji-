// import { language } from "./language";
// import { login } from "./login";
import { accessories, books, gadgets, mensCards, topProductsCards, womenCards } from "./topProducts";
import products from "./api/top.json";
import { btnScroll } from "./btnScroll";
import { details } from "./details";
// import { product } from "./product";
import mensP from "./api/men.json"
import womenP from "./api/women.json"
import acc from "./api/acc.json"
import b from "./api/book.json"
import { accSeeMoreLess, bookSeeMoreLess, gadSeeMoreLess, seeeMoreLess, seeMoreLess } from "./seemoreless";
import gad from "./api/gad.json"
import { bookQuantityToggle } from "./menQuantityToggle";
import { hamburger } from "./hamburger";
import { category } from "./category";

// language()
// login()
btnScroll()
topProductsCards(products)
// product()
details()
mensCards(mensP)
seeMoreLess()
seeeMoreLess()
gadSeeMoreLess()
bookSeeMoreLess()
womenCards(womenP)
gadgets(gad)
accessories(acc)
accSeeMoreLess()
books(b)
hamburger()
category()

