describe('Consulta de encomenda no chat', () => {

  const cenarios = [
    { titulo: 'Deve indicar que a encomenda já foi entregue', codigoDeRastreio: 'PD123456785BR', mensagemFinal: 'Boa notícia! Sua encomenda já foi entregue com sucesso. 🎉 Se precisar de algo mais, é só me chamar!' },
    { titulo: 'Deve indicar que a encomenda está a caminho', codigoDeRastreio: 'BR987654321BR', mensagemFinal: 'A sua encomenda já foi despachada e está a caminho! 🚚 Prazo estimado: 5 dias úteis.' },
    { titulo: 'Deve indicar que a encomenda está em rota de entrega', codigoDeRastreio: 'QW112233445BR', mensagemFinal: 'Ótima notícia! Sua encomenda está em rota de entrega e chega ainda hoje. Fique de olho! 👀📦'}
  ]

  cenarios.forEach( function (cenario) {
    it(cenario.titulo, () => {
  
      cy.abrirChatBot()
  
      cy.verificarMensagem('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
  
      cy.selecionarOpção('Sim, por favor!')
  
      cy.verificarMensagem('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')
  
      cy.enviarMensagem(cenario.codigoDeRastreio)
  
      cy.verificarMensagem(`Confirmando: você informou o código de rastreio ${cenario.codigoDeRastreio}. Está tudo certo?`)
  
      cy.selecionarOpção('Sim, está certo!')
  
      cy.verificarMensagem('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
  
      cy.verificarMensagem(
        cenario.mensagemFinal,
        7000)
    })
  
    it('Deve exibir erro para o código de rastreio não encontrado', () => {
      const codRastreio = 'AB123456789XY'
  
      cy.abrirChatBot()
  
      cy.verificarMensagem('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
  
      cy.selecionarOpção('Sim, por favor!')
  
      cy.verificarMensagem('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')
  
      cy.enviarMensagem(codRastreio)
  
      cy.verificarMensagem(`Confirmando: você informou o código de rastreio ${codRastreio}. Está tudo certo?`)
  
      cy.selecionarOpção('Sim, está certo!')
  
      cy.verificarMensagem('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
  
      cy.verificarMensagem(
        'Hmm... Não encontrei uma encomenda com os dados informados. Vamos tentar de novo?',
        7000)
  
      cy.selecionarOpção('Encerrar atendimento')
  
      cy.verificarMensagem('Obrigado por falar comigo! 😊 Se precisar de mais alguma coisa, é só chamar.')
    })
  })

})
