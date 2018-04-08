import styled, { css } from 'styled-components'
import { px, size, isColor } from '@zebbra/utils'

const isDelete = p => {
  if (!p.delete) return
  return css`
    width: 1.915em;
    padding: 0;
    &::before,
    &::after {
      background-color: currentColor;
      content: "";
      display: block;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
      transform-origin: center center;
    }
    &::before {
      height: 1px;
      width: 50%;
    }
    &::after {
      height: 50%;
      width: 1px;
    }
  `
}

const isIcon = ({ icon }) => {
  if (!icon) return
  return css`
    padding: 0;
    & .icon {
      margin: 0;
    }
  `
}

export const Tag = styled.div.attrs({
  tag: p => ({...p.theme.components.tag})
})`
  position: relative;
  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => px(size(p) * 0.75)};
  font-weight: normal;
  padding: 0 0.75rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: ${p => p.tag.height};
  border: ${p => p.tag.border};
  border-radius: ${p => px(p.tag.borderRadius)};
  line-height: 1.5;
  vertical-align: middle;
  pointer-events: ${p => p.isDelete ? 'auto' : 'none'};

  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }

  ${isColor}
  ${isIcon}
  ${isDelete}
`
