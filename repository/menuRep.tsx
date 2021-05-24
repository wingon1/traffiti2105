interface Menu {
    id:number
    path: string
    as : string
    name : string
}

export  const MenuRep: Menu[] = [
    {id:1, path:'/', as:'/', name:'Home'},
    {id:2, path:'/posts', as:'/posts', name:'Posts'},
    {id:3, path:'/about', as:'/about', name:'About'},
]