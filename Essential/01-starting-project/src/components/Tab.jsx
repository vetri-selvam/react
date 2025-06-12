export function Tab({buttons, children, buttonContainer = 'menu'}) {
  const ButtonContainer = buttonContainer;
  return <>
    <ButtonContainer>{buttons}</ButtonContainer>
    {children}
    </>;
    
}
