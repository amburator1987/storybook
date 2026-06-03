import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { h, ref, defineComponent } from "vue";
import Button   from "../components/Button/Button.vue";
import Badge    from "../components/Badge/Badge.vue";
import ActionList from "../components/ActionList/ActionList.vue";
import Checkbox from "../components/Checkbox/Checkbox.vue";
import Dialog   from "../components/Dialog/Dialog.vue";

// Badge "style" prop conflicts with Vue's reserved style attribute in templates.
// Wrapping Badge in a render-function component so the prop passes correctly.
const KznBadge = defineComponent({
  props: {
    badgeStyle: { type: String, default: "brand" },
    badgeType:  { type: String, default: "text"  },
  },
  setup(props, { slots }) {
    return () => h(Badge, { style: props.badgeStyle, type: props.badgeType }, slots);
  },
});

const meta: Meta = {
  title: "Pages/Dashboard",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Primjer page layout-a koji demonstrira integraciju svih komponenti " +
          "biblioteke (Button, Badge, ActionList, Checkbox, Dialog) u realističnom dashboard prikazu.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Dashboard",
  render: () => ({
    components: { Button, KznBadge, ActionList, Checkbox, Dialog },

    setup() {
      const dialogOpen = ref(false);

      const navItems = [
        { id: "pregled",       label: "Pregled",       sub: "Aktivnosti u realnom vremenu", count: "24",  open: true  },
        { id: "transakcije",   label: "Transakcije",   sub: "Uplate i isplate",             count: "333", open: false },
        { id: "izvjestaji",    label: "Izvještaji",    sub: "Periodični izvještaji",         count: "12",  open: false },
      ];

      const tasks = ref([
        { id: 1, label: "Provjeri izvještaj za oktobar",  state: "checked"   as const, badgeStyle: "warrning" as const },
        { id: 2, label: "Ažuriraj korisničke podatke",    state: "checked"   as const, badgeStyle: null },
        { id: 3, label: "Pregled transakcija za novembar",state: "unchecked" as const, badgeStyle: null },
        { id: 4, label: "Generisanje kvartalnog izvještaja",state:"unchecked"as const, badgeStyle: "action"  as const },
      ]);

      function toggleTask(id: number) {
        const t = tasks.value.find(t => t.id === id);
        if (t) t.state = t.state === "checked" ? "unchecked" : "checked";
      }

      return { dialogOpen, navItems, tasks, toggleTask };
    },

    template: `
      <div style="
        min-height: 100vh;
        background: var(--surface-default-body);
        color: var(--text-default-body);
        font-family: var(--font-family-primary);
        box-sizing: border-box;
      ">

        <!-- ── TOP BAR ─────────────────────────────────────────────── -->
        <header style="
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-2xl) var(--spacing-4xl);
          border-bottom: var(--border-width-1) solid var(--border-default-default);
        ">
          <div style="display:flex;align-items:center;gap:var(--spacing-lg);">
            <span style="
              font-size: var(--typography-font-size-h6);
              font-weight: var(--font-weight-secondary);
              line-height: var(--typography-line-height-h6);
              color: var(--text-default-headings);
            ">Dashboard</span>
            <KznBadge badge-style="brand" badge-type="text">BETA</KznBadge>
          </div>

          <div style="display:flex;align-items:center;gap:var(--spacing-lg);">
            <Button type="tertiary" size="sm" :iconLeftShow="false" :iconRightShow="false">
              Izvoz
            </Button>
            <Button type="primary" size="sm" :iconLeftShow="false" :iconRightShow="false">
              Novi unos
            </Button>
          </div>
        </header>

        <!-- ── MAIN CONTENT ─────────────────────────────────────────── -->
        <main style="padding: var(--spacing-4xl); display:flex; flex-direction:column; gap: var(--spacing-4xl);">

          <!-- ── STATS ROW ───────────────────────────────────────────── -->
          <section>
            <p style="
              font-size: var(--typography-font-size-label);
              font-weight: var(--font-weight-primary);
              letter-spacing: var(--typography-letter-spacing-label);
              text-transform: uppercase;
              color: var(--text-default-label);
              margin: 0 0 var(--spacing-lg) 0;
            ">Pregled</p>

            <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:var(--spacing-lg);">

              <div style="
                background: var(--surface-default-default);
                border-radius: var(--radius-sm);
                padding: var(--spacing-3xl);
                display: flex;
                flex-direction: column;
                gap: var(--spacing-lg);
              ">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span style="font-size:var(--typography-font-size-paragraph-xs);color:var(--text-default-label);">Transakcije danas</span>
                  <KznBadge badge-style="info" badge-type="text">NOVO</KznBadge>
                </div>
                <span style="font-size:var(--typography-font-size-h6);font-weight:var(--font-weight-secondary);color:var(--text-default-headings);">1.284</span>
              </div>

              <div style="
                background: var(--surface-default-default);
                border-radius: var(--radius-sm);
                padding: var(--spacing-3xl);
                display: flex;
                flex-direction: column;
                gap: var(--spacing-lg);
              ">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span style="font-size:var(--typography-font-size-paragraph-xs);color:var(--text-default-label);">Aktivni korisnici</span>
                  <KznBadge badge-style="action" badge-type="text">+12%</KznBadge>
                </div>
                <span style="font-size:var(--typography-font-size-h6);font-weight:var(--font-weight-secondary);color:var(--text-default-headings);">891</span>
              </div>

              <div style="
                background: var(--surface-default-default);
                border-radius: var(--radius-sm);
                padding: var(--spacing-3xl);
                display: flex;
                flex-direction: column;
                gap: var(--spacing-lg);
              ">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span style="font-size:var(--typography-font-size-paragraph-xs);color:var(--text-default-label);">Prihodi (MTD)</span>
                  <KznBadge badge-style="brand" badge-type="text">MTD</KznBadge>
                </div>
                <span style="font-size:var(--typography-font-size-h6);font-weight:var(--font-weight-secondary);color:var(--text-default-headings);">€24.560</span>
              </div>

            </div>
          </section>

          <!-- ── BOTTOM GRID ─────────────────────────────────────────── -->
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--spacing-lg); align-items:start;">

            <!-- ── NAVIGATION ──────────────────────────────────────── -->
            <section>
              <p style="
                font-size: var(--typography-font-size-label);
                font-weight: var(--font-weight-primary);
                letter-spacing: var(--typography-letter-spacing-label);
                text-transform: uppercase;
                color: var(--text-default-label);
                margin: 0 0 var(--spacing-lg) 0;
              ">Navigacija</p>

              <div style="display:flex;flex-direction:column;gap:var(--spacing-md);">
                <ActionList
                  v-for="item in navItems"
                  :key="item.id"
                  :type="item.open ? 'open' : 'closed'"
                  :showLeadIcon="true"
                  :showSubhead="true"
                  :showTrailIcon="true"
                >
                  {{ item.label }}
                  <template #subhead>{{ item.sub }}</template>
                  <template #counter>{{ item.count }}</template>
                </ActionList>
              </div>
            </section>

            <!-- ── TASKS ───────────────────────────────────────────── -->
            <section>
              <p style="
                font-size: var(--typography-font-size-label);
                font-weight: var(--font-weight-primary);
                letter-spacing: var(--typography-letter-spacing-label);
                text-transform: uppercase;
                color: var(--text-default-label);
                margin: 0 0 var(--spacing-lg) 0;
              ">Zadaci</p>

              <div style="
                background: var(--surface-default-default);
                border-radius: var(--radius-sm);
                overflow: hidden;
              ">
                <div
                  v-for="(task, i) in tasks"
                  :key="task.id"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: var(--spacing-2xl) var(--spacing-3xl);
                    cursor: pointer;
                  "
                  :style="i < tasks.length - 1 ? 'border-bottom: var(--border-width-1) solid var(--border-default-default)' : ''"
                  @click="toggleTask(task.id)"
                >
                  <Checkbox :checkbox="task.state" size="md" @change="toggleTask(task.id)">
                    {{ task.label }}
                  </Checkbox>
                  <KznBadge v-if="task.badgeStyle" :badge-style="task.badgeStyle" badge-type="text">
                    {{ task.badgeStyle === 'warrning' ? 'HITNO' : 'TODO' }}
                  </KznBadge>
                </div>
              </div>

              <div style="margin-top: var(--spacing-2xl); display:flex; justify-content:flex-end;">
                <Button
                  type="primary"
                  size="md"
                  :iconLeftShow="false"
                  :iconRightShow="false"
                  @click="dialogOpen = true"
                >
                  Pregledaj detalje
                </Button>
              </div>
            </section>

          </div>
        </main>

        <!-- ── DIALOG ─────────────────────────────────────────────── -->
        <Dialog
          :open="dialogOpen"
          :overlay="true"
          footer-type="Default"
          @close="dialogOpen = false"
          @confirm="dialogOpen = false"
        >
          <template #header>Pregled zadataka</template>
          Završeni zadaci biće arhivirani. Otvoreni zadaci ostaju u listi do sljedećeg pregleda. Da li želiš nastaviti?
        </Dialog>

      </div>
    `,
  }),
};
