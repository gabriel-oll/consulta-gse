# consulta-gse

## Objetivo do projeto:

### O objetivo do projeto em si é fazer um sistema que irá pesquisar o endereço de IP e irá fazer uma pesquisa na API do Google: GOOGLE CUSTOM SEARCH API.

irei destacar todos os campos em que você deve inserir uma API KEY, para obte-la você deve acessar o site da google cloud platform e se registrar

 [link do GCP](https://console.cloud.google.com/)  

Após realizar o registro crie um projeto, ele ficará vazio e você deve adicionar uma API para funcionar, a interface é intuitiva e no canto esquerdo tem uma opção chamada **APIs e serciços** e dentro dele **biblioteca**, clique nela e será direcionado para as API's disponíveis, selecione duas, a **Maps javascript API** e a **Custom Search API**, ative-as e elas gerarão uma chave de API, guarde pois é um dado sensível.

Siga esses passos e alguns itens entrarão no caminho, primeiro, a API do maps solicitará que você crie uma conta de faturamento, **ALGUMAS OBSERVAÇÕES:** O Google disponibilizará U$300,00 de crédito para que você possa utilizar essa API sem custos, contudo ela é paga e você deve ser sábio em seus testes, pois após a API tem limite de requisições diárias e expira após o período de 90 dias, então veja com sabedoria e não dê refresh em vão, caso contrário só poderá utilizar a API depois de 24 horas.

Após esses preenchimentos você estará apto a ativar as APIS e utilizá-las, crie as credenciais e as insira nos campos destacados da seguinte forma:

**[YOUR GSE API KEY] = Custom search API = app.js(33)**

**[YOUR GSE CX] = Custom search credential = app.js(33)**

**[YOUR GMAPS API KEY] = Maps javascript API = index.html(103)**

### Espero que dê tudo certo e qualuqer bug entre em contato: **gabb.webdev@gmail.com**