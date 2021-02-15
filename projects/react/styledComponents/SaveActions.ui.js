import styled from 'styled-components';
import { Button } from './Button';


const SaveActions = styled.div`
  display: inline-block;
  margin-left: 1px;
  position: relative;
`;

const SaveActionsSlideButton = styled(Button)`
  height: 32px;
  width: 32px;
  min-width: 32px;
  border-radius: 0px 2px 2px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    border: solid #fff;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 2px;
    transform: rotate(45deg);
  }
`;

const SaveActionsMenu = styled.div`
  position: absolute;
  top: 31px;
  right: 0;
  min-width: 176px;
  z-index: 1111;
  box-shadow: 0 2px 4px rgba(77, 78, 78, 0.25);
  border-radius: 0 0 2px 2px;
  background: ${props => props.theme.colors?.button?.secondary || props.theme.colors?.accent || '#ccc'};
  color: ${props => props.theme.colors.text || '#fff'};
`;

const SaveActionsItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;

  &:hover {
    backdrop-filter: brightness(0.95);
  }
`;

const SaveActionsBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1110;
`;

export {
  SaveActions,
  SaveActionsSlideButton,
  SaveActionsMenu,
  SaveActionsItem,
  SaveActionsBackdrop
};