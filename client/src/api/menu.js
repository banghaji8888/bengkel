const Menu = [
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'dashboard'
  },
  {
    title: 'Servis',
    group: 'apps',
    icon: 'build',
    name: 'servis'
  },
  {
    title: 'Karyawan',
    group: 'apps',
    icon: 'assignment_ind',
    name: 'karyawan'
  },
  {
    title: 'Barang',
    group: 'apps',
    icon: 'work',
    name: 'barang'
  },
  {
    title: 'Pages',
    group: 'extra',
    icon: 'list',
    items: [
      { name: 'Login', title: 'Login', component: 'login' }
    ]
  }
]
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase()
      let textB = y.title.toUpperCase()
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
    })
  }
})

export default Menu
