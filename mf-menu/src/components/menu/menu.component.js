import React from "react";
//import rg4js from "raygun4js";
import {
  ContactsOutlined,
  DotChartOutlined,
  FlagOutlined,
  ProfileOutlined,
  ShopOutlined,
  TeamOutlined,
  NodeIndexOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  MailOutlined,
  DollarOutlined,
  CodeSandboxOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useTranslation } from "react-i18next";

//import { UserContext } from "../../../../../../../Contexts/UserContext";
//import { useGate } from "statsig-react";
import "./styles.less";

const { Sider } = Layout;
//const isProduction = process.env.REACT_APP_ENV === "production";
const HAS_ROUTES = "hasRoutes";
const HAS_ACCOUNTING = "hasAccounting";

const MenuScene = ({
  history,
  currentUser,
  view,
  hasECommerce,
  featureFlags,
}) => {
  const { t } = useTranslation();
  // const changeView = (viewToGo) => {
  //   if (viewToGo !== "segmenter") {
  //     history.push(`/${viewToGo}`);
  //     if (isProduction && rg4js) {
  //       rg4js("trackEvent", { type: "pageView", path: `/${viewToGo}` });
  //     }
  //   } else {
  //     window.open(process.env.REACT_APP_XAVIER, "_blank");
  //   }
  // };

  return (
    <Sider className="main-menu" trigger={null} collapsible collapsed>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[view]}
        className="main-menu"
      >
        <div className="logo-content">
          <img
            src="https://instaleap.s3.amazonaws.com/logo_black_simple.png"
            className="client-logo"
            alt="client-logo"
          />
        </div>
        <Menu.Item
          key="orders"
          onClick={() => {
            changeView("orders");
          }}
          icon={<ProfileOutlined />}
        >
          <span>{t("menu.jobs-search")}</span>
        </Menu.Item>
        <Menu.Item
          key="alert-management"
          onClick={() => {
            changeView("alert-management/orders");
          }}
          icon={<FlagOutlined />}
        >
          <span>{t("menu.jobs-list")}</span>
        </Menu.Item>
        <Menu.Item
          key="routes"
          onClick={() => {
            changeView("routes");
          }}
          icon={<NodeIndexOutlined />}
        >
          <span>{t("menu.routes")}</span>
        </Menu.Item>
        <Menu.Item
          key="metrics"
          onClick={() => {
            changeView("metrics/order-status");
          }}
          icon={<DotChartOutlined />}
        >
          <span>{t("metrics")}</span>
        </Menu.Item>
        <Menu.Item
          key="users"
          onClick={() => {
            changeView("user-management/users");
          }}
          icon={<TeamOutlined />}
        >
          <span>{t("menu.users")}</span>
        </Menu.Item>
        <Menu.Item
          key="resources"
          onClick={() => {
            changeView("resources/stores");
          }}
          icon={<ContactsOutlined />}
        >
          <span>{t("menu.resources")}</span>
        </Menu.Item>
        <Menu.Item
          key="catalog"
          onClick={() => {
            changeView("catalog");
          }}
          icon={<ShopOutlined />}
        >
          <span>{t("menu.catalog")}</span>
        </Menu.Item>
        <Menu.Item
          key="system-parameters"
          onClick={() => {
            changeView("system-parameters/general");
          }}
          icon={<SettingOutlined />}
        >
          <span>{t("systemParameters")}</span>
        </Menu.Item>
        <Menu.Item
          key="accounting"
          onClick={() => {
            changeView("accounting");
          }}
          icon={<DollarOutlined />}
        >
          <span>{"Accounting"}</span>
        </Menu.Item>
        <Menu.Item
          key="ecommerceAdmin"
          onClick={() => {
            changeView("ecommerceAdmin");
          }}
          icon={<ShoppingCartOutlined />}
        >
          <span>{"e-commerce Admin"}</span>
        </Menu.Item>
        <Menu.Item
          key="wms"
          onClick={() => {
            changeView("wms");
          }}
          icon={<CodeSandboxOutlined />}
        >
          <span>{"WMS"}</span>
        </Menu.Item>
        <Menu.Item
          key="segmenter"
          onClick={() => {
            changeView("segmenter");
          }}
          icon={<MailOutlined />}
        >
          <span>{"segmenter"}</span>
        </Menu.Item>
        <Menu.Item
          key="jonahJameson"
          onClick={() => {
            changeView("jonah-jameson");
          }}
          icon={<MailOutlined />}
        >
          <span>{"Jonah jameson"}</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default MenuScene;
