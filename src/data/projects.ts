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
		slug: 'tgs-community',
		repo: 'T1NG4/TGS-Community',
		url: 'https://github.com/T1NG4/TGS-Community',
		externalUrl: 'https://tgs.gamer.gd/',
		externalLabel: { pt: 'Visitar site oficial', en: 'Visit official site' },
		featured: true,
		image: '/tgs/TGS_logo.png',
		accent: '#1a1a1a',
		year: '2025',
		stack: ['JavaScript', 'Node.js', 'FiveM', 'Monorepo'],
		tags: ['fivem', 'ecosystem', 'launcher'],
		title: { pt: 'TGS Community', en: 'TGS Community' },
		kicker: { pt: 'Projeto principal', en: 'Main project' },
		summary: {
			pt: 'Ecossistema para FiveM: scripts, mods, gráficos e apps desktop — hub launcher, pack manager, mod manager e site em tgs.gamer.gd.',
			en: 'FiveM ecosystem: scripts, mods, graphics, and desktop apps — launcher hub, pack manager, mod manager, and site at tgs.gamer.gd.',
		},
		description: {
			pt: 'O TGS Community reúne recursos premium para servidores FiveM e ferramentas Windows distribuídas pelo TGS Launcher. O monorepo concentra o hub de apps, o Pack Manager para resources, o Mod Manager com catálogo, a store e a documentação do ecossistema. O site público apresenta produtos, apps e links para download do launcher.',
			en: 'TGS Community brings premium resources for FiveM servers and Windows tools distributed through TGS Launcher. The monorepo hosts the app hub, the resource Pack Manager, the catalog Mod Manager, the store, and ecosystem documentation. The public site showcases products, apps, and launcher download links.',
		},
		highlights: {
			pt: [
				'Site oficial com catálogo, apps e suporte em tgs.gamer.gd',
				'TGS Launcher para instalar e atualizar os apps do ecossistema',
				'Pack Manager e Mod Manager para criadores e servidores',
				'Comunidade ativa com suporte por ticket e atualizações',
			],
			en: [
				'Official site with catalog, apps, and support at tgs.gamer.gd',
				'TGS Launcher to install and update ecosystem apps',
				'Pack Manager and Mod Manager for creators and servers',
				'Active community with ticket support and updates',
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
		featured: false,
		accent: '#333333',
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
		featured: false,
		accent: '#333333',
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
		slug: 'spray-interception',
		repo: 'T1NG4/TGS-SPRAY-interception-releases',
		url: 'https://github.com/T1NG4/TGS-SPRAY-interception-releases',
		externalUrl:
			'https://github.com/T1NG4/TGS-SPRAY-interception-releases/releases/latest',
		externalLabel: { pt: 'Baixar', en: 'Download' },
		featured: false,
		image: '/projects/spray-interception.jpg',
		accent: '#555555',
		year: '2026',
		stack: ['TypeScript', 'Electron', 'Windows'],
		tags: ['desktop', 'windows', 'training'],
		showReleaseBadges: true,
		title: { pt: 'SPRAY INTERCEPTION', en: 'SPRAY INTERCEPTION' },
		kicker: { pt: 'Treino de recoil · Windows', en: 'Recoil training · Windows' },
		summary: {
			pt: 'Ferramenta de treinamento de recoil para Windows 10/11: perfis por arma, biblioteca configurável e HUD para praticar padrões de spray.',
			en: 'Recoil training tool for Windows 10/11: per-weapon profiles, a configurable library, and a HUD to practice spray patterns.',
		},
		description: {
			pt: 'Aplicativo desktop focado em treinar controle de recoil e consistência de spray. Você configura padrões por arma e zoom, salva perfis e usa um HUD leve para acompanhar a prática. Não lê memória do jogo nem injeta código — o foco é configurar e repetir o treino no seu ritmo, com atualizações pelo GitHub Releases.',
			en: 'Desktop app focused on training recoil control and spray consistency. You configure patterns per weapon and zoom, save profiles, and use a lightweight HUD to support practice. It does not read game memory or inject code — the focus is setting up and repeating training at your own pace, with updates via GitHub Releases.',
		},
		highlights: {
			pt: [
				'Perfis e biblioteca de armas para treinar padrões de spray',
				'Ajustes de timing, rampa e humanização para repetir o mesmo movimento',
				'HUD opcional para acompanhar a sessão de treino',
				'Import/export de configurações entre máquinas',
				'Atualizações automáticas via releases',
			],
			en: [
				'Profiles and weapon library to practice spray patterns',
				'Timing, ramp, and humanization settings to repeat the same movement',
				'Optional HUD to support training sessions',
				'Config import/export across machines',
				'Automatic updates via releases',
			],
		},
	},
	{
		slug: 'tgs-site',
		repo: 'T1NG4/TGS-Site',
		url: 'https://github.com/T1NG4/TGS-Site',
		externalUrl: 'https://tgs.gamer.gd/',
		externalLabel: { pt: 'Ver site', en: 'View site' },
		featured: false,
		accent: '#333333',
		year: '2026',
		stack: ['HTML', 'CSS', 'JavaScript'],
		tags: ['web', 'landing'],
		title: { pt: 'TGS Store (site)', en: 'TGS Store (site)' },
		kicker: { pt: 'Código do site oficial', en: 'Official site source' },
		summary: {
			pt: 'Código-fonte do site tgs.gamer.gd — landing, catálogo filtrável e seções no estilo TGS Store.',
			en: 'Source code for tgs.gamer.gd — landing page, filterable catalog, and TGS Store sections.',
		},
		description: {
			pt: 'Landing page e catálogo da TGS Store construídos sem bundler, organizados por seção com CSS e JS próprios. O catálogo é renderizado por JavaScript a partir de uma fonte de dados única, com filtros por categoria, modal de detalhes e animações de entrada via IntersectionObserver.',
			en: 'TGS Store landing page and catalog built without a bundler, organized per section with dedicated CSS and JS. The catalog is rendered in JavaScript from a single data source, with category filters, a details modal, and entrance animations via IntersectionObserver.',
		},
		highlights: {
			pt: [
				'Mesmo visual do site em produção em tgs.gamer.gd',
				'Arquitetura por seções, sem bundler',
				'Catálogo com filtros e modal de produto',
				'Animações de entrada com IntersectionObserver',
			],
			en: [
				'Same look as the live site at tgs.gamer.gd',
				'Section-based architecture, no bundler',
				'Catalog with filters and product modal',
				'Entrance animations with IntersectionObserver',
			],
		},
	},
	{
		slug: 'c0-4',
		repo: 'T1NG4/C0-4',
		url: 'https://github.com/T1NG4/C0-4',
		featured: false,
		accent: '#666666',
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
