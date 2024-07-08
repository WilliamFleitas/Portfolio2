import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import PortfolioPage from './components/PortfolioPage'
import { Helmet } from 'react-helmet'
import './config/i18next-config'

const PUBLIC_URL = ''

const AppRoutes = () => {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Helmet>
        <meta
          property='og:title'
          content='Full Stack Web Developer - Portfolio'
        />
        <meta property='og:url' content='https://williamcabrera.vercel.app' />
        <meta property='og:description' content='Take a look at my work!' />
        <meta
          property='og:image'
          content={
            'https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FPortfolio.png.png?alt=media&token=c71d845a-c3f5-486b-8f49-a18ecfa0a3f0'
          }
        />
        <meta property='og:type' content='website' />
        <meta name="twitter:url" content="https://williamcabrera.vercel.app" />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Full Stack Web Developer - Portfolio'
        />
        <meta name='twitter:description' content='Take a look at my work!' />
        <meta
          name='twitter:image'
          content='https://firebasestorage.googleapis.com/v0/b/assets-870ea.appspot.com/o/portfolio2%2FPortfolio.png.png?alt=media&token=c71d845a-c3f5-486b-8f49-a18ecfa0a3f0'
        />
      </Helmet>
      <Routes>
        <Route index element={<Navigate replace to='/portfolio' />} />
        <Route path='/portfolio/*' element={<PortfolioPage />} />
        <Route path='*' element={<>NOT FOUND</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
