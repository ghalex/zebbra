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
  menu={(onItemClick) => (
    <Menu onItemClick={onItemClick}>
      <Menu.Header>
        <Input icon='search' type='text' />
      </Menu.Header>
      <Menu.Item icon='home' value='Home'>Home</Menu.Item>
      <Menu.Item icon='star' value='Star'>Star</Menu.Item>
      <Menu.Item icon='reddit' value='Profile'>Profile</Menu.Item>
      <Menu.Item icon='cog' value='Settings'>Setting</Menu.Item>
      <Menu.Item icon='cog' value='LogOut'>Log out</Menu.Item>
    </Menu>
  )}
/>
```