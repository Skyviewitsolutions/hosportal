import React , {useState , useEffect} from "react";
import { IntlProvider } from "react-intl";
import Layout from "./Layout";
import messages from "./messages";
import "./styles/App.scss";

const SideBarComponent = () => {
  const [locale, setLocale] = useState("en");
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
};

// exporting the component ;
export default SideBarComponent;
