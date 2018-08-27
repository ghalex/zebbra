Simple usage of dropdown:

```jsx
initialState = {
  selected: null
};

<Dropdown
  color='primary'
  bg='#efefef'
  m={10}
  closeOnChange
  fluid
  items={['Item no.1', 'Item no.2', 'Item no.3']}
  value={state.selected}
  onChange={item => setState({selected: item})} />
```

Pointing right

```jsx
initialState = {
  items: [
    {value: 1, label: 'A very long menu'},
    {value: 2, label: 'Another menu'},
    {type: 'divider'},
    {value: 3, label: 'Settings'}
  ]
};

<Dropdown
  inline
  direction='right'
  closeOnChange
  items={state.items}
  onChange={i => console.log(i)}
  trigger={(item, onTrigger) => <Button variant='success' icon='cog' onClick={onTrigger} /> } />
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
  ],
  selectedItems: [{id: 3, name: 'html', selected: true}, {id: 4, name: 'php', selected: true}]
};

const filter = (item) => {
  return item.name.toLowerCase().search(state.search.toLowerCase()) > -1
};

const toLabels = (items) => {
  let value = items.map(i => i.name).join(', ')
  if (value.length > 18) {
    return value.substr(0, 18) + '...'
  }

  return value
}

const toggle = (item, value) => {
  let selected = state.selectedItems

  if (value) {
    item.selected = true
    selected.push(item)
  } else {
    item.selected = false
    selected = selected.filter(i => i.name !== item.name)
  }

  setState({selectedItems: selected})
}

<Dropdown
  trigger={(item, onTrigger) => (
    <Group>
      <Button color='white' bg='primaryDark' borderColor='primaryDark' icon='hashtag' static />
      <Button variant='primary' onClick={onTrigger}>{toLabels(state.selectedItems) || 'Please select'}</Button>
    </Group>
  )}>
  <Menu>
    <Menu.Header name='header'>
      <Input icon='search' type='text' value={state.search} onChange={(e, value) => setState({search: value})} />
    </Menu.Header>
    <Menu maxHeight={170}>
    {
      state.items.filter(filter).map((data, i) => {
        return (
          <Menu.Item key={i}>
            <Checkbox color='primary' borderColor='primary' m={0} checked={data.selected} onChange={(evt, chk) => toggle(data, chk)}>{data.name}</Checkbox>
          </Menu.Item>
        )
      })
    }
    </Menu>
  </Menu>
</Dropdown>
```