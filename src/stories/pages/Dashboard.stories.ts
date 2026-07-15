/**
 * Pages/Dashboard
 * Figma ref: node 8322-1725 (Kaizen Reworked 3 Lvls)
 *
 * Kompozicija Kaizen komponenti u realnom management UI kontekstu.
 * Svi tokeni su potvrđeni iz get_variable_defs (node 8322-1725):
 *   --surface-default-body     · --surface-default-default-elevated
 *   --text-default-headings    · --text-default-body
 *   --spacing-lg/xl/2xl/3xl    · --border-radius-md
 *   --typography-font-size-*   · --typography-line-height-*
 *   --font-weight-primary/secondary
 */

import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref, computed, defineComponent, h } from "vue";
import Accordion  from "../../components/Accordion/Accordion.vue";
import Badge      from "../../components/Badge/Badge.vue";
import Button     from "../../components/Button/Button.vue";
import Checkbox   from "../../components/Checkbox/Checkbox.vue";
import Chip       from "../../components/Chip/Chip.vue";
import Dialog     from "../../components/Dialog/Dialog.vue";
import Icon       from "../../components/Icon/Icon.vue";
import Radio      from "../../components/Radio/Radio.vue";

// Badge `style` conflicts with Vue's reserved `style` attribute — thin wrapper.
const KznBadge = defineComponent({
  props: {
    s: { type: String, default: "brand" },
    t: { type: String, default: "text"  },
  },
  setup(p, { slots }) {
    return () => h(Badge, { style: p.s, type: p.t }, slots);
  },
});

// ─── Static fixtures ──────────────────────────────────────────────────────────

type TaskStatus = "brand" | "action" | "warrning" | "neutral";

interface Task {
  id:          number;
  title:       string;
  sub:         string;
  category:    string;
  statusLabel: string;
  statusStyle: TaskStatus;
  priority:    "Visok" | "Srednji" | "Nizak";
  checked:     boolean;
}

const INITIAL_TASKS: Task[] = [
  { id:1, title:"Ažuriranje odds-a za Ligu Šampiona",  sub:"Sport / Fudbal",    category:"Aktivni",  statusLabel:"LIVE",     statusStyle:"brand",    priority:"Visok",   checked:true  },
  { id:2, title:"Provjera isplata za vikend",           sub:"Finansije",         category:"Aktivni",  statusLabel:"USKORO",   statusStyle:"action",   priority:"Visok",   checked:false },
  { id:3, title:"KYC verifikacija — 12 naloga",         sub:"Korisnici",         category:"Aktivni",  statusLabel:"PENDING",  statusStyle:"warrning", priority:"Srednji", checked:true  },
  { id:4, title:"Generisanje izvještaja za jul",        sub:"Izvještaji",        category:"Završeni", statusLabel:"GOTOVO",   statusStyle:"neutral",  priority:"Srednji", checked:false },
  { id:5, title:"Audit log za promotivne kodove",       sub:"Marketing",         category:"Aktivni",  statusLabel:"LIVE",     statusStyle:"brand",    priority:"Nizak",   checked:false },
  { id:6, title:"Restart Real-time feed servisa",       sub:"Infrastruktura",    category:"Aktivni",  statusLabel:"HITNO",    statusStyle:"warrning", priority:"Visok",   checked:true  },
];

const NAV = [
  { id:"zadaci",    label:"Zadaci",      sub:"Aktivne stavke",     counter:"18", icon:"activity" as const, open:true,  selected:true  },
  { id:"sport",     label:"Sport",       sub:"Upravljanje eventi",  counter:"284",icon:"activity" as const, open:false, selected:false },
  { id:"tiketi",    label:"Tiketi",      sub:"Otvorene kladionice", counter:"1.2k",icon:"document" as const, open:false, selected:false },
  { id:"korisnici", label:"Korisnici",   sub:"Upravljanje nalozi",  counter:"91", icon:"document" as const, open:false, selected:false },
  { id:"izvjestaji",label:"Izvještaji",  sub:"Analitika i export",  counter:"5",  icon:"document" as const, open:false, selected:false },
];

const CHIPS = ["Sve", "Aktivni", "Završeni", "Hitno", "Moji zadaci"];

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: "Pages/Dashboard",
  tags: [],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Story ────────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Dashboard",
  render: () => ({
    components: { Accordion, KznBadge, Button, Checkbox, Chip, Dialog, Icon, Radio },

    setup() {
      // Filter chips
      const activeChip = ref("Sve");

      // Task list
      const tasks = ref<Task[]>(INITIAL_TASKS.map(t => ({ ...t })));

      const visibleTasks = computed(() =>
        activeChip.value === "Sve"
          ? tasks.value
          : activeChip.value === "Hitno"
            ? tasks.value.filter(t => t.priority === "Visok")
            : activeChip.value === "Moji zadaci"
              ? tasks.value.filter(t => t.checked)
              : tasks.value.filter(t => t.category === activeChip.value)
      );

      const selectedIds    = computed(() => tasks.value.filter(t => t.checked).map(t => t.id));
      const selectedCount  = computed(() => selectedIds.value.length);
      const allVisible     = computed(() => visibleTasks.value.length > 0 && visibleTasks.value.every(t => t.checked));
      const someVisible    = computed(() => visibleTasks.value.some(t => t.checked) && !allVisible.value);

      function toggleAll() {
        const next = !allVisible.value;
        visibleTasks.value.forEach(t => { t.checked = next; });
      }
      function toggleTask(id: number) {
        const t = tasks.value.find(t => t.id === id);
        if (t) t.checked = !t.checked;
      }

      // Sidebar — view radio
      const view = ref<"lista" | "tabla" | "kalendar">("lista");

      // Dialog
      const dialogOpen = ref(false);
      function confirmAction() {
        tasks.value.forEach(t => { if (t.checked) t.checked = false; });
        dialogOpen.value = false;
      }

      return {
        NAV, CHIPS,
        activeChip, tasks, visibleTasks,
        selectedCount, allVisible, someVisible,
        toggleAll, toggleTask,
        view,
        dialogOpen, confirmAction, selectedIds,
      };
    },

    template: `
<div style="
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--surface-default-body);
  font-family: var(--font-family-primary);
  color: var(--text-default-body);
  box-sizing: border-box;
">

  <!-- ══════════════════════════════════════════════════════════════════════
       TOPBAR
  ═══════════════════════════════════════════════════════════════════════ -->
  <header style="
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    padding: 0 var(--spacing-4xl);
    border-bottom: var(--border-width-1) solid var(--border-default-default);
    flex-shrink: 0;
    gap: var(--spacing-3xl);
  ">

    <!-- Left: wordmark + page label -->
    <div style="display:flex;align-items:center;gap:var(--spacing-3xl);">
      <span style="
        font-size: var(--typography-font-size-h6);
        font-weight: var(--font-weight-secondary);
        line-height: var(--typography-line-height-h6);
        color: var(--text-default-headings);
        letter-spacing: -0.02em;
        white-space: nowrap;
      ">Kaizen<span style="color:var(--surface-primary-default);">Sport</span></span>

      <div style="
        width: var(--border-width-1, 1px);
        height: 20px;
        background: var(--border-default-default);
      "></div>

      <div style="display:flex;align-items:center;gap:var(--spacing-lg);">
        <span style="
          font-size: var(--typography-font-size-paragraph-sm);
          color: var(--text-default-label);
        ">Upravljanje</span>
        <KznBadge s="brand" t="text">LIVE</KznBadge>
      </div>
    </div>

    <!-- Right: alerts + CTA -->
    <div style="display:flex;align-items:center;gap:var(--spacing-2xl);">
      <div style="
        display: flex;
        align-items: center;
        gap: var(--spacing-md, 4px);
        padding: var(--spacing-md, 4px) var(--spacing-lg);
        background: var(--surface-default-default-elevated);
        border-radius: var(--border-radius-round, 9999px);
      ">
        <Icon name="activity" size="small" />
        <span style="
          font-size: var(--typography-font-size-paragraph-xs, 12px);
          color: var(--text-default-body);
        ">3 upozorenja</span>
        <KznBadge s="warrning" t="dot"></KznBadge>
      </div>

      <Button type="tertiary" size="sm" :iconLeftShow="false" :iconRightShow="false">
        Izvoz
      </Button>
      <Button type="primary" size="sm" :iconLeftShow="false" :iconRightShow="false">
        + Novi zadatak
      </Button>
    </div>
  </header>

  <!-- ══════════════════════════════════════════════════════════════════════
       BODY: sidebar + main
  ═══════════════════════════════════════════════════════════════════════ -->
  <div style="display:flex;flex:1;overflow:hidden;">

    <!-- ── SIDEBAR ──────────────────────────────────────────────────────── -->
    <aside style="
      width: 256px;
      flex-shrink: 0;
      border-right: var(--border-width-1) solid var(--border-default-default);
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      padding-top: var(--spacing-4xl);
      padding-bottom: var(--spacing-4xl);
    ">

      <!-- Nav label -->
      <p style="
        padding: 0 var(--spacing-3xl) var(--spacing-xl);
        margin: 0;
        font-size: var(--typography-font-size-paragraph-xs, 12px);
        font-weight: var(--font-weight-primary);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--text-default-label);
      ">Navigacija</p>

      <!-- Accordion nav items -->
      <div style="display:flex;flex-direction:column;gap:var(--spacing-md, 4px);">
        <Accordion
          v-for="item in NAV"
          :key="item.id"
          :type="item.open ? 'open' : 'closed'"
          :selected="item.selected"
          :showLeadIcon="true"
          :leadIconName="item.icon"
          :showSubhead="true"
          :showTrailIcon="true"
        >
          {{ item.label }}
          <template #subhead>{{ item.sub }}</template>
          <template #counter>{{ item.counter }}</template>
        </Accordion>
      </div>

      <!-- Divider -->
      <div style="
        margin: var(--spacing-4xl) var(--spacing-3xl);
        height: var(--border-width-1, 1px);
        background: var(--border-default-default);
      "></div>

      <!-- View selector — Radio group -->
      <div style="padding:0 var(--spacing-3xl);display:flex;flex-direction:column;gap:var(--spacing-2xl);">
        <p style="
          margin: 0;
          font-size: var(--typography-font-size-paragraph-xs, 12px);
          font-weight: var(--font-weight-primary);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-default-label);
        ">Prikaz</p>

        <Radio
          size="sm" name="view" value="lista"
          :selection="view === 'lista' ? 'checked' : 'unchecked'"
          :hasLabel="true"
          @update:selection="view = 'lista'"
        >Lista zadataka</Radio>

        <Radio
          size="sm" name="view" value="tabla"
          :selection="view === 'tabla' ? 'checked' : 'unchecked'"
          :hasLabel="true"
          @update:selection="view = 'tabla'"
        >Kanban tabla</Radio>

        <Radio
          size="sm" name="view" value="kalendar"
          :selection="view === 'kalendar' ? 'checked' : 'unchecked'"
          :hasLabel="true"
          @update:selection="view = 'kalendar'"
        >Kalendar</Radio>
      </div>

      <!-- Sidebar footer info -->
      <div style="
        margin-top: auto;
        padding: var(--spacing-3xl);
        margin-left: var(--spacing-3xl);
        margin-right: var(--spacing-3xl);
        margin-top: var(--spacing-4xl);
        background: var(--surface-default-default-elevated);
        border-radius: var(--border-radius-sm, 8px);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
      ">
        <div style="display:flex;align-items:center;gap:var(--spacing-lg);">
          <Icon name="document" size="small" />
          <span style="
            font-size: var(--typography-font-size-paragraph-xs, 12px);
            font-weight: var(--font-weight-secondary);
            color: var(--text-default-headings);
          ">Dnevni izvještaj</span>
        </div>
        <p style="
          margin: 0;
          font-size: var(--typography-font-size-paragraph-xs, 12px);
          color: var(--text-default-label);
          line-height: var(--typography-line-height-paragraph-sm);
        ">Automatski generiše u 23:59</p>
        <KznBadge s="action" t="text">Utorak, 15. jul</KznBadge>
      </div>
    </aside>

    <!-- ── MAIN CONTENT ──────────────────────────────────────────────────── -->
    <main style="
      flex: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    ">

      <!-- Page heading -->
      <div style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--spacing-4xl);
        border-bottom: var(--border-width-1) solid var(--border-default-default);
        gap: var(--spacing-2xl);
        flex-wrap: wrap;
      ">
        <div style="display:flex;align-items:center;gap:var(--spacing-2xl);">
          <h1 style="
            margin: 0;
            font-size: var(--typography-font-size-h6);
            font-weight: var(--font-weight-secondary);
            line-height: var(--typography-line-height-h6);
            color: var(--text-default-headings);
          ">Aktivni zadaci</h1>
          <KznBadge s="neutral" t="text">{{ tasks.length }} ukupno</KznBadge>
        </div>

        <div style="display:flex;align-items:center;gap:var(--spacing-lg);">
          <Icon name="activity" size="small" />
          <span style="
            font-size: var(--typography-font-size-paragraph-xs, 12px);
            color: var(--text-default-label);
          ">Zadnji update: upravo</span>
        </div>
      </div>

      <!-- KPI mini-row -->
      <div style="
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1px;
        background: var(--border-default-default);
        border-bottom: var(--border-width-1) solid var(--border-default-default);
        flex-shrink: 0;
      ">
        <div
          v-for="kpi in [
            { label:'Otvoreni',    value:'12', s:'brand'   },
            { label:'Hitno',       value:'3',  s:'warrning'},
            { label:'Završeni danas', value:'7', s:'action'},
            { label:'Dodijeljeni meni', value:'4', s:'neutral'},
          ]"
          :key="kpi.label"
          style="
            background: var(--surface-default-body);
            padding: var(--spacing-3xl) var(--spacing-4xl);
            display: flex;
            flex-direction: column;
            gap: var(--spacing-lg);
          "
        >
          <span style="
            font-size: var(--typography-font-size-paragraph-xs, 12px);
            color: var(--text-default-label);
          ">{{ kpi.label }}</span>
          <div style="display:flex;align-items:center;gap:var(--spacing-lg);">
            <span style="
              font-size: 28px;
              font-weight: var(--font-weight-secondary);
              line-height: 1;
              color: var(--text-default-headings);
            ">{{ kpi.value }}</span>
            <KznBadge :s="kpi.s" t="dot"></KznBadge>
          </div>
        </div>
      </div>

      <!-- Filter chips -->
      <div style="
        display: flex;
        align-items: center;
        gap: var(--spacing-lg);
        padding: var(--spacing-3xl) var(--spacing-4xl);
        border-bottom: var(--border-width-1) solid var(--border-default-default);
        flex-wrap: wrap;
        flex-shrink: 0;
      ">
        <span style="
          font-size: var(--typography-font-size-paragraph-xs, 12px);
          color: var(--text-default-label);
          margin-right: var(--spacing-md, 4px);
          white-space: nowrap;
        ">Filter:</span>
        <Chip
          v-for="chip in CHIPS"
          :key="chip"
          size="sm"
          :isChecked="activeChip === chip"
          @update:isChecked="activeChip = chip"
        >{{ chip }}</Chip>
      </div>

      <!-- Task list -->
      <div style="flex:1;overflow-y:auto;">

        <!-- Table header -->
        <div style="
          display: grid;
          grid-template-columns: var(--spacing-5xl) 1fr 120px 100px 88px;
          align-items: center;
          gap: var(--spacing-2xl);
          padding: var(--spacing-xl) var(--spacing-4xl);
          border-bottom: var(--border-width-1) solid var(--border-default-default);
          background: var(--surface-default-default-elevated);
          position: sticky;
          top: 0;
          z-index: 1;
        ">
          <Checkbox
            :selection="allVisible ? 'checked' : someVisible ? 'inderteminate' : 'unchecked'"
            size="sm"
            @change="toggleAll"
          />
          <span style="
            font-size: var(--typography-font-size-paragraph-xs, 12px);
            font-weight: var(--font-weight-primary);
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--text-default-label);
          ">Zadatak</span>
          <span style="
            font-size: var(--typography-font-size-paragraph-xs, 12px);
            font-weight: var(--font-weight-primary);
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--text-default-label);
            text-align: center;
          ">Status</span>
          <span style="
            font-size: var(--typography-font-size-paragraph-xs, 12px);
            font-weight: var(--font-weight-primary);
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--text-default-label);
            text-align: center;
          ">Prioritet</span>
          <span></span>
        </div>

        <!-- Task rows -->
        <div
          v-for="(task, i) in visibleTasks"
          :key="task.id"
          :style="{
            display: 'grid',
            gridTemplateColumns: 'var(--spacing-5xl) 1fr 120px 100px 88px',
            alignItems: 'center',
            gap: 'var(--spacing-2xl)',
            padding: 'var(--spacing-2xl) var(--spacing-4xl)',
            borderBottom: i < visibleTasks.length - 1 ? 'var(--border-width-1) solid var(--border-default-default)' : 'none',
            background: task.checked ? 'rgba(40,0,113,0.12)' : 'transparent',
            cursor: 'pointer',
            transition: 'background 150ms ease',
          }"
          @click="toggleTask(task.id)"
        >
          <!-- Checkbox -->
          <div @click.stop>
            <Checkbox
              :selection="task.checked ? 'checked' : 'unchecked'"
              size="sm"
              @change="toggleTask(task.id)"
            />
          </div>

          <!-- Title + sub -->
          <div style="display:flex;flex-direction:column;gap:2px;min-width:0;">
            <span style="
              font-size: var(--typography-font-size-paragraph-sm);
              font-weight: var(--font-weight-secondary);
              color: var(--text-default-headings);
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            ">{{ task.title }}</span>
            <span style="
              font-size: var(--typography-font-size-paragraph-xs, 12px);
              color: var(--text-default-label);
            ">{{ task.sub }}</span>
          </div>

          <!-- Status badge -->
          <div style="display:flex;justify-content:center;" @click.stop>
            <KznBadge :s="task.statusStyle" t="text">{{ task.statusLabel }}</KznBadge>
          </div>

          <!-- Priority badge -->
          <div style="display:flex;justify-content:center;" @click.stop>
            <KznBadge
              :s="task.priority === 'Visok' ? 'warrning' : task.priority === 'Srednji' ? 'action' : 'neutral'"
              t="text"
            >{{ task.priority }}</KznBadge>
          </div>

          <!-- Action -->
          <div @click.stop>
            <Button type="tertiary" size="sm" :iconLeftShow="false" :iconRightShow="false">
              Detalji
            </Button>
          </div>
        </div>

        <!-- Empty state -->
        <div
          v-if="visibleTasks.length === 0"
          style="
            padding: var(--spacing-6xl) var(--spacing-4xl);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--spacing-2xl);
          "
        >
          <Icon name="document" size="lg" />
          <span style="
            font-size: var(--typography-font-size-paragraph-sm);
            color: var(--text-default-label);
          ">Nema zadataka za odabrani filter</span>
        </div>
      </div>

    </main>
  </div>

  <!-- ══════════════════════════════════════════════════════════════════════
       FOOTER — batch action bar
  ═══════════════════════════════════════════════════════════════════════ -->
  <footer style="
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    padding: 0 var(--spacing-4xl);
    border-top: var(--border-width-1) solid var(--border-default-default);
    flex-shrink: 0;
    gap: var(--spacing-3xl);
    background: var(--surface-default-body);
  ">
    <!-- Selection info -->
    <div style="display:flex;align-items:center;gap:var(--spacing-lg);">
      <span style="
        font-size: var(--typography-font-size-paragraph-xs, 12px);
        color: var(--text-default-label);
      ">
        Odabrano:
      </span>
      <span style="
        font-size: var(--typography-font-size-paragraph-sm);
        font-weight: var(--font-weight-secondary);
        color: var(--text-default-headings);
      ">{{ selectedCount }}</span>
      <span style="
        font-size: var(--typography-font-size-paragraph-xs, 12px);
        color: var(--text-default-label);
      ">{{ selectedCount === 1 ? 'zadatak' : selectedCount < 5 ? 'zadatka' : 'zadataka' }}</span>
    </div>

    <!-- Actions -->
    <div style="display:flex;align-items:center;gap:var(--spacing-lg);">
      <Button
        type="tertiary" size="sm"
        :iconLeftShow="false" :iconRightShow="false"
        :disabled="selectedCount === 0"
        @click="tasks.forEach(t => t.checked = false)"
      >Otkaži odabir</Button>

      <Button
        type="primary" size="sm"
        :iconLeftShow="false" :iconRightShow="false"
        :disabled="selectedCount === 0"
        @click="dialogOpen = true"
      >Potvrdi akciju ({{ selectedCount }})</Button>
    </div>
  </footer>

  <!-- ══════════════════════════════════════════════════════════════════════
       DIALOG — confirmation
  ═══════════════════════════════════════════════════════════════════════ -->
  <Transition name="kzn-dialog">
    <Dialog
      v-if="dialogOpen"
      footer-type="stacked"
      size="default"
      :overlay="true"
      @close="dialogOpen = false"
      @confirm="confirmAction"
    >
      <template #header>Potvrdi grupnu akciju</template>
      Označeno je
      <strong style="color:var(--text-default-headings);">{{ selectedCount }}</strong>
      {{ selectedCount === 1 ? 'zadatak' : selectedCount < 5 ? 'zadatka' : 'zadataka' }}.
      Ova akcija će promijeniti njihov status u "Završeno". Radnja se ne može poništiti.
    </Dialog>
  </Transition>

</div>
    `,
  }),
};
