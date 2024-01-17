export interface IMenu {
  isAuthenticated: boolean
  name: string
  path: string
}

export const menu: IMenu[] = []

export const appConfig = {
  accessTokenName: 'tr_accessToken',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
}
