import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Link from 'umi/link';

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }}>
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="pie-chart" />
                <span>Helloworld</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
            >
               <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
               <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
               <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
               <Menu.Item key="5"><Link to="/dashboard/tabel">表格</Link></Menu.Item>
               <Menu.Item key="6"><Link to="/dashboard/tabel2">表格2</Link></Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub2"
              title={<span><Icon type="dashboard" /><span>通用</span></span>}>
               <Menu.Item key="1"><Link to="/commen/button">button</Link></Menu.Item>
               <Menu.Item key="2"><Link to="/commen/icon">icon</Link></Menu.Item>
               <Menu.Item key="3"><Link to="/commen/typography">typography</Link></Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub3"
              title={<span><Icon type="appstore" /><span>布局</span></span>}>
               <Menu.Item key="1"><Link to="/display/grid">grid</Link></Menu.Item>
               <Menu.Item key="2"><Link to="/display/outline">outline</Link></Menu.Item>
               <Menu.Item key="3"><Link to="/display/outline2">outline2</Link></Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub4"
              title={<span><Icon type="appstore" /><span>导航</span></span>}>
               <Menu.Item key="1"><Link to="/navigation/affixdemo">affix</Link></Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub5"
              title={<span><Icon type="appstore" /><span>三级菜单</span></span>}>
                <SubMenu title={<span><Icon type="appstore" /><span>二级菜单</span></span>}>
                  <Menu.Item key="1"><Link to="/threemenu/secondmenu/pageone">pageone</Link></Menu.Item>
                </SubMenu>
                  
            </SubMenu>


          </Menu>

          
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}