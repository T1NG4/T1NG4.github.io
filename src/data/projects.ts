export type Project = {
	slug: string;
	repo: string;
	url: string;
	tags: string[];
	title: { pt: string; en: string };
	description: {
		pt: string;
		en: string;
	};
};

export const projects: Project[] = [
	{
		slug: 'ripper-search',
		repo: 'T1NG4/ripper-search',
		url: 'https://github.com/T1NG4/ripper-search',
		tags: ['chrome-extension', 'typescript'],
		title: {
			pt: 'Ripper Search',
			en: 'Ripper Search',
		},
		description: {
			pt:
				'Extensão Chrome para buscar no fórum Ripper.Store a partir de Booth, Gumroad e outras lojas.',
			en:
				'Chrome extension to search the Ripper.Store forum from Booth, Gumroad, and other storefronts.',
		},
	},
	{
		slug: 'tgs-zgraphic-public',
		repo: 'T1NG4/TGS-Zgraphic-Public',
		url: 'https://github.com/T1NG4/TGS-Zgraphic-Public',
		tags: ['desktop', 'launcher'],
		title: {
			pt: 'TGS Zgraphic (público)',
			en: 'TGS Zgraphic (public)',
		},
		description: {
			pt: 'Repositório público do ecossistema Zgraphic Launcher — distribuição e documentação aberta.',
			en: 'Public repository for the Zgraphic Launcher ecosystem — open distribution and documentation.',
		},
	},
	{
		slug: 'tgs-community',
		repo: 'T1NG4/TGS-Community',
		url: 'https://github.com/T1NG4/TGS-Community',
		tags: ['community', 'docs'],
		title: {
			pt: 'TGS Community',
			en: 'TGS Community',
		},
		description: {
			pt: 'Hub da comunidade TGS — recursos, guias e ponto de encontro para projetos relacionados.',
			en: 'TGS community hub — resources, guides, and a home for related projects.',
		},
	},
	{
		slug: 'c0-4',
		repo: 'T1NG4/C0-4',
		url: 'https://github.com/T1NG4/C0-4',
		tags: ['code'],
		title: {
			pt: 'C0-4',
			en: 'C0-4',
		},
		description: {
			pt: 'Projeto de código aberto — detalhes no repositório.',
			en: 'Open-source project — see the repository for details.',
		},
	},
	{
		slug: 's01-l1',
		repo: 'T1NG4/S01-L1',
		url: 'https://github.com/T1NG4/S01-L1',
		tags: ['code'],
		title: {
			pt: 'S01-L1',
			en: 'S01-L1',
		},
		description: {
			pt: 'Projeto de código aberto — detalhes no repositório.',
			en: 'Open-source project — see the repository for details.',
		},
	},
];
