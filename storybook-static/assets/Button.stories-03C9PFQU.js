import{n as e}from"./chunk-DnJy8xQt.js";import{_ as t,b as n,d as r,f as i,g as a,h as o,m as s,p as c,u as l,v as u,x as d,y as f}from"./iframe-BY-TrGU2.js";import{n as p,t as m}from"./Icon-LAQhCuT3.js";import{n as h,t as g}from"./_plugin-vue_export-helper-BAx6Ucv9.js";var _,v,y,b=e((()=>{l(),p(),_=[`disabled`,`aria-pressed`,`data-figma-node-id`],v=`ButtonText`,y=t({__name:`Button`,props:{variant:{default:`primary`},size:{default:`sm`},disabled:{type:Boolean,default:!1},pressed:{type:Boolean,default:!1},hideIcon:{type:Boolean,default:!1},showIconRight:{type:Boolean,default:!1},iconName:{default:`chevron-down`},iconSize:{default:`small`},iconRightName:{default:`chevron-down`},iconRightSize:{default:`small`}},setup(e){let t=e,l={primary:{default:`8091:1787`,pressed:`8091:1789`,disabled:`8091:1791`},brand:{default:`8091:1793`,pressed:`8091:1795`,disabled:`8091:1797`},secondary:{default:`8091:1799`,pressed:`8091:1801`,disabled:`8091:1803`}},p=r(()=>{let e=t.disabled?`disabled`:t.pressed?`pressed`:`default`;return l[t.variant][e]});return(t,r)=>(u(),s(`button`,{type:`button`,class:n([t.$style[`kzn-c-button`],t.$style[`kzn-c-button--${e.variant}`],{[t.$style[`kzn-c-button--pressed`]]:e.pressed}]),disabled:e.disabled,"aria-pressed":e.pressed?!0:void 0,"data-figma-node-id":p.value},[e.hideIcon?c(``,!0):(u(),s(`span`,{key:0,class:n(t.$style[`kzn-c-button__icon`]),"aria-hidden":`true`},[f(t.$slots,`icon`,{},()=>[a(m,{name:e.iconName,size:e.iconSize},null,8,[`name`,`size`])])],2)),i(`span`,{class:n(t.$style[`kzn-c-button__label`])},[f(t.$slots,`default`,{},()=>[o(d(v))])],2),e.showIconRight?(u(),s(`span`,{key:1,class:n(t.$style[`kzn-c-button__icon`]),"aria-hidden":`true`},[f(t.$slots,`icon-right`,{},()=>[a(m,{name:e.iconRightName,size:e.iconRightSize},null,8,[`name`,`size`])])],2)):c(``,!0)],10,_))}})})),x,S=e((()=>{x={"kzn-c-button":`_kzn-c-button_17dka_11`,"kzn-c-button--pressed":`_kzn-c-button--pressed_17dka_97`,"kzn-c-button--primary":`_kzn-c-button--primary_17dka_131`,"kzn-c-button--brand":`_kzn-c-button--brand_17dka_141`,"kzn-c-button--secondary":`_kzn-c-button--secondary_17dka_151`,"kzn-c-button__icon":`_kzn-c-button__icon_17dka_163`,"kzn-c-icon":`_kzn-c-icon_17dka_163`,"kzn-c-button__label":`_kzn-c-button__label_17dka_213`}})),C,w,T=e((()=>{b(),b(),S(),h(),C={$style:x},w=g(y,[[`__cssModules`,C]]),y.__docgenInfo=Object.assign({displayName:y.name??y.__name},{exportName:`default`,displayName:`Button`,description:``,tags:{},props:[{name:`variant`,required:!1,type:{name:`ButtonVariant`},defaultValue:{func:!1,value:`"primary"`}},{name:`size`,required:!1,type:{name:`ButtonSize`},defaultValue:{func:!1,value:`"sm"`}},{name:`disabled`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`pressed`,description:`Static pressed look (e.g. Storybook); real clicks use :active.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`hideIcon`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`showIconRight`,description:"Figma `icon-right-show` — shows trailing icon after label.",required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`iconName`,description:"Passed to `Icon` when the default `icon` slot is used.",required:!1,type:{name:`IconName`},defaultValue:{func:!1,value:`"chevron-down"`}},{name:`iconSize`,required:!1,type:{name:`IconSize`},defaultValue:{func:!1,value:`"small"`}},{name:`iconRightName`,description:"Passed to trailing `Icon` when the default `icon-right` slot is used.",required:!1,type:{name:`IconName`},defaultValue:{func:!1,value:`"chevron-down"`}},{name:`iconRightSize`,required:!1,type:{name:`IconSize`},defaultValue:{func:!1,value:`"small"`}}],slots:[{name:`icon`},{name:`default`},{name:`icon-right`}],sourceFiles:[`D:/D particija/SEAD FAJLOVI/cursor_projects/storyBook/kaizen/src/components/Button/Button.vue`]})})),E,D,O,k,A,j,M,N,P,F,I,L;e((()=>{T(),E=`https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=8091-1786`,D={title:`Components/Button`,component:w,parameters:{layout:`centered`,backgrounds:{default:`dark`},docs:{description:{component:`Kaizen Button — from Figma component set \`button\` (node 8091:1786).

[Open in Figma](${E})`}},design:{type:`figma`,url:E}},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`brand`,`secondary`],description:"Figma property `type`."},size:{control:`select`,options:[`sm`],description:"Figma property `size` (only `sm` in file)."},disabled:{control:`boolean`},pressed:{control:`boolean`,description:"Static pressed overlay for docs; real use relies on `:active`."},hideIcon:{control:`boolean`},showIconRight:{control:`boolean`,description:"Figma `icon-right-show` — prikazuje trailing ikonu iza labele."},iconName:{control:`select`,options:[`chevron-down`,`chevron-up`,`document`,`activity`],description:"Glyph for built-in `Icon` (overridable via `icon` slot)."},iconSize:{control:`select`,options:[`small`,`default`,`lg`,`xl`],description:'Figma `Icon` property `size` (passed to `<Icon :size="…" />`).'},iconRightName:{control:`select`,options:[`chevron-down`,`chevron-up`,`document`,`activity`],description:"Glyph for trailing icon (overridable via `icon-right` slot)."},iconRightSize:{control:`select`,options:[`small`,`default`,`lg`,`xl`],description:`Size of trailing icon.`}},args:{variant:`primary`,size:`sm`,disabled:!1,pressed:!1,hideIcon:!1,showIconRight:!1,iconName:`chevron-down`,iconSize:`small`,iconRightName:`chevron-down`,iconRightSize:`small`}},O={},k={args:{variant:`brand`}},A={args:{variant:`secondary`}},j={args:{variant:`primary`,disabled:!0}},M={args:{variant:`primary`,pressed:!0}},N={args:{hideIcon:!0}},P={args:{showIconRight:!0}},F={args:{showIconRight:!0,iconRightName:`chevron-up`}},I={render:()=>({components:{Button:w},template:`
      <div
        style="display:flex;flex-direction:column;gap:16px;padding:24px;background:#1e2733;border-radius:8px;"
      >
        <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
          <Button variant="primary">ButtonText</Button>
          <Button variant="primary" pressed>ButtonText</Button>
          <Button variant="primary" disabled>ButtonText</Button>
        </div>
        <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
          <Button variant="brand">ButtonText</Button>
          <Button variant="brand" pressed>ButtonText</Button>
          <Button variant="brand" disabled>ButtonText</Button>
        </div>
        <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
          <Button variant="secondary">ButtonText</Button>
          <Button variant="secondary" pressed>ButtonText</Button>
          <Button variant="secondary" disabled>ButtonText</Button>
        </div>
      </div>
    `})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "brand"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    disabled: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    pressed: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    hideIcon: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    showIconRight: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    showIconRight: true,
    iconRightName: "chevron-up"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div
        style="display:flex;flex-direction:column;gap:16px;padding:24px;background:#1e2733;border-radius:8px;"
      >
        <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
          <Button variant="primary">ButtonText</Button>
          <Button variant="primary" pressed>ButtonText</Button>
          <Button variant="primary" disabled>ButtonText</Button>
        </div>
        <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
          <Button variant="brand">ButtonText</Button>
          <Button variant="brand" pressed>ButtonText</Button>
          <Button variant="brand" disabled>ButtonText</Button>
        </div>
        <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap;">
          <Button variant="secondary">ButtonText</Button>
          <Button variant="secondary" pressed>ButtonText</Button>
          <Button variant="secondary" disabled>ButtonText</Button>
        </div>
      </div>
    \`
  })
}`,...I.parameters?.docs?.source},description:{story:`3×3 matrix matching Figma variant matrix (default / pressed / disabled × rows).`,...I.parameters?.docs?.description}}},L=[`Default`,`Brand`,`Secondary`,`Disabled`,`Pressed`,`NoIcon`,`IconRight`,`BothIcons`,`AllVariants`]}))();export{I as AllVariants,F as BothIcons,k as Brand,O as Default,j as Disabled,P as IconRight,N as NoIcon,M as Pressed,A as Secondary,L as __namedExportsOrder,D as default};