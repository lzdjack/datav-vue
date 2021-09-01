import{d as e,U as a,e as l,j as o,k as n,M as r,f as i,l as s,o as t,c as u,a as d,n as p,w as c,q as m,b as g,t as v}from"./index.5821c5f0.js";import{u as f,p as y,v as b,g as k}from"./qiniu.02a2a91a.js";var h=e({name:"GUploadImage",props:{modelValue:{type:String,required:!0},allowType:{type:String,default:"gif|jpeg|jpg|png"},size:{type:Number,default:2},action:{type:String,default:f},previewHost:{type:String,default:y},label:{type:String,default:""},inline:{type:[Boolean,String],default:!1}},emits:[a],setup(e,i){const s=l(!1),t=l({key:"",token:""}),u=l(!1),d=l(!1),p=e=>{i.emit(a,e)};return o((()=>e.modelValue),(()=>{const a=new Image;a.src=e.modelValue,a.onload=()=>{u.value=!1},a.onerror=()=>{u.value=!0,e.modelValue&&r.error("图片加载失败")}})),{loading:s,form:t,iserr:u,visibleCover:d,beforeUpload:async a=>{if(!b(a,{allowType:e.allowType,allowSize:e.size}))return!1;try{return s.value=!0,t.value.token=await k(),t.value.key=`upload/${n()}_${a.name}`,!0}catch(l){s.value=!1,r.error(l.toString())}return!1},onSuccess:l=>{s.value=!1,i.emit(a,`${e.previewHost}/${l.key}`)},onError:e=>{s.value=!1,r.error(e.toString())},handleInput:p,handleMouseEnter:()=>{e.modelValue&&(d.value=!0)},handleMouseLeave:()=>{d.value=!1},removeImage:()=>{p(""),d.value=!1}}}});const w={class:"g-upload-image-content"},S={key:1,class:"g-upload-tip"},V=d("i",{class:"v-icon-img"},null,-1),M=d("div",null,"点击或拖拽文件到这里更换",-1),I={key:0,class:"g-upload-image-cover"},U=d("span",null,"更改",-1),j=d("p",{style:{padding:"0 10px"}},"|",-1),x={key:0,class:"g-input__caption"};h.render=function(e,a,l,o,n,r){const f=i("el-input"),y=i("el-upload"),b=s("loading");return t(),u("div",{class:["datav-gui g-upload",[{"--inline --single":!!e.inline}]]},[d(f,{"model-value":e.modelValue,placeholder:"请输入图片地址","prefix-icon":"v-icon-link",size:"mini","onUpdate:modelValue":e.handleInput},null,8,["model-value","onUpdate:modelValue"]),p(d(y,{"element-loading-text":"正在上传...","element-loading-spinner":"v-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.7)",drag:"",accept:"image/*",action:e.action,multiple:!1,"show-file-list":!1,"before-upload":e.beforeUpload,"on-success":e.onSuccess,"on-error":e.onError,data:e.form},{default:c((()=>[d("div",{class:"g-upload-image-wrap",onMouseenter:a[2]||(a[2]=(...a)=>e.handleMouseEnter&&e.handleMouseEnter(...a)),onMouseleave:a[3]||(a[3]=(...a)=>e.handleMouseLeave&&e.handleMouseLeave(...a))},[d("div",w,[e.modelValue&&!e.iserr?(t(),u("img",{key:0,src:e.modelValue},null,8,["src"])):(t(),u("div",S,[V,M]))]),e.visibleCover?(t(),u("div",I,[U,j,d("span",{onClick:a[1]||(a[1]=m(((...a)=>e.removeImage&&e.removeImage(...a)),["stop"]))},"删除")])):g("",!0)],32)])),_:1},8,["action","before-upload","on-success","on-error","data"]),[[b,e.loading]]),e.label?(t(),u("span",x,v(e.label),1)):g("",!0)],2)},h.install=e=>{e.component(h.name,h)};export default h;
