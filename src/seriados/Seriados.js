const seriados = [
	{
		id: '1',
		title: 'Sobrenatural',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jJu3CX7poNQ1DWVRsGdyX3VLN3b.jpg',
		sinopse: 'Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho.'
	},
	{
		id: '2',
		title: 'Diários de um Vampiro',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lcGQaSrWkkxGuh0JJqyN2TkuNqb.jpg',
		sinopse: 'Elena tenta sobreviver entre os seres sobrenaturais que vivem em segredo. Ela se apaixona pelo misterioso Stefan, mas o retorno do seu irmão, Damon, ameaça essa paixão.'
	},
	{
		id: '3',
		title: 'Prison Break: Em Busca da Verdade',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6CSxAZPdpeKs1qGszO2g3XaqqHO.jpg',
		sinopse: 'Lincoln Burrows é condenado injustamente à pena de morte. Só lhe resta confiar no irmão Michael Scofield, que executa um plano de fuga e se vê no meio de uma perigosa conspiração.'
	},
	{
		id: '4',
		title: 'O Mentalista',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d1ZcT5tHzUeQ7zgYecOVoWxH9FL.jpg',
		sinopse: 'Patrick Jane é famoso por sua habilidade de alta percepção de tudo que está ao seu redor. Ele já quase foi uma celebridade, alegando ser médium vidente, mas agora admite que fingia ter poderes paranormais. Com sua grande habilidade de observação, Patrick trabalha como consultor independente para as autoridades da Califórnia, resolvendo um número considerável de crimes complicados.'
	},
	{
		id: '5',
		title: 'Os Originais',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/s0EDspmzDpiRCtGHQFjAfxYBeh3.jpg',
		sinopse: 'Klaus é um vampiro disposto a retomar Nova Orleans, cidade construída por sua família séculos atrás. Na missão, ele aprende mais sobre seu passado enquanto alianças são formadas.'
	},
	{
		id: '6',
		title: 'Mindhunter',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/14VZztljOh2jJSbsXvL7lPfY4Hr.jpg',
		sinopse: 'Um agente da Unidade de Crimes em Série do FBI desenvolve avançadas técnicas de psicologia criminal ao perseguir notórios assassinos e estupradores.'
	},
	{
		id: '7',
		title: 'Game of Thrones',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/44rw2cOQrgUthZMhp3eibpXVy9p.jpg',
		sinopse: 'Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra. Num cenário que lembra a Europa medieval, reis, rainhas, cavaleiros e renegados usam todos os meios possíveis em um jogo político pela disputa do Trono de Ferro, o símbolo do poder absoluto.'
	},
	{
		id: '8',
		title: 'O Último Reino',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c03QKlxQWg743GrQGKGrhmVsdVE.jpg',
		sinopse: 'Enquanto Alfredo, o Grande, defende seu reino de invasões nórdicas, Uhtred - um saxão criado por vikings - planeja reivindicar o que é seu por direito.'
	},
	{
		id: '9',
		title: 'Vikings',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oktTNFM8PzdseiK1X0E0XhB6LvP.jpg',
		sinopse: 'Ragnar Lothbrok, um jovem que se considera descendente de Odin, é um guerreiro, fazendeiro e chefe de família. Visionário e sonhando viver diversas aventuras, ele acredita que as riquezas sonhadas por seu povo encontram-se além do mar Báltico. Mas para conseguir conquistá-las ele precisa convencer Earl Haraldson, o líder de seu povo, a permitir que ele e seus guerreiros viagem em direção à Inglaterra.'
	},
	{
		id: '10',
		title: 'Demolidor',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gnL8VPRawuu4hM3Jl6MEwbVVXT9.jpg',
		sinopse: 'Cego desde pequeno, Matt Murdock luta contra a injustiça durante o dia como advogado e à noite nas ruas de Hell’s Kitchen, Nova York.'
	},
	{
		id: '11',
		title: 'Marvel - O Justiceiro',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1nej9lnFyZTlqlaP6XHUEPtVYyX.jpg',
		sinopse: 'O ex-marine Frank Castle só quer punir os criminosos responsáveis pela morte da sua família, mas torna-se alvo de uma conspiração militar.'
	},
	{
		id: '12',
		title: 'The Walking Dead',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qZSUJmUWdkdND1DpQ4bGCraqDxy.jpg',
		sinopse: 'Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos. O desespero por segurança e suprimentos os coloca constantemente à beira da sanidade.'
	},
	{
		id: '14',
		title: 'American Horror Stories',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7pEn2fCFWa8DIwQnxG6Cq7iaKLv.jpg',
		sinopse: 'Uma série de antologias de episódios autônomos que investigam mitos, lendas e tradições de terror.'
	},
	{
		id: '15',
		title: 'Peaky Blinders: Sangue, Apostas e Navalhas',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i0uajcHH9yogXMfDHpOXexIukG9.jpg',
		sinopse: 'Thomas Shelby e seus irmãos retornam a Birmingham depois de servir no exército britânico durante a Primeira Guerra Mundial. Os Peaky Blinders, a gangue na qual Thomas é líder, controlam a cidade de Birmingham. Mas, como as ambições de Shelby se estendem para além de Birmingham, ele planeja construir o império de negócios que criou e impedir qualquer um que atrapalhar.'
	},
	{
		id: '16',
		title: 'Breaking Bad: A Química do Mal',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg',
		sinopse: 'Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.'
	},
	{
		id: '17',
		title: 'La Casa de Papel',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xbWU5kx85MrvWAvlh1jCHXyJk3Z.jpg',
		sinopse: 'Um homem misterioso que atende pelo nome de El Profesor, está planejando o maior assalto do século. A fim de realizar o ambicioso plano ele recruta uma gangue de oito pessoas com certas habilidades que não tem nada a perder. O objetivo é infiltrar na Casa da Moeda, de modo que eles possam imprimir 2,4 bilhões de euros. Para fazer isso eles precisam de onze dias de reclusão, durante o qual eles vão ter que lidar com sessenta e sete reféns e as forças da Polícia de Elite, com cenas de muita ação e planos brilhantes de El Profesor.'
	},
	{
		id: '18',
		title: 'Narcos',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vymSK4vGr33fPSp3RfzyJedYGAI.jpg',
		sinopse: 'A notória série sobre o tráfico é baseada na história real de violência e poder dos cartéis colombianos.'
	},
	{
		id: '19',
		title: 'Smallville: As Aventuras do Superboy',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oVXXF5TqtHXOmJjf7xdO1upq7WE.jpg',
		sinopse: 'Antes da vida como Super-Homem, o jovem Clark Kent encara os problemas da adolescência enquanto aprende a controlar seus poderes e usá-los para proteger a cidade de Smallville.'
	},
	{
		id: '20',
		title: 'Dois Homens e Meio',
		imageURL: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dPCv0RaOj2pRxZcUDOoqXFe7Pqn.jpg',
		sinopse: 'A vida mulherenga do solteirão Charlie é afetada quando seu irmão divorciado e seu sobrinho de língua afiada vão morar com ele.'
	}
]

export default seriados;