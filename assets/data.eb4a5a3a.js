var r,e,t=Object.defineProperty,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(r,e,n)=>e in r?t(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,c=(r,e)=>{for(var t in e||(e={}))o.call(e,t)&&l(r,t,e[t]);if(n)for(var t of n(e))a.call(e,t)&&l(r,t,e[t]);return r};import{x as i}from"./index.5821c5f0.js";function b(r,e){return{[r]:c({type:"string",map:"",description:"",optional:!1},null!=e?e:{})}}async function p(r,e){return i.get(`/data/${e}.json?comId=${r}`)}(e=r||(r={})).string="string",e.number="number",e.boolean="boolean",e.array="array",e.object="object",e.null="null";export{b as c,p as g};
