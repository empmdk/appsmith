import AdminConfig from "./config";
import { Redirect, useParams } from "react-router";
import { SettingCategories } from "@appsmith/pages/AdminSettings/config/types";
import { ADMIN_SETTINGS_CATEGORY_DEFAULT_URL } from "../../constants/routes";
import React from "react";
import SettingsForm from "./SettingsForm";
import { authMain as AuthSettings } from "@appsmith/pages/AdminSettings/config/authentication";

const Main = () => {
  const params = useParams() as any;
  const { category, subCategory } = params;
  const isWrapper = AdminConfig.wrapperCategories.includes(
    subCategory ?? category,
  );

  if (isWrapper) {
    switch (subCategory ?? category) {
      case SettingCategories.AUTHENTICATION:
        return <AuthSettings />;
      default:
        return null;
    }
  } else if (
    !Object.values(SettingCategories).includes(category) ||
    (subCategory && !Object.values(SettingCategories).includes(subCategory))
  ) {
    return <Redirect to={ADMIN_SETTINGS_CATEGORY_DEFAULT_URL} />;
  } else {
    return <SettingsForm />;
  }
};

export default Main;
