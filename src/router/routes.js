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
  },
  {
    path: '/printtable',
    name: 'printtable',
    component: () => import('../views/PrintTemplate.vue')
  }
]

export default routes
