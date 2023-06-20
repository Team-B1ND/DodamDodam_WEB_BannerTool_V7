import * as S from "./style";
import logo from "../../../assets/Logo/Logo.svg";
import { AiFillInfoCircle } from "react-icons/ai";
import { HEADER_LINKS, HEADER_NEW_LINKS } from "./constant";

const Header = () => {
  const currentSelect = "홈";

  return (
    <S.HeaderContainer>
      <S.HeaderWrap>
        <S.HeaderLogo>
          <img src={logo} alt={"header/headerLogo"} />
        </S.HeaderLogo>
        <S.HeaderItemWrap>
          {HEADER_LINKS.map((link) => (
            <>
              <S.HeaderItem
                isSelect={link.name === currentSelect}
                key={`header/${link.name}Item`}
              >
                <span
                  onClick={() => {
                    window.location.href = link.link;
                  }}
                >
                  {link.name}
                </span>
              </S.HeaderItem>
            </>
          ))}
          {HEADER_NEW_LINKS.map((link) => (
            <>
              <S.HeaderItem
                isSelect={link.name === currentSelect}
                key={`header/${link.name}Item`}
              >
                <span
                  onClick={() => {
                    window.location.href = link.link;
                  }}
                >
                  {link.name}
                </span>
                <S.HeaderNewItemIcon>N</S.HeaderNewItemIcon>
              </S.HeaderItem>
            </>
          ))}
        </S.HeaderItemWrap>
        <S.HeaderRelease>
          <S.HeaderReleaseIcon>
            <AiFillInfoCircle />
          </S.HeaderReleaseIcon>
        </S.HeaderRelease>
      </S.HeaderWrap>
    </S.HeaderContainer>
  );
};

export default Header;
