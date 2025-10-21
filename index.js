document.addEventListener('DOMContentLoaded', () => {
  const steps = [
    { id: 1, title: 'Apresentação e Escuta', department: 'Pedagógico', color: '#ff595a', description: ['Apresentação da LABirintar à coordenação pedagógica.', 'Escuta sensível das dores e necessidades da escola.', 'Entendimento do contexto e das oportunidades do contraturno/extracurricular.'] },
    { id: 2, title: 'Encaminhamento das Fichas Pedagógicas', department: 'Pedagógico', color: '#e6cbe4', description: ['Envio das fichas completas e inspiradoras das experiências extracurriculares.', 'Inclusão de imagens e vídeos dos fazeres, para gerar encantamento estético.', 'Escola visualiza a riqueza e diversidade do ecossistema LABirintar.'] },
    { id: 3, title: 'Escolha das Experiências e Planejamento', department: 'Pedagógico-Comercial', color: '#aec5e7', description: ['Escolha conjunta dos fazeres e dos eixos de atuação.', 'Marcação de reunião de fechamento de escopo.', 'Definição da grade extracurricular e possíveis educadores empreendedores.'] },
    { id: 4, title: 'Planejamento de Marketing e Captação', department: 'Comercial', color: '#ffa400', description: ['Criação das ações de encantamento (experimentações, vivências, mostras).', 'Captação de interesse e pré-inscrições das famílias.', 'Planejamento conjunto de comunicação visual e cronograma de ativação.'] },
    { id: 5, title: 'Encontro com o Gestor Financeiro', department: 'Financeiro', color: '#b2dcd5', description: ['Apresentação da automação e tecnologia LABirintar.', 'Demonstração de redução de custos e otimização de processos.', 'Alinhamento do modelo financeiro (splitagem ou fee fixo).'] },
    { id: 6, title: 'Lançamento da Parceria e Comunicação', department: 'Institucional', color: '#ffe9c9', description: ['Divulgação da parceria nas redes sociais e canais internos da escola.', 'Apoio da LABirintar com material rico e peças visuais.', 'Posicionamento simbólico da escola como parceira da Educação Integral.'] },
    { id: 7, title: 'Jam Session e Início das Turmas', department: 'Operacional', color: '#bf917f', description: ['Ação de mobilização e encantamento para famílias e alunos.', 'Formação das turmas e início das experiências.', 'Gesto simbólico de abertura do ciclo letivo LABirintar.'] },
  ];

  // Reorder steps for visual layout to start at a different position and flow clockwise.
  const stepsForDisplay = [
    steps.find(s => s.id === 3),
    steps.find(s => s.id === 4),
    steps.find(s => s.id === 5),
    steps.find(s => s.id === 6),
    steps.find(s => s.id === 7),
    steps.find(s => s.id === 1),
    steps.find(s => s.id === 2),
  ].filter(Boolean); // Use filter to ensure no undefined items if an id is not found.


  const feedbackLoop = {
    title: 'Retroalimentação',
    description: [
      'Registro e documentação pedagógica via plataforma Nina.',
      'Geração de narrativas e indicadores.',
      'Alimentação do flywheel: encantamento → fidelização → expansão → novos convites.',
    ],
  };

  const flowchartContainer = document.getElementById('flowchart-container');
  const feedbackContainer = document.getElementById('feedback-loop-container');

  function getTransform(index, total) {
    const angle = (360 / total) * index;
    const radius = 'clamp(18rem, 30vw, 28rem)';
    return `rotate(${angle}deg) translate(${radius}) rotate(-${angle}deg)`;
  }

  stepsForDisplay.forEach((step, index) => {
    const stepEl = document.createElement('div');
    stepEl.className = 'absolute w-60 h-60 p-5 flex flex-col items-center justify-center rounded-full shadow-lg transition-transform duration-500 hover:scale-110 hover:shadow-2xl hover:z-20';
    stepEl.style.backgroundColor = step.color;
    stepEl.style.transform = getTransform(index, stepsForDisplay.length);

    const descriptionHtml = step.description
      .map(desc => `<p class="text-white text-xs leading-tight mb-1">• ${desc}</p>`)
      .join('');

    stepEl.innerHTML = `
      <div class="text-center">
        <h4 class="font-bold text-lg text-stone-800">${step.title}</h4>
        <p class="text-sm font-semibold text-stone-600">${step.department}</p>
        <div class="absolute inset-0 bg-black bg-opacity-50 rounded-full flex flex-col justify-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
          ${descriptionHtml}
        </div>
      </div>
    `;
    flowchartContainer.appendChild(stepEl);
  });
  
  const feedbackDescriptionHtml = feedbackLoop.description
      .map(desc => `<p class="text-stone-600 text-sm md:text-base mb-1">• ${desc}</p>`)
      .join('');
      
  feedbackContainer.innerHTML = `
    <div class="mt-8 md:mt-0 max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6 border-4 border-stone-200">
      <h3 class="text-2xl font-bold text-stone-700 mb-2">${feedbackLoop.title}</h3>
      ${feedbackDescriptionHtml}
    </div>
  `;
});
