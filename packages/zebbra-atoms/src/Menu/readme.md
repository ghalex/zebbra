Simple usage of Menu:

```jsx
<Menu onItemClick={(index, data) => console.log(index, data)}>
  <Menu.Item static>
    <Input icon='search' type='text' />
  </Menu.Item>
  <Menu.Item data={{id: 1, name: 'home'}}>
    Home
    <Tag size='small' color='primary'>51</Tag>
  </Menu.Item>
  <Menu.Item data={{id: 2, name: 'contact'}}>
    Contact Us
    <Tag size='small' color='grey'>2</Tag>
  </Menu.Item>
  <Menu.Item data={{id: 3, name: 'blog'}}>Blog</Menu.Item>
  <Menu.Item data={{id: 4, name: 'log-in'}}>Log In</Menu.Item>
</Menu>
```