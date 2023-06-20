import { ReactNode } from "react";
import { DarkmodeButton } from "@b1nd/b1nd-dodam-common-ui";
import { PageTemplateContainer, PageTemplateWrap } from "./style";
import Footer from "../Footer";
import Header from "../Header";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  const onClick = () => {};
  return (
    <>
      <PageTemplateContainer>
        <Header />
        <PageTemplateWrap>{children}</PageTemplateWrap>
        <DarkmodeButton onClick={onClick} isDark={true} />
        <Footer />
      </PageTemplateContainer>
    </>
  );
};

export default PageTemplate;
