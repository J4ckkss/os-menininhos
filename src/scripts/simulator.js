export const initSimulator = () => {
  const container = document.querySelector('.simulator-container');
  if (!container) return;

  const projectTypeCards = document.querySelectorAll('[data-group="type"]');
  const serviceScopeCards = document.querySelectorAll('[data-group="scope"]');
  const deadlineCards = document.querySelectorAll('[data-group="deadline"]');

  const summaryType = document.getElementById('summary-type');
  const summaryScope = document.getElementById('summary-scope');
  const summaryDeadline = document.getElementById('summary-deadline');
  const whatsappBtn = document.getElementById('simulator-whatsapp-btn');

  let selectedState = {
    type: 'Landing Page de Alta Conversão',
    scope: 'Criação Completa',
    deadline: 'Padrão (15 a 20 dias)',
  };

  const updateSummary = () => {
    if (summaryType) summaryType.textContent = selectedState.type;
    if (summaryScope) summaryScope.textContent = selectedState.scope;
    if (summaryDeadline) summaryDeadline.textContent = selectedState.deadline;

    if (whatsappBtn) {
      const msg = encodeURIComponent(
        `Olá, equipe dos Menininhos! Fiz uma simulação de projeto pelo site:\n\n` +
        `🎯 *Tipo:* ${selectedState.type}\n` +
        `🛠️ *Escopo:* ${selectedState.scope}\n` +
        `⏱️ *Prazo Desejado:* ${selectedState.deadline}\n\n` +
        `Gostaria de trocar uma ideia e alinhar o orçamento!`
      );
      whatsappBtn.href = `https://wa.me/5511999999999?text=${msg}`;
    }
  };

  const bindGroup = (cards, key) => {
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        cards.forEach((c) => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedState[key] = card.getAttribute('data-value') || card.querySelector('h4')?.textContent || '';
        updateSummary();
      });
    });
  };

  bindGroup(projectTypeCards, 'type');
  bindGroup(serviceScopeCards, 'scope');
  bindGroup(deadlineCards, 'deadline');

  updateSummary();
};
