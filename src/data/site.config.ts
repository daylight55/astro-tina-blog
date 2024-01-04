interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'daylight55', // Site author
	title: '陽のあたらないSomething', // Site title.
	description: '田舎暮らしエンジニアの独り言、時々サブカル。', // Description to display in the meta tags
	lang: 'ja',
	ogLocale: 'ja_JP',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
