(function(){"use strict";var e={1322:function(e,a,t){var s=t(9242),n=t(3396),i=t(7139),r=t(4870);const l=["value"];var u={__name:"BaseInput",props:{modelValue:[Number,String]},emits:["update:modelValue"],setup(e){return(a,t)=>((0,n.wg)(),(0,n.iD)("input",{class:"base-input",type:"text",value:e.modelValue,onInput:t[0]||(t[0]=e=>a.$emit("update:modelValue",e.target.value))},null,40,l))}},c=t(89);const o=(0,c.Z)(u,[["__scopeId","data-v-585769de"]]);var d=o;const h={class:"base-button"};function m(e,a){return(0,n.wg)(),(0,n.iD)("button",h,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])}const _={},g=(0,c.Z)(_,[["render",m],["__scopeId","data-v-021afe39"]]);var f=g;const p=["for"],v=["id"];var b={__name:"BaseCheckbox",props:{checkboxId:[Number,String],modelValue:Boolean},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,r=a,l=(0,n.Fl)({get(){return t.modelValue},set(e){r("update:modelValue",e)}});return(a,t)=>((0,n.wg)(),(0,n.iD)("label",{class:(0,i.C_)(["base-checkbox",{"base-checkbox_selected":e.modelValue}]),for:e.checkboxId},[(0,n.wy)((0,n._)("input",{type:"checkbox",id:e.checkboxId,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e)},null,8,v),[[s.e8,l.value]]),(0,n._)("span",null,[(0,n.WI)(a.$slots,"default")])],10,p))}};const y=(0,c.Z)(b,[["__scopeId","data-v-4ba1dbfb"]]);var k=y;const w={class:"main"},O={class:"main__field"},V=(0,n._)("div",{class:"main__heading"},"Количество человек",-1),M={class:"main__row"},U={class:"main__field"},C=(0,n._)("div",{class:"main__heading"},"Количество очков",-1),x={class:"main__row"},W={class:"main__field"},N=(0,n._)("div",{class:"main__heading"},"Прогресс",-1),P={class:"main__field"},S=(0,n._)("div",{class:"main__heading"},"Кансери",-1),Y=(0,n._)("div",{class:"main__subheading"},"Дают",-1),B={class:"main__row"},I=(0,n._)("div",{class:"main__subheading main__subheading_red"},"Попал",-1),j={class:"main__row"},D={class:"main__field"},z=(0,n._)("div",{class:"main__heading"},"Яги",-1),F=(0,n._)("div",{class:"main__subheading"},"Дают",-1),Z={class:"main__yagi"},$=(0,n._)("div",{class:"main__subheading main__subheading_red"},"Попал",-1),q={class:"main__yagi"},H={class:"main__field"},K=(0,n._)("div",{class:"main__heading"},"Результат",-1),T="progress_mine",A="progress_other",E="progress_nothing",G="Тонтой",J="Пи",L="Мяде",Q="Сиська",R="Сагура",X="Болтик";var ee={__name:"App",setup(e){const a=[G,J,L,Q,R,X],t=(0,r.qj)({state:{playersNumber:5,score:0,progress:A,canseriMine:0,canseriOther:30,yagiMine:[],yagiOther:[]},changePlayersNumber(e){"-"===e&&this.state.playersNumber--,"+"===e&&this.state.playersNumber++},changeScore(e){"-"===e&&(this.state.score=+this.state.score-5),"+"===e&&(this.state.score=+this.state.score+5)},changeCanseriMine(e){"-"===e&&(this.state.canseriMine=+this.state.canseriMine-10),"+"===e&&(this.state.canseriMine=+this.state.canseriMine+10)},changeCanseriOther(e){"-"===e&&(this.state.canseriOther=+this.state.canseriOther-10),"+"===e&&(this.state.canseriOther=+this.state.canseriOther+10)},changeYagiMine(e){this.state.yagiMine.includes(e)?this.state.yagiMine=this.state.yagiMine.filter((a=>a!==e)):(this.state.yagiOther.includes(e)&&(this.state.yagiOther=this.state.yagiOther.filter((a=>a!==e))),this.state.yagiMine=[...this.state.yagiMine,e])},changeYagiOther(e){this.state.yagiOther.includes(e)?this.state.yagiOther=this.state.yagiOther.filter((a=>a!==e)):(this.state.yagiMine.includes(e)&&(this.state.yagiMine=this.state.yagiMine.filter((a=>a!==e))),this.state.yagiOther=[...this.state.yagiOther,e])}}),s=(0,r.qj)({calculateProgressValue(e,a){switch(e){case T:return 25*(a-1);case A:return-25;case E:return 0;default:break}},calculateNormByPlayersCount(e){switch(e){case 2:return 120;case 3:return 80;case 4:return 60;case 5:return 50;default:return 50}},calculateYagiPlusByPlayersCount(e,a){if(a<5)return(a-1)*this.calculateSingleScoreByYagi(e);switch(e){case G:return 750;case J:return 570;case L:return 450;case Q:return 370;case R:return 300;case X:return 220;default:return 0}},calculateSingleScoreByYagi(e){switch(e){case G:return 200;case J:return 150;case L:return 120;case Q:return 100;case R:return 80;case X:return 60;default:return 0}}}),l=(0,n.Fl)((()=>{const e=s.calculateProgressValue(t.state.progress,t.state.playersNumber),a=t.state.score-s.calculateNormByPlayersCount(t.state.playersNumber),n=(t.state.playersNumber-1)*t.state.canseriMine-t.state.canseriOther,i=t.state.yagiMine.reduce(((e,a)=>e+s.calculateYagiPlusByPlayersCount(a,t.state.playersNumber)),0),r=t.state.yagiOther.reduce(((e,a)=>e+s.calculateSingleScoreByYagi(a)),0);return e+a+n+i-r}));return(e,s)=>((0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("div",O,[V,(0,n._)("div",M,[(0,n.Wm)(f,{onClick:s[0]||(s[0]=e=>t.changePlayersNumber("-"))},{default:(0,n.w5)((()=>[(0,n.Uk)("-")])),_:1}),(0,n.Wm)(d,{modelValue:t.state.playersNumber,"onUpdate:modelValue":s[1]||(s[1]=e=>t.state.playersNumber=e)},null,8,["modelValue"]),(0,n.Wm)(f,{onClick:s[2]||(s[2]=e=>t.changePlayersNumber("+"))},{default:(0,n.w5)((()=>[(0,n.Uk)("+")])),_:1})])]),(0,n._)("div",U,[C,(0,n._)("div",x,[(0,n.Wm)(f,{onClick:s[3]||(s[3]=e=>t.changeScore("-"))},{default:(0,n.w5)((()=>[(0,n.Uk)("-")])),_:1}),(0,n.Wm)(d,{modelValue:t.state.score,"onUpdate:modelValue":s[4]||(s[4]=e=>t.state.score=e)},null,8,["modelValue"]),(0,n.Wm)(f,{onClick:s[5]||(s[5]=e=>t.changeScore("+"))},{default:(0,n.w5)((()=>[(0,n.Uk)("+")])),_:1})])]),(0,n._)("div",W,[N,(0,n.Wm)(k,{"checkbox-id":"mine","model-value":t.state.progress===T,"onUpdate:modelValue":s[6]||(s[6]=e=>t.state.progress=T)},{default:(0,n.w5)((()=>[(0,n.Uk)(" Мой ")])),_:1},8,["model-value"]),(0,n.Wm)(k,{"checkbox-id":"other","model-value":t.state.progress===A,"onUpdate:modelValue":s[7]||(s[7]=e=>t.state.progress=A)},{default:(0,n.w5)((()=>[(0,n.Uk)(" Не мой ")])),_:1},8,["model-value"]),(0,n.Wm)(k,{"checkbox-id":"nothing","model-value":t.state.progress===E,"onUpdate:modelValue":s[8]||(s[8]=e=>t.state.progress=E)},{default:(0,n.w5)((()=>[(0,n.Uk)(" Заварили ")])),_:1},8,["model-value"])]),(0,n._)("div",P,[S,Y,(0,n._)("div",B,[(0,n.Wm)(f,{onClick:s[9]||(s[9]=e=>t.changeCanseriMine("-"))},{default:(0,n.w5)((()=>[(0,n.Uk)("-")])),_:1}),(0,n.Wm)(d,{modelValue:t.state.canseriMine,"onUpdate:modelValue":s[10]||(s[10]=e=>t.state.canseriMine=e)},null,8,["modelValue"]),(0,n.Wm)(f,{onClick:s[11]||(s[11]=e=>t.changeCanseriMine("+"))},{default:(0,n.w5)((()=>[(0,n.Uk)("+")])),_:1})]),I,(0,n._)("div",j,[(0,n.Wm)(f,{onClick:s[12]||(s[12]=e=>t.changeCanseriOther("-"))},{default:(0,n.w5)((()=>[(0,n.Uk)("-")])),_:1}),(0,n.Wm)(d,{modelValue:t.state.canseriOther,"onUpdate:modelValue":s[13]||(s[13]=e=>t.state.canseriOther=e)},null,8,["modelValue"]),(0,n.Wm)(f,{onClick:s[14]||(s[14]=e=>t.changeCanseriOther("+"))},{default:(0,n.w5)((()=>[(0,n.Uk)("+")])),_:1})])]),(0,n._)("div",D,[z,F,(0,n._)("div",Z,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(a,(e=>(0,n.Wm)(k,{key:e+"mine","checkbox-id":e+"mine","model-value":t.state.yagiMine.includes(e),"onUpdate:modelValue":a=>t.changeYagiMine(e)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e),1)])),_:2},1032,["checkbox-id","model-value","onUpdate:modelValue"]))),64))]),$,(0,n._)("div",q,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(a,(e=>(0,n.Wm)(k,{key:e+"other","checkbox-id":e+"other","model-value":t.state.yagiOther.includes(e),"onUpdate:modelValue":a=>t.changeYagiOther(e)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e),1)])),_:2},1032,["checkbox-id","model-value","onUpdate:modelValue"]))),64))])]),(0,n._)("div",H,[K,(0,n._)("div",{class:(0,i.C_)(["main__subheading",{main__subheading_red:l.value<0}])},(0,i.zw)(l.value),3)])]))}};const ae=ee;var te=ae;(0,s.ri)(te).mount("#app")}},a={};function t(s){var n=a[s];if(void 0!==n)return n.exports;var i=a[s]={exports:{}};return e[s].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(a,s,n,i){if(!s){var r=1/0;for(o=0;o<e.length;o++){s=e[o][0],n=e[o][1],i=e[o][2];for(var l=!0,u=0;u<s.length;u++)(!1&i||r>=i)&&Object.keys(t.O).every((function(e){return t.O[e](s[u])}))?s.splice(u--,1):(l=!1,i<r&&(r=i));if(l){e.splice(o--,1);var c=n();void 0!==c&&(a=c)}}return a}i=i||0;for(var o=e.length;o>0&&e[o-1][2]>i;o--)e[o]=e[o-1];e[o]=[s,n,i]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,s){var n,i,r=s[0],l=s[1],u=s[2],c=0;if(r.some((function(a){return 0!==e[a]}))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(u)var o=u(t)}for(a&&a(s);c<r.length;c++)i=r[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(o)},s=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(1322)}));s=t.O(s)})();
//# sourceMappingURL=app.4fef1e58.js.map