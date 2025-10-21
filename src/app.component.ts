import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main
      class="min-h-screen w-full bg-[#f4f0e8] text-[#333] font-sans flex flex-col items-center justify-start p-4 sm:p-8 overflow-hidden"
    >
      <header class="text-center mb-2 md:mb-4">
        <h1
          class="text-3xl md:text-5xl font-bold text-stone-700 tracking-tight"
        >
          Fluxo de Parceria e Produção
        </h1>
        <h2 class="text-xl md:text-2xl text-stone-500">
          LABirintar com Escolas
        </h2>
        <p class="text-md text-stone-500 mt-2">
          (Ciclo de Retroalimentação – da escuta à operação)
        </p>
      </header>

      <div
        class="relative w-[60rem] h-[60rem] flex items-center justify-center scale-75 md:scale-90 lg:scale-100"
      >
        <!-- Center Circle -->
        <div
          class="absolute z-10 flex flex-col items-center justify-center w-64 h-64 bg-white rounded-full shadow-2xl p-4 text-center"
        >
          <h3 class="text-xl font-bold text-stone-800">Parceria Viva</h3>
          <span class="text-3xl font-light text-stone-500">LABirintar</span>
          <span class="text-2xl font-light text-stone-500">↔</span>
          <span class="text-3xl font-light text-stone-500">Escola</span>
        </div>

        <!-- Step Circles -->
        @for (step of steps(); track step.id; let i = $index) {
        <div
          class="absolute w-60 h-60 p-5 flex flex-col items-center justify-center rounded-full shadow-lg transition-transform duration-500 hover:scale-110 hover:shadow-2xl hover:z-20"
          [style.background-color]="step.color"
          [style.transform]="getTransform(i, steps().length)"
        >
          <div class="text-center">
            <h4 class="font-bold text-lg text-stone-800">{{ step.title }}</h4>
            <p class="text-sm font-semibold text-stone-600">
              {{ step.department }}
            </p>
            <div
              class="absolute inset-0 bg-black bg-opacity-50 rounded-full flex flex-col justify-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              @for(desc of step.description; track desc) {
              <p class="text-white text-xs leading-tight mb-1">• {{ desc }}</p>
              }
            </div>
          </div>
        </div>
        }
      </div>

      <!-- Feedback loop card -->
      <div
        class="mt-8 md:mt-0 max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6 border-4 border-stone-200"
      >
        <h3 class="text-2xl font-bold text-stone-700 mb-2">
          {{ feedbackLoop().title }}
        </h3>
        @for(desc of feedbackLoop().description; track desc) {
        <p class="text-stone-600 text-sm md:text-base mb-1">• {{ desc }}</p>
        }
      </div>
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'LABirintar Flowchart';

  steps = signal([
    {
      id: 3,
      title: 'Escolha das Experiências e Planejamento',
      department: 'Pedagógico-Comercial',
      color: '#aec5e7',
      description: [
        'Escolha conjunta dos fazeres e dos eixos de atuação.',
        'Marcação de reunião de fechamento de escopo.',
        'Definição da grade extracurricular e possíveis educadores empreendedores.',
      ],
    },
    {
      id: 4,
      title: 'Planejamento de Marketing e Captação',
      department: 'Comercial',
      color: '#ffa400',
      description: [
        'Criação das ações de encantamento (experimentações, vivências, mostras).',
        'Captação de interesse e pré-inscrições das famílias.',
        'Planejamento conjunto de comunicação visual e cronograma de ativação.',
      ],
    },
    {
      id: 5,
      title: 'Encontro com o Gestor Financeiro',
      department: 'Financeiro',
      color: '#b2dcd5',
      description: [
        'Apresentação da automação e tecnologia LABirintar.',
        'Demonstração de redução de custos e otimização de processos.',
        'Alinhamento do modelo financeiro (splitagem ou fee fixo).',
      ],
    },
    {
      id: 6,
      title: 'Lançamento da Parceria e Comunicação',
      department: 'Institucional',
      color: '#ffe9c9',
      description: [
        'Divulgação da parceria nas redes sociais e canais internos da escola.',
        'Apoio da LABirintar com material rico e peças visuais.',
        'Posicionamento simbólico da escola como parceira da Educação Integral.',
      ],
    },
    {
      id: 7,
      title: 'Jam Session e Início das Turmas',
      department: 'Operacional',
      color: '#bf917f',
      description: [
        'Ação de mobilização e encantamento para famílias e alunos.',
        'Formação das turmas e início das experiências.',
        'Gesto simbólico de abertura do ciclo letivo LABirintar.',
      ],
    },
    {
      id: 1,
      title: 'Apresentação e Escuta',
      department: 'Pedagógico',
      color: '#ff595a',
      description: [
        'Apresentação da LABirintar à coordenação pedagógica.',
        'Escuta sensível das dores e necessidades da escola.',
        'Entendimento do contexto e das oportunidades do contraturno/extracurricular.',
      ],
    },
    {
      id: 2,
      title: 'Encaminhamento das Fichas Pedagógicas',
      department: 'Pedagógico',
      color: '#e6cbe4',
      description: [
        'Envio das fichas completas e inspiradoras das experiências extracurriculares.',
        'Inclusão de imagens e vídeos dos fazeres, para gerar encantamento estético.',
        'Escola visualiza a riqueza e diversidade do ecossistema LABirintar.',
      ],
    },
  ]);

  feedbackLoop = signal({
    title: 'Retroalimentação',
    color: '#f4f0e8',
    description: [
      'Registro e documentação pedagógica via plataforma Nina.',
      'Geração de narrativas e indicadores.',
      'Alimentação do flywheel: encantamento → fidelização → expansão → novos convites.',
    ],
  });

  getTransform(index, total) {
    const angle = (360 / total) * index;
    const radius = 'clamp(18rem, 30vw, 28rem)'; // Responsive radius
    return `rotate(${angle}deg) translate(${radius}) rotate(-${angle}deg)`;
  }
}
