Simple usage of dropdown:

```jsx
<Dropdown
  closeOnChange
  fluid
  items={['Item no.1', 'Item no.2', 'Item no.3']}
  onChange={i => console.log(i)} />
```

Pointing right

```jsx
initialState = {
  items: [
    {value: 1, text: 'A very long menu'},
    {value: 2, text: 'Another menu'},
    {type: 'divider'},
    {value: 3, text: 'Settings'}
  ]
};

<Dropdown
  inline
  direction='right'
  closeOnChange
  items={state.items}
  onChange={i => console.log(i)}
  trigger={(item, onTrigger) => <Button icon='cog' onClick={onTrigger} /> } />
```

Dropdown with multiple selection:

```jsx
initialState = {
  search: '',
  items: [
    {id: 1, name: 'javascript', selected: false},
    {id: 2, name: 'css', selected: false},
    {id: 3, name: 'html', selected: true},
    {id: 4, name: 'php', selected: true},
    {id: 5, name: '.net', selected: false}
  ]
};

const filter = (item) => {
  return item.name.toLowerCase().search(state.search.toLowerCase()) > -1
};

const selectedLabels = (items) => {
  let value = items.filter(i => i.selected).map(i => i.name).join(', ')
  if (value.length > 18) {
    return value.substr(0, 18) + '...'
  }

  return value
}

<Dropdown
  trigger={(item, onTrigger) => (
    <Group>
      <Button color='#1170c1' icon='hashtag' static />
      <Button color='primary' onClick={onTrigger}>{selectedLabels(state.items) || 'Please select'}</Button>
    </Group>
  )}>
  <Menu>
    <Menu.Header>
      <Input icon='search' type='text' value={state.search} onChange={(e, value) => setState({search: value})} />
    </Menu.Header>
    <Menu height={170}>
    {
      state.items.filter(filter).map((data, i) => {
        return (
          <Menu.Item key={i}>
            <Checkbox color='primary' checked={data.selected} onChange={(evt, chk) => data.selected = chk}>{data.name}</Checkbox>
          </Menu.Item>
        )
      })
    }
    </Menu>
  </Menu>
</Dropdown>
```