import{n as e}from"./chunk-DnJy8xQt.js";import{_ as t,b as n,d as r,f as i,g as a,h as o,m as s,p as c,u as l,v as u,x as d,y as f}from"./iframe-BY-TrGU2.js";import{n as p,t as m}from"./Icon-LAQhCuT3.js";import{n as h,t as g}from"./_plugin-vue_export-helper-BAx6Ucv9.js";var _,v,y,b,x,S=e((()=>{l(),p(),_=[`aria-expanded`,`data-figma-node-id`],v=`Accordion`,y=`Subheading of item`,b=`333`,x=t({__name:`AccordionItem`,props:{expanded:{type:Boolean,default:!1},showLeadIcon:{type:Boolean,default:!0},showAdditionalIcon:{type:Boolean,default:!1},showSubhead:{type:Boolean,default:!0},showTrailIcon:{type:Boolean,default:!0},showCounter:{type:Boolean,default:!0},forceHover:{type:Boolean,default:!1},leadIconName:{default:`document`},iconSize:{default:`small`}},setup(e){let t=e,l={default:`6507:1675`,hover:`6507:1702`,selected:`6507:1688`},p=r(()=>t.expanded?l.selected:t.forceHover?l.hover:l.default);return(t,r)=>(u(),s(`button`,{type:`button`,class:n([t.$style[`kzn-c-accordion-item`],{[t.$style[`kzn-c-accordion-item--expanded`]]:e.expanded,[t.$style[`kzn-c-accordion-item--force-hover`]]:e.forceHover}]),"aria-expanded":e.expanded,"data-figma-node-id":p.value},[e.expanded?(u(),s(`span`,{key:0,class:n(t.$style[`kzn-c-accordion-item__selector`]),"aria-hidden":`true`},null,2)):c(``,!0),i(`span`,{class:n(t.$style[`kzn-c-accordion-item__inner`])},[e.showLeadIcon?(u(),s(`span`,{key:0,class:n(t.$style[`kzn-c-accordion-item__lead`]),"aria-hidden":`true`},[f(t.$slots,`lead`,{},()=>[a(m,{name:e.leadIconName,size:e.iconSize},null,8,[`name`,`size`])])],2)):c(``,!0),e.showAdditionalIcon?(u(),s(`span`,{key:1,class:n(t.$style[`kzn-c-accordion-item__additional`])},[i(`span`,{class:n(t.$style[`kzn-c-accordion-item__additional-slot`])},[f(t.$slots,`additional`)],2)],2)):c(``,!0),i(`span`,{class:n(t.$style[`kzn-c-accordion-item__info`])},[i(`p`,{class:n(t.$style[`kzn-c-accordion-item__title`])},[f(t.$slots,`title`,{},()=>[o(d(v))])],2),e.showSubhead?(u(),s(`p`,{key:0,class:n(t.$style[`kzn-c-accordion-item__subhead`])},[f(t.$slots,`subhead`,{},()=>[o(d(y))])],2)):c(``,!0)],2),e.showCounter?(u(),s(`p`,{key:2,class:n(t.$style[`kzn-c-accordion-item__counter`])},[f(t.$slots,`counter`,{},()=>[o(d(b))])],2)):c(``,!0),e.showTrailIcon?(u(),s(`span`,{key:3,class:n(t.$style[`kzn-c-accordion-item__trail`]),"aria-hidden":`true`},[a(m,{name:e.expanded?`chevron-up`:`chevron-down`,size:e.iconSize},null,8,[`name`,`size`])],2)):c(``,!0)],2)],10,_))}})})),C,w=e((()=>{C={"kzn-c-accordion-item":`_kzn-c-accordion-item_wz57u_11`,"kzn-c-accordion-item--expanded":`_kzn-c-accordion-item--expanded_wz57u_55`,"kzn-c-accordion-item--force-hover":`_kzn-c-accordion-item--force-hover_wz57u_57`,"kzn-c-accordion-item__selector":`_kzn-c-accordion-item__selector_wz57u_77`,"kzn-c-accordion-item__inner":`_kzn-c-accordion-item__inner_wz57u_97`,"kzn-c-accordion-item__lead":`_kzn-c-accordion-item__lead_wz57u_117`,"kzn-c-accordion-item__additional":`_kzn-c-accordion-item__additional_wz57u_119`,"kzn-c-accordion-item__trail":`_kzn-c-accordion-item__trail_wz57u_121`,"kzn-c-accordion-item__additional-slot":`_kzn-c-accordion-item__additional-slot_wz57u_135`,"kzn-c-accordion-item__info":`_kzn-c-accordion-item__info_wz57u_159`,"kzn-c-accordion-item__title":`_kzn-c-accordion-item__title_wz57u_179`,"kzn-c-accordion-item__subhead":`_kzn-c-accordion-item__subhead_wz57u_201`,"kzn-c-accordion-item__counter":`_kzn-c-accordion-item__counter_wz57u_225`}})),T,E,D=e((()=>{S(),S(),w(),h(),T={$style:C},E=g(x,[[`__cssModules`,T]]),x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:`default`,displayName:`AccordionItem`,description:``,tags:{},props:[{name:`expanded`,description:`Open / Selected in Figma: accent bar + chevron up.`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`showLeadIcon`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`showAdditionalIcon`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`showSubhead`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`showTrailIcon`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`showCounter`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`forceHover`,description:`Applies Hover surface token without real pointer hover (e.g. Storybook).`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`leadIconName`,description:`Glyph name for the default lead icon (when lead slot is empty).`,required:!1,type:{name:`IconName`},defaultValue:{func:!1,value:`"document"`}},{name:`iconSize`,description:"Size for default `Icon` instances (lead + chevron).",required:!1,type:{name:`IconSize`},defaultValue:{func:!1,value:`"small"`}}],slots:[{name:`lead`},{name:`additional`},{name:`title`},{name:`subhead`},{name:`counter`}],sourceFiles:[`D:/D particija/SEAD FAJLOVI/cursor_projects/storyBook/kaizen/src/components/AccordionItem/AccordionItem.vue`]})})),O,k,A,j,M,N,P,F,I;e((()=>{D(),O=`https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=6507-1674`,k={title:`Components/AccordionItem`,component:E,parameters:{layout:`centered`,backgrounds:{default:`dark`},docs:{description:{component:`Kaizen accordion item header — from Figma \`accordion-item\` (6507:1674).

[Open in Figma](${O})`}},design:{type:`figma`,url:O}},tags:[`autodocs`],argTypes:{expanded:{control:`boolean`,description:"Figma `State=Selected`."},forceHover:{control:`boolean`,description:"Figma `State=Hover` surface (for static demos)."},showLeadIcon:{control:`boolean`},showAdditionalIcon:{control:`boolean`},showSubhead:{control:`boolean`},showTrailIcon:{control:`boolean`},showCounter:{control:`boolean`},leadIconName:{control:`select`,options:[`chevron-down`,`chevron-up`,`document`,`activity`],description:"Figma `icon` in `icon-holder` — glyph for the lead icon."},iconSize:{control:`select`,options:[`small`,`default`,`lg`,`xl`],description:"Figma `Icon` property `size` (lead + chevron)."}},args:{expanded:!1,forceHover:!1,showLeadIcon:!0,showAdditionalIcon:!1,showSubhead:!0,showTrailIcon:!0,showCounter:!0,leadIconName:`activity`,iconSize:`small`}},A={},j={args:{expanded:!0}},M={args:{forceHover:!0}},N={render:()=>({components:{AccordionItem:E},template:`
      <div style="display:flex;flex-direction:column;gap:8px;width:400px;max-width:100%;">
        <AccordionItem />
        <AccordionItem expanded />
        <AccordionItem :force-hover="true" />
      </div>
    `})},P={args:{showLeadIcon:!1,showSubhead:!1,showCounter:!1}},F={render:()=>({components:{AccordionItem:E},template:`
      <div style="display:flex;flex-direction:column;gap:8px;width:400px;">
        <AccordionItem lead-icon-name="activity" />
        <AccordionItem lead-icon-name="document" />
        <AccordionItem lead-icon-name="chevron-down" />
        <AccordionItem lead-icon-name="chevron-up" />
      </div>
    `})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    forceHover: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AccordionItem
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:8px;width:400px;max-width:100%;">
        <AccordionItem />
        <AccordionItem expanded />
        <AccordionItem :force-hover="true" />
      </div>
    \`
  })
}`,...N.parameters?.docs?.source},description:{story:`Mirrors the three Figma component states (Default / Selected / Hover).`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    showLeadIcon: false,
    showSubhead: false,
    showCounter: false
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AccordionItem
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:8px;width:400px;">
        <AccordionItem lead-icon-name="activity" />
        <AccordionItem lead-icon-name="document" />
        <AccordionItem lead-icon-name="chevron-down" />
        <AccordionItem lead-icon-name="chevron-up" />
      </div>
    \`
  })
}`,...F.parameters?.docs?.source},description:{story:`All available lead icon glyphs in a single row.`,...F.parameters?.docs?.description}}},I=[`Default`,`Expanded`,`HoverStatic`,`AllStates`,`Minimal`,`LeadIconVariants`]}))();export{N as AllStates,A as Default,j as Expanded,M as HoverStatic,F as LeadIconVariants,P as Minimal,I as __namedExportsOrder,k as default};