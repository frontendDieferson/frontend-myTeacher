import { HeaderContainer, Logo } from "./header.style";

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Logo src="/assets/myteacherLogo.png" />
      </div>

      <p>Encontre o professor perfeito!</p>
    </HeaderContainer>
  );
};
