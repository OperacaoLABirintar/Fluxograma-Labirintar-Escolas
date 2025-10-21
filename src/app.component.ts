
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface FlowStep {
  id: number;
  title: string;
  department: string;
  color: string;
  description: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'LABirintar Flowchart';

  steps = signal<FlowStep[]>([
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

  getTransform(index: number, total: number): string {
    const angle = (360 / total) * index;
    const radius = 'clamp(18rem, 30vw, 28rem)'; // Responsive radius
    return `rotate(${angle}deg) translate(${radius}) rotate(-${angle}deg)`;
  }
}
