import{aO as a,aP as t,aC as i,aD as s}from"./index.5821c5f0.js";import{c as e,g as o}from"./data.eb4a5a3a.js";class n extends a{constructor(a,t){super("wordCloud",a),this.color="#fff",this.color=t}}class r extends t{constructor(){super("WordCloud",{w:300,h:200}),this.config={global:{fontFamily:"Microsoft Yahei",max:35,min:14,rotationRange:{min:-90,max:90},rotate:45,drawType:"preset",shape:"circle",image:"https://files.pengxiaotian.com/datav/echarts-logo.png"},series:[new n("0","#0a73ff"),new n("1","#3dabff"),new n("2","#79daff")],tooltip:{show:!1,textStyle:{fontSize:14,color:"#fff",fontWeight:"normal"},backgroundColor:"rgba(0, 0, 0, 0.65)"},animation:{enabled:!0}},this.initData()}initData(){const a=[e("name",{description:"名称"}),e("value",{description:"值"}),e("type",{description:"系列"})];return this.apis=i({fields:Object.assign({},...a)}),this.apiData=s(this.id),this.events={},this.actions={},this}async loadData(){try{const a="chart/word-cloud",t=await o(this.id,a);this.apiData.source.config.data=JSON.stringify(t.data)}catch(a){throw a}}}const c=[{id:"preset",value:"内置图形"},{id:"image",value:"自定义图形"}],d=[{id:"circle",value:"圆形"},{id:"triangle",value:"三矩形"},{id:"diamond",value:"菱形"},{id:"pentagon",value:"五角星"}];export{r as W,n as a,c as d,d as s};
