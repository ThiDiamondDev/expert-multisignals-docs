const SetsContentEnglish = {
  headerTitle: "Sets",
  headerDescription: "Sets",
  title: "Set Files as Start Point",
  pageContent: (
    <p>
      Sets are pre-built configuration files that can be loaded by MetaTrader5
      to be used by Expert Advisors.
      <br />
      <br />
      Please note that the files presented here are ONLY to illustrate how to
      configure the robots and are not configuration suggestions for use in real
      accounts. We recommend that you use this files as an initial basis for
      study, analysis and testing, and that you carry out the adjustments that
      you find suitable for your profile.
    </p>
  ),
  setLinkTitles: {
    MACross: "2 Moving Averages Crossing",
    AOCross: "Awesome Oscillator Crossing",
    Envelopes: "Envelopes Band Touching",
    Engulfing: "Bullish/Bearish Engulfing",
  },
};

const SetsContentPortuguese = {
  headerTitle: "Arquivos Sets",
  headerDescription: "Arquivos Sets",
  title: "Começando com Arquivos de Configurações",
  pageContent: (
    <p>
      Sets são arquivos de configuração salvos que podem ser carregados pelo
      MetaTrader5 para ser usado por um robô trader.
      <br />
      <br />
      Observe que os arquivos apresentados aqui são APENAS para demonstrar como
      configurar o robô e NÃO são sugestões de configuração para uso em contas
      reais nem recomendações de investimento. Recomendamos que você use esses
      arquivos APENAS como base inicial para estudo, análise e teste, e que você
      realize os ajustes que você achar adequado ao seu perfil.
    </p>
  ),
  setLinkTitles: {
    MACross: "Cruzamento 2 Médias Moveis",
    AOCross: "Cruzamento Oscilador Incrível",
    Envelopes: "Tocando Bandas de Envelopes",
    Engulfing: "Engolfo de Alta/Baixa",
  },
};

const SetsContent = {
  "en-US": SetsContentEnglish,
  "pt-BR": SetsContentPortuguese,
};

export default SetsContent;
