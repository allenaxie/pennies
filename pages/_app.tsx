import 'antd/dist/antd.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Layout } from 'antd';
import { Navbar } from '../components';


function MyApp({ Component, pageProps }: AppProps) {
  const { Header, Footer, Sider, Content } = Layout;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  const navToggle = () => {
    setIsNavCollapsed(!isNavCollapsed)
  }

  return (
    <Layout>
      <Sider 
      collapsible 
      className="siderNav"
      collapsed={isNavCollapsed}
      theme="light"
      trigger={null}
      >
        <Navbar isNavCollapsed={isNavCollapsed} navToggle={navToggle}/>
      </Sider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Layout>


  )
}

export default MyApp
