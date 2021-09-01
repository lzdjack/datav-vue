import{d as a,U as e,e as s,h as l,j as o,L as t,O as d,M as i,av as r,aw as c,ax as n,C as u,D as p,f as v,l as h,o as b,c as w,n as y,a as m,t as f,A as V,E as g}from"./index.5821c5f0.js";var U=a({name:"PublishScreen",props:{projectId:{type:Number,required:!0},modelValue:{type:Boolean,required:!0}},emits:[e],setup(a,u){const p=s(!1),v=s(!1),h=s(!1),b=s(""),w=s("password"),y=s(!0),m=l((()=>v.value?c(a.projectId):"")),f=()=>{p.value=!1,u.emit(e,!1)};o((()=>a.modelValue),(a=>{p.value=!!a})),o((()=>a.projectId),(async()=>{try{const e=await n(a.projectId);if(0===e.data.code){const{data:a}=e.data;y.value=!1,v.value=!!a.share,b.value=a.password}}catch(e){i.error("读取大屏发布信息失败")}}));return{visible:p,isPublish:v,shareUrl:m,showTooltip:h,password:b,copyUrl:()=>{v.value&&t((()=>{d(m.value)&&i.success("复制成功")}))},closeDialog:f,loading:y,passwordType:w,publish:async()=>{try{y.value=!0;const e={share:m.value,password:b.value};0===(await r(a.projectId,e)).data.code&&(y.value=!1,f(),i.success(v.value?"发布成功":"保存成功"))}catch(e){i.error("发布失败")}finally{y.value=!1}}}}});const T=g();u("data-v-b28a818c");const k={class:"share-setting","element-loading-background":"rgba(48, 54, 64, 0.8)"},C={class:"share-header"},_={class:"header-wp"},j=m("label",{class:"label-color"},"发布分享：",-1),I={class:"share-switch"},P={class:"share-tutorial"},x=V(" 查看教程 "),M={class:"share-verify"},D=m("div",{class:"label-color"},"分享链接",-1),q={class:"link-content"},A=m("div",{class:"label-color"},"访问密码",-1),B={class:"share-pwd"},E={class:"initial-dialog"};p();const L=T(((a,e,s,l,o,t)=>{const d=v("el-switch"),i=v("router-link"),r=v("el-tooltip"),c=v("new-input"),n=v("el-button"),u=v("el-dialog"),p=h("loading");return b(),w(u,{modelValue:a.visible,"onUpdate:modelValue":e[10]||(e[10]=e=>a.visible=e),title:"发布",width:"435px","append-to-body":!0,onClose:a.closeDialog},{default:T((()=>[y(m("div",k,[m("div",C,[m("div",_,[j,m("div",I,[m(d,{modelValue:a.isPublish,"onUpdate:modelValue":e[1]||(e[1]=e=>a.isPublish=e)},null,8,["modelValue"])])]),m("div",P,[m(i,{to:{name:"MyCase"},class:"share-tutorial-url",target:"_blank"},{default:T((()=>[x])),_:1})])]),m("div",M,[D,m("div",q,[m(r,{modelValue:a.showTooltip,"onUpdate:modelValue":e[5]||(e[5]=e=>a.showTooltip=e),effect:"blue",placement:"top",content:"点击复制",manual:!0,disabled:!a.isPublish},{default:T((()=>[m("textarea",{value:a.shareUrl,class:"new-input share-input",readonly:"",placeholder:"开启发布分享后可获取访问链接",onClick:e[2]||(e[2]=(...e)=>a.copyUrl&&a.copyUrl(...e)),onMouseenter:e[3]||(e[3]=e=>a.showTooltip=!0),onMouseleave:e[4]||(e[4]=e=>a.showTooltip=!1)},null,40,["value"])])),_:1},8,["modelValue","disabled"]),m("div",{class:"func-btn",onClick:e[6]||(e[6]=(...e)=>a.copyUrl&&a.copyUrl(...e))},"复制")]),A,m("div",B,[m(c,{modelValue:a.password,"onUpdate:modelValue":e[7]||(e[7]=e=>a.password=e),type:a.passwordType,placeholder:"设置访问密码",class:"pwd-input"},null,8,["modelValue","type"]),m("div",{class:"func-btn",onClick:e[8]||(e[8]=e=>a.passwordType?a.passwordType="":a.passwordType="password")},f(a.passwordType?"查看":"隐藏"),1),m("div",{class:"func-btn",onClick:e[9]||(e[9]=e=>a.password="")}," 清空 ")])]),m("div",E,[m(n,{type:"primary",class:"publish-btn",onClick:a.publish},{default:T((()=>[V(f(a.isPublish?"发布大屏":"保存"),1)])),_:1},8,["onClick"])])],512),[[p,a.loading]])])),_:1},8,["modelValue","onClose"])}));U.render=L,U.__scopeId="data-v-b28a818c";export{U as _};
