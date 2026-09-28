export type Lang = 'pt' | 'en';

export const defaultLang: Lang = 'pt';

export const ui = {
	pt: {
		siteTitle: 'T1NG4 — Portfólio',
		nav: {
			projects: 'Projetos',
			stack: 'Stack',
			about: 'Sobre',
			contact: 'Contato',
		},
		hero: {
			badge: 'TGS Community · FiveM',
			greeting: 'Desenvolvedor por trás do',
			name: 'TGS Community',
			headline: 'Scripts, mods, gráficos e apps desktop para FiveM.',
			tagline:
				'Meu projeto principal é o ecossistema TGS — site oficial, launcher, ferramentas para criadores e outros projetos pessoais em paralelo.',
			ctaTgs: 'Visitar tgs.gamer.gd',
			ctaProjects: 'Outros projetos',
			ctaGithub: 'GitHub',
			stats: {
				projects: 'projetos públicos',
				platforms: 'Windows, Web e FiveM',
				languages: 'TypeScript, C#, C++',
			},
		},
		featured: {
			kicker: 'Ecossistema',
			title: 'TGS Community',
			lead: 'O hub do ecossistema — mesmo visual e stack do site oficial.',
		},
		others: {
			kicker: 'Portfólio',
			title: 'Outros projetos',
			lead: 'Extensões, launchers, treino de recoil e trabalhos acadêmicos.',
		},
		stack: {
			kicker: 'Ferramentas',
			title: 'Stack',
			lead: 'Tecnologias que uso no dia a dia, do desktop ao navegador.',
		},
		about: {
			kicker: 'Sobre',
			title: 'Quem está por trás',
			body: 'Sou o T1NG4, desenvolvedor do TGS Community e de ferramentas que orbitam esse ecossistema FiveM. Também publico extensões na Chrome Web Store e apps Windows independentes. Priorizo UX clara, releases estáveis e código que dá para manter.',
		},
		contact: {
			kicker: 'Contato',
			title: 'Vamos conversar',
			body: 'O melhor jeito de me encontrar é pelo GitHub. Respondo issues e discussões nos repositórios.',
			github: 'Perfil no GitHub',
			discord: 'Discord',
		},
		project: {
			viewDetails: 'Ver detalhes',
			viewRepo: 'Ver no GitHub',
			highlights: 'Destaques',
			stack: 'Tecnologias',
			back: 'Voltar aos projetos',
			allProjects: 'Todos os projetos',
		},
		footer: {
			builtWith: 'Feito com Astro',
			langSwitch: 'English',
			rights: 'Todos os direitos reservados',
		},
		meta: {
			description:
				'Portfólio de T1NG4 — aplicativos Windows, extensões Chrome e ferramentas para comunidades.',
		},
	},
	en: {
		siteTitle: 'T1NG4 — Portfolio',
		nav: {
			projects: 'Projects',
			stack: 'Stack',
			about: 'About',
			contact: 'Contact',
		},
		hero: {
			badge: 'TGS Community · FiveM',
			greeting: 'Developer behind',
			name: 'TGS Community',
			headline: 'Scripts, mods, graphics, and desktop apps for FiveM.',
			tagline:
				'My main project is the TGS ecosystem — official site, launcher, creator tooling, plus personal side projects.',
			ctaTgs: 'Visit tgs.gamer.gd',
			ctaProjects: 'Other projects',
			ctaGithub: 'GitHub',
			stats: {
				projects: 'public projects',
				platforms: 'Windows, Web, and FiveM',
				languages: 'TypeScript, C#, C++',
			},
		},
		featured: {
			kicker: 'Ecosystem',
			title: 'TGS Community',
			lead: 'The ecosystem hub — same look and stack as the official site.',
		},
		others: {
			kicker: 'Portfolio',
			title: 'Other projects',
			lead: 'Extensions, launchers, recoil training, and academic work.',
		},
		stack: {
			kicker: 'Tooling',
			title: 'Stack',
			lead: 'Technologies I work with daily, from desktop to browser.',
		},
		about: {
			kicker: 'About',
			title: 'Who is behind it',
			body: 'I am T1NG4, developer of TGS Community and tools around that FiveM ecosystem. I also ship Chrome Web Store extensions and standalone Windows apps. I focus on clear UX, stable releases, and maintainable code.',
		},
		contact: {
			kicker: 'Contact',
			title: 'Let us talk',
			body: 'The best way to reach me is on GitHub. I answer issues and discussions on the repositories.',
			github: 'GitHub profile',
			discord: 'Discord',
		},
		project: {
			viewDetails: 'View details',
			viewRepo: 'View on GitHub',
			highlights: 'Highlights',
			stack: 'Technologies',
			back: 'Back to projects',
			allProjects: 'All projects',
		},
		footer: {
			builtWith: 'Built with Astro',
			langSwitch: 'Português',
			rights: 'All rights reserved',
		},
		meta: {
			description:
				'T1NG4 portfolio — Windows apps, Chrome extensions, and community tooling.',
		},
	},
} as const;

export function getLangFromUrl(url: URL): Lang {
	const [, segment] = url.pathname.split('/');
	return segment === 'en' ? 'en' : 'pt';
}

export function useTranslations(lang: Lang) {
	return ui[lang];
}

export function homePath(lang: Lang): string {
	return lang === 'en' ? '/en' : '/';
}

export function localizedProjectPath(lang: Lang, slug: string): string {
	return lang === 'en' ? `/en/projects/${slug}` : `/projetos/${slug}`;
}
