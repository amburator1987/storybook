import{n as e}from"./chunk-DnJy8xQt.js";import{_ as t,b as n,d as r,h as i,m as a,u as o,v as s,x as c,y as l}from"./iframe-BY-TrGU2.js";import{n as u,t as d}from"./_plugin-vue_export-helper-BAx6Ucv9.js";var f,p,m=e((()=>{o(),f=[`data-figma-node-id`],p=t({__name:`Badge`,props:{variant:{default:`brand`},kind:{default:`counter`}},setup(e){let t=e,o={brand:{counter:`6507:1995`,text:`6507:2001`},action:{counter:`6507:2015`,text:`6507:2017`},warrning:{counter:`6507:1997`,text:`6507:2003`},info:{counter:`6507:1999`,text:`6507:2005`}},u=r(()=>o[t.variant][t.kind]),d=r(()=>t.kind===`text`?`Text`:`9`);return(t,r)=>(s(),a(`span`,{class:n([t.$style[`kzn-c-badge`],t.$style[`kzn-c-badge--${e.variant}`],t.$style[`kzn-c-badge--${e.kind}`]]),"data-figma-node-id":u.value},[l(t.$slots,`default`,{},()=>[i(c(d.value),1)])],10,f))}})})),h,g=e((()=>{h={"kzn-c-badge":`_kzn-c-badge_38480_53`,"kzn-c-badge--text":`_kzn-c-badge--text_38480_105`,"kzn-c-badge--counter":`_kzn-c-badge--counter_38480_113`,"kzn-c-badge--brand":`_kzn-c-badge--brand_38480_131`,"kzn-c-badge--action":`_kzn-c-badge--action_38480_157`,"kzn-c-badge--warrning":`_kzn-c-badge--warrning_38480_165`,"kzn-c-badge--info":`_kzn-c-badge--info_38480_173`}})),_,v,y=e((()=>{m(),m(),g(),u(),_={$style:h},v=d(p,[[`__cssModules`,_]]),p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:`default`,displayName:`Badge`,description:``,tags:{},props:[{name:`variant`,description:"Figma property `badge`.",required:!1,type:{name:`BadgeVariant`},defaultValue:{func:!1,value:`"brand"`}},{name:`kind`,description:"Figma property `Type`.",required:!1,type:{name:`BadgeKind`},defaultValue:{func:!1,value:`"counter"`}}],slots:[{name:`default`,description:"Badge content. Defaults to `9` for counter, `Text` for text."}],sourceFiles:[`D:/D particija/SEAD FAJLOVI/cursor_projects/storyBook/kaizen/src/components/Badge/Badge.vue`]})})),b,x,S,C,w,T,E;e((()=>{y(),b=`https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=6507-1994&t=hVNG5MaEmQHZtlRa-0`,x={title:`Components/Badge`,component:v,parameters:{layout:`centered`,docs:{description:{component:`Kaizen Badge — recreated 1:1 from Figma component set \`badge\` (node 6507:1994).\n\n[Open in Figma](${b})`}},design:{type:`figma`,url:b}},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`brand`,`action`,`warrning`,`info`],description:"Figma property `badge`. Note: keeps the original `warrning` typo from the design."},kind:{control:`radio`,options:[`counter`,`text`],description:"Figma property `Type`."}},args:{variant:`brand`,kind:`counter`}},S={},C={args:{variant:`info`,kind:`counter`},render:e=>({components:{Badge:v},setup:()=>({args:e}),template:`<Badge v-bind="args">9</Badge>`})},w={args:{variant:`brand`,kind:`text`},render:e=>({components:{Badge:v},setup:()=>({args:e}),template:`<Badge v-bind="args">Text</Badge>`})},T={render:()=>({components:{Badge:v},template:`
      <div style="display:flex;flex-direction:column;gap:24px;align-items:center;font-family:system-ui;">
        <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
          <Badge variant="brand" kind="counter">9</Badge>
          <Badge variant="action" kind="counter">9</Badge>
          <Badge variant="warrning" kind="counter">9</Badge>
          <Badge variant="info" kind="counter">9</Badge>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
          <Badge variant="brand" kind="text">Text</Badge>
          <Badge variant="action" kind="text">Text</Badge>
          <Badge variant="warrning" kind="text">Text</Badge>
          <Badge variant="info" kind="text">Text</Badge>
        </div>
      </div>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source},description:{story:`Default — brand counter, matches the Figma component default.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    kind: "counter"
  },
  render: args => ({
    components: {
      Badge
    },
    setup: () => ({
      args
    }),
    template: \`<Badge v-bind="args">9</Badge>\`
  })
}`,...C.parameters?.docs?.source},description:{story:`Counter (numeric badge).`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "brand",
    kind: "text"
  },
  render: args => ({
    components: {
      Badge
    },
    setup: () => ({
      args
    }),
    template: \`<Badge v-bind="args">Text</Badge>\`
  })
}`,...w.parameters?.docs?.source},description:{story:`Text label badge.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:24px;align-items:center;font-family:system-ui;">
        <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
          <Badge variant="brand" kind="counter">9</Badge>
          <Badge variant="action" kind="counter">9</Badge>
          <Badge variant="warrning" kind="counter">9</Badge>
          <Badge variant="info" kind="counter">9</Badge>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
          <Badge variant="brand" kind="text">Text</Badge>
          <Badge variant="action" kind="text">Text</Badge>
          <Badge variant="warrning" kind="text">Text</Badge>
          <Badge variant="info" kind="text">Text</Badge>
        </div>
      </div>
    \`
  })
}`,...T.parameters?.docs?.source},description:{story:`All 8 variants matching the Figma component set layout.`,...T.parameters?.docs?.description}}},E=[`Default`,`Counter`,`Text`,`AllVariants`]}))();export{T as AllVariants,C as Counter,S as Default,w as Text,E as __namedExportsOrder,x as default};