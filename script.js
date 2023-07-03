function calcular() {
  let dataMenst = new Date(document.getElementById("data").value);
  let dataAtual = new Date();
  let diferenca = Math.abs(dataAtual - dataMenst);
  resultado = Math.round(diferenca / (1000 * 60 * 60 * 24));
  let weeks = Math.round(resultado / 7);

  let fert1 = new Date(dataMenst);
  fert1.setDate(dataMenst.getDate() + 11);
  let fert1Format =
    fert1.getDate() + "/" + (fert1.getMonth() + 1) + "/" + fert1.getFullYear();

  let fert2 = new Date(dataMenst);
  fert2.setDate(dataMenst.getDate() + 21);
  let fert2Format =
    fert2.getDate() + "/" + (fert2.getMonth() + 1) + "/" + fert2.getFullYear();

  let dpp = new Date(dataMenst);    //data provavel do parto
  dpp.setDate(dataMenst.getDate() + 280);
  let dppFormat =
    dpp.getDate() + "/" + (dpp.getMonth() + 1) + "/" + dpp.getFullYear();

  document.getElementById("resultado").textContent = resultado;


  if (resultado >= 1 && resultado <= 6) {
    document.getElementById("resultado").innerHTML =
    "<br><br>Desculpe, não foi possível calcular sua idade gestacional com base na data que indicou.<br><br>Por favor informe uma data anterior a hoje. Se você menstruou hoje, as chances de estar grávida são muito baixas. O seu período fértil é entre o 7º e 14º dia depois da sua última menstruação.";
  }else if (resultado >= 7 || weeks == 2) {
    document.getElementById("resultado").innerHTML =
      "<br><br>PARABÉNS! Você está de " + weeks + " semana(s)!<br>Sua gestação está no primeiro mês. Fase em que o óvulo fecundado se implanta no útero, dando início à divisão das células do embrião e estimulando o corpo da mulher a produzir o hormônio beta-HCG para criar condições do bebê se desenvolver dentro do útero. Nesta fase da gestação, a placenta ainda não está formada, mas o bebê encontra-se envolvido pelo saco gestacional que o protege de infecções ou pancadas e que é responsável por formar a placenta e a bolsa amniótica, estando presente até aproximadamente a 12ª semana de gestação.<br>Ao final do primeiro mês, o tamanho do bebê é cerca de 2 milímetros e o tubo neural que dará origem ao sistema nervoso e cérebro do bebê já está formado.<br>A data provável do parto será " + dppFormat + "!!!!";
  } else if (weeks >= 3 && weeks <= 4) {
    document.getElementById("resultado").innerHTML =
      "<br><br>PARABÉNS! Você está de " + weeks + " semanas!<br>A fecundação deve ter ocorrido entre " + fert1Format + " e " + fert2Format + " .<br>Sua gestação está no primeiro mês. Fase em que o óvulo fecundado se implanta no útero, dando início à divisão das células do embrião e estimulando o corpo da mulher a produzir o hormônio beta-HCG para criar condições do bebê se desenvolver dentro do útero. Nesta fase da gestação, a placenta ainda não está formada, mas o bebê encontra-se envolvido pelo saco gestacional que o protege de infecções ou pancadas e que é responsável por formar a placenta e a bolsa amniótica, estando presente até aproximadamente a 12ª semana de gestação.<br> Ao final do primeiro mês, o tamanho do bebê é cerca de 2 milímetros e o tubo neural que dará origem ao sistema nervoso e cérebro do bebê já está formado.<br>A data provável do parto será " + dppFormat + "!!!!";
  } else if (weeks >= 5 && weeks <= 8) {
    document.getElementById("resultado").innerHTML =
      "<br><br>PARABÉNS! Você está de " + weeks + " semanas!<br>A fecundação deve ter ocorrido entre " + fert1Format + " e " + fert2Format + " .<br>Sua gestação está no segundo mês. O coração do bebê é formado e começa a bater e bombear sangue em ritmo acelerado. Até o final deste mês, outros órgãos, como os pulmões, fígado, intestino e rins, também começam a se formar, assim como os neurônios e os pequenos botões que darão origem aos braços e pernas. O feto ainda é muito pequeno, mede cerca de 13 milímetros no final do 2º mês.<br>Ao final do 2º mês, é possível saber o sexo do bebê através do exame de sexagem fetal, feito através da análise de uma amostra de sangue materno.<br>A data provável do parto será " + dppFormat + "!!!!";
  } else if (weeks >= 9 && weeks <= 13) {
    document.getElementById("resultado").innerHTML =
      "<br><br>PARABÉNS! Você está de " + weeks + " semanas!<br>A fecundação deve ter ocorrido entre " + fert1Format + " e " + fert2Format + " .<br>Sua gestação está no terceiro mês, fim do primeiro trimestre. Este mês da gestação é marcado pela formação de ossos e cartilagens, dos canais auditivos, narinas e cotovelos, já sendo possível o bebê flexionar os braços. Além disso, os órgãos do bebê já estão formados e começam a funcionar, mas continuam a se desenvolver e amadurecer até o final da gravidez. Além disso, os ovários ou os testículos, também já estão completamente formados.<br>Ao final do 3º mês, o bebê mede cerca de 7,4 centímetros e a placenta já está completamente formada.<br>A data provável do parto será " + dppFormat + "!!!!";
  } else if (weeks >= 14 && weeks <= 17) {
    document.getElementById("resultado").innerHTML =
      "<br><br>PARABÉNS! Você está de " + weeks + " semanas!<br>A fecundação deve ter ocorrido entre " + fert1Format + " e " + fert2Format + " .<br>Sua gestação está no quarto mês. Início do 2º trimestre da gestação, e neste mês o bebê começa a engolir o líquido amniótico e a desenvolver os reflexos de sucção e deglutição para a futura amamentação. Além disso, os pulmões estão se desenvolvendo e o bebê já consegue fazer movimentos respiratórios inspirando o líquido amniótico. A pele do bebê é fina e coberta por lanugo, uma fina camada de pêlos que ajuda a regular a temperatura do corpo e, apesar das pálpebras dos olhos estarem fechadas, o bebê já consegue movimentar os olhos de um lado para o outro e nota a diferença entre claridade e escuridão.<br>Ao final do 4º mês, o bebê mede cerca de 13,5 centímetros e pesa cerca de 179 gramas.<br>A data provável do parto será " + dppFormat + "!!!!";
  } else if (weeks >= 18 && weeks <= 22) {
    document.getElementById("resultado").innerHTML =
      "<br><br>PARABÉNS! Você está de " + weeks + " semanas!<br>A fecundação deve ter ocorrido entre " + fert1Format + " e " + fert2Format + " .<br>Sua gestação está no quinto mês. O bebê já tem os ouvidos bem formados, conseguindo escutar os batimentos cardíacos da mãe. Além disso, as tubas uterinas já estão posicionadas no lugar correto, se for uma menina, sendo possível confirmar o sexo do bebê pelo ultrassom morfológico. Nessa fase da gestação, é ainda formada a vérnix caseosa, uma espécie de cobertura branca sobre a pele, que serve como proteção e hidratação da pele, além de prevenir infecções e regular a temperatura do corpo do bebê.<br> Ao final do 5º mês, o bebê mede cerca de 27,4 centímetros, pesa cerca de 476 gramas e seus movimentos já podem ser sentidos pela mulher.<br>A data provável do parto será " + dppFormat + "!!!!";
  } else if (weeks >= 23 && weeks <= 27) {
    document.getElementById("resultado").innerHTML =
      "<br><br>PARABÉNS! Você está de " + weeks + " semanas!<br>A fecundação deve ter ocorrido entre " + fert1Format + " e " + fert2Format + " .<br>Sua gestação está no sexto mês, no final do segundo semestre. Nesse mês, o bebê começa a abrir os olhos, já tem uma rotina de sono e possui um paladar mais desenvolvido. A audição está cada vez mais apurada e o bebê já pode perceber os estímulos externos, respondendo ao toque ou assustando-se com barulhos fortes<br>Ao final do 6º mês, o bebê mede cerca de 34,7 centímetros e pesa cerca de 1,03 Kg.<br>A data provável do parto será " + dppFormat + "!!!!";
  } else if (weeks >= 28 && weeks <= 31) {
    document.getElementById("resultado").innerHTML =
      "<br><br>PARABÉNS! Você está de " + weeks + " semanas!<br>A fecundação deve ter ocorrido entre " + fert1Format + " e " + fert2Format + " .<br>Sua gestação está no sétimo mês. Nesta fase, a cabeça do bebê já está maior e o cérebro está se desenvolvendo e expandindo e, por isso, as necessidades nutricionais do bebê estão cada vez maiores. O bebê se mexe com mais vivacidade, reconhece a voz da mãe e reage aos sons e luz.<br>Ao final do 7º mês, o bebê mede cerca de 40,3 centímetros e pesa cerca de 1,7 Kg.<br>A data provável do parto será " + dppFormat + "!!!!";
  } else if (weeks >= 32 && weeks <= 35) {
    document.getElementById("resultado").innerHTML =
      "<br><br>PARABÉNS! Você está de " + weeks + " semanas!<br>A fecundação deve ter ocorrido entre " + fert1Format + " e " + fert2Format + " .<br>Sua gestação está no oitavo mês. Nesta fase os pulmões do bebê já estão mais desenvolvidos, embora continuem a amadurecer até o final da gestação. No entanto, já produzem o surfactante pulmonar, uma substância que vai auxiliar a troca de oxigênio durante a respiração após o nascimento.<br>Ao final do 8º mês de gestação, o bebê mede cerca de 45,5 centímetros e pesa cerca de 2,5 Kg. Nesta fase, já começa a movimentar a cabeça de um lado para outro, o sistema digestivo já está devidamente formado, os ossos tornam-se cada vez mais fortes, mas neste momento há menos espaço para se movimentar.<br>A data provável do parto será " + dppFormat + "!!!!";
  } else if (weeks >= 36 && weeks <= 42) {
    document.getElementById("resultado").innerHTML =
      "<br><br>PARABÉNS! Você está de " + weeks + " semanas!<br>A fecundação deve ter ocorrido entre " + fert1Format + " e " + fert2Format + " .<br>Sua gestação está no nono mês. Nesta fase da gestação, o bebê continua crescendo e ganhando peso, a pele se encontra mais fina e lisa e o lanugo começa a desaparecer. Até a 37ª semana, a maioria dos bebês já se encontra na posição de nascimento, ou seja, virado de cabeça para baixo.<br>Ao final da 40ª semana de gravidez, o bebê mede cerca de 51,2 centímetros e pesa cerca de  3,5 Kg e o nascimento é considerado um parto a termo. No entanto, é possível que o bebê nasça até a 41ª semana e 6 dias, sendo chamada de termo tardio, ou até as 42 semanas, sendo considerada pós termo.<br>A data provável do parto será " + dppFormat + "!!!!";
  } else {
    document.getElementById("resultado").innerHTML =
      "Não foi possível calcular as semanas. A data da última menstruação deve ter sido digitada de forma incorreta.";
  }
}
