"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[96],{96:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var n=a(791),s=a(420);const c="ContactItem_contactItem__Z4FuP",r="ContactItem_contactName__ZAMAK",o="ContactItem_contactBtn__nMiN-";var l=a(329);const i=e=>{let{contact:{id:t,name:a,number:n},onDelete:s}=e;return(0,l.jsxs)("li",{className:c,children:[(0,l.jsxs)("p",{className:r,children:[a,": ",n]}),(0,l.jsx)("button",{onClick:()=>s(t),type:"button",className:o,children:"Delete"})]})},m="ContactList_contactList__UFVCg";var d=a(634),u=a(553);const h=e=>e.contacts.items,_=e=>e.contacts.isLoading,p=e=>e.contacts.error,x=(0,u.P1)([h,e=>e.filter],((e,t)=>{const a=t.toLowerCase();return e.filter((e=>{let{name:t}=e;return t.toLowerCase().includes(a)}))})),C=()=>{const e=(0,s.I0)(),t=(0,s.v9)(x),a=t=>{e((0,d.GK)(t))};return(0,l.jsx)("ul",{className:m,children:null===t||void 0===t?void 0:t.map((e=>(0,l.jsx)(i,{contact:e,onDelete:a},e.id)))})},b="ContactForm_form__dhl+T",j="ContactForm_input__Bl93P",N="ContactForm_label__-cVXI",v="ContactForm_btn__wll+u";var y=a(984);const F=()=>{const e=(0,s.I0)(),t=(0,s.v9)(h),[a,c]=(0,n.useState)(""),[r,o]=(0,n.useState)(""),i=e=>{const{name:t,value:a}=e.currentTarget;switch(t){case"name":c(a);break;case"number":o(a)}},m=()=>{c(""),o("")},u=(0,y.x0)(),_=(0,y.x0)();return(0,l.jsxs)("form",{className:b,onSubmit:n=>{n.preventDefault();const s={id:(0,y.x0)(),name:a,number:r},c=t.map((e=>e.name)).includes(a),o=t.map((e=>e.number)).includes(r);c||o?alert(`${o?r:a} is already in contacts`):e((0,d.ky)(s)),m()},children:[(0,l.jsx)("label",{htmlFor:u,className:N,children:"Name"}),(0,l.jsx)("input",{id:u,className:j,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:a,onChange:i}),(0,l.jsx)("label",{htmlFor:_,className:N,children:"Number"}),(0,l.jsx)("input",{id:_,className:j,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:r,onChange:i}),(0,l.jsx)("button",{className:v,children:"Add contact"})]})},f="Filter_searchTitle__NbKH0",g="Filter_searchField__sPwCi";var k=a(198);const A=()=>{const e=(0,s.I0)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{className:f,children:"Find contacts by name"}),(0,l.jsx)("input",{className:g,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:t=>{e((0,k.c)(t.target.value))}})]})},w="Contacts_main__kG0SX",I="Contacts_title__LxdN4",z="Contacts_warning__g-4yO";var P=a(652);const Z=()=>(0,l.jsx)(P.g4,{color:"#fefefe",wrapperStyle:{justifyContent:"center"}});function L(){const e=(0,s.v9)(h),t=(0,s.I0)(),a=(0,s.v9)(_),c=(0,s.v9)(p);return(0,n.useEffect)((()=>{t((0,d.yF)())}),[t]),(0,l.jsxs)("div",{className:w,children:[(0,l.jsx)("h1",{className:I,title:"Phonebook",children:"Phonebook"}),(0,l.jsx)(F,{}),(0,l.jsx)("h2",{className:I,title:"Contact",children:"Contact"}),(0,l.jsx)(A,{}),a&&!c&&(0,l.jsx)(Z,{}),e.length>0?(0,l.jsx)(C,{}):(0,l.jsxs)("p",{className:z,children:["Currently your phonebook has no contacts. ",(0,l.jsx)("br",{}),"Please add them."]})]})}}}]);
//# sourceMappingURL=96.24b28121.chunk.js.map