const routes = [
  {
    path: '/',
    name: 'editForm',
    component: () => import('../views/EditTemplate.vue')
  },
  {
    path: '/divtable',
    name: 'divtable',
    component: () => import('../views/DivTable.vue')
  },
  {
    path: '/gridtable',
    name: 'gridtable',
    component: () => import('../views/GridTable.vue')
  }
]

export default routes
