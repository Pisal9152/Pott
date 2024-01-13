// import "./LayoutDashbord.css";
// import nit from "../../assent/logo/nit.png";
// import { useNavigate, Outlet } from "react-router-dom";

// function LayoutDashbord() {
//   const navigate = useNavigate();
//   const onclickMenu = (routeName) => {
//     // alert(routeName);
//     navigate(routeName);
//   };
//   const onclicktowebsite = () => {
//     window.location.href = "/";
//   };

//   return (

//     <div>
//       <div className="mainHeaderDashbord">
//         <div className="brandconten">
//           <img
//             src={nit} //access frome local
//             //  src{"https://cdn.logo.com/hotlink-ok/logo-social.png"}
//             style={{ width: 90, height: 90 }}
//           />
//           <div>
//             <div className="textBrand">NIT Cambodia</div>
//             <div className="textsub">NIT Cambodia</div>
//           </div>
//         </div>
//         <div className="menuconten">
//           <ul className="menu">
//             <li onClick={() => onclickMenu("/dashbord")} className="menuItem">
//               Home
//             </li>
//             <li
//               onClick={() => onclickMenu("/dashbord/cart")}
//               className="menuItem"
//             >
//               Cart
//             </li>
//             <li
//               onClick={() => onclickMenu("/dashbord/product")}
//               className="menuItem"
//             >
//               Product
//             </li>
//             <li
//               onClick={() => onclickMenu("/dashbord/category")}
//               className="menuItem"
//             >
//               Category
//             </li>
//             <li onClick={() => onclickMenu("/login")} className="menuItem">
//               Login
//             </li>
//             <li onClick={onclicktowebsite} className="menuItem">
//               To Website
//             </li>
//           </ul>
//         </div>
//       </div>
//       <Outlet />
//     </div>
//   );
// }

// export default LayoutDashbord;


// import React, { useState } from 'react';

// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from '@ant-design/icons';
// import { Layout, Menu, Button, theme } from 'antd';
// import { Outlet } from 'react-router-dom';
// const { Header, Sider, Content } = Layout;
// const LayoutDashbord = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   return (
//     <Layout>
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="demo-logo-vertical" />
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           items={[
//             {
//               key: '1',
//               icon: <UserOutlined />,
//               label: 'nav 1',
//             },
//             {
//               key: '2',
//               icon: <VideoCameraOutlined />,
//               label: 'nav 2',
//             },
//             {
//               key: '3',
//               icon: <UploadOutlined />,
//               label: 'nav 3',
//             },
//           ]}
//         />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         >
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//               fontSize: '16px',
//               width: 64,
//               height: 64,
//             }}
//           />
//         </Header>
//         <Content
//           style={{
//             margin: '24px 16px',
//             padding: 24,
//             minHeight: 280,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//           }}
//         >
//           Content
//           <Outlet/>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };
// export default LayoutDashbord;