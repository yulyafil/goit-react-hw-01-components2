(this["webpackJsonpgoit-react-hw-01-components2"]=this["webpackJsonpgoit-react-hw-01-components2"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},11:function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},12:function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},17:function(e,t,a){},18:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(8),n=a.n(i),r=(a(17),a(18),a(3)),d=a(0),l=Object(r.a)({li:{listStyle:"none"},profile:{backgroundColor:"rgb(200, 209, 214)",color:"#504f4f",textAalign:"center",border:"2px solid rgba(34, 30, 37, 0.137)",borderRadius:10,width:350,margin:30,padding:20},avatar:{textAlign:"center",height:200,borderRadius:70},name:{fontSize:35,color:""},stats:{display:"inline-flex",padding:0},statsItem:{listStyle:"none",padding:10,border:"2px solid rgba(34, 30, 37, 0.137)"},label:{fontSize:20,fontWeight:500,color:"#222222"}}),o=function(e){var t=e.user,a=l();return Object(d.jsxs)("div",{className:a.profile,children:[Object(d.jsxs)("div",{className:"description",children:[Object(d.jsx)("img",{src:t.avatar,alt:t.name,className:a.avatar,width:"200"}),Object(d.jsx)("p",{className:a.name,children:t.name}),Object(d.jsxs)("p",{className:"tag",children:["@",t.tag]}),Object(d.jsx)("p",{className:"location",children:t.location})]}),Object(d.jsxs)("ul",{className:a.stats,children:[Object(d.jsxs)("li",{className:a.statsItem,children:[Object(d.jsx)("span",{className:a.label,children:"Followers "}),Object(d.jsx)("span",{className:"quantity",children:t.stats.followers})]}),Object(d.jsxs)("li",{className:a.statsItem,children:[Object(d.jsx)("span",{className:a.label,children:"Views "}),Object(d.jsx)("span",{className:"quantity",children:t.stats.views})]}),Object(d.jsxs)("li",{className:a.statsItem,children:[Object(d.jsx)("span",{className:a.label,children:"Likes "}),Object(d.jsx)("span",{className:"quantity",children:t.stats.likes})]})]})]})},b=Object(r.a)({statistics:{textAlign:"center",width:350,border:"2px solid grey",borderRadius:2,margin:30},title:{fontSize:30,textTransform:"uppercase",color:"rgb(66, 65, 65)"},statList:{display:"flex",margin:"0 auto",padding:0},item:{display:"flex",flexDirection:"column",textAlign:"center",paddingTop:15,height:70,width:"100%",border:"1px solid grey"}}),m=function(e){var t=e.title,a=e.stats,c=b();return Object(d.jsxs)("div",{className:c.statistics,children:[t&&Object(d.jsx)("h2",{className:c.title,children:t}),Object(d.jsx)("ul",{className:c.statList,children:a.map((function(e){return Object(d.jsxs)("li",{className:c.item,style:{backgroundColor:"rgb(".concat(255*Math.random(),", ").concat(255*Math.random(),", ").concat(255*Math.random(),")")},children:[Object(d.jsx)("span",{className:"label",children:e.label}),Object(d.jsxs)("span",{className:"percentage",children:[e.percentage,"%"]})]},e.id)}))})]})},p=a(2),u=a.n(p),j=Object(r.a)({item:{display:"flex",alignItems:"center",width:330,height:80,boxShadow:"0 0 5px",borderRadius:5,padding:15,marginBottom:10},status:{width:25,height:25,borderRadius:25},avatar:{marginLeft:25,width:70},name:{fontSize:25,marginLeft:35}}),h=function(e){var t=e.isOnline,a=e.avatar,c=e.name,s=j();return Object(d.jsxs)("li",{className:s.item,children:[Object(d.jsx)("span",{className:s.status,style:{backgroundColor:t?"green":"red"},children:t}),Object(d.jsx)("img",{className:s.avatar,src:a,alt:c,width:"48"}),Object(d.jsx)("p",{className:s.name,children:c})]})},f=Object(r.a)({friendList:{margin:30}});h.propTypes={friends:u.a.shape({id:u.a.number.isRequired})};var g=function(e){var t=e.friends,a=f();return Object(d.jsx)("ul",{className:a.friendList,children:t.map((function(e){return Object(d.jsx)(h,{isOnline:e.isOnline,avatar:e.avatar,name:e.name},e.id)}))})},y=Object(r.a)({transactionHistory:{width:700,height:600,margin:30,textAlign:"center",boxShadow:"0 0 5px"},thead:{color:"gray",backgroundColor:"lightblue",height:70},tbody:{color:"gray"}}),x=function(e){var t=e.items,a=y();return Object(d.jsxs)("table",{className:a.transactionHistory,children:[Object(d.jsx)("thead",{className:a.thead,children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"Currency"})]})}),Object(d.jsx)("tbody",{className:a.tbody,children:t.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.type}),Object(d.jsx)("td",{children:e.amount}),Object(d.jsx)("td",{children:e.currency})]},e.id)}))})]})},O=a(10),v=a(7),w=a(11),N=a(12);var S=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(o,{user:O}),Object(d.jsx)(m,{title:"Upload stats",stats:v}),Object(d.jsx)(m,{stats:v}),Object(d.jsx)(g,{friends:w}),Object(d.jsx)(x,{items:N})]})};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')}},[[27,1,2]]]);
//# sourceMappingURL=main.d43823c2.chunk.js.map