export const palavras = {
    "português": "queijo presunto amor estacionamento casa tapete cadeira melancia morango uva igreja carro caminho estrada livro gato cachorro amanhecer vidro porta janela cortina celular chinelo lasanha leite molho planta noite sala cozinha quarto escola professor engenheiro mundo montante lucro juros banco dinheiro personagem desenho amigo ontem teclado aplicativo amora beterraba agricultura sonho maçã caveira amanhã".toUpperCase().split(" "),
    "english": "museum downtown president notebook laptop desk milk apple water chair gorgeous amazing awesome mouse horse lodge proud product device airport kitchen wardrobe wonder abroad plant carpet lasagna rice beans trash backpack luck rain apartment symphony cheap table lonesome whole green yellow fellow travel window fight night lunch dinner couch coach letter world terminal subway number dream skull tomorrow yesterday".toUpperCase().split(" "),
    "español": "pregunta nosotros alumno familia leche padre madre hermano queso jamón desayuno almuerzo cena naranja hablar jugo abuela empresa trabajo universidad ciudad escuela estudiar cuerpo nombre dirección divertido jefe gracias habitación escritorio oficina taller ancho cajón carrera césped esfuerzo sitio jirafa perro coche noche medicina facultad derecho deporte jugador cancha pelota aburrido libro película anteayer".toUpperCase().split(" ")
};

export const palavrasPorTopico = {
    "português": {
        todos: palavras["português"],
        comidas: "queijo presunto pão maçã melancia morango uva lasanha macarrão bolo torta chocolate mel bolacha biscoito salgadinho arroz feijão salada alface carne tomate iogurte maracujá melão aveia granola sorvete açaí",
        animais: "pato minhoca alce peixe tubrão formiga abelha borboleta jacaré crocodilo girafa leão hipopótamo rinoceronte elefante tigre gorila macaco chimpanzé orangotango canguru coala camaleão tamanduá lobo corvo pombo barata urubu tucano águia",
        cores: "azul amarelo verde vermelho cinza preto branco marrom roxo turquesa violeta rosa ciano lilás bege",
        corpoHumano: "braço cabeça perna joelho tornozelo mão antebraço trapézio pescoço coração cérebro coluna vértebra fígado rim pulmão pâncreas artéria olho orelha ouvido tímpano nariz língua boca articulação canela calcanhar queixo",
        educacao: "psicologia pedagogia medicina direito treinamento discurso valores ciência ética biblioteca educador progresso calculadora conselheiro academia universidade faculdade reitoria mentor aprendizado semestre pesquisa leitura palestra computação engenharia",
        profissoes: "policial advogado médico dentista motorista taxista garçom garçonete atriz ator reitor professor vendedor recepcionista secretário prefeito deputado senador jornalista engenheiro desenvolvedor programador estagiário trainee promotor procurador gerente diretor coordenador assistente auxiliar"
    },
    "english": {
        todos: palavras["english"],
        comidas: "cheese ham bread apple watermelon strawberry grape lasagna spaghetti pasta cake pie chocolate honey biscuit cookie crackers rice beans salad lettuce meat tomato yogurt melon oats granola orange lemon candy",
        animais: "duck earthworm moose fish shark ant bee butterfly alligator crocodile giraffe lion hippopotamus rhinoceros elephant tiger gorilla monkey chimpanzee orangutan kangaroo koala chameleon anteater wolf crow pigeon cockroach vulture toucan eagle",
        cores: "blue yellow green red gray black white brown purple turquoise violet pink cyan lilac beige",
        corpoHumano: "arm head leg knee ankle hand forearm trapezius neck heart brain spine vertebra liver kidney lung pancreas artery eye ear nose tongue mouth joint shin heel chin",
        educacao: "psychology pedagogy medicine law training speech values science ethics library educator progress calculator counselor academy university college chancellor mentor learning semester research reading lecture computing engineering",
        profissoes: "police lawyer doctor dentist driver taxi driver waiter waitress actress actor chancellor professor salesman receptionist secretary mayor deputy senator journalist engineer developer programmer intern trainee prosecutor attorney manager director coordinator assistant helper"
    },
    "español": {
        todos: palavras["español"],
        comidas: "queso jamón pan manzana sandía fresa uva lasaña espaguetis pasta pastel tarta chocolate miel galleta galletas arroz frijoles ensalada lechuga carne tomate yogur melón avena granola naranja limón caramelo",
        animales: "pato lombriz alce pez tiburón hormiga abeja mariposa caimán cocodrilo jirafa león hipopótamo rinoceronte elefante tigre gorila mono chimpancé orangután canguro koala camaleón oso hormiguero lobo cuervo paloma cucaracha buitre tucán águila",
        colores: "azul amarillo verde rojo gris negro blanco marrón púrpura morado turquesa violeta rosa cian lila beige",
        cuerpoHumano: "brazo cabeza pierna rodilla tobillo mano antebrazo trapecio cuello corazón cerebro columna vertebral vértebra hígado riñón pulmón páncreas arteria ojo oreja nariz lengua boca articulación espinilla talón barbilla",
        educacao: "psicología pedagogía medicina derecho formación discurso valores ciencia ética biblioteca educador progreso calculadora consejero academia universidad colegio canciller mentor aprendizaje semestre investigación lectura conferencia informática ingeniería",
        profissoes: "policía abogado doctor dentista conductor taxista camarero camarera actriz actor canciller profesor vendedor recepcionista secretario alcalde diputado senador periodista ingeniero desarrollador programador becario aprendiz fiscal abogado gerente director coordinador asistente ayudante"
    }
}