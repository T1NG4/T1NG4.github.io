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
			badge: 'Disponível para novos projetos',
			greeting: 'Olá, eu sou',
			name: 'T1NG4',
			headline: 'Software desktop e web que as pessoas realmente usam.',
			tagline:
				'Crio aplicativos Windows, extensões de navegador e ferramentas para comunidades — do driver de input ao overlay in-game, do backend ao pixel final.',
			ctaProjects: 'Ver projetos',
			ctaGithub: 'GitHub',
			stats: {
				projects: 'projetos públicos',
				platforms: 'Windows, Web e FiveM',
				languages: 'TypeScript, C#, C++',
			},
		},
		featured: {
			kicker: 'Destaques',
			title: 'Projetos principais',
			lead: 'Aplicações em produção, com usuários reais e atualizações contínuas.',
		},
		others: {
			kicker: 'Mais trabalhos',
			title: 'Outros projetos',
			lead: 'Ecossistemas, sites e projetos acadêmicos que completam o portfólio.',
		},
		stack: {
			kicker: 'Ferramentas',
			title: 'Stack',
			lead: 'Tecnologias que uso no dia a dia, do desktop ao navegador.',
		},
		about: {
			kicker: 'Sobre',
			title: 'Quem está por trás',
			body: 'Construo software que resolve problemas práticos: desde extensões de navegador publicadas na Chrome Web Store até launchers com auto-update e overlays in-game. Gosto de detalhe em UX, código manutenível e projetos que sobrevivem ao primeiro release.',
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
			badge: 'Available for new projects',
			greeting: 'Hi, I am',
			name: 'T1NG4',
			headline: 'Desktop and web software people actually use.',
			tagline:
				'I build Windows apps, browser extensions, and community tooling — from input drivers to in-game overlays, from backend to the final pixel.',
			ctaProjects: 'View projects',
			ctaGithub: 'GitHub',
			stats: {
				projects: 'public projects',
				platforms: 'Windows, Web, and FiveM',
				languages: 'TypeScript, C#, C++',
			},
		},
		featured: {
			kicker: 'Highlights',
			title: 'Featured projects',
			lead: 'Shipped applications with real users and continuous updates.',
		},
		others: {
			kicker: 'More work',
			title: 'Other projects',
			lead: 'Ecosystems, websites, and academic work that round out the portfolio.',
		},
		stack: {
			kicker: 'Tooling',
			title: 'Stack',
			lead: 'Technologies I work with daily, from desktop to browser.',
		},
		about: {
			kicker: 'About',
			title: 'Who is behind it',
			body: 'I build software that solves practical problems: from browser extensions published on the Chrome Web Store to self-updating launchers and in-game overlays. I care about UX detail, maintainable code, and projects that survive their first release.',
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
