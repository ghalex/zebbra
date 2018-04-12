Simple usage:

```jsx
<Dropdown
  closeOnChange
  trigger={(item, onTrigger) => (
    <Group>
      <Button color='#1170c1' icon={item && item.icon ? item.icon : 'circle-thin'} static />
      <Button color='primary' onClick={onTrigger}>{item ? item.value : 'Please Select'}</Button>
    </Group>
  )}
  menu={(open, onItemClick) => (
    <Menu onItemClick={onItemClick}>
      <Menu.Item static>
        <Input icon='search' type='text' />
      </Menu.Item>
      <Menu.Item icon='star' value='Red'>Star</Menu.Item>
      <Menu.Item icon='reddit' value='Profile'>Profile</Menu.Item>
      <Menu.Item icon='cog' value='Settings'>Setting</Menu.Item>
    </Menu>
  )}
/>
```