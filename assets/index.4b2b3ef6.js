import{d as e,U as a,f as l,o as t,c as n,a as s,t as i,b as d}from"./index.5821c5f0.js";var u=e({name:"GSelectSuggest",props:{modelValue:{type:[String,Number],default:0},data:Array,label:{type:String,default:""},size:{type:String,default:"mini"},inline:{type:[Boolean,String],default:!1},disabled:Boolean},emits:[a],setup:(e,l)=>({handleInput:e=>{l.emit(a,e)},querySearch:(a,l)=>{l(e.data.map((e=>({value:e}))))}})});const o={key:0,class:"g-input__caption"};u.render=function(e,a,u,r,p,g){const m=l("el-autocomplete");return t(),n("div",{class:["datav-gui g-select-suggest",[`--${e.size}`,{"--inline":!!e.inline,"--single":"inline-single"===e.inline,"--disabled":e.disabled}]]},[s(m,{"model-value":e.modelValue,"fetch-suggestions":e.querySearch,size:e.size,style:{width:"100%"},"onUpdate:modelValue":e.handleInput},null,8,["model-value","fetch-suggestions","size","onUpdate:modelValue"]),e.label?(t(),n("span",o,i(e.label),1)):d("",!0)],2)},u.install=e=>{e.component(u.name,u)};export default u;
