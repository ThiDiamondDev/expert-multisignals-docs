const IndicatorsContentEnglish = {
  headerTitle: "Indicators",
  headerDescription: "Indicators",
  title: "Supported Indicators List",
  pageContent: (
    <p>
      The EA supports the same indicators of MT5, even custom or external
      indicators by just mapping the buffers exposed. The n refers to the bar
      number, where 0 is the current opened candle, 1 means the last closed
      candle... The EA also supports arithmetic operations.
      <br />
      <br />
      The following terms can be used to get market data and make comparations:
    </p>
  ),
};

const IndicatorsContentPortuguese = {
  headerTitle: "Indicadores",
  headerDescription: "Indicadores",
  title: "Indicadores Suportados",
  pageContent: (
    <p>
      O robô trader suporta os mesmos indicadores do Metatrader5, mesmo
      customizados ou externos. Ao chamar o indicador, o parâmetro n refere-se
      ao numero da barra, sendo 0 a vela aberta atualmente, 1 significa a última
      vela fechada, 2 a penúltima.. O robô também oferece suporte a operações
      lógicas e aritméticas entre indicadores.
      <br />
      <br />
      Os seguintes termos podem ser usados para obter dados de mercado e fazer
      comparações:
    </p>
  ),
};

const IndicatorsContent = {
  "en-US": IndicatorsContentEnglish,
  "pt-BR": IndicatorsContentPortuguese,
};

export default IndicatorsContent;
