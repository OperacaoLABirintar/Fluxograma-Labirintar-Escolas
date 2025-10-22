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

  const stepsForDisplay = [
    steps.find(s => s.id === 4),
    steps.find(s => s.id === 5),
    steps.find(s => s.id === 6),
    steps.find(s => s.id === 7),
    steps.find(s => s.id === 1),
    steps.find(s => s.id === 2),
    steps.find(s => s.id === 3),
  ].filter(Boolean);

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
  const centerCircle = document.getElementById('center-circle');
  const originalCenterHTML = centerCircle.innerHTML;

  const blobShapes = [
    '67% 33% 58% 42% / 49% 62% 38% 51%',
    '34% 66% 36% 64% / 55% 38% 62% 45%',
    '51% 49% 48% 52% / 63% 50% 50% 37%',
    '33% 67% 68% 32% / 55% 27% 73% 45%',
    '50% 50% 34% 66% / 56% 56% 44% 44%',
    '32% 68% 39% 61% / 58% 61% 39% 42%',
    '61% 39% 63% 37% / 45% 58% 42% 55%',
  ];

  function getTransform(index, total) {
    const angle = (360 / total) * index;
    const baseRadiusVw = 28;
    const radiusVariation = (Math.random() - 0.5) * 6; // +/- 3vw
    const radius = `clamp(9rem, ${baseRadiusVw + radiusVariation}vw, 22rem)`;
    return `rotate(${angle}deg) translate(${radius}) rotate(-${angle}deg)`;
  }

  function renderStaticFeedbackCard() {
    const feedbackDescriptionHtml = feedbackLoop.description
      .map(desc => `<li class="text-stone-600 text-sm md:text-base mb-1 ml-4">${desc}</li>`)
      .join('');

    feedbackContainer.innerHTML = `
      <div class="mt-4 md:mt-0 max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6 border-4 border-stone-200">
        <h3 class="text-2xl font-bold text-stone-700 mb-2">${feedbackLoop.title}</h3>
        <ul class="list-disc list-inside">${feedbackDescriptionHtml}</ul>
      </div>
    `;
  }

  stepsForDisplay.forEach((step, index) => {
    const stepEl = document.createElement('div');
    stepEl.className = 'absolute w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 p-2 text-center flex flex-col items-center justify-center shadow-lg transition-transform transition-opacity duration-300 cursor-pointer';
    stepEl.style.backgroundColor = step.color;
    const originalTransform = getTransform(index, stepsForDisplay.length);
    stepEl.style.transform = originalTransform;
    stepEl.style.borderRadius = blobShapes[index % blobShapes.length];
    stepEl.style.zIndex = '1';
    stepEl.dataset.stepId = step.id;

    stepEl.innerHTML = `
      <div class="text-center">
        <h4 class="font-bold text-sm sm:text-base md:text-lg text-stone-800">${step.title}</h4>
        <p class="text-xs sm:text-sm font-semibold text-stone-600">${step.department}</p>
      </div>
    `;

    stepEl.addEventListener('mouseenter', () => {
      stepEl.style.opacity = '0.6';
      stepEl.style.transform = `${originalTransform} scale(0.95)`;

      const descriptionHtml = step.description
        .map(d => `<li class="text-[10px] sm:text-[11px] md:text-[12px] leading-tight text-stone-700 list-disc ml-4 text-left">${d}</li>`)
        .join('');
      
      centerCircle.style.transform = 'scale(1.4)';
      centerCircle.style.backgroundColor = step.color;
      centerCircle.innerHTML = `
        <div class="p-2 sm:p-4 flex items-center justify-center h-full w-full">
          <ul class="space-y-1">${descriptionHtml}</ul>
        </div>
      `;
    });

    stepEl.addEventListener('mouseleave', () => {
      stepEl.style.opacity = '1';
      stepEl.style.transform = originalTransform;

      centerCircle.style.transform = 'scale(1)';
      centerCircle.style.backgroundColor = 'white';
      centerCircle.innerHTML = originalCenterHTML;
    });
    
    flowchartContainer.appendChild(stepEl);
  });
  
  // Render the static feedback card
  renderStaticFeedbackCard();
});