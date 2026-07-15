/**
 * Foundation / Motion
 * Figma frame: 6380:2590  "Frame 15"  1328×3960px
 *
 * Column 1 — Motion Intro   (6380:2592)  442×3960px
 * Column 2 — Motion Scale   (6380:2608)  442×3060px
 * Column 3 — Motion Intent  (6380:2646)  442×3960px  — static layout only, no interactions yet
 */

import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";
import Icon from "../../components/Icon/Icon.vue";
import "./Motion.transitions.css";

const FIGMA_URL =
  "https://www.figma.com/design/JCQ4u9ytPIMpGaLzdAq8dD/Kaizen-Reworked-3-Lvls?node-id=6380-2590";

const meta: Meta = {
  title: "Foundation/Motion",
  parameters: {
    layout: "fullscreen",
    design: { type: "figma", url: FIGMA_URL },
  },
  tags: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Shared style constants ────────────────────────────────────────────────────

const BODY = `
  font-size: var(--typography-font-size-paragraph-sm, 14px);
  font-weight: var(--font-weight-primary);
  font-family: var(--font-family-primary);
  color: #f2f6f9;
  margin: 0 0 var(--spacing-2xl, 16px) 0;
  line-height: var(--typography-line-height-paragraph-sm, 20px);
`;
const BODY_LAST = BODY.replace("margin: 0 0 var(--spacing-2xl, 16px) 0;", "margin: 0;");

// Column 2 pill styles — all 11 pills share these base styles
const PILL = `position:relative;height:64px;width:100%;border-radius:9999px;background:#303c49;box-shadow:0 4px 42px rgba(99,15,255,0.25);overflow:hidden;box-sizing:border-box;cursor:pointer;user-select:none;`;
/** Figma: font/family/headings/font-family (Proxima Nova Semibold) — not our body font */
const PILL_LABEL = `position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);margin:0;z-index:1;font-size:14px;font-weight:var(--font-weight-secondary);font-family:var(--proxima-font-family, 'Proxima Nova');line-height:20px;color:#f2f6f9;white-space:nowrap;pointer-events:none;`;
/** Dot LEFT 48×48 visible */
const DOT_LEFT = `position:absolute;left:8px;top:8px;width:48px;height:48px;border-radius:9999px;background:#630fff;`;
/** Dot LEFT 48×48 opacity:0 — fade-in, slide-in initial state */
const DOT_LEFT_HIDDEN = `${DOT_LEFT}opacity:0;`;
/** Dot LEFT 43×43 — scale-in initial state (grows to 48) */
const DOT_LEFT_SM = `position:absolute;left:8px;top:10px;width:43px;height:43px;border-radius:9999px;background:#630fff;`;
/** Dot RIGHT 48×48 — slide-out, scale-out initial state */
const DOT_RIGHT = `position:absolute;left:calc(100% - 56px);top:8px;width:48px;height:48px;border-radius:9999px;background:#630fff;`;

// Column 3 shared style constants
/** Display-md heading — 32px/40, tracking -0.24px, used for every component-section title in column 3.
 * Figma: font/family/headings/font-family (Proxima Nova Semibold) — unlike col1/col2's equivalent
 * heads which use Inter, these are set to the headings family in the source file. */
const HEAD3 = `margin:0;font-size:32px;font-weight:var(--font-weight-secondary);font-family:var(--proxima-font-family, 'Proxima Nova');line-height:40px;letter-spacing:-0.24px;color:#f9f8f8;white-space:nowrap;`;
/** Mock-card base — node 8568:472/490/500/514/509/522 · 226px tall placeholder cards */
const CARD_BASE = `background:rgba(0,0,0,0.6);border-radius:8px;box-shadow:0 4px 84px rgba(99,15,255,0.25);height:226px;width:100%;box-sizing:border-box;`;

export const Default: Story = {
  name: "Motion",
  render: () => ({
    components: { Icon },
    setup() {
      const active = ref(false);
      const activeFuncional = ref(false);
      const activeExpressive = ref(false);
      const activeFast = ref(false);
      const activeMedium = ref(false);
      const activeSlow = ref(false);
      const activeFadeIn = ref(false);
      const activeSlideIn = ref(false);
      const activeScaleIn = ref(false);
      const activeFadeOut = ref(false);
      const activeSlideOut = ref(false);
      const activeScaleOut = ref(false);
      const activeButton = ref(false);
      const activeAccordion = ref(false);
      const activePageRender = ref(false);
      const activeDialog = ref(false);
      const activeRails = ref(false);
      const activeSheet = ref(false);
      const activeTooltip = ref(false);
      return { active, activeFuncional, activeExpressive, activeFast, activeMedium, activeSlow, activeFadeIn, activeSlideIn, activeScaleIn, activeFadeOut, activeSlideOut, activeScaleOut, activeButton, activeAccordion, activePageRender, activeDialog, activeRails, activeSheet, activeTooltip };
    },
    template: `
<div style="background:var(--surface-default-body);min-height:100vh;font-family:var(--font-family-primary);">

  <!-- Frame 12 — outer row · 3 columns × 442px, gap:1px  (Figma 6380:2591 · 1328px)
       Below 1328px (3×442px + gaps) the columns can't fit side by side, so
       .kzn-motion-columns stacks them vertically — see Motion.transitions.css -->
  <div class="kzn-motion-columns" style="display:flex;flex-direction:row;gap:1px;align-items:flex-start;">

    <!-- ══════════════════════════════════════════════════════════════
         COLUMN 1 — Motion Intro  (Figma 6380:2592 · 442×3960px)
         px:24px · content:394px
    ══════════════════════════════════════════════════════════════ -->
    <div class="kzn-motion-column" style="display:flex;flex-direction:column;gap:1px;align-items:flex-start;padding:0 var(--spacing-3xl,24px);width:442px;flex-shrink:0;box-sizing:border-box;">

      <!-- Section header — node 6380:2593 -->
      <div style="display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:var(--spacing-2xl,16px) 0;width:394px;flex-shrink:0;">
        <div style="display:flex;gap:var(--spacing-2xl,16px);height:93px;align-items:center;width:100%;">
          <div style="width:42px;height:42px;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:var(--violet-200, #825acb);">
            <Icon name="activity" size="xl" style="color:var(--violet-200, #825acb);" />
          </div>
          <p style="margin:0;flex-shrink:0;font-size:var(--typography-font-size-h3,32px);font-weight:var(--font-weight-secondary);line-height:var(--typography-line-height-h3,38px);letter-spacing:var(--typography-letter-spacing-h3,0px);color:var(--violet-200, #825acb);white-space:nowrap;">Guidelines</p>
        </div>
      </div>

      <!-- Content — node 6380:2597 -->
      <div style="display:flex;flex-direction:column;gap:10px;align-items:flex-start;width:394px;">

        <!-- Copy Block 1 — node 6380:2598 · h:548px -->
        <div style="display:flex;flex-direction:column;align-items:flex-start;width:100%;">
          <div style="display:flex;flex-direction:column;gap:var(--spacing-2xl,16px);align-items:flex-start;width:100%;">
            <div style="display:flex;flex-direction:column;gap:0;align-items:flex-start;width:100%;">
              <div style="display:flex;align-items:center;">
                <p style="margin:0;font-size:var(--typography-font-size-paragraph-sm,14px);font-weight:var(--font-weight-secondary);font-family:var(--font-family-primary);line-height:24px;color:#f9f8f8;white-space:nowrap;">How and when</p>
              </div>
              <div style="display:flex;align-items:center;width:100%;">
                <p style="margin:0;flex-shrink:0;font-size:var(--typography-display-md-display-md,32px);font-weight:var(--font-weight-secondary);font-family:var(--font-family-primary);line-height:40px;letter-spacing:-0.24px;color:#f9f8f8;white-space:nowrap;">How to use</p>
              </div>
            </div>
            <div style="flex:1;min-width:0;word-break:break-word;line-height:0;">
              <p style="${BODY}">Motion Guidelines</p>
              <p style="${BODY}">Motion u dizajn sistemu služi da poboljša jasnoću, usmeri pažnju i pruži korisniku osećaj stabilnosti i kontinuiteta tokom interakcije. Animacije nikada nisu dekorativne — uvek postoje sa jasnom namenom. Motion treba da bude brz, suptilan i dosledan, kako bi pružio iskustvo koje je fluidno, jasno i nenametljivo.</p>
              <p style="${BODY}">Principi Motiona</p>
              <p style="${BODY}">1. Svrhovitost</p>
              <p style="${BODY}">Animacija mora imati jasno opravdanje. Koristi se samo kada poboljšava razumevanje interfejsa — pri isticanju važnih promena, potvrđivanju korisničkih akcija ili obezbeđivanju prostorne orijentacije. Motion nije vizuelni ukras.</p>
              <p style="${BODY}">2. Suptilnost</p>
              <p style="${BODY_LAST}">Animacije su brze, lake i ne odvlače pažnju od sadržaja. Efekti poput prekomerne elastike, bounca ili prevelikih transformacija izbegavaju se, osim kada postoji opravdan UX razlog.</p>
            </div>
          </div>
        </div>

        <!-- Motion Patterns pill — node 6380:2600/2601
             ONE pill · TWO states on click · 560ms Smart animate
             State 1 "Subtle":       bg #1c2530, dot 40×40 LEFT  (left:8,  top:12)
             State 2 "Yet Effective": bg #303c49, dot 48×48 RIGHT (left:calc(100%-56px), top:8)
             Dot:   cubic-bezier(1, 0.75, 0.25, 1.22) — spring/overshoot
             BG+text: cubic-bezier(1, 0.97, 0.2, 1)    — snappy
        -->
        <div style="display:flex;align-items:center;justify-content:center;padding:var(--spacing-5xl,40px) 0;width:100%;">
          <div
            @click="active = !active"
            :style="{
              position: 'relative',
              flex: '1',
              height: '64px',
              borderRadius: '9999px',
              background: active ? '#303c49' : '#1c2530',
              boxShadow: '0 4px 42px rgba(99, 15, 255, 0.25)',
              overflow: 'hidden',
              boxSizing: 'border-box',
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'background 560ms cubic-bezier(1, 0.97, 0.2, 1)',
            }"
          >
            <div :style="{
              position: 'absolute',
              left: active ? 'calc(100% - 56px)' : '8px',
              top: active ? '8px' : '12px',
              width: active ? '48px' : '40px',
              height: active ? '48px' : '40px',
              borderRadius: '9999px',
              background: '#630fff',
              transition: 'left 560ms cubic-bezier(1, 0.75, 0.25, 1.22), top 560ms cubic-bezier(1, 0.75, 0.25, 1.22), width 560ms cubic-bezier(1, 0.75, 0.25, 1.22), height 560ms cubic-bezier(1, 0.75, 0.25, 1.22)',
            }"></div>
            <p :style="{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)', margin: '0', zIndex: '1',
              fontSize: 'var(--typography-font-size-paragraph-sm, 14px)',
              fontWeight: 'var(--font-weight-secondary)', fontFamily: 'var(--proxima-font-family, Proxima Nova)',
              lineHeight: 'var(--typography-line-height-paragraph-sm, 20px)',
              color: '#f2f6f9', whiteSpace: 'nowrap', pointerEvents: 'none',
              opacity: active ? '0' : '1',
              transition: 'opacity 180ms ease',
            }">Subtle</p>
            <p :style="{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)', margin: '0', zIndex: '1',
              fontSize: 'var(--typography-font-size-paragraph-sm, 14px)',
              fontWeight: 'var(--font-weight-secondary)', fontFamily: 'var(--proxima-font-family, Proxima Nova)',
              lineHeight: 'var(--typography-line-height-paragraph-sm, 20px)',
              color: '#cce2ed', whiteSpace: 'nowrap', pointerEvents: 'none',
              opacity: active ? '1' : '0',
              transition: 'opacity 180ms ease 250ms',
            }">Yet Effective</p>
          </div>
        </div>

        <!-- Copy Block 2 — node 6380:2602 · h:816px -->
        <div style="display:flex;flex-direction:column;align-items:flex-start;width:100%;">
          <div style="display:flex;flex-direction:column;gap:var(--spacing-2xl,16px);align-items:flex-start;width:100%;">
            <div style="flex:1;min-width:0;word-break:break-word;line-height:0;">
              <p style="${BODY}">3. Doslednost</p>
              <p style="${BODY}">Svi elementi interfejsa koriste ista motion pravila. Identican tip tranzicije treba da se ponaša identično u svim komponentama i svim delovima proizvoda. Doslednost gradi poverenje i predvidljivost.</p>
              <p style="${BODY}">4. Prostorna Orijentacija</p>
              <p style="${BODY}">Motion treba da pomogne korisniku da razume gde se element pojavio, gde odlazi i kako se sadržaj menja. Prostorne tranzicije treba da prate logiku hijerarhije i strukture interfejsa.</p>
              <p style="${BODY}">5. Performanse</p>
              <p style="${BODY}">Animacije moraju biti prikazane glatko i bez degradacije performansi. Koristimo transformacije (translate, scale, opacity) jer su performativnije od animiranja layout-a. Motion ne sme da utiče na responsivnost ili osećaj brzine sistema.</p>
              <p style="${BODY}">6. Umerenost</p>
              <p style="${BODY}">Motion treba da bude diskretan i efikasan. Korisnik ne sme da čeka animacije. Tranzicije su kratke i jasne, bez nepotrebnih sekvenciranja ili višestrukih efekata u istoj akciji.</p>
              <p style="${BODY}">7. Predvidivost</p>
              <p style="${BODY}">Korisnik treba da intuitivno razume šta se dešava i zašto. Izbegavaju se iznenadne ili neočekivane animacije. Motion treba da jača mentalni model korisnika, a ne da ga narušava.</p>
              <p style="${BODY}">8. Poštovanje korisničkih preferenci</p>
              <p style="${BODY_LAST}">Kada je aktiviran "reduced motion" ili ekvivalentna sistemska opcija, sve animacije se pojednostavljuju. Eliminisane su velike translacije, rotacije i složene sekvence, a zadržavaju se jedino minimalne radnje poput kratkih fade promena.</p>
            </div>
          </div>
        </div>

        <!-- Copy Block 3 — node 6380:2604 · pt:64px · h:244px -->
        <div style="display:flex;flex-direction:column;align-items:flex-start;padding-top:64px;width:100%;">
          <div style="display:flex;flex-direction:column;gap:var(--spacing-2xl,16px);align-items:flex-start;width:100%;">
            <div style="display:flex;flex-direction:column;gap:0;align-items:flex-start;width:100%;">
              <div style="display:flex;align-items:center;width:100%;">
                <p style="margin:0;flex-shrink:0;font-size:var(--typography-display-md-display-md,32px);font-weight:var(--font-weight-secondary);font-family:var(--font-family-primary);line-height:40px;letter-spacing:-0.24px;color:#f9f8f8;white-space:nowrap;">How not to use</p>
              </div>
            </div>
            <div style="flex:1;min-width:0;word-break:break-word;line-height:0;">
              <p style="${BODY}">Pravila Korišćenja</p>
              <p style="${BODY}">Animiraj samo kada je potrebno</p>
              <p style="${BODY}">Ako motion ne doprinosi razumevanju ili orijentaciji, ne koristi ga. Svaka animacija treba da ima merljiv UX razlog: feedback, state change, appearance, disappearance ili navigaciju.</p>
              <p style="${BODY_LAST}">Jednostavnost pre svega</p>
            </div>
          </div>
        </div>

        <!-- Copy Block 4 — node 6380:2606 · h:416px -->
        <div style="display:flex;flex-direction:column;align-items:flex-start;width:100%;">
          <div style="display:flex;flex-direction:column;gap:var(--spacing-2xl,16px);align-items:flex-start;width:100%;">
            <div style="flex:1;min-width:0;word-break:break-word;line-height:0;">
              <p style="${BODY}">U jednoj interakciji koristi jedan primarni efekat. Kombinovanje fade, scale, translate i shadow animacija može stvarati vizuelnu zbrku. Jednostavnije animacije deluju profesionalnije.</p>
              <p style="${BODY}">Brže je bolje</p>
              <p style="${BODY}">Motion mora biti brz i efikasan. Sve što deluje sporo ili utiče na percepciju performansi treba optimizovati ili ukloniti.</p>
              <p style="${BODY}">Nikada ne animiraj ključni layout</p>
              <p style="${BODY}">Promene dimenzija (width/height) retko treba animirati jer utiču na layout i performanse. Uvek preferiraj transformacije.</p>
              <p style="${BODY}">Zadrži funkcionalnost u fokusu</p>
              <p style="${BODY_LAST}">Motion treba da naglasi funkciju, a ne da zameni UI komunikaciju. Animacija ne sme biti jedini način da se informacija prenese — mora biti u skladu sa statičkim signalima (ikonama, bojom, tekstom).</p>
            </div>
          </div>
        </div>

      </div>
      <!-- end col1 content -->

    </div>
    <!-- end COLUMN 1 -->

    <!-- ══════════════════════════════════════════════════════════════
         COLUMN 2 — Motion Scale  (Figma 6380:2608 · 442×3060px)
         px:24px · content:394px
    ══════════════════════════════════════════════════════════════ -->
    <div class="kzn-motion-column" style="display:flex;flex-direction:column;gap:1px;align-items:flex-start;padding:0 24px;width:442px;flex-shrink:0;box-sizing:border-box;">

      <!-- Header — node 6380:2609 -->
      <div style="display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:16px 0;width:394px;flex-shrink:0;">
        <div style="display:flex;gap:16px;height:93px;align-items:center;width:100%;">
          <div style="width:42px;height:42px;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:var(--violet-200, #825acb);">
            <Icon name="activity" size="xl" style="color:var(--violet-200, #825acb);" />
          </div>
          <p style="margin:0;flex-shrink:0;font-size:32px;font-weight:var(--font-weight-secondary);line-height:38px;color:var(--violet-200, #825acb);white-space:nowrap;">Motion Types</p>
        </div>
      </div>

      <!-- Frame 7 — Motion Types intro + funcional · node 6380:2613 -->
      <div style="display:flex;flex-direction:column;gap:24px;align-items:flex-start;width:394px;">
        <div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start;width:100%;">
          <div style="display:flex;flex-direction:column;gap:0;align-items:flex-start;width:100%;">
            <p style="margin:0;font-size:14px;font-weight:700;font-family:var(--proxima-font-family, 'Proxima Nova');line-height:24px;color:#f9f8f8;white-space:nowrap;">Types and what</p>
            <p style="margin:0;font-size:var(--typography-display-md-display-md,32px);font-weight:var(--font-weight-secondary);font-family:var(--font-family-primary);line-height:40px;letter-spacing:-0.24px;color:#f9f8f8;white-space:nowrap;">What to use</p>
          </div>
          <div style="flex:1;min-width:0;word-break:break-word;line-height:0;">
            <p style="${BODY}">Motion Types</p>
            <p style="${BODY}">Motion u dizajn sistemu zasniva se na jednoj doslednoj animacionoj krivi i standardizovanoj skali trajanja. Cilj ove strukture je da obezbedi jedinstven osećaj kretanja u svim delovima interfejsa — od najmanjih mikrointerakcija do velikih tranzicija layouta.</p>
            <p style="${BODY}">Svi motion patterni u nastavku koriste isti motion curve i pripadaju jednoj od definisanih kategorija trajanja. Ovaj pristup garantuje stabilan, prepoznatljiv i profesionalan look &amp; feel u celom sistemu.</p>
            <p style="${BODY}">Motion Pattern - Funcional</p>
            <p style="${BODY_LAST}">U sistemu koristi se par animacionih krivi koje se primenjuju na sve tipove animacija — fade, slide, scale, state change, overlay i layout tranzicije. Kombinacijom motion pattern + motion duration + motion style tokena dobija se unificirani utisak svih animacija u sistemu.</p>
          </div>
        </div>
        <!-- funcional pill — node 6380:1810
             forward:  560ms cubic-bezier(1, 0.97, 0.2, 1)   snappy
             backward: 240ms cubic-bezier(0.37, 0, 0.63, 1)  Gentle (reset)
        -->
        <div style="${PILL}" @click="activeFuncional = !activeFuncional">
          <div :style="{
            position: 'absolute',
            left: activeFuncional ? 'calc(100% - 56px)' : '8px',
            top: '8px',
            width: '48px',
            height: '48px',
            borderRadius: '9999px',
            background: '#630fff',
            transition: activeFuncional
              ? 'left 560ms cubic-bezier(1, 0.97, 0.2, 1)'
              : 'left 240ms cubic-bezier(0.37, 0, 0.63, 1)',
          }"></div>
          <p style="${PILL_LABEL}" :style="{ opacity: activeFuncional ? 0 : 1, transition: 'opacity 180ms ease' }">cubic-bezier 1, 0.97, 0.2, 1</p>
          <p style="${PILL_LABEL}" :style="{ opacity: activeFuncional ? 1 : 0, color: '#f6b323', transition: activeFuncional ? 'opacity 180ms ease 250ms' : 'opacity 180ms ease' }">Reset</p>
        </div>
      </div>

      <!-- Frame 14 — Expressive · node 6380:2616 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <div style="flex:1;min-width:0;word-break:break-word;line-height:0;width:100%;">
          <p style="${BODY}">Motion Pattern - Expressive</p>
          <p style="${BODY}">Kod naglašenih animacija, elementi se ponašaju za nijansu dinamičnije — završetak pokreta blago prelazi granicu svog viewporta, ostavljajući utisak mekog "preliva" ili vizuelnog izdaha.</p>
          <p style="${BODY_LAST}">Ovaj minimalni overshoot doprinosi utisku da se radnja prirodno i potpuno završila, dok istovremeno zadržava kontrolisan, profesionalan i nenametljiv ton.</p>
        </div>
        <!-- expressive pill — node 6380:1817
             forward:  560ms cubic-bezier(1, 0.75, 0.25, 1.22)  spring/overshoot
             backward: 240ms cubic-bezier(0.37, 0, 0.63, 1)     Gentle (reset)
        -->
        <div style="${PILL}" @click="activeExpressive = !activeExpressive">
          <div :style="{
            position: 'absolute',
            left: activeExpressive ? 'calc(100% - 56px)' : '8px',
            top: '8px',
            width: '48px',
            height: '48px',
            borderRadius: '9999px',
            background: '#630fff',
            transition: activeExpressive
              ? 'left 560ms cubic-bezier(1, 0.75, 0.25, 1.22)'
              : 'left 240ms cubic-bezier(0.37, 0, 0.63, 1)',
          }"></div>
          <p style="${PILL_LABEL}" :style="{ opacity: activeExpressive ? 0 : 1, transition: 'opacity 180ms ease' }">cubic-bezier 1, 0.75, 0.25, 1.22</p>
          <p style="${PILL_LABEL}" :style="{ opacity: activeExpressive ? 1 : 0, color: '#f6b323', transition: activeExpressive ? 'opacity 180ms ease 250ms' : 'opacity 180ms ease' }">Reset</p>
        </div>
      </div>

      <!-- Frame 8 — Fast Duration · node 6380:2619 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <div style="flex:1;min-width:0;word-break:break-word;line-height:0;width:100%;">
          <p style="${BODY}">2.2 Motion Duration</p>
          <p style="${BODY}">Skala trajanja strukturirana je u tri jasno definisana nivoa. Svaki nivo se koristi u zavisnosti od karaktera UI elementa, veličine promene i konteksta interakcije.</p>
          <p style="${BODY_LAST}">Fast Duration</p>
        </div>
        <!-- fast pill — node 6380:1824
             forward:  140ms cubic-bezier(1, 0.97, 0.2, 1)   snappy
             backward: 240ms cubic-bezier(0.37, 0, 0.63, 1)  Gentle (reset)
        -->
        <div style="${PILL}" @click="activeFast = !activeFast">
          <div :style="{
            position: 'absolute',
            left: activeFast ? 'calc(100% - 56px)' : '8px',
            top: '8px',
            width: '48px',
            height: '48px',
            borderRadius: '9999px',
            background: '#630fff',
            transition: activeFast
              ? 'left 140ms cubic-bezier(1, 0.97, 0.2, 1)'
              : 'left 240ms cubic-bezier(0.37, 0, 0.63, 1)',
          }"></div>
          <p style="${PILL_LABEL}" :style="{ opacity: activeFast ? 0 : 1, transition: 'opacity 180ms ease' }">Fast 140ms</p>
          <p style="${PILL_LABEL}" :style="{ opacity: activeFast ? 1 : 0, color: '#f6b323', transition: activeFast ? 'opacity 180ms ease 250ms' : 'opacity 180ms ease' }">Reset</p>
        </div>
      </div>

      <!-- Frame 9 — Medium Duration · node 6380:2622 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <p style="margin:0;font-size:14px;font-weight:500;font-family:var(--font-family-primary);line-height:20px;color:#f2f6f9;">Medium Duration</p>
        <!-- medium pill — node 6380:1831
             forward:  240ms cubic-bezier(1, 0.97, 0.2, 1)   snappy
             backward: 240ms cubic-bezier(0.37, 0, 0.63, 1)  Gentle (reset)
        -->
        <div style="${PILL}" @click="activeMedium = !activeMedium">
          <div :style="{
            position: 'absolute',
            left: activeMedium ? 'calc(100% - 56px)' : '8px',
            top: '8px',
            width: '48px',
            height: '48px',
            borderRadius: '9999px',
            background: '#630fff',
            transition: activeMedium
              ? 'left 240ms cubic-bezier(1, 0.97, 0.2, 1)'
              : 'left 240ms cubic-bezier(0.37, 0, 0.63, 1)',
          }"></div>
          <p style="${PILL_LABEL}" :style="{ opacity: activeMedium ? 0 : 1, transition: 'opacity 180ms ease' }">Medium 240ms</p>
          <p style="${PILL_LABEL}" :style="{ opacity: activeMedium ? 1 : 0, color: '#f6b323', transition: activeMedium ? 'opacity 180ms ease 250ms' : 'opacity 180ms ease' }">Reset</p>
        </div>
      </div>

      <!-- Frame 10 — Slow Duration · node 6380:2625 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <p style="margin:0;font-size:14px;font-weight:400;font-family:var(--font-family-primary);line-height:20px;color:#f2f6f9;">Slow Duration</p>
        <!-- slow pill — node 6380:1838
             forward:  560ms cubic-bezier(1, 0.97, 0.2, 1)   snappy
             backward: 240ms cubic-bezier(0.37, 0, 0.63, 1)  Gentle (reset)
        -->
        <div style="${PILL}" @click="activeSlow = !activeSlow">
          <div :style="{
            position: 'absolute',
            left: activeSlow ? 'calc(100% - 56px)' : '8px',
            top: '8px',
            width: '48px',
            height: '48px',
            borderRadius: '9999px',
            background: '#630fff',
            transition: activeSlow
              ? 'left 560ms cubic-bezier(1, 0.97, 0.2, 1)'
              : 'left 240ms cubic-bezier(0.37, 0, 0.63, 1)',
          }"></div>
          <p style="${PILL_LABEL}" :style="{ opacity: activeSlow ? 0 : 1, transition: 'opacity 180ms ease' }">Slow 560ms</p>
          <p style="${PILL_LABEL}" :style="{ opacity: activeSlow ? 1 : 0, color: '#f6b323', transition: activeSlow ? 'opacity 180ms ease 250ms' : 'opacity 180ms ease' }">Reset</p>
        </div>
      </div>

      <!-- Frame 1 — Fade In · node 6380:2628 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <div style="flex:1;min-width:0;word-break:break-word;line-height:0;width:100%;">
          <p style="${BODY}">2.3 Motion Styles</p>
          <p style="${BODY}">Intro</p>
          <p style="${BODY}">Tipovi animacija koje se koriste za elemente UI-a a potrebno je da prikazu korisniku ulazak elementa u viewport.</p>
          <p style="${BODY_LAST}">Podtip: Fade In</p>
        </div>
        <!-- fade-in pill — node 6380:1845
             dot stays LEFT, opacity 0→1 on forward click
             forward:  560ms cubic-bezier(1, 0.97, 0.2, 1)   snappy
             backward: 240ms cubic-bezier(0.37, 0, 0.63, 1)  Gentle (reset)
        -->
        <div style="${PILL}" @click="activeFadeIn = !activeFadeIn">
          <div :style="{
            position: 'absolute',
            left: '8px',
            top: '8px',
            width: '48px',
            height: '48px',
            borderRadius: '9999px',
            background: '#630fff',
            opacity: activeFadeIn ? '1' : '0',
            transition: activeFadeIn
              ? 'opacity 560ms cubic-bezier(1, 0.97, 0.2, 1)'
              : 'opacity 240ms cubic-bezier(0.37, 0, 0.63, 1)',
          }"></div>
          <p style="${PILL_LABEL}" :style="{ opacity: activeFadeIn ? 0 : 1, transition: 'opacity 180ms ease' }">Fade In</p>
          <p style="${PILL_LABEL}" :style="{ opacity: activeFadeIn ? 1 : 0, color: '#f6b323', transition: activeFadeIn ? 'opacity 180ms ease 250ms' : 'opacity 180ms ease' }">Reset</p>
        </div>
      </div>

      <!-- Frame 4 — Slide In · node 6380:2631 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <p style="margin:0;font-size:14px;font-weight:400;font-family:var(--font-family-primary);line-height:20px;color:#f2f6f9;">Podtip: Slide In</p>
        <!-- slide-in pill — node 6380:1852
             dot starts off-screen left (left:-56px, opacity:0)
             forward:  slides to RIGHT (calc(100%-56px)) + opacity:1
                       560ms cubic-bezier(1, 0.97, 0.2, 1)  snappy
             backward: Instant — no transition, snaps back immediately
        -->
        <div style="${PILL}" @click="activeSlideIn = !activeSlideIn">
          <div :style="{
            position: 'absolute',
            left: activeSlideIn ? 'calc(100% - 56px)' : '-56px',
            top: '8px',
            width: '48px',
            height: '48px',
            borderRadius: '9999px',
            background: '#630fff',
            opacity: activeSlideIn ? '1' : '0',
            transition: activeSlideIn
              ? 'left 560ms cubic-bezier(1, 0.97, 0.2, 1), opacity 560ms cubic-bezier(1, 0.97, 0.2, 1)'
              : 'none',
          }"></div>
          <p style="${PILL_LABEL}" :style="{ opacity: activeSlideIn ? 0 : 1, transition: 'opacity 180ms ease' }">Slide in</p>
          <p style="${PILL_LABEL}" :style="{ opacity: activeSlideIn ? 1 : 0, color: '#f6b323', transition: activeSlideIn ? 'opacity 180ms ease 250ms' : 'opacity 180ms ease' }">Reset</p>
        </div>
      </div>

      <!-- Frame 5 — Scale In · node 6380:2634 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <p style="margin:0;font-size:14px;font-weight:400;font-family:var(--font-family-primary);line-height:20px;color:#f2f6f9;">Podtip: Scale In</p>
        <!-- scale-in pill — node 6380:1859
             dot starts small (43×43, left:8px, top:10px)
             forward:  grows to full size (48×48) AND moves to RIGHT (calc(100%-56px))
                       560ms cubic-bezier(1, 0.97, 0.2, 1)  snappy
             backward: Instant — no transition, snaps back immediately
        -->
        <div style="${PILL}" @click="activeScaleIn = !activeScaleIn">
          <div :style="{
            position: 'absolute',
            left: activeScaleIn ? 'calc(100% - 56px)' : '8px',
            top: activeScaleIn ? '8px' : '10px',
            width: activeScaleIn ? '48px' : '43px',
            height: activeScaleIn ? '48px' : '43px',
            borderRadius: '9999px',
            background: '#630fff',
            transition: activeScaleIn
              ? 'left 560ms cubic-bezier(1, 0.97, 0.2, 1), top 560ms cubic-bezier(1, 0.97, 0.2, 1), width 560ms cubic-bezier(1, 0.97, 0.2, 1), height 560ms cubic-bezier(1, 0.97, 0.2, 1)'
              : 'none',
          }"></div>
          <p style="${PILL_LABEL}" :style="{ opacity: activeScaleIn ? 0 : 1, transition: 'opacity 180ms ease' }">Scale In</p>
          <p style="${PILL_LABEL}" :style="{ opacity: activeScaleIn ? 1 : 0, color: '#f6b323', transition: activeScaleIn ? 'opacity 180ms ease 250ms' : 'opacity 180ms ease' }">Reset</p>
        </div>
      </div>

      <!-- Frame 11 — Fade Out · node 6380:2637 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <div style="flex:1;min-width:0;word-break:break-word;line-height:0;width:100%;">
          <p style="${BODY}">2.3 Animation Styles</p>
          <p style="${BODY}">Outro</p>
          <p style="${BODY}">Tipovi animacija koje se koriste za elemente UI-a a potrebno je da prikazu korisniku izlazak elementa iz viewport-a.</p>
          <p style="${BODY_LAST}">Podtip: Fade Out</p>
        </div>
        <!-- fade-out pill — node 6380:1868
             dot stays LEFT, opacity 1→0 on forward click
             forward:  560ms cubic-bezier(1, 0.97, 0.2, 1)   snappy
             backward: 240ms cubic-bezier(0.37, 0, 0.63, 1)  Gentle (reset)
        -->
        <div style="${PILL}" @click="activeFadeOut = !activeFadeOut">
          <div :style="{
            position: 'absolute',
            left: '8px',
            top: '8px',
            width: '48px',
            height: '48px',
            borderRadius: '9999px',
            background: '#630fff',
            opacity: activeFadeOut ? '0' : '1',
            transition: activeFadeOut
              ? 'opacity 560ms cubic-bezier(1, 0.97, 0.2, 1)'
              : 'opacity 240ms cubic-bezier(0.37, 0, 0.63, 1)',
          }"></div>
          <p style="${PILL_LABEL}" :style="{ opacity: activeFadeOut ? 0 : 1, transition: 'opacity 180ms ease' }">Fade Out</p>
          <p style="${PILL_LABEL}" :style="{ opacity: activeFadeOut ? 1 : 0, color: '#f6b323', transition: activeFadeOut ? 'opacity 180ms ease 250ms' : 'opacity 180ms ease' }">Reset</p>
        </div>
      </div>

      <!-- Frame 12 — Slide Out · node 6380:2640 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <p style="margin:0;font-size:14px;font-weight:500;font-family:var(--font-family-primary);line-height:20px;color:#f2f6f9;">Podtip: Slide Out</p>
        <!-- slide-out pill — node 6380:1875
             dot starts RIGHT (calc(100%-56px)), opacity:1
             forward:  slides off-screen LEFT (-56px) + opacity 1→0
                       560ms cubic-bezier(1, 0.97, 0.2, 1)  snappy
             backward: returns to right + opacity 0→1
                       240ms cubic-bezier(0.37, 0, 0.63, 1)  Gentle (reset)
        -->
        <div style="${PILL}" @click="activeSlideOut = !activeSlideOut">
          <div :style="{
            position: 'absolute',
            left: activeSlideOut ? '-56px' : 'calc(100% - 56px)',
            top: '8px',
            width: '48px',
            height: '48px',
            borderRadius: '9999px',
            background: '#630fff',
            opacity: activeSlideOut ? '0' : '1',
            transition: activeSlideOut
              ? 'left 560ms cubic-bezier(1, 0.97, 0.2, 1), opacity 560ms cubic-bezier(1, 0.97, 0.2, 1)'
              : 'left 240ms cubic-bezier(0.37, 0, 0.63, 1), opacity 240ms cubic-bezier(0.37, 0, 0.63, 1)',
          }"></div>
          <p style="${PILL_LABEL}" :style="{ opacity: activeSlideOut ? 0 : 1, transition: 'opacity 180ms ease' }">Slide Out</p>
          <p style="${PILL_LABEL}" :style="{ opacity: activeSlideOut ? 1 : 0, color: '#f6b323', transition: activeSlideOut ? 'opacity 180ms ease 250ms' : 'opacity 180ms ease' }">Reset</p>
        </div>
      </div>

      <!-- Frame 13 — Scale Out · node 6380:2643 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <p style="margin:0;font-size:14px;font-weight:500;font-family:var(--font-family-primary);line-height:20px;color:#f2f6f9;">Podtip: Scale Out</p>
        <!-- scale-out pill — node 6380:1882
             dot starts RIGHT full size (48×48, left:calc(100%-56px), top:8px)
             forward:  shrinks to 43×43 AND moves to LEFT (left:8px, top:10px)
                       560ms cubic-bezier(1, 0.97, 0.2, 1)  snappy
             backward: Instant — no transition, snaps back immediately
        -->
        <div style="${PILL}" @click="activeScaleOut = !activeScaleOut">
          <div :style="{
            position: 'absolute',
            left: activeScaleOut ? '8px' : 'calc(100% - 56px)',
            top: activeScaleOut ? '10px' : '8px',
            width: activeScaleOut ? '43px' : '48px',
            height: activeScaleOut ? '43px' : '48px',
            borderRadius: '9999px',
            background: '#630fff',
            transition: activeScaleOut
              ? 'left 560ms cubic-bezier(1, 0.97, 0.2, 1), top 560ms cubic-bezier(1, 0.97, 0.2, 1), width 560ms cubic-bezier(1, 0.97, 0.2, 1), height 560ms cubic-bezier(1, 0.97, 0.2, 1)'
              : 'none',
          }"></div>
          <p style="${PILL_LABEL}" :style="{ opacity: activeScaleOut ? 0 : 1, transition: 'opacity 180ms ease' }">Scale Out</p>
          <p style="${PILL_LABEL}" :style="{ opacity: activeScaleOut ? 1 : 0, color: '#f6b323', transition: activeScaleOut ? 'opacity 180ms ease 250ms' : 'opacity 180ms ease' }">Reset</p>
        </div>
      </div>

    </div>
    <!-- end COLUMN 2 -->

    <!-- ══════════════════════════════════════════════════════════════
         COLUMN 3 — Motion Intent  (Figma 6380:2646 · 442×3960px)
         px:24px · content:394px · static layout only, no interactions yet
    ══════════════════════════════════════════════════════════════ -->
    <div class="kzn-motion-column" style="display:flex;flex-direction:column;gap:1px;align-items:flex-start;padding:0 24px;width:442px;flex-shrink:0;box-sizing:border-box;">

      <!-- Header — node 6380:2647 -->
      <div style="display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:16px 0;width:394px;flex-shrink:0;">
        <div style="display:flex;gap:16px;height:93px;align-items:center;width:100%;">
          <div style="width:42px;height:42px;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:var(--violet-200, #825acb);">
            <Icon name="activity" size="xl" style="color:var(--violet-200, #825acb);" />
          </div>
          <p style="margin:0;flex-shrink:0;font-size:32px;font-weight:var(--font-weight-secondary);line-height:38px;color:var(--violet-200, #825acb);white-space:nowrap;">Execution</p>
        </div>
      </div>

      <!-- Frame 1 — Where To Use + Buttons + Button component · node 6380:2651 -->
      <div style="display:flex;flex-direction:column;gap:24px;align-items:flex-start;width:394px;">

        <!-- Copy Block — Where To Use · node 6380:2652 -->
        <div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start;width:100%;">
          <div style="display:flex;flex-direction:column;gap:0;align-items:flex-start;width:100%;">
            <div style="display:flex;align-items:center;">
              <p style="margin:0;font-size:14px;font-weight:var(--font-weight-tertiary,700);font-family:var(--proxima-font-family, 'Proxima Nova');line-height:24px;color:#f9f8f8;white-space:nowrap;">Intent</p>
            </div>
            <div style="display:flex;align-items:center;width:100%;">
              <p style="margin:0;flex-shrink:0;font-size:28px;font-weight:var(--font-weight-secondary);font-family:var(--font-family-primary);line-height:32px;color:#f9f8f8;white-space:nowrap;">Where To Use</p>
            </div>
          </div>
          <div style="flex:1;min-width:0;word-break:break-word;line-height:0;">
            <p style="${BODY}">3. Motion Application by Component Scope</p>
            <p style="${BODY}">Ova sekcija definiše koji tipovi animacija se koriste na različitim nivoima sistema (Atoms → Molecules → Organisms → Templates → Layouts).</p>
            <p style="${BODY}"><br />Svrha je da obezbedi doslednu primenu motion paterna u celom dizajn sistemu.t</p>
            <p style="${BODY}">Najmanje jedinice interfejsa — ikone, dugmad, tekstualni elementi, badge-vi.</p>
            <p style="${BODY}">Opšti principi:</p>
            <ul style="margin:0;padding-left:21px;list-style:disc;">
              <li style="font-size:14px;font-family:var(--font-family-primary);color:#f2f6f9;line-height:20px;">Animacije treba da budu brze, neupadljive i uvek funkcionalne.</li>
              <li style="font-size:14px;font-family:var(--font-family-primary);color:#f2f6f9;line-height:20px;">Koristiti Kombinaciju Curve/Duration/Type iz Sekcije 2</li>
            </ul>
          </div>
        </div>

        <!-- Copy Block — Buttons · node 6380:2653 -->
        <div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start;width:100%;">
          <p style="${HEAD3}">Buttons</p>
          <div style="flex:1;min-width:0;word-break:break-word;line-height:0;width:100%;">
            <p style="${BODY}">Motion : Core<br />Duration: Fast<br />Type: Fade In</p>
            <p style="${BODY_LAST}">Triggers: Hover, Press, State Changes</p>
          </div>
        </div>

        <!-- Button component — node 6380:3049/3050/3052 (Default / hover)
             border:  #be96ff -> #9861ff
             overlay: rgba(0,0,0,0) -> rgba(0,0,0,0.25)  (inset -1.5px, same as border)
             forward:  140ms cubic-bezier(1, 0.97, 0.2, 1)  Fast · Fade In
             backward: Instant — no transition, snaps back immediately
        -->
        <div style="position:relative;width:100%;filter:drop-shadow(0 4px 42px rgba(99,15,255,0.25));box-sizing:border-box;">
          <div
            @click="activeButton = !activeButton"
            :style="{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              height: '56px',
              width: '100%',
              border: activeButton ? '1.5px solid #9861ff' : '1.5px solid #be96ff',
              borderRadius: '9999px',
              padding: '12px 16px',
              boxSizing: 'border-box',
              cursor: 'pointer',
              overflow: 'hidden',
              transition: activeButton ? 'border-color 140ms cubic-bezier(1, 0.97, 0.2, 1)' : 'none',
            }"
          >
            <span style="color:#be96ff;display:inline-flex;position:relative;z-index:1;">
              <Icon name="chevron-right" size="default" />
            </span>
            <p style="margin:0;font-size:18px;font-weight:700;font-family:var(--font-family-primary);line-height:24px;color:#be96ff;white-space:nowrap;position:relative;z-index:1;">Click to see action</p>
            <div :style="{
              position: 'absolute',
              inset: '-1.5px',
              borderRadius: '9999px',
              background: activeButton ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0)',
              transition: activeButton ? 'background 140ms cubic-bezier(1, 0.97, 0.2, 1)' : 'none',
              pointerEvents: 'none',
            }"></div>
          </div>
        </div>

      </div>

      <!-- Frame 7 — Accordions · node 6380:2655 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <div style="flex:1;min-width:0;word-break:break-word;line-height:0;width:100%;">
          <p style="${HEAD3}">Accordions</p>
          <p style="${BODY}">Intro:<br />Motion: Expressive<br />Duration: Medium<br />Style: Slide in</p>
          <p style="${BODY_LAST}">Outro:<br />Motion Curve: Core<br />Duration: Fast<br />Style: Slide Out</p>
        </div>
        <!-- accordions mock — node 8568:472 / 6380:3136 (property1 "2")
             whole card is the hit area — click anywhere to toggle
             row 1: static header
             row 2: TRANSFORMS in place — dot+text -> 4-line content, bg #400e9c -> rgba(64,14,156,0.6), h 40 -> 46px
             row 3: static, always visible
             row 4: NEW row, appears only when expanded
             forward (open):  260ms cubic-bezier(1, 0.75, 0.25, 1.22)  Expressive/Medium · Slide in
             backward (close): 140ms cubic-bezier(1, 0.97, 0.2, 1)     Core/Fast · Slide Out
        -->
        <div @click="activeAccordion = !activeAccordion" style="${CARD_BASE}display:flex;flex-direction:column;gap:4px;align-items:center;padding:24px;cursor:pointer;">
          <!-- row 1 — header, static -->
          <div style="background:#400e9c;display:flex;gap:4px;align-items:center;height:40px;padding:13px 6px;border-radius:8.571px;width:100%;box-sizing:border-box;">
            <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:8px;height:8px;flex-shrink:0;"></div>
            <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-start;">
              <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:70.714px;height:2.143px;"></div>
              <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:35px;height:2px;"></div>
            </div>
          </div>

          <!-- row 2 — dot+text (closed) crossfades -> 4-line content (open)
               each layer genuinely mounts/unmounts via v-if, wrapped in <Transition> —
               per Kaizen motion rules, entering/exiting DOM content uses <Transition>,
               not a permanently-mounted element with bound opacity.
               Container itself (bg/height) is an existing, always-mounted element that
               just changes state, so it keeps a direct CSS transition (no Transition needed).
          -->
          <div :style="{
            position: 'relative',
            height: activeAccordion ? '46px' : '40px',
            padding: '13px 6px',
            borderRadius: '8.571px',
            width: '100%',
            boxSizing: 'border-box',
            background: activeAccordion ? 'rgba(64, 14, 156, 0.6)' : '#400e9c',
            transition: activeAccordion
              ? 'background 260ms cubic-bezier(1, 0.75, 0.25, 1.22), height 260ms cubic-bezier(1, 0.75, 0.25, 1.22)'
              : 'background 140ms cubic-bezier(1, 0.97, 0.2, 1), height 140ms cubic-bezier(1, 0.97, 0.2, 1)',
          }">
            <Transition name="kzn-motion-accordion-content">
              <div v-if="!activeAccordion" style="position:absolute;top:13px;left:6px;display:flex;gap:4px;align-items:flex-start;">
                <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:8px;height:8px;flex-shrink:0;"></div>
                <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-start;">
                  <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:70.714px;height:2.143px;"></div>
                  <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:35px;height:2px;"></div>
                </div>
              </div>
            </Transition>
            <Transition name="kzn-motion-accordion-content">
              <div v-if="activeAccordion" style="position:absolute;top:13px;left:6px;display:flex;flex-direction:column;gap:4px;align-items:flex-start;width:calc(100% - 12px);">
                <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:117px;height:2px;"></div>
                <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:58px;height:2px;"></div>
                <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:117px;height:2px;"></div>
                <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:58px;height:2px;"></div>
              </div>
            </Transition>
          </div>

          <!-- row 3 — static, always visible -->
          <div style="background:#400e9c;display:flex;gap:4px;align-items:center;height:40px;padding:13px 6px;border-radius:8.571px;width:100%;box-sizing:border-box;">
            <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:8px;height:8px;flex-shrink:0;"></div>
            <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-start;">
              <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:70.714px;height:2.143px;"></div>
              <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:35px;height:2px;"></div>
            </div>
          </div>

          <!-- row 4 — new row, genuinely enters/exits the layout via v-if + <Transition> -->
          <Transition name="kzn-motion-accordion-row">
            <div v-if="activeAccordion" style="background:#400e9c;display:flex;gap:4px;align-items:center;height:40px;padding:13px 6px;border-radius:8.571px;width:100%;box-sizing:border-box;">
              <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:8px;height:8px;flex-shrink:0;"></div>
              <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-start;">
                <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:70.714px;height:2.143px;"></div>
                <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:35px;height:2px;"></div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Frame 8 — Page Render · node 6380:2658 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <p style="${HEAD3}">Page Render</p>
        <p style="margin:0;font-size:14px;font-weight:var(--font-weight-primary);font-family:var(--font-family-primary);line-height:20px;color:#f2f6f9;">Motion : Core<br />Duration: Medium<br />Style: Fade in</p>
        <!-- page-render mock — node 6380:3090 (property1 "1"/"2")
             whole card is the hit area — click anywhere to toggle
             neither column ever slides/repositions — both stay in their slot (left/right) and
             simply resize (82px <-> 260px, reciprocally) via a direct CSS width transition.
             The header box genuinely enters/exits above the content box in the LEFT column,
             via v-if + <Transition> (mounts at its natural size — no fake 0px collapse).
             Card content width is a fixed 346px in this story (394 - 2*24 padding), so
             82px narrow + 4px gap + 260px wide = 346px in both states.
             forward & backward: 260ms cubic-bezier(1, 0.97, 0.2, 1)  Smart animate (same curve both ways)
        -->
        <div @click="activePageRender = !activePageRender" style="${CARD_BASE}display:flex;gap:4px;align-items:flex-start;padding:24px;cursor:pointer;">
          <!-- left column — 82px (closed) <-> 260px (open); header enters above content when open -->
          <div :style="{
            display: 'flex',
            flexDirection: 'column',
            height: '178px',
            boxSizing: 'border-box',
            flexShrink: '0',
            width: activePageRender ? '260px' : '82px',
            transition: 'width 260ms cubic-bezier(1, 0.97, 0.2, 1)',
          }">
            <!-- header — always mounted; CSS grid 0fr<->1fr smoothly animates its height
                 (no JS measuring needed) instead of an instant mount/unmount snapping
                 the content box below. This is a state change on an existing element,
                 so it's a direct CSS transition, not a Vue <Transition>. -->
            <div :style="{
              display: 'grid',
              gridTemplateRows: activePageRender ? '1fr' : '0fr',
              marginBottom: activePageRender ? '4px' : '0px',
              opacity: activePageRender ? '1' : '0',
              transition: 'grid-template-rows 260ms cubic-bezier(1, 0.97, 0.2, 1), margin-bottom 260ms cubic-bezier(1, 0.97, 0.2, 1), opacity 260ms cubic-bezier(1, 0.97, 0.2, 1)',
            }">
              <div style="overflow:hidden;min-height:0;">
                <div style="background:#400e9c;display:flex;flex-direction:column;gap:4px;align-items:flex-start;width:100%;box-sizing:border-box;border-radius:8.571px;padding:13px 6px;">
                  <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:23.571px;height:2.143px;flex-shrink:0;"></div>
                  <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:70.714px;height:2.143px;flex-shrink:0;"></div>
                </div>
              </div>
            </div>
            <div style="background:#400e9c;display:flex;flex:1;flex-direction:column;gap:4px;align-items:flex-start;padding:13px 6px;border-radius:8.571px;width:100%;box-sizing:border-box;min-height:0;">
              <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:23.571px;height:2.143px;flex-shrink:0;"></div>
              <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:70.714px;height:2.143px;flex-shrink:0;"></div>
              <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:70.714px;height:2.143px;flex-shrink:0;"></div>
            </div>
          </div>

          <!-- right column — 260px (closed) <-> 82px (open), reciprocal resize -->
          <div :style="{
            background: '#400e9c',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            height: '178px',
            alignItems: 'flex-start',
            padding: '13px 6px',
            borderRadius: '8.571px',
            boxSizing: 'border-box',
            flexShrink: '0',
            width: activePageRender ? '82px' : '260px',
            transition: 'width 260ms cubic-bezier(1, 0.97, 0.2, 1)',
          }">
            <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:23.571px;height:2.143px;flex-shrink:0;"></div>
            <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:70.714px;height:2.143px;flex-shrink:0;"></div>
            <div style="background:#f2f6f9;opacity:0.6;border-radius:8.571px;width:70.714px;height:2.143px;flex-shrink:0;"></div>
          </div>
        </div>
      </div>

      <!-- Frame 4 — Dialogs · node 6380:2661 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <div style="flex:1;min-width:0;word-break:break-word;line-height:0;width:100%;">
          <p style="${HEAD3}">Dialogs</p>
          <p style="${BODY}">Intro:<br />Motion : Expressive<br />Duration: Slow<br />Type: Slide In</p>
          <p style="${BODY_LAST}">Outro:<br />Motion Curve: Core<br />Duration: Fast<br />Type: Slide Out</p>
        </div>
        <!-- dialogs mock — node 8568:500
             rest state (closed) sits center-TOP (top:24px) instead of vertically centered,
             so the open transition has real distance to slide down through — otherwise the
             "Slide In" motion has nowhere to travel and the effect isn't visible.
             forward (open):  560ms cubic-bezier(1, 0.75, 0.25, 1.22)  Expressive/Slow · Slide In
             backward (close): 140ms cubic-bezier(1, 0.97, 0.2, 1)     Core/Fast · Slide Out
             Position change animates transform (translate), not top, per Kaizen motion rules.
        -->
        <div @click="activeDialog = !activeDialog" style="${CARD_BASE}position:relative;cursor:pointer;">
          <div :style="{
            position: 'absolute',
            left: '50%',
            top: '24px',
            width: '111.429px',
            height: '60px',
            opacity: activeDialog ? '1' : '0',
            transform: activeDialog ? 'translate(-50%, 59px)' : 'translate(-50%, 0px)',
            transition: activeDialog
              ? 'transform 560ms cubic-bezier(1, 0.75, 0.25, 1.22), opacity 560ms cubic-bezier(1, 0.75, 0.25, 1.22)'
              : 'transform 140ms cubic-bezier(1, 0.97, 0.2, 1), opacity 140ms cubic-bezier(1, 0.97, 0.2, 1)',
          }">
            <div style="position:absolute;left:0;top:0;background:#400e9c;height:60px;width:111.429px;border-radius:8.571px;"></div>
            <div style="position:absolute;left:83.57px;top:45px;background:#9861ff;height:10.714px;width:23.571px;border-radius:8.571px;"></div>
            <div style="position:absolute;left:55.71px;top:45px;background:#630fff;height:10.714px;width:23.571px;border-radius:8.571px;"></div>
            <div style="position:absolute;left:6.43px;top:25.71px;background:#f2f6f9;opacity:0.6;height:2.143px;width:70.714px;border-radius:8.571px;"></div>
            <div style="position:absolute;left:6.43px;top:19.29px;background:#f2f6f9;opacity:0.6;height:2.143px;width:70.714px;border-radius:8.571px;"></div>
            <div style="position:absolute;left:6.43px;top:12.86px;background:#f2f6f9;opacity:0.6;height:2.143px;width:23.571px;border-radius:8.571px;"></div>
          </div>
        </div>
      </div>

      <!-- Frame 6 — Navigation Rails · node 6380:2664 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <div style="flex:1;min-width:0;word-break:break-word;line-height:0;width:100%;">
          <p style="${HEAD3}">Navigation Rails</p>
          <p style="${BODY}">Intro:<br />Motion : Expressive<br />Duration: Medium<br />Style: Slide In</p>
          <p style="${BODY_LAST}">Outro:<br />Motion Curve: Core<br />Duration: Fast<br />Style: Slide Out</p>
        </div>
        <!-- rails mock — node 8568:514
             rest position sits off-viewport LEFT (left:-23px) so the slide-in has real
             distance to travel — otherwise it'd just fade in place with no visible motion.
             forward (open):  560ms cubic-bezier(1, 0.75, 0.25, 1.22)  Expressive/Slow · Slide In
             backward (close): 140ms cubic-bezier(1, 0.97, 0.2, 1)     Core/Fast · Slide Out
             Position change animates transform (translateX), not left, per Kaizen motion rules.
        -->
        <div @click="activeRails = !activeRails" style="${CARD_BASE}display:flex;align-items:center;padding:0 16px;overflow:hidden;position:relative;cursor:pointer;">
          <div :style="{
            position: 'absolute',
            left: '-23px',
            top: '38.5px',
            width: '23px',
            boxSizing: 'border-box',
            background: '#400e9c',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
            padding: '10px 8px',
            borderRadius: '0 8px 8px 0',
            opacity: activeRails ? '1' : '0',
            transform: activeRails ? 'translateX(23px)' : 'translateX(0px)',
            transition: activeRails
              ? 'transform 560ms cubic-bezier(1, 0.75, 0.25, 1.22), opacity 560ms cubic-bezier(1, 0.75, 0.25, 1.22)'
              : 'transform 140ms cubic-bezier(1, 0.97, 0.2, 1), opacity 140ms cubic-bezier(1, 0.97, 0.2, 1)',
          }">
            <div style="background:#ab99d4;border-radius:8.571px;width:6px;height:6px;flex-shrink:0;"></div>
            <div style="background:#ab99d4;border-radius:8.571px;width:3px;height:1px;flex-shrink:0;"></div>
            <div style="background:#ab99d4;border-radius:8.571px;width:3px;height:23px;flex-shrink:0;"></div>
            <div style="background:#ab99d4;border-radius:8.571px;width:3px;height:1px;flex-shrink:0;"></div>
            <div style="background:#ab99d4;border-radius:8.571px;width:3px;height:58px;flex-shrink:0;"></div>
          </div>
        </div>
      </div>

      <!-- Frame 5 — Sheets · node 6380:2667 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <div style="flex:1;min-width:0;word-break:break-word;line-height:0;width:100%;">
          <p style="${HEAD3}">Sheets</p>
          <p style="${BODY}">Intro:<br />Motion : Expressive<br />Duration: Slow<br />Style: Slide in</p>
          <p style="${BODY_LAST}">Outro:<br />Motion Curve: Core<br />Duration: Fast<br />Style: Slide Out</p>
        </div>
        <!-- sheets mock — node 8568:509
             rest state (closed) sits at a small height (25px, handle only) and opacity:0 —
             so growing taller + fading in on click is actually visible, not just a static handle.
             forward (open):  560ms cubic-bezier(1, 0.75, 0.25, 1.22)  Expressive/Slow · Slide In
             backward (close): 140ms cubic-bezier(1, 0.97, 0.2, 1)     Core/Fast · Slide Out
        -->
        <div @click="activeSheet = !activeSheet" style="${CARD_BASE}display:flex;align-items:flex-end;justify-content:center;overflow:hidden;cursor:pointer;">
          <div :style="{
            position: 'relative',
            width: '100%',
            boxSizing: 'border-box',
            background: '#400e9c',
            borderRadius: '8.571px 8.571px 0 0',
            height: activeSheet ? '140px' : '25px',
            opacity: activeSheet ? '1' : '0',
            transition: activeSheet
              ? 'height 560ms cubic-bezier(1, 0.75, 0.25, 1.22), opacity 560ms cubic-bezier(1, 0.75, 0.25, 1.22)'
              : 'height 140ms cubic-bezier(1, 0.97, 0.2, 1), opacity 140ms cubic-bezier(1, 0.97, 0.2, 1)',
          }">
            <div style="position:absolute;left:45.43%;top:10px;background:#f2f6f9;opacity:0.6;width:9.45%;height:4px;border-radius:8.571px;"></div>
          </div>
        </div>
      </div>

      <!-- Frame 7 — Tooltips · node 6380:2670 · pt:64px -->
      <div style="display:flex;flex-direction:column;gap:24px;padding-top:64px;align-items:flex-start;width:394px;">
        <div style="flex:1;min-width:0;word-break:break-word;line-height:0;width:100%;">
          <p style="${HEAD3}">Tooltips</p>
          <p style="${BODY}">Intro:<br />Motion: Core<br />Duration: Medium<br />Style: Fade in</p>
          <p style="${BODY_LAST}">Outro:<br />Motion: Core<br />Duration: Fast<br />Style: Fade Out</p>
        </div>
        <!-- tooltips mock — node 8568:522
             tooltip box already sits at its final position (centered) — a pure Fade,
             no slide/scale, so it stays put and only opacity changes on click.
             forward (open):  240ms cubic-bezier(1, 0.97, 0.2, 1)  Core/Medium · Fade In
             backward (close): 140ms cubic-bezier(1, 0.97, 0.2, 1) Core/Fast · Fade Out
        -->
        <div @click="activeTooltip = !activeTooltip" style="${CARD_BASE}display:flex;align-items:center;justify-content:center;padding:24px;cursor:pointer;">
          <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
            <div style="background:#f2f6f9;opacity:0.6;width:23.571px;height:2.143px;border-radius:8.571px;"></div>
            <div :style="{
              background: '#400e9c',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              alignItems: 'flex-start',
              padding: '13px 6px',
              borderRadius: '8.571px',
              opacity: activeTooltip ? '1' : '0',
              transition: activeTooltip
                ? 'opacity 240ms cubic-bezier(1, 0.97, 0.2, 1)'
                : 'opacity 140ms cubic-bezier(1, 0.97, 0.2, 1)',
            }">
              <div style="background:#f2f6f9;opacity:0.6;width:23.571px;height:2.143px;border-radius:8.571px;"></div>
              <div style="background:#f2f6f9;opacity:0.6;width:70.714px;height:2.143px;border-radius:8.571px;"></div>
              <div style="background:#f2f6f9;opacity:0.6;width:70.714px;height:2.143px;border-radius:8.571px;"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- end COLUMN 3 -->

  </div>
  <!-- end outer row -->

</div>
    `,
  }),
};
