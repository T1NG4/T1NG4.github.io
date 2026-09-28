export type Localized = { pt: string; en: string };
export type LocalizedList = { pt: string[]; en: string[] };

export type Project = {
	slug: string;
	repo: string;
	url: string;
	externalUrl?: string;
	externalLabel?: Localized;
	featured: boolean;
	image?: string;
	accent: string;
	year: string;
	stack: string[];
	tags: string[];
	showReleaseBadges?: boolean;
	title: Localized;
	kicker: Localized;
	summary: Localized;
	description: Localized;
	highlights: LocalizedList;
};

export const projects: Project[] = [
	{
		slug: 'spray-interception',
		repo: 'T1NG4/TGS-SPRAY-interception-releases',
		url: 'https://github.com/T1NG4/TGS-SPRAY-interception-releases',
		externalUrl:
			'https://github.com/T1NG4/TGS-SPRAY-interception-releases/releases/latest',
		externalLabel: { pt: 'Baixar agora', en: 'Download now' },
		featured: true,
		image: '/projects/spray-interception.jpg',
		accent: '#ff5f6d',
		year: '2026',
		stack: ['TypeScript', 'Electron', 'Windows'],
		tags: ['desktop', 'windows', 'overlay'],
		showReleaseBadges: true,
		title: { pt: 'SPRAY INTERCEPTION', en: 'SPRAY INTERCEPTION' },
		kicker: { pt: 'Aplicativo Windows', en: 'Windows app' },
		summary: {
			pt: 'Utilitário de compensação de recoil para Windows 10/11, com HUD in-game, biblioteca de armas e atualização automática.',
			en: 'Recoil compensation utility for Windows 10/11, with in-game HUD, weapon library, and automatic updates.',
		},
		description: {
			pt: 'Aplicativo desktop que aplica compensação de recoil no cursor com movimento suave e humanizado. Não lê memória do jogo, não injeta código e não altera arquivos — apenas move o mouse via driver de input. Inclui perfis por arma, HUD overlay arrastável, contas Free/Pro e atualização automática pelo GitHub Releases.',
			en: 'Desktop app that applies recoil compensation to the cursor with smooth, humanized movement. It does not read game memory, inject code, or modify files — it only moves the mouse through an input driver. Includes per-weapon profiles, a draggable HUD overlay, Free/Pro accounts, and auto-updates via GitHub Releases.',
		},
		highlights: {
			pt: [
				'Compensação configurável: offset X/Y, intervalo, jitter, rampa e humanização',
				'Biblioteca de armas com mira simples ou híbrida (1x a 4x)',
				'Perfis com slots de primária e secundária, com binds no jogo',
				'HUD overlay in-game com posição arrastável',
				'Rapid Fire, lanterna automática e strobe',
				'Atualizações automáticas e import/export de configurações',
			],
			en: [
				'Configurable compensation: X/Y offset, interval, jitter, ramp, and humanization',
				'Weapon library with simple or hybrid aiming (1x to 4x)',
				'Profiles with primary and secondary slots, bound in-game',
				'Draggable in-game HUD overlay',
				'Rapid Fire, automatic flashlight, and strobe',
				'Automatic updates plus config import/export',
			],
		},
	},
	{
		slug: 'ripper-search',
		repo: 'T1NG4/ripper-search',
		url: 'https://github.com/T1NG4/ripper-search',
		externalUrl:
			'https://chromewebstore.google.com/detail/ripper-search/hnofnogigohohmhnbjokglneeeignolj',
		externalLabel: { pt: 'Instalar extensão', en: 'Install extension' },
		featured: true,
		accent: '#58a6ff',
		year: '2026',
		stack: ['TypeScript', 'Chrome Extension', 'Manifest V3'],
		tags: ['chrome-extension', 'web'],
		title: { pt: 'Ripper Search', en: 'Ripper Search' },
		kicker: { pt: 'Extensão Chrome publicada', en: 'Published Chrome extension' },
		summary: {
			pt: 'Extensão Chrome que busca no fórum Ripper.Store direto de Booth, Gumroad e outras lojas. Disponível na Chrome Web Store.',
			en: 'Chrome extension that searches the Ripper.Store forum straight from Booth, Gumroad, and other storefronts. Available on the Chrome Web Store.',
		},
		description: {
			pt: 'Extensão publicada na Chrome Web Store que integra a busca do fórum Ripper.Store às páginas de produto de lojas como Booth e Gumroad, encurtando o caminho entre encontrar um item e localizar a discussão correspondente. Documentação disponível em seis idiomas.',
			en: 'Extension published on the Chrome Web Store that brings Ripper.Store forum search into product pages of stores like Booth and Gumroad, shortening the path between finding an item and locating the matching discussion. Documentation available in six languages.',
		},
		highlights: {
			pt: [
				'Publicada e mantida na Chrome Web Store',
				'Integração direta com Booth, Gumroad e outras lojas',
				'Documentação em seis idiomas',
				'Guias de uso e política de privacidade dedicados',
			],
			en: [
				'Published and maintained on the Chrome Web Store',
				'Direct integration with Booth, Gumroad, and other stores',
				'Documentation in six languages',
				'Dedicated usage guides and privacy policy',
			],
		},
	},
	{
		slug: 'zgraphic-launcher',
		repo: 'T1NG4/TGS-Zgraphic-releases',
		url: 'https://github.com/T1NG4/TGS-Zgraphic-releases',
		externalUrl: 'https://github.com/T1NG4/TGS-Zgraphic-releases/releases/latest',
		externalLabel: { pt: 'Baixar launcher', en: 'Download launcher' },
		featured: true,
		accent: '#7c5cff',
		year: '2026',
		stack: ['C#', '.NET', 'Windows'],
		tags: ['desktop', 'fivem', 'launcher'],
		showReleaseBadges: true,
		title: { pt: 'Zgraphic Launcher', en: 'Zgraphic Launcher' },
		kicker: { pt: 'Launcher FiveM', en: 'FiveM launcher' },
		summary: {
			pt: 'Launcher de pack gráfico para FiveM em um único executável: instala, valida os mods e entra no servidor, com auto-update.',
			en: 'FiveM graphics pack launcher in a single executable: installs, validates mods, and joins the server, with auto-update.',
		},
		description: {
			pt: 'Launcher distribuído como um único ZgraphicLauncher.exe que baixa e atualiza os gráficos oficiais do pack Zgraphic, valida os mods instalados e entra direto no servidor FiveM. Atualiza a si mesmo automaticamente, sem pastas extras ou instalação manual.',
			en: 'Launcher shipped as a single ZgraphicLauncher.exe that downloads and updates the official Zgraphic graphics pack, validates installed mods, and joins the FiveM server directly. It updates itself automatically, with no extra folders or manual setup.',
		},
		highlights: {
			pt: [
				'Executável único, sem pasta de instalação',
				'Download e atualização automática dos gráficos',
				'Validação dos mods antes de entrar no servidor',
				'Auto-update do próprio launcher',
			],
			en: [
				'Single executable, no install folder needed',
				'Automatic graphics download and updates',
				'Mod validation before joining the server',
				'Self-updating launcher',
			],
		},
	},
	{
		slug: 'tgs-community',
		repo: 'T1NG4/TGS-Community',
		url: 'https://github.com/T1NG4/TGS-Community',
		featured: false,
		accent: '#2dd4bf',
		year: '2026',
		stack: ['JavaScript', 'Node.js', 'Monorepo'],
		tags: ['monorepo', 'fivem'],
		title: { pt: 'TGS Community', en: 'TGS Community' },
		kicker: { pt: 'Monorepo do ecossistema', en: 'Ecosystem monorepo' },
		summary: {
			pt: 'Monorepo do ecossistema TGS para FiveM: launcher hub, pack manager, mod manager, site e base de documentação.',
			en: 'TGS ecosystem monorepo for FiveM: launcher hub, pack manager, mod manager, site, and documentation base.',
		},
		description: {
			pt: 'Monorepo que reúne os aplicativos do ecossistema TGS: o Launcher (hub que instala, atualiza e executa os apps), o Pack Manager para criação e exportação de resources FiveM, o Mod Manager com catálogo e autenticação, a landing page da store e um vault de documentação com fluxos em canvas.',
			en: 'Monorepo gathering the TGS ecosystem apps: the Launcher (a hub that installs, updates, and runs the apps), the Pack Manager for building and exporting FiveM resources, the Mod Manager with catalog and authentication, the store landing page, and a documentation vault with canvas flows.',
		},
		highlights: {
			pt: [
				'Launcher hub para instalar e atualizar os apps do ecossistema',
				'Pack Manager de resources FiveM',
				'Mod Manager com catálogo e autenticação',
				'Documentação estruturada com fluxos em canvas',
			],
			en: [
				'Launcher hub to install and update ecosystem apps',
				'FiveM resource Pack Manager',
				'Mod Manager with catalog and authentication',
				'Structured documentation with canvas flows',
			],
		},
	},
	{
		slug: 'tgs-site',
		repo: 'T1NG4/TGS-Site',
		url: 'https://github.com/T1NG4/TGS-Site',
		featured: false,
		accent: '#f59e0b',
		year: '2026',
		stack: ['HTML', 'CSS', 'JavaScript'],
		tags: ['web', 'landing'],
		title: { pt: 'TGS Store', en: 'TGS Store' },
		kicker: { pt: 'Landing page e catálogo', en: 'Landing page and catalog' },
		summary: {
			pt: 'Site estático da TGS Store em HTML, CSS e JS puros, com catálogo filtrável, modal de produto e animações por scroll.',
			en: 'Static TGS Store site in plain HTML, CSS, and JS, with a filterable catalog, product modal, and scroll animations.',
		},
		description: {
			pt: 'Landing page e catálogo da TGS Store construídos sem bundler, organizados por seção com CSS e JS próprios. O catálogo é renderizado por JavaScript a partir de uma fonte de dados única, com filtros por categoria, modal de detalhes e animações de entrada via IntersectionObserver.',
			en: 'TGS Store landing page and catalog built without a bundler, organized per section with dedicated CSS and JS. The catalog is rendered in JavaScript from a single data source, with category filters, a details modal, and entrance animations via IntersectionObserver.',
		},
		highlights: {
			pt: [
				'Arquitetura por seções, sem bundler',
				'Catálogo renderizado a partir de uma fonte de dados única',
				'Filtros por categoria e modal de produto',
				'Animações de entrada com IntersectionObserver',
			],
			en: [
				'Section-based architecture, no bundler',
				'Catalog rendered from a single data source',
				'Category filters and product modal',
				'Entrance animations with IntersectionObserver',
			],
		},
	},
	{
		slug: 'c0-4',
		repo: 'T1NG4/C0-4',
		url: 'https://github.com/T1NG4/C0-4',
		featured: false,
		accent: '#a3e635',
		year: '2026',
		stack: ['C++17', 'Grafos', 'Make'],
		tags: ['academic', 'algorithms'],
		title: { pt: 'Dicionário em grafo (C0-4)', en: 'Graph dictionary (C0-4)' },
		kicker: { pt: 'Algoritmos III — INATEL', en: 'Algorithms III — INATEL' },
		summary: {
			pt: 'Dicionário de língua fictícia em C++ que relaciona palavras e significados por grafo, com coordenadas em espaço 3D.',
			en: 'Fictional-language dictionary in C++ relating words and meanings through a graph, with 3D space coordinates.',
		},
		description: {
			pt: 'Projeto acadêmico de Algoritmos III que armazena palavras em High Valyrian com significados em português e coordenadas em um espaço 3D de 100x100x100, usando um grafo para relacionar palavras, significados e sinônimos. Inclui cadastro, listagem e geração automática de coordenadas.',
			en: 'Algorithms III academic project storing High Valyrian words with Portuguese meanings and coordinates in a 100x100x100 3D space, using a graph to relate words, meanings, and synonyms. Includes registration, listing, and automatic coordinate generation.',
		},
		highlights: {
			pt: [
				'Grafo de adjacências entre palavras, significados e sinônimos',
				'Coordenadas geradas automaticamente em espaço 3D',
				'Menu interativo com operações dedicadas',
				'Build com g++ (C++17) ou Make',
			],
			en: [
				'Adjacency graph between words, meanings, and synonyms',
				'Automatically generated coordinates in 3D space',
				'Interactive menu with dedicated operations',
				'Build with g++ (C++17) or Make',
			],
		},
	},
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);
