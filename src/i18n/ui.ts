export type Lang = 'pt' | 'en';

export const defaultLang: Lang = 'pt';

export const ui = {
	pt: {
		siteTitle: 'T1NG4 — Portfólio',
		nav: {
			home: 'Início',
			about: 'Sobre',
			projects: 'Projetos',
			contact: 'Contato',
		},
		hero: {
			greeting: 'Olá, eu sou',
			name: 'T1NG4',
			tagline:
				'Desenvolvedor de extensões Chrome, ferramentas desktop e projetos no ecossistema FiveM.',
			ctaSite: 'Ver projetos',
			ctaGithub: 'GitHub',
		},
		about: {
			title: 'Sobre',
			body:
				'Construo software que resolve problemas práticos: desde extensões de navegador até launchers e recursos para comunidades. Código aberto quando faz sentido; foco em UX clara e manutenção simples.',
		},
		projects: {
			title: 'Projetos em destaque',
			viewRepo: 'Ver repositório',
		},
		contact: {
			title: 'Contato',
			body: 'O melhor jeito de me encontrar é pelo GitHub. Links sociais podem ser adicionados aqui.',
			github: 'Perfil no GitHub',
			email: 'E-mail',
			emailPlaceholder: 'seu-email@exemplo.com',
		},
		footer: {
			builtWith: 'Feito com Astro',
			langSwitch: 'English',
		},
		meta: {
			description:
				'Portfólio de T1NG4 — extensões Chrome, ferramentas desktop e projetos open source.',
		},
	},
	en: {
		siteTitle: 'T1NG4 — Portfolio',
		nav: {
			home: 'Home',
			about: 'About',
			projects: 'Projects',
			contact: 'Contact',
		},
		hero: {
			greeting: 'Hi, I am',
			name: 'T1NG4',
			tagline:
				'Developer of Chrome extensions, desktop tools, and projects in the FiveM ecosystem.',
			ctaSite: 'View projects',
			ctaGithub: 'GitHub',
		},
		about: {
			title: 'About',
			body:
				'I build software that solves practical problems—from browser extensions to launchers and community resources. Open source when it makes sense; clear UX and simple maintenance.',
		},
		projects: {
			title: 'Featured projects',
			viewRepo: 'View repository',
		},
		contact: {
			title: 'Contact',
			body: 'The best way to reach me is on GitHub. Social links can be added here.',
			github: 'GitHub profile',
			email: 'Email',
			emailPlaceholder: 'your-email@example.com',
		},
		footer: {
			builtWith: 'Built with Astro',
			langSwitch: 'Português',
		},
		meta: {
			description:
				'T1NG4 portfolio — Chrome extensions, desktop tools, and open-source projects.',
		},
	},
} as const;

export function getLangFromUrl(url: URL): Lang {
	const [, segment] = url.pathname.split('/');
	if (segment === 'en') return 'en';
	return 'pt';
}

export function useTranslations(lang: Lang) {
	return ui[lang];
}

export function pathForLang(lang: Lang, hash = ''): string {
	const base = lang === 'en' ? '/en' : '/';
	return `${base}${hash}`;
}
