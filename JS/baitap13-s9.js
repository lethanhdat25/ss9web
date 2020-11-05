var dulieu_items=[
    {
        img:"img/anhhoaqua2.png",
        name:"Special Fruit & Fresh Produce",
        price:"$27",
        star:4
    },
    {
        img:"img/anhhoaqua3.png",
        name:"Organic & Special Vegetables",
        price:"$27",
        star:4
    },
    {
        img:"img/anhhoaqua4.png",
        name:"Citrus Fennel and Apple Salad",
        price:"$88",
        star:4
    },
    {
        img:"img/anhhoaqua5.png",
        name:"Special Fruit & Fresh Produce",
        price:"$27",
        star:4
    },
    {
        img:"img/anhhoaqua6.png",
        name:"Organic & Special Vegetables",
        price:"$27",
        star:4
    },
    {
        img:"img/anhhoaqua7.png",
        name:"Citrus Fennel and Apple Salad",
        price:"$88",
        star:4
    },

];
 var dulieu_categories=[
     {
         name:"Vegestables",
         number:15
     },
     {
         name:"Fresh Fruits",
         number:12
     },
     {
         name:"Fresh Meat",
         number:12
     },
     {
         name:"Milk & Cream",
         number:9
     },
     {
         name:"Uncategorized",
         number:7
     },
     {
         name:"Organic Fruits",
         number:6
     },
     {
         name:"Special Salads",
         number:3
     },
     {
         name:"Supplements",
         number:0
     },
];
var dulieu_brand=[
    {
        name: "Green Life",
        number:24,
    },
    {
        name:"Organic Life",
        number:22,
    },
    {
        name:"Whole Foods",
        number:21,
    },
    {
        name: "Orwell Company",
        number:14,
    },
    {
        name:"Organica",
        number:6,
    },
    {
        name:"Oher",
        number:3,
    },

];
function nd() {
    var g_html="";

    for (i = 0; i < dulieu_items.length; i++) {
        g_html += "<div class=\" items\"  >\n" +
            "                    <img src=\""+dulieu_items[i].img+"\">\n" +
            "                    <div class=\"sub\">\n" +
            "                        <b>"+dulieu_items[i].name+"</b>\n" +
            "                        <div class=\"price-star\">\n" +
            "                            <span class=\"price\" style=\"color: red; width: 50%;float: left\">"+dulieu_items[i].price+"</span>\n" +
            "                            <div class=\"star\">\n" +
            "                                <div class=\"star-box\">\n" +
            "                                    <div class=\"star-rate\" style=\"width:"+(dulieu_items[i].star/5*100)+"%\">\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <button style=\"width: 100%;\"> Add</button>\n" +
            "                    </div>\n" +
            "                </div>"
    }
    return g_html;
}
g_html=document.getElementById("items");
g_html.innerHTML=nd();
function nb_b(){
    var nb_br="";
    for(i=0;i<dulieu_brand.length;i++){
       nb_br+="    <li>                                 \n" +
           "        <form>                           \n" +
           "            <input type=\"checkbox\" />    \n" +
           "               <span>                    \n" +
           "                    "+dulieu_brand[i].name+"("+dulieu_brand[i].number+")        \n" +
           "               </span>                   \n" +
           "        </form>                          \n" +
           "    </li>                                "
    }
    return nb_br;
}
nb_br=document.getElementById("number_brands");
nb_br.innerHTML=nb_b();
function nb_c(){
    var nb_cate="";
    for (i=0;i<dulieu_categories.length;i++){
        nb_cate+="    <li>                                 \n" +
            "               <span>                    \n" +
            "                    "+dulieu_categories[i].name+"("+dulieu_categories[i].number+")        \n" +
            "               </span>                   \n" +
            "    </li>                                "
    }
    return nb_cate;
}
nb_cate=document.getElementById("number_categories");
nb_cate.innerHTML=nb_c();

